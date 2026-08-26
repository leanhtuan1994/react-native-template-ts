# Caracal Starter Documentation

Official documentation site for the React Native Caracal Starter Kit, built with
[Fumadocs](https://fumadocs.dev/) on Next.js (App Router).

## 🚀 Quick Start

```bash
# Install dependencies (standalone — not part of the root pnpm workspace)
pnpm install --ignore-workspace

# Start the dev server
pnpm dev

# Build for production
pnpm build
```

The dev server runs at `localhost:3000`.

## 📁 Project Structure

```
docs/
├── app/                 # Next.js App Router
│   ├── (home)/          # Marketing landing page
│   ├── docs/            # Docs layout + [[...slug]] catch-all page
│   ├── api/search/      # Orama search route
│   ├── llms.txt/        # llms.txt index route
│   ├── llms-full.txt/   # full-text llms route
│   ├── layout.tsx       # Root layout (fonts, theme, providers)
│   ├── layout.config.tsx# Shared nav/sidebar options
│   └── global.css       # Tailwind v4 + Fumadocs preset + brand tokens
├── components/          # Branded React components (Hero, FeatureGrid, …)
├── content/docs/        # Documentation pages (MDX) + meta.json sidebars
├── lib/source.ts        # Fumadocs content source loader
├── mdx-components.tsx    # Globally-registered MDX components
├── source.config.ts     # fumadocs-mdx collection config
└── vercel.json          # Vercel build config
```

## 🧞 Commands

| Command                           | Action                                |
| :-------------------------------- | :------------------------------------ |
| `pnpm install --ignore-workspace` | Installs dependencies                 |
| `pnpm dev`                        | Starts dev server at `localhost:3000` |
| `pnpm build`                      | Builds the production site            |
| `pnpm start`                      | Serves the production build           |

## 🛠️ Built With

- [Next.js](https://nextjs.org/) (App Router) - React framework
- [Fumadocs](https://fumadocs.dev/) - Documentation framework (search, sidebar, TOC)
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [Inter](https://rsms.me/inter/) + [IBM Plex Mono](https://www.ibm.com/plex/) - Typography

## 📝 Writing Documentation

Documentation files live in `content/docs/` as MDX. Each file maps to a route
under `/docs` based on its path. Sidebar order/grouping is controlled by
`meta.json` in each folder.

Example: `content/docs/getting-started/create-new-app.mdx` → `/docs/getting-started/create-new-app`

Shared MDX components (`Callout`, `Cards`, `Tabs`, `Steps`, `Hero`, …) are
registered in `mdx-components.tsx`, so MDX files can use them without imports.

## ☁️ Deployment

Deployed on [Vercel](https://vercel.com/) with the project **root directory set
to `docs/`**. Vercel auto-detects Next.js; build config is in `vercel.json`.

## 🔗 Links

- [Main Repository](https://github.com/leanhtuan1994/react-native-caracal)
