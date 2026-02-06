import { fetchQuery } from 'convex/nextjs'
import { api } from '../../../../../convex/_generated/api'
import type { Metadata } from 'next'
import VideoFeed from '@/components/Content/VideoFeed'
import CategoryFilter from '@/components/Content/CategoryFilter'
import styles from '../../blog.module.css'

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
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const label = CATEGORY_LABELS[category] || category

  return {
    title: `Videos sobre ${label} | Medicina del Dolor PTY`,
    description: `Videos educativos sobre ${label.toLowerCase()}. Tratamientos, ejercicios y consejos del Dr. Edgar Luna, especialista en dolor en Panama.`,
    openGraph: {
      title: `Videos sobre ${label} | Medicina del Dolor PTY`,
      description: `Videos educativos sobre ${label.toLowerCase()}. Dr. Edgar Luna.`,
      type: 'website',
      locale: 'es_PA',
    },
    alternates: {
      canonical: `https://www.medicinadeldolorpty.com/blog/categoria/${category}`,
    },
  }
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const label = CATEGORY_LABELS[category] || category

  let contents: Awaited<ReturnType<typeof fetchQuery<typeof api.contents.getByCategory>>> = []

  try {
    contents = await fetchQuery(api.contents.getByCategory, { category })
  } catch {
    // Convex not configured yet
  }

  return (
    <div className={styles.pageContainer}>
      <section className={styles.hero}>
        <h1>Videos: {label}</h1>
        <p>
          Contenido educativo sobre {label.toLowerCase()} por el Dr. Edgar Luna.
        </p>
      </section>

      <CategoryFilter active={category} />

      <VideoFeed contents={contents as never} />
    </div>
  )
}
