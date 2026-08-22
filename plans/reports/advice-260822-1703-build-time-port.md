# Advice — Porting meo-cung-app build-time perf to react-native-template-atlas

Source: `/Users/tuananhle/Workspace/Zodinet/meomeo/meo-cung-app` branch `perf/build-time-android-ios`
(commits `9edf4df`, `7e3452c`, `2b7d4f4`, `6316df2`, `0708e1e`).
Target: this repo @ `master` (018073f), Expo SDK 57.0.14 / RN 0.86.2.

## Verified baseline delta

| Item                           | meo-cung (after)                                  | template (now)                             |
| ------------------------------ | ------------------------------------------------- | ------------------------------------------ |
| `buildReactNativeFromSource`   | removed                                           | **`true`**                                 |
| `useHermesV1`                  | removed (defaults true ≥ SDK56)                   | **`true`** (redundant)                     |
| `android.buildArchs`           | env-gated                                         | absent (all 4 ABIs)                        |
| Gradle daemon/parallel/caching | plugin, verified in generated `gradle.properties` | absent (Expo defaults)                     |
| R8 / shrinkResources           | on, **runtime-unverified**                        | off                                        |
| Font/icon imports              | subpath                                           | barrel (`_layout.tsx`, `theme-toggle.tsx`) |
| `*.ipa/*.aab/*.apk` ignored    | yes                                               | **no**                                     |

Both repos gitignore `android/` + `ios/` (CNG), so every native config must live in
`app.config.ts` or a config plugin — never in a checked-in native file.

## Recommended — apply these 5

### 1. Drop `buildReactNativeFromSource` + `useHermesV1` — biggest single win

`app.config.ts:44-45`. Measured in source repo: iOS debug 14m52s → 8m44s; Android
9m11s → 3m00s. It recompiles the RN C++ core (and Hermes per-ABI on Android) on
every build. Only needed for legacy Hermes, which SDK 57 does not use — the gradle
plugin defaults `useHermesV1` to true when absent.
Keep `android.usePrecompiledHeaders: true`; it still helps the autolinked modules
that do compile from source.

### 2. `android.buildArchs`

```ts
buildArchs: Env.APP_ENV === 'production' ? ['armeabi-v7a','arm64-v8a'] : ['arm64-v8a'],
```

Confirmed to emit `reactNativeArchitectures=arm64-v8a`. x86/x86_64 only serve Intel
emulators. **Template caveat:** this drops Intel-emulator support for anyone
scaffolding on an Intel Mac — document it in README.

### 3. New `plugins/withGradlePerformance.js`

Port verbatim from `9edf4df`. This repo has **no** plugins dir and no gradle plugin
at all, so it is a pure addition over Expo defaults (heap 2GB, no parallel, no
build cache). Daemon stays gated on `!process.env.EAS_BUILD`. Register as the first
entry in `plugins:`.

### 4. Subpath font/icon imports

Only 2 files here (vs 14 in source), but the barrel cost is identical — the Inter
barrel ships 18 ttf into `res/raw` for the 4 used.

- `src/app/_layout.tsx:4-10` → `@expo-google-fonts/inter/400Regular` etc., and take
  `useFonts` from `expo-font` (importing it from the barrel re-drags the family).
  Same package version `^0.4.2` as source, where subpaths are proven working.
- `src/components/theme-toggle.tsx:1` → `import Ionicons from '@expo/vector-icons/Ionicons'`.
- Worth adding an ESLint `no-restricted-imports` guard so template users don't
  regress it.

### 5. `.gitignore` build artifacts

Add `*.ipa`, `*.aab`, `*.apk`. This repo's `version` script is
`pnpm run prebuild && git add .` — identical exposure to `eas build --local` output.

## Do NOT port as-is

**R8 + shrinkResources** (`2b7d4f4`). Its own commit message says _"NOT yet verified
at runtime"_ — R8 strips reflectively-accessed code and failures only appear on
device. In an app repo that is a QA task; in a **template** it is unshippable: you
cannot test the proguard rules for libraries your users will add. Recommend leaving
off, and documenting the two flags in README as an opt-in with a "requires device QA"
note.

**`ios.useFrameworks: 'static'` / `forceStaticLinking: ['RNFBApp']`** — Firebase-only,
this repo has no Firebase. Do not copy.

**`withSkipLint`** — not part of the perf branch. It disables all AGP lint on release
builds. Real time saver, but silencing lint by default in a template is a bad default.
Skip.

## Verification after applying

1. `pnpm prebuild:production` → assert generated `android/gradle.properties` contains
   `reactNativeArchitectures=arm64-v8a` (or the prod pair), `org.gradle.parallel=true`,
   `org.gradle.caching=true`, `org.gradle.daemon=true`.
2. `pnpm android` and `pnpm ios` cold, timed; then a no-op rebuild.
3. Confirm Hermes V1 resolves (not legacy 0.15.0) and fonts render — a wrong subpath
   fails silently as a fallback system font, not as a build error.
4. `pnpm check-all`.

## Open questions

- Should the template default to arm64-only for dev, given some users are on Intel Macs?
- Add the ESLint barrel-import guard, or leave it as documentation only?
