# Astro portfolio

A fresh, local portfolio project built with Astro, Vite+, TypeScript 6, and Tailwind CSS 4.

## Getting started

Use Node.js 22.23.4 or newer and the [Vite+ CLI](https://viteplus.dev/guide/).

```sh
vp install
vp run dev
```

Astro serves the site at http://localhost:4321.

## Commands

| Command          | Purpose                                           |
| ---------------- | ------------------------------------------------- |
| `vp run dev`     | Start the Astro development server                |
| `vp run check`   | Check Astro templates and TypeScript files        |
| `vp check`       | Run Vite+ formatting, lint, and TypeScript checks |
| `vp run format`  | Format project files                              |
| `vp run build`   | Build the static site into `dist/`                |
| `vp run preview` | Preview the production build                      |

Use `vp run dev` and `vp run build` so Vite+ runs Astro’s framework commands.
`astro.config.mjs` configures Astro and the Tailwind Vite plugin;
`vite.config.ts` configures Vite+ tooling. The pnpm workspace overrides Vite
with the Vite+ core package so Astro uses the unified toolchain.

## Project structure

```text
public/                 Static assets
src/layouts/            Shared page layouts and metadata
src/pages/              Astro file-based routes
src/styles/global.css   Tailwind import, theme tokens, and base styles
```

The homepage follows the editorial design system documented in `DESIGN.md`. Update
`src/pages/index.astro` to build out the site and `src/styles/global.css`
to customize the theme. No CMS is configured.

## Cloudflare deployment

`wrangler.jsonc` configures the `portfolio-shahrear` Worker to serve the static
site from `dist/` and pins its compatibility date.

Use these commands in Cloudflare Workers Builds:

- Build command: `pnpm run build`
- Deploy command: `pnpm dlx wrangler deploy`
- Preview command: `pnpm dlx wrangler preview`

The `previews` block in `wrangler.jsonc` enables Worker Previews for
non-production branch builds.

Use pnpm for deployment because the project requires pnpm in `devEngines`.

TypeScript 6 is used for compatibility with `@astrojs/check`.
`vp run check` runs `astro check` to check both `.astro` templates and
TypeScript files.

`@emnapi/runtime` is pinned to 1.11.3 to match the runtime used by
Astro’s `astro2tsx` converter. The automatically resolved 2.0 beta crashes
when loading the checker. Revisit this pin when upgrading Astro’s checker.

## Design references

`DESIGN.md` is versioned design guidance. The local `design/` folder is ignored
and must not be committed. The homepage adapts `design/home.html` into Astro
with compiled Tailwind styles and a persistent theme toggle. Reference article
content is retained for design review; newsletter subscriptions
and article detail pages are not yet connected.

## Reusable components

Pages use `src/layouts/SiteLayout.astro` for the shared header, footer,
background, and main content container. Pass `title` and an optional
`description`, and put page content inside the layout slot.

- `src/components/layout/`: shared header, footer, and background.
- `src/components/home/`: homepage sections and newsletter.
- `src/components/ui/`: theme toggle, sketch divider, and project card.

Interactive scripts live with their components. `BaseLayout.astro` owns the
HTML document, metadata, fonts, global stylesheet, and initial theme selection.

## Formatting

Use `vp fmt` to format the project and `vp fmt --check` to check formatting.
The `fmt` block in `vite.config.ts` enables Astro formatting with
`@astrojs/compiler-rs`, two-space indentation, and a 100-character preferred
line width. The local `design/` references are excluded.

Install the recommended Oxc extension in VS Code to use the same formatter
on save. `.editorconfig` keeps basic whitespace consistent in other editors.
