'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import styles from '../styles/services.module.css'
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle, FaClock, FaUserMd } from 'react-icons/fa'

export default function SciaticaPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay} />
              <Image
                src="/img/ciatica.webp"
                alt="Dolor ciático"
                width={800}
                height={600}
                className={styles.image}
                priority
                unoptimized
              />
            </div>

            <div className={styles.textContent}>
              <h1>Ciática (Dolor del Nervio Ciático)</h1>
              
              <div>
                <h2>¿Qué es la Ciática?</h2>
                <p>
                  La ciática es un dolor que se irradia a lo largo del trayecto del nervio 
                  ciático, que se extiende desde la parte baja de la espalda, a través de 
                  la cadera y glúteo, y baja por la parte posterior de cada pierna. Este 
                  dolor puede variar desde una molestia leve hasta un dolor agudo y punzante.
                </p>
              </div>

              <div>
                <h2>Síntomas Característicos</h2>
                <ul>
                  <li>Dolor que irradia desde la espalda hasta la pierna</li>
                  <li>Hormigueo y entumecimiento en piernas</li>
                  <li>Debilidad muscular en la pierna afectada</li>
                  <li>Dolor que empeora al sentarse</li>
                  <li>Dolor punzante o quemante</li>
                  <li>Dificultad para caminar o moverse</li>
                </ul>
              </div>

              <div>
                <h2>Tratamientos Especializados</h2>
                <ul>
                  <li>Bloqueos epidurales selectivos</li>
                  <li>Radiofrecuencia del ganglio de la raíz dorsal</li>
                  <li>Ozonoterapia intradiscal</li>
                  <li>Terapia física específica</li>
                  <li>Manejo farmacológico avanzado</li>
                  <li>Técnicas de descompresión neural</li>
                </ul>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <FaUserMd className={styles.infoIcon} />
                  <h3>Atención Especializada</h3>
                  <p>Evaluación detallada y tratamiento personalizado por expertos en dolor ciático.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaCheckCircle className={styles.infoIcon} />
                  <h3>Técnicas Avanzadas</h3>
                  <p>Utilizamos los métodos más modernos para el tratamiento del dolor ciático.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaClock className={styles.infoIcon} />
                  <h3>Alivio Duradero</h3>
                  <p>Enfoque integral para lograr un alivio sostenible del dolor.</p>
                </div>
              </div>

              <div className={styles.cta}>
                <h2>¿Sufre de Dolor Ciático?</h2>
                <p>
                  No permita que el dolor ciático limite su vida. Contáctenos para una 
                  evaluación especializada y descubra las opciones de tratamiento más 
                  adecuadas para su caso.
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