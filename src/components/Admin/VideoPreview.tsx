'use client'

import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed'
import styles from '@/app/gestion-contenido/admin.module.css'

interface VideoPreviewProps {
  url: string
  type: 'instagram' | 'tiktok'
}

export default function VideoPreview({ url, type }: VideoPreviewProps) {
  if (!url) return null

  return (
    <div className={styles.videoPreview}>
      <h4>Vista previa del video</h4>
      <div className={styles.previewContainer}>
        {type === 'instagram' ? (
          <InstagramEmbed url={url} width="100%" />
        ) : (
          <TikTokEmbed url={url} width="100%" />
        )}
      </div>
    </div>
  )
}
