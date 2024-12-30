'use client'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './styles.module.css'
import Image from 'next/image'

export default function SpinalStenosisPage() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(`.${styles.animate}`)
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={`${styles.imageContainer} ${styles.animate}`}>
              <Image
                src="/img/canal.webp"
                alt="Canal lumbar estrecho"
                width={800}
                height={600}
                className={styles.image}
                priority
              />
            </div>

            <div className={styles.textContent}>
              <h1 className={styles.animate}>Canal Lumbar Estrecho</h1>
              
              <div className={styles.animate}>
                <h2>¿Qué es el Canal Lumbar Estrecho?</h2>
                <p>
                  El canal lumbar estrecho, o estenosis espinal lumbar, es una condición 
                  en la que el espacio dentro de la columna vertebral se estrecha, ejerciendo 
                  presión sobre los nervios que viajan a través de la columna. Esta condición 
                  es más común en personas mayores de 50 años y puede causar dolor significativo 
                  y limitación funcional.
                </p>
              </div>

              <div className={styles.animate}>
                <h2>Síntomas Característicos</h2>
                <ul>
                  <li>Dolor en la espalda baja y piernas</li>
                  <li>Debilidad en piernas al caminar</li>
                  <li>Calambres en las piernas al caminar</li>
                  <li>Alivio del dolor al sentarse o inclinarse hacia adelante</li>
                  <li>Entumecimiento y hormigueo en piernas</li>
                  <li>Dificultad para caminar largas distancias</li>
                </ul>
              </div>

              <div className={styles.animate}>
                <h2>Tratamientos Disponibles</h2>
                <ul>
                  <li>Bloqueos epidurales selectivos</li>
                  <li>Radiofrecuencia de ramas mediales</li>
                  <li>Neuromodulación medular</li>
                  <li>Terapia física especializada</li>
                  <li>Manejo farmacológico personalizado</li>
                  <li>Técnicas mínimamente invasivas de descompresión</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`${styles.cta} ${styles.animate}`}>
            <h2>¿El Canal Lumbar Estrecho Afecta su Movilidad?</h2>
            <p>
              No permita que esta condición limite su capacidad para caminar y 
              disfrutar de la vida. Contáctenos para una evaluación especializada 
              y descubra las opciones de tratamiento disponibles para usted.
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=50766198728" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 