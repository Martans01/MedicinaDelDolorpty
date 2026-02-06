import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tratamiento de Dolor Cervical en Panam\u00e1 | Medicina del Dolor PTY',
  description: 'Tratamiento especializado para el dolor cervical y de cuello en Panam\u00e1. Bloqueos facetarios cervicales, radiofrecuencia y técnicas avanzadas con el Dr. Edgar Luna.',
  keywords: 'dolor cervical, dolor de cuello, tratamiento cervical, hernia cervical, especialista dolor, Panam\u00e1',
  openGraph: {
    title: 'Dolor Cervical | Medicina del Dolor PTY',
    description: 'Tratamiento especializado para el dolor cervical en Panam\u00e1. Técnicas avanzadas y atención personalizada.',
    type: 'article',
    locale: 'es_PA',
  },
}

export default function CuelloLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
