import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Read the refund and cancellation policy for VeritasCo.Tech software subscriptions and hardware purchases.",
}

const sections = [
  {
    title: "1. Software Subscriptions",
    items: [
      "We offer a 7-day free trial on our core ERP and POS SaaS products. We highly encourage utilizing this trial to ensure the product meets your needs.",
      "Once a subscription is paid, fees are generally non-refundable unless stated otherwise in your specific contract SLA.",
      "Cancellations take effect at the end of the current billing cycle.",
    ],
  },
  {
    title: "2. Hardware Purchases (Biometrics & POS)",
    items: [
      "Hardware devices (such as fingerprint scanners and POS machines) are eligible for return within 14 days of delivery, provided they are in original condition and packaging.",
      "Refunds for hardware will be processed back to the original payment method within 5-7 business days after inspection.",
      "Shipping fees for hardware returns are borne by the customer unless the device arrived defective.",
    ],
  },
  {
    title: "3. Implementation & Setup Fees",
    items: [
      "One-time setup, migration, and implementation fees are non-refundable once the onboarding process has commenced.",
    ],
  },
  {
    title: "4. Requesting a Cancellation",
    items: [
      "To cancel your subscription or request a hardware return, please contact your dedicated account manager or email info@veritasco.tech.",
      "Please include your organization name, invoice number, and reason for cancellation.",
    ],
  },
]

export default function RefundPolicyPage() {
  return (
    <PageWrapper
      badge="VeritasCo — Legal"
      title="Refund Policy"
      description="Clear, transparent policies regarding subscriptions, hardware returns, and cancellations."
      breadcrumb={[{ label: "Refund Policy", href: "/refund-policy" }]}
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
                COMMERCIAL & REFUND TERMS
              </span>
            </div>
            <p className="text-base md:text-lg text-[#737373] leading-relaxed font-normal">
              VeritasCo strives to provide complete transparency in billing. Because we provide robust trials and dedicated onboarding, our refund policies are strictly structured as outlined below.
            </p>
          </div>

          {/* Refund Sections */}
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
