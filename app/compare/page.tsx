import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { ComparisonTable } from "@/components/comparison-table"
import { Timeline } from "@/components/timeline"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Why Switch — VeritasCo vs Manual Attendance",
  description:
    "Compare VeritasCo.Tech against traditional manual attendance systems and discover how we go live in just 6 days. See the implementation timeline.",
}

export default function ComparePage() {
  return (
    <PageWrapper
      badge="Make the Switch"
      title="Why Schools Switch to VeritasCo.Tech"
      description="Manual attendance registers are slow, inaccurate, and vulnerable. See exactly how VeritasCo.Tech outperforms legacy systems — and how we get you up and running in just 6 days."
      breadcrumb={[{ label: "Compare", href: "/compare" }]}
    >
      {/* Comparison Table */}
      <ScrollReveal>
        <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-4">
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">Head to Head</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">VeritasCo vs Manual Attendance</h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
                A side-by-side look at what you gain by switching to biometric ERP
              </p>
            </div>
            <ComparisonTable />
          </div>
        </section>
      </ScrollReveal>

      {/* Benefits Grid */}
      <ScrollReveal>
        <section className="container mx-auto px-4 md:px-6 pb-10 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Save 15+ Hours/Week",
                desc: "Automated attendance eliminates daily manual registers across every class and period.",
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Zero Proxy Marking",
                desc: "Biometric fingerprint matching makes impersonation physically impossible.",
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Instant Parent Alerts",
                desc: "Parents get notified within seconds of attendance being marked — not hours later.",
              },
              {
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "Automated Reports",
                desc: "Generate attendance, leave, and academic reports in one click — no manual compilation.",
              },
              {
                icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
                title: "Cloud-Based & Secure",
                desc: "All data encrypted and backed up automatically — no risk of lost registers.",
              },
              {
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
                title: "24/7 Expert Support",
                desc: "Our dedicated team is always available — no ticket queue, direct resolution.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="soft-shadow bg-card rounded-2xl p-6 border border-border/30 card-hover-effect">
                <div className="w-11 h-11 bg-gradient-to-br from-primary/15 to-accent/15 rounded-xl flex items-center justify-center mb-4 border border-primary/10">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Implementation Timeline */}
      <ScrollReveal>
        <section id="timeline" className="container mx-auto px-4 md:px-6 pb-10 md:pb-16">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-4">
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">Quick Setup</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Go Live in Just 6 Days</h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Our streamlined onboarding gets your school up and running faster than you'd expect
              </p>
            </div>
            <Timeline />
          </div>
        </section>
      </ScrollReveal>
    </PageWrapper>
  )
}
