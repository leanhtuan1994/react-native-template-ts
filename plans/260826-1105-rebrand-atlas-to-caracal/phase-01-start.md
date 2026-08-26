---
phase: 1
title: 'Brand Source of Truth'
status: pending
priority: P1
effort: '3h'
dependencies: []
---

# Phase 1: Brand Source of Truth

## Overview

Extract the chosen mark (direction 1b, "Caracal in Orbit") out of the design-canvas HTML into
version-controlled SVG files, and record the brand tokens as a reference doc. Every later
phase consumes these files rather than re-reading the `.dc.html`.

## Requirements

**Functional**

- The silhouette path, orbit ellipse, and eye circles are stored verbatim as SVG — no redraw,
  no path simplification.
- Four SVG variants exist, covering the render matrix the brand sheet defines.
- A brand token reference documents colors, typography, clear space, and the icon ladder.

**Non-functional**

- SVGs use `viewBox="0 0 128 128"` (matching the source) so stroke widths transfer directly.
- No embedded fonts or `<text>` elements in the mark SVGs — keeps rasterization deterministic.

## Architecture

The mark is three primitives layered in this z-order:

1. `<ellipse cx="64" cy="66" rx="58" ry="23" transform="rotate(-22 64 66)">` — the orbit
2. The closed silhouette `<path>` (ears → head → jaw, one continuous path)
3. Two eye `<circle>` elements at `(51,64)` and `(77,64)`, `r=5`

Stroke widths scale with output size per the icon ladder. Rather than four hand-tuned files
diverging, each variant SVG carries its own stroke widths as literal attributes — matching the
brand sheet's own values at each rung.

The exact source paths live in `Caracal Brand Sheet.dc.html` lines 33-37 (dark, 104px lockup)
and lines 168-172 (on-sand / light variant).

## Related Code Files

- Create: `assets/brand/caracal-mark.svg` — full mark, dark background (orbit `#7DD3E8`, fur `#C8763C`, eyes `#E8EDF2`)
- Create: `assets/brand/caracal-mark-light.svg` — on-sand variant (orbit `#1B7E97`, fur `#B0642F`, eyes `#171C22`)
- Create: `assets/brand/caracal-mark-compact.svg` — silhouette + eyes only, no orbit (for 32-47px renders)
- Create: `assets/brand/caracal-mark-micro.svg` — silhouette only, no orbit, no eyes (for ≤20px renders)
- Create: `assets/brand/caracal-lockup-horizontal.svg` — mark + "REACT NATIVE / Caracal" wordmark, glyphs outlined to paths
- Create: `assets/brand/README.md` — brand token reference (palette, typography, clear space, icon ladder)
- Read only: `/Users/tuananhle/workspace/Personal/ReactNative/React Native Caracal logo/Caracal Brand Sheet.dc.html`
- Read only: `/Users/tuananhle/workspace/Personal/ReactNative/React Native Caracal logo/Caracal Logo.dc.html`

## Implementation Steps

1. Read the brand sheet's primary lockup block and copy the `<ellipse>`, `<path>`, and two
   `<circle>` elements verbatim into `assets/brand/caracal-mark.svg`, wrapping them in
   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">`.
2. Duplicate to `caracal-mark-light.svg`, substituting the light-mode stroke colors from the
   "On sand" block (`#1B7E97`, `#B0642F`, `#171C22`).
3. Create `caracal-mark-compact.svg`: drop the orbit ellipse, raise silhouette stroke-width to
   `8`, keep eyes — matching the "48" rung of the icon ladder.
4. Create `caracal-mark-micro.svg`: silhouette only, stroke-width `10`, no eyes — the "20" rung.
5. Build `caracal-lockup-horizontal.svg`: mark at 104px beside the two-line wordmark
   ("REACT NATIVE" in JetBrains Mono 500 / letterspacing `0.26em`, "Caracal" in Space Grotesk
   600 / letterspacing `-0.025em`). **Outline the glyphs to `<path>` data** — the render
   pipeline must not depend on locally installed fonts. Phase 2's OG card reuses these
   outlined paths, so this step is a hard dependency for it, not optional polish.
6. Write `assets/brand/README.md` capturing: the palette table (both schemes), type stack,
   clear-space rule (½ mark height), and the three degradation rules. This stays an internal
   maintainer reference — it is deliberately **not** a page on the docs site (a template kit's
   users will replace the branding, so Caracal's brand guide is noise to them).

## Success Criteria

- [x] All four mark SVGs render correctly when opened directly in a browser
- [x] `caracal-mark.svg` path data is byte-identical to the brand sheet's silhouette path
- [x] No `<text>` element or font reference in any SVG destined for PNG rendering
- [x] `caracal-lockup-horizontal.svg` renders identically with all custom fonts disabled
- [x] `assets/brand/README.md` documents both color schemes and all three degradation rules
- [x] The compact and micro variants remain legible when viewed at 48px and 20px respectively

## Risk Assessment

**Path transcription error** — the silhouette path is 180+ characters of bezier data. Copy it
programmatically (grep/sed extraction from the HTML) rather than retyping. Verify by diffing
the extracted string against the source.

**Lockup font dependency** — Space Grotesk and JetBrains Mono are Google Fonts not installed
locally. Outlining them (step 5) is the agreed approach and is load-bearing: Phase 2's OG card
is the only raster output containing type, and it consumes these outlined paths. Budget real
time for it rather than deferring — the fallback of referencing fonts via CSS would push the
problem into Phase 2 with no better answer there.

<!-- Updated: Validation Session 1 - brand.mdx docs page dropped in favour of assets/brand/README.md; wordmark outlining confirmed as a hard dependency for Phase 2's OG card -->
