import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medicina del Dolor PTY | Dr. Edgar Luna - Especialista en Dolor Crónico',
  description: 'Centro especializado en tratamiento del dolor en Panamá. Expertos en dolor crónico, hernia discal, dolor lumbar, cervical y articular. Dr. Edgar Luna, especialista certificado.',
  keywords: 'medicina del dolor, dolor crónico, tratamiento dolor, especialista dolor, Dr. Edgar Luna, Panamá, hernia discal, dolor lumbar, dolor cervical, dolor articular',
  openGraph: {
    title: 'Medicina del Dolor PTY | Dr. Edgar Luna',
    description: 'Centro especializado en tratamiento del dolor en Panamá. Expertos en dolor crónico, hernia discal, dolor lumbar, cervical y articular.',
    type: 'website',
    locale: 'es_PA',
    siteName: 'Medicina del Dolor PTY',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicina del Dolor PTY | Dr. Edgar Luna',
    description: 'Centro especializado en tratamiento del dolor en Panamá. Expertos en dolor crónico y manejo del dolor.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'TU-CÓDIGO-DE-VERIFICACIÓN', // Reemplaza esto con el código que te da Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
        <link rel="canonical" href="https://www.medicinadeldolorpty.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body>{children}</body>
    </html>
  )
} 