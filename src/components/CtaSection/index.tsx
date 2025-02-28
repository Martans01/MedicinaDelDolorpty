'use client'

import styles from '../../app/styles/services.module.css'
import CtaButtons from '../CtaButtons'

interface CtaSectionProps {
  title: string;
  description: string;
}

export default function CtaSection({ title, description }: CtaSectionProps) {
  return (
    <div className={styles.cta}>
      <h2>{title}</h2>
      <p>{description}</p>
      <CtaButtons />
    </div>
  )
} 