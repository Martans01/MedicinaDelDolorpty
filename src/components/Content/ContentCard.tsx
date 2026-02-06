import Link from 'next/link'
import styles from '@/app/blog/blog.module.css'

const CATEGORY_LABELS: Record<string, string> = {
  rodilla: 'Rodilla',
  espalda: 'Espalda',
  cuello: 'Cuello',
  cadera: 'Cadera',
  ciatica: 'Ciática',
  hernia: 'Hernia',
  'canal-lumbar': 'Canal Lumbar',
  'enfermedad-discal': 'Enf. Discal',
  'artrosis-lumbar': 'Artrosis Lumbar',
  general: 'General',
}

interface ContentCardProps {
  title: string
  slug: string
  description: string
  category: string
  videoType: 'instagram' | 'tiktok'
  publishedAt?: number
}

export default function ContentCard({
  title,
  slug,
  description,
  category,
  videoType,
  publishedAt,
}: ContentCardProps) {
  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString('es-PA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : ''

  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <div className={styles.cardPreview}>
        <span className={styles.cardVideoIcon}>
          {videoType === 'instagram' ? '📷' : '🎵'}
        </span>
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.cardMeta}>
          <span className={styles.cardCategory}>
            {CATEGORY_LABELS[category] || category}
          </span>
          {date && <span className={styles.cardDate}>{date}</span>}
        </div>
      </div>
    </Link>
  )
}
