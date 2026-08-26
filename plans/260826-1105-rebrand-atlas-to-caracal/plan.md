---
title: 'Rebrand Atlas to Caracal'
description: 'Full rebrand of the React Native starter kit from Atlas to Caracal — identifiers, brand assets, CLI package, and docs site.'
status: pending
priority: P1
effort: '2-3d'
tags: [rebrand, branding, docs, cli, assets]
created: 2026-08-26
blockedBy: []
blocks: []
---

# Rebrand Atlas to Caracal

## Overview

The repo currently ships under the **Atlas** brand (a prior rebrand from obytes that left
residue in `LICENSE`, CI comments, and i18n strings). This plan retires Atlas entirely and
establishes **Caracal** as the single brand across four layers: app identifiers, brand
assets, the `create-*-app` CLI package, and the Fumadocs documentation site.

The visual system is already decided. `React Native Caracal logo/Caracal Brand Sheet.dc.html`
locks **direction 1b — "Caracal in Orbit"**: one closed caracal-head silhouette path plus a
single rotated orbit ellipse, two eye dots. Those SVG paths are the source of truth for every
generated asset; this plan extracts them into version-controlled SVG rather than re-drawing.

### Brand system (from the brand sheet)

| Token            | Dark value | Light value | Role                                    |
| ---------------- | ---------- | ----------- | --------------------------------------- |
| Caracal          | `#C8763C`  | `#B0642F`   | Fur / silhouette stroke, primary accent |
| Orbit            | `#7DD3E8`  | `#1B7E97`   | Orbit ellipse, links, secondary accent  |
| Ink              | `#0A0D11`  | —           | Background                              |
| Sand             | `#F5F1EA`  | —           | Light surface                           |
| Eye / foreground | `#E8EDF2`  | `#171C22`   | Eye dots, body text                     |

Typography: **Space Grotesk** (600 / 500 — display) + **JetBrains Mono** (400 / 700 — labels,
CLI, code).

Icon degradation ladder, non-negotiable: orbit drops below 48px, eyes drop below 32px, the
silhouette never changes.

### Naming decisions (user-approved)

| Surface                  | Atlas (current)                    | Caracal (target)                     |
| ------------------------ | ---------------------------------- | ------------------------------------ |
| iOS bundle id            | `com.atlas`                        | `com.caracal`                        |
| Android package          | `com.atlas`                        | `com.caracal`                        |
| App display name         | `AtlasApp`                         | `CaracalApp`                         |
| URL scheme               | `atlasApp`                         | `caracalApp`                         |
| Expo slug                | `atlasapp`                         | `caracalapp`                         |
| Root `package.json` name | `atlasapp`                         | `caracalapp`                         |
| CLI package              | `create-atlas-rn-app`              | `create-caracal-app`                 |
| Docs package             | `atlas-docs`                       | `caracal-docs`                       |
| GitHub repo              | `leanhtuan1994/react-native-atlas` | `leanhtuan1994/react-native-caracal` |

## Goals

| #   | Goal                                                                                           | Priority |
| --- | ---------------------------------------------------------------------------------------------- | -------- |
| 1   | No `atlas`/`obytes` occurrences outside `plans/`, lockfiles, and the two documented exceptions | P1       |
| 2   | Mark 1b exists as version-controlled SVG with a reproducible SVG→PNG render pipeline           | P1       |
| 3   | App identifiers (bundle, package, scheme, slug, name) consistently `caracal`                   | P1       |
| 4   | CLI publishes as `create-caracal-app` and clones the renamed repo                              | P2       |
| 5   | Docs site carries the Caracal palette, typography, mark, and copy                              | P2       |
| 6   | `pnpm check-all`, `pnpm prebuild --clean`, and `docs` build all pass post-rebrand              | P1       |

## Non-goals

- No functional/behavioral change to app code. This is naming, assets, and styling only.
- No docs _content_ restructuring — only brand-string and visual updates within existing MDX.
- No automated execution of external actions (GitHub rename, npm publish, EAS, Vercel).
  Those are captured as a manual checklist in Phase 6 per user decision.
