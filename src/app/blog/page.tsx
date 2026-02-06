import { fetchQuery } from 'convex/nextjs'
import { api } from '../../../convex/_generated/api'
import VideoFeed from '@/components/Content/VideoFeed'
import CategoryFilter from '@/components/Content/CategoryFilter'
import styles from './blog.module.css'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  let contents: Awaited<ReturnType<typeof fetchQuery<typeof api.contents.getPublished>>> = []

  try {
    contents = await fetchQuery(api.contents.getPublished, {})
  } catch {
    // Convex not configured yet - show empty state
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Videos Educativos - Medicina del Dolor PTY',
    description: 'Videos educativos sobre tratamiento del dolor',
    numberOfItems: contents.length,
    itemListElement: contents.map((content, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://www.medicinadeldolorpty.com/blog/${content.slug}`,
      name: content.title,
    })),
  }

  return (
    <div className={styles.pageContainer}>
      <section className={styles.hero}>
        <h1>Blog</h1>
        <p>
          Videos informativos sobre tratamientos del dolor, ejercicios y
          consejos del Dr. Edgar Luna.
        </p>
      </section>

      <CategoryFilter active="all" />

      <VideoFeed contents={contents as never} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
