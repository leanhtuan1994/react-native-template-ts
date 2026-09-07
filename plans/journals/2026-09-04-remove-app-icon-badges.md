---
title: Remove app icon badges
date: 2026-09-04
summary: Removed environment/version ribbons from all app icons and retired the badge generation pipeline.
---

# Remove app icon badges

## What happened

Development launcher artwork resolved to a generated image containing
`DEVELOPMENT` and version `10.0.1`. Non-production Expo config selected
version-keyed output from `app-icon-badge`, generated during install, prebuild,
and native run commands.

## Decision

Use `assets/icon.png` and `assets/adaptive-icon.png` for development,
staging, and production. Remove the generator, package patch, dependency,
lifecycle hooks, and obsolete write-completion test. Add config regression
coverage and update current setup docs.

## Verification

Expo config resolves the source assets in all three environments. Clean
development prebuild and iOS build passed. The installed iOS Home Screen icon is
visibly unbadged. Jest, TypeScript, focused ESLint, frozen offline install, and
independent review passed. Whole-repository lint still has two unrelated
pre-existing class-order errors.

## Next steps

None.

> Historical work record — not durable authority. Prefer docs/specs/ADRs for current decisions.
