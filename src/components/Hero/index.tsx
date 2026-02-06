'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import { FaCalendarAlt, FaArrowRight, FaStethoscope, FaUserMd } from 'react-icons/fa'

interface HeroProps {
  videos?: unknown[]
}

export default function Hero({ videos = [] }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <FaStethoscope /> Clínica Especializada
          </div>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Especialistas</span> en 
            <br />Medicina del Dolor
          </h1>
          <p className={styles.subtitle}>
            Recupera tu calidad de vida con tratamientos personalizados y tecnología de vanguardia
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <span>Tratamientos Mínimamente Invasivos</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <span>Atención Personalizada</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✓</div>
              <span>Tecnología Avanzada</span>
            </div>
          </div>
          <div className={styles.cta}>
            <a 
              href="#agendar-cita"
              className={styles.ctaButton}
            >
              <FaCalendarAlt className={styles.ctaIcon} />
              Agenda tu Consulta
            </a>
            <a href="#about" className={styles.learnMore}>
              Conoce más <FaArrowRight className={styles.arrow} />
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/img/402A0267.jpg"
              alt="Dr. Edgar Luna"
              width={450}
              height={600}
              priority
              className={styles.heroImage}
              style={{ objectFit: 'cover', objectPosition: 'center 0%' }}
            />
            <div className={styles.imageBadge}>
              <div className={styles.doctorInfo}>
                <FaUserMd className={styles.doctorIcon} />
                <div>
                  <span>Dr. Edgar Luna</span>
                  <small>Medicina del Dolor</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 