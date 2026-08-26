---
phase: 5
title: 'Docs Site Rebrand'
status: pending
priority: P2
effort: '6h'
dependencies: [1, 2]
---

# Phase 5: Docs Site Rebrand

## Overview

The heaviest phase. The Fumadocs site currently runs an entirely different visual identity —
**blurple `#5b53ff`** with Inter / IBM Plex Mono — that has no relationship to the Caracal
palette. This phase replaces the color system, typography, mark, metadata, and every brand
string across 30 of the site's 33 MDX content files.

## Requirements

**Functional**

- Fumadocs theme variables carry the Caracal palette in both light and dark schemes.
- Fonts switch to Space Grotesk (sans) + JetBrains Mono (mono).
- The nav shows the Caracal mark, not just text.
- Favicon and OG image come from Phase 2's pipeline.
- All `atlas` strings in MDX content, components, and metadata are gone.

**Non-functional**

- Dark-first stays the default (`defaultTheme: 'dark'`), matching both the current site and the
  brand sheet's Ink base.
- Light mode uses the brand sheet's light variants so contrast holds at 4.5:1.

## Architecture

### Color mapping

Fumadocs drives everything off `--color-fd-*` CSS variables. The current file defines a
blue/purple `oklch` ramp around hue 277. Caracal needs two hues: orange `#C8763C` for primary
and cyan `#7DD3E8` for secondary/links, on a near-neutral Ink base.

| Fumadocs var                  | Current (blurple)      | Caracal dark          | Caracal light  |
| ----------------------------- | ---------------------- | --------------------- | -------------- |
| `--color-fd-background`       | `oklch(0.16 0.03 277)` | Ink `#0A0D11`         | Sand `#F5F1EA` |
| `--color-fd-foreground`       | `oklch(0.96 0.01 277)` | `#E8EDF2`             | `#171C22`      |
| `--color-fd-primary`          | `oklch(0.72 0.18 277)` | Caracal `#C8763C`     | `#B0642F`      |
| `--color-fd-ring`             | `oklch(0.72 0.18 277)` | Caracal `#C8763C`     | `#B0642F`      |
| `--color-fd-card` / `popover` | hue-277 ramp           | `#0E1319` / `#131B23` | Sand tints     |
| `--color-fd-border`           | `oklch(0.3 0.03 277)`  | `#1C242D`             | warm hairline  |
| `--color-fd-muted-foreground` | `oklch(0.72 0.02 277)` | `#94A3AF`             | `#5C5346`      |

The custom `--brand-blurple` / `--brand-blurple-soft` variables and the `.brand-gradient-text`
/ `.brand-mesh` utilities must be renamed and recolored — they are consumed by `hero.tsx`.
Rename to `--brand-caracal` / `--brand-orbit` and rebuild the gradient as Caracal→Orbit rather
than a purple ramp.

### Typography

`docs/app/layout.tsx` currently imports `Inter` and `IBM_Plex_Mono` from `next/font/google`.
Both replacements are Google Fonts, so the swap is mechanical:

```
Inter          → Space_Grotesk  (weights 400,500,600,700)
IBM_Plex_Mono  → JetBrains_Mono (weights 400,500,700)
```

CSS variable names (`--font-inter`, `--font-ibm-plex-mono`) are referenced in `global.css`'s
`@theme inline` block and in `layout.tsx`'s `className` — rename both sides together.

### Mark in nav

`layout.config.tsx` currently renders text only. Add the compact mark SVG (Phase 1) as an
inline component beside the wordmark, following the brand sheet's horizontal lockup.

## Related Code Files

- Modify: `docs/app/global.css` — full palette swap, font var renames, `.brand-*` utility recolor
- Modify: `docs/app/layout.tsx` — font imports, `metadata` title/description/OG (3 atlas)
- Modify: `docs/app/layout.config.tsx` — nav title, `githubUrl`, add mark (2)
- Modify: `docs/components/hero.tsx` — `REPO` constant, gradient class usage (1)
- Modify: `docs/components/github-star.tsx` — `REPO` constant (1)
- Modify: `docs/mdx-components.tsx` — "Atlas brand components" comment (1)
- Modify: `docs/app/llms.txt/route.ts` — the `# Atlas Starter` heading (1)
- No change needed: `docs/app/llms-full.txt/route.ts` — verified to contain zero brand strings
- Modify: `docs/package.json` — `name: atlas-docs` → `caracal-docs` (1)
- Modify: `docs/README.md` (3)
- Modify: 30 of the 33 MDX files under `docs/content/docs/` — highest density:
  `guides/navigation.mdx` (18), `getting-started/environment-vars-config.mdx` (10),
  `guides/state-management.mdx` (7), `reference/how-to-contribute.mdx` (5),
  `getting-started/react-compiler-new-arch.mdx` (5)
