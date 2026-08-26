---
phase: 3
title: 'Core Identifiers Rename'
status: pending
priority: P1
effort: '3h'
dependencies: []
---

# Phase 3: Core Identifiers Rename

## Overview

Rename every app-level identifier and brand string in the repo root, `src/`, CI workflows, and
E2E flows. This is the largest single-commit surface of the rebrand and the one where a careless
global `sed` does the most damage — so it uses an explicit per-file, per-pattern replacement list.

Runs in parallel with Phases 1-2; no dependency on brand assets.

## Requirements

**Functional**

- `env.js` static identifiers become the Caracal values.
- Root `package.json` name and the Maestro `APP_ID` follow.
- Expo slug in `app.config.ts` becomes `caracalapp`.
- `obytes` residue in `LICENSE` and both translation files is cleared.
- CI workflow `APP_ID` values and `Source file:` header comments point at the new repo.

**Non-functional**

- No behavioral change. Only string literals and identifiers move.
- Replacements are case-aware: `AtlasApp`→`CaracalApp`, `atlasApp`→`caracalApp`,
  `com.atlas`→`com.caracal`, `atlasapp`→`caracalapp`, `Atlas`→`Caracal`, `atlas`→`caracal`.

## Architecture

The replacement map, applied in this order (longest-first prevents partial-match corruption):

| Order | Pattern                       | Replacement                     | Scope                                               |
| ----- | ----------------------------- | ------------------------------- | --------------------------------------------------- |
| 1     | `react-native-template-atlas` | `react-native-template-caracal` | CI comments, cli/utils.js                           |
| 2     | `react-native-atlas`          | `react-native-caracal`          | repo URLs                                           |
| 3     | `create-atlas-rn-app`         | `create-caracal-app`            | Phase 4 handles; listed for completeness            |
| 4     | `com.atlas`                   | `com.caracal`                   | env.js, package.json, CI, maestro                   |
| 5     | `AtlasApp`                    | `CaracalApp`                    | env.js NAME                                         |
| 6     | `atlasApp`                    | `caracalApp`                    | env.js SCHEME                                       |
| 7     | `atlasapp`                    | `caracalapp`                    | package.json name, app.config.ts slug, .vscode dict |
| 8     | `Atlas Starter`               | `Caracal Starter`               | maestro assertions, docs                            |
| 9     | `Atlas`                       | `Caracal`                       | remaining prose                                     |
| 10    | `atlas`                       | `caracal`                       | remaining lowercase                                 |
| 11    | `obytes`                      | `Caracal`                       | LICENSE, translations                               |

**Do not** run patterns 9-10 across `pnpm-lock.yaml`, `release-manifest.json`, `node_modules/`,
`coverage/`, `.expo/`, or `plans/`.

## Related Code Files

- Modify: `env.js` — `BUNDLE_ID`, `PACKAGE`, `NAME`, `SCHEME` (5 occurrences, incl. the
  `com.atlas.staging` example in the comment block)
- Modify: `package.json` — `name`, `e2e-test` script `APP_ID`, `repository.url` (3)
- Modify: `app.config.ts` — `slug: 'atlasapp'` → `'caracalapp'` (1)
- Modify: `.vscode/settings.json` — spellcheck dictionary entry `atlasapp` (1)
- Modify: `LICENSE` — obytes copyright holder
- Modify: `src/translations/en.json`, `src/translations/vi.json` — `welcome` and
  `onboarding.message` keys, both still say "obytes"
- Modify: `.maestro/auth/onboarding.yaml`, `.maestro/auth/login-with-validation.yaml`,
  `.maestro/utils/onboarding.yaml`, `.maestro/utils/onboarding-and-login.yaml` — `"Atlas Starter"` assertions
- Modify: `.github/workflows/*.yml` (12 files) — `Source file:` header comments; plus
  `APP_ID=com.atlas.staging` in `e2e-android.yml`, `e2e-android-maestro.yml`,
  `e2e-android-eas-build.yml`
