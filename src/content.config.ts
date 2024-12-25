import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  ogImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

const enPostsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts/en" }),
  schema: postSchema,
})

const jaPostsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts/ja" }),
  schema: postSchema,
})

export const collections = {
  enPosts: enPostsCollection,
  jaPosts: jaPostsCollection,
}
