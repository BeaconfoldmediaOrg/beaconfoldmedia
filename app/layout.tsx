import React from "react"
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Metadata } from "next";

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'Beaconfoldmedia - Partnering for Africa’s future',
  description: 'Beaconfoldmedia is a full service firm that delivers strategic communications, digital campaigns, and advocacy that drives policy and social change across Africa.',
 openGraph: {
    title: 'Beaconfoldmedia - Partnering for Africa’s future',
    description: 'Beaconfoldmedia is a full service firm that delivers strategic communications, digital campaigns, and advocacy that drives policy and social change across Africa.',
    url: 'https://www.beaconfoldmedia.com/',
    siteName: 'Beaconfoldmedia',
    images: [
      {
        url: '/works/digital.jpg',
        width: 1200,
        height: 630,
        alt: 'Beaconfoldmedia - Partnering for Africa’s future'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beaconfoldmedia',
    description: 'Beaconfoldmedia is a full service firm that delivers strategic communications, digital campaigns, and advocacy that drives policy and social change across Africa.',
    images: ['/works/digital.jpg'],
  },
  keywords: [
    'strategic communications Africa',
    'digital campaigns Africa',
    'advocacy Africa',
    'policy change Africa',
    'social change Africa',
    'African voices',
    'African narratives',
    'African policy communications',
    'African digital strategy',
    'African coalition building',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
