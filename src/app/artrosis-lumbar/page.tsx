'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaClock, FaUserMd } from 'react-icons/fa';
import styles from '../styles/services.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';

export default function ArtrosisLumbarPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <div className={styles.imageOverlay} />
              <Image
                src="/img/desgaste.jpeg"
                alt="Artrosis lumbar"
                width={800}
                height={600}
                className={styles.image}
                priority
              />
            </div>
            
            <div className={styles.textContent}>
              <h1>Artrosis Lumbar</h1>
              
              <div>
                <h2>¿Qué es la Artrosis Lumbar?</h2>
                <p>
                  La artrosis lumbar, también conocida como osteoartritis de la columna lumbar, es una enfermedad degenerativa que afecta las articulaciones y discos de la parte baja de la espalda. Es una condición crónica que se caracteriza por el desgaste del cartílago que protege las vértebras, lo que provoca dolor, rigidez y limitación de movimiento.
                </p>
                <p>
                  Con el tiempo, este desgaste puede causar la formación de osteofitos (espolones óseos), estrechamiento del espacio articular, y cambios en la estructura de la columna vertebral que pueden comprimir los nervios cercanos y causar dolor crónico.
                </p>
              </div>
              
              <div>
                <h2>Síntomas Frecuentes</h2>
                <ul>
                  <li>Dolor lumbar persistente</li>
                  <li>Rigidez, especialmente después de periodos de inactividad</li>
                  <li>Limitación de movimiento en la zona lumbar</li>
                  <li>Dolor irradiado hacia las nalgas o piernas</li>
                  <li>Sensación de crujido al moverse</li>
                  <li>Fatiga y dificultad para actividades cotidianas</li>
                </ul>
              </div>
              
              <div>
                <h2>Tratamientos Especializados</h2>
                <ul>
                  <li>Bloqueos facetarios lumbares</li>
                  <li>Radiofrecuencia de ramas mediales</li>
                  <li>Infiltraciones articulares</li>
                  <li>Terapia física específica</li>
                  <li>Manejo farmacológico personalizado</li>
                  <li>Técnicas mínimamente invasivas</li>
                </ul>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <FaUserMd className={styles.infoIcon} />
                  <h3>Atención Especializada</h3>
                  <p>Tratamiento personalizado por especialistas en dolor crónico con amplia experiencia.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaCheckCircle className={styles.infoIcon} />
                  <h3>Técnicas Avanzadas</h3>
                  <p>Utilizamos las técnicas más modernas y efectivas para el tratamiento de la artrosis.</p>
                </div>
                <div className={styles.infoCard}>
                  <FaClock className={styles.infoIcon} />
                  <h3>Mejora Progresiva</h3>
                  <p>Programas diseñados para una recuperación gradual y sostenible de su movilidad.</p>
                </div>
              </div>

              <CtaSection 
                title="¿Sufre de Artrosis Lumbar?" 
                description="No permita que el dolor limite su vida. Contáctenos para una evaluación especializada y descubra las opciones de tratamiento más adecuadas para su caso."
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 