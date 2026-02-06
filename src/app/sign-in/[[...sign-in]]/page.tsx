'use client'

import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#012C3C',
    }}>
      <SignIn afterSignInUrl="/gestion-contenido" />
    </div>
  )
}
