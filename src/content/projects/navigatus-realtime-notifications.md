---
title: Navigatus Real-Time Notifications
description: Real-time notifications combining server-sent events, Redis Pub/Sub, durable inbox storage, and authorized delivery.
category: Real-Time Systems
timeline: March 2025–present · Navigatus
role: Software Engineer
stack:
  - SSE
  - Redis Pub/Sub
  - Background jobs
metrics:
  - label: Delivery channel
    value: Live SSE
    detail: Server-sent events backed by Redis Pub/Sub fan-out
  - label: Reliability
    value: Durable inbox
    detail: Persisted notifications plus idempotent retryable jobs
---

At Navigatus, I built real-time notifications for the operational platform. The system combines live delivery over server-sent events (SSE) with durable inbox storage and per-recipient authorization.

## Live delivery and durable storage

Live connections alone are fragile—users refresh tabs, switch networks, or go offline. I paired server-sent events for instant updates and Redis Pub/Sub for cross-process fan-out with durable inbox storage so notifications remain available after reconnects.

<figure class="architecture-figure">
  <div class="pipeline content-panel">
    <ol class="pipeline-stages">
      <li>
        <span class="stage-label">Producer</span>
        <strong>Idempotent Job</strong>
        <span>Persists notification &amp; checks recipients</span>
      </li>
      <li>
        <span class="stage-label">Fan-out</span>
        <strong>Redis Pub/Sub</strong>
        <span>Broadcasts authorized events</span>
      </li>
      <li>
        <span class="stage-label">Client</span>
        <strong>SSE + Inbox</strong>
        <span>Live push with durable fallback</span>
      </li>
    </ol>
  </div>
  <figcaption>Notification pipeline combining durable storage with live SSE delivery.</figcaption>
</figure>

## Recipient authorization

Not every operational event belongs to every user. I implemented recipient authorization on the delivery path so the system enforces who can receive or read each notification before publishing or streaming it.

## Background processing

Idempotent background jobs handle notification generation and fan-out, ensuring retries after transient failures do not create duplicate inbox entries.

## My contribution

I designed and implemented the notification flow across SSE, Redis Pub/Sub, durable inbox persistence, recipient authorization, and idempotent background jobs at Navigatus.
