import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shik Cleaning Services — Professional Cleaning Management',
  description: 'Professional cleaning management for embassies, hotels, corporates and offices in Addis Ababa.',
  openGraph: {
    title: 'Shik Cleaning',
    description: 'Professional Cleaning Management',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shik Cleaning — Professional Cleaning Management',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shik Cleaning',
    description: 'Professional Cleaning Management',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="font-dm-sans">{children}</body>
    </html>
  )
}
