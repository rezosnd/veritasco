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
    default: 'VeritasCo.Tech — #1 School ERP with Biometric Attendance in India',
    template: '%s | VeritasCo.Tech',
  },

  description:
    'VeritasCo.Tech is India\'s first complete School ERP with in-hand biometric attendance devices. Manage student admissions, fee collection, LMS, transport GPS tracking, hostel, library, HR & payroll — all in one cloud dashboard. 500+ schools trust us. Setup in 6 days. 24/7 support.',

  keywords: [
    'School ERP Software India',
    'Biometric Attendance System for Schools',
    'School Management Software',
    'Student Information System',
    'School Fee Management Software',
    'Online Attendance System',
    'School ERP India',
    'Education ERP Software',
    'LMS for Schools India',
    'Transport Management System School',
    'Hostel Management Software',
    'School Library Software',
    'HR Payroll for Schools',
    'School App for Parents',
    'Smart School Software',
    'Digital School Management',
    'VeritasCo',
    'VeritasCo Tech ERP',
    'biometric device school India',
    'school admin software',
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

  // Open Graph — og.png kept for max social crawler compatibility (WhatsApp/FB don't support AVIF)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName,
    title: 'VeritasCo.Tech — India\'s #1 School ERP with Biometric Attendance',
    description:
      'Transform your school with VeritasCo.Tech — biometric attendance, fee management, student app, transport GPS, hostel, library, HR & payroll in one platform. 500+ schools. Setup in 6 days.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'VeritasCo.Tech — School ERP Software with Biometric Attendance',
        type: 'image/png',
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: 'summary_large_image',
    site: '@veritascotech',
    creator: '@veritascotech',
    title: 'VeritasCo.Tech — India\'s #1 School ERP with Biometric Attendance',
    description:
      'Biometric attendance + complete school ERP: fees, LMS, transport, hostel, library, HR. 500+ schools. Go live in 6 days. 24/7 support.',
    images: ['/og.png'],
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
        'https://linkedin.com/company/veritascotech',
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
