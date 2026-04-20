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
      breadcrumb={[{ label: "How It Works", href: "/how-it-works" }]}
    >
      <HowItWorks />

      {/* Stats strip */}
      <section className="container mx-auto px-4 md:px-6 pb-10 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "< 3 min", label: "For 50 Students" },
            { value: "99.9%", label: "Fingerprint Accuracy" },
            { value: "< 2 sec", label: "Per Scan Verification" },
            { value: "0", label: "Proxy Attendance" },
          ].map(({ value, label }) => (
            <div key={label} className="soft-shadow bg-card rounded-2xl p-5 text-center border border-border/30">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
