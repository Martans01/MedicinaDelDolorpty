'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import servicesStyles from '../../app/styles/services.module.css'
import { FaUserMd, FaHospital, FaHeartbeat, FaCalendarCheck, FaArrowRight, FaSpinner, FaRedoAlt } from 'react-icons/fa'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const widgetRef = useRef<HTMLIFrameElement>(null)
  const widgetContainerRef = useRef<HTMLDivElement>(null)
  const [widgetLoading, setWidgetLoading] = useState(true)
  const [widgetError, setWidgetError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const MAX_RETRIES = 3

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

    // Mejorado: Sistema para cargar el iframe
    const handleIframeLoad = () => {
      if (widgetRef.current) {
        setWidgetLoading(false)
        setWidgetError(false)
        widgetRef.current.style.opacity = '1'
      }
    }

    // Manejar errores del iframe
    const handleIframeError = () => {
      setWidgetError(true)
      setWidgetLoading(false)
    }

    if (widgetRef.current) {
      widgetRef.current.addEventListener('load', handleIframeLoad)
      widgetRef.current.addEventListener('error', handleIframeError)
      
      // Configurar un timeout para detectar problemas de carga
      const timeoutId = setTimeout(() => {
        if (widgetLoading && !widgetError && retryCount < MAX_RETRIES) {
          console.log('Widget timeout - retrying', retryCount + 1)
          setWidgetError(true)
        }
      }, 15000) // 15 segundos para cargar
      
      return () => {
        clearTimeout(timeoutId)
        if (widgetRef.current) {
          widgetRef.current.removeEventListener('load', handleIframeLoad)
          widgetRef.current.removeEventListener('error', handleIframeError)
        }
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current)
        }
      }
    }

    // Ya no intentamos acceder al contentWindow del iframe porque causa errores de seguridad

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [widgetLoading, widgetError, retryCount])

  // Función para reintentar cargar el widget
  const retryLoadingWidget = () => {
    if (retryCount < MAX_RETRIES) {
      setWidgetLoading(true)
      setWidgetError(false)
      setRetryCount(prevCount => prevCount + 1)
      
      // Recargar el iframe
      if (widgetRef.current) {
        const currentSrc = widgetRef.current.src
        widgetRef.current.src = ''
        setTimeout(() => {
          if (widgetRef.current) {
            widgetRef.current.src = currentSrc
          }
        }, 100)
      }
    }
  }

  // Clase CSS base para el contenedor del widget
  const widgetContainerClass = servicesStyles.widgetContainer

  // URL para la autenticación directa (sin iframe)
  const openLoginDirectly = () => {
    window.open('https://app.cliniweb.com/es/perfil/edgar-luna', '_blank')
  }

  return (
    <div className={styles.about} id="about" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.mainImage}>
              <Image
                src="/img/402A0250.jpg"
                alt="Dr. Edgar Luna en consulta"
                width={500}
                height={600}
                className={styles.doctorImage}
              />
              <div className={styles.overlayContent}>
                <span>Especialista en</span>
                <h3>Medicina del Dolor</h3>
              </div>
            </div>
          </div>

          <div className={styles.textSection}>
            <div className={styles.sectionBadge}>
              Sobre Nosotros
            </div>
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
                  <FaUserMd />
                </div>
                <div className={styles.qualificationText}>
                  <h3>Especialista Certificado</h3>
                  <p>Formación especializada en manejo del dolor</p>
                </div>
              </div>

              <div className={styles.qualification}>
                <div className={styles.qualificationIcon}>
                  <FaHospital />
                </div>
                <div className={styles.qualificationText}>
                  <h3>Tecnología Avanzada</h3>
                  <p>Equipamiento y técnicas de última generación</p>
                </div>
              </div>

              <div className={styles.qualification}>
                <div className={styles.qualificationIcon}>
                  <FaHeartbeat />
                </div>
                <div className={styles.qualificationText}>
                  <h3>Atención Personalizada</h3>
                  <p>Tratamientos adaptados a cada paciente</p>
                </div>
              </div>
            </div>

            <div className={styles.cta}>
              <a 
                href="#agendar-cita"
                className={styles.ctaButton}
              >
                <FaCalendarCheck className={styles.ctaIcon} />
                Agenda una Consulta
              </a>
              <a href="#experience" className={styles.learnMore}>
                Ver Experiencia <FaArrowRight className={styles.arrow} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Widget de Cliniweb para agendar citas */}
        <div className={servicesStyles.widgetSection} id="agendar-cita">
          <h2>Agende su cita directamente</h2>
          <p>Seleccione el horario que mejor se adapte a sus necesidades a través de Cliniweb.</p>
          <p style={{ fontStyle: 'italic', fontSize: '0.9em' }}>Haz clic en el área de abajo para abrir el sistema de citas en una nueva pestaña.</p>

          <div
            ref={widgetContainerRef}
            className={widgetContainerClass} // Clase base sin expansión
            style={{
              transition: 'all 0.5s ease',
              height: '700px', // Altura fija
              maxWidth: '100%', // Ancho máximo
              margin: '0 auto', // Centrado
              position: 'relative', // Necesario para el overlay absoluto
              // REMOVED: Estilos condicionales de expansión (top, left, right, zIndex, boxShadow)
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' // Sombra base
            }}
          >
            {/* REMOVED: Botones de control */}

            {widgetLoading && (
              <div className={servicesStyles.widgetLoading}>
                <FaSpinner className={servicesStyles.spinnerIcon} />
                <p>Cargando sistema de citas...</p>
              </div>
            )}
            
            {widgetError && (
              <div className={servicesStyles.widgetError}>
                <p>Ha ocurrido un problema cargando el sistema de citas.</p>
                <div className={servicesStyles.widgetErrorActions}>
                  <button 
                    onClick={retryLoadingWidget}
                    disabled={retryCount >= MAX_RETRIES}
                    className={servicesStyles.retryButton}
                  >
                    <FaRedoAlt /> Reintentar
                  </button>
                  
                  <button 
                    onClick={openLoginDirectly}
                    className={servicesStyles.openExternalButton}
                  >
                    Abrir en nueva ventana
                  </button>
                </div>
                {retryCount >= MAX_RETRIES && (
                  <p className={servicesStyles.widgetFallback}>
                    También puede agendar su cita llamando al{' '}
                    <a href="tel:+50766198728">+507 6619-8728</a> o por{' '}
                    <a 
                      href="https://api.whatsapp.com/send?phone=50766198728" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>.
                  </p>
                )}
              </div>
            )}
            
            <iframe 
              ref={widgetRef}
              src="https://app.cliniweb.com/es/perfil/edgar-luna" 
              className={`${servicesStyles.widgetFrame} ${widgetLoading || widgetError ? servicesStyles.widgetFrameHidden : ''}`}
              title="Sistema de citas del Dr. Edgar Luna"
              style={{ 
                opacity: widgetLoading || widgetError ? 0 : 1, 
                transition: 'opacity 0.5s ease',
                visibility: widgetLoading || widgetError ? 'hidden' : 'visible'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              // Restaurar allow-same-origin para permitir sessionStorage y serviceWorker
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
            />

            {/* Overlay transparente para capturar clics (SOLO si no hay error y no está cargando) */}
            { !widgetLoading && !widgetError && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'transparent',
                  zIndex: 10, // Asegura que esté sobre el iframe y contenido de error/carga
                  cursor: 'pointer'
                }}
                onClick={openLoginDirectly}
                title="Haz clic para abrir el sistema de citas en una nueva pestaña"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 