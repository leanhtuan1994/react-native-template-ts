---
phase: 4
title: 'CLI Package Rebrand'
status: pending
priority: P2
effort: '2h'
dependencies: [3]
---

# Phase 4: CLI Package Rebrand

## Overview

Rebrand the scaffolding CLI from `create-atlas-rn-app` to `create-caracal-app`: package
metadata, the repo it clones, the project-setup string replacements it performs on generated
projects, and its README.

Depends on Phase 3 because `cli/setup-project.js` rewrites the exact identifier strings that
Phase 3 establishes — the two must agree or every scaffolded project is broken.

## Requirements

**Functional**

- Package name, `bin` entry, keywords, homepage, and repository URL all say Caracal.
- `clone-repo.js` fetches from the renamed GitHub repo.
- `setup-project.js` replacement rules match Phase 3's new identifier strings exactly.
- Console output and the docs URL are rebranded.

**Non-functional**

- The CLI's own version is bumped (currently `2.0.3`) — a package rename plus behavior change
  warrants at least a minor bump, arguably `3.0.0`.

## Architecture

`cli/setup-project.js` currently performs this cascade on the cloned template:

```js
.replace(/AtlasApp/gi, projectName)
.replace(/com.atlas/gi, `com.${projectName.toLowerCase()}`)
.replace(/atlas/gi, 'expo-owner')
```

Note the third rule is a catch-all that rewrites _every remaining_ `atlas` to `expo-owner` —
which is how `EXPO_ACCOUNT_OWNER` gets templated. After Phase 3 these become:

```js
.replace(/CaracalApp/gi, projectName)
.replace(/com.caracal/gi, `com.${projectName.toLowerCase()}`)
.replace(/caracal/gi, 'expo-owner')
```

The ordering matters: `CaracalApp` must be replaced before the bare `caracal` catch-all, or the
app name gets mangled into `expo-ownerApp`. Preserve the existing order.

**Scope verified:** `updateProjectConfig` applies this chain to **`env.js` only** (`configPath`),
not to a file tree. The catch-all is therefore safe — it cannot reach `assets/brand/*.svg` or
any other file. No scoping work is needed.

### Scaffolded projects keep the brand assets (decision)

`FILES_TO_REMOVE` is `['.git', 'README.md', 'ios', 'android', 'docs', 'cli', 'LICENSE']` — it
does **not** remove `assets/brand/`, `scripts/render-brand-assets.mjs`, or `plans/`. Decision:
**leave it that way.** A scaffolded project inherits the Caracal mark SVGs and a working
`pnpm brand:assets` pipeline, serving as a replaceable placeholder and a ready-made asset
workflow.

The consequence is that a freshly scaffolded app ships with Caracal's logo until the user
swaps it. Mitigate with documentation, not deletion: `README-project.md` (which the CLI renames
to the new project's `README.md`) must gain a short "Replace the brand assets" section pointing
at `assets/brand/` and the `brand:assets` script.

## Related Code Files

- Modify: `cli/package.json` — `name`, `bin`, `description`, `homepage`, `repository.url`, `keywords`, `version` bump (6 atlas occurrences)
- Modify: `cli/clone-repo.js` — `REPOSITORY` constant, console message (3)
- Modify: `cli/index.js` — `createAtlasApp` function name, `consola.box` banner, the usage hint string (4)
- Modify: `cli/setup-project.js` — the three replacement rules (3)
- Modify: `cli/utils.js` — docs URL (1)
- Modify: `cli/README.md` — 20 occurrences, the densest single file in the repo

## Implementation Steps

1. Update `cli/package.json`: `name` → `create-caracal-app` (**verified available on npm**),
   `bin` key → `create-caracal-app`,
   `description` → "Caracal expo starter cli", `homepage`/`repository.url` → the renamed repo,
   keyword `atlas` → `caracal`, and bump `version` to `3.0.0`.
2. Update `cli/clone-repo.js`: `REPOSITORY = 'leanhtuan1994/react-native-caracal'` and the
   `Using Atlas starter` log line.
3. Update `cli/index.js`: rename `createAtlasApp` → `createCaracalApp` (and its call site), the
   banner text, and the usage string that tells users the npx command.
4. Update `cli/setup-project.js` replacement rules per the Architecture section, preserving
   order. `FILES_TO_REMOVE` stays unchanged — brand assets are intentionally inherited.
5. Add a "Replace the brand assets" section to `README-project.md` (the file the CLI renames
   into the scaffolded project's `README.md`), pointing at `assets/brand/*.svg` and
   `pnpm brand:assets`.
6. Update the docs URL in `cli/utils.js` — note it currently points at
   `leanhtuan1994.github.io/react-native-template-atlas`, which may be stale given the docs now
   deploy to Vercel. Verify the correct live docs URL before writing it.
7. Rewrite `cli/README.md` — 20 occurrences covering install commands, examples, and prose.
8. Smoke test: `node cli/index.js test-project` in a temp directory, then verify the generated
   project's `env.js` has `com.testproject` / `testproject` / `expo-owner`, and that
   `assets/brand/` is present as intended.

## Success Criteria

- [x] `grep -rn "atlas" cli/ -i` returns zero matches
- [ ] `node cli/index.js` with no argument prints the `create-caracal-app` usage hint —
      **NOT VERIFIED:** `cli/` has its own `package.json` whose deps (`consola`, `fs-extra`) are
      not installed in this repo, so the entrypoint throws `Cannot find module 'consola'` before
      reaching the hint. Pre-existing condition. The string itself is correct in source.
- [x] A scaffolded test project's `env.js` has `BUNDLE_ID` / `PACKAGE` set to
      `com.<projectname>` and `NAME` set to the project name

**Correction (implementation):** the plan asserted `EXPO_ACCOUNT_OWNER` would become
`expo-owner`. It does not, and never did. The value in `env.js` is `leanhtuan1994` — a personal
Expo account, not the brand name — so the third replacement rule (`/caracal/gi` → `expo-owner`,
formerly `/atlas/gi`) never matches it. That rule is vestigial from the upstream obytes template
where the owner _was_ the brand name. **Pre-existing bug, not introduced here:** every project
scaffolded from this template inherits someone else's Expo account owner. Out of scope for a
rebrand; reported to the user separately.

- [x] A scaffolded test project retains `assets/brand/` and a working `brand:assets` script
- [x] The scaffolded `README.md` explains how to replace the brand assets
- [x] `cli/package.json` `bin` key matches the package name
- [ ] The docs URL in `cli/utils.js` resolves to a live page — **NOT VERIFIED:** it now points
      at `react-native-caracal.vercel.app`, which does not exist until the Vercel project is
      renamed (external checklist step 4).

## Risk Assessment

**Replacement ordering** — `CaracalApp` must be replaced before the bare `/caracal/gi`
catch-all, or the app name becomes `expo-ownerApp`. The existing order is correct; preserve it
exactly when editing.

**Scaffolded apps ship Caracal branding** — accepted trade-off (see Architecture). The
mitigation is the README section in step 5, so that step is not optional polish.

**Existing users on the old CLI** — `create-atlas-rn-app@2.0.3` is live on npm. Anyone running
`npx create-atlas-rn-app@latest` after the GitHub rename gets a clone failure unless GitHub's
rename redirect covers the API path in `clone-repo.js`. Phase 6's checklist covers deprecating
the old package with a pointer to the new one.

<!-- Updated: Validation Session 1 - catch-all scope verified as env.js-only (risk removed); FILES_TO_REMOVE left unchanged by decision, README mitigation added; create-caracal-app confirmed available on npm -->
