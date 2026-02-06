import ContentCard from './ContentCard'
import styles from '@/app/blog/blog.module.css'

interface ContentItem {
  _id: string
  title: string
  slug: string
  description: string
  category: string
  videoType: 'instagram' | 'tiktok'
  publishedAt?: number
}

interface ContentGridProps {
  contents: ContentItem[]
}

export default function ContentGrid({ contents }: ContentGridProps) {
  if (contents.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>No hay contenido disponible</h3>
        <p>Pronto publicaremos nuevo contenido educativo.</p>
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {contents.map((content) => (
        <ContentCard
          key={content._id}
          title={content.title}
          slug={content.slug}
          description={content.description}
          category={content.category}
          videoType={content.videoType}
          publishedAt={content.publishedAt}
        />
      ))}
    </div>
  )
}
