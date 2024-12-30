import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './styles.module.css'
import Image from 'next/image'

export default function KneePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Desgaste de Rodilla (Artrosis)</h1>
          
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src="/img/rodilla.webp"
                alt="Desgaste de rodilla"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>

            <div className={styles.textContent}>
              <h2>¿Qué es la Artrosis de Rodilla?</h2>
              <p>
                La artrosis de rodilla es una enfermedad degenerativa que afecta la 
                articulación de la rodilla, causando el desgaste del cartílago que 
                protege los extremos de los huesos. Es una condición común que afecta 
                principalmente a personas mayores de 50 años.
              </p>

              <h2>Síntomas Principales</h2>
              <ul>
                <li>Dolor al caminar o subir escaleras</li>
                <li>Rigidez articular, especialmente después del reposo</li>
                <li>Inflamación y sensibilidad al tacto</li>
                <li>Disminución de la movilidad</li>
                <li>Crujidos o chasquidos al mover la rodilla</li>
              </ul>

              <h2>Tratamientos Especializados</h2>
              <ul>
                <li>Viscosuplementación con ácido hialurónico</li>
                <li>Bloqueos articulares guiados por ultrasonido</li>
                <li>Radiofrecuencia de nervios geniculados</li>
                <li>Terapia con plasma rico en plaquetas</li>
                <li>Programas de ejercicios específicos</li>
              </ul>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>¿Sufre de Dolor en las Rodillas?</h2>
            <p>
              No permita que el dolor limite su movilidad. Contáctenos para una 
              evaluación especializada y descubra las opciones de tratamiento 
              disponibles para usted.
            </p>
            <a 
              href="https://api.whatsapp.com/send?phone=50766198728" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 