- Modify: `.github/actions/eas-build/action.yml`, `.github/actions/setup-jdk-generate-apk/action.yml`,
  `.github/actions/setup-node-pnpm-install/action.yml` — obytes references
- Modify: `README.md` (14), `README-project.md` (10), `CLAUDE.md` (2)

## Implementation Steps

1. Update `env.js` first — it is the origin of every derived identifier. Also fix the inline
   comment that documents `com.atlas.staging`.
2. Update `package.json` (`name`, `e2e-test` APP_ID, `repository.url`) and `app.config.ts` slug.
3. Sweep `.github/workflows/` and `.github/actions/` for the `Source file:` comments, the
   `APP_ID` env values, and the residual `obytes` strings.
4. Update the four `.maestro` flow files' `"Atlas Starter"` assertions to `"Caracal Starter"`.
   **Note:** these flows reference onboarding and login screens that do not exist in
   `src/app/` (only `(home)/index.tsx` and `(home)/settings.tsx` are routed). The rename keeps
   them consistent but does not make them pass — see the plan's non-goals.
5. Replace the `obytes` strings in both translation files with Caracal wording. Keep the JSON
   key sets identical between `en.json` and `vi.json`, or `pnpm lint:translations` fails.
6. Update `LICENSE` copyright holder.
7. Update `README.md`, `README-project.md`, `CLAUDE.md` prose and any `com.atlas` examples.
8. Update `.vscode/settings.json` spellcheck dictionary: `atlasapp` → `caracalapp`; consider
   adding `caracal` and `Caracal`.
9. Run the verification grep, scoped to exclude `plans/`, `docs/`, and `cli/` (owned by
   Phases 4-5).

## Success Criteria

- [x] `grep -rn "atlas\|obytes" env.js package.json app.config.ts LICENSE src/ .maestro/ .github/ .vscode/ README.md README-project.md CLAUDE.md -i` returns zero matches
- [x] `pnpm lint:translations` passes — key sets still identical across `en.json`/`vi.json`
- [x] `pnpm type-check` passes
- [x] `node -e "require('./env.js')"` loads without a Zod validation error
- [x] `pnpm prebuild --clean` regenerates `ios/` and `android/` with `com.caracal`
- [x] No `ios/AtlasApp*` directory and no `android/app/src/main/java/com/atlas/` path remains
- [x] The `e2e-test` script and CI `APP_ID` values agree on `com.caracal.development` / `com.caracal.staging`

## Risk Assessment

**Stale native directories** — `ios/` and `android/` are **gitignored with zero tracked files**
(verified), so there is no diff to review; they are purely local build artifacts. But they
currently hold Atlas-named _directories_ that a rebuild will not clean up on its own:

```
ios/AtlasApp.xcodeproj/          ios/AtlasApp/          ios/AtlasApp.xcworkspace/
android/app/src/main/java/com/atlas/development/
```

Decision: run `pnpm prebuild --clean`. Because `--clean` deletes and regenerates the native
directories rather than renaming them, verify afterwards that no `AtlasApp*` directory and no
`android/app/src/main/java/com/atlas/` path survives — if either does, delete it manually. A
leftover `AtlasApp.xcodeproj` beside a new `CaracalApp.xcodeproj` makes `pnpm xcode` open the
wrong workspace.

**Translation key drift** — `eslint-plugin-i18n-json` enforces identical, sorted keys between
locale files. Editing only the English file breaks the lint. Edit both together.

**Bundle ID is a breaking identity change** — any installed dev/staging build under
`com.atlas.*` becomes a separate app from `com.caracal.*`; users get both side by side. This is
intended for a template repo but should be stated in the release notes.

<!-- Updated: Validation Session 1 - native folders verified gitignored (0 tracked); prebuild --clean chosen with a stale-directory check -->
