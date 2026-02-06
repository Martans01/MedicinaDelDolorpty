import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog - Videos Educativos | Medicina del Dolor PTY',
  description:
    'Videos educativos sobre tratamiento del dolor cronico, hernia discal, dolor de rodilla, espalda, cuello y mas. Dr. Edgar Luna, especialista en dolor en Panama.',
  openGraph: {
    title: 'Blog - Videos Educativos | Medicina del Dolor PTY',
    description:
      'Videos educativos sobre tratamiento del dolor cronico. Dr. Edgar Luna, especialista en dolor en Panama.',
    type: 'website',
    locale: 'es_PA',
    siteName: 'Medicina del Dolor PTY',
  },
  alternates: {
    canonical: 'https://www.medicinadeldolorpty.com/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
