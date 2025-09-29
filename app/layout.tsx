import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Mr. Giobot - O piloto automático do barbeiro',
    template: '%s | Mr. Giobot'
  },
  description: 'Transforme sua barbearia em uma máquina de agendamentos com Mr. Giobot, o assistente de IA que atende seus clientes 24/7 no WhatsApp. Aumente seus agendamentos e reduza perdas.',
  keywords: [
    'barbearia',
    'agendamento',
    'whatsapp',
    'assistente virtual',
    'inteligência artificial',
    'automatização',
    'barbeiro',
    'salão de beleza'
  ],
  authors: [{ name: 'Giovani Amorim' }],
  creator: 'Giovani Amorim',
  publisher: 'MR. GIOBOT',
  generator: 'Next.js',
  applicationName: 'Mr. Giobot',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    title: 'Mr. Giobot - O piloto automático do barbeiro',
    description: 'Transforme sua barbearia em uma máquina de agendamentos com Mr. Giobot, o assistente de IA que atende seus clientes 24/7 no WhatsApp.',
    siteName: 'Mr. Giobot',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mr. Giobot - Assistente inteligente completo para o atendimento de barbearias'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mr. Giobot - O piloto automático do barbeiro',
    description: 'Transforme sua barbearia em uma máquina de agendamentos com Mr. Giobot, o assistente de IA que atende seus clientes 24/7 no WhatsApp.',
    images: ['/images/og-image.jpg'],
  },
  other: {
    'instagram': 'https://www.instagram.com/mrgiobot'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/icon3.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Mr. Giobot" />
        <link rel="apple-touch-icon" href="/icon3.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}