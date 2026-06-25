---
phase: 2
title: 'Visual system + custom components + landing'
status: completed
priority: P1
dependencies: [1]
---

# Phase 2: Bold branded visual system, components, landing page

## Overview

Build the bold, dark-first visual identity (claudekit.cc register) and the reusable MDX/page components, then ship the marketing landing page. After this phase the site looks done even with placeholder content.

## Requirements

- Functional: landing renders hero + feature grid + CTAs; components usable from MDX.
- Non-functional: dark-first, responsive, light mode, reduced-motion respected.

## Architecture

- Brand: ink base (deep blue/purple), single bold **blurple** accent, warm signal for badges. Fonts: **Inter** (headings + body), **IBM Plex Mono** (code). <!-- Updated: Validation Session 1 - Inter + IBM Plex Mono + blurple -->
- Components in `docs/components/`: `Hero`, `FeatureCard`, `FeatureGrid`, `StepList`, `GithubStar`, `About`, `LastUpdated`.
- Register MDX components via `mdx-components.tsx` so pages can use them.
- Hero: gradient mesh + subtle grid, bold headline, primary ("Get Started") + secondary (GitHub) CTAs.

## Related Code Files

- Create: `docs/mdx-components.tsx`, `docs/components/hero.tsx`, `docs/components/feature-card.tsx`, `docs/components/feature-grid.tsx`, `docs/components/step-list.tsx`, `docs/components/github-star.tsx`, `docs/components/about.tsx`, `docs/components/last-updated.tsx`.
- Modify: `docs/app/(home)/page.tsx` (real landing), `docs/app/global.css` (component utilities, fonts), `docs/app/layout.tsx` (font loading).
- Assets: obytes logo/og image under `docs/public/`.

## Implementation Steps

1. Load fonts (next/font) + finalize color scale + gradient utilities in `global.css`.
2. Build `GithubStar`, `About`, `LastUpdated` as React equivalents of the old Astro components.
3. Build `Hero`, `FeatureCard`/`FeatureGrid`, `StepList`.
4. Compose landing page: hero + 12-ish feature cards (port from old index.mdx copy, corrected) + About/CTA.
5. Wire `mdx-components.tsx` so all components are MDX-usable.
6. (Optional) Match spacing/contrast to a claudekit.cc docs screenshot.
7. Verify dark/light + mobile.

## Success Criteria

- [ ] Landing renders bold hero + feature grid + CTAs, no Atlas branding.
- [ ] Custom components render in both MDX and page context.
- [ ] Dark + light + mobile verified; reduced-motion honored.

## Risk Assessment

- Over-animating the hero hurts perf/accessibility — keep motion subtle, gate on `prefers-reduced-motion`.
- Font choices affect bundle; prefer `next/font` self-hosting.
