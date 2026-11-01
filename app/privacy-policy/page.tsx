import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how VeritasCo.Tech collects, uses, stores, and protects personal data across its school ERP, biometric attendance, and support services.",
}

const sections = [
  {
    title: "Information We Collect",
    items: [
      "Contact details such as name, email address, phone number, and organization name.",
      "Account, attendance, admission, and support records provided by schools using our platform.",
      "Device, browser, and usage data that help us secure and improve the service.",
    ],
  },
  {
    title: "How We Use Information",
    items: [
      "To provide, maintain, and support the VeritasCo.Tech platform.",
      "To send setup updates, service notices, and customer support responses.",
      "To improve reliability, security, analytics, and product performance.",
    ],
  },
  {
    title: "Sharing and Disclosure",
    items: [
      "We do not sell personal data.",
      "We may share information with trusted service providers that help us operate the platform.",
      "We may disclose information when required to comply with law or protect our rights and users.",
    ],
  },
  {
    title: "Data Security",
    items: [
      "We use access controls, encryption, and monitoring to protect the platform and stored data.",
      "Only authorized personnel and approved vendors can access data when needed for support or operations.",
    ],
  },
  {
    title: "Your Choices",
    items: [
      "You may contact us to request access, correction, or deletion of your personal information where applicable.",
      "You can opt out of non-essential communications at any time.",
    ],
  },
  {
    title: "Contact",
    items: [
      "Email: info@veritasco.tech",
      "Phone: +91-8709442363",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper
      badge="VeritasCo — Privacy"
      title="Privacy Policy"
      description="This policy explains how VeritasCo handles personal data when you visit our website, request a demo, or use our school ERP services."
      breadcrumb={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
      bgImage="/about_hero_v3.png"
    >
      <ScrollReveal>
        <section className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Header Card */}
          <div className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-3xl p-8 md:p-12 mb-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[rgba(10,10,10,0.08)]">
              <span className="label-mono text-xs text-[#737373]">
                LAST UPDATED: MAY 2, 2026
              </span>
              <span className="label-mono text-xs text-[#0a0a0a]">
                SECURITY & DATA GOVERNANCE
              </span>
            </div>
            <p className="text-base md:text-lg text-[#737373] leading-relaxed font-normal">
              VeritasCo.Tech is committed to protecting the privacy and security of schools, staff, parents, and
              visitors. This page summarizes the main ways we handle information across our website and services.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {sections.map((section, idx) => {
              const idxStr = (idx + 1).toString().padStart(2, "0")
              return (
                <article
                  key={section.title}
                  className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-3xl p-8 md:p-10 shadow-sm hover:border-[rgba(10,10,10,0.18)] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[rgba(10,10,10,0.06)]">
                    <span className="label-mono text-xs text-[#737373]">
                      SECTION {idxStr}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]" />
                    <h2 className="heading-style-h4 text-[#0a0a0a] tracking-tight">
                      {section.title}
                    </h2>
                  </div>

                  <ul className="space-y-3.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3.5 text-sm md:text-base text-[#737373] leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0a0a0a] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </section>
      </ScrollReveal>
    </PageWrapper>
  )
}
