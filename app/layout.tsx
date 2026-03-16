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
  title: 'Shik Cleaning Services — Professional Cleaning Management for Business',
  description: 'Professional cleaning management for embassies, hotels, corporates and offices. Deep cleaning, event cleaning, post-construction, sofa & carpet cleaning.',
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
