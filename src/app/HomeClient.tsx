'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'
import FeaturedVideo from '@/components/FeaturedVideo'
import styles from './page.module.css'

interface VideoItem {
  _id: string
  title: string
  slug: string
  description: string
  category: string
  videoUrl: string
  videoType: 'instagram' | 'tiktok'
}

interface HomeClientProps {
  recentVideos: VideoItem[]
}

export default function HomeClient({ recentVideos }: HomeClientProps) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      })
    }, observerOptions)

    document.querySelectorAll(`.${styles.animate}`).forEach((el) => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero videos={recentVideos} />
        {recentVideos.length > 0 && (
          <section className={`${styles.section} ${styles.animate}`} aria-label="Video Destacado">
            <FeaturedVideo video={recentVideos[0]} />
          </section>
        )}
        <section className={`${styles.section} ${styles.animate}`} aria-label="Sobre Nosotros">
          <About />
        </section>
        <section
          className={`${styles.section} ${styles.animate} ${styles.servicesSection}`}
          aria-label="Nuestros Servicios"
        >
          <Services />
        </section>
        <section className={`${styles.section} ${styles.animate}`} aria-label="Nuestra Experiencia">
          <Experience />
        </section>
        <section className={`${styles.section} ${styles.animate}`} aria-label="Ubicaciones">
          <Locations />
        </section>
      </main>
      <Footer />
    </>
  )
}
