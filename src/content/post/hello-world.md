---
title: "Hello, world"
publishDate: 2026-03-01
description: "A first entry — and a quick tour of what writings here can render."
tags: [ intro, demo, guide ]
---

Welcome. This is the first entry — kept around as a formatting reference until the real writing starts.

## Headings, lists, links

The body uses Newsreader for serif text and JetBrains Mono for code. Lists work the way you'd expect:

- A bullet
- Another bullet
- Yet another

Numbered lists too:

1. First item
2. Second item
3. Third item

Inline links — like [Astro's docs](https://docs.astro.build) — are styled subtly, hover to confirm.

## Code

Fenced code blocks are rendered by [Expressive Code](https://expressive-code.com), with syntax highlighting, a copy
button on hover, and a `min-light`/`min-dark` theme that follows the toggle:

```ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```

```bash
# CLI blocks render as terminals.
pnpm install
pnpm dev
```

## Math

[KaTeX](https://katex.org) is wired up. Inline like $E = mc^2$ and as a display:

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

## Quotes & emphasis

> A blockquote sits with a left rule, in italics, slightly muted.
>
> Multiple paragraphs work.

You can use *emphasis* and **strong** the usual way.

## Notes to self

- New writings go in `src/content/post/` — the filename becomes the URL slug.
- Site-wide settings (title, quotes, profile) live in `src/site.config.ts`.
- The README covers the rest.
