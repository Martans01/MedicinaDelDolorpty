'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../styles/services.module.css'
import Image from 'next/image'
import { FaCheckCircle, FaClock, FaUserMd } from 'react-icons/fa'
import CtaSection from '@/components/CtaSection'

// La metadata ahora estará en un archivo separado: opengraph-metadata.ts o layout.tsx
// debido a que 'use client' no puede tener exportaciones de metadata

export default function HerniaPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay} />
              <Image
                src="/img/herniadiscal.webp"
                alt="Hernia discal"
                width={800}
                height={600}
                className={styles.image}
                priority
                unoptimized
              />
            </div>

            <div className={styles.textContent}>
              <h1>Hernia Discal</h1>
              
              <div>
                <h2>¿Qué es una Hernia Discal?</h2>
                <p>
                  Una hernia discal ocurre cuando el núcleo suave del disco intervertebral 
                  protruye a través de una ruptura en el anillo fibroso exterior. Esta 
                  condición puede ejercer presión sobre los nervios cercanos, causando 
                  dolor, entumecimiento y otros síntomas que pueden afectar severamente 
                  la calidad de vida.
                </p>
              </div>

              <div>
                <h2>Síntomas Principales</h2>
                <ul>
                  <li>Dolor agudo en la espalda o cuello</li>
                  <li>Dolor que se irradia hacia brazos o piernas</li>
                  <li>Entumecimiento o hormigueo</li>
                  <li>Debilidad muscular</li>
                  <li>Dolor que empeora con ciertos movimientos</li>
                  <li>Dificultad para realizar actividades cotidianas</li>
                </ul>
              </div>

              <div>
                <h2>Tratamientos Especializados</h2>
                <ul>
                  <li>Bloqueos epidurales transforaminales</li>
                  <li>Radiofrecuencia del ganglio de la raíz dorsal</li>
                  <li>Ozonoterapia intradiscal</li>
                  <li>Terapia física específica</li>
                  <li>Manejo farmacológico avanzado</li>
                  <li>Técnicas mínimamente invasivas de descompresión</li>
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
                  <p>Utilizamos las técnicas más modernas y efectivas para el tratamiento de hernias discales.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaClock className={styles.infoIcon} />
                  <h3>Recuperación Rápida</h3>
                  <p>Nuestros tratamientos están diseñados para una recuperación eficiente y segura.</p>
                </div>
              </div>

              <CtaSection 
                title="¿Sufre de una Hernia Discal?" 
                description="No permita que el dolor de una hernia discal limite su vida. Contáctenos para una evaluación especializada y descubra las opciones de tratamiento más adecuadas para su caso."
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 