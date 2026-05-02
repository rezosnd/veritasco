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
      badge="Legal"
      title="Privacy Policy"
      description="This policy explains how VeritasCo.Tech handles personal data when you visit our website, request a demo, or use our school ERP services."
      breadcrumb={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
    >
      <ScrollReveal>
        <section className="container mx-auto px-4 md:px-6 py-6 md:py-12">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-10">
            <div className="flex flex-col gap-3 mb-8 border-b border-border pb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Last updated: May 2, 2026
              </p>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
                VeritasCo.Tech is committed to protecting the privacy and security of schools, staff, parents, and
                visitors. This page summarizes the main ways we handle information across our website and services.
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
