'use client'
import React, { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import Locations from '@/components/Locations'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      })
    }, observerOptions)

    document.querySelectorAll(`.${styles.animate}`).forEach(el => {
      observer.observe(el)
    })

    // Agregar datos estructurados para SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      'name': 'Medicina del Dolor PTY',
      'image': 'https://www.medicinadeldolorpty.com/img/hor.jpg',
      '@id': 'https://www.medicinadeldolorpty.com',
      'url': 'https://www.medicinadeldolorpty.com',
      'telephone': '+507-XXX-XXXX',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Tu dirección aquí',
        'addressLocality': 'Ciudad de Panamá',
        'addressRegion': 'Panamá',
        'postalCode': 'XXXXX',
        'addressCountry': 'PA'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 'XX.XXXXX',
        'longitude': '-XX.XXXXX'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday'
          ],
          'opens': '08:00',
          'closes': '17:00'
        }
      ],
      'sameAs': [
        'https://www.facebook.com/medicinadeldolorpty',
        'https://www.instagram.com/medicinadeldolorpty'
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Servicios de Tratamiento del Dolor',
        'itemListElement': [
          {
            '@type': 'MedicalProcedure',
            'name': 'Tratamiento de Hernia Discal',
            'description': 'Tratamiento especializado para hernias discales con técnicas mínimamente invasivas'
          },
          {
            '@type': 'MedicalProcedure',
            'name': 'Tratamiento del Dolor Lumbar',
            'description': 'Manejo integral del dolor lumbar crónico'
          },
          {
            '@type': 'MedicalProcedure',
            'name': 'Tratamiento del Dolor Cervical',
            'description': 'Tratamiento especializado para dolor cervical y problemas de cuello'
          }
        ]
      }
    }

    // Insertar los datos estructurados en el head
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      observer.disconnect()
      document.head.removeChild(script)
    }
  }, [])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <section className={`${styles.section} ${styles.animate}`} aria-label="Sobre Nosotros">
          <About />
        </section>
        <section className={`${styles.section} ${styles.animate} ${styles.servicesSection}`} aria-label="Nuestros Servicios">
          <Services />
        </section>
        <section className={`${styles.section} ${styles.animate}`} aria-label="Nuestra Experiencia">
          <Experience />
        </section>
        <section className={`${styles.section} ${styles.animate}`} aria-label="Ubicaciones">
          <Locations />
        </section>
      </main>
      <Footer />
    </>
  )
} 