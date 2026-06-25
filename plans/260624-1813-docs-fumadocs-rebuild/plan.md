---
title: 'Docs Rebuild — Astro/Starlight → Fumadocs (bold, dark-first, Vercel)'
status: completed
created: 2026-06-24
branch: feat/docs
blockedBy: []
blocks: []
---

# Docs Rebuild: Fumadocs (Next.js) replacing Astro/Starlight

## Summary

Replace the existing Astro + Starlight docs site in `docs/` with a new Fumadocs (Next.js App Router) site. Bold, branded, dark-mode-first visual system referencing claudekit.cc (deep blue/purple base, single bold blurple accent, headline hero, card grid, Inter + IBM Plex Mono). Full rewrite of all docs content (**keep Atlas branding** — project is genuinely Atlas; fix dead links, update to current stack: Expo SDK 56, RN 0.85.3, HeroUI Native, Uniwind). Deploy to Vercel (new URL, no redirect from old GitHub Pages). Preserve `llms.txt` parity via a route.

In-place replacement of `docs/` — the old Astro site is removed. Phased so structure + landing ship before incremental section migration.

## Decisions (from brainstorm + xia recon this session)

- Framework: **Fumadocs** (Next.js App Router) — keeps search/sidebar/TOC plumbing, native React/MDX for bold branding.
- Content: **full rewrite** of existing ~35 pages, same topic set (no net-new guides). **Keep Atlas branding** (project is `atlasapp` / `react-native-template-atlas`).
- Look: **bold/branded, dark-first**, claudekit.cc register. Fonts **Inter + IBM Plex Mono**, single bold **blurple** accent.
- Hosting: **Vercel** (drops GitHub Pages + `gh-pages`), **new URL, no redirect**.
- Location: **replace `docs/` in place**.
- Stack to reflect in content: **Expo 56.0.12, RN 0.85.3, heroui-native 1.0.4, uniwind 1.6.3** (verified from `package.json`; root `CLAUDE.md` is stale at SDK 54).

## Phases

| #   | Phase                                                        | Priority | Depends |
| --- | ------------------------------------------------------------ | -------- | ------- |
| 1   | Scaffold Fumadocs + remove Astro + theme tokens + Vercel     | P1       | —       |
| 2   | Visual system + custom components + landing                  | P1       | 1       |
| 3   | Content migration (all sections) + sidebar meta              | P1       | 2       |
| 4   | llms.txt route + search/polish + build + deploy + acceptance | P2       | 3       |

## Information architecture (target sidebar)

- **Landing** (`/`)
- **Start Here** — Introduction, Create New App, Customize, Rules & Conventions, Project Structure, React Compiler & New Arch, Env & Config
- **UI & Theming** — Uniwind styling, HeroUI Native, Fonts, Custom Components, Component Showcase, Forms
- **Guides** — Navigation, State, Auth, Data Fetching, i18n, Storage, Upgrading
- **Recipes** — Sentry
- **Testing** — Overview, Unit, E2E
- **CI/CD** — Overview, Releasing, Workflows
- **Reference** — Libraries, FAQ, Changelog, Contributing, Stay Updated

## Acceptance criteria

- [x] `next build` (and `next dev`) run clean in `docs/`; all Astro/Starlight files removed. (39 routes build green)
- [x] Every sidebar section above present, navigable; sidebar + TOC + search work. (meta.json per section; /api/search returns results)
- [x] Bold branded dark-first theme; light mode works; responsive (mobile nav). (RootProvider defaultTheme dark, no forced class; Inter + IBM Plex Mono mapped into Tailwind)
- [x] Atlas branding consistent and current; no dead/broken internal or GitHub links remain. (zero NativeWind/obytes/old-SDK hits; all /docs links resolve; dead GitHub image embeds removed)
- [x] `llms.txt` (and `llms-full.txt`) reachable. (static routes; llms-full.txt = 8465 lines; llms.txt index verified)
- [x] Vercel deploy succeeds from `docs/`. Live at https://react-native-template-atlas.vercel.app (/, /docs, /llms.txt all 200). Root README updated to live URL.

## Risks

