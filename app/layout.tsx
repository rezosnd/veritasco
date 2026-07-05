import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { NavigationLoader } from '@/components/navigation-loader'
import './globals.css'
import type { Viewport } from 'next'

const siteUrl = 'https://veritasco.tech'
const siteName = 'VeritasCo.Tech'

export const viewport: Viewport = {
  themeColor: '#3b5998',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'VeritasCo.Tech — #1 School ERP, Restaurant POS & BazarChowk',
    template: '%s | VeritasCo.Tech',
  },

  description:
    'VeritasCo.Tech provides India\'s first School ERP, advanced Restaurant POS systems, and BazarChowk — India\'s local commerce super app. Founded by Rehan Suman and Aman Kumar.',

  generator: 'Next.js',
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'School ERP Software India',
    'Biometric Attendance System for Schools',
    'Restaurant POS System India',
    'BazarChowk',
    'Bazar Chowk',
    'Local Commerce Super App',
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
    'Who is the founder of Veritasco',
    'Founder of Veritasco',
    'Who founded Veritasco',
    'Who is the CEO of Veritasco',
    'Who is the CTO of Veritasco',
    'Veritasco founder name',
    'Veritasco founders',
    'Veritasco CEO',
    'Veritasco CTO',
    'Rehan Suman founder of Veritasco',
    'Aman Kumar founder of Veritasco',
    'Rehan Suman CEO Veritasco',
    'Aman Kumar CTO Veritasco',
    'Rehan Suman',
    'Aman Kumar',
    'Best EdTech Startup India',
    'Best POS Startup India',
    'VeritasCo Technologies',
    'VeritasCo Software',
    'Top ERP Providers in India',
  ],

  authors: [
    { name: 'Rehan Suman', url: `${siteUrl}/founders#rehan-suman` },
    { name: 'Aman Kumar', url: `${siteUrl}/founders#aman-kumar` },
    { name: siteName, url: siteUrl },
  ],
  creator: 'Rehan Suman & Aman Kumar',
  publisher: siteName,
  category: 'Technology & Education',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  appleWebApp: {
    title: siteName,
    statusBarStyle: 'black-translucent',
    capable: true,
  },

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
    title: 'VeritasCo.Tech — #1 School ERP, Restaurant POS & BazarChowk',
    description:
      'Transform your operations with VeritasCo.Tech. Leading School ERP, Restaurant POS systems, and BazarChowk local commerce app. Founded by Rehan Suman and Aman Kumar.',
    emails: ['info@veritasco.tech'],
    phoneNumbers: ['+918709442363'],
    countryName: 'India',
    images: [
      {
        url: `${siteUrl}/og.png?v=3`,
        width: 1200,
        height: 630,
        alt: 'VeritasCo.Tech — School ERP, Restaurant POS & BazarChowk',
        type: 'image/png',
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: 'summary_large_image',
    site: '@veritascotech',
    creator: '@veritascotech',
    title: 'VeritasCo.Tech — #1 School ERP, Restaurant POS & BazarChowk',
    description:
      'School ERP, Restaurant POS, and BazarChowk. The complete digital ecosystem for your business, founded by Rehan Suman and Aman Kumar.',
    images: [`${siteUrl}/og.png?v=3`],
  },
}

