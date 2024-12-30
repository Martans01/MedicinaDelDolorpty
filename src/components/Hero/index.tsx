'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Especialistas</span> en 
            <br />Medicina del Dolor
          </h1>
          <p className={styles.subtitle}>
            Recupera tu calidad de vida con tratamientos personalizados y tecnología de vanguardia
          </p>
          <div className={styles.cta}>
            <a 
              href="https://api.whatsapp.com/send?phone=50766198728"
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agenda tu Consulta
            </a>
            <a href="#about" className={styles.learnMore}>
              Conoce más <span className={styles.arrow}>→</span>
            </a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/img/sobremi.jpg"
            alt="Dr. Edgar Luna"
            width={500}
            height={600}
            priority
            className={styles.heroImage}
          />
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>15+</span>
              <span className={styles.label}>Años de Experiencia</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>5000+</span>
              <span className={styles.label}>Pacientes Atendidos</span>
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