'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.branding}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/img/hor.jpg"
                alt="Medicina del Dolor"
                width={80}
                height={80}
                className={styles.logoImage}
              />
              <div className={styles.brandText}>
                <h3>Medicina del Dolor</h3>
                <p>Dr. Edgar Luna</p>
              </div>
            </Link>
            <p className={styles.description}>
              Especialista en tratamientos avanzados para el manejo del dolor crónico, 
              comprometido con mejorar la calidad de vida de nuestros pacientes.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Servicios</h4>
              <ul>
                <li><Link href="/servicios">Desgaste en la columna</Link></li>
                <li><Link href="/rodilla">Desgaste de rodilla</Link></li>
                <li><Link href="/cadera">Desgaste de cadera</Link></li>
                <li><Link href="/espalda">Dolor de espalda</Link></li>
                <li><Link href="/cuello">Dolor cervical</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Tratamientos</h4>
              <ul>
                <li><Link href="/ciatica">Ciática</Link></li>
                <li><Link href="/enfermedaddiscal">Enfermedad discal</Link></li>
                <li><Link href="/hernia">Hernia discal</Link></li>
                <li><Link href="/canallumbar">Canal lumbar estrecho</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Contacto</h4>
              <ul>
                <li>
                  <a href="tel:+50766198728">
                    <i className="fas fa-phone"></i>
                    +507 6619-8728
                  </a>
                </li>
                <li>
                  <a href="mailto:info@medicinadeldolorpty.com">
                    <i className="fas fa-envelope"></i>
                    info@medicinadeldolorpty.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/medicinadeldolorpty"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                    @medicinadeldolorpty
                  </a>
                </li>
                <li>
                  <a 
                    href="https://api.whatsapp.com/send?phone=50766198728"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Dr. Edgar Luna. Todos los derechos reservados.</p>
          <div className={styles.social}>
            <a 
              href="https://www.instagram.com/medicinadeldolorpty"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=50766198728"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 