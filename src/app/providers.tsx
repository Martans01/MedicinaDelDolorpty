'use client'

import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ConvexReactClient } from 'convex/react'
import { esES } from '@clerk/localizations'

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL
const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

const convex = convexUrl ? new ConvexReactClient(convexUrl) : null

function ConvexWrapper({ children }: { children: React.ReactNode }) {
  if (!convex) return <>{children}</>
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  )
}

export default function Providers({ children }: { children: React.ReactNode }) {
  if (!clerkKey) {
    return <>{children}</>
  }

  return (
    <ClerkProvider
      publishableKey={clerkKey}
      localization={esES}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
    >
      <ConvexWrapper>{children}</ConvexWrapper>
    </ClerkProvider>
  )
}
