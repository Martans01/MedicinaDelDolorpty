'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import LazyVideoEmbed from './LazyVideoEmbed'
import styles from './VideoFeed.module.css'

const CATEGORY_LABELS: Record<string, string> = {
  rodilla: 'Dolor de Rodilla',
  espalda: 'Dolor de Espalda',
  cuello: 'Dolor Cervical',
  cadera: 'Dolor de Cadera',
  ciatica: 'Ciática',
  hernia: 'Hernia Discal',
  'canal-lumbar': 'Canal Lumbar Estrecho',
  'enfermedad-discal': 'Enfermedad Discal',
  'artrosis-lumbar': 'Artrosis Lumbar',
  general: 'General',
}

interface VideoFeedItemProps {
  title: string
  slug: string
  description: string
  category: string
  videoUrl: string
  videoType: 'instagram' | 'tiktok'
  tags: string[]
  publishedAt?: number
  eager?: boolean
}

export default function VideoFeedItem({
  title,
  slug,
  description,
  category,
  videoUrl,
  videoType,
  tags,
  publishedAt,
  eager = false,
}: VideoFeedItemProps) {
  const [isVisible, setIsVisible] = useState(eager)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (eager) {
      setIsVisible(true)
      return
    }

    const el = itemRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [eager])

  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString('es-PA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <article
      ref={itemRef}
      className={`${styles.feedItem} ${isVisible ? styles.feedItemVisible : ''}`}
    >
      <div className={styles.feedItemHeader}>
        <span className={styles.feedItemCategory}>
          {CATEGORY_LABELS[category] || category}
        </span>
        {date && <span className={styles.feedItemDate}>{date}</span>}
      </div>

      <h2 className={styles.feedItemTitle}>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>

      <div className={styles.feedItemVideo}>
        <LazyVideoEmbed url={videoUrl} type={videoType} eager={eager} />
      </div>

      <p className={styles.feedItemDescription}>{description}</p>

      {tags.length > 0 && (
        <div className={styles.feedItemTags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.feedItemTag}>
              #{tag}
            </span>
          ))}
        </div>
      )}

      <Link href="/#agendar-cita" className={styles.feedItemCta}>
        Agendar Cita
      </Link>
    </article>
  )
}
