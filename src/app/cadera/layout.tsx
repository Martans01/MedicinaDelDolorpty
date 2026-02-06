import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tratamiento de Dolor de Cadera en Panam\u00e1 | Medicina del Dolor PTY',
  description: 'Tratamiento especializado para el desgaste y dolor de cadera en Panam\u00e1. Bloqueos articulares, infiltraciones y radiofrecuencia con el Dr. Edgar Luna.',
  keywords: 'dolor de cadera, artrosis cadera, desgaste cadera, tratamiento cadera, especialista dolor, Panam\u00e1',
  openGraph: {
    title: 'Dolor de Cadera | Medicina del Dolor PTY',
    description: 'Tratamiento especializado para el dolor de cadera en Panam\u00e1. Técnicas avanzadas y atención personalizada.',
    type: 'article',
    locale: 'es_PA',
  },
}

export default function CaderaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
