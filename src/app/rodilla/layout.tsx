import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tratamiento de Dolor de Rodilla en Panam\u00e1 | Medicina del Dolor PTY',
  description: 'Tratamiento especializado para el dolor de rodilla en Panam\u00e1. Infiltraciones guiadas por ultrasonido, viscosuplencia y radiofrecuencia con el Dr. Edgar Luna.',
  keywords: 'dolor de rodilla, desgaste rodilla, artrosis rodilla, tratamiento rodilla, especialista dolor, Panam\u00e1',
  openGraph: {
    title: 'Dolor de Rodilla | Medicina del Dolor PTY',
    description: 'Tratamiento especializado para el dolor de rodilla en Panam\u00e1. Técnicas avanzadas y atención personalizada.',
    type: 'article',
    locale: 'es_PA',
  },
}

export default function RodillaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
