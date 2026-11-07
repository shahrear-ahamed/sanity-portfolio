---
title: Navigatus Workflow Automation
description: Background processing and operational integrations that turn manual, multi-step work into recoverable asynchronous workflows.
category: Backend & Automation
timeline: March 2025–present · Navigatus
role: Software Engineer
stack:
  - Redis
  - BullMQ
  - Xero API
metrics:
  - label: Weekly processing
    value: 65+ hours → ~2 hours
    detail: Automated multi-step operational workflows
  - label: Operational scope
    value: ~200 staff · ~300 participants
    detail: Daily care operations supported by the systems
---

At Navigatus, I build software that supports day-to-day care operations. My work includes automating multi-step operational workflows and integrating operational data with finance and payroll systems.

## Moving long-running work into the background

I introduced Redis and BullMQ background processing for long-running workflows. Alongside the jobs themselves, I defined retry, failure-recovery, state-tracking, and idempotency patterns used across the system.

These patterns make the workflow's progress and failures explicit, rather than leaving operational staff to repeat manual execution. Workflow automation reduced weekly processing time from 65+ hours to approximately 2 hours and eliminated most manual execution.

## Connecting operations and accounting

I integrated Xero APIs into finance and payroll workflows to synchronize operational and accounting data. The integration reduced manual reconciliation and duplicate data entry.

## Supporting daily operations

My broader work at Navigatus includes participant management, NDIS plans, medication tracking, and staff rostering. These systems support daily operations across approximately 200 staff and 300 participants.

## My contribution

I own production features from problem definition through implementation and operational rollout, combining background processing with the integrations needed to make those features useful in practice.
