'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import styles from '../styles/services.module.css'
import { FaCheckCircle, FaClock, FaUserMd } from 'react-icons/fa'
import CtaSection from '@/components/CtaSection'

export default function NeckPainPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay} />
              <Image
                src="/img/cuello.webp"
                alt="Dolor cervical"
                width={800}
                height={600}
                className={styles.image}
                priority
              />
            </div>

            <div className={styles.textContent}>
              <h1>Dolor en el Cuello (Cervical)</h1>
              
              <div>
                <h2>¿Qué es el Dolor Cervical?</h2>
                <p>
                  El dolor cervical es una molestia en la región del cuello que puede 
                  extenderse hacia los hombros y brazos. Puede ser causado por diversos 
                  factores, desde malas posturas hasta condiciones médicas específicas. 
                  Este dolor puede afectar significativamente la movilidad y el confort 
                  en las actividades diarias.
                </p>
              </div>

              <div>
                <h2>Causas Frecuentes</h2>
                <ul>
                  <li>Tensión muscular y estrés</li>
                  <li>Hernia discal cervical</li>
                  <li>Artrosis cervical</li>
                  <li>Lesiones por latigazo cervical</li>
                  <li>Posturas inadecuadas prolongadas</li>
                  <li>Uso excesivo de dispositivos electrónicos</li>
                </ul>
              </div>

              <div>
                <h2>Tratamientos Especializados</h2>
                <ul>
                  <li>Bloqueos facetarios cervicales</li>
                  <li>Radiofrecuencia de ramas mediales cervicales</li>
                  <li>Infiltraciones epidurales cervicales</li>
                  <li>Terapia física específica</li>
                  <li>Manejo farmacológico personalizado</li>
                  <li>Técnicas de descompresión neural</li>
                </ul>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <FaUserMd className={styles.infoIcon} />
                  <h3>Atención Especializada</h3>
                  <p>Evaluación detallada y tratamiento personalizado por expertos en dolor cervical.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaCheckCircle className={styles.infoIcon} />
                  <h3>Técnicas Avanzadas</h3>
                  <p>Utilizamos los métodos más modernos para el tratamiento del dolor cervical.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaClock className={styles.infoIcon} />
                  <h3>Recuperación Efectiva</h3>
                  <p>Programas diseñados para una mejora progresiva y duradera.</p>
                </div>
              </div>

              <CtaSection 
                title="¿Sufre de Dolor Cervical?" 
                description="No deje que el dolor en el cuello limite sus actividades diarias. Contáctenos para una evaluación especializada y descubra las opciones de tratamiento disponibles para su caso específico."
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 