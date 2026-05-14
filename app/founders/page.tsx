import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageWrapper } from '@/components/page-wrapper'
import { ScrollReveal } from '@/components/scroll-reveal'
import { TransitionLink } from '@/components/transition-link'

const siteUrl = 'https://veritasco.tech'

export const metadata: Metadata = {
  title: 'Founders of Veritasco — Rehan Suman & Aman Kumar | VeritasCo.Tech',
  description:
    "Meet the visionary founders of Veritasco – Rehan Suman (Co‑Founder & CEO) and Aman Kumar (Co‑Founder & CTO). They drive a full‑stack portfolio that spans Cloud Infrastructure, School ERP, Restaurant POS, Biometric Attendance, Analytics, API‑first integrations and more.",
  keywords: [
    'Founder of Veritasco',
    'Rehan Suman',
    'Aman Kumar',
    'Veritasco cloud',
    'School ERP',
    'Restaurant POS',
    'Biometric attendance',
    'Analytics platform',
    'API integration',
    'Mobile app development',
    'EdTech',
    'Hospitality tech',
    'India startup founders',
  ],
  alternates: { canonical: `${siteUrl}/founders` },
  openGraph: {
    type: 'profile',
    url: `${siteUrl}/founders`,
    title: 'Founders of Veritasco — Rehan Suman & Aman Kumar',
    description:
      "Rehan and Aman power Veritasco’s end‑to‑end tech stack – from cloud‑native ERP to QR‑based POS, AI analytics and secure APIs.",
    images: [
      { url: `${siteUrl}/rehan.png`, width: 800, height: 800, alt: 'Rehan Suman – Co‑Founder & CEO' },
      { url: `${siteUrl}/aman.png`, width: 800, height: 800, alt: 'Aman Kumar – Co‑Founder & CTO' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founders of Veritasco — Rehan Suman & Aman Kumar',
    description:
      "The technical visionaries behind India’s leading School ERP and Restaurant POS platform.",
    images: [`${siteUrl}/rehan.png`],
  },
}

// JSON‑LD for Knowledge Graph – full details for both founders and the organization
const foundersJsonLd = {
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
      founder: [
        {
          '@type': 'Person',
          '@id': `${siteUrl}/founders#rehan-suman`,
          name: 'Rehan Suman',
          givenName: 'Rehan',
          familyName: 'Suman',
          jobTitle: 'Co‑Founder & CEO',
          description:
            'Engineering mastermind behind Veritasco’s multi‑tenant cloud platform, biometric integration, API‑first services and AI analytics. Strategic leader who defines product vision, growth strategy and market expansion for Veritasco’s cloud‑native solutions.',
          image: {
            '@type': 'ImageObject',
            url: `${siteUrl}/rehan.png`,
            caption: 'Rehan Suman – Co‑Founder & CEO',
          },
          url: `${siteUrl}/founders#rehan-suman`,
          sameAs: ['https://www.linkedin.com/in/rezosnd/'],
          worksFor: { '@id': `${siteUrl}/#organization` },
          nationality: 'Indian',
          knowsAbout: [
            'Product Strategy',
            'Business Development',
            'Cloud Architecture',
            'EdTech',
            'Restaurant Technology',
            'Full‑Stack Development',
            'Biometric Systems',
            'Scalable Cloud Infrastructure',
            'API Design',
            'Data Analytics',
          ],
        },
        {
          '@type': 'Person',
          '@id': `${siteUrl}/founders#aman-kumar`,
          name: 'Aman Kumar',
          givenName: 'Aman',
          familyName: 'Kumar',
          jobTitle: 'Co‑Founder & CTO',
          description:
            'Engineering mastermind behind Veritasco’s multi‑tenant cloud platform, biometric integration, API‑first services and AI analytics.',
          image: {
            '@type': 'ImageObject',
            url: `${siteUrl}/aman.png`,
            caption: 'Aman Kumar – Co‑Founder & CTO',
          },
          url: `${siteUrl}/founders#aman-kumar`,
          sameAs: ['https://www.linkedin.com/in/amankumarthakur/'],
          worksFor: { '@id': `${siteUrl}/#organization` },
          nationality: 'Indian',
          knowsAbout: [
            'Product Strategy',
            'Business Development',
          ],
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/founders`,
      url: `${siteUrl}/founders`,
      name: 'Founders of Veritasco — Rehan Suman & Aman Kumar',
      description:
        'Explore the full technical and product portfolio engineered by Veritasco’s founders.',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Founders', item: `${siteUrl}/founders` },
        ],
      },
    },
  ],
}

// Portfolio data – each block describes a solution area
const SOLUTIONS = [
  {
    id: 'cloud',
    title: 'Cloud‑Native Architecture',
    icon: '/workspace.png',
    description:
      'Multi‑tenant, auto‑scaling AWS/GCP infrastructure with zero‑downtime deployments, CI/CD pipelines and serverless functions that power both ERP and POS.',
    details: ['Kubernetes orchestration', 'Infrastructure as Code (Terraform)', 'Observability – Prometheus, Grafana, Loki'],
  },
  {
    id: 'erp',
    title: 'School ERP Platform',
    icon: '/erp_hero_bg.png',
    description:
      'End‑to‑end management of admissions, fee collection, timetabling, biometric attendance and parent‑teacher communication, all in a single SaaS solution.',
    details: ['Biometric offline sync', 'Role‑based access control', 'Custom workflow engine'],
  },
  {
    id: 'pos',
    title: 'Restaurant POS & QR Ordering',
    icon: '/pos-bg.png',
    description:
      'Fast, UPI‑enabled billing, kitchen‑display systems, loyalty programs and real‑time analytics for multi‑outlet chains.',
    details: ['QR‑code table ordering', 'KDS integration', 'Dynamic menu management'],
  },
  {
    id: 'analytics',
    title: 'AI‑Powered Analytics',
    icon: '/clients.png',
    description:
      'Machine‑learning dashboards that surface insights on student performance, inventory turnover and revenue trends.',
    details: ['Predictive enrollment modeling', 'Sales and waste optimization', 'Custom reporting APIs'],
  },
  {
    id: 'api',
    title: 'API‑First Integration Layer',
    icon: '/api.png',
    description:
      'REST/GraphQL endpoints that let partners embed Veritasco functionality – from student data sync to order push notifications.',
    details: ['OAuth2 security', 'Rate‑limiting & throttling', 'Webhooks for real‑time events'],
  },
  {
    id: 'mobile',
    title: 'Cross‑Platform Mobile Apps',
    icon: '/phone.avif',
    description:
      'iOS & Android apps built with React Native, delivering native‑like experiences for teachers, parents and restaurant staff.',
    details: ['Push notifications', 'Offline data caching', 'Feature‑flag driven releases'],
  },
]

export default function FoundersPage() {
  return (
    <>
      {/* JSON‑LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(foundersJsonLd) }} />

      <PageWrapper
        badge="VeritasCo — Leadership"
        title="The Founders"
        description="Rehan Suman & Aman Kumar – the technical and strategic pillars behind Veritasco’s end‑to‑end cloud portfolio."
        breadcrumb={[{ label: 'Founders', href: '/founders' }]}
        bgImage="/about_hero_v3.png"
      >
        {/* Hero */}
        <section style={{ background: '#0a0a0f', padding: '120px 2rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(155,212,215,0.6)', marginBottom: '16px' }}>
              Visionary Leadership
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 80px)', fontWeight: 300, color: '#ffffff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              Rehan Suman &amp; Aman Kumar
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'rgba(255,255,255,0.5)', maxWidth: '720px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
              Co‑founders powering India’s most advanced School ERP and Restaurant POS platforms – from cloud foundations to AI analytics.
            </p>
          </div>
        </section>

        {/* Founders Cards */}
        <section style={{ background: '#111', padding: '80px 2rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '12px' }}>
                  Leadership
                </p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,48px)', color: '#ffffff' }}>
                  Meet the Founders
                </h2>
              </div>
            </ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '32px' }}>
              {/* Rehan */}
              <article itemScope itemType="https://schema.org/Person" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', overflow: 'hidden' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
                  <Image src="/rehan.png" alt="Rehan Suman – Co‑Founder & CEO" fill className="object-cover object-top" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: 'linear-gradient(to top, rgba(10,10,15,0.95), transparent)' }} />
                  <div style={{ position: 'absolute', bottom: '24px', left: '28px', right: '28px' }}>
                    <span style={{ display: 'inline-block', background: 'rgba(13,95,183,0.9)', color: '#fff', fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '100px', marginBottom: '8px', fontFamily: 'var(--font-body)' }} itemProp="jobTitle">
                      Co‑Founder &amp; CEO
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3vw,40px)', fontWeight: 400, color: '#ffffff', lineHeight: 1.1, margin: 0 }} itemProp="name">
                      Rehan Suman
                    </h2>
                  </div>
                </div>
                <div style={{ padding: '32px 28px 36px' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(155,212,215,0.8)', fontStyle: 'italic', marginBottom: '20px', lineHeight: 1.6 }}>
                    Strategic product leader – defines market fit, growth channels and partnership ecosystem.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '16px' }}>
                    Rehan spearheads Veritasco’s vision to bring enterprise‑grade technology to schools and restaurants. He architects go‑to‑market strategies, builds key alliances with education boards and hospitality chains, and leads the product roadmap that powers cloud, analytics and mobile experiences.
                  </p>
                  <Link href="/founders#rehan-suman" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#9bd4d7', fontSize: '13px', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(155,212,215,0.3)', padding: '10px 20px', borderRadius: '100px', fontFamily: 'var(--font-body)' }}>
                    Read Full Profile →
                  </Link>
                </div>
              </article>

              {/* Aman */}
              <article itemScope itemType="https://schema.org/Person" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', overflow: 'hidden' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
                  <Image src="/aman.png" alt="Aman Kumar – Co‑Founder & CTO" fill className="object-cover object-top" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: 'linear-gradient(to top, rgba(10,10,15,0.95), transparent)' }} />
                  <div style={{ position: 'absolute', bottom: '24px', left: '28px', right: '28px' }}>
                    <span style={{ display: 'inline-block', background: 'rgba(13,95,183,0.9)', color: '#fff', fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '100px', marginBottom: '8px', fontFamily: 'var(--font-body)' }} itemProp="jobTitle">
                      Co‑Founder &amp; CTO
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3vw,40px)', fontWeight: 400, color: '#ffffff', lineHeight: 1.1, margin: 0 }} itemProp="name">
                      Aman Kumar
                    </h2>
                  </div>
                </div>
                <div style={{ padding: '32px 28px 36px' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(155,212,215,0.8)', fontStyle: 'italic', marginBottom: '20px', lineHeight: 1.6 }}>
                    Engineering architect – builds the cloud stack, API layer and AI analytics engine.
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '16px' }}>
                    Aman designs Veritasco’s multi‑tenant platform, integrating biometric attendance hardware, real‑time POS processing, and data pipelines that feed AI‑driven insights. He oversees the API‑first strategy, DevOps automation and security hardening across all services.
                  </p>
                  <Link href="/founders#aman-kumar" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#9bd4d7', fontSize: '13px', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(155,212,215,0.3)', padding: '10px 20px', borderRadius: '100px', fontFamily: 'var(--font-body)' }}>
                    Read Full Profile →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Solution Portfolio */}
        <section style={{ background: '#f9fafb', padding: '80px 2rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(33,37,41,0.3)', marginBottom: '12px' }}>
                  Solutions
                </p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,48px)', color: '#212529' }}>
                  What Veritasco Delivers
                </h2>
              </div>
            </ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '24px' }}>
              {SOLUTIONS.map((sol) => (
                <article key={sol.id} style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                  <div style={{ position: 'relative', height: '180px', background: '#000' }}>
                    <Image src={sol.icon} alt={sol.title} fill className="object-cover" />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,2.5vw,28px)', color: '#0d5fb7', marginBottom: '12px' }}>
                      {sol.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(33,37,41,0.7)', lineHeight: 1.6, marginBottom: '12px' }}>
                      {sol.description}
                    </p>
                    <ul style={{ paddingLeft: '20px', margin: 0, color: 'rgba(33,37,41,0.6)' }}>
                      {sol.details.map((d) => (
                        <li key={d} style={{ fontSize: '13px', marginBottom: '4px' }}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ background: '#0d5fb7', color: '#fff', textAlign: 'center', padding: '80px 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,48px)', marginBottom: '24px' }}>
              Ready to Transform Your Institution?
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', marginBottom: '32px' }}>
              Connect with Rehan or Aman for a personalized demo of Veritasco’s cloud‑native ERP and POS solutions.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#0d5fb7', fontSize: '15px', fontWeight: 600, padding: '12px 28px', borderRadius: '100px', textDecoration: 'none', fontFamily: 'var(--font-body)' }}>
              Get In Touch →
            </Link>
          </div>
        </section>
      </PageWrapper>
    </>
  )
}
