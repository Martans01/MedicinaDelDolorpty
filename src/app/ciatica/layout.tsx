import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tratamiento de Ci\u00e1tica en Panam\u00e1 | Medicina del Dolor PTY',
  description: 'Tratamiento especializado para la ci\u00e1tica y dolor del nervio ci\u00e1tico en Panam\u00e1. Bloqueos epidurales, radiofrecuencia y ozonoterapia con el Dr. Edgar Luna.',
  keywords: 'ci\u00e1tica, nervio ci\u00e1tico, dolor ci\u00e1tico, tratamiento ci\u00e1tica, dolor pierna, especialista dolor, Panam\u00e1',
  openGraph: {
    title: 'Ci\u00e1tica | Medicina del Dolor PTY',
    description: 'Tratamiento especializado para la ci\u00e1tica en Panam\u00e1. Técnicas avanzadas y atención personalizada.',
    type: 'article',
    locale: 'es_PA',
  },
}

export default function CiaticaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
