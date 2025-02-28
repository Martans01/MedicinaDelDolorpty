'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import styles from '../styles/services.module.css'
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle, FaClock, FaUserMd } from 'react-icons/fa'

export default function ArthritisPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay} />
              <Image
                src="/img/desgaste.jpeg"
                alt="Desgaste en la columna"
                width={800}
                height={600}
                className={styles.image}
                priority
                unoptimized
              />
            </div>

            <div className={styles.textContent}>
              <h1>Desgaste en la Columna (Artrosis Lumbar)</h1>
              
              <div>
                <h2>¿Qué es la Artrosis Lumbar?</h2>
                <p>
                  La artrosis lumbar es una condición degenerativa que afecta las articulaciones 
                  y discos de la columna vertebral. Es una de las causas más comunes de dolor 
                  de espalda, especialmente en personas mayores de 50 años.
                </p>
              </div>

              <div>
                <h2>Síntomas Comunes</h2>
                <ul>
                  <li>Dolor en la parte baja de la espalda</li>
                  <li>Rigidez, especialmente en las mañanas</li>
                  <li>Dificultad para moverse o flexionar la espalda</li>
                  <li>Dolor que empeora con la actividad física</li>
                  <li>Sensación de crepitación o crujidos</li>
                </ul>
              </div>

              <div>
                <h2>Tratamientos Disponibles</h2>
                <ul>
                  <li>Bloqueos analgésicos guiados por fluoroscopía</li>
                  <li>Radiofrecuencia de ramas mediales</li>
                  <li>Terapia física dirigida</li>
                  <li>Manejo farmacológico especializado</li>
                  <li>Técnicas mínimamente invasivas</li>
                </ul>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <FaUserMd className={styles.infoIcon} />
                  <h3>Atención Especializada</h3>
                  <p>Tratamiento personalizado por especialistas en dolor crónico con amplia experiencia.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaCheckCircle className={styles.infoIcon} />
                  <h3>Técnicas Avanzadas</h3>
                  <p>Utilizamos las técnicas más modernas y efectivas para el tratamiento de la artrosis.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaClock className={styles.infoIcon} />
                  <h3>Recuperación Progresiva</h3>
                  <p>Nuestros tratamientos están diseñados para una mejora gradual y sostenible.</p>
                </div>
              </div>

              <div className={styles.cta}>
                <h2>¿Sufre de Dolor por Artrosis?</h2>
                <p>
                  No permita que el dolor limite su vida. Contáctenos para una evaluación 
                  especializada y descubra las opciones de tratamiento más adecuadas para su caso.
                </p>
                <div className={styles.ctaButtons}>
                  <a 
                    href="https://api.whatsapp.com/send?phone=50766198728" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.ctaButton}
                  >
                    <FaWhatsapp size={24} />
                    Contactar por WhatsApp
                  </a>
                  <a 
                    href="/agendar" 
                    className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
                  >
                    <FaCalendarAlt size={24} />
                    Agendar Cita
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 