'use client'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'
import { FaArrowRight, FaCheckCircle, FaStethoscope, FaHospital } from 'react-icons/fa'

const services = [
  {
    title: 'Hernia Discal',
    description: 'Tratamiento especializado para hernias discales y dolor asociado',
    image: '/img/herniadiscal.webp',
    path: '/hernia'
  },
  {
    title: 'Dolor de Rodilla',
    description: 'Soluciones efectivas para el dolor y la movilidad de rodilla',
    image: '/img/rodilla.webp',
    path: '/rodilla'
  },
  {
    title: 'Dolor de Espalda',
    description: 'Tratamientos avanzados para el dolor de espalda crónico',
    image: '/img/espalda.webp',
    path: '/espalda'
  },
  {
    title: 'Dolor de Cuello',
    description: 'Alivio del dolor cervical y mejora de la movilidad',
    image: '/img/cuello.webp',
    path: '/cuello'
  },
  {
    title: 'Enfermedad Discal',
    description: 'Manejo integral de enfermedades discales degenerativas',
    image: '/img/enfermedaddiscal.webp',
    path: '/enfermedad-discal'
  },
  {
    title: 'Dolor de Cadera',
    description: 'Tratamientos especializados para el dolor de cadera',
    image: '/img/cadera.webp',
    path: '/cadera'
  },
  {
    title: 'Canal Lumbar Estrecho',
    description: 'Soluciones para la estenosis del canal lumbar',
    image: '/img/canallumbar.webp',
    path: '/canal-lumbar'
  },
  {
    title: 'Ciática',
    description: 'Alivio efectivo del dolor ciático y radicular',
    image: '/img/ciatica.webp',
    path: '/ciatica'
  },
  {
    title: 'Artrosis Lumbar',
    description: 'Tratamiento integral de la artrosis lumbar',
    image: '/img/artrosis-lumbar.webp',
    path: '/artrosis-lumbar'
  }
]

const procedures = [
  {
    title: 'Bloqueos analgésicos',
    icon: <FaStethoscope />,
    description: 'Técnicas precisas para el alivio del dolor'
  },
  {
    title: 'Diagnósticos guiados',
    icon: <FaHospital />,
    description: 'Por ultrasonido o rayos X'
  },
  {
    title: 'Viscosuplementación',
    icon: <FaStethoscope />,
    description: 'Con ácido hialurónico'
  },
  {
    title: 'Radiofrecuencia',
    icon: <FaHospital />,
    description: 'Térmica y pulsada'
  },
  {
    title: 'Neurolisis química',
    icon: <FaStethoscope />,
    description: 'Con Fenol'
  },
  {
    title: 'Neuroestimulación',
    icon: <FaHospital />,
    description: 'Medular espinal'
  },
  {
    title: 'Terapia intratecal',
    icon: <FaStethoscope />,
    description: 'Con implante de bomba'
  },
  {
    title: 'Vertebroplastia',
    icon: <FaHospital />,
    description: 'Y Sacroplastia'
  }
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      },
      {
        threshold: 0.1
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div className={styles.services} id="services" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Tratamientos Especializados
            <span className={styles.accent}></span>
          </h2>
          <p className={styles.subtitle}>
            Ofrecemos tratamientos personalizados y avanzados para diferentes tipos de dolor crónico,
            utilizando las técnicas más modernas y efectivas.
          </p>
        </div>

        <h3 className={styles.subsectionTitle}>Tipos de Dolor</h3>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Link href={service.path} key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <span className={styles.learnMore}>
                  Ver más <FaArrowRight className={styles.arrow} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <h3 className={styles.subsectionTitle}>Nuestros Procedimientos</h3>
        <div className={styles.proceduresGrid}>
          {procedures.map((procedure, index) => (
            <div key={index} className={styles.procedureCard}>
              <div className={styles.procedureIcon}>
                {procedure.icon}
              </div>
              <div className={styles.procedureContent}>
                <h3>{procedure.title}</h3>
                <p>{procedure.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <h3>¿Necesita ayuda con el dolor crónico?</h3>
            <p>
              Contáctenos para programar una consulta y descubrir cómo podemos ayudarle 
              a mejorar su calidad de vida.
            </p>
            <Link href="/#agendar-cita" className={styles.ctaButton}>
              <FaArrowRight className={styles.ctaIcon} />
              Agendar Consulta
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 