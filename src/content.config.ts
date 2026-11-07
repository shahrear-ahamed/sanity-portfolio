import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default("Shahrear Ahamed"),
    category: z.string(),
    words: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default("Project"),
    timeline: z.string().optional(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          detail: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { blogs, projects };
