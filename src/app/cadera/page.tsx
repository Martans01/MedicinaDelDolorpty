'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import styles from '../styles/services.module.css'
import { FaCheckCircle, FaClock, FaUserMd } from 'react-icons/fa'
import CtaSection from '@/components/CtaSection'

export default function HipPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay} />
              <Image
                src="/img/cadera.webp"
                alt="Desgaste de cadera"
                width={800}
                height={600}
                className={styles.image}
                priority
              />
            </div>

            <div className={styles.textContent}>
              <h1>Desgaste de Cadera (Artrosis)</h1>
              
              <div>
                <h2>¿Qué es la Artrosis de Cadera?</h2>
                <p>
                  La artrosis de cadera es una condición degenerativa que afecta la 
                  articulación de la cadera, causando el deterioro del cartílago que 
                  amortigua la articulación. Esta condición puede limitar significativamente 
                  la movilidad y afectar la calidad de vida.
                </p>
              </div>

              <div>
                <h2>Síntomas Principales</h2>
                <ul>
                  <li>Dolor en la ingle, muslo o rodilla</li>
                  <li>Rigidez al levantarse o después de estar sentado</li>
                  <li>Dificultad para caminar o cojera</li>
                  <li>Dolor que empeora con la actividad</li>
                  <li>Limitación en el rango de movimiento</li>
                  <li>Sensación de crujido al mover la cadera</li>
                </ul>
              </div>

              <div>
                <h2>Tratamientos Especializados</h2>
                <ul>
                  <li>Bloqueos articulares guiados por fluoroscopía</li>
                  <li>Infiltraciones con ácido hialurónico</li>
                  <li>Radiofrecuencia del nervio obturador y femoral</li>
                  <li>Terapia física especializada</li>
                  <li>Manejo farmacológico personalizado</li>
                  <li>Técnicas mínimamente invasivas</li>
                </ul>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <FaUserMd className={styles.infoIcon} />
                  <h3>Atención Experta</h3>
                  <p>Tratamiento personalizado por especialistas en dolor articular con amplia experiencia.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaCheckCircle className={styles.infoIcon} />
                  <h3>Técnicas Innovadoras</h3>
                  <p>Utilizamos los tratamientos más avanzados para el manejo del dolor de cadera.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaClock className={styles.infoIcon} />
                  <h3>Mejora Continua</h3>
                  <p>Programas diseñados para una recuperación gradual y sostenible de su movilidad.</p>
                </div>
              </div>

              <CtaSection 
                title="¿Sufre de Dolor en la Cadera?" 
                description="El dolor de cadera no tiene que limitar su vida. Contáctenos para una evaluación especializada y descubra cómo podemos ayudarle a recuperar su movilidad y calidad de vida."
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 