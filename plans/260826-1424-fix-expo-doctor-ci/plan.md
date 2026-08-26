---
title: Fix Expo Doctor CI
status: completed
priority: P1
effort: medium
branch: main
tags: [expo, ci, react-native]
created: 2026-08-26
---

# Fix Expo Doctor CI

Status: completed

## Outcome

The Expo Doctor GitHub Action completes prebuild and doctor checks on a clean Linux runner.

## Constraints and non-goals

- Preserve development and staging app-icon badges.
- Keep Expo configuration and public application contracts unchanged.
- Limit dependency changes to Expo SDK 57 patch alignment reported by Expo Doctor.
- Do not absorb unrelated CI, coverage, or documentation cleanup.

## Phases

- [x] [Repair badge generation race](phase-01-repair-and-verify.md)
- [x] Align the nine Expo patch dependencies reported by Doctor.
- [x] Re-run prebuild, Doctor, focused regression coverage, lint, typecheck, and tests.
- [x] Review the complete diff and affected CI callers.

## Dependencies

- Phase 2 follows the badge repair so prebuild can reach Doctor reliably.
- Verification follows both changes and uses the same commands as GitHub Actions.

## Acceptance criteria

- [x] Badge generation does not publish an icon path before its image write completes.
- [x] A deterministic regression test fails against the unpatched dependency behavior.
- [x] `pnpm run prebuild` and `pnpm run doctor` exit successfully.
- [x] Tests, focused lint, and typecheck pass with no public contract changes.