- Not fixing the stale `.maestro` flows that assert `"Atlas Starter"` against onboarding/login
  screens which **no longer exist** in `src/app/` (only `(home)/index.tsx` and
  `(home)/settings.tsx` are routed). Phase 3 renames the string; the flows stay broken and
  this is flagged, not repaired.

## Phases

| #   | Phase                                                                                  | Status  | Depends on |
| --- | -------------------------------------------------------------------------------------- | ------- | ---------- |
| 1   | [Brand Source of Truth](./phase-01-start.md)                                           | Pending | —          |
| 2   | [Brand Assets Pipeline](./phase-02-brand-assets-pipeline.md)                           | Pending | 1          |
| 3   | [Core Identifiers Rename](./phase-03-core-identifiers-rename.md)                       | Pending | —          |
| 4   | [CLI Package Rebrand](./phase-04-cli-package-rebrand.md)                               | Pending | 3          |
| 5   | [Docs Site Rebrand](./phase-05-docs-site-rebrand.md)                                   | Pending | 1, 2       |
| 6   | [Verification & External Checklist](./phase-06-verification-and-external-checklist.md) | Pending | 2, 3, 4, 5 |

Phases 1→2 and 3→4 are two independent tracks that converge at 5/6. Phase 3 can start
immediately in parallel with Phase 1.

## Blast radius

67 files contain `atlas` outside `node_modules`, lockfiles, and `plans/`. Highest-density
targets: `cli/README.md` (20), `docs/content/docs/guides/navigation.mdx` (18),
`README.md` (14), `docs/content/docs/getting-started/environment-vars-config.mdx` (10),
`README-project.md` (10).

Four files additionally contain `obytes`: `LICENSE`, `src/translations/en.json`,
`src/translations/vi.json`, plus CI workflow header comments.

## Risks

| Risk                                                               | Impact | Mitigation                                                                                                                                                       |
| ------------------------------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bundle ID change orphans existing EAS builds / store listing       | High   | External checklist (Phase 6) documents new EAS project creation; user decides whether to migrate or start fresh                                                  |
| Blind `sed s/atlas/caracal/g` corrupts unrelated strings           | Medium | Phase 3 uses an explicit file list with per-pattern replacements, not a global sed; verified by grep afterwards                                                  |
| Wordmark outlining (Phase 1) slips, blocking the OG card (Phase 2) | Medium | Confirmed as a hard dependency in both phases; check `caracal-lockup-horizontal.svg` contains only `<path>` before starting Phase 2 step 6                       |
| `sharp` SVG rasterization differs from browser render              | Medium | Mark 1b is pure `<path>`/`<ellipse>`/`<circle>` with no text or external fonts — no font substitution risk. Phase 2 includes visual spot-check of generated PNGs |
| Docs palette swap breaks Fumadocs contrast                         | Medium | Brand sheet already specifies light-mode variants (`#B0642F`/`#1B7E97`) that hold 4.5:1 against sand                                                             |
| Scaffolded apps ship Caracal branding until the user swaps it      | Low    | Accepted by decision; Phase 4 adds a "Replace the brand assets" section to the scaffolded README                                                                 |
| Renaming the GitHub repo breaks the CLI's clone for existing users | Medium | GitHub keeps redirects on rename; Phase 6 checklist includes publishing the new CLI name and deprecating the old (`create-atlas-rn-app@2.0.3` is live)           |

## Success Criteria

- [x] The Phase 6 static sweep returns zero matches for `atlas`, `obytes`, and `blurple` apart
      from **two intentional exceptions**: the retained upstream MIT notice in `LICENSE`, and the
      live docs hostname `react-native-template-atlas.vercel.app` (kept by decision until a
      custom domain lands). See `external-checklist.md` → Intentional exceptions.
