'use client'
import { useState } from 'react'
import styles from './ContactForm.module.css'
import { FaCalendarAlt, FaWhatsapp, FaExternalLinkAlt } from 'react-icons/fa'

export default function ContactForm() {
  const [selectedOption, setSelectedOption] = useState<'online' | 'whatsapp' | null>(null)

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Agendar Cita</h2>
      <p className={styles.contactDescription}>
        Reserve su cita con el Dr. Edgar Luna a través de nuestros canales disponibles
      </p>
      
      <div className={styles.optionsContainer}>
        <div 
          className={`${styles.optionCard} ${selectedOption === 'online' ? styles.selected : ''}`}
          onClick={() => setSelectedOption('online')}
        >
          <div className={styles.optionIcon}>
            <FaCalendarAlt />
          </div>
          <h3>Reserva en línea</h3>
          <p>Reserve su cita a través de nuestro sistema de reservas en línea.</p>
          <a 
            href="https://app.cliniweb.com/es/perfil/edgar-luna"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.optionButton}
          >
            Reservar ahora <FaExternalLinkAlt className={styles.buttonIcon} />
          </a>
        </div>
        
        <div 
          className={`${styles.optionCard} ${selectedOption === 'whatsapp' ? styles.selected : ''}`}
          onClick={() => setSelectedOption('whatsapp')}
        >
          <div className={`${styles.optionIcon} ${styles.whatsappIcon}`}>
            <FaWhatsapp />
          </div>
          <h3>Reserva por WhatsApp</h3>
          <p>Contáctenos directamente por WhatsApp para programar su cita.</p>
          <a 
            href="https://api.whatsapp.com/send?phone=50766198728&text=Hola,%20quisiera%20agendar%20una%20cita%20con%20el%20Dr.%20Edgar%20Luna"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.optionButton} ${styles.whatsappButton}`}
          >
            Enviar mensaje <FaExternalLinkAlt className={styles.buttonIcon} />
          </a>
        </div>
      </div>
      
      <div className={styles.infoBox}>
        <h3>Información importante</h3>
        <ul>
          <li>Sus datos serán tratados con la máxima confidencialidad</li>
          <li>Recuerde llegar 15 minutos antes de su cita</li>
          <li>Cancele con al menos 24 horas de anticipación si no puede asistir</li>
          <li>Para consultas médicas urgentes, por favor contacte directamente al consultorio</li>
        </ul>
      </div>
    </div>
  )
} 