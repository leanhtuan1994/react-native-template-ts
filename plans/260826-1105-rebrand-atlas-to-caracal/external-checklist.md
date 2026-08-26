# Caracal rebrand — external checklist

Everything in the repo is done. These steps touch services outside it and were **deliberately
not executed** — run them yourself, in this order. The ordering matters: renaming the GitHub
repo before publishing the CLI means `create-caracal-app` clones a repo that exists.

## 1. GitHub

Two repos exist. Confirmed plan:

| Repo                                        | Git remote | Action                              |
| ------------------------------------------- | ---------- | ----------------------------------- |
| `leanhtuan1994/react-native-atlas`          | `origin`   | **rename** → `react-native-caracal` |
| `leanhtuan1994/react-native-template-atlas` | `source`   | **delete**                          |

Every URL in this repo already points at `leanhtuan1994/react-native-caracal` — 35 references
across CI workflows, CLI, READMEs, and docs. Nothing outside `plans/` references
`react-native-template-atlas` as a repo, so deleting it breaks no in-repo link.

> **Check before deleting `react-native-template-atlas`.** The docs domain
> `react-native-template-atlas.vercel.app` takes its name from the Vercel _project_, and Vercel
> default-names projects after the repo they were imported from. In Vercel → project →
> Settings → Git, confirm which repo it is connected to:
>
> - connected to `react-native-atlas` → safe to delete, and the rename carries the connection over
> - connected to `react-native-template-atlas` → **reconnect it to `react-native-atlas` first**,
>   or the docs stop rebuilding while the hostname stays hard-coded in `metadataBase`,
>   `cli/utils.js`, and every docs link

- [ ] Confirm the Vercel Git connection (above) before deleting anything
- [ ] Rename `leanhtuan1994/react-native-atlas` → `leanhtuan1994/react-native-caracal`
- [ ] Delete `leanhtuan1994/react-native-template-atlas`
- [ ] Update local remotes (`source` goes away with its repo):

```bash
git remote set-url origin git@github-leanhtuan1994:leanhtuan1994/react-native-caracal.git
git remote remove source   # its repo is being deleted
```

- [ ] Update the repo description and topics
- [ ] Upload `docs/public/og.jpg` as the repo's social preview image
- [ ] Verify GitHub's rename redirect covers `https://api.github.com/repos/{owner}/{repo}/tags`,
      which `cli/clone-repo.js` calls to resolve the latest template tag

## 2. npm

- [x] `create-caracal-app` availability — **verified free** (registry returns 404)
- [ ] Publish from `cli/`: `cd cli && npm publish` (version is already set to `3.0.0`)
- [ ] Deprecate the old package — it is live at `2.0.3`, so this matters:

```bash
npm deprecate create-atlas-rn-app "Renamed to create-caracal-app"
```

- [ ] End-to-end check from a clean directory: `npx create-caracal-app test-app`

## 3. Expo / EAS

- [ ] Decide: create a new EAS project for slug `caracalapp`, or rename the existing one
- [ ] If new, copy the fresh `EAS_PROJECT_ID` into `env.js` (currently still
      `c3e1075b-6fe7-4686-aa49-35b46a229044`, which belongs to the Atlas project)
- [ ] Note that build history and OTA update channels do **not** migrate to a new project
- [ ] Register the `com.caracal` bundle ID in the Apple Developer portal if store builds are planned
- [ ] Update any EAS secrets or environment variables referencing the old identifiers

## 4. Vercel (docs site)

**Decision: the docs domain stays `react-native-template-atlas.vercel.app` for now.** It is the
deployment actually serving the docs, and a working link beats a correct-sounding dead one. It
will be replaced by a custom domain later.

This is why `atlas` still appears in the repo — see "Intentional exceptions" below.

- [ ] Optional now, required later: rename the Vercel project off the Atlas name
- [ ] When a custom domain is ready, update every reference in one pass:

```bash
grep -rl "react-native-template-atlas.vercel.app" . \
  --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.next \
  | xargs sed -i '' 's#react-native-template-atlas.vercel.app#YOUR-DOMAIN#g'
```

That covers `docs/app/layout.tsx` (`metadataBase`), `cli/utils.js`, `README.md`,
`README-project.md`, `cli/README.md`, and 7 CI workflow header comments.

- [ ] Add a redirect from the old docs domain to the new one
- [ ] Confirm the reconnected GitHub repo (post-rename) still triggers deploys

## Intentional exceptions to "zero atlas / zero obytes"

Two strings survive the sweep on purpose. Both are correct as-is — do not "clean" them.

| String                                   | Where                           | Why                                                                                                                                                       |
| ---------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Obytes` copyright + derivation notice   | `LICENSE`                       | MIT requires the upstream notice be retained in derivative works. Your copyright sits alongside it, and the notice names the upstream project explicitly. |
| `react-native-template-atlas.vercel.app` | docs, CLI, READMEs, CI comments | The live docs deployment. Replaced when a custom domain lands (step 4).                                                                                   |

A clean sweep therefore reads:

```bash
grep -rin "atlas\|obytes\|blurple" . \
  --exclude-dir={node_modules,.git,coverage,.expo,plans,ios,android,.next} \
  --exclude={pnpm-lock.yaml,release-manifest.json,LICENSE} \
  | grep -v "react-native-template-atlas.vercel.app"
```

`LICENSE` is excluded outright — every brand string in it is load-bearing attribution.

## 5. Local housekeeping

- [ ] The working directory is still named `react-native-template-obytes` — two rebrands behind.
      Rename it to `react-native-caracal`

## Known issues found during implementation (not part of the rebrand)

**Scaffolded projects inherit your Expo account.** `cli/setup-project.js` has a third
replacement rule, `/caracal/gi` → `'expo-owner'` (formerly `/atlas/gi`), that was meant to blank
out `EXPO_ACCOUNT_OWNER`. It never fires, because that value is `leanhtuan1994` — a personal
account name, not the brand name. It is vestigial from the upstream obytes template, where the
owner _was_ the brand. Every project scaffolded from this template therefore ships with
`EXPO_ACCOUNT_OWNER = 'leanhtuan1994'`. Pre-existing; out of scope for a rebrand.

**The `.maestro` E2E flows are dead.** All four assert against onboarding and login screens that
no longer exist in `src/app/` — only `(home)/index.tsx` and `(home)/settings.tsx` are routed.
The rebrand updated their assertion strings for consistency but did not make them pass.

**The repo's lint was already failing before this work.** Two Tailwind class-order errors in
`src/app/[...messing].tsx` and `src/components/ui/modal.tsx` predate the rebrand. They were
autofixed here (pure reordering, no behavior change) so `pnpm check-all` could go green.

**The documented deep-link scheme was wrong — now fixed.**
`docs/content/docs/guides/navigation.mdx` advertised `caracal://` (and before the rebrand,
`atlas://`) while `env.js` sets `SCHEME = 'caracalApp'`. All 11 occurrences were corrected to
`caracalApp://`. Note the Expo Go prefix derives from the **slug**, not the scheme, so it is
`exp+caracalapp://` (lowercase) rather than `exp+caracalApp://`.
