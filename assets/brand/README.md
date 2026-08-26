# Caracal brand assets

Source of truth for every raster asset in this repo. The PNGs in `assets/` and the docs site's
`favicon.svg` / `og.jpg` are **generated** from these files — edit the SVG, then run:

```bash
pnpm brand:assets
```

Maintainer reference. If you scaffolded a project from this template, replace these files with
your own mark and re-run the command above.

## The mark

"Caracal in Orbit" — one closed caracal-head silhouette path, one rotated orbit ellipse, two eye
dots. All variants share the identical silhouette path data; only stroke weights and which
elements survive differ.

| File                            | Contents                  | Use                             |
| ------------------------------- | ------------------------- | ------------------------------- |
| `caracal-mark.svg`              | orbit + silhouette + eyes | Dark backgrounds, ≥48px         |
| `caracal-mark-light.svg`        | same, light palette       | Sand backgrounds, ≥48px         |
| `caracal-mark-compact.svg`      | silhouette + eyes         | 32–47px                         |
| `caracal-mark-micro.svg`        | silhouette only           | ≤20px                           |
| `caracal-lockup-horizontal.svg` | mark + wordmark           | Nav bars, headers               |
| `og-card.svg`                   | 1200×630 social card      | Source for `docs/public/og.jpg` |

## Degradation ladder

Non-negotiable — the mark stops being legible otherwise:

- **Orbit drops below 48px.** The ellipse stroke collapses into the silhouette.
- **Eyes drop below 32px.** They merge into a single smudge.
- **The silhouette never changes.** It is the mark at every size.

## Palette

| Token      | Dark      | Light     | Role                                    |
| ---------- | --------- | --------- | --------------------------------------- |
| Caracal    | `#C8763C` | `#B0642F` | Fur / silhouette stroke, primary accent |
| Orbit      | `#7DD3E8` | `#1B7E97` | Orbit ellipse, links, secondary accent  |
| Ink        | `#0A0D11` | —         | Background                              |
| Sand       | `#F5F1EA` | —         | Light surface                           |
| Foreground | `#E8EDF2` | `#171C22` | Eye dots, body text                     |

The light values are not decorative alternates — `#C8763C` and `#7DD3E8` both fail 4.5:1 against
Sand. Use the light column on any light surface.

### Text-safe light variants

The brand sheet states that `#B0642F` and `#1B7E97` hold 4.5:1 against Sand. **Measured, they do
not** — they reach 3.96:1 and 4.17:1. That clears the 3:1 bar for a mark or other non-text
graphic, but not the 4.5:1 bar for body text or links.

So light mode carries two steps: the mark colors above, and darker variants for anything that
renders as text or as a filled control.

| Role                  | Light value | Contrast on Sand | Foreground on it   |
| --------------------- | ----------- | ---------------- | ------------------ |
| Caracal, as text/fill | `#A25C2B`   | 4.55:1           | 5.04:1 (`#FFFDF9`) |
| Orbit, as text/fill   | `#1A788F`   | 4.52:1           | 5.01:1 (`#FFFDF9`) |

Dark mode needs no second step — `#C8763C` on Ink is 5.67:1 and `#7DD3E8` on Ink is 11.45:1.

## Typography

- **Space Grotesk** 600 / 500 — display, wordmark
- **JetBrains Mono** 400 / 700 — labels, CLI, code

The wordmark in `caracal-lockup-horizontal.svg` and `og-card.svg` is **outlined to paths**, so
those files render identically with no fonts installed. Regenerating them from live text would
reintroduce a font dependency — don't.

## Clear space

Keep free space of at least half the mark's height on all sides.
