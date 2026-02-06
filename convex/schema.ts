import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  contents: defineTable({
    title: v.string(),
    slug: v.string(),
    description: v.string(),
    videoUrl: v.string(),
    videoType: v.union(v.literal('instagram'), v.literal('tiktok')),
    category: v.union(
      v.literal('rodilla'),
      v.literal('espalda'),
      v.literal('cuello'),
      v.literal('cadera'),
      v.literal('ciatica'),
      v.literal('hernia'),
      v.literal('canal-lumbar'),
      v.literal('enfermedad-discal'),
      v.literal('artrosis-lumbar'),
      v.literal('general')
    ),
    tags: v.array(v.string()),
    status: v.union(v.literal('draft'), v.literal('published')),
    authorId: v.string(),
    publishedAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_slug', ['slug'])
    .index('by_category', ['category'])
    .index('by_status', ['status'])
    .index('by_status_category', ['status', 'category'])
    .index('by_publishedAt', ['publishedAt']),
})
