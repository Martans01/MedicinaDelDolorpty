import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './styles.module.css'
import Image from 'next/image'

export default function NeckPainPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Dolor en el Cuello (Cervical)</h1>
          
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <Image
                src="/img/cuello.webp"
                alt="Dolor cervical"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>

            <div className={styles.textContent}>
              <h2>¿Qué es el Dolor Cervical?</h2>
              <p>
                El dolor cervical es una molestia en la región del cuello que puede 
                extenderse hacia los hombros y brazos. Puede ser causado por diversos 
                factores, desde malas posturas hasta condiciones médicas específicas. 
                Este dolor puede afectar significativamente la movilidad y el confort 
                en las actividades diarias.
              </p>

              <h2>Causas Frecuentes</h2>
              <ul>
                <li>Tensión muscular y estrés</li>
                <li>Hernia discal cervical</li>
                <li>Artrosis cervical</li>
                <li>Lesiones por latigazo cervical</li>
                <li>Posturas inadecuadas prolongadas</li>
                <li>Uso excesivo de dispositivos electrónicos</li>
              </ul>

              <h2>Tratamientos Especializados</h2>
              <ul>
                <li>Bloqueos facetarios cervicales</li>
                <li>Radiofrecuencia de ramas mediales cervicales</li>
                <li>Infiltraciones epidurales cervicales</li>
                <li>Terapia física específica</li>
                <li>Manejo farmacológico personalizado</li>
                <li>Técnicas de descompresión neural</li>
              </ul>
            </div>
          </div>

          <div className={styles.cta}>
            <h2>¿Sufre de Dolor Cervical?</h2>
            <p>
              No deje que el dolor en el cuello limite sus actividades diarias. 
              Contáctenos para una evaluación especializada y descubra las opciones 
              de tratamiento disponibles para su caso específico.
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