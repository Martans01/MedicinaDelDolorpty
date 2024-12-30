import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './styles.module.css'
import Image from 'next/image'

export default function ArthritisPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Desgaste en la Columna (Artrosis Lumbar)</h1>
          
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src="/img/desgaste.jpeg"
                alt="Desgaste en la columna"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>

            <div className={styles.textContent}>
              <h2>¿Qué es la Artrosis Lumbar?</h2>
              <p>
                La artrosis lumbar es una condición degenerativa que afecta las articulaciones 
                y discos de la columna vertebral. Es una de las causas más comunes de dolor 
                de espalda, especialmente en personas mayores de 50 años.
              </p>

              <h2>Síntomas Comunes</h2>
              <ul>
                <li>Dolor en la parte baja de la espalda</li>
                <li>Rigidez, especialmente en las mañanas</li>
                <li>Dificultad para moverse o flexionar la espalda</li>
                <li>Dolor que empeora con la actividad física</li>
                <li>Sensación de crepitación o crujidos</li>
              </ul>

              <h2>Tratamientos Disponibles</h2>
              <ul>
                <li>Bloqueos analgésicos guiados por fluoroscopía</li>
                <li>Radiofrecuencia de ramas mediales</li>
                <li>Terapia física dirigida</li>
                <li>Manejo farmacológico especializado</li>
                <li>Técnicas mínimamente invasivas</li>
              </ul>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>¿Necesita Ayuda con su Dolor?</h2>
            <p>
              Contáctenos para una evaluación personalizada y descubra cómo podemos 
              ayudarle a mejorar su calidad de vida.
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