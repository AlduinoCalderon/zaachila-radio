import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zaachila Radio 96.3 FM',
    short_name: 'Zaachila Radio',
    description: 'La voz del pueblo que despierta y se levanta',
    start_url: '/',
    display: 'standalone',
    background_color: '#1A0B2E',
    theme_color: '#1A0B2E',
    icons: [
      {
        src: '/logo-cuadrado.webp',
        sizes: '192x192 512x512',
        type: 'image/webp',
        purpose: 'any maskable'
      },
    ],
  }
}
