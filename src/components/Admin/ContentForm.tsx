'use client'

import { useState, FormEvent } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { Id } from '../../../convex/_generated/dataModel'
import { useRouter } from 'next/navigation'
import VideoPreview from './VideoPreview'
import styles from '@/app/gestion-contenido/admin.module.css'

type VideoType = 'instagram' | 'tiktok'
type Category =
  | 'rodilla'
  | 'espalda'
  | 'cuello'
  | 'cadera'
  | 'ciatica'
  | 'hernia'
  | 'canal-lumbar'
  | 'enfermedad-discal'
  | 'artrosis-lumbar'
  | 'general'

interface ContentData {
  _id?: Id<'contents'>
  title?: string
  slug?: string
  description?: string
  videoUrl?: string
  videoType?: VideoType
  category?: Category
  tags?: string[]
  status?: 'draft' | 'published'
}

interface ContentFormProps {
  initialData?: ContentData
  mode: 'create' | 'edit'
}

const CATEGORIES: { value: Category; label: string }[] = [
  { value: 'rodilla', label: 'Dolor de Rodilla' },
  { value: 'espalda', label: 'Dolor de Espalda' },
  { value: 'cuello', label: 'Dolor Cervical' },
  { value: 'cadera', label: 'Dolor de Cadera' },
  { value: 'ciatica', label: 'Ciática' },
  { value: 'hernia', label: 'Hernia Discal' },
  { value: 'canal-lumbar', label: 'Canal Lumbar Estrecho' },
  { value: 'enfermedad-discal', label: 'Enfermedad Discal' },
  { value: 'artrosis-lumbar', label: 'Artrosis Lumbar' },
  { value: 'general', label: 'General' },
]

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function detectVideoType(url: string): VideoType {
  if (url.includes('tiktok.com')) return 'tiktok'
  return 'instagram'
}

export default function ContentForm({ initialData, mode }: ContentFormProps) {
  const router = useRouter()
  const createMutation = useMutation(api.contents.create)
  const updateMutation = useMutation(api.contents.update)

  const [title, setTitle] = useState(initialData?.title ?? '')
  const [slug, setSlug] = useState(initialData?.slug ?? '')
  const [description, setDescription] = useState(initialData?.description ?? '')
  const [videoUrl, setVideoUrl] = useState(initialData?.videoUrl ?? '')
  const [videoType, setVideoType] = useState<VideoType>(initialData?.videoType ?? 'instagram')
  const [category, setCategory] = useState<Category>(initialData?.category ?? 'general')
  const [tags, setTags] = useState<string[]>(initialData?.tags ?? [])
  const [tagInput, setTagInput] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleTitleChange = (value: string) => {
    setTitle(value)
    if (mode === 'create') {
      setSlug(generateSlug(value))
    }
  }

  const handleVideoUrlChange = (value: string) => {
    setVideoUrl(value)
    setVideoType(detectVideoType(value))
  }

  const addTag = () => {
    const trimmed = tagInput.trim().toLowerCase()
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed])
    }
    setTagInput('')
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  const handleSubmit = async (e: FormEvent, status: 'draft' | 'published') => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      if (mode === 'create') {
        await createMutation({
          title,
          slug,
          description,
          videoUrl,
          videoType,
          category,
          tags,
          status,
        })
      } else if (initialData?._id) {
        await updateMutation({
          id: initialData._id,
          title,
          slug,
          description,
          videoUrl,
          videoType,
          category,
          tags,
          status,
        })
      }
      router.push('/gestion-contenido')
    } catch (error) {
      console.error('Error guardando contenido:', error)
      alert('Error al guardar el contenido')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.formGroup}>
        <label htmlFor="title">Titulo</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="Ej: Ejercicios para el dolor de rodilla"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="slug">URL (slug)</label>
        <input
          id="slug"
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="ejercicios-dolor-rodilla"
        />
        <span className={styles.formHelp}>
          Se genera automaticamente del titulo. URL: /blog/{slug}
        </span>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="videoUrl">URL del Video (Instagram o TikTok)</label>
        <input
          id="videoUrl"
          type="url"
          value={videoUrl}
          onChange={(e) => handleVideoUrlChange(e.target.value)}
          placeholder="https://www.instagram.com/reel/..."
          required
        />
        <span className={styles.formHelp}>
          Tipo detectado: {videoType === 'instagram' ? 'Instagram' : 'TikTok'}
        </span>
      </div>

      {videoUrl && <VideoPreview url={videoUrl} type={videoType} />}

      <div className={styles.formGroup}>
        <label htmlFor="category">Categoria</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">Descripcion (SEO)</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripcion breve del contenido para SEO (150-300 caracteres)"
          required
        />
        <span className={styles.formHelp}>{description.length} caracteres</span>
      </div>

      <div className={styles.formGroup}>
        <label>Etiquetas</label>
        <div className={styles.tagsInput}>
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                addTag()
              }
            }}
            placeholder="Agregar etiqueta..."
          />
          <button type="button" onClick={addTag}>
            Agregar
          </button>
        </div>
        {tags.length > 0 && (
          <div className={styles.tagsList}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
                <button type="button" onClick={() => removeTag(tag)}>
                  &times;
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.formActions}>
        <button
          type="button"
          className={styles.draftBtn}
          disabled={isSubmitting || !title || !videoUrl}
          onClick={(e) => handleSubmit(e, 'draft')}
        >
          Guardar Borrador
        </button>
        <button
          type="button"
          className={styles.submitBtn}
          disabled={isSubmitting || !title || !videoUrl || !description}
          onClick={(e) => handleSubmit(e, 'published')}
        >
          {mode === 'create' ? 'Publicar' : 'Guardar Cambios'}
        </button>
      </div>
    </form>
  )
}
