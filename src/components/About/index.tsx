'use client'
import Image from 'next/image'
import styles from './styles.module.css'

export default function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.mainImage}>
              <Image
                src="/img/_MG_7347.jpg"
                alt="Dr. Edgar Luna en consulta"
                width={500}
                height={600}
                className={styles.doctorImage}
              />
            </div>
            <div className={styles.experience}>
              <div className={styles.experienceItem}>
                <span className={styles.number}>15+</span>
                <span className={styles.text}>Años de Experiencia</span>
              </div>
              <div className={styles.experienceItem}>
                <span className={styles.number}>3</span>
                <span className={styles.text}>Centros Médicos</span>
              </div>
            </div>
          </div>

          <div className={styles.textSection}>
            <h2 className={styles.title}>
              Comprometido con tu Bienestar
              <span className={styles.accent}></span>
            </h2>
            
            <p className={styles.description}>
              Como especialista en Anestesiología y Medicina del Dolor, me dedico a 
              proporcionar soluciones efectivas para el manejo del dolor crónico. Mi 
              enfoque combina técnicas avanzadas con un trato personalizado, 
              asegurando que cada paciente reciba el cuidado que merece.
            </p>

            <div className={styles.qualifications}>
              <div className={styles.qualification}>
                <div className={styles.qualificationIcon}>
                  <i className="fas fa-user-md"></i>
                </div>
                <div className={styles.qualificationText}>
                  <h3>Especialista Certificado</h3>
                  <p>Formación especializada en manejo del dolor</p>
                </div>
              </div>

              <div className={styles.qualification}>
                <div className={styles.qualificationIcon}>
                  <i className="fas fa-hospital"></i>
                </div>
                <div className={styles.qualificationText}>
                  <h3>Tecnología Avanzada</h3>
                  <p>Equipamiento y técnicas de última generación</p>
                </div>
              </div>

              <div className={styles.qualification}>
                <div className={styles.qualificationIcon}>
                  <i className="fas fa-heart"></i>
                </div>
                <div className={styles.qualificationText}>
                  <h3>Atención Personalizada</h3>
                  <p>Tratamientos adaptados a cada paciente</p>
                </div>
              </div>
            </div>

            <div className={styles.cta}>
              <a 
                href="https://api.whatsapp.com/send?phone=50766198728"
                className={styles.ctaButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda una Consulta
              </a>
              <a href="#experience" className={styles.learnMore}>
                Ver Experiencia <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 