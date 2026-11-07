---
title: "PulseDeck: Scalable Event Ingestion for Autonomous Agents"
description: "Architecting a distributed logging and trace ingestion pipeline capable of absorbing 25,000 events per second, with sub-second analytical querying for autonomous agent reasoning loops."
category: "Production system"
timeline: "6 months · Q3–Q4 2024"
role: "Principal Architect & Lead"
stack:
  - Go
  - ClickHouse
  - Kafka
  - Rust
metrics:
  - label: Throughput
    value: 25k eps
    detail: Sustained peak ingest
  - label: P95 latency
    value: < 12ms
    detail: Aggregation queries
  - label: Availability
    value: 99.99%
    detail: 12-month SLA
  - label: Cost delta
    value: −65%
    detail: Versus SaaS APM baseline
---

## The challenge: _the cardinality explosion_ of agentic traces

Standard observability suites assume microservices communicate over short-lived, synchronous HTTP cycles with relatively predictable spans. Autonomous AI agents completely invert this pattern.

- **Unbounded recursive call stacks.** A single user prompt can trigger 30 or more sequential tool invocations across reasoning steps, resulting in multi-minute trace lifecycles.
- **Extreme metadata cardinality.** Every trace frame captures temperature parameters, raw prompts, structured tool calls, dynamic token counts, and intermediate vector scores.
- **Cost-prohibitive ingestion.** Raw JSON payloads at 20 million tokens daily led to five-figure monthly metrics bills, forcing compromises on logging resolution.

The directive was clear: create an ingestion backbone capable of accepting arbitrary nested JSON from Python and TypeScript SDKs, indexing high-cardinality keys, and surfacing analytical traces in under 20 milliseconds.

## System architecture

<p class="eyebrow">Diagram v2.4 · Ingest pipeline</p>

<figure class="architecture-figure">
  <div class="content-panel pipeline" aria-label="Event ingestion pipeline">
    <ol class="pipeline-stages">
      <li>
        <span class="stage-label">01 · Edge ingestion</span>
        <strong>Go HTTP gateway</strong>
        <span>Zero-allocation pool</span>
        <span>20 instances</span>
      </li>
      <li>
        <span class="stage-label">02 · Partitioned buffer</span>
        <strong>Kafka cluster</strong>
        <span>32 partitions</span>
        <span>Snappy compression</span>
      </li>
      <li>
        <span class="stage-label">03 · Batching &amp; flush</span>
        <strong>Rust ingestion</strong>
        <span>5,000-span batches</span>
        <span>50ms flush interval</span>
      </li>
    </ol>
    <div class="pipeline-destinations">
      <div>
        <span class="stage-label">↓ Columnar storage</span>
        <strong>ClickHouse</strong>
        <span>Index by organization, agent, date, and trace</span>
      </div>
      <div>
        <span class="stage-label">↓ Live streaming</span>
        <strong>Redis fanout worker</strong>
        <span>SSE and webhooks for evaluation monitors</span>
      </div>
    </div>
  </div>
  <figcaption>
    Figure 1. Client SDK events enter the Go gateway, pass through Kafka and Rust workers, and
    reach analytical storage and live monitors.
  </figcaption>
</figure>

## Key engineering _breakthroughs_

### 01 · Zero-allocation JSON lexing

Go’s default `encoding/json` reflection incurs severe heap churn at 25,000 requests per second. A customized byte-scanning parser uses `sync.Pool` allocations to extract mandatory trace keys such as `agent_id`, `step_type`, and `duration_ms` directly from raw slices without instantiating intermediary maps.

### 02 · Multi-stage micro-batching in Rust workers

ClickHouse performs best when fed large row blocks rather than single-record transactions. The consumer pipeline flushes on whichever threshold arrives first: **5,000 pending spans** or a **50ms timeout**. Under peak bursts, this reduced disk I/O operations by 94% compared to standard batching.

### 03 · Distributed leases for webhook aggregation

An optimistic Redis token lease prevents duplicate alerts when thousands of agent subtasks fail concurrently. The first worker acquires an atomic lease, aggregates cascading errors for three seconds, and fires a single synthesized webhook.

## Code excerpt

<p class="eyebrow code-filename">internal/ingest/buffer_worker.go</p>

```go
package ingest

// Run batches telemetry by size or elapsed time.
func (w *BatchBufferWorker) Run(ctx context.Context) {
    ticker := time.NewTicker(w.interval)
    defer ticker.Stop()

    batch := make([]*AgentSpan, 0, w.flushSize)

    for {
        select {
        case <-ctx.Done():
            w.flushRecords(batch)
            return

        case span, ok := <-w.incoming:
            if !ok {
                w.flushRecords(batch)
                return
            }
            batch = append(batch, span)
            if len(batch) >= w.flushSize {
                w.flushRecords(batch)
                batch = batch[:0]
            }

        case <-ticker.C:
            if len(batch) > 0 {
                w.flushRecords(batch)
                batch = batch[:0]
            }
        }
    }
}
```

The flush loop consumes spans until either the batch fills or the timer fires.

## Outcomes & learnings

After migration, PulseDeck ingested over **4.2 billion agent events** during its inaugural quarter without dropping a single packet. Tailored columnar compression for LLM tokens and structured JSON achieved an **8.4:1** storage compression ratio on ClickHouse volumes.

> When designing for agentic workloads, tool execution is dynamic, loops are non-deterministic, and payloads carry immense textual context. Optimize for ingestion throughput first, then defer deep parsing to read-time materialized views to retain sub-second latency at scale.
