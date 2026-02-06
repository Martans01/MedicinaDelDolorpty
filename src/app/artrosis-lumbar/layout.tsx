import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artrosis Lumbar en Panam\u00e1 | Medicina del Dolor PTY',
  description: 'Tratamiento especializado para la artrosis lumbar en Panam\u00e1. Bloqueos facetarios, radiofrecuencia e infiltraciones articulares con el Dr. Edgar Luna.',
  keywords: 'artrosis lumbar, osteoartritis lumbar, desgaste lumbar, dolor lumbar, especialista dolor, Panam\u00e1',
  openGraph: {
    title: 'Artrosis Lumbar | Medicina del Dolor PTY',
    description: 'Tratamiento especializado para la artrosis lumbar en Panam\u00e1. Técnicas avanzadas y atención personalizada.',
    type: 'article',
    locale: 'es_PA',
  },
}

export default function ArtrosisLumbarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
