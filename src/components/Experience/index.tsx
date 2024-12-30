'use client'
import { useEffect, useRef } from 'react'
import styles from './styles.module.css'

const experiences = [
  {
    year: '2008-2013',
    title: 'Médico General',
    institution: 'Universidad de Panamá',
    description: 'Formación médica general con énfasis en el manejo integral del paciente.'
  },
  {
    year: '2014-2017',
    title: 'Especialidad en Anestesiología',
    institution: 'Complejo Hospitalario Dr. Arnulfo Arias Madrid',
    description: 'Especialización en anestesiología y manejo del dolor agudo y crónico.'
  },
  {
    year: '2017-2018',
    title: 'Fellowship en Medicina del Dolor',
    institution: 'Instituto Nacional de Cancerología - México',
    description: 'Entrenamiento avanzado en técnicas intervencionistas para el manejo del dolor.'
  },
  {
    year: '2018-Presente',
    title: 'Especialista en Medicina del Dolor',
    institution: 'Práctica Privada',
    description: 'Atención especializada en el diagnóstico y tratamiento del dolor crónico.'
  }
]

const stats = [
  { number: '15+', label: 'Años de Experiencia' },
  { number: '5000+', label: 'Pacientes Atendidos' },
  { number: '3', label: 'Centros Médicos' },
  { number: '95%', label: 'Satisfacción' }
]

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('Experience component mounted')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add(styles.animate);
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = document.querySelectorAll(`.${styles.timelineItem}`)
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.experience} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Trayectoria Profesional
            <span className={styles.accent}></span>
          </h2>
          <p className={styles.subtitle}>
            Más de una década dedicada al cuidado y bienestar de los pacientes
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.timeline} ref={timelineRef}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <span className={styles.year}>{exp.year}</span>
                  <h3 className={styles.timelineTitle}>{exp.title}</h3>
                  <span className={styles.institution}>{exp.institution}</span>
                  <p className={styles.description}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 