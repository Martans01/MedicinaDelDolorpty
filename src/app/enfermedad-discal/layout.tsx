import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enfermedad Discal Degenerativa en Panam\u00e1 | Medicina del Dolor PTY',
  description: 'Tratamiento especializado para la enfermedad discal degenerativa en Panam\u00e1. Bloqueos epidurales, radiofrecuencia y ozonoterapia discal con el Dr. Edgar Luna.',
  keywords: 'enfermedad discal, enfermedad discal degenerativa, disco intervertebral, tratamiento disco, especialista dolor, Panam\u00e1',
  openGraph: {
    title: 'Enfermedad Discal Degenerativa | Medicina del Dolor PTY',
    description: 'Tratamiento especializado para la enfermedad discal degenerativa en Panam\u00e1. Técnicas avanzadas y atención personalizada.',
    type: 'article',
    locale: 'es_PA',
  },
}

export default function EnfermedadDiscalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
