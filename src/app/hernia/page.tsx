import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './styles.module.css'
import Image from 'next/image'

export default function HerniaPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Hernia Discal</h1>
          
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src="/img/hernia.webp"
                alt="Hernia discal"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>

            <div className={styles.textContent}>
              <h2>¿Qué es una Hernia Discal?</h2>
              <p>
                Una hernia discal ocurre cuando el núcleo suave del disco intervertebral 
                protruye a través de una ruptura en el anillo fibroso exterior. Esta 
                condición puede ejercer presión sobre los nervios cercanos, causando 
                dolor, entumecimiento y otros síntomas que pueden afectar severamente 
                la calidad de vida.
              </p>

              <h2>Síntomas Principales</h2>
              <ul>
                <li>Dolor agudo en la espalda o cuello</li>
                <li>Dolor que se irradia hacia brazos o piernas</li>
                <li>Entumecimiento o hormigueo</li>
                <li>Debilidad muscular</li>
                <li>Dolor que empeora con ciertos movimientos</li>
                <li>Dificultad para realizar actividades cotidianas</li>
              </ul>

              <h2>Tratamientos Especializados</h2>
              <ul>
                <li>Bloqueos epidurales transforaminales</li>
                <li>Radiofrecuencia del ganglio de la raíz dorsal</li>
                <li>Ozonoterapia intradiscal</li>
                <li>Terapia física específica</li>
                <li>Manejo farmacológico avanzado</li>
                <li>Técnicas mínimamente invasivas de descompresión</li>
              </ul>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>¿Sufre de una Hernia Discal?</h2>
            <p>
              No permita que el dolor de una hernia discal limite su vida. 
              Contáctenos para una evaluación especializada y descubra las 
              opciones de tratamiento más adecuadas para su caso.
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