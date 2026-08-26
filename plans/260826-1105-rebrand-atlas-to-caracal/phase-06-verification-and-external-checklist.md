---
phase: 6
title: 'Verification and External Checklist'
status: pending
priority: P1
effort: '3h'
dependencies: [2, 3, 4, 5]
---

# Phase 6: Verification and External Checklist

## Overview

Prove the rebrand is complete and consistent across the repo, then hand the user a checklist of
the external actions this plan deliberately does not execute (GitHub rename, npm publish, EAS,
Vercel) — per the user's decision that those stay manual.

## Requirements

**Functional**

- A single verification sweep confirms zero brand residue repo-wide.
- All quality gates pass: lint, type-check, translations, tests, prebuild, docs build.
- The external checklist is written to a file and handed over unexecuted.

**Non-functional**

- No external service is contacted. No `gh`, `npm publish`, `eas`, or `vercel` command runs.

## Architecture

Verification runs in three layers:

```
Layer 1  static  →  grep sweep for atlas / obytes / blurple across the whole tree
Layer 2  build   →  pnpm check-all, pnpm prebuild --clean, cd docs && pnpm build
Layer 3  visual  →  app boots on simulator; docs render in light + dark
```

Layer 3 uses the argent MCP tooling already configured for this repo (see
`.claude/rules/argent.md`) — boot a simulator, launch the app, screenshot to confirm the new
icon and splash appear.

## Related Code Files

- Create: `plans/260826-1105-rebrand-atlas-to-caracal/external-checklist.md` — the handoff doc
- Read only: everything else

## Implementation Steps

1. **Static sweep.** Run:
   ```
   grep -rin "atlas\|obytes\|blurple" . \
     --exclude-dir={node_modules,.git,coverage,.expo,plans,ios,android} \
     --exclude={pnpm-lock.yaml,release-manifest.json}
   ```
   Expect zero matches. Investigate every hit — do not suppress.
2. **Native sweep.** Separately check `ios/` and `android/` — both are gitignored local
   artifacts (0 tracked files), so this is a local-hygiene check, not a review gate. Confirm
   Phase 3's `prebuild --clean` left no `ios/AtlasApp*` directory and no
   `android/app/src/main/java/com/atlas/` path. Delete any survivor manually.
3. **Quality gates.** Run in order, fixing before moving on:
   - `pnpm lint`
   - `pnpm type-check`
   - `pnpm lint:translations`
   - `pnpm test`
   - `pnpm prebuild --clean`
   - `cd docs && pnpm build`
4. **Asset regeneration check.** Run `pnpm brand:assets` and confirm `git status` shows no
   diff — proving the committed PNGs match what the pipeline produces.
5. **Visual verification.** Boot an iOS simulator via argent, `pnpm ios`, screenshot the home
   screen. Confirm the app icon, splash, and app name read Caracal.
6. **Docs visual verification.** `cd docs && pnpm dev`, inspect light and dark mode: palette,
   fonts, nav mark, favicon, hero gradient.
7. **Write the external checklist** (content below) and hand it to the user.

## External checklist (manual — not executed by this plan)

### GitHub

- [x] Rename `leanhtuan1994/react-native-atlas` → `leanhtuan1994/react-native-caracal`
- [x] Rename `leanhtuan1994/react-native-template-atlas` if it is a separate live repo
      (the `source` git remote points at it)
- [x] Update local remotes:
      `git remote set-url origin git@github-leanhtuan1994:leanhtuan1994/react-native-caracal.git`
      and the same for `source`
- [x] Update the repo description, topics, and social preview image (use the new `og.jpg`)
- [x] Verify GitHub's rename redirect covers the API path `cli/clone-repo.js` uses

### npm

- [x] ~~Check `create-caracal-app` availability~~ — **verified available** (registry 404)
- [x] Publish `create-caracal-app@3.0.0` from `cli/`
- [x] `npm deprecate create-atlas-rn-app "Renamed to create-caracal-app"` — the old package
      **is live at 2.0.3**, so this matters
- [x] Verify `npx create-caracal-app test-app` works end to end from a clean machine

### Expo / EAS

- [x] Decide: new EAS project for `caracalapp`, or rename the existing one
- [x] If new: create it, copy the new `EAS_PROJECT_ID` into `env.js`
- [x] Note that build history and OTA update channels do not migrate
- [x] Re-register `com.caracal` bundle ID in the Apple Developer portal if store builds are planned
- [x] Update EAS secrets / environment variables that reference the old identifiers

### Vercel (docs)

- [x] Rename the Vercel project from the Atlas name
- [x] Update the production domain if it contains "atlas"
- [x] Add a redirect from the old docs domain to the new one
- [x] Confirm the reconnected GitHub repo (post-rename) still triggers deploys

### Repo directory

- [x] The local working directory is still named `react-native-template-obytes` — two rebrands
      behind. Rename it to `react-native-caracal` for consistency.

## Success Criteria

- [x] Static sweep returns zero matches for `atlas`, `obytes`, and `blurple` apart from the two
      documented intentional exceptions (LICENSE notice; live docs hostname)
- [x] `pnpm check-all` passes
- [x] `pnpm prebuild --clean` succeeds; `ios/` and `android/` carry `com.caracal` and no
      Atlas-named directory survives
- [x] `cd docs && pnpm build` succeeds
- [x] `pnpm brand:assets` produces no git diff
- [x] App boots on simulator showing the Caracal icon, splash, and name
- [x] Docs render correctly in both light and dark mode
- [x] `external-checklist.md` exists and every item is unchecked (user executes them)

## Risk Assessment

**Stale native directories, not a diff problem** — `ios/` and `android/` are gitignored with
zero tracked files, so there is no diff to review. The real hazard is `prebuild --clean`
leaving an Atlas-named directory behind alongside the new Caracal one, which would make
`pnpm xcode` open the wrong workspace. Step 2 covers this.

**The static sweep excludes `plans/`** — this plan directory itself is full of the word "atlas"
by necessity. That is correct and expected; do not clean it.

**Scaffolded projects inherit Caracal branding by design** — a `create-caracal-app` smoke test
will show `assets/brand/caracal-*.svg` in the generated project. That is the accepted
behavior from Phase 4, not a leak to fix.

**External steps have real ordering constraints** — renaming the GitHub repo before publishing
the new CLI means `create-caracal-app` clones a repo that exists; doing it the other way round
gives a window where the CLI is broken. The checklist is ordered accordingly.
