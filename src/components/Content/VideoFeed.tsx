import VideoFeedItem from './VideoFeedItem'
import styles from './VideoFeed.module.css'

interface ContentItem {
  _id: string
  title: string
  slug: string
  description: string
  category: string
  videoUrl: string
  videoType: 'instagram' | 'tiktok'
  tags: string[]
  publishedAt?: number
}

interface VideoFeedProps {
  contents: ContentItem[]
}

export default function VideoFeed({ contents }: VideoFeedProps) {
  if (contents.length === 0) {
    return (
      <div className={styles.emptyFeed}>
        <h3>No hay contenido disponible</h3>
        <p>Pronto publicaremos nuevo contenido educativo.</p>
      </div>
    )
  }

  return (
    <div className={styles.feed}>
      {contents.map((content, index) => (
        <div key={content._id}>
          <VideoFeedItem
            title={content.title}
            slug={content.slug}
            description={content.description}
            category={content.category}
            videoUrl={content.videoUrl}
            videoType={content.videoType}
            tags={content.tags}
            publishedAt={content.publishedAt}
            eager={index === 0}
          />
          {index < contents.length - 1 && <div className={styles.separator} />}
        </div>
      ))}
    </div>
  )
}
