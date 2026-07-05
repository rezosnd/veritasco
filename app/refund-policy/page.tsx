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
        <section className="container mx-auto px-4 md:px-6 py-6 md:py-12">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-10">
            <div className="flex flex-col gap-3 mb-8 border-b border-border pb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Last updated: May 2, 2026
              </p>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
                VeritasCo strives to provide complete transparency in billing. Because we provide robust trials and dedicated onboarding, our refund policies are strictly structured as outlined below.
              </p>
            </div>

            <div className="grid gap-5 md:gap-6">
               {sections.map((section) => (
                <article
                  key={section.title}
                  className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-5 md:p-7"
                >
                  <h2 className="text-lg md:text-xl font-bold text-foreground mb-3">
                    {section.title}
                  </h2>
                  <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </PageWrapper>
  )
}
