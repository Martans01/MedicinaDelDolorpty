import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

// ==================== QUERIES (publicas) ====================

export const getPublished = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 50
    const contents = await ctx.db
      .query('contents')
      .withIndex('by_status', (q) => q.eq('status', 'published'))
      .order('desc')
      .take(limit)

    return contents.sort((a, b) => (b.publishedAt ?? 0) - (a.publishedAt ?? 0))
  },
})

export const getByCategory = query({
  args: {
    category: v.string(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 50
    const contents = await ctx.db
      .query('contents')
      .withIndex('by_status_category', (q) =>
        q.eq('status', 'published').eq('category', args.category as never)
      )
      .order('desc')
      .take(limit)

    return contents.sort((a, b) => (b.publishedAt ?? 0) - (a.publishedAt ?? 0))
  },
})

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const content = await ctx.db
      .query('contents')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .first()

    if (!content || content.status !== 'published') {
      return null
    }
    return content
  },
})

export const getCategories = query({
  handler: async (ctx) => {
    const contents = await ctx.db
      .query('contents')
      .withIndex('by_status', (q) => q.eq('status', 'published'))
      .collect()

    const categoryCounts: Record<string, number> = {}
    for (const content of contents) {
      categoryCounts[content.category] = (categoryCounts[content.category] ?? 0) + 1
    }
    return categoryCounts
  },
})

export const getRecent = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 3
    const contents = await ctx.db
      .query('contents')
      .withIndex('by_status', (q) => q.eq('status', 'published'))
      .order('desc')
      .take(limit)

    return contents.sort((a, b) => (b.publishedAt ?? 0) - (a.publishedAt ?? 0))
  },
})

// ==================== ADMIN QUERIES (protegidas) ====================

export const getAll = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) return []

    const contents = await ctx.db.query('contents').order('desc').collect()
    return contents
  },
})

export const getById = query({
  args: { id: v.id('contents') },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) return null

    return await ctx.db.get(args.id)
  },
})

// ==================== MUTATIONS (protegidas) ====================

export const create = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('No autorizado')

    const now = Date.now()
    return await ctx.db.insert('contents', {
      ...args,
      authorId: identity.subject,
      publishedAt: args.status === 'published' ? now : undefined,
      createdAt: now,
      updatedAt: now,
    })
  },
})

export const update = mutation({
  args: {
    id: v.id('contents'),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    description: v.optional(v.string()),
    videoUrl: v.optional(v.string()),
    videoType: v.optional(v.union(v.literal('instagram'), v.literal('tiktok'))),
    category: v.optional(
      v.union(
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
      )
    ),
    tags: v.optional(v.array(v.string())),
    status: v.optional(v.union(v.literal('draft'), v.literal('published'))),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('No autorizado')

    const { id, ...fields } = args
    const existing = await ctx.db.get(id)
    if (!existing) throw new Error('Contenido no encontrado')

    const updates: Record<string, unknown> = { ...fields, updatedAt: Date.now() }

    // Set publishedAt when publishing for the first time
    if (fields.status === 'published' && !existing.publishedAt) {
      updates.publishedAt = Date.now()
    }

    await ctx.db.patch(id, updates)
  },
})

export const remove = mutation({
  args: { id: v.id('contents') },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('No autorizado')

    await ctx.db.delete(args.id)
  },
})

export const publish = mutation({
  args: { id: v.id('contents') },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('No autorizado')

    const existing = await ctx.db.get(args.id)
    if (!existing) throw new Error('Contenido no encontrado')

    await ctx.db.patch(args.id, {
      status: 'published',
      publishedAt: existing.publishedAt ?? Date.now(),
      updatedAt: Date.now(),
    })
  },
})

export const unpublish = mutation({
  args: { id: v.id('contents') },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('No autorizado')

    await ctx.db.patch(args.id, {
      status: 'draft',
      updatedAt: Date.now(),
    })
  },
})
