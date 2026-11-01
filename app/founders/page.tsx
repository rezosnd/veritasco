import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageWrapper } from '@/components/page-wrapper'
import { VantraButton } from '@/components/vantra-button'
import { ArrowUpRight } from 'lucide-react'

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
    icon: '/workspace.png',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(foundersJsonLd) }} />

      <PageWrapper
        badge="Founders &amp; Leadership"
        title="Rehan Suman & Aman Kumar."
        description="Co-founders powering India’s most advanced School ERP and Restaurant POS platforms — from cloud foundations to AI analytics."
        breadcrumb={[{ label: 'Founders', href: '/founders' }]}
        bgImage="/about_hero_v3.png"
        darkHero
      >
        {/* ══ 1. FOUNDERS CARDS (Vantra Editorial Dual Profiles) ══ */}
        <section className="section-dark padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-white">
                    Meet the
                    <br />
                    founders.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( Two Leaders )</div>
                  <div className="section_meta-text">Engineering &amp; Strategy</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Rehan Suman */}
                <article
                  id="rehan-suman"
                  itemScope
                  itemType="https://schema.org/Person"
                  className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-white/15">
                      <Image
                        src="/rehan.png"
                        alt="Rehan Suman – Co‑Founder & CEO"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <span className="label-mono is-light px-3 py-1 rounded-full border border-white/20 bg-white/5 mb-4 inline-block text-[10px]">
                      Co‑Founder &amp; CEO
                    </span>
                    <h3 className="heading-style-h3 text-white mb-2" itemProp="name">
                      Rehan Suman
                    </h3>
                    <p className="text-sm text-white/50 font-mono mb-6">
                      Strategic product leader — defines market fit, growth channels, and partnership ecosystem.
                    </p>
                    <p className="text-sm md:text-base text-[#f5f4f0]/75 leading-relaxed font-normal mb-8" itemProp="description">
                      Rehan spearheads Veritasco’s vision to bring enterprise‑grade technology to schools and restaurants. He architects go‑to‑market strategies, builds key alliances with education boards and hospitality chains, and leads the product roadmap that powers cloud, analytics, and mobile experiences.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <a
                      href="https://www.linkedin.com/in/rezosnd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-white/80 hover:text-white"
                    >
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="label-mono is-light text-[10px]">( CEO )</span>
                  </div>
                </article>

                {/* Aman Kumar */}
                <article
                  id="aman-kumar"
                  itemScope
                  itemType="https://schema.org/Person"
                  className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-white/15">
                      <Image
                        src="/aman.png"
                        alt="Aman Kumar – Co‑Founder & CTO"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <span className="label-mono is-light px-3 py-1 rounded-full border border-white/20 bg-white/5 mb-4 inline-block text-[10px]">
                      Co‑Founder &amp; CTO
                    </span>
                    <h3 className="heading-style-h3 text-white mb-2" itemProp="name">
                      Aman Kumar
                    </h3>
                    <p className="text-sm text-white/50 font-mono mb-6">
                      Engineering architect — builds the cloud stack, API layer, and AI analytics engine.
                    </p>
                    <p className="text-sm md:text-base text-[#f5f4f0]/75 leading-relaxed font-normal mb-8" itemProp="description">
                      Aman designs Veritasco’s multi‑tenant platform, integrating biometric attendance hardware, real‑time POS processing, and data pipelines that feed AI‑driven insights. He oversees the API‑first strategy, DevOps automation, and security hardening across all services.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <a
                      href="https://www.linkedin.com/in/amankumarthakur/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-white/80 hover:text-white"
                    >
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="label-mono is-light text-[10px]">( CTO )</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. WHAT VERITASCO DELIVERS (Portfolio Grid) ══ */}
        <section className="section-light padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-[#0a0a0a]">
                    Engineered
                    <br />
                    solutions.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( 06 Solution Areas )</div>
                  <div className="section_meta-text">What Veritasco delivers</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SOLUTIONS.map((sol) => (
                  <article
                    key={sol.id}
                    className="p-8 rounded-2xl bg-white border border-black/10 flex flex-col justify-between hover:shadow-lg transition-all"
                  >
                    <div>
                      <div className="relative h-44 rounded-xl overflow-hidden mb-6 border border-black/5 bg-[#0a0a0a]">
                        <Image src={sol.icon} alt={sol.title} fill className="object-cover opacity-80" />
                      </div>
                      <h3 className="heading-style-h4 text-[#0a0a0a] mb-2 font-semibold">
                        {sol.title}
                      </h3>
                      <p className="text-sm text-[#0a0a0a]/70 leading-relaxed font-normal mb-6">
                        {sol.description}
                      </p>
                    </div>

                    <ul className="pt-4 border-t border-black/5 space-y-1.5 font-mono text-xs text-black/60">
                      {sol.details.map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. CTA ══ */}
        <section className="section-dark padding-section text-center">
          <div className="padding-global">
            <div className="container-max max-w-2xl mx-auto">
              <div className="label-mono is-light mb-4">Direct founder contact</div>
              <h2 className="heading-style-h1 text-white mb-6">
                Ready to transform your institution?
              </h2>
              <p className="text-base text-white/60 leading-relaxed mb-10">
                Connect directly with Rehan or Aman for a personalized walk-through of Veritasco's cloud-native ERP and POS platforms.
              </p>
              <div className="flex justify-center">
                <VantraButton href="/contact" variant="light">
                  Get In Touch Directly
                </VantraButton>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  )
}
