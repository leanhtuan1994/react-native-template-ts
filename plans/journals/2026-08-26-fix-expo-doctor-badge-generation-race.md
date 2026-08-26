---
title: Fix Expo Doctor badge generation race
date: 2026-08-26
summary: 'Made app-icon badge writes awaitable, moved generation ahead of Expo/EAS prebuild, and aligned Expo SDK 57 patches.'
---

# Fix Expo Doctor badge generation race

## What happened

GitHub Actions intermittently failed Android prebuild with `Could not find MIME for Buffer <null>`. `app-icon-badge@0.1.2` published generated paths before Jimp finished writing and swallowed failures; Expo Doctor also had nine independent SDK 57 patch mismatches.

## Decision

Patch `addBadge` to await `writeAsync`, generate environment/version-keyed badge assets before Expo starts and during EAS dependency installation, and remove the racy config plugin. Keep production icons unbadged. Upgrade only Doctor-requested Expo patch versions.

## Evidence

Node 20 prebuild passed from cold cache; Doctor passed 21/21; frozen staging install produced both badges; full Jest, typecheck, focused lint, dependency check, and independent review passed.

## Next steps

Upstream the await fix to `obytes/app-icon-badge` when practical. Whole-repository lint has two unrelated pre-existing Tailwind ordering errors.

> Historical work record — not durable authority. Prefer docs/specs/ADRs for current decisions.
