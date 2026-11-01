import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { InteractiveFAQ } from "@/components/interactive-faq"
import { VantraButton } from "@/components/vantra-button"

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Everything you need to know about VeritasCo.Tech — biometric attendance, pricing, setup time, data security, and school ERP features. Get answers instantly.",
}

export default function FAQPage() {
  return (
    <PageWrapper
      badge="FAQ · Instant Answers"
      title="Everything you need to know."
      description="From how handheld biometric attendance works to setup timelines, cloud security, and multi-campus synchronization."
      breadcrumb={[{ label: "FAQ", href: "/faq" }]}
      darkHero
    >
      {/* ══ FAQ SECTION (Vantra 2-Column Layout) ══ */}
      <section className="section-light padding-section">
        <div className="padding-global">
          <div className="container-max">
            <div className="faq_layout">
              {/* Left Column Sticky Header */}
              <div className="faq_head">
                <div className="label-mono mb-2">Knowledge Base</div>
                <h2 className="heading-style-h2 text-[#0a0a0a] mb-6">
                  Before
                  <br />
                  you brief us.
                </h2>
                <p className="text-sm md:text-base text-[#0a0a0a]/65 leading-relaxed mb-8">
                  Browse common queries below. If your question is not covered, our engineering team is available 24/7.
                </p>
                <VantraButton href="/contact" variant="dark">
                  Ask Directly
                </VantraButton>
              </div>

              {/* Right Column Accordion */}
              <div>
                <InteractiveFAQ />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STILL HAVE QUESTIONS CTA ══ */}
      <section className="section-dark padding-section text-center">
        <div className="padding-global">
          <div className="container-max max-w-2xl mx-auto">
            <div className="label-mono is-light mb-4">Direct Support Desk</div>
            <h2 className="heading-style-h1 text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-10">
              Our engineering team is available 24/7 to answer any technical, operational, or deployment questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <VantraButton href="tel:+918709442363" variant="light">
                Call Us (+91 87094 42363)
              </VantraButton>
              <VantraButton href="mailto:info@veritasco.tech" variant="ghost" className="text-white border-white/30">
                Email Us Directly
              </VantraButton>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
