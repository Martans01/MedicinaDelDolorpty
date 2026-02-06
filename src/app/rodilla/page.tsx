'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import styles from '../styles/services.module.css'
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle, FaClock, FaUserMd } from 'react-icons/fa'

export default function KneePainPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay} />
              <Image
                src="/img/rodilla.webp"
                alt="Dolor de rodilla"
                width={800}
                height={600}
                className={styles.image}
                priority
              />
            </div>

            <div className={styles.textContent}>
              <h1>Dolor de Rodilla</h1>
              
              <div>
                <h2>¿Qué es el Dolor de Rodilla?</h2>
                <p>
                  El dolor de rodilla es una condición común que puede afectar a personas 
                  de todas las edades. Puede ser causado por lesiones, condiciones médicas 
                  o desgaste natural. La rodilla, siendo una de las articulaciones más 
                  complejas del cuerpo, requiere un diagnóstico preciso y un tratamiento 
                  especializado para lograr una recuperación efectiva.
                </p>
              </div>

              <div>
                <h2>Síntomas Frecuentes</h2>
                <ul>
                  <li>Dolor al caminar o subir escaleras</li>
                  <li>Rigidez e inflamación</li>
                  <li>Inestabilidad articular</li>
                  <li>Crepitación o crujidos</li>
                  <li>Limitación en el rango de movimiento</li>
                  <li>Debilidad muscular</li>
                </ul>
              </div>

              <div>
                <h2>Tratamientos Especializados</h2>
                <ul>
                  <li>Infiltraciones guiadas por ultrasonido</li>
                  <li>Viscosuplencia con ácido hialurónico</li>
                  <li>Radiofrecuencia de nervios geniculados</li>
                  <li>Terapia física específica</li>
                  <li>Manejo farmacológico personalizado</li>
                  <li>Técnicas de regeneración tisular</li>
                </ul>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <FaUserMd className={styles.infoIcon} />
                  <h3>Atención Especializada</h3>
                  <p>Evaluación detallada y tratamiento personalizado por expertos en dolor articular.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaCheckCircle className={styles.infoIcon} />
                  <h3>Tecnología de Punta</h3>
                  <p>Utilizamos equipos avanzados para diagnóstico y tratamiento preciso.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaClock className={styles.infoIcon} />
                  <h3>Recuperación Efectiva</h3>
                  <p>Programas diseñados para una mejora gradual y sostenible de su movilidad.</p>
                </div>
              </div>

              <div className={styles.cta}>
                <h2>¿El Dolor de Rodilla Limita sus Actividades?</h2>
                <p>
                  No permita que el dolor de rodilla afecte su calidad de vida. Contáctenos 
                  para una evaluación especializada y descubra las opciones de tratamiento 
                  disponibles para su caso.
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
                    href="/#agendar-cita"
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