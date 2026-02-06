'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import { useRouter, usePathname } from 'next/navigation'
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
  HiMail,
  HiPlay
} from 'react-icons/hi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
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



  // Función de navegación limpia y optimizada
  const handleNavItemClick = (sectionId: string) => {
    // Buscar la sección
    const section = document.getElementById(sectionId)
    
    if (section) {
      // Calcular posición con offset para el header
      const elementPosition = section.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - 80
      
      // Hacer scroll suave
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Cerrar menú
      setIsMenuOpen(false)
    } else {
      console.error(`Sección no encontrada: ${sectionId}`)
      setIsMenuOpen(false)
    }
  }



  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // NO cerrar el menú si el click fue dentro del menú móvil
      if (menuRef.current && menuRef.current.contains(target)) {
        return; // No hacer nada si el click fue dentro del menú móvil
      }
      
      if (navRef.current && !navRef.current.contains(target) && isMenuOpen) {
        setIsMenuOpen(false);
      }

      // Cerrar dropdown solo si se hace clic fuera del área del dropdown
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(target) && 
        isDropdownOpen
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, isDropdownOpen]);

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
      document.body.style.height = '100%'
      
      // Enfocar el botón de cerrar para accesibilidad
      if (closeButtonRef.current) {
        setTimeout(() => {
          closeButtonRef.current?.focus()
        }, 100)
      }
    } else {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
    
    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [isMenuOpen])

  // Manejar escape para cerrar el menú
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isMenuOpen])

  // DESACTIVADO TEMPORALMENTE - Efecto que maneja hash links (causaba conflictos)
  /*
  useEffect(() => {
    // Función para manejar los clics en enlaces de tipo "hash" (#)
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.pathname === window.location.pathname) {
        e.preventDefault();
        const sectionId = link.hash.substring(1);
        const section = document.getElementById(sectionId);
        
        if (section) {
          setIsMenuOpen(false);
          setIsDropdownOpen(false);
          
          setTimeout(() => {
            const headerOffset = 80;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };
    
    document.addEventListener('click', handleHashLinkClick);
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);
  */

  // Cerrar el menú cuando cambia la ruta (sin manejar hash para evitar conflictos)
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    
    // DESACTIVADO: manejo de hash para evitar conflictos con navegación móvil
    /*
    if (pathname === '/' && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const headerOffset = 80;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
    */
  }, [pathname]);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState)
    if (!isMenuOpen) {
      // Si estamos abriendo el menú, cerramos el dropdown
      setIsDropdownOpen(false)
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
          <Link href="/" className={styles.logo}>
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
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <HiX className={styles.menuIcon} />
            ) : (
              <HiMenuAlt3 className={styles.menuIcon} />
            )}
          </button>

          {/* Barra de navegación para desktop (visible solo en pantallas grandes) */}
          <div className={styles.navLinks}>
            <Link href="/#about" className={styles.navLink}>
              Sobre Mí
            </Link>
            <Link href="/#services" className={styles.navLink}>
              Servicios
            </Link>
            <div className={styles.dropdown}>
              <span className={styles.navLink}>
                Tratamientos
                <HiChevronDown className={styles.dropdownArrow} />
              </span>
              <div className={styles.dropdownContent}>
                <Link href="/servicios">Desgaste en la columna</Link>
                <Link href="/rodilla">Desgaste de rodilla</Link>
                <Link href="/cadera">Desgaste de cadera</Link>
                <Link href="/espalda">Dolor de espalda</Link>
                <Link href="/cuello">Dolor cervical</Link>
                <Link href="/ciatica">Ciática</Link>
                <Link href="/enfermedad-discal">Enfermedad discal</Link>
                <Link href="/hernia">Hernia discal</Link>
                <Link href="/canal-lumbar">Canal lumbar estrecho</Link>
              </div>
            </div>
            <Link href="/#experience" className={styles.navLink}>
              Experiencia
            </Link>
            <Link href="/#locations" className={styles.navLink}>
              Ubicaciones
            </Link>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
            <Link href="/#agendar-cita" className={styles.ctaButton}>
              Agendar Cita
            </Link>
          </div>
        </div>
      </nav>

      {/* Menú móvil */}
      <div 
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`} 
        ref={menuRef}
        role="dialog" 
        aria-modal="true" 
        aria-label="Menú de navegación"
      >
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.mobileMenuLogo}>
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

        <div className={styles.mobileNavLinks}>
          <button 
            className={styles.navLink} 
            data-mobile-nav-link="about"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleNavItemClick('about')
            }}
          >
            <span className={styles.navIcon}><HiUser /></span>
            Sobre Mí
          </button>
          
          <button 
            className={styles.navLink} 
            data-mobile-nav-link="services"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleNavItemClick('services')
            }}
          >
            <span className={styles.navIcon}><HiOfficeBuilding /></span>
            Servicios
          </button>
          
          {/* Sección tratamientos simplificada */}
          <div className={styles.tratamientosSection}>
            <div className={styles.sectionTitle}>
              <span className={styles.navIcon}><HiBriefcase /></span>
              <span>Tratamientos</span>
            </div>
            
            <div className={styles.tratamientosList}>
              <Link href="/servicios" className={styles.tratamientoLink} onClick={() => setIsMenuOpen(false)}>
                Desgaste en la columna
              </Link>
              <Link href="/rodilla" className={styles.tratamientoLink} onClick={() => setIsMenuOpen(false)}>
                Desgaste de rodilla
              </Link>
              <Link href="/cadera" className={styles.tratamientoLink} onClick={() => setIsMenuOpen(false)}>
                Desgaste de cadera
              </Link>
              <Link href="/espalda" className={styles.tratamientoLink} onClick={() => setIsMenuOpen(false)}>
                Dolor de espalda
              </Link>
              <Link href="/cuello" className={styles.tratamientoLink} onClick={() => setIsMenuOpen(false)}>
                Dolor cervical
              </Link>
              <Link href="/ciatica" className={styles.tratamientoLink} onClick={() => setIsMenuOpen(false)}>
                Ciática
              </Link>
              <Link href="/enfermedad-discal" className={styles.tratamientoLink} onClick={() => setIsMenuOpen(false)}>
                Enfermedad discal
              </Link>
              <Link href="/hernia" className={styles.tratamientoLink} onClick={() => setIsMenuOpen(false)}>
                Hernia discal
              </Link>
              <Link href="/canal-lumbar" className={styles.tratamientoLink} onClick={() => setIsMenuOpen(false)}>
                Canal lumbar estrecho
              </Link>
            </div>
          </div>
          
          <button 
            className={styles.navLink} 
            data-mobile-nav-link="experience"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleNavItemClick('experience')
            }}
          >
            <span className={styles.navIcon}><HiBriefcase /></span>
            Experiencia
          </button>
          
          <button 
            className={styles.navLink} 
            data-mobile-nav-link="locations"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleNavItemClick('locations')
            }}
          >
            <span className={styles.navIcon}><HiLocationMarker /></span>
            Ubicaciones
          </button>
          
          <Link href="/blog" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            <span className={styles.navIcon}><HiPlay /></span>
            Blog
          </Link>

          <button
            className={styles.ctaButton}
            data-mobile-nav-link="agendar-cita"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              handleNavItemClick('agendar-cita')
            }}
          >
            <HiCalendar className={styles.ctaIcon} />
            Agendar Cita
          </button>


          
          <div className={styles.mobileContactInfo}>
            <a 
              href="tel:+50766198728"
              className={styles.mobileContactLink}
            >
              <HiPhone className={styles.mobileContactIcon} />
              +507 6619-8728
            </a>
            <a 
              href="mailto:info@medicinadeldolorpty.com"
              className={styles.mobileContactLink}
            >
              <HiMail className={styles.mobileContactIcon} />
              info@medicinadeldolorpty.com
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}