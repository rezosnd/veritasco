"use client"

import { MainNav } from "@/components/main-nav"
import { AnimatedWaves } from "@/components/animated-waves"
import { SoftButton } from "@/components/soft-button"
import { HeroDevice } from "@/components/hero-device"
import { DetailedFeatures } from "@/components/detailed-features"
import { FeatureTable } from "@/components/feature-table"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StatsCounter } from "@/components/stats-counter"
import { ComparisonTable } from "@/components/comparison-table"
import { Timeline } from "@/components/timeline"
import { HowItWorks } from "@/components/how-it-works"
import { InteractiveFAQ } from "@/components/interactive-faq"
import Image from "next/image"
import { useState } from "react"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <main className="relative min-h-screen">
      {/* Desktop-only animated background */}
      <AnimatedWaves />

      {/* Navigation */}
      <MainNav
        onSupportOpen={() => setIsSupportOpen(true)}
        onBookingOpen={() => setIsBookingOpen(true)}
      />

      {/* ── Hero Section ── */}
      <section className="relative z-10 container mx-auto px-4 md:px-6 pt-8 md:pt-14 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-5 md:space-y-8 order-2 lg:order-1 relative z-20">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              India's First Complete School ERP{" "}
              <span className="text-primary">with Biometric Attendance</span>
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Transform your school's attendance, fees, academics, transport, hostel, and HR — all in one secure,
              cloud-based platform with in-hand biometric devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <SoftButton size="lg" className="w-full sm:w-auto" onClick={() => setIsBookingOpen(true)}>
                Book a Free Demo
              </SoftButton>
              <SoftButton
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  const el = document.querySelector("#features")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Explore Features
              </SoftButton>
            </div>
          </div>

          {/* Right: Device */}
          <div className="relative order-1 lg:order-2">
            <div className="soft-shadow bg-card rounded-xl md:rounded-3xl p-4 md:p-12 min-h-[260px] md:min-h-[520px] flex items-center justify-center">
              <HeroDevice />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="soft-shadow bg-gradient-to-br from-primary to-accent rounded-2xl md:rounded-3xl p-6 md:p-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 text-center text-primary-foreground">
              <div className="space-y-1 md:space-y-2">
                <StatsCounter end={500} suffix="+" className="text-2xl md:text-4xl lg:text-5xl" />
                <div className="text-xs md:text-lg opacity-90">Schools Trust Us</div>
              </div>
              <div className="space-y-1 md:space-y-2">
                <StatsCounter end={50000} suffix="+" className="text-2xl md:text-4xl lg:text-5xl" />
                <div className="text-xs md:text-lg opacity-90">Students Tracked</div>
              </div>
              <div className="space-y-1 md:space-y-2">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold">99.9%</div>
                <div className="text-xs md:text-lg opacity-90">Accuracy Rate</div>
              </div>
              <div className="space-y-1 md:space-y-2">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold">24/7</div>
                <div className="text-xs md:text-lg opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── About VeritasCo ── */}
      <ScrollReveal>
        <section id="about" className="relative z-10 container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">About VeritasCo.Tech</h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Leading the digital transformation in educational institutions across India
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-14 items-start mb-8 md:mb-10">
              <div className="space-y-4">
                <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    To revolutionize school administration by providing secure, efficient, and user-friendly biometric
                    attendance systems that save time, reduce errors, and enhance communication.
                  </p>
                </div>
                <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">Our Vision</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    To become the most trusted partner for educational institutions, empowering them with technology
                    that ensures student safety, operational excellence, and data-driven decision making.
                  </p>
                </div>
              </div>

              <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Hardware + Software integrated solution",
                    "99.9% fingerprint accuracy rate",
                    "Real-time parent notifications via SMS & App",
                    "Complete ERP with fee & academic management",
                    "24/7 dedicated customer support",
                    "Cloud-based with enterprise-grade security",
                  ].map((item, index) => (
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

            {/* Value pillars */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Security First", desc: "Bank-grade encryption" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Lightning Fast", desc: "Real-time sync < 5 sec" },
                { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", label: "User Friendly", desc: "Intuitive for all users" },
                { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", label: "24/7 Support", desc: "Always here for you" },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="soft-shadow-inset bg-background rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 soft-shadow">
                    <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                    </svg>
                  </div>
                  <h4 className="font-bold text-foreground mb-1 text-sm md:text-base">{label}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── ERP Features ── */}
      <DetailedFeatures />

      {/* ── How Attendance Works ── */}
      <HowItWorks />

      {/* ── Why Switch: Comparison ── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Why Switch to VeritasCo?</h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                See how we compare to traditional manual attendance systems
              </p>
            </div>
            <ComparisonTable />
          </div>
        </section>
      </ScrollReveal>

      {/* ── Role-Based Feature Table ── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Role-Based Feature Access</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive ERP features tailored for every user role in your institution
            </p>
          </div>
          <FeatureTable />
        </section>
      </ScrollReveal>

      {/* ── Implementation Timeline ── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Quick & Easy Implementation</h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Get your school up and running in just 6 days
              </p>
            </div>
            <Timeline />
          </div>
        </section>
      </ScrollReveal>

      {/* ── Testimonials ── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">What Schools Say About Us</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading educational institutions across India
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              { name: "Dr. Rajesh Kumar", role: "Principal, Delhi Public School", text: "VeritasCo has transformed our attendance management. The real-time parent notifications have significantly improved communication and student safety." },
              { name: "Mrs. Priya Sharma", role: "Administrator, St. Mary's Convent", text: "The integrated ERP system is a game-changer. We've reduced administrative work by 60% and parents love the instant updates." },
              { name: "Mr. Amit Patel", role: "Director, Modern Academy", text: "Exceptional support and reliable hardware. The biometric system has eliminated proxy attendance completely. Highly recommended!" },
            ].map((t, i) => (
              <div key={i} className="soft-shadow bg-card rounded-2xl p-6 md:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center soft-shadow">
                    <span className="text-primary-foreground font-bold text-sm">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm md:text-base">{t.name}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Trust Badges ── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Trusted & Certified</h2>
            <p className="text-base md:text-lg text-muted-foreground">Your data security is our top priority</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
            {[
              { name: "ISO 27001", desc: "Certified" },
              { name: "GDPR", desc: "Compliant" },
              { name: "256-bit SSL", desc: "Encryption" },
              { name: "99.9%", desc: "Uptime SLA" },
            ].map((b) => (
              <div key={b.name} className="soft-shadow bg-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
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

      {/* ── FAQ ── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about VeritasCo.Tech
              </p>
            </div>
            <InteractiveFAQ />
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA ── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="soft-shadow bg-gradient-to-br from-primary to-accent rounded-2xl md:rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 md:mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-base md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
              Join 500+ schools already using VeritasCo.Tech. Book a free demo and go live in just 6 days.
            </p>
            <SoftButton size="lg" onClick={() => setIsBookingOpen(true)} className="bg-background text-foreground hover:bg-background/90">
              Book Your Free Demo
            </SoftButton>
            <p className="text-xs md:text-sm text-primary-foreground/80 mt-4">
              No credit card required · Setup in 6 days · 24/7 support included
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Footer ── */}
      <footer className="relative z-10 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="grid md:grid-cols-4 gap-8 md:gap-10 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.avif" alt="VeritasCo.Tech Logo" width={40} height={40} loading="lazy" quality={90} sizes="40px" />
                <span className="text-lg font-bold text-foreground">VeritasCo.Tech</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Revolutionizing school management with biometric technology and cloud-based ERP solutions.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[["Features", "#features"], ["How It Works", "#"], ["Pricing", "#"], ["Integrations", "#"]].map(([label, href]) => (
                  <li key={label}><a href={href} className="hover:text-primary transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[["About Us", "/about"], ["Careers", "#"], ["Blog", "#"]].map(([label, href]) => (
                  <li key={label}><a href={href} className="hover:text-primary transition-colors">{label}</a></li>
                ))}
                <li><button onClick={() => setIsSupportOpen(true)} className="hover:text-primary transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => setIsSupportOpen(true)} className="hover:text-primary transition-colors">Contact Support</button></li>
                {[["Help Center", "#"], ["Documentation", "#"], ["System Status", "#"]].map(([label, href]) => (
                  <li key={label}><a href={href} className="hover:text-primary transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} VeritasCo.Tech. All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
                <a key={l} href="#" className="hover:text-primary transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Support Button */}
      <button
        onClick={() => setIsSupportOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center soft-shadow hover:scale-110 transition-transform active:scale-95"
        aria-label="Contact Support"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </main>
  )
}
