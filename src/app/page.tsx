'use client'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      })
    }, observerOptions)

    document.querySelectorAll(`.${styles.animate}`).forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <section className={`${styles.section} ${styles.animate}`}>
          <About />
        </section>
        <section className={`${styles.section} ${styles.animate} ${styles.servicesSection}`}>
          <Services />
        </section>
        <section className={`${styles.section} ${styles.animate}`}>
          <Experience />
        </section>
        <section className={`${styles.section} ${styles.animate}`}>
          <Locations />
        </section>
      </main>
      <Footer />
    </>
  )
} 