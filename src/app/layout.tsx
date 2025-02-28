import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medicina del Dolor PTY',
  description: 'Especialistas en tratamiento del dolor en Panamá',
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
      </head>
      <body>{children}</body>
    </html>
  )
} 