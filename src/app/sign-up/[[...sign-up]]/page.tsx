'use client'

import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#012C3C',
    }}>
      <SignUp afterSignUpUrl="/gestion-contenido" />
    </div>
  )
}
