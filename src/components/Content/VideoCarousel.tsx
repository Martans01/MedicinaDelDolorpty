'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import LazyVideoEmbed from './LazyVideoEmbed'
import styles from './VideoCarousel.module.css'

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

interface VideoCarouselProps {
  videos: VideoItem[]
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isTouchDevice = useRef(false)

  const goToSlide = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const slides = track.children
    if (slides[index]) {
      (slides[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
    }
    setActiveIndex(index)
  }, [])

  const startAutoRotation = useCallback(() => {
    if (isTouchDevice.current || videos.length <= 1) return
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % videos.length
        goToSlide(next)
        return next
      })
    }, 6000)
  }, [videos.length, goToSlide])

  const stopAutoRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const goToPrev = useCallback(() => {
    stopAutoRotation()
    const prev = activeIndex === 0 ? videos.length - 1 : activeIndex - 1
    goToSlide(prev)
    startAutoRotation()
  }, [activeIndex, videos.length, goToSlide, stopAutoRotation, startAutoRotation])

  const goToNext = useCallback(() => {
    stopAutoRotation()
    const next = (activeIndex + 1) % videos.length
    goToSlide(next)
    startAutoRotation()
  }, [activeIndex, videos.length, goToSlide, stopAutoRotation, startAutoRotation])

  // Detect touch device
  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window
  }, [])

  // Auto-rotation
  useEffect(() => {
    startAutoRotation()
    return stopAutoRotation
  }, [startAutoRotation, stopAutoRotation])

  // Track scroll position to update active dot
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      const scrollLeft = track.scrollLeft
      const slideWidth = track.offsetWidth
      const index = Math.round(scrollLeft / slideWidth)
      if (index !== activeIndex && index >= 0 && index < videos.length) {
        setActiveIndex(index)
      }
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => track.removeEventListener('scroll', handleScroll)
  }, [activeIndex, videos.length])

  if (videos.length === 0) {
    return null
  }

  return (
    <section className={styles.carousel} aria-label="Videos Recientes">
      <div className={styles.carouselHeader}>
        <h2>Videos Educativos</h2>
        <p>Aprende sobre el manejo del dolor con el Dr. Edgar Luna</p>
      </div>

      <div className={styles.trackWrapper}>
        {videos.length > 1 && (
          <>
            <button
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={goToPrev}
              aria-label="Video anterior"
            >
              &#8249;
            </button>
            <button
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={goToNext}
              aria-label="Siguiente video"
            >
              &#8250;
            </button>
          </>
        )}

        <div
          ref={trackRef}
          className={styles.track}
          onMouseEnter={stopAutoRotation}
          onMouseLeave={startAutoRotation}
          onTouchStart={stopAutoRotation}
        >
          {videos.map((video, index) => (
            <div key={video._id} className={styles.slide}>
              <div className={styles.slideInner}>
                <div className={styles.slideVideo}>
                  <LazyVideoEmbed
                    url={video.videoUrl}
                    type={video.videoType}
                    eager={index === activeIndex}
                  />
                </div>
                <div className={styles.slideInfo}>
                  <span className={styles.slideCategory}>
                    {CATEGORY_LABELS[video.category] || video.category}
                  </span>
                  <h3>{video.title}</h3>
                  <p className={styles.slideDescription}>{video.description}</p>
                  <Link href={`/blog/${video.slug}`} className={styles.slideLink}>
                    Ver mas →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {videos.length > 1 && (
        <div className={styles.indicators}>
          {videos.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              onClick={() => {
                stopAutoRotation()
                goToSlide(index)
                startAutoRotation()
              }}
              aria-label={`Ir al video ${index + 1}`}
            />
          ))}
        </div>
      )}

      <Link href="/blog" className={styles.viewAll}>
        Ver todos los videos →
      </Link>
    </section>
  )
}
