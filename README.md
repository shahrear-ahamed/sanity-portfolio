# Astro portfolio

A fresh, local portfolio project built with Astro, Vite+, TypeScript 6, and Tailwind CSS 4.

## Production checks

Run `vp run validate` for formatting, lint, TypeScript, Astro diagnostics, a fresh
production build, and output tests. Local pre-commit hooks run staged checks,
Astro diagnostics, and build-and-test validation. Cloudflare builds the site on
deployment; no separate GitHub CI workflow is configured.

Dependabot proposes weekly dependency updates. Review compatibility
before merging, especially the TypeScript/checker pair, Vite override, and
`@emnapi/runtime` pin. Dependency updates are not automatically merged.

`public/_headers` adds Cloudflare static-response security headers and long-lived
caching only for fingerprinted `/_astro/` assets. HTML and unversioned images
retain platform caching defaults. `src/pages/404.astro` supplies a recovery page.
Verify actual HTTP headers and a missing URL after deploying; output tests alone
cannot verify Cloudflare behavior.

### Remaining launch work

- Set the final production domain before adding canonical URLs, sitemap,
  domain-specific robots rules, and complete social sharing metadata.
- Add browser tests for theme persistence, keyboard navigation, and newsletter
  behavior, plus accessibility and mobile performance checks.
- Connect a newsletter provider before offering real subscriptions; replace
  reference content and article placeholders with finished content.
- Configure uptime alerts and review Cloudflare errors after deployment.
- Test a Content Security Policy against the inline theme script and Google
  font dependencies before enforcing it. Self-hosting fonts can simplify this.

Coverage thresholds are not enabled: current tests validate generated HTML and
assets, so a source coverage percentage would not measure interaction coverage.
No backend, database, or authentication is needed for the current static scope.

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

## Writing blogs and projects

Content lives in Astro collections defined in `src/content.config.ts`:

- `src/content/blogs/*.md` → `/blogs/[filename]/`
- `src/content/projects/*.md` → `/projects/[filename]/`

Use a lowercase, hyphenated filename; keep entries directly inside their collection
folder. Adding a Markdown file automatically adds its detail page and archive entry
and homepage preview on the next build. Both detail templates use the shared editorial design system.
The included articles and projects are reference examples you can edit or replace.
The archives and homepage previews read from the same Markdown collections.
Try `building-a-small-reliable-queue.md` and `fieldnotes.md` as editable dummy examples.

Blog example (`src/content/blogs/my-first-post.md`):

```md
---
title: My first post
description: A short introduction to this article.
date: 2026-11-07
category: Software Engineering
---

Your introduction goes here.

## A section heading

Write using Markdown: paragraphs, lists, links, images, and fenced code blocks.
```

Optional blog fields: `updated`, `author`, `subtitle`, and `words` (for example,
`"~900 words"`). Reading metadata is calculated from the body when `words` is omitted.

Project example (`src/content/projects/my-project.md`):

```md
---
title: My project
description: The problem this project solves.
category: Distributed Systems
timeline: November 2026
role: Lead engineer
stack:
  - Go
  - PostgreSQL
metrics:
  - label: Latency
    value: 12ms
    detail: P95 response time
---

## The challenge

Describe the problem and your approach.

## Architecture

Explain the design decisions.

## Outcomes

Share the results and lessons.
```

Only project `title` and `description` are required. Other project metadata is optional;
sections without metadata are omitted. Markdown code fences receive syntax highlighting.

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
content is retained as editable Markdown examples for design review. Newsletter
subscriptions are not yet connected.

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

## Commit hooks

Vite+ runs `vp staged` before each commit to format and check staged files,
then `vp run check` checks Astro templates and TypeScript. Failed checks stop
the commit. Staged checks can automatically fix and restage supported files.
The hook also runs `vp run test`, which builds the site and tests the generated
page structure, internal anchor destinations, and local asset availability.

The `prepare` script installs hooks after dependency installation. For an
existing checkout, run `vp hooks enable`; inspect setup with `vp hooks status`.

Run `vp run test` for the complete build-and-test workflow. `vp test` runs only
the tests against an existing `dist/` build. These checks do not replace browser
testing for visual appearance or client interactions.
