<h1 align="center">
  <img alt="logo" src="./assets/icon.png" width="124px" style="border-radius:10px"/><br/>
Mobile App </h1>

> This Project is based on [Caracal starter](https://react-native-template-atlas.vercel.app)

## Requirements

- [React Native dev environment ](https://reactnative.dev/docs/environment-setup)
- [Node.js LTS release](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall), required only for macOS or Linux users
- [Pnpm](https://pnpm.io/installation)
- [Cursor](https://www.cursor.com/) or [VS Code Editor](https://code.visualstudio.com/download) ⚠️ Make sure to install all recommended extension from `.vscode/extensions.json`

## 👋 Quick start

Clone the repo to your machine and install deps :

```sh
git clone https://github.com/user/repo-name

cd ./repo-name

pnpm install
```

To run the app on ios

```sh
pnpm ios
```

To run the app on Android

```sh
pnpm android
```

## 🎨 Replace the brand assets

This project ships with the Caracal template's logo as a placeholder. To make it yours:

1. Replace the SVG sources in `assets/brand/` with your own mark. Keep the filenames — the
   render script looks them up by name.
2. Regenerate every app icon, splash, and favicon from those sources:

   ```sh
   pnpm brand:assets
   ```

3. Update the splash and adaptive-icon `backgroundColor` values in `app.config.ts`.

See `assets/brand/README.md` for the size ladder and which variant each output uses.

## ✍️ Documentation

- [Rules and Conventions](https://react-native-template-atlas.vercel.app/getting-started/rules-and-conventions/)
- [Project structure](https://react-native-template-atlas.vercel.app/getting-started/project-structure)
- [Environment vars and config](https://react-native-template-atlas.vercel.app/getting-started/environment-vars-config)
- [UI and Theming](https://react-native-template-atlas.vercel.app/ui-and-theme/ui-theming)
- [Components](https://react-native-template-atlas.vercel.app/ui-and-theme/components)
- [Forms](https://react-native-template-atlas.vercel.app/ui-and-theme/Forms)
- [Data fetching](https://react-native-template-atlas.vercel.app/guides/data-fetching)
- [Contribute to starter](https://react-native-template-atlas.vercel.app/how-to-contribute/)

## AI Configuration

This repository includes a root `llms.txt` file that defines canonical documentation for AI tools.
