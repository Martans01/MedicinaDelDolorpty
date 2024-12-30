'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

const locations = [
  {
    id: 1,
    name: 'Hospital Santa Fe',
    address: 'Avenida Balboa, Ciudad de Panamá',
    image: '/img/location-dot-solid.svg',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    phone: '+507 6619-8728',
    mapUrl: 'https://maps.google.com/?q=Hospital+Santa+Fe+Panama'
  },
  {
    id: 2,
    name: 'Centro Médico Royal Center',
    address: 'Vía España, Ciudad de Panamá',
    image: '/img/location-dot-solid.svg',
    schedule: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
    phone: '+507 6619-8728',
    mapUrl: 'https://maps.google.com/?q=Centro+Medico+Royal+Center+Panama'
  },
  {
    id: 3,
    name: 'Hospital CHMAG Colón',
    address: 'Colón, Panamá',
    image: '/img/location-dot-solid.svg',
    schedule: 'Horario según cita previa',
    phone: '+507 6619-8728',
    mapUrl: 'https://maps.google.com/?q=Hospital+CHMAG+Colon+Panama'
  }
]

export default function Locations() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null)

  return (
    <div className={styles.locations} id="locations">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Ubicaciones
            <span className={styles.accent}></span>
          </h2>
          <p className={styles.subtitle}>
            Consultorios estratégicamente ubicados para tu comodidad
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
              <div className={styles.cardHeader}>
                <Image
                  src={location.image}
                  alt={location.name}
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                <h3>{location.name}</h3>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.address}>
                  <i className="fas fa-map-marker-alt"></i>
                  {location.address}
                </p>
                <p className={styles.schedule}>
                  <i className="fas fa-clock"></i>
                  {location.schedule}
                </p>
                <p className={styles.phone}>
                  <i className="fas fa-phone"></i>
                  {location.phone}
                </p>
              </div>

              <div className={styles.cardActions}>
                <a 
                  href={location.mapUrl}
                  className={styles.mapButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en Google Maps
                </a>
                <a 
                  href={`https://api.whatsapp.com/send?phone=50766198728&text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20${encodeURIComponent(location.name)}`}
                  className={styles.appointmentButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Cita
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contact}>
          <div className={styles.contactInfo}>
            <h3>¿Necesitas más información?</h3>
            <p>Estamos aquí para ayudarte a encontrar el mejor tratamiento para tu dolor</p>
            <div className={styles.contactMethods}>
              <a 
                href="tel:+50766198728"
                className={styles.contactMethod}
              >
                <i className="fas fa-phone-alt"></i>
                <span>Llamar ahora</span>
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=50766198728"
                className={styles.contactMethod}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 