---
phase: 4
title: 'llms.txt + search/polish + build + deploy + acceptance'
status: completed
priority: P2
dependencies: [3]
---

# Phase 4: llms.txt parity, search, deploy, acceptance

## Overview

Restore AI-doc parity (`llms.txt`/`llms-full.txt`), verify search/sidebar/TOC, polish, ship to Vercel, and run the acceptance checklist.

## Requirements

- Functional: `llms.txt` + `llms-full.txt` routes serve generated content; search returns results.
- Non-functional: clean prod build; Vercel deploy live; README/repo links updated.

## Architecture

- `app/llms.txt/route.ts` + `app/llms-full.txt/route.ts` generating from MDX source (Fumadocs `getLLMText`/source pattern).
- Fumadocs search (default Orama static search) wired via `app/api/search/route.ts` or static export per Fumadocs current guidance.

## Related Code Files

- Create: `docs/app/llms.txt/route.ts`, `docs/app/llms-full.txt/route.ts`, `docs/app/api/search/route.ts` (if dynamic search used).
- Modify: root `README.md` (docs URL → Vercel), remove gh-pages references; `docs/app/layout.tsx` (search/meta), OG image in `docs/public/`.

## Implementation Steps

1. Implement llms.txt + llms-full.txt routes; verify output covers all pages.
2. Configure + smoke-test search (Orama static or dynamic route).
3. Final polish: 404 page, metadata/OG, favicon, footer links (GitHub/obytes), analytics if desired.
4. `next build` clean; fix warnings.
5. Deploy to Vercel (root dir `docs/`); new URL, no redirect from old GitHub Pages. Confirm live URL, search, llms.txt in prod.
6. Update root `README.md` + any in-repo doc links to new URL.
7. Run full acceptance checklist from `plan.md`.

## Success Criteria

- [ ] `llms.txt` + `llms-full.txt` reachable locally and in prod.
- [ ] Search + sidebar + TOC work in prod.
- [ ] Vercel deploy succeeds; README points to new URL; no gh-pages remnants.
- [ ] Full plan.md acceptance checklist passes.

## Risk Assessment

- Search config differs static vs dynamic — pick per current Fumadocs version + Vercel.
- Public URL changes; no redirect from old GitHub Pages (confirmed acceptable). Update repo links/README to new Vercel URL.
