'use client'

import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa'
import styles from '../../app/styles/services.module.css'
import { useRouter } from 'next/navigation'

export default function CtaButtons() {
  const router = useRouter();
  
  const handleScheduleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Verificar si estamos en la página principal
    if (window.location.pathname === '/') {
      // Si estamos en la página principal, simplemente scrolleamos al widget
      document.getElementById('agendar-cita')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si estamos en otra página, navegamos a la página principal con el anchor
      router.push('/#agendar-cita');
    }
  };
  
  return (
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
        href="/#agendar-cita" 
        className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
        onClick={handleScheduleClick}
      >
        <FaCalendarAlt size={24} />
        Agendar Cita
      </a>
    </div>
  )
} 