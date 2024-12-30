import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './styles.module.css'
import Image from 'next/image'

export default function DegenerativeDiskPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Enfermedad Discal Degenerativa</h1>
          
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src="/img/discal.webp"
                alt="Enfermedad discal degenerativa"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>

            <div className={styles.textContent}>
              <h2>¿Qué es la Enfermedad Discal Degenerativa?</h2>
              <p>
                La enfermedad discal degenerativa es una condición que ocurre cuando los 
                discos intervertebrales, que actúan como amortiguadores entre las vértebras, 
                comienzan a deteriorarse con el tiempo. Este proceso natural del envejecimiento 
                puede acelerarse por diversos factores y causar dolor significativo.
              </p>

              <h2>Síntomas Comunes</h2>
              <ul>
                <li>Dolor en cuello o espalda que empeora con el movimiento</li>
                <li>Dolor que se irradia hacia brazos o piernas</li>
                <li>Entumecimiento o hormigueo en extremidades</li>
                <li>Debilidad muscular</li>
                <li>Rigidez en la columna</li>
                <li>Pérdida de flexibilidad</li>
              </ul>

              <h2>Tratamientos Especializados</h2>
              <ul>
                <li>Bloqueos epidurales guiados por fluoroscopía</li>
                <li>Radiofrecuencia de ramas mediales</li>
                <li>Ozonoterapia discal</li>
                <li>Terapia física dirigida</li>
                <li>Manejo farmacológico multimodal</li>
                <li>Técnicas de regeneración tisular</li>
              </ul>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>¿Sufre de Dolor por Enfermedad Discal?</h2>
            <p>
              La enfermedad discal degenerativa puede tratarse efectivamente con las 
              técnicas adecuadas. Contáctenos para una evaluación especializada y 
              descubra las opciones de tratamiento disponibles para su caso.
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