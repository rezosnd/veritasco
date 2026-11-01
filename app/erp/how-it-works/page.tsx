import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { HowItWorks } from "@/components/how-it-works"

export const metadata: Metadata = {
  title: "How It Works — Biometric Attendance in 5 Steps",
  description:
    "See exactly how VeritasCo.Tech biometric attendance works in 5 simple steps. Complete attendance for 50 students in under 3 minutes. No proxy, no errors.",
}

export default function HowItWorksPage() {
  return (
    <PageWrapper
      badge="Simple 5-Step Process"
      title="How Biometric Attendance Works"
      description="Fast, foolproof, and fraud-proof. VeritasCo.Tech's in-hand biometric devices mark attendance for an entire class in under 3 minutes — no manual registers, no proxy marking."
      breadcrumb={[{ label: "ERP Overview", href: "/erp" }, { label: "How It Works", href: "/erp/how-it-works" }]}
      bgImage="/hero-bg.png"
    >
      <HowItWorks />

      {/* Stats strip */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-3xl p-8 md:p-12">
          <div className="label-mono text-xs text-[#737373] mb-8">( Field Performance Metrics )</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "< 3 min", label: "For 50 Students" },
              { value: "99.9%", label: "Fingerprint Accuracy" },
              { value: "< 2 sec", label: "Per Scan Verification" },
              { value: "0", label: "Proxy Attendance" },
            ].map(({ value, label }) => (
              <div key={label} className="border-l border-[rgba(10,10,10,0.08)] pl-6">
                <div className="text-3xl md:text-4xl font-semibold text-[#0a0a0a] tracking-tight mb-2">
                  {value}
                </div>
                <div className="label-mono text-xs text-[#737373]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
