import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { beforeAll, describe, expect, it } from "vite-plus/test";

let html: string;
const output = resolve("dist");

beforeAll(async () => {
  html = await readFile(resolve(output, "index.html"), "utf8");
});

describe("production homepage", () => {
  it("renders the resume profile and removes unrelated experience", () => {
    for (const text of [
      "Navigatus",
      "Mexemy",
      "Technical skills",
      "LangChain",
      "Master of Social Work",
      "its.shahrear@gmail.com",
      "65+ hours",
      "BDT 9M",
    ]) {
      expect(html).toContain(text);
    }
    expect(html).toContain('href="https://www.linkedin.com/in/shahrear-ahamed/"');
    expect(html).not.toContain("Staff-level");
    expect(html).not.toContain("East West");
    expect(html).not.toContain("open to new opportunities");
  });

  it("ships the recovery page and deployment security policy", async () => {
    const notFound = await readFile(resolve(output, "404.html"), "utf8");
    expect(notFound).toContain("Page not found");
    expect(notFound).toContain('href="/"');
    const headers = await readFile(resolve(output, "_headers"), "utf8");
    expect(headers).toContain("X-Content-Type-Options: nosniff");
    expect(headers).toContain("X-Frame-Options: DENY");
    expect(headers).toContain("/_astro/*");
  });

  it("renders one main landmark and one primary heading with shared navigation", () => {
    expect(html.match(/<main\b/g)).toHaveLength(1);
    expect(html.match(/<h1\b/g)).toHaveLength(1);
    expect(html).toContain('aria-label="Main navigation"');
    expect(html).toMatch(/<header\b/);
    expect(html).toMatch(/<footer\b/);
  });

  it("resolves every homepage fragment link to a unique section", () => {
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    expect(new Set(ids).size).toBe(ids.length);
    const links = [...html.matchAll(/\bhref="\/?#([^"]+)"/g)];
    expect(links.length).toBeGreaterThan(0);
    for (const [, fragment] of links) {
      expect(ids, `Missing destination for #${fragment}`).toContain(fragment);
    }
  });

  it("ships every locally referenced image, icon, stylesheet, and script", async () => {
    const assets = new Set(
      [
        ...html.matchAll(/\b(?:src|href)="(\/[^"#?]+\.(?:webp|png|ico|svg|css|js))(?:\?[^"#]*)?"/g),
      ].map((match) => match[1]),
    );
    expect(assets.size).toBeGreaterThan(0);
    for (const asset of assets) {
      await expect(
        access(resolve(output, `.${asset}`)),
        `Missing asset: ${asset}`,
      ).resolves.toBeUndefined();
    }
  });
});
