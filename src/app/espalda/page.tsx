import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './styles.module.css'
import Image from 'next/image'

export default function BackPainPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Dolor de Espalda Crónico</h1>
          
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src="/img/espalda.webp"
                alt="Dolor de espalda"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>

            <div className={styles.textContent}>
              <h2>¿Qué es el Dolor Crónico de Espalda?</h2>
              <p>
                El dolor crónico de espalda es una condición persistente que dura más de 
                tres meses. Puede ser causado por diversos factores, incluyendo lesiones, 
                enfermedades degenerativas, problemas posturales o estrés. Este dolor puede 
                afectar significativamente la calidad de vida y la capacidad para realizar 
                actividades diarias.
              </p>

              <h2>Causas Comunes</h2>
              <ul>
                <li>Hernia discal</li>
                <li>Estenosis espinal</li>
                <li>Artritis facetaria</li>
                <li>Lesiones musculares</li>
                <li>Problemas posturales</li>
                <li>Estrés y tensión muscular</li>
              </ul>

              <h2>Tratamientos Especializados</h2>
              <ul>
                <li>Bloqueos epidurales guiados por fluoroscopía</li>
                <li>Radiofrecuencia de ramas mediales</li>
                <li>Neuroestimulación medular</li>
                <li>Terapia física dirigida</li>
                <li>Manejo farmacológico multimodal</li>
                <li>Técnicas de intervención mínimamente invasivas</li>
              </ul>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>¿El Dolor de Espalda Afecta su Vida Diaria?</h2>
            <p>
              No permita que el dolor crónico de espalda controle su vida. Contáctenos 
              para una evaluación especializada y descubra las opciones de tratamiento 
              que pueden ayudarle a recuperar su bienestar.
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