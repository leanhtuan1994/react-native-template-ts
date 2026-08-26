# Repair and verification

## Context

- `.github/workflows/expo-doctor.yml` runs a clean development prebuild on Ubuntu.
- `app-icon-badge@0.1.2` starts asynchronous badge generation, rewrites Expo icon paths immediately, and suppresses errors.
- Its `addBadge` helper also returns before `Jimp.writeAsync` completes.
- Upstream issue 42 reports the same Android/EAS-only `Buffer <null>` failure.

## Files

- `app.config.ts`
- `app-icon-badge.config.js`
- `scripts/generate-app-icon-badges.js`
- `patches/app-icon-badge@0.1.2.patch`
- focused regression test near the local plugin or package integration
- `package.json`
- `pnpm-lock.yaml`

## Steps

- [x] Patch `addBadge` so its promise resolves only after the output file is complete.
- [x] Generate badges before Expo starts, then point app config at the completed files.
- [x] Stop swallowing generation errors.
- [x] Generate badges during dependency installation for remote EAS CNG builds.
- [x] Add a deterministic test for the write-completion promise contract.
- [x] Align Doctor-reported Expo patch dependencies.

## Validation

- Run the regression test first.
- Run clean Android prebuild and the project prebuild script.
- Run Expo Doctor, full Jest, lint, and typecheck.
- Inspect generated Android icons and resolved Expo config.

## Risks and rollback

- Mod ordering could affect when built-in icon generation reads config. Verify through a clean Android prebuild and generated resources.
- Rollback is limited to the local plugin, pnpm patch, test, and patch-version dependency updates.
