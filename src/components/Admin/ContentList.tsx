'use client'

import { useMutation } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { Id } from '../../../convex/_generated/dataModel'
import Link from 'next/link'
import styles from '@/app/gestion-contenido/admin.module.css'

interface Content {
  _id: Id<'contents'>
  title: string
  slug: string
  category: string
  status: 'draft' | 'published'
  publishedAt?: number
  createdAt: number
}

interface ContentListProps {
  contents: Content[]
}

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

export default function ContentList({ contents }: ContentListProps) {
  const publishMutation = useMutation(api.contents.publish)
  const unpublishMutation = useMutation(api.contents.unpublish)
  const removeMutation = useMutation(api.contents.remove)

  const handlePublish = async (id: Id<'contents'>) => {
    await publishMutation({ id })
  }

  const handleUnpublish = async (id: Id<'contents'>) => {
    await unpublishMutation({ id })
  }

  const handleDelete = async (id: Id<'contents'>) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este contenido?')) {
      await removeMutation({ id })
    }
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('es-PA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  if (contents.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>No hay contenido</h3>
        <p>Crea tu primer contenido para empezar.</p>
      </div>
    )
  }

  return (
    <div className={styles.contentGrid}>
      {contents.map((content) => (
        <div key={content._id} className={styles.contentCard}>
          <div className={styles.cardInfo}>
            <h3>{content.title}</h3>
            <div className={styles.cardMeta}>
              <span
                className={`${styles.badge} ${
                  content.status === 'published'
                    ? styles.badgePublished
                    : styles.badgeDraft
                }`}
              >
                {content.status === 'published' ? 'Publicado' : 'Borrador'}
              </span>
              <span className={`${styles.badge} ${styles.badgeCategory}`}>
                {CATEGORY_LABELS[content.category] || content.category}
              </span>
              <span className={styles.cardDate}>
                {formatDate(content.publishedAt ?? content.createdAt)}
              </span>
            </div>
          </div>
          <div className={styles.cardActions}>
            <Link
              href={`/gestion-contenido/editar/${content._id}`}
              className={`${styles.actionBtn} ${styles.editBtn}`}
            >
              Editar
            </Link>
            {content.status === 'draft' ? (
              <button
                onClick={() => handlePublish(content._id)}
                className={`${styles.actionBtn} ${styles.publishBtn}`}
              >
                Publicar
              </button>
            ) : (
              <button
                onClick={() => handleUnpublish(content._id)}
                className={`${styles.actionBtn} ${styles.unpublishBtn}`}
              >
                Despublicar
              </button>
            )}
            <button
              onClick={() => handleDelete(content._id)}
              className={`${styles.actionBtn} ${styles.deleteBtn}`}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
