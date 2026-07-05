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
        <section className="container mx-auto px-4 md:px-6 py-6 md:py-12">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-10">
            <div className="flex flex-col gap-3 mb-8 border-b border-border pb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Last updated: May 2, 2026
              </p>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
                Please read these terms carefully before utilizing our SaaS products or biometric hardware. By using our services, you agree to comply with the rules outlined below.
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
