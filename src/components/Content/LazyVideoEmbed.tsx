'use client'

import { useState, useEffect, useRef } from 'react'
import VideoEmbed from './VideoEmbed'

interface LazyVideoEmbedProps {
  url: string
  type: 'instagram' | 'tiktok'
  eager?: boolean
}

export default function LazyVideoEmbed({ url, type, eager = false }: LazyVideoEmbedProps) {
  const [isVisible, setIsVisible] = useState(eager)
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (eager || isVisible) return

    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [eager, isVisible])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsLoaded(true), 500)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <div
      ref={containerRef}
      style={{
        aspectRatio: type === 'tiktok' ? '9/16' : '4/5',
        maxHeight: type === 'tiktok' ? '580px' : '500px',
        background: '#f0f0f0',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
      }}
    >
      {isVisible ? (
        <>
          {!isLoaded && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f0f0f0',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  border: '3px solid #ddd',
                  borderTopColor: '#012C3C',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite',
                }}
              />
            </div>
          )}
          <VideoEmbed url={url} type={type} />
        </>
      ) : (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: 'linear-gradient(135deg, #012C3C 0%, #01445e 100%)',
          }}
          onClick={() => setIsVisible(true)}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