- [ ] `assets/brand/` contains committed SVG sources for the mark, and `pnpm brand:assets` regenerates every PNG deterministically
- [ ] `pnpm check-all` passes (lint + type-check + translations + test)
- [ ] `pnpm prebuild --clean` succeeds and `ios/`/`android/` reflect `com.caracal` with no Atlas-named directory left behind
- [ ] `cd docs && pnpm build` succeeds
- [ ] Docs site renders the Caracal palette, Space Grotesk / JetBrains Mono, and the 1b mark in nav + favicon + OG image
- [ ] Phase 6 external checklist exists and is handed to the user unexecuted

## Open questions

- Should `EXPO_ACCOUNT_OWNER` (`leanhtuan1994`) change, or stay as the personal Expo account?
  Assumed unchanged. Note the CLI rewrites it to `expo-owner` in scaffolded projects regardless.

## Validation Log

### Session 1 — 2026-08-26

**Verification Results**

- Tier: Full (6 phases)
- Claims checked: 18 | Verified: 13 | Failed: 5

| Finding                                                                  | Location                       | Resolution                                                                                                         |
| ------------------------------------------------------------------------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `ios/` + `android/` claimed committed; warned of a large prebuild diff   | Phase 3, Phase 6 risk sections | **FALSE** — both gitignored, `git ls-files` returns 0. Risk rewritten around stale Atlas-named directories instead |
| CLI catch-all `/atlas/gi` could corrupt `assets/brand/` + `brand.mdx`    | Phase 4 risk                   | **FALSE** — `updateProjectConfig` scopes the replace to `env.js` only. Risk removed                                |
| "30 MDX files"                                                           | Phase 5                        | **WRONG COUNT** — 33 total, 30 affected. Corrected in 3 places                                                     |
| `docs/app/llms-full.txt/route.ts` may hold brand strings                 | Phase 5                        | **CLEAN** — 0 matches. Downgraded to "no change needed"                                                            |
| `FILES_TO_REMOVE` omits `assets/brand/`, the render script, and `plans/` | not in plan                    | **NEW** — surfaced as an interview question; see decision 1                                                        |

**Decisions confirmed**

1. **Scaffolded projects keep the brand assets as a placeholder.** `FILES_TO_REMOVE` stays
   unchanged; generated apps inherit the Caracal mark SVGs plus a working `brand:assets`
   pipeline. Mitigated by a "Replace the brand assets" section added to `README-project.md`.
2. **OG card renders from outlined SVG paths via `sharp`** — no headless browser. This promotes
   Phase 1's wordmark outlining from optional polish to a hard prerequisite for Phase 2.
3. **No `brand.mdx` docs page.** Brand tokens live in `assets/brand/README.md` as an internal
   maintainer reference — a template kit's users replace the branding, so Caracal's brand guide
   is noise on the public docs site.
4. **`pnpm prebuild --clean`** for native regeneration, followed by an explicit check that no
   `ios/AtlasApp*` or `android/app/src/main/java/com/atlas/` path survives.

**Resolved from open questions**

- `create-caracal-app` is **available** on npm (registry 404) — the name in Phase 4 is safe.
- `create-atlas-rn-app` is **published at 2.0.3** — deprecation in Phase 6 is warranted, not
  hypothetical.

### Whole-Plan Consistency Sweep

Re-read `plan.md` and all six phase files after propagation.

- Reconciled MDX counts across Phase 5's overview, file list, and step 8 (40+ → 33/30).
- Reconciled `pnpm prebuild` → `pnpm prebuild --clean` in Phase 3 steps, Phase 3 success
  criteria, Phase 6 gates, and Phase 6 success criteria.
- Removed the `brand.mdx` / `meta.json` references from Phase 1 that Phase 5 would otherwise
  have expected to exist.
- Corrected Phase 2's OG card CLI line: the brand sheet mocks `npx caracal init`, which is not
  the real command — Phase 2 now defers to Phase 4's `npx create-caracal-app`.
- Renumbered Phase 4's implementation steps after inserting the README step.
- Phase 4's `create-caracal-app` name is now consistent across Phase 2's OG card, Phase 5's
  MDX sweep, and Phase 6's npm checklist.

**Unresolved contradictions: none.**

<!-- slug: rebrand-atlas-to-caracal -->
