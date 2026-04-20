import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { InteractiveFAQ } from "@/components/interactive-faq"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Everything you need to know about VeritasCo.Tech — biometric attendance, pricing, setup time, data security, and school ERP features. Get answers instantly.",
}

export default function FAQPage() {
  return (
    <PageWrapper
      badge="Common Questions"
      title="Frequently Asked Questions"
      description="Everything you need to know about VeritasCo.Tech — from how biometric attendance works to pricing, data security, and implementation timelines."
      breadcrumb={[{ label: "FAQ", href: "/faq" }]}
    >
      {/* FAQ Component */}
      <ScrollReveal>
        <section className="container mx-auto px-4 md:px-6 py-6 md:py-10">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <InteractiveFAQ />
          </div>
        </section>
      </ScrollReveal>

      {/* Still have questions CTA */}
      <ScrollReveal>
        <section className="container mx-auto px-4 md:px-6 pb-10 md:pb-16">
          <div className="soft-shadow bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Still Have Questions?</h2>
            <p className="text-base md:text-lg text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Our team is available 24/7 to answer any questions about VeritasCo.Tech and how it fits your school.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+918709442363"
                className="inline-flex items-center justify-center gap-2 bg-background/20 hover:bg-background/30 border border-primary-foreground/20 text-primary-foreground font-semibold rounded-xl px-6 py-3 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
              <a
                href="mailto:info@veritasco.tech"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground hover:bg-background/90 font-semibold rounded-xl px-6 py-3 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </PageWrapper>
  )
}
