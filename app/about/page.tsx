import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "About Us — India's First Biometric School ERP",
  description:
    "Learn about VeritasCo.Tech — our mission, vision, and why 500+ schools trust us for biometric attendance and complete school ERP management.",
}

const valuePillars = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    label: "Security First",
    desc: "Bank-grade 256-bit SSL encryption on every record and transaction.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    label: "Lightning Fast",
    desc: "Real-time attendance sync in under 5 seconds across all devices.",
  },
  {
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    label: "User Friendly",
    desc: "Designed for administrators, teachers, parents, and students alike.",
  },
  {
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    label: "24/7 Support",
    desc: "Dedicated customer success team round the clock, every day of the year.",
  },
]

const trustBadges = [
  { name: "ISO 27001", desc: "Certified" },
  { name: "GDPR", desc: "Compliant" },
  { name: "256-bit SSL", desc: "Encryption" },
  { name: "99.9%", desc: "Uptime SLA" },
]

const whyUs = [
  "Hardware + Software integrated solution",
  "99.9% fingerprint accuracy rate",
  "Real-time parent notifications via SMS & App",
  "Complete ERP with fee & academic management",
  "24/7 dedicated customer support",
  "Cloud-based with enterprise-grade security",
]

export default function AboutPage() {
  return (
    <PageWrapper
      badge="Who We Are"
      title="About VeritasCo.Tech"
      description="India's first complete School ERP with in-hand biometric attendance devices — built to empower every educational institution with secure, smart, and seamless school management."
      breadcrumb={[{ label: "About", href: "/about" }]}
    >
      {/* Mission & Vision */}
      <ScrollReveal>
        <section className="container mx-auto px-4 md:px-6 py-6 md:py-12">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start mb-8 md:mb-12">
              <div className="space-y-4">
                <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-5 md:p-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 border border-primary/10">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3">Our Mission</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    To revolutionize school administration by providing secure, efficient, and user-friendly biometric
                    attendance systems that save time, reduce errors, and enhance communication between schools and families.
                  </p>
                </div>
                <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-5 md:p-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 border border-primary/10">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-3">Our Vision</h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    To become the most trusted partner for educational institutions across India, empowering them with
                    technology that ensures student safety, operational excellence, and data-driven decision making.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-5 md:p-8">
                <h2 className="text-xl font-bold text-foreground mb-5">Why Choose Us?</h2>
                <ul className="space-y-4">
                  {whyUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Value Pillars */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {valuePillars.map(({ icon, label, desc }) => (
                <div key={label} className="soft-shadow-inset bg-background rounded-xl p-5 text-center card-hover-effect">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 soft-shadow">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-foreground mb-1 text-sm md:text-base">{label}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Trust Badges */}
      <ScrollReveal>
        <section className="container mx-auto px-4 md:px-6 pb-10 md:pb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">Certified</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Trusted & Certified</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your data security is our top priority
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
            {trustBadges.map((b) => (
              <div key={b.name} className="soft-shadow bg-card rounded-xl md:rounded-2xl p-5 md:p-8 text-center card-hover-effect border border-border/30">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 soft-shadow">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="font-bold text-foreground text-sm md:text-base">{b.name}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{b.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </PageWrapper>
  )
}
