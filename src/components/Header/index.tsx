'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScheduleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Verificar si estamos en la página principal
    if (window.location.pathname === '/') {
      // Si estamos en la página principal, simplemente scrolleamos al widget
      document.getElementById('agendar-cita')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Si estamos en otra página, navegamos a la página principal con el anchor
      router.push('/#agendar-cita')
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

      <nav className={`${styles.mainNav} ${isScrolled ? styles.scrolled : ''}`}>
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.menuBtnBurger}></span>
          </button>

          <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            <Link href="/#about" className={styles.navLink}>Sobre Mí</Link>
            <Link href="/#services" className={styles.navLink}>Servicios</Link>
            <div className={styles.dropdown}>
              <span className={styles.navLink}>Tratamientos</span>
              <div className={styles.dropdownContent}>
                <Link href="/servicios">Desgaste en la columna</Link>
                <Link href="/rodilla">Desgaste de rodilla</Link>
                <Link href="/cadera">Desgaste de cadera</Link>
                <Link href="/espalda">Dolor de espalda</Link>
                <Link href="/cuello">Dolor cervical</Link>
                <Link href="/ciatica">Ciática</Link>
                <Link href="/enfermedaddiscal">Enfermedad discal</Link>
                <Link href="/hernia">Hernia discal</Link>
                <Link href="/canallumbar">Canal lumbar estrecho</Link>
              </div>
            </div>
            <Link href="/#experience" className={styles.navLink}>Experiencia</Link>
            <Link href="/#locations" className={styles.navLink}>Ubicaciones</Link>
            <a 
              href="/#agendar-cita"
              className={styles.ctaButton}
              onClick={handleScheduleClick}
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
} 