// JSON-LD structured data (Organization + WebSite + Founders)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Veritasco',
      alternateName: ['VeritasCo', 'VeritasCo.Tech'],
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.avif`,
        width: 512,
        height: 512,
      },
      foundingDate: '2023',
      foundingLocation: {
        '@type': 'Place',
        name: 'India',
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
      founder: [
        {
          '@type': 'Person',
          '@id': `${siteUrl}/founders#rehan-suman`,
          name: 'Rehan Suman',
          givenName: 'Rehan',
          familyName: 'Suman',
          jobTitle: 'Founder & CEO',
          description:
            'Rehan Suman is the Founder and CEO of Veritasco, an Indian technology startup building cloud-based School ERP and Restaurant POS systems.',
          image: {
            '@type': 'ImageObject',
            url: `${siteUrl}/rehan.png`,
            caption: 'Rehan Suman — Founder & CEO of Veritasco',
          },
          url: `${siteUrl}/founders#rehan-suman`,
          sameAs: [
            'https://www.linkedin.com/in/rezosnd/',
            'https://github.com/rezosnd'
          ],
          worksFor: { '@id': `${siteUrl}/#organization` },
          nationality: 'Indian',
          knowsAbout: ['School ERP', 'Restaurant POS', 'EdTech', 'Business Development', 'Full‑Stack Development', 'Scalable Cloud Infrastructure', 'API Design', 'Data Analytics'],
        },
        {
          '@type': 'Person',
          '@id': `${siteUrl}/founders#aman-kumar`,
          name: 'Aman Kumar',
          givenName: 'Aman',
          familyName: 'Kumar',
          jobTitle: 'Co-Founder & CTO',
          description:
            'Aman Kumar is the Co-Founder & CTO of Veritasco, driving engineering, technical architecture, and marketing strategy for India\'s first biometric‑integrated School ERP and QR‑based Restaurant POS platform.',
          image: {
            '@type': 'ImageObject',
            url: `${siteUrl}/aman.png`,
            caption: 'Aman Kumar — Co-Founder & CTO of Veritasco',
          },
          url: `${siteUrl}/founders#aman-kumar`,
          sameAs: [
            'https://www.linkedin.com/in/amankumarthakur/',
          ],
          worksFor: { '@id': `${siteUrl}/#organization` },
          nationality: 'Indian',
          knowsAbout: ['Software Architecture', 'Biometric Systems', 'Cloud Computing', 'Full Stack Development', 'Marketing Strategy', 'Brand Management'],
        },
      ],
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
        price: '0',
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
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/#product-bazarchowk`,
      name: 'BazarChowk',
      applicationCategory: 'ShoppingApplication',
      operatingSystem: 'Web, Android, iOS',
      url: 'https://bazarchowk.com/',
      description: 'India\'s Local Commerce Super App connecting towns and villages to local businesses.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        seller: { '@id': `${siteUrl}/#organization` },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is the founder of Veritasco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rehan Suman is the Founder and CEO of Veritasco, and Aman Kumar is the Co-Founder and CTO. Together they built VeritasCo into a leading tech company providing School ERP, Restaurant POS, and BazarChowk.'
          }
        },
        {
          '@type': 'Question',
          name: 'Who is the CEO of Veritasco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rehan Suman is the Founder and CEO of Veritasco.'
          }
        },
        {
          '@type': 'Question',
          name: 'Who is the CTO of Veritasco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aman Kumar is the Co-Founder and CTO of Veritasco.'
          }
        },
        {
          '@type': 'Question',
          name: 'Who founded Veritasco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Veritasco was founded by Rehan Suman (CEO) and Aman Kumar (CTO).'
          }
        },
        {
          '@type': 'Question',
          name: 'Who are the founders of Veritasco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The founders of Veritasco are Rehan Suman and Aman Kumar.'
          }
        }
      ]
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'Veritasco Tech Solutions',
      image: `${siteUrl}/logo.avif`,
      telephone: '+91-8709442363',
      email: 'info@veritasco.tech',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressRegion: 'Bihar',
      },
      url: siteUrl,
      priceRange: '₹₹',
      founder: [
        { '@id': `${siteUrl}/founders#rehan-suman` },
        { '@id': `${siteUrl}/founders#aman-kumar` }
      ],
      sameAs: [
        'https://facebook.com/veritascotech',
        'https://twitter.com/veritascotech',
        'https://www.linkedin.com/company/veritasco',
        'https://www.instagram.com/veritasco.tech',
      ]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About Us',
          item: `${siteUrl}/about`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Founders',
          item: `${siteUrl}/founders`
        }
      ]
    }
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavigationLoader />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
