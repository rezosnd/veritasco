"use client"

import { MainNav } from "@/components/main-nav"
import { TransitionLink } from "@/components/transition-link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PullaPreloader } from "@/components/pulla-preloader"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import { SiteFooter } from "@/components/site-footer"
import { GraduationCap, Utensils, ArrowRight, ArrowDown, Zap, ShieldCheck, LifeBuoy, ShoppingCart, Landmark } from "lucide-react"

/* ── Scroll reveal for lines using pulla's exact .focus--mask approach ── */
function useRevealLines(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const lines = el.querySelectorAll<HTMLElement>(".pulla-reveal-line")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lines.forEach((line, i) =>
            setTimeout(() => line.classList.add("visible"), i * 130)
          )
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  const platformRef = useRef<HTMLElement>(null)
  const visionRef = useRef<HTMLElement>(null)
  useRevealLines(platformRef)
  useRevealLines(visionRef)

  return (
    <>
      <PullaPreloader pageName="Home" />
      <main className="relative min-h-svh overflow-x-hidden">
        <MainNav
          onSupportOpen={() => setIsSupportOpen(true)}
          onBookingOpen={() => setIsBookingOpen(true)}
        />

        {/* ══ HERO — steel-blue + 3D glass cube ══ */}
        <section className="relative min-h-screen section-hero flex flex-col overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image src="/hero-bg.png" alt="" fill priority className="object-cover animate-hero-bg scale-105" quality={95} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/80 via-[#141414]/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#141414]/90 pointer-events-none" />

            {/* Dynamic Glass Orbs */}
            <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] bg-[#9bd4d7]/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-[#3d4d6a]/20 rounded-full blur-[80px] animate-blob animation-delay-2000" />
          </div>

          <div className="relative z-10 flex flex-col justify-end flex-1 px-8 md:px-14 pb-16 md:pb-20 pt-32 pointer-events-none">
            {/* Badge */}
            <div className="focus--mask mb-6 pointer-events-auto">
              <span
                className="focus--mask-inner inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5"
                style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/65 animate-pulse" />
                VeritasCo Ecosystem
              </span>
            </div>

            {/* Giant serif hero heading — Staggered Letter Reveal */}
            <h1 className="pulla-hero-title text-white mb-8">
              <span className="focus--mask flex overflow-hidden">
                {"VeritasCo".split("").map((char, i) => (
                  <span key={`v-${i}`} className="focus--mask-inner animate-pulla-reveal" style={{ animationDelay: `${2400 + i * 80}ms`, animationDuration: "1.6s", display: "inline-block" }}>
                    {char}
                  </span>
                ))}
              </span>
            </h1>

            {/* Bottom row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 border-t border-white/15 pointer-events-auto">
              <div className="focus--mask">
                <p
                  className="focus--mask-inner max-w-md text-base md:text-lg font-light leading-relaxed animate-pulla-reveal"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)", animationDelay: "2900ms" }}
                >
                  From schools to restaurants — manage everything with powerful,
                  scalable, cloud-based systems built for the modern age.
                </p>
              </div>
              <div className="focus--mask flex items-center gap-4">
                <a
                  href="#platform"
                  className="pulla-btn pulla-btn-primary animate-pulla-reveal inline-flex items-center gap-2"
                  style={{ animationDelay: "3000ms" }}
                >
                  Explore Products <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="pulla-btn pulla-btn-outline-white animate-pulla-reveal"
                  style={{ animationDelay: "3100ms" }}
                >
                  Book Demo
                </button>
              </div>
            </div>
          </div>

          {/* Pulla-style scroll indicator — moved to right */}
          <div className="pulla-scroll-indicator">
            <div className="pulla-scroll-line" />
            <div className="pulla-scroll-circle" onClick={() => {
              const el = document.getElementById("platform")
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 100
                window.scrollTo({ top: y, behavior: "smooth" })
              }
            }}>
              <ArrowDown className="w-4 h-4 text-white/70" />
            </div>
          </div>
        </section>

        {/* ══ PRODUCTS — glassmorphism upgrade ══ */}
        <section id="products" className="section-light pulla-section" style={{ overflow: "hidden", position: "relative" }}>
          {/* Blurred color blobs behind cards — pulla premium feel */}
          <div aria-hidden style={{ position: "absolute", top: "10%", left: "-5%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(93,109,142,0.08) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
          <div aria-hidden style={{ position: "absolute", bottom: "10%", right: "-5%", width: "35vw", height: "35vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(45,58,82,0.07) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

          <div className="container mx-auto px-8 md:px-14 max-w-[1400px]" style={{ position: "relative", zIndex: 1 }}>
            <ScrollReveal animation="reveal-text">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
                <h2 className="pulla-section-title" style={{ color: "#212529" }}>
                  <span className="focus--mask block">
                    <span className="focus--mask-inner">Choose Your</span>
                  </span>
                  <span className="focus--mask block">
                    <span className="focus--mask-inner">Solution</span>
                  </span>
                </h2>
                <div className="focus--mask">
                  <p className="focus--mask-inner" style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(33,37,41,0.55)", maxWidth: "280px", lineHeight: "1.7", fontWeight: 300 }}>
                    Select the product built specifically for your industry.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* ERP Card — glassmorphism light */}
              <ScrollReveal animation="slide-left">
                <TransitionLink href="/erp" className="group block h-full">
                  <div
                    className="relative overflow-hidden"
                    style={{
                      borderRadius: "24px",
                      minHeight: "500px",
                      background: "rgba(255,255,255,0.55)",
                      backdropFilter: "blur(32px)",
                      WebkitBackdropFilter: "blur(32px)",
                      border: "1px solid rgba(255,255,255,0.85)",
                      boxShadow: "0 8px 48px rgba(93,109,142,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
                      padding: "44px 44px",
                      transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-8px)"
                      e.currentTarget.style.boxShadow = "0 24px 72px rgba(93,109,142,0.18), inset 0 1px 0 rgba(255,255,255,0.9)"
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow = "0 8px 48px rgba(93,109,142,0.1), inset 0 1px 0 rgba(255,255,255,0.9)"
                    }}
                  >
                    {/* Shimmer accent top-right */}
                    <div aria-hidden style={{ position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(93,109,142,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
                    <div>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", color: "rgba(33,37,41,0.3)", textTransform: "uppercase", display: "block", marginBottom: "36px" }}>01 — Education</span>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,56px)", fontWeight: 500, color: "#212529", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "18px" }}>School ERP</h3>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(33,37,41,0.55)", lineHeight: "1.78", fontWeight: 300, maxWidth: "360px", marginBottom: "32px" }}>Smart school management with in-hand biometric attendance — fees, LMS, transport &amp; more.</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                        {["Biometric attendance", "Student & fee management", "LMS & analytics", "GPS transport tracking"].map(t => (
                          <li key={t} style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(33,37,41,0.5)", display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(93,109,142,0.4)", display: "block", flexShrink: 0 }} />{t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "28px", borderTop: "1px solid rgba(33,37,41,0.07)", marginTop: "32px" }}>
                      <div className="pulla-arrow-link">
                        <span>Explore ERP</span>
                        <span className="arrow-icon">→</span>
                      </div>
                    </div>
                  </div>
                </TransitionLink>
              </ScrollReveal>

              {/* POS Card — glassmorphism dark */}
              <ScrollReveal animation="slide-right" delay={120}>
                <TransitionLink href="/pos" className="group block h-full">
                  <div
                    className="relative overflow-hidden"
                    style={{
                      borderRadius: "24px",
                      minHeight: "500px",
                      background: "rgba(45,58,82,0.88)",
                      backdropFilter: "blur(32px)",
                      WebkitBackdropFilter: "blur(32px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 8px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
                      padding: "44px 44px",
                      transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-8px)"
                      e.currentTarget.style.boxShadow = "0 32px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)"
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow = "0 8px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)"
                    }}
                  >
                    {/* Shimmer accent top-right */}
                    <div aria-hidden style={{ position: "absolute", top: "-50px", right: "-50px", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, rgba(155,212,215,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
                    <div aria-hidden style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, rgba(93,109,142,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", display: "block", marginBottom: "36px" }}>02 — Food &amp; Hospitality</span>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,56px)", fontWeight: 500, color: "#ffffff", lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: "18px" }}>Restaurant POS</h3>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: "1.78", fontWeight: 300, maxWidth: "360px", marginBottom: "32px" }}>QR-based ordering — customers scan, order, and pay without waiting for a waiter.</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                        {["QR ordering system", "Real-time kitchen display", "Auto billing & UPI", "Table management"].map(t => (
                          <li key={t} style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "block", flexShrink: 0 }} />{t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "32px", position: "relative", zIndex: 1 }}>
                      <div className="pulla-arrow-link pulla-arrow-link-white">
                        <span>Explore POS</span>
                        <span className="arrow-icon">→</span>
                      </div>
                    </div>
                  </div>
                </TransitionLink>
              </ScrollReveal>

              {/* BazarChowk Card — glassmorphism green */}
              <ScrollReveal animation="slide-left" delay={240}>
                <a href="https://bazarchowk.com/" target="_blank" rel="noopener noreferrer" className="group block h-full">
                  <div
                    className="relative overflow-hidden"
                    style={{
                      borderRadius: "24px",
                      minHeight: "500px",
                      background: "rgba(66,50,38,0.9)",
                      backdropFilter: "blur(32px)",
                      WebkitBackdropFilter: "blur(32px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 8px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
                      padding: "44px 44px",
                      transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-8px)"
                      e.currentTarget.style.boxShadow = "0 32px 80px rgba(255,100,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)"
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow = "0 8px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)"
                    }}
                  >
                    {/* Shimmer accent top-right */}
                    <div aria-hidden style={{ position: "absolute", top: "-50px", right: "-50px", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,100,0,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
                    <div aria-hidden style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,160,0,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", display: "block", marginBottom: "36px" }}>03 — Local Commerce</span>
                      <div style={{ marginBottom: "22px" }}>
                        <img src="https://bazarchowk.com/logo.png" alt="BazarChowk Logo" style={{ height: "clamp(60px, 8vw, 100px)", objectFit: "contain" }} />
                      </div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: "1.78", fontWeight: 300, maxWidth: "360px", marginBottom: "32px" }}>India's Local Commerce Super App. Groceries, food, and local essentials delivered fast.</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                        {["10-Min Delivery", "Verified Local Services", "Local Language Support", "Instant Discounts & Deals"].map(t => (
                          <li key={t} style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,100,0,0.7)", display: "block", flexShrink: 0 }} />{t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "32px", position: "relative", zIndex: 1 }}>
                      <div className="pulla-arrow-link pulla-arrow-link-white">
                        <span>Visit BazarChowk</span>
                        <span className="arrow-icon">→</span>
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollReveal>

              {/* Nidhi Card — glassmorphism premium blue */}
              <ScrollReveal animation="slide-right" delay={360}>
                <TransitionLink href="/nidhi" className="group block h-full">
                  <div
                    className="relative overflow-hidden"
                    style={{
                      borderRadius: "24px",
                      minHeight: "500px",
                      background: "rgba(33,43,59,0.88)",
                      backdropFilter: "blur(32px)",
                      WebkitBackdropFilter: "blur(32px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 8px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
                      padding: "44px 44px",
                      transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-8px)"
                      e.currentTarget.style.boxShadow = "0 32px 80px rgba(100,149,237,0.15), inset 0 1px 0 rgba(255,255,255,0.1)"
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow = "0 8px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)"
                    }}
                  >
                    {/* Shimmer accent top-right */}
                    <div aria-hidden style={{ position: "absolute", top: "-50px", right: "-50px", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, rgba(100,149,237,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
                    <div aria-hidden style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", display: "block", marginBottom: "36px" }}>04 — Finance & Banking</span>
                      <div style={{ marginBottom: "22px", display: "flex", alignItems: "center", gap: "12px" }}>
                        <img src="/logo.avif" alt="VeritasCo Logo" style={{ height: "32px", width: "32px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,3vw,44px)", fontWeight: 500, color: "#ffffff", lineHeight: 1.0, letterSpacing: "-0.02em", margin: 0 }}>Nidhi</h3>
                      </div>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: "1.78", fontWeight: 300, maxWidth: "360px", marginBottom: "32px" }}>Purely as per Government Act. Manage members, deposits, and loans seamlessly.</p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                        {["IMPS, NEFT & Card Services", "CIBIL Score Integration", "Deposits, Loans & Shares", "100+ MIS Accounting Reports"].map(t => (
                          <li key={t} style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(13,95,183,0.8)", display: "block", flexShrink: 0 }} />{t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "32px", position: "relative", zIndex: 1 }}>
                      <div className="pulla-arrow-link pulla-arrow-link-white">
                        <span>Explore Nidhi</span>
                        <span className="arrow-icon">→</span>
                      </div>
                    </div>
                  </div>
                </TransitionLink>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ══ PLATFORM — dark (#2d3a52) ══ */}
        <section id="platform" className="section-dark pulla-section" ref={platformRef}>
          <div className="container mx-auto px-8 md:px-14 max-w-[1400px]">
            <ScrollReveal animation="reveal-text">
              <div className="mb-16 md:mb-24">
                <div className="focus--mask mb-2">
                  <h2 className="pulla-section-title text-white focus--mask-inner">One Platform.</h2>
                </div>
                <div className="focus--mask">
                  <h2 className="pulla-section-title focus--mask-inner" style={{ color: "rgba(255,255,255,0.35)" }}>Multiple Solutions.</h2>
                </div>
                <div className="focus--mask mt-8">
                  <p className="focus--mask-inner font-light leading-relaxed max-w-lg" style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(255,255,255,0.65)" }}>
                    VeritasCo is building a unified ecosystem of digital tools designed to simplify operations across industries.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: GraduationCap, title: "Schools", num: "01", desc: "Complete ERP with biometric attendance, fee management, LMS, and real-time analytics." },
                { icon: Utensils, title: "Restaurants", num: "02", desc: "QR-based ordering system with real-time kitchen display and auto billing." },
                { icon: ShoppingCart, title: "Commerce", num: "03", desc: "India's Local Commerce Super App connecting towns and villages to local businesses." },
                { icon: Landmark, title: "Banking", num: "04", desc: "Enterprise Nidhi banking infrastructure strictly as per Govt Act with IMPS/NEFT." },
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className={`pulla-card rounded-[20px] p-8 md:p-10 h-full ${item.muted ? "opacity-35" : ""}`}>
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <item.icon className="w-5 h-5" style={{ color: "rgba(255,255,255,0.75)" }} />
                      </div>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em" }}>{item.num}</span>
                    </div>
                    <h3 className="mb-4 font-semibold text-white tracking-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,2.5vw,32px)" }}>{item.title}</h3>
                    <p className="font-light leading-relaxed" style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(255,255,255,0.65)" }}>{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ VISION — light ══ */}
        <section className="section-light pulla-section" ref={visionRef}>
          <div className="container mx-auto px-8 md:px-14 max-w-[1400px]">
            <ScrollReveal animation="reveal-text">
              <div className="text-center mb-16 md:mb-24">
                <div className="focus--mask mb-2">
                  <h2 className="pulla-section-title focus--mask-inner" style={{ color: "#212529" }}>Built for the Future</h2>
                </div>
                <div className="focus--mask mt-6">
                  <p className="focus--mask-inner font-light leading-relaxed max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: "16px", color: "rgba(33,37,41,0.6)" }}>
                    We are continuously expanding VeritasCo into a complete digital ecosystem.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Retail management", "Healthcare solutions", "Business analytics", "Custom enterprise"].map((text, idx) => (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <div className="pulla-card-light rounded-[20px] p-6 md:p-8 text-center h-full">
                    <div className="w-10 h-10 bg-[#2d3a52] rounded-xl flex items-center justify-center mx-auto mb-5">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <p className="font-medium leading-snug" style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#212529" }}>{text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="section-dark pulla-section text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(93,109,142,0.25) 0%, #2d3a52 60%)" }} />
          <div className="container mx-auto px-8 md:px-14 max-w-[1400px] relative z-10">
            <ScrollReveal>
              <h2 className="pulla-hero-title text-white mb-8" style={{ fontSize: "clamp(36px,7vw,110px)" }}>
                START YOUR<br />TRANSFORMATION
              </h2>
              <p className="font-light max-w-xl mx-auto mb-12" style={{ fontFamily: "var(--font-body)", fontSize: "17px", color: "rgba(255,255,255,0.6)", lineHeight: "1.7" }}>
                Book a free demo and see how VeritasCo can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <TransitionLink href="/erp" className="pulla-btn pulla-btn-outline-white">Explore ERP <ArrowRight className="w-4 h-4" /></TransitionLink>
                <TransitionLink href="/pos" className="pulla-btn pulla-btn-outline-white">Explore POS <ArrowRight className="w-4 h-4" /></TransitionLink>
                <button onClick={() => setIsBookingOpen(true)} className="pulla-btn pulla-btn-primary">Book Free Demo</button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <SiteFooter onSupportOpen={() => setIsSupportOpen(true)} />

        {/* Floating support btn */}
        <button
          onClick={() => setIsSupportOpen(true)}
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/10"
          style={{ background: "#2d3a52" }}
          aria-label="Open contact support"
        >
          <LifeBuoy className="w-5 h-5 text-white/70" />
        </button>

        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
      </main>
    </>
  )
}
