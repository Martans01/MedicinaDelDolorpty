'use client'

import Link from 'next/link'
import LazyVideoEmbed from '@/components/Content/LazyVideoEmbed'
import styles from './styles.module.css'

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

interface VideoItem {
  _id: string
  title: string
  slug: string
  description: string
  category: string
  videoUrl: string
  videoType: 'instagram' | 'tiktok'
}

interface FeaturedVideoProps {
  video: VideoItem
}

export default function FeaturedVideo({ video }: FeaturedVideoProps) {
  if (!video) return null

  const truncatedDesc =
    video.description.length > 150
      ? video.description.slice(0, 150) + '...'
      : video.description

  return (
    <div className={styles.featuredSection}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Video Destacado</p>
        <h2 className={styles.sectionTitle}>Conoce Más Sobre Tu Salud</h2>
        <span className={styles.badge}>
          {CATEGORY_LABELS[video.category] || video.category}
        </span>
        <h3 className={styles.title}>{video.title}</h3>
        <div className={styles.videoWrapper}>
          <LazyVideoEmbed url={video.videoUrl} type={video.videoType} eager />
        </div>
        <p className={styles.description}>{truncatedDesc}</p>
        <div className={styles.ctaGroup}>
          <Link href="/#agendar-cita" className={styles.ctaPrimary}>
            Agendar Cita
          </Link>
          <Link href="/blog" className={styles.ctaSecondary}>
            Ver más videos
          </Link>
        </div>
      </div>
    </div>
  )
}
