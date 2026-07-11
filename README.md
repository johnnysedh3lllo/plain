# hello

An open journal. Experiences, lessons learned, things I've realised to be true, some poetry, and the occasional bit of
tech — written for whoever's scrolling the internet looking for an answer and happens to find it here.

Built with [Astro](https://astro.build), on top of the [Astro Sienna](https://github.com/AnjayGoel/astro-sienna)
template (MIT).

## Commands

| Command        | What it does                                 |
|----------------|----------------------------------------------|
| `pnpm dev`     | Start the dev server with HMR                |
| `pnpm build`   | Type-check, build, and run Pagefind indexing |
| `pnpm preview` | Preview the production build locally         |
| `pnpm format`  | Run Biome and Prettier                       |
| `pnpm lint`    | Lint with Biome                              |

## Writing

Entries live in `src/content/post/` as `.md` or `.mdx` files; the filename becomes the slug under `/writings/`.

```yaml
---
title: "Title"
publishDate: 2026-01-12
description: "One-sentence summary used in cards, social previews, and meta tags."
tags: [tag-one, tag-two]
# updatedDate: 2026-02-01     # optional, shown as "Updated …"
# draft: true                 # excludes the entry from production builds
---
```

The about page is markdown at `src/content/page/about.md`.

## Configuration

- `src/site.config.ts` — title, description, hero quotes, profile, optional comments/analytics.
- `astro.config.ts` — `site` is the deployed origin (canonical URLs, sitemap, RSS, OG images).
- `src/styles/global.css` — design tokens (accent colour, surfaces, fonts) for light and dark themes.

## Deploying

Static output in `dist/`. The bundled `.github/workflows/deploy.yml` deploys to GitHub Pages on push to `main` and
handles the base path automatically — the only manual step is **Settings → Pages → Source: GitHub Actions**. For a
subpath on any other host, build with `BASE_PATH=/sub pnpm build`.

## License

[MIT](./LICENSE).
