'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

const services = [
  {
    id: 1,
    title: 'Desgaste en la Columna',
    description: 'Tratamiento especializado para artrosis lumbar y problemas degenerativos de la columna.',
    image: '/img/artrosis-lumbar.webp',
    link: '/servicios'
  },
  {
    id: 2,
    title: 'Desgaste de Rodilla',
    description: 'Soluciones efectivas para el dolor y la movilidad reducida por artrosis de rodilla.',
    image: '/img/rodilla.webp',
    link: '/rodilla'
  },
  {
    id: 3,
    title: 'Desgaste de Cadera',
    description: 'Tratamientos avanzados para el manejo del dolor y mejora de la movilidad en la cadera.',
    image: '/img/cadera.webp',
    link: '/cadera'
  },
  {
    id: 4,
    title: 'Dolor de Espalda',
    description: 'Diagnóstico y tratamiento personalizado para diferentes tipos de dolor de espalda.',
    image: '/img/espalda.webp',
    link: '/espalda'
  },
  {
    id: 5,
    title: 'Dolor Cervical',
    description: 'Alivio efectivo para dolores de cuello y problemas cervicales.',
    image: '/img/cuello.webp',
    link: '/cuello'
  },
  {
    id: 6,
    title: 'Ciática',
    description: 'Tratamiento especializado para el dolor ciático y problemas del nervio ciático.',
    image: '/img/ciatica.webp',
    link: '/ciatica'
  },
  {
    id: 7,
    title: 'Enfermedad Discal',
    description: 'Manejo integral de hernias y problemas discales.',
    image: '/img/enfermedaddiscal.webp',
    link: '/enfermedaddiscal'
  },
  {
    id: 8,
    title: 'Hernia Discal',
    description: 'Tratamientos mínimamente invasivos para hernias discales.',
    image: '/img/herniadiscal.webp',
    link: '/hernia'
  },
  {
    id: 9,
    title: 'Canal Lumbar Estrecho',
    description: 'Soluciones efectivas para la estenosis espinal y sus síntomas.',
    image: '/img/canallumbar.webp',
    link: '/canallumbar'
  }
]

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <div className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Nuestros Servicios
            <span className={styles.accent}></span>
          </h2>
          <p className={styles.subtitle}>
            Ofrecemos tratamientos especializados y personalizados para diversas condiciones
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <Link 
              href={service.link} 
              key={service.id}
              className={`${styles.card} ${activeService === service.id ? styles.active : ''}`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <span className={styles.learnMore}>
                  Saber más <span className={styles.arrow}>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.cta}>
          <h3>¿Necesitas ayuda con el dolor?</h3>
          <p>Agenda una consulta y encuentra el tratamiento adecuado para ti</p>
          <a 
            href="https://api.whatsapp.com/send?phone=50766198728"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
} 