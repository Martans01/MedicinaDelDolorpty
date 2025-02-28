'use client'
import { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import { FaGraduationCap, FaHospital, FaUserMd, FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    year: '2008-2013',
    title: 'Médico General',
    institution: 'Universidad de Panamá',
    description: 'Formación médica general con énfasis en el manejo integral del paciente.',
    icon: <FaGraduationCap />
  },
  {
    year: '2014-2017',
    title: 'Especialidad en Anestesiología',
    institution: 'Complejo Hospitalario Dr. Arnulfo Arias Madrid',
    description: 'Especialización en anestesiología y manejo del dolor agudo y crónico.',
    icon: <FaHospital />
  },
  {
    year: '2017-2018',
    title: 'Fellowship en Medicina del Dolor',
    institution: 'Instituto Nacional de Cancerología - México',
    description: 'Entrenamiento avanzado en técnicas intervencionistas para el manejo del dolor.',
    icon: <FaUserMd />
  },
  {
    year: '2018-Presente',
    title: 'Especialista en Medicina del Dolor',
    institution: 'Práctica Privada',
    description: 'Atención especializada en el diagnóstico y tratamiento del dolor crónico.',
    icon: <FaBriefcase />
  }
]

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineItemsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      },
      { threshold: 0.1 }
    )

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    )

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current)
    }

    timelineItemsRef.current.forEach((item) => {
      if (item) {
        itemObserver.observe(item)
      }
    })

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current)
      }
      timelineItemsRef.current.forEach((item) => {
        if (item) {
          itemObserver.unobserve(item)
        }
      })
      sectionObserver.disconnect()
      itemObserver.disconnect()
    }
  }, [])

  const setTimelineItemRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      timelineItemsRef.current[index] = el
    }
  }

  return (
    <div className={styles.experience} id="experience" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Trayectoria Profesional
            <span className={styles.accent}></span>
          </h2>
          <p className={styles.subtitle}>
            Más de una década dedicada al cuidado y bienestar de los pacientes,
            con formación especializada y experiencia comprobada.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={styles.timelineItem}
                ref={(el) => setTimelineItemRef(el, index)}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <div className={styles.iconContainer}>
                      {exp.icon}
                    </div>
                    <span className={styles.year}>{exp.year}</span>
                  </div>
                  <div className={styles.timelineBody}>
                    <h3 className={styles.timelineTitle}>{exp.title}</h3>
                    <span className={styles.institution}>{exp.institution}</span>
                    <p className={styles.description}>{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 