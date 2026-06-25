---
phase: 3
title: 'Content migration (all sections) + sidebar meta'
status: completed
priority: P1
dependencies: [2]
---

# Phase 3: Migrate + rewrite all docs content

## Overview

Convert every page from the old Starlight content into corrected Fumadocs MDX, section by section, swapping Starlight components, fixing branding/links/stack, and wiring sidebar via `meta.json`.

## Requirements

- Functional: every IA section present and navigable; correct frontmatter.
- Non-functional: Atlas branding consistent + current, no dead links, current stack reflected (Expo 56.0.12, RN 0.85.3, heroui-native 1.0.4, uniwind 1.6.3). <!-- Updated: Validation Session 1 - keep Atlas, fix versions -->

## Architecture

- Content under `docs/content/docs/<section>/...mdx`, each with Fumadocs frontmatter (`title`, `description`).
- Sidebar order/grouping via `meta.json` per folder + root `meta.json`.
- Component swaps: Starlight `<Card>/<CardGrid>` → Fumadocs `<Cards>/<Card>`; `<Tabs>`/`<Steps>` → Fumadocs equivalents; admonitions → `<Callout>`.

## Related Code Files

- Create: `docs/content/docs/**` (all sections below) + `meta.json` per folder.
  - `index.mdx` (overview/introduction)
  - `getting-started/` (create-new-app, customize-app, rules-and-conventions, project-structure, react-compiler-new-arch, environment-vars-config)
  - `ui-and-theme/` (ui-theming [Uniwind], heroui-native, fonts, custom-components, component-showcase, forms)
  - `guides/` (navigation, state-management, authentication, data-fetching, internationalization, storage, upgrading-deps)
  - `recipes/` (sentry-setup)
  - `testing/` (overview, unit-testing, end-to-end-testing)
  - `ci-cd/` (overview, app-releasing-process, workflows-references)
  - `reference/` (libraries-recommendation, faq, changelog, how-to-contribute, stay-updated)
- Reference: `docs/.migration-src/**` (old content), root `CLAUDE.md` (current stack source of truth).
- Delete: `docs/.migration-src/` after sign-off.

## Implementation Steps

1. Migrate section-by-section in IA order; for each file: convert frontmatter, swap components, rewrite copy.
2. Global corrections: **keep Atlas branding**; fix only broken/dead links (verify `react-native-template-atlas` GitHub links resolve), replace NativeWind-era mentions with Uniwind + HeroUI Native, update version numbers to Expo 56 / RN 0.85.3. Verify against `package.json`, NOT stale root `CLAUDE.md`.
3. Add `meta.json` per folder + root to match target sidebar order.
4. Fix internal links to new route structure; verify no 404s.
5. Port small dynamic bits (GithubStar/About/LastUpdated usage) into relevant pages.
6. Grep for `atlas`, dead anchors, NativeWind, old SDK numbers — zero hits.

## Success Criteria

- [ ] All IA sections + pages present, navigable, correct sidebar order.
- [ ] No dead internal or GitHub links; Atlas branding consistent (no leftover `obytes`/template-name mismatches).
- [ ] Stack references current (Expo 56.0.12, RN 0.85.3, heroui-native 1.0.4, uniwind 1.6.3); no NativeWind/old-SDK mentions.

## Risk Assessment

- Largest, most error-prone phase — do it section-by-section, build after each.
- Component API mismatches surface here; keep a swap cheatsheet (Starlight→Fumadocs).
