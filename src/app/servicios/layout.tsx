import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desgaste en la Columna - Artrosis Lumbar | Medicina del Dolor PTY',
  description: 'Tratamiento especializado para el desgaste en la columna y artrosis lumbar en Panam\u00e1. Bloqueos analgésicos, radiofrecuencia y técnicas mínimamente invasivas.',
  keywords: 'artrosis lumbar, desgaste columna, dolor de espalda, tratamiento columna, especialista dolor, Panam\u00e1',
  openGraph: {
    title: 'Desgaste en la Columna | Medicina del Dolor PTY',
    description: 'Tratamiento especializado para el desgaste en la columna y artrosis lumbar en Panam\u00e1.',
    type: 'article',
    locale: 'es_PA',
  },
}

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