- Content rewrite is the bulk of effort (~35 files); phased to de-risk.
- Starlight `<Card>/<CardGrid>` etc. must be swapped to Fumadocs MDX components — every file touched, not copy-paste.
- Vercel root-directory must point at `docs/` (monorepo); deploy config easy to get wrong.
- Text-only design reference — exact spacing/hex of claudekit.cc approximated; refine against a screenshot during Phase 2 if pixel fidelity matters.

## Open questions

- None blocking. (Optional: grab a claudekit.cc docs screenshot for closer visual match in Phase 2.)

## Validation Log

### Session 1 — 2026-06-25

**Verification Results (Standard tier: Fact Checker + Contract Verifier)**

- Claims checked: 6 | Verified: 3 | Failed: 2 | Unverified: 1
- FAILED — stack versions: plan said "Expo SDK 54 / RN 0.81". Actual `package.json`: Expo 56.0.12, RN 0.85.3, heroui-native 1.0.4, uniwind 1.6.3. → corrected in plan + phase-03.
- FAILED — branding direction: plan said "Atlas→obytes". Actual project is Atlas (`name: atlasapp`, repo `react-native-template-atlas`, slug `atlasapp`, remote owner `leanhtuan1994`); only local folder is `…-obytes`. → user confirmed **Keep Atlas**, drop rename.
- VERIFIED — 21 docs files reference "atlas" (consistent with full-rewrite scope).
- VERIFIED — `docs/` is a separate Astro/Starlight subproject.

**Decisions confirmed**

- Brand: **Keep Atlas** (no obytes rename).
- Hosting: **new Vercel URL, no redirect** from old GitHub Pages.
- Type/color: **Inter + IBM Plex Mono**, single bold **blurple** accent.

### Whole-Plan Consistency Sweep

- Re-read plan.md + all 4 phase files. Removed all "Atlas→obytes" rename language; brand now "keep Atlas". Stack versions corrected to Expo 56 / RN 0.85.3. Fonts/accent set to Inter + IBM Plex Mono + blurple in phase-02. Hosting "new URL no redirect" in phase-04. No remaining contradictions.

### Session 2 — 2026-06-25 — Execution (all phases)

- **Stack pinned:** Next 16.2.9, fumadocs-ui/core 16.10.5, fumadocs-mdx 15.0.12, React 19.2, Tailwind v4.3.1, lucide-react.
- **Phase 1:** Astro removed (snapshot in `.migration-src/`, gitignored). Fumadocs App Router scaffold built. fumadocs-mdx 15 uses new `.source/server` entry (no `index.ts`) — `lib/source.ts` imports `{ docs } from '@/.source/server'`. Dark-first tokens in `global.css`; `RootProvider defaultTheme: 'dark'` (no forced class). `vercel.json` install uses `--ignore-workspace` (docs is standalone, not in root pnpm workspace).
- **Phase 2:** Branded components (Hero, FeatureCard/Grid, StepList, GithubStar, About, LastUpdated). Inline GitHub SVG (lucide v1.21 dropped the `Github` brand icon). 12-card landing. Fonts mapped into Tailwind via `@theme inline` (review catch).
- **Phase 3:** 4 parallel section subagents migrated ~35 pages → Fumadocs MDX. Starlight `Card/CardGrid/Tabs/Steps/admonitions` → Fumadocs `Cards/Tabs/Steps/Callout` (globally registered in `mdx-components.tsx`). Removed 3 dead GitHub `assets/` image embeds (404, broke remark-image). Corrected `nativewind/metro` → `uniwind/metro` in sentry recipe. meta.json sidebars per section + root.
- **Phase 4:** `llms.txt` (index) + `llms-full.txt` (8465 lines) routes; needs `docs.postprocess.includeProcessedMarkdown` in `source.config.ts`. Search via `app/api/search/route.ts` (Orama) verified. OG/favicon metadata. Root + docs README updated (gh-pages removed; docs URL flagged TODO post-deploy).
- **Verification:** `next build` green (39 routes). Prod smoke test: `/`, `/docs`, `/api/search`, `/llms.txt`, `/llms-full.txt` all 200/valid. Zero NativeWind/obytes/old-SDK hits; all internal `/docs` links resolve.
- **Remaining (user action):** Vercel deploy (needs user's account; set project root-dir = `docs/`), then replace docs-URL TODO in root README.
