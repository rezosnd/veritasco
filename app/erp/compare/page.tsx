import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { ComparisonTable } from "@/components/comparison-table"
import { Timeline } from "@/components/timeline"
import { VantraButton } from "@/components/vantra-button"
import { Clock, ShieldAlert, Zap, BarChart2, Lock, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Why Switch — VeritasCo vs Manual Attendance",
  description:
    "Compare VeritasCo.Tech against traditional manual attendance systems and discover how we go live in just 6 days. See the implementation timeline.",
}

const benefits = [
  {
    icon: Clock,
    title: "Save 15+ Hours / Week",
    desc: "Automated biometric attendance eliminates daily manual registers across every class and period.",
  },
  {
    icon: ShieldAlert,
    title: "Zero Proxy Marking",
    desc: "Biometric fingerprint matching makes impersonation physically impossible for students and staff.",
  },
  {
    icon: Zap,
    title: "Instant Parent Alerts",
    desc: "Parents get notified within seconds of attendance being marked — not hours later.",
  },
  {
    icon: BarChart2,
    title: "Automated Reports",
    desc: "Generate attendance, leave, and academic performance reports in one click — no compilation.",
  },
  {
    icon: Lock,
    title: "Cloud-Based & Secure",
    desc: "All records encrypted and backed up automatically — no risk of damaged or lost registers.",
  },
  {
    icon: ArrowUpRight,
    title: "6-Day Turnaround",
    desc: "From initial contract to full staff onboarding and active scanning in under 6 business days.",
  },
]

export default function ComparePage() {
  return (
    <PageWrapper
      badge="Comparative Analysis"
      title="Why schools switch to VeritasCo."
      description="Manual attendance registers are slow, inaccurate, and vulnerable to manipulation. See how our in-hand biometric platform outperforms legacy systems."
      breadcrumb={[{ label: "School ERP", href: "/erp" }, { label: "Why Switch", href: "/erp/compare" }]}
      darkHero
    >
      {/* ══ 1. COMPARISON TABLE ══ */}
      <section className="section-light padding-section">
        <div className="padding-global">
          <div className="container-max">
            <div className="section_header">
              <div>
                <h2 className="heading-style-h2 text-[#0a0a0a]">
                  Side-by-side
                  <br />
                  metrics.
                </h2>
              </div>
              <div className="section_meta">
                <div className="section_meta-text">( Head-to-Head )</div>
                <div className="section_meta-text">Real operational efficiency gains</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-10 border border-black/10 shadow-sm">
              <ComparisonTable />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. BENEFITS GRID ══ */}
      <section className="section-dark padding-section">
        <div className="padding-global">
          <div className="container-max">
            <div className="section_header">
              <div>
                <h2 className="heading-style-h2 text-white">
                  Tangible
                  <br />
                  advantages.
                </h2>
              </div>
              <div className="section_meta">
                <div className="section_meta-text">( Core Returns )</div>
                <div className="section_meta-text">Immediate administrative ROI</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                      <b.icon className="w-5 h-5 text-white/70" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white mb-2">
                      {b.title}
                    </h3>
                    <p className="text-sm text-[#f5f4f0]/65 leading-relaxed font-normal">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. TIMELINE ══ */}
      <section className="section-light padding-section">
        <div className="padding-global">
          <div className="container-max">
            <div className="section_header">
              <div>
                <h2 className="heading-style-h2 text-[#0a0a0a]">
                  Deployment
                  <br />
                  in 6 days.
                </h2>
              </div>
              <div className="section_meta">
                <div className="section_meta-text">( Zero Hassle )</div>
                <div className="section_meta-text">Step-by-step rollout schedule</div>
              </div>
            </div>

            <Timeline />
          </div>
        </div>
      </section>

      {/* ══ 4. CTA ══ */}
      <section className="section-dark padding-section text-center">
        <div className="padding-global">
          <div className="container-max max-w-2xl mx-auto">
            <div className="label-mono is-light mb-4">Risk-Free Campus Trial</div>
            <h2 className="heading-style-h1 text-white mb-6">
              Experience the difference live.
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-10">
              Try VeritasCo biometric attendance on your campus for 30 days with no credit card and zero commitment.
            </p>
            <div className="flex justify-center">
              <VantraButton href="/contact" variant="light">
                Request Free Pilot
              </VantraButton>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
