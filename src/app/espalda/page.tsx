'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import styles from '../styles/services.module.css'
import { FaCheckCircle, FaClock, FaUserMd } from 'react-icons/fa'
import CtaSection from '@/components/CtaSection'

export default function BackPainPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay} />
              <Image
                src="/img/espalda.webp"
                alt="Dolor de espalda"
                width={800}
                height={600}
                className={styles.image}
                priority
                unoptimized
              />
            </div>

            <div className={styles.textContent}>
              <h1>Dolor de Espalda</h1>
              
              <div>
                <h2>¿Qué es el Dolor de Espalda?</h2>
                <p>
                  El dolor de espalda es una de las condiciones más comunes que afectan a 
                  las personas en algún momento de su vida. Puede variar desde una molestia 
                  muscular hasta un dolor agudo y debilitante. Las causas son diversas y 
                  pueden incluir lesiones, condiciones médicas o cambios degenerativos 
                  relacionados con la edad.
                </p>
              </div>

              <div>
                <h2>Síntomas Comunes</h2>
                <ul>
                  <li>Dolor agudo o crónico en la espalda</li>
                  <li>Rigidez muscular</li>
                  <li>Limitación en el movimiento</li>
                  <li>Dolor que empeora con ciertas posturas</li>
                  <li>Dolor que se irradia a otras áreas</li>
                  <li>Espasmos musculares</li>
                </ul>
              </div>

              <div>
                <h2>Tratamientos Especializados</h2>
                <ul>
                  <li>Bloqueos facetarios lumbares</li>
                  <li>Radiofrecuencia de ramas mediales</li>
                  <li>Infiltraciones epidurales</li>
                  <li>Terapia física dirigida</li>
                  <li>Manejo farmacológico personalizado</li>
                  <li>Técnicas de descompresión vertebral</li>
                </ul>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <FaUserMd className={styles.infoIcon} />
                  <h3>Atención Integral</h3>
                  <p>Evaluación completa y tratamiento personalizado por especialistas en dolor de espalda.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaCheckCircle className={styles.infoIcon} />
                  <h3>Tecnología Avanzada</h3>
                  <p>Utilizamos las técnicas más modernas para el diagnóstico y tratamiento.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaClock className={styles.infoIcon} />
                  <h3>Mejora Progresiva</h3>
                  <p>Programas diseñados para una recuperación efectiva y duradera.</p>
                </div>
              </div>

              <CtaSection 
                title="¿El Dolor de Espalda Afecta su Vida Diaria?" 
                description="No permita que el dolor de espalda limite sus actividades. Contáctenos para una evaluación especializada y descubra las opciones de tratamiento disponibles para su caso específico."
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 