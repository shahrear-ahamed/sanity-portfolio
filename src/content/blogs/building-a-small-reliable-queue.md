---
title: Building a Small, Reliable Queue
description: Practical patterns for retries, idempotency, and observability in background job queues.
date: 2026-11-07
category: Distributed Systems
subtitle: Start with a simple worker, then make failure predictable.
---

Background queues let an HTTP request finish quickly while slow, multi-step work runs asynchronously. The hard part isn't enqueueing the first job—it's making sure the hundredth failure is safe to retry and easy to diagnose.

## Start with one job

A background queue separates accepting work from executing it. When an application generates a weekly report or syncs an invoice, the request stores a job payload and a worker processes it out of band.

The smallest useful job contains a stable identifier and the minimum context needed to fetch fresh state from the database.

```json
{
  "id": "report-123",
  "type": "generate-report",
  "accountId": "acct-482"
}
```

## Plan for a second attempt

A worker can crash after writing a report to storage but before acknowledging the job. When that happens, the queue delivers the job a second time. Using the job identifier as an idempotency key lets the retry detect the completed work instead of duplicating side effects.

- Persist the job state before starting external side effects.
- Retry transient failures with exponential backoff and a bounded attempt count.
- Move exhausted jobs to a dead-letter state for inspection rather than dropping them.

> A retry should repeat the work safely and leave enough context to explain what happened.

## Make the queue observable

Track queue depth, wait time, execution duration, and failure rate. A queue with zero errors can still be unhealthy if its oldest waiting job has been stuck for an hour.

## Applying this in production

The [Navigatus workflow automation project](/projects/navigatus-workflow-automation/) covers how I applied these retry, state-tracking, and idempotency patterns with Redis and BullMQ in production.
