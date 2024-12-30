import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './styles.module.css'
import Image from 'next/image'

export default function HipPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Desgaste de Cadera (Artrosis)</h1>
          
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src="/img/cadera.webp"
                alt="Desgaste de cadera"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>

            <div className={styles.textContent}>
              <h2>¿Qué es la Artrosis de Cadera?</h2>
              <p>
                La artrosis de cadera es una condición degenerativa que afecta la 
                articulación de la cadera, causando el deterioro del cartílago que 
                amortigua la articulación. Esta condición puede limitar significativamente 
                la movilidad y afectar la calidad de vida.
              </p>

              <h2>Síntomas Principales</h2>
              <ul>
                <li>Dolor en la ingle, muslo o rodilla</li>
                <li>Rigidez al levantarse o después de estar sentado</li>
                <li>Dificultad para caminar o cojera</li>
                <li>Dolor que empeora con la actividad</li>
                <li>Limitación en el rango de movimiento</li>
                <li>Sensación de crujido al mover la cadera</li>
              </ul>

              <h2>Tratamientos Disponibles</h2>
              <ul>
                <li>Bloqueos articulares guiados por fluoroscopía</li>
                <li>Infiltraciones con ácido hialurónico</li>
                <li>Radiofrecuencia del nervio obturador y femoral</li>
                <li>Terapia física especializada</li>
                <li>Manejo farmacológico personalizado</li>
                <li>Técnicas mínimamente invasivas</li>
              </ul>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>¿Sufre de Dolor en la Cadera?</h2>
            <p>
              El dolor de cadera no tiene que limitar su vida. Contáctenos para una 
              evaluación especializada y descubra cómo podemos ayudarle a recuperar 
              su movilidad y calidad de vida.
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