import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './styles.module.css'
import Image from 'next/image'

export default function SciaticaPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Dolor de la Ciática (Radicular)</h1>
          
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src="/img/ciatica.webp"
                alt="Dolor ciático"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>

            <div className={styles.textContent}>
              <h2>¿Qué es el Dolor Ciático?</h2>
              <p>
                El dolor ciático es una condición que se produce cuando el nervio ciático, 
                el nervio más largo del cuerpo, se comprime o irrita. Este dolor puede 
                extenderse desde la parte baja de la espalda, a través de la cadera y 
                glúteo, y bajar por la parte posterior de la pierna hasta el pie.
              </p>

              <h2>Síntomas Característicos</h2>
              <ul>
                <li>Dolor que se irradia desde la espalda baja hasta la pierna</li>
                <li>Sensación de hormigueo o entumecimiento</li>
                <li>Debilidad en la pierna o pie afectado</li>
                <li>Dolor que empeora al sentarse</li>
                <li>Dolor punzante o quemante</li>
                <li>Dificultad para caminar o estar de pie</li>
              </ul>

              <h2>Tratamientos Disponibles</h2>
              <ul>
                <li>Bloqueos epidurales selectivos</li>
                <li>Radiofrecuencia pulsada del ganglio de la raíz dorsal</li>
                <li>Terapia física especializada</li>
                <li>Manejo farmacológico específico</li>
                <li>Técnicas de neuromodulación</li>
                <li>Ejercicios de estiramiento y fortalecimiento</li>
              </ul>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>¿El Dolor Ciático Afecta su Calidad de Vida?</h2>
            <p>
              No permita que el dolor ciático limite sus actividades diarias. 
              Contáctenos para una evaluación especializada y descubra cómo 
              podemos ayudarle a recuperar su movilidad y bienestar.
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