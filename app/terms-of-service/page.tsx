import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for using VeritasCo.Tech products, including our School ERP and Restaurant POS platforms.",
}

const sections = [
  {
    title: "1. Acceptance of Terms",
    items: [
      "By accessing or using the VeritasCo.Tech platform, you agree to be bound by these Terms of Service.",
      "If you are using the platform on behalf of an institution (like a school or restaurant), you represent that you have the authority to bind them to these terms.",
    ],
  },
  {
    title: "2. Service Provision & SLA",
    items: [
      "VeritasCo.Tech provides cloud-hosted software and integrated hardware (biometrics, POS terminals) on a subscription basis.",
      "We strive for 99.9% uptime, excluding scheduled maintenance windows which will be communicated in advance.",
      "Support is provided according to your specific SLA agreement.",
    ],
  },
  {
    title: "3. User Responsibilities",
    items: [
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You agree not to misuse the platform, reverse engineer the software, or attempt to bypass security measures.",
      "All data entered into the system must comply with local laws and regulations.",
    ],
  },
  {
    title: "4. Data Ownership",
    items: [
      "Your data remains yours. VeritasCo claims no ownership over the student, parent, or customer data you enter into our systems.",
      "We process data purely to provide you the service, as outlined in our Privacy Policy.",
    ],
  },
  {
    title: "5. Termination",
    items: [
      "Subscriptions can be terminated by either party with a 30-day written notice.",
      "Upon termination, we provide a grace period to export your data before it is securely deleted.",
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <PageWrapper
      badge="VeritasCo — Legal"
      title="Terms of Service"
      description="These terms govern your use of the VeritasCo.Tech platform, hardware, and services."
      breadcrumb={[{ label: "Terms of Service", href: "/terms-of-service" }]}
      bgImage="/hero-bg.png"
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
                CONTRACTUAL GOVERNANCE & SLA
              </span>
            </div>
            <p className="text-base md:text-lg text-[#737373] leading-relaxed font-normal">
              Please read these terms carefully before utilizing our SaaS products or biometric hardware. By using our services, you agree to comply with the rules outlined below.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-3xl p-8 md:p-10 shadow-sm hover:border-[rgba(10,10,10,0.18)] transition-colors"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[rgba(10,10,10,0.06)]">
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
            ))}
          </div>
        </section>
      </ScrollReveal>
    </PageWrapper>
  )
}
