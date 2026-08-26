---
phase: 2
title: 'Brand Assets Pipeline'
status: pending
priority: P1
effort: '4h'
dependencies: [1]
---

# Phase 2: Brand Assets Pipeline

## Overview

Build a reproducible SVG→PNG render script and use it to regenerate every raster brand asset:
the four Expo app assets, the docs favicon, and the docs OG image. The script is committed so
assets can be rebuilt from source rather than being opaque binaries.

## Requirements

**Functional**

- One `pnpm brand:assets` command regenerates all PNGs from `assets/brand/*.svg`.
- Output covers Expo's four required assets plus docs favicon and OG card.
- Each output picks the correct mark variant for its size, per the icon ladder.
- Splash and adaptive-icon background colors move from Atlas `#2E3C4B` to Caracal Ink `#0A0D11`.

**Non-functional**

- Deterministic: two runs produce identical bytes.
- Render dependency is a devDependency only — never shipped in the app bundle.

## Architecture

```
assets/brand/*.svg  ──▶  scripts/render-brand-assets.mjs  ──▶  assets/*.png
                                    │                          docs/public/favicon.svg
                                    │                          docs/public/og.jpg
                                    └─ sharp (devDependency)
```

`sharp` rasterizes SVG via librsvg. Because Phase 1 guarantees the mark SVGs contain no text
and no external font references, there is no font-substitution risk — the only inputs are
paths, ellipses, and circles.

Asset matrix:

| Output                     | Size      | Variant              | Background          | Notes                                                                    |
| -------------------------- | --------- | -------------------- | ------------------- | ------------------------------------------------------------------------ |
| `assets/icon.png`          | 1024×1024 | full mark            | Ink `#0A0D11`       | mark at ~70% of canvas                                                   |
| `assets/adaptive-icon.png` | 1024×1024 | full mark            | transparent         | Android masks it; keep generous safe-zone padding (mark ≤ 66% of canvas) |
| `assets/splash-icon.png`   | 512×512   | full mark            | transparent         | `imageWidth: 150` in app.config.ts                                       |
| `assets/favicon.png`       | 48×48     | compact              | Ink                 | web favicon for Expo web                                                 |
| `docs/public/favicon.svg`  | vector    | compact              | transparent         | replaces the existing Atlas favicon                                      |
| `docs/public/og.jpg`       | 1200×630  | full mark + wordmark | Ink radial gradient | recreate the brand sheet's social card                                   |

The OG card is the one output that needs text. **Decision: build it as a pure SVG using the
outlined wordmark paths from Phase 1** and rasterize with `sharp` like everything else. No
headless browser, no extra dependency, fully reproducible. This makes Phase 1 step 5 (glyph
outlining) a hard prerequisite for this phase.

## Related Code Files

- Create: `scripts/render-brand-assets.mjs` — the render script
- Create: `assets/brand/og-card.svg` — 1200×630 social card source (or an HTML template)
- Modify: `assets/icon.png`, `assets/adaptive-icon.png`, `assets/splash-icon.png`, `assets/favicon.png` — regenerated
- Modify: `docs/public/favicon.svg`, `docs/public/og.jpg` — regenerated
- Modify: `package.json` — add `sharp` devDependency + `brand:assets` script
- Modify: `app.config.ts` — `android.adaptiveIcon.backgroundColor` and `expo-splash-screen.backgroundColor` from `#2E3C4B` to `#0A0D11`

## Implementation Steps

1. Add `sharp` as a devDependency via `pnpm add -D sharp`.
2. Write `scripts/render-brand-assets.mjs`: read each source SVG, apply the size/variant/
   background matrix above, write PNGs. Use `sharp(svgBuffer).resize(...).flatten({background})`
   for opaque outputs and skip `flatten` for transparent ones.
3. Add `"brand:assets": "node scripts/render-brand-assets.mjs"` to `package.json` scripts.
4. Run it and visually inspect all six outputs — verify the mark is centered, padding is
   correct, and the compact variant is legible at 48px.
5. Update `app.config.ts` background colors to `#0A0D11` in both places.
6. Build the OG card: `assets/brand/og-card.svg` reproducing the social-card block from the
   brand sheet — radial gradient `#17222C`→`#0A0D11`, the mark, the wordmark, and the
   `$ npx create-caracal-app` CLI line (note: the brand sheet mocks this as
   `npx caracal init`, which is not the real command — use the actual one from Phase 4).
   All text comes from Phase 1's outlined paths. Render to JPEG at 1200×630 via `sharp`.
7. Confirm `docs/public/favicon.svg` is the compact variant, not the full mark — the orbit
   disappears at favicon scale per the ladder.

## Success Criteria

- [x] `pnpm brand:assets` runs clean and regenerates all six assets
- [x] Running it twice produces byte-identical output
- [x] `assets/icon.png` is 1024×1024 with the mark on Ink, no transparency
- [x] `assets/adaptive-icon.png` mark stays inside Android's 66% safe zone when circle-masked
- [x] `app.config.ts` contains no `#2E3C4B`
- [x] `sharp` appears only under `devDependencies`
- [x] Docs favicon renders as a recognizable caracal head at 16px in a browser tab

## Risk Assessment

**Android adaptive-icon cropping** — Android masks adaptive icons to a circle/squircle and
crops up to 33% of each edge. If the mark fills the canvas it loses its ears. Mitigation: cap
the mark at 66% of canvas width and verify by overlaying a circle mask.

**sharp install on Apple Silicon** — `sharp` ships prebuilt binaries; if the install fails,
`@resvg/resvg-js` is a drop-in alternative for SVG rasterization with no system libvips
dependency. Decide at install time; do not add both.

**OG card depends entirely on Phase 1's outlining** — this phase cannot produce the OG card if
Phase 1 ships the lockup as font-referencing SVG. Confirm `caracal-lockup-horizontal.svg`
contains only `<path>` elements before starting step 6. The headless-browser fallback was
considered and rejected (heavy dependency, poor reproducibility).

<!-- Updated: Validation Session 1 - OG card locked to outlined-SVG + sharp; CLI line corrected from the brand sheet's mock command to the real one -->
