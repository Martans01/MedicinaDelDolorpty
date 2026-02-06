'use client'

import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed'
import styles from '@/app/blog/blog.module.css'

interface VideoEmbedProps {
  url: string
  type: 'instagram' | 'tiktok'
}

export default function VideoEmbed({ url, type }: VideoEmbedProps) {
  return (
    <div className={styles.embedWrapper}>
      {type === 'instagram' ? (
        <InstagramEmbed url={url} width="100%" />
      ) : (
        <TikTokEmbed url={url} width="100%" />
      )}
    </div>
  )
}
