import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { NavigationLoader } from '@/components/navigation-loader'
import './globals.css'

const siteUrl = 'https://veritasco.tech'
const siteName = 'VeritasCo.Tech'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'VeritasCo.Tech — #1 School ERP & Restaurant POS Solutions in India',
    template: '%s | VeritasCo.Tech',
  },

  description:
    'VeritasCo.Tech provides India\'s first School ERP with in-hand biometric devices and advanced Restaurant POS systems. Manage schools (admissions, fees, LMS) or restaurants (QR ordering, billing, KDS) from one powerful cloud dashboard.',

  keywords: [
    'School ERP Software India',
    'Biometric Attendance System for Schools',
    'Restaurant POS System India',
    'QR Code Ordering System',
    'School Management Software',
    'Restaurant Management Software',
    'Cloud-based ERP India',
    'Student Information System',
    'School Fee Management',
    'Kitchen Display System KDS',
    'POS with UPI Payments',
    'VeritasCo Tech',
    'Education Technology India',
    'Hospitality Tech Solutions',
  ],

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'Education Technology',
  applicationName: siteName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  // Favicons — all sizes generated from logo
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/favicon-32x32.png' }],
  },

  // Open Graph — og.png updated for School ERP + Restaurant POS
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName,
    title: 'VeritasCo.Tech — Digital Ecosystem for Schools & Restaurants',
    description:
      'Transform your operations with VeritasCo.Tech. Leading School ERP with Biometric Attendance and QR-based Restaurant POS systems. Scalable, secure, and cloud-ready.',
    images: [
      {
        url: '/og.png?v=2',
        width: 1200,
        height: 630,
        alt: 'VeritasCo.Tech — School ERP & Restaurant POS Solutions',
        type: 'image/png',
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: 'summary_large_image',
    site: '@veritascotech',
    creator: '@veritascotech',
    title: 'VeritasCo.Tech — Digital Ecosystem for Schools & Restaurants',
    description:
      'School ERP with biometric attendance + Restaurant POS with QR ordering. The complete digital ecosystem for your business.',
    images: ['/og.png?v=2'],
  },
}

// JSON-LD structured data (Organization + WebSite)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon-512x512.png`,
        width: 512,
        height: 512,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8709442363',
        email: 'info@veritasco.tech',
        contactType: 'customer support',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'IN',
        hoursAvailable: 'Mo-Su 00:00-23:59',
      },
      sameAs: [
        'https://facebook.com/veritascotech',
        'https://twitter.com/veritascotech',
        'https://www.linkedin.com/company/veritasco',
        'https://www.instagram.com/veritasco.tech',
      ],
      description:
        "India's first complete School ERP with in-hand biometric attendance devices — managing admissions, fees, academics, transport, hostel, library, HR & payroll.",
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      publisher: { '@id': `${siteUrl}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/#product`,
      name: 'VeritasCo.Tech School ERP',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web, Android, iOS',
      url: siteUrl,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        seller: { '@id': `${siteUrl}/#organization` },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* Theme */}
        <meta name="theme-color" content="#3b5998" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Geo targeting for Indian market */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="language" content="English" />
        {/* Google Fonts — Open Sans (exact pulla.digital font) + Cormorant Garamond (display) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap" rel="stylesheet" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <NavigationLoader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
