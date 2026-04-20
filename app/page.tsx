"use client"

import { MainNav } from "@/components/main-nav"
import { AnimatedWaves } from "@/components/animated-waves"
import { SoftButton } from "@/components/soft-button"
import { HeroDevice } from "@/components/hero-device"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StatsCounter } from "@/components/stats-counter"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import { ArrowRight, GraduationCap, Smartphone, BookOpen, Bus, Home as HomeIcon, Users, BarChart3, ShieldCheck, Fingerprint, GitCompare, Star, HelpCircle } from "lucide-react"

// Concise feature highlight cards for the homepage teaser
const featureCards = [
  { icon: GraduationCap, title: "Admissions & Fees", desc: "Streamlined admissions, fee collection, and due tracking.", href: "/features" },
  { icon: Smartphone, title: "Student App", desc: "Digital diary, homework, LMS access, and ID card.", href: "/features" },
  { icon: BookOpen, title: "Academic & LMS", desc: "Subjects, quizzes, study material, and progress tracking.", href: "/features" },
  { icon: Bus, title: "Transport", desc: "Route planning, driver info, and real-time monitoring.", href: "/features" },
  { icon: HomeIcon, title: "Hostel", desc: "Room allocation, occupant management, and attendance.", href: "/features" },
  { icon: Users, title: "Staff & Payroll", desc: "HR records, leave, salary, and payroll automation.", href: "/features" },
  { icon: BarChart3, title: "Analytics", desc: "Instant reports for fee, attendance, and performance.", href: "/features" },
  { icon: ShieldCheck, title: "Cloud Security", desc: "Enterprise-grade encrypted, always-on cloud platform.", href: "/features" },
]

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <main className="relative min-h-svh">
      <AnimatedWaves />

      <MainNav
        onSupportOpen={() => setIsSupportOpen(true)}
        onBookingOpen={() => setIsBookingOpen(true)}
      />

      {/* ────────────────────────────────────────
          HERO SECTION — full viewport
      ──────────────────────────────────────── */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 md:pt-16 pb-6 min-h-[calc(100svh-56px)] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Left: Copy */}
          <div className="space-y-5 md:space-y-7 order-2 lg:order-1 relative z-20">
            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs md:text-sm font-semibold text-primary tracking-wide">
                India&apos;s #1 School ERP Platform
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              India&apos;s First Complete School ERP{" "}
              <span className="text-primary">with Biometric Attendance</span>
            </h1>

            <p className="text-sm md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
              Transform your school's attendance, fees, academics, transport, hostel, and HR — all in
              one secure, cloud-based platform with in-hand biometric devices.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <SoftButton size="lg" className="w-full sm:w-auto" onClick={() => setIsBookingOpen(true)}>
                Book a Free Demo
              </SoftButton>
              <Link href="/features">
                <SoftButton variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore Features
                </SoftButton>
              </Link>
            </div>

            {/* Trust signals */}
            {/* <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
              {["500+ Schools", "50,000+ Students", "99.9% Accuracy", "Setup in 6 Days"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div> */}
          </div>

          {/* Right: Device */}
          <div className="relative order-1 lg:order-2">
            <div className="relative soft-shadow bg-gradient-to-br from-card via-card to-primary/5 rounded-xl md:rounded-3xl p-4 md:p-12 min-h-[240px] md:min-h-[520px] flex items-center justify-center border border-primary/10 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-48 h-48 md:w-72 md:h-72 rounded-full border border-primary/10 animate-pulse" />
              </div>
              <HeroDevice />
              {/* Biometric card — visible on all screens */}
              <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 z-20">
                <div className="relative overflow-hidden flex items-center justify-between gap-2 md:gap-3 bg-card/85 backdrop-blur-md border border-primary/15 rounded-xl px-3 md:px-4 py-2.5 md:py-3 shadow-xl shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
                  <div className="relative flex items-center gap-2 md:gap-2.5">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] md:text-xs font-bold text-foreground leading-none">Biometric Attendance</p>
                      <p className="text-[9px] md:text-[10px] text-muted-foreground mt-0.5">School entry · exit · real-time sync</p>
                    </div>
                  </div>
                  <div className="relative flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-2 md:px-2.5 py-1 shrink-0">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                    </span>
                    <span className="text-[9px] md:text-[10px] font-bold text-primary tracking-wide uppercase whitespace-nowrap">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint arrow */}
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="flex flex-col items-center gap-1 text-muted-foreground/50 animate-bounce">
            <span className="text-[10px] tracking-widest uppercase font-medium">Scroll to explore</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────
          STATS BAR
      ──────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-14">
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

      {/* ────────────────────────────────────────
          FEATURE TEASER GRID (preview only)
      ──────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-14">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">11 Modules</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              Everything Your School Needs
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              One unified platform to manage every aspect of school operations — from admission to analytics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-8">
            {featureCards.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="soft-shadow bg-card rounded-2xl p-4 md:p-6 text-center card-hover-effect border border-border/30 hover:border-primary/20 group block"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-primary/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-xs md:text-sm mb-1 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-[11px] md:text-xs text-muted-foreground leading-snug">{desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/features">
              <SoftButton variant="secondary" className="gap-2">
                Explore All 11 Modules
                <ArrowRight className="w-4 h-4" />
              </SoftButton>
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* ────────────────────────────────────────
          QUICK LINKS ROW (desktop page shortcuts)
      ──────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "How It Works", desc: "See the 5-step biometric process", href: "/how-it-works", icon: Fingerprint },
              { label: "Why Switch", desc: "VeritasCo vs manual attendance", href: "/compare", icon: GitCompare },
              { label: "Testimonials", desc: "500+ schools share their stories", href: "/testimonials", icon: Star },
              { label: "FAQ", desc: "Get instant answers to your questions", href: "/faq", icon: HelpCircle },
            ].map(({ label, desc, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="soft-shadow bg-card rounded-2xl p-5 md:p-6 border border-border/30 hover:border-primary/20 card-hover-effect group block"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-3 border border-primary/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm md:text-base mb-1 group-hover:text-primary transition-colors flex items-center gap-1">
                  {label}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-snug">{desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ────────────────────────────────────────
          CTA BANNER
      ──────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-14">
          <div className="soft-shadow bg-gradient-to-br from-primary to-accent rounded-2xl md:rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4 md:mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-base md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
              Join 500+ schools already using VeritasCo. Book a free demo and go live in just 6 days.
            </p>
            <SoftButton
              size="lg"
              onClick={() => setIsBookingOpen(true)}
              className="bg-background text-foreground hover:bg-background/90"
            >
              Book Your Free Demo
            </SoftButton>
            <p className="text-xs md:text-sm text-primary-foreground/80 mt-4">
              No credit card required · Setup in 6 days · 24/7 support included
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ────────────────────────────────────────
          FOOTER
      ──────────────────────────────────────── */}
      <footer className="relative z-10 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <Image src="/logo.avif" alt="VeritasCo Logo" width={36} height={36} loading="lazy" quality={85} sizes="36px" />
                <span className="text-base font-bold text-foreground">VeritasCo</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                Revolutionizing school management with biometric technology and cloud-based ERP solutions.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[["Features", "/features"], ["How It Works", "/how-it-works"], ["Why Switch", "/compare"], ["Role Access", "/features#role-access"]].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-primary transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
                <li><button onClick={() => setIsSupportOpen(true)} className="hover:text-primary transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => setIsSupportOpen(true)} className="hover:text-primary transition-colors">Contact Support</button></li>
                <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                {[["Help Center", "#"], ["System Status", "#"]].map(([label, href]) => (
                  <li key={label}><a href={href} className="hover:text-primary transition-colors">{label}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VeritasCo. All rights reserved.
            </div>
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
