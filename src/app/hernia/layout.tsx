import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tratamiento de Hernia Discal en Panam\u00e1 | Medicina del Dolor PTY',
  description: 'Tratamiento especializado para hernia discal en Panam\u00e1. T\u00e9cnicas m\u00ednimamente invasivas, atenci\u00f3n personalizada y recuperaci\u00f3n efectiva con el Dr. Edgar Luna.',
  keywords: 'hernia discal, tratamiento hernia discal, dolor de espalda, columna vertebral, m\u00e9dico especialista columna, Panam\u00e1',
  openGraph: {
    title: 'Tratamiento de Hernia Discal | Medicina del Dolor PTY',
    description: 'Tratamiento especializado para hernia discal en Panam\u00e1. T\u00e9cnicas m\u00ednimamente invasivas y recuperaci\u00f3n efectiva.',
    type: 'article',
    locale: 'es_PA',
  },
}

export default function HerniaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
