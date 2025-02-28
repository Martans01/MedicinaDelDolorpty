'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import { FaCalendarAlt, FaArrowRight, FaStethoscope, FaUserMd } from 'react-icons/fa'

export default function Hero() {
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
              src="/img/sobremi.jpg"
              alt="Dr. Edgar Luna"
              width={450}
              height={600}
              priority
              className={styles.heroImage}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
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
      <div className={styles.wave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
} 