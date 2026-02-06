import { fetchQuery } from 'convex/nextjs'
import { api } from '../../convex/_generated/api'
import HomeClient from './HomeClient'

export default async function Home() {
  let recentVideos: {
    _id: string
    title: string
    slug: string
    description: string
    category: string
    videoUrl: string
    videoType: 'instagram' | 'tiktok'
  }[] = []

  try {
    const results = await fetchQuery(api.contents.getRecent, { limit: 5 })
    recentVideos = results.map((r) => ({
      _id: r._id,
      title: r.title,
      slug: r.slug,
      description: r.description,
      category: r.category,
      videoUrl: r.videoUrl,
      videoType: r.videoType,
    }))
  } catch {
    // Convex not configured yet — show homepage without carousel
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Medicina del Dolor PTY',
    image: 'https://www.medicinadeldolorpty.com/img/hor.jpg',
    '@id': 'https://www.medicinadeldolorpty.com',
    url: 'https://www.medicinadeldolorpty.com',
    telephone: '+507 6619-8728',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Clínica Hospital San Fernando, Torre Sur, Consultorios Sur, Piso 4',
      addressLocality: 'Ciudad de Panamá',
      addressRegion: 'Panamá',
      addressCountry: 'PA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.000875,
      longitude: -79.531995,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/medicinadeldolorpty',
      'https://www.instagram.com/medicinadeldolorpty',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Tratamiento del Dolor',
      itemListElement: [
        {
          '@type': 'MedicalProcedure',
          name: 'Tratamiento de Hernia Discal',
          description:
            'Tratamiento especializado para hernias discales con técnicas mínimamente invasivas',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Tratamiento del Dolor Lumbar',
          description: 'Manejo integral del dolor lumbar crónico',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Tratamiento del Dolor Cervical',
          description:
            'Tratamiento especializado para dolor cervical y problemas de cuello',
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeClient recentVideos={recentVideos} />
    </>
  )
}
