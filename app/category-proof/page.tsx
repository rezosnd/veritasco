import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { ArrowUpRight, ShieldCheck, Cpu, Cloud, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Category Proof — VeritasCo.Tech",
  description: "VeritasCo is establishing the category of portable biometric attendance systems for schools.",
}

export default function CategoryProofPage() {
  return (
    <PageWrapper
      badge="Category Proof &amp; Innovation"
      title="Establishing a new standard in educational technology."
      description="VeritasCo is pioneering portable biometric attendance systems for schools, eliminating the bottlenecks and fragility of fixed wall-mounted hardware."
      breadcrumb={[{ label: "Category Proof", href: "/category-proof" }]}
      darkHero
    >
      {/* ══ 1. COMPARISON HEAD-TO-HEAD ══ */}
      <section className="section-light padding-section">
        <div className="padding-global">
          <div className="container-max">
            <div className="section_header">
              <div>
                <h2 className="heading-style-h2 text-[#0a0a0a]">
                  Category
                  <br />
                  differentiation.
                </h2>
              </div>
              <div className="section_meta">
                <div className="section_meta-text">( Portable Architecture )</div>
                <div className="section_meta-text">Fixed hardware vs in-hand mobility</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Traditional */}
              <div className="p-8 md:p-12 rounded-2xl bg-white border border-black/10">
                <div className="label-mono text-[10px] text-red-500 mb-4">( Legacy Approach )</div>
                <h3 className="heading-style-h3 text-[#0a0a0a] mb-4">
                  Limitations of Traditional Solutions
                </h3>
                <p className="text-sm md:text-base text-[#0a0a0a]/70 leading-relaxed font-normal">
                  Traditional fixed-device solutions require complex wiring, lack flexibility, and often cause bottlenecks when students queue up. They struggle with connectivity drops and fail to adapt to dynamic school environments.
                </p>
              </div>

              {/* VeritasCo */}
              <div className="p-8 md:p-12 rounded-2xl bg-[#0a0a0a] text-white border border-white/10">
                <div className="label-mono is-light text-[10px] text-emerald-400 mb-4">( VeritasCo Category )</div>
                <h3 className="heading-style-h3 text-white mb-4">
                  Our Portable &amp; Flexible Approach
                </h3>
                <p className="text-sm md:text-base text-[#f5f4f0]/75 leading-relaxed font-normal">
                  We bring attendance directly to the classroom with a handheld, portable approach. Supported by real-time cloud sync and seamless offline capability, we eliminate hardware constraints completely.
                </p>
              </div>
            </div>

            {/* Growth Strategy */}
            <div className="p-8 md:p-12 rounded-3xl bg-white border border-black/10 text-center max-w-4xl mx-auto">
              <div className="label-mono text-[10px] mb-3">( Direct Outreach )</div>
              <h3 className="heading-style-h3 text-[#0a0a0a] mb-4">
                Current Stage &amp; Growth Strategy
              </h3>
              <p className="text-sm md:text-base text-[#0a0a0a]/70 leading-relaxed max-w-2xl mx-auto">
                Currently, VeritasCo is in its early stage and has not yet been widely featured in media or search platforms; however, we are actively engaging schools through demos, pilot programs, and direct outreach. We are building early awareness and preparing for upcoming launches and partnerships to strengthen visibility in this category.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. SUPPORTING EVIDENCE ══ */}
      <section className="section-dark padding-section">
        <div className="padding-global">
          <div className="container-max max-w-3xl mx-auto">
            <div className="section_header is-center text-center">
              <div className="label-mono is-light mb-2">Documentation</div>
              <h2 className="heading-style-h2 text-white">
                Supporting Evidence.
              </h2>
            </div>

            <div className="space-y-4">
              <a
                href="#"
                className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/25 flex items-center justify-between text-white transition-all group"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1 group-hover:text-white/80">
                    Media, Search &amp; Community Association
                  </h3>
                  <p className="text-xs md:text-sm text-white/50 font-mono">
                    View brand association evidence in this category.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href="#"
                className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/25 flex items-center justify-between text-white transition-all group"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1 group-hover:text-white/80">
                    Press Mentions, SEO Rank &amp; Social Proof
                  </h3>
                  <p className="text-xs md:text-sm text-white/50 font-mono">
                    View supporting documents, pilot feedback, and social evidence.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
