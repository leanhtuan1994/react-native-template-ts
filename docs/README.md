# Atlas Starter Documentation

Official documentation site for the React Native Atlas Starter Kit.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## 📁 Project Structure

```
docs/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and media
│   ├── components/  # Custom Astro components
│   └── content/
│       └── docs/    # Documentation pages (MDX/MD)
├── astro.config.mjs # Astro configuration
└── package.json
```

## 🧞 Commands

| Command        | Action                                          |
| :------------- | :---------------------------------------------- |
| `pnpm install` | Installs dependencies                           |
| `pnpm dev`     | Starts local dev server at `localhost:4321`     |
| `pnpm build`   | Build production site to `./dist/`              |
| `pnpm preview` | Preview your build locally before deploying     |

## 🛠️ Built With

- [Astro](https://astro.build/) - Static site framework
- [Starlight](https://starlight.astro.build/) - Documentation theme
- [TailwindCSS](https://tailwindcss.com/) - Styling

## 📝 Writing Documentation

Documentation files are located in `src/content/docs/` and use MDX or Markdown format. Each file is automatically converted to a route based on its file name.

Example:
- `src/content/docs/getting-started/create-new-app.md` → `/getting-started/create-new-app`

## 🔗 Links

- [Live Documentation](https://leanhtuan1994.github.io/react-native-template-atlas/)
- [Main Repository](https://github.com/leanhtuan1994/react-native-template-atlas)
