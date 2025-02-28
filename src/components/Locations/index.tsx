'use client'
import { useState, useRef, useEffect } from 'react'
import styles from './styles.module.css'
import { FaMapMarkerAlt, FaClock, FaPhone, FaMapMarked, FaCalendarAlt, FaWhatsapp } from 'react-icons/fa'

const locations = [
  {
    id: 1,
    name: 'Clínica Hospital San Fernando, Torre Sur',
    address: 'Via España. Consultorios Sur, Piso 4 Ciudad de Panamá, Panamá',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5950658963373!2d-79.53199512426956!3d9.000874989601047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f402574ba1%3A0xd3e3dea008f2414e!2sHospital%20San%20Fernando!5e0!3m2!1ses!2spa!4v1709123847723!5m2!1ses!2spa',
    schedule: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    phone: '+507 6619-8728',
    mapUrl: 'https://maps.google.com/?q=Clinica+Hospital+San+Fernando+Torre+Sur+Panama'
  },
  {
    id: 2,
    name: 'CENTRO MÉDICO DEL CARIBE',
    address: 'Calle 12 y Roosevelt Colón. Consultorio 211 Colón, Panamá',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15774.990462339553!2d-79.90364612254444!3d9.356294038213366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fac8affbecdb28f%3A0x902e42f548be6286!2sCentro%20M%C3%A9dico%20Del%20Caribe!5e0!3m2!1ses!2spa!4v1709122945337!5m2!1ses!2spa',
    schedule: 'Horario según cita previa',
    phone: '+507 6619-8728',
    mapUrl: 'https://maps.google.com/?q=Centro+Medico+Del+Caribe,+Calle+12+Roosevelt+Colon+Panama'
  }
]

export default function Locations() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeLocation, setActiveLocation] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsVisible(true)
      return
    }

    let observer: IntersectionObserver | null = null
    try {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setIsVisible(true)
            if (observer && sectionRef.current) {
              observer.unobserve(sectionRef.current)
            }
          }
        },
        { threshold: 0.1 }
      )

      if (sectionRef.current) {
        observer.observe(sectionRef.current)
      }
    } catch (error) {
      setIsVisible(true)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <section className={`${styles.locations} ${isVisible ? styles.visible : ''}`} id="locations" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Ubicaciones
            <span className={styles.accent}></span>
          </h2>
          <p className={styles.subtitle}>
            Consultorios estratégicamente ubicados para tu comodidad,
            equipados con tecnología de última generación.
          </p>
        </div>

        <div className={styles.grid}>
          {locations.map((location) => (
            <div 
              key={location.id}
              className={`${styles.card} ${activeLocation === location.id ? styles.active : ''}`}
              onMouseEnter={() => setActiveLocation(location.id)}
              onMouseLeave={() => setActiveLocation(null)}
            >
              <div className={styles.imageContainer}>
                <iframe
                  src={location.embedUrl}
                  className={styles.map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de ${location.name}`}
                  allowFullScreen
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.locationName}>{location.name}</h3>

                <div className={styles.locationDetails}>
                  <div className={styles.detail}>
                    <FaMapMarkerAlt className={styles.detailIcon} />
                    <span>{location.address}</span>
                  </div>
                  <div className={styles.detail}>
                    <FaClock className={styles.detailIcon} />
                    <span>{location.schedule}</span>
                  </div>
                  <div className={styles.detail}>
                    <FaPhone className={styles.detailIcon} />
                    <span>{location.phone}</span>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <a 
                    href={location.mapUrl}
                    className={styles.mapButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaMapMarked className={styles.buttonIcon} />
                    Ver en Google Maps
                  </a>
                  <a 
                    href={`https://api.whatsapp.com/send?phone=50766198728&text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20${encodeURIComponent(location.name)}`}
                    className={styles.appointmentButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCalendarAlt className={styles.buttonIcon} />
                    Agendar Cita
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contact}>
          <div className={styles.contactContent}>
            <h3>¿Necesitas más información?</h3>
            <p>Estamos aquí para ayudarte a encontrar el mejor tratamiento para tu dolor</p>
            <div className={styles.contactMethods}>
              <a 
                href="tel:+50766198728"
                className={styles.contactMethod}
              >
                <FaPhone className={styles.methodIcon} />
                <span>Llamar ahora</span>
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=50766198728"
                className={styles.contactMethod}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className={styles.methodIcon} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 