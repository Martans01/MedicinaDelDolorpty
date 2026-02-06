import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tratamiento de Dolor de Espalda en Panam\u00e1 | Medicina del Dolor PTY',
  description: 'Tratamiento especializado para el dolor de espalda crónico en Panam\u00e1. Bloqueos facetarios, radiofrecuencia e infiltraciones epidurales con el Dr. Edgar Luna.',
  keywords: 'dolor de espalda, dolor lumbar, tratamiento espalda, dolor crónico espalda, especialista dolor, Panam\u00e1',
  openGraph: {
    title: 'Dolor de Espalda | Medicina del Dolor PTY',
    description: 'Tratamiento especializado para el dolor de espalda en Panam\u00e1. Técnicas avanzadas y atención personalizada.',
    type: 'article',
    locale: 'es_PA',
  },
}

export default function EspaldaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
