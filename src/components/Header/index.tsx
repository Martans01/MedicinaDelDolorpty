'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'
import { 
  HiMenuAlt3, 
  HiX, 
  HiUser, 
  HiOfficeBuilding, 
  HiBriefcase, 
  HiLocationMarker, 
  HiCalendar,
  HiChevronDown,
  HiPhone,
  HiMail
} from 'react-icons/hi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const router = useRouter()
  const navRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false)
      }

      // Cerrar dropdown al hacer clic fuera
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && isDropdownOpen) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen, isDropdownOpen])

  // Cerrar el menú al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false)
      }
      
      // Cerrar dropdown si estamos volviendo a desktop
      if (window.innerWidth > 1024) {
        setIsDropdownOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  // Bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      
      // Enfocar el botón de cerrar para accesibilidad
      if (closeButtonRef.current) {
        setTimeout(() => {
          closeButtonRef.current?.focus()
        }, 100)
      }
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Manejar escape para cerrar el menú
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isMenuOpen])

  const handleScheduleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Si el menú móvil está abierto, lo cerramos
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
    
    // Verificar si estamos en la página principal
    if (window.location.pathname === '/') {
      // Si estamos en la página principal, simplemente scrolleamos al widget
      document.getElementById('agendar-cita')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Si estamos en otra página, navegamos a la página principal con el anchor
      router.push('/#agendar-cita')
    }
  }

  // Función para cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    if (window.innerWidth <= 1024) {
      setIsMenuOpen(false)
      setIsDropdownOpen(false)
    }
  }

  // Toggle dropdown en dispositivos móviles
  const toggleDropdown = (e: React.MouseEvent) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault()
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <a href="tel:+50766198728">
              <i className="fas fa-phone"></i> +507 6619-8728
            </a>
            <a href="mailto:info@medicinadeldolorpty.com">
              <i className="fas fa-envelope"></i> info@medicinadeldolorpty.com
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/medicinadeldolorpty" target="_blank" rel="noopener noreferrer">
              <Image src="/img/instagram.png" alt="Instagram" width={20} height={20} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=50766198728" target="_blank" rel="noopener noreferrer">
              <Image src="/img/whatsapp.png" alt="WhatsApp" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>

      <nav className={`${styles.mainNav} ${isScrolled ? styles.scrolled : ''}`} ref={navRef}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={handleLinkClick}>
            <Image 
              src="/img/hor.jpg" 
              alt="Dr. Edgar Luna" 
              width={60} 
              height={60}
              className={styles.logoImage} 
            />
            <div className={styles.titleContainer}>
              <h1 className={styles.mainTitle}>Medicina Del Dolor</h1>
              <p className={styles.doctorName}>Dr. Edgar Luna</p>
            </div>
          </Link>

          <button 
            className={`${styles.menuBtn} ${isMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <HiX className={styles.menuIcon} />
            ) : (
              <HiMenuAlt3 className={styles.menuIcon} />
            )}
          </button>
        </div>
      </nav>

      <div 
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`} 
        ref={menuRef}
        role="dialog" 
        aria-modal="true" 
        aria-label="Menú de navegación"
      >
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.mobileMenuLogo} onClick={handleLinkClick}>
            <Image 
              src="/img/hor.jpg" 
              alt="Dr. Edgar Luna" 
              width={40} 
              height={40}
              className={styles.logoImage} 
            />
            <span>Medicina Del Dolor</span>
          </Link>
          <button 
            className={styles.closeBtn}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
            ref={closeButtonRef}
          >
            <HiX className={styles.closeIcon} />
          </button>
        </div>

        <div className={styles.navLinks}>
          <Link href="/#about" className={styles.navLink} onClick={handleLinkClick}>
            <span className={styles.navIcon}><HiUser /></span>
            Sobre Mí
          </Link>
          <Link href="/#services" className={styles.navLink} onClick={handleLinkClick}>
            <span className={styles.navIcon}><HiOfficeBuilding /></span>
            Servicios
          </Link>
          <div 
            className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`} 
            ref={dropdownRef}
          >
            <span 
              className={styles.navLink} 
              onClick={toggleDropdown}
              role="button"
              tabIndex={0}
              aria-expanded={isDropdownOpen}
            >
              <span className={styles.navIcon}><HiBriefcase /></span>
              Tratamientos
              <HiChevronDown className={styles.dropdownArrow} />
            </span>
            <div className={styles.dropdownContent}>
              <Link href="/servicios" onClick={handleLinkClick}>Desgaste en la columna</Link>
              <Link href="/rodilla" onClick={handleLinkClick}>Desgaste de rodilla</Link>
              <Link href="/cadera" onClick={handleLinkClick}>Desgaste de cadera</Link>
              <Link href="/espalda" onClick={handleLinkClick}>Dolor de espalda</Link>
              <Link href="/cuello" onClick={handleLinkClick}>Dolor cervical</Link>
              <Link href="/ciatica" onClick={handleLinkClick}>Ciática</Link>
              <Link href="/enfermedaddiscal" onClick={handleLinkClick}>Enfermedad discal</Link>
              <Link href="/hernia" onClick={handleLinkClick}>Hernia discal</Link>
              <Link href="/canallumbar" onClick={handleLinkClick}>Canal lumbar estrecho</Link>
            </div>
          </div>
          <Link href="/#experience" className={styles.navLink} onClick={handleLinkClick}>
            <span className={styles.navIcon}><HiBriefcase /></span>
            Experiencia
          </Link>
          <Link href="/#locations" className={styles.navLink} onClick={handleLinkClick}>
            <span className={styles.navIcon}><HiLocationMarker /></span>
            Ubicaciones
          </Link>
          <a 
            href="/#agendar-cita"
            className={styles.ctaButton}
            onClick={handleScheduleClick}
          >
            <HiCalendar className={styles.ctaIcon} />
            Agendar Cita
          </a>
          
          <div className={styles.mobileContactInfo}>
            <a href="tel:+50766198728" className={styles.mobileContactLink}>
              <HiPhone className={styles.mobileContactIcon} />
              +507 6619-8728
            </a>
            <a href="mailto:info@medicinadeldolorpty.com" className={styles.mobileContactLink}>
              <HiMail className={styles.mobileContactIcon} />
              info@medicinadeldolorpty.com
            </a>
          </div>
        </div>
      </div>
    </header>
  )
} 