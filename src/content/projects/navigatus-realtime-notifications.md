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
---

At Navigatus, I built real-time notifications for the operational platform. The work combines live delivery with durable inbox storage and recipient authorization.

## Live delivery and durable storage

The notification system uses server-sent events for real-time updates and Redis Pub/Sub for event distribution. Durable inbox storage keeps notifications available beyond the live delivery channel.

## Recipient authorization

I implemented recipient authorization as part of notification delivery so the system can control who receives each update.

## Background processing

Idempotent background jobs form part of the notification system. They support processing that can be repeated safely when jobs are retried.

## My contribution

I developed the real-time notification flow across SSE, Redis Pub/Sub, inbox storage, authorization, and background jobs as part of my software engineering role at Navigatus.
