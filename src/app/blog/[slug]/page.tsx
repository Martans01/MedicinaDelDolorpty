import { fetchQuery } from 'convex/nextjs'
import { api } from '../../../../convex/_generated/api'
import type { Metadata } from 'next'
import Link from 'next/link'
import VideoEmbed from '@/components/Content/VideoEmbed'
import ContentGrid from '@/components/Content/ContentGrid'
import styles from '../blog.module.css'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  try {
    const content = await fetchQuery(api.contents.getBySlug, { slug })

    if (!content) {
      return { title: 'Contenido no encontrado | Medicina del Dolor PTY' }
    }

    return {
      title: `${content.title} | Medicina del Dolor PTY`,
      description: content.description,
      openGraph: {
        title: content.title,
        description: content.description,
        type: 'article',
        locale: 'es_PA',
        siteName: 'Medicina del Dolor PTY',
        url: `https://www.medicinadeldolorpty.com/blog/${content.slug}`,
      },
      alternates: {
        canonical: `https://www.medicinadeldolorpty.com/blog/${content.slug}`,
      },
    }
  } catch {
    return { title: 'Blog | Medicina del Dolor PTY' }
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let content
  try {
    content = await fetchQuery(api.contents.getBySlug, { slug })
  } catch {
    notFound()
  }

  if (!content) {
    notFound()
  }

  let related: typeof content[] = []
  try {
    const allInCategory = await fetchQuery(api.contents.getByCategory, {
      category: content.category,
      limit: 4,
    })
    related = allInCategory.filter((c) => c.slug !== content.slug).slice(0, 3)
  } catch {
    // ignore
  }

  const date = content.publishedAt
    ? new Date(content.publishedAt).toLocaleDateString('es-PA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: content.title,
    description: content.description,
    uploadDate: content.publishedAt
      ? new Date(content.publishedAt).toISOString()
      : undefined,
    contentUrl: content.videoUrl,
    embedUrl: content.videoUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Medicina del Dolor PTY',
      url: 'https://www.medicinadeldolorpty.com',
    },
  }

  return (
    <div className={styles.contentPage}>
      <div className={styles.contentHeader}>
        <div className={styles.breadcrumb}>
          <Link href="/blog">Blog</Link>
          {' > '}
          <Link href={`/blog/categoria/${content.category}`}>
            {CATEGORY_LABELS[content.category] || content.category}
          </Link>
          {' > '}
          <span>{content.title}</span>
        </div>
        <h1>{content.title}</h1>
        <div className={styles.contentMeta}>
          <span className={styles.cardCategory}>
            {CATEGORY_LABELS[content.category] || content.category}
          </span>
          {date && <span className={styles.cardDate}>{date}</span>}
        </div>
      </div>

      <div className={styles.videoSection}>
        <VideoEmbed url={content.videoUrl} type={content.videoType} />
      </div>

      <div className={styles.contentBody}>
        <p className={styles.contentDescription}>{content.description}</p>

        {content.tags.length > 0 && (
          <div className={styles.contentTags}>
            {content.tags.map((tag) => (
              <span key={tag} className={styles.contentTag}>
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className={styles.cta}>
          <h3>¿Necesita ayuda con su dolor?</h3>
          <p>
            El Dr. Edgar Luna puede ayudarle a encontrar el tratamiento
            adecuado para su condicion.
          </p>
          <Link href="/#agendar-cita" className={styles.ctaBtn}>
            Agendar Cita
          </Link>
        </div>

        {related.length > 0 && (
          <div className={styles.related}>
            <h3>Contenido Relacionado</h3>
            <ContentGrid contents={related as never} />
          </div>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
