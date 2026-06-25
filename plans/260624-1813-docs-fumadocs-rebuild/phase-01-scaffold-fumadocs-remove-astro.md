---
phase: 1
title: 'Scaffold Fumadocs, remove Astro, theme tokens + Vercel'
status: completed
priority: P1
dependencies: []
---

# Phase 1: Scaffold Fumadocs + remove Astro + base theme + Vercel

## Overview

Stand up a clean Fumadocs (Next.js App Router) app in `docs/`, removing the Astro/Starlight site. Establish the dark-first brand token foundation and Vercel deploy config so a placeholder docs route + landing render and deploy.

## Requirements

- Functional: `next dev` serves a docs route + landing; `next build` clean.
- Non-functional: dark-mode-first theme tokens defined; Vercel root-dir = `docs/`.

## Architecture

- Next.js 15 App Router + `fumadocs-ui` + `fumadocs-mdx` + `fumadocs-core`.
- `source.config.ts` (MDX source) → `lib/source.ts` loader → `app/docs/[[...slug]]/page.tsx`.
- `app/layout.tsx` with `RootProvider`; `app/docs/layout.tsx` with `DocsLayout`.
- Tailwind v4 + Fumadocs preset; brand tokens (CSS vars) in `app/global.css`.

## Related Code Files

- Delete: `docs/astro.config.mjs`, `docs/ec.config.mjs`, `docs/src/content/**`, `docs/src/components/*.astro`, `docs/src/styles/custom.css`, `docs/src/env.d.ts`, `docs/tsconfig.json` (replace), `docs/package.json` (replace), `docs/pnpm-lock.yaml` (regen), gh-pages `deploy` script.
- Create: `docs/package.json`, `docs/next.config.mjs`, `docs/source.config.ts`, `docs/lib/source.ts`, `docs/app/layout.tsx`, `docs/app/global.css`, `docs/app/(home)/page.tsx`, `docs/app/docs/layout.tsx`, `docs/app/docs/[[...slug]]/page.tsx`, `docs/content/docs/index.mdx` (placeholder), `docs/content/docs/meta.json`, `docs/vercel.json` (or document Vercel root-dir), `docs/.gitignore`.

## Implementation Steps

1. Snapshot old content: move `docs/src/content/docs/**` to a temp `docs/.migration-src/` for Phase 3 reference (not shipped).
2. Remove Astro/Starlight files (config, components, styles).
3. Scaffold Fumadocs (`create-fumadocs-app` patterns) — App Router, Tailwind v4, MDX source.
4. Define brand tokens in `global.css`: dark-first base (deep blue/purple `#0B0B14`-ish), bright accent, light-mode override; wire Fumadocs theme CSS vars.
5. Add one placeholder docs page + minimal landing to verify routing.
6. Configure Vercel: root directory `docs/`, build `next build`, framework Next.js. Remove `gh-pages`.
7. Verify `pnpm install`, `next dev`, `next build` all pass.

## Success Criteria

- [ ] Astro/Starlight fully removed from `docs/`.
- [ ] `next dev` + `next build` succeed.
- [ ] Dark-first brand tokens applied; light mode toggles.
- [ ] Vercel build config points at `docs/`.

## Risk Assessment

- Tailwind v4 + Fumadocs preset wiring is the common breakage point — follow current Fumadocs docs (verify version at impl time).
- Keep old content snapshot until Phase 3 done; do not delete `.migration-src/` early.
