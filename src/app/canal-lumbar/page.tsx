import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import styles from '../styles/services.module.css'
import { FaCompress, FaWalking, FaExclamationTriangle, FaBriefcaseMedical, FaNotesMedical, FaTablets, FaProcedures, FaUserMd } from 'react-icons/fa'
import CtaSection from '@/components/CtaSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Canal Lumbar Estrecho | Medicina del Dolor PTY',
  description: 'Tratamiento especializado para el canal lumbar estrecho en Panamá. Alivio del dolor y mejora de la movilidad con técnicas avanzadas.',
  keywords: 'canal lumbar estrecho, estenosis espinal, dolor lumbar, médico especialista columna, tratamiento canal lumbar, Panamá'
}

export default function CanalLumbarPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src="/img/canallumbar.webp"
                alt="Canal lumbar estrecho"
                width={800}
                height={600}
                className={styles.image}
                priority
              />
            </div>
            
            <div className={styles.textContent}>
              <h1>Canal Lumbar Estrecho</h1>
              
              <section className={styles.section}>
                <h2>¿Qué es el Canal Lumbar Estrecho?</h2>
                <p>
                  El canal lumbar estrecho, también conocido como estenosis espinal lumbar, es una condición en la que el espacio dentro de la columna vertebral se reduce, ejerciendo presión sobre los nervios que viajan a través de la columna. Esta compresión puede causar dolor, entumecimiento y debilidad en la espalda baja y las piernas.
                </p>
                <p>
                  Esta condición suele desarrollarse gradualmente con el envejecimiento, aunque también puede ser causada por hernia discal, engrosamiento de ligamentos, formación de espolones óseos o lesiones previas que afectan la estructura de la columna.
                </p>
              </section>
              
              <section className={styles.section}>
                <h2>Síntomas Frecuentes</h2>
                <div className={styles.symptomsGrid}>
                  <div className={styles.symptomCard}>
                    <FaCompress className={styles.icon} />
                    <h3>Dolor en la espalda y piernas</h3>
                    <p>Dolor que se intensifica al caminar o estar de pie por largos períodos.</p>
                  </div>
                  <div className={styles.symptomCard}>
                    <FaWalking className={styles.icon} />
                    <h3>Claudicación neurogénica</h3>
                    <p>Dificultad para caminar distancias largas y necesidad de descansar frecuentemente.</p>
                  </div>
                  <div className={styles.symptomCard}>
                    <FaExclamationTriangle className={styles.icon} />
                    <h3>Entumecimiento y hormigueo</h3>
                    <p>Sensación de adormecimiento que afecta principalmente a las piernas y pies.</p>
                  </div>
                  <div className={styles.symptomCard}>
                    <FaBriefcaseMedical className={styles.icon} />
                    <h3>Debilidad muscular</h3>
                    <p>Pérdida de fuerza en las piernas que puede afectar el equilibrio y la movilidad.</p>
                  </div>
                </div>
              </section>
              
              <section className={styles.section}>
                <h2>Tratamientos Especializados</h2>
                <div className={styles.treatmentsGrid}>
                  <div className={styles.treatmentCard}>
                    <FaNotesMedical className={styles.icon} />
                    <h3>Evaluación integral</h3>
                    <p>Diagnóstico preciso mediante examen físico y estudios de imagen avanzados como resonancia magnética.</p>
                  </div>
                  <div className={styles.treatmentCard}>
                    <FaTablets className={styles.icon} />
                    <h3>Manejo farmacológico</h3>
                    <p>Medicamentos antiinflamatorios, analgésicos y relajantes musculares adaptados a cada paciente.</p>
                  </div>
                  <div className={styles.treatmentCard}>
                    <FaProcedures className={styles.icon} />
                    <h3>Bloqueos epidurales</h3>
                    <p>Infiltraciones con corticosteroides para reducir la inflamación y aliviar la presión sobre los nervios.</p>
                  </div>
                  <div className={styles.treatmentCard}>
                    <FaUserMd className={styles.icon} />
                    <h3>Radiofrecuencia</h3>
                    <p>Técnica mínimamente invasiva para aliviar el dolor crónico asociado al canal lumbar estrecho.</p>
                  </div>
                </div>
              </section>
              
              <CtaSection 
                title="¿El Canal Lumbar Estrecho Afecta su Movilidad?"
                description="En Medicina del Dolor PTY contamos con especialistas en el tratamiento del canal lumbar estrecho. Nuestro enfoque integral y personalizado te ayudará a recuperar tu movilidad y reducir el dolor de manera efectiva."
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 