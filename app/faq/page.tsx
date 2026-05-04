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
      darkHero
    >
      {/* FAQ Component */}
      <section className="bg-[#eeeeee] pulla-section">
        <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
          <ScrollReveal>
            <InteractiveFAQ />
          </ScrollReveal>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="bg-[#141414] pulla-section text-center">
        <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-white mb-8">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/40 font-light max-w-xl mx-auto mb-12 leading-relaxed">
              Our team is available 24/7 to answer any questions about VeritasCo.Tech and how it fits your school.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918709442363"
                className="pulla-btn pulla-btn-outline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
              <a
                href="mailto:info@veritasco.tech"
                className="pulla-btn pulla-btn-primary"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  )
}
