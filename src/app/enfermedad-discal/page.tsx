'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaBone, FaExclamationTriangle, FaBriefcaseMedical, FaNotesMedical, FaTablets, FaProcedures, FaUserMd } from 'react-icons/fa';
import styles from '../styles/services.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';

export default function EnfermedadDiscalPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay} />
              <Image
                src="/img/enfermedaddiscal.webp"
                alt="Enfermedad discal degenerativa"
                width={800}
                height={600}
                className={styles.image}
                priority
              />
            </div>
            
            <div className={styles.textContent}>
              <h1>Enfermedad Discal Degenerativa</h1>
              
              <section className={styles.section}>
                <h2>¿Qué es la Enfermedad Discal Degenerativa?</h2>
                <p>
                  La enfermedad discal degenerativa es una condición que ocurre cuando los discos intervertebrales, que actúan como amortiguadores entre las vértebras, comienzan a deteriorarse con el tiempo. Este proceso natural del envejecimiento puede acelerarse por diversos factores y causar dolor significativo.
                </p>
                <p>
                  Con el paso del tiempo, los discos pierden su hidratación, elasticidad y altura, lo que puede generar inestabilidad en la columna vertebral, formación de osteofitos (espolones óseos) y compresión de los nervios cercanos, resultando en dolor crónico y limitación funcional.
                </p>
              </section>
              
              <section className={styles.section}>
                <h2>Síntomas Frecuentes</h2>
                <div className={styles.symptomsGrid}>
                  <div className={styles.symptomCard}>
                    <FaBone className={styles.icon} />
                    <h3>Dolor en cuello o espalda</h3>
                    <p>Dolor que empeora con el movimiento y puede irradiarse hacia las extremidades.</p>
                  </div>
                  <div className={styles.symptomCard}>
                    <FaExclamationTriangle className={styles.icon} />
                    <h3>Entumecimiento u hormigueo</h3>
                    <p>Sensaciones de adormecimiento que afectan manos, brazos, piernas o pies.</p>
                  </div>
                  <div className={styles.symptomCard}>
                    <FaBriefcaseMedical className={styles.icon} />
                    <h3>Debilidad muscular</h3>
                    <p>Pérdida de fuerza en grupos musculares específicos debido a la compresión nerviosa.</p>
                  </div>
                  <div className={styles.symptomCard}>
                    <FaBone className={styles.icon} />
                    <h3>Rigidez en la columna</h3>
                    <p>Limitación en la movilidad y flexibilidad de la columna vertebral.</p>
                  </div>
                </div>
              </section>
              
              <section className={styles.section}>
                <h2>Tratamientos Especializados</h2>
                <div className={styles.treatmentsGrid}>
                  <div className={styles.treatmentCard}>
                    <FaNotesMedical className={styles.icon} />
                    <h3>Bloqueos epidurales</h3>
                    <p>Inyecciones guiadas por fluoroscopía que reducen la inflamación y alivian el dolor.</p>
                  </div>
                  <div className={styles.treatmentCard}>
                    <FaTablets className={styles.icon} />
                    <h3>Radiofrecuencia</h3>
                    <p>Técnica que utiliza ondas para interrumpir las señales de dolor en los nervios afectados.</p>
                  </div>
                  <div className={styles.treatmentCard}>
                    <FaProcedures className={styles.icon} />
                    <h3>Ozonoterapia discal</h3>
                    <p>Tratamiento con ozono médico que reduce la inflamación y promueve la regeneración tisular.</p>
                  </div>
                  <div className={styles.treatmentCard}>
                    <FaUserMd className={styles.icon} />
                    <h3>Manejo farmacológico</h3>
                    <p>Medicamentos específicos para controlar el dolor y la inflamación asociados con la enfermedad.</p>
                  </div>
                </div>
              </section>
              
              <CtaSection 
                title="¿Sufre de Dolor por Enfermedad Discal?" 
                description="En Medicina del Dolor PTY contamos con especialistas en el tratamiento de la enfermedad discal degenerativa. Nuestro enfoque integral y personalizado te ayudará a recuperar tu calidad de vida y reducir el dolor de manera efectiva."
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 