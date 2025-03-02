'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../styles/services.module.css'
import Image from 'next/image'
import { FaCheckCircle, FaClock, FaUserMd } from 'react-icons/fa'
import CtaSection from '@/components/CtaSection'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  'name': 'Tratamiento de Hernia Discal',
  'description': 'Tratamiento especializado para hernias discales con técnicas mínimamente invasivas',
  'medicalSpecialty': {
    '@type': 'MedicalSpecialty',
    'name': 'Medicina del Dolor'
  },
  'performedBy': {
    '@type': 'Physician',
    'name': 'Dr. Edgar Luna',
    'medicalSpecialty': 'Especialista en Medicina del Dolor'
  },
  'relevantSpecialty': {
    '@type': 'MedicalSpecialty',
    'name': 'Tratamiento del Dolor'
  }
}

export default function HerniaPage() {
  React.useEffect(() => {
    // Agregar datos estructurados
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

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
                alt="Tratamiento de hernia discal en Panamá"
                width={800}
                height={600}
                className={styles.image}
                priority
                unoptimized
              />
            </div>

            <div className={styles.textContent}>
              <h1>Tratamiento Especializado de Hernia Discal</h1>
              <p>
                La hernia discal puede causar dolor intenso y limitar significativamente su calidad de vida. 
                En Medicina del Dolor PTY, ofrecemos tratamientos avanzados y personalizados para aliviar 
                el dolor y mejorar su movilidad.
              </p>

              <h2>¿Qué es una Hernia Discal?</h2>
              <p>
                Una hernia discal ocurre cuando el núcleo suave de un disco intervertebral se proyecta 
                a través de una ruptura en el exterior más duro del disco. Esta condición puede causar 
                dolor, entumecimiento o debilidad en la espalda, piernas o brazos, dependiendo de la 
                ubicación de la hernia.
              </p>

              <h2>Nuestro Enfoque de Tratamiento</h2>
              <p>
                Utilizamos un enfoque integral que combina diferentes modalidades de tratamiento, 
                adaptadas a las necesidades específicas de cada paciente. Nuestro objetivo es no solo 
                aliviar el dolor, sino también prevenir futuras complicaciones.
              </p>

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