- Consumes: `docs/public/favicon.svg`, `docs/public/og.jpg` (regenerated in Phase 2)
- Consumes: `assets/brand/caracal-mark-compact.svg` (Phase 1) for the nav mark

## Implementation Steps

1. Rewrite the palette block in `docs/app/global.css` per the mapping table. Define both
   `:root` (light) and `.dark` (dark) — the current file only overrides `.dark` fully and
   leaves light mode mostly on Fumadocs defaults, so light mode needs more attention now that
   the brand specifies a Sand surface.
2. Rename `--brand-blurple` / `--brand-blurple-soft` → `--brand-caracal` / `--brand-orbit`;
   rebuild `.brand-gradient-text` as a Caracal→Orbit gradient and `.brand-mesh` with warm
   orange + cyan radial washes instead of purple.
3. Swap the fonts in `docs/app/layout.tsx`, renaming the CSS variables on both sides
   (`layout.tsx` className and `global.css` `@theme inline`).
4. Update `metadata` in `layout.tsx`: title default/template, description, OG title.
5. Update `layout.config.tsx`: nav wordmark to "Caracal Starter", `githubUrl` to the renamed
   repo, and inline the compact mark SVG beside the text.
6. Update the two `REPO` constants in `hero.tsx` and `github-star.tsx`.
7. Update `docs/package.json` name, `docs/README.md`, the `mdx-components.tsx` comment, and
   `docs/app/llms.txt/route.ts` (the `llms-full.txt` route needs no change — verified clean).
8. Sweep the 30 affected MDX content files (of 33 total). Apply the Phase 3 replacement map —
   but read each match in context; docs contain code samples with `com.atlas` bundle IDs and
   `npx create-atlas-rn-app` commands that must land on the correct new values, not a naive
   substitution. The CLI command becomes `npx create-caracal-app`, matching Phase 4.
9. Verify `docs/public/favicon.svg` and `og.jpg` are Phase 2's outputs, not the Atlas originals.
10. Run `cd docs && pnpm build` and inspect the rendered site in both light and dark mode.

## Success Criteria

- [x] `grep -rn "atlas\|blurple" docs/ -i --exclude-dir=node_modules` returns zero matches
- [x] `cd docs && pnpm build` succeeds with no type or lint errors
- [x] No `oklch(... 277)` hue values remain in `global.css`
- [x] Dark mode renders Ink background with Caracal-orange primary buttons
- [x] Light mode body text and links hold ≥4.5:1 contrast — verified by **measured contrast
      ratios** (all 11 light/dark pairs computed, all passing) and by confirming the light tokens
      are present in the served CSS bundle. **Not** confirmed by screenshot: headless Chrome
      would not paint the page reliably in this environment. Dark mode was screenshot-verified.
- [x] Nav shows the caracal mark beside "Caracal Starter"
- [x] Browser tab favicon is the caracal silhouette
- [x] Hero gradient text uses Caracal→Orbit, no purple
- [x] Code samples in MDX show `com.caracal` and `npx create-caracal-app`

## Risk Assessment

**Contrast regression in light mode** — the brand sheet only validates the _mark_ colors
against Sand, not body text or UI chrome. Caracal `#B0642F` as a primary button fill needs white
or Ink text on it; verify with a contrast checker rather than assuming. If `#B0642F` fails as a
text color on Sand, use it as a fill-only color and keep body text at `#171C22`.

**MDX code samples need semantic, not textual, replacement** — a sample showing
`APP_ID=com.atlas.staging` and one showing the _concept_ of a bundle ID prefix need different
handling. Step 8 must read matches in context; this is the step most likely to produce a subtly
wrong doc.

**Orbit cyan as a link color on dark** — `#7DD3E8` on `#0A0D11` is high contrast and fine, but
the same cyan on Sand fails; the light variant `#1B7E97` must be used. Ensure the light-mode
block actually overrides it rather than inheriting the dark value.

**Font weight availability** — Space Grotesk ships 300-700; the brand sheet uses 500/600, both
available. JetBrains Mono via `next/font/google` needs explicit `weight` array as the current
IBM Plex import does.

<!-- Updated: Validation Session 1 - MDX count corrected to 33 total / 30 affected; llms-full route verified clean; brand.mdx page dropped (Phase 1 decision) -->
