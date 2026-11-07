import { readFile, readdir } from "node:fs/promises";
import { relative, resolve, sep } from "node:path";
import { beforeAll, describe, expect, it } from "vite-plus/test";

const output = resolve("dist");
const origin = "https://portfolio.test";
const pages = new Map<string, string>();
const routes = [
  { path: "/blogs/", active: "/blogs/", heading: "Writing &amp; essays" },
  {
    path: "/blogs/webhook-for-you-and-me/",
    active: "/blogs/",
    heading: "Webhook for You and Me",
  },
  { path: "/projects/", active: "/projects/", heading: "Engineering" },
  { path: "/projects/pulsedeck/", active: "/projects/", heading: "PulseDeck" },
  {
    path: "/blogs/building-a-small-reliable-queue/",
    active: "/blogs/",
    heading: "Building a Small, Reliable Queue",
  },
  { path: "/projects/fieldnotes/", active: "/projects/", heading: "Fieldnotes" },
];

async function collectPages(directory: string): Promise<void> {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      await collectPages(filename);
    } else if (entry.name.endsWith(".html")) {
      const path = `/${relative(output, filename).split(sep).join("/")}`;
      const route = path.endsWith("/index.html") ? path.slice(0, -10) : path;
      const html = await readFile(filename, "utf8");
      pages.set(route, html);
    }
  }
}

beforeAll(async () => {
  await collectPages(output);
});

it("shows the Markdown examples on the homepage and in their archives", () => {
  for (const [archive, slug, title] of [
    ["blogs", "building-a-small-reliable-queue", "Building a Small, Reliable Queue"],
    ["projects", "fieldnotes", "Fieldnotes"],
  ]) {
    for (const route of ["/", `/${archive}/`]) {
      const html = pages.get(route)!;
      expect(html).toContain(title);
      expect(html).toContain(`href="/${archive}/${slug}/"`);
    }
    expect(pages.get(`/${archive}/${slug}/`)).toContain("<h2");
  }
});

for (const route of routes) {
  describe(`production page ${route.path}`, () => {
    it("ships the expected content inside the shared accessible page shell", () => {
      const html = pages.get(route.path);
      expect(html, `Missing build output for ${route.path}`).toBeDefined();
      expect(html!.match(/<main\b/g)).toHaveLength(1);
      expect(html!.match(/<h1\b/g)).toHaveLength(1);
      expect(html).toMatch(/<header\b/);
      expect(html).toMatch(/<footer\b/);
      expect(html).toContain('aria-label="Main navigation"');
      expect(html).toContain(route.heading);
    });

    it("marks the current navigation section and avoids placeholder links", () => {
      const html = pages.get(route.path)!;
      const navigation = html.match(
        /<nav\b[^>]*aria-label="Main navigation"[^>]*>([\s\S]*?)<\/nav>/,
      )?.[1];
      expect(navigation).toBeDefined();
      const activeLinks = [...navigation!.matchAll(/<a\b[^>]*aria-current="page"[^>]*>/g)];
      expect(activeLinks).toHaveLength(1);
      expect(activeLinks[0][0]).toContain(`href="${route.active}"`);
      expect(html).not.toMatch(/<a\b[^>]*\bhref=["']#["']/);
    });
  });
}

it("resolves local page and fragment links across the production site", () => {
  for (const [route, html] of pages) {
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    expect(new Set(ids).size, `Duplicate ids on ${route}`).toBe(ids.length);

    for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
      const destination = new URL(href.replaceAll("&amp;", "&"), `${origin}${route}`);
      if (destination.origin !== origin) continue;
      if (/\.[^/]+$/.test(destination.pathname) && !destination.pathname.endsWith(".html")) {
        continue;
      }

      const targetRoute = destination.pathname.endsWith("/index.html")
        ? destination.pathname.slice(0, -10)
        : destination.pathname;
      const target = pages.get(targetRoute) ?? pages.get(`${targetRoute}/`);
      expect(target, `Broken page link on ${route}: ${href}`).toBeDefined();
      if (destination.hash) {
        const fragment = decodeURIComponent(destination.hash.slice(1));
        const targetIds = [...target!.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
        expect(targetIds, `Broken fragment link on ${route}: ${href}`).toContain(fragment);
      }
    }
  }
});
