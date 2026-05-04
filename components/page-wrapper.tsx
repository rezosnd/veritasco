"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { TransitionLink } from "@/components/transition-link"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { SiteFooter } from "./site-footer"

interface PageWrapperProps {
  children: React.ReactNode
  badge?: string
  title?: string
  description?: string
  breadcrumb?: { label: string; href: string }[]
  hideHero?: boolean
  darkHero?: boolean
  bgImage?: string
}

export function PageWrapper({
  children,
  badge,
  title,
  description,
  breadcrumb,
  hideHero = false,
  darkHero = true,
  bgImage,
}: PageWrapperProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <main className="relative min-h-svh overflow-x-hidden">
      <MainNav
        onSupportOpen={() => setIsSupportOpen(true)}
        onBookingOpen={() => setIsBookingOpen(true)}
      />

      {/* Page Hero Banner */}
      {!hideHero && (
        <section
          className={`relative z-10 flex flex-col justify-end min-h-[55vh] pt-32 pb-16 md:pt-40 md:pb-20 px-8 md:px-14 overflow-hidden ${darkHero ? "section-hero" : "section-light"}`}
        >
          {darkHero && !bgImage && (
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#1a2332]">
              {/* Premium CSS Fluid Animated Background matching Home */}
              <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#3d4d6a]/40 blur-[120px] animate-blob" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#2d3a52]/60 blur-[140px] animate-blob animation-delay-4000" />
              <div className="absolute top-[30%] left-[40%] w-[50vw] h-[50vw] rounded-full bg-[#9bd4d7]/15 blur-[100px] animate-blob animation-delay-2000" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2332]/20 to-[#1a2332]/80 pointer-events-none" />
            </div>
          )}

          {bgImage && (
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image src={bgImage} alt="" fill priority className="object-cover animate-hero-bg" quality={90} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2d3a52]/80 via-[#2d3a52]/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2d3a52]/80 pointer-events-none" />
            </div>
          )}

          <div className="container mx-auto max-w-[1400px] relative z-10">
            {breadcrumb && breadcrumb.length > 0 && (
              <nav className="flex items-center gap-2 mb-8 flex-wrap" style={{ fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <TransitionLink href="/" style={{ color: darkHero ? "rgba(255,255,255,0.4)" : "rgba(33,37,41,0.4)", textDecoration: "none" }}>Home</TransitionLink>
                {breadcrumb.map((crumb, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span style={{ color: darkHero ? "rgba(255,255,255,0.15)" : "rgba(33,37,41,0.15)" }}>/</span>
                    <span style={{ color: darkHero ? "rgba(255,255,255,0.55)" : "rgba(33,37,41,0.55)" }}>{crumb.label}</span>
                  </span>
                ))}
              </nav>
            )}

            {badge && (
              <div className="mb-6">
                <span
                  className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5"
                  style={{
                    fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    borderColor: darkHero ? "rgba(255,255,255,0.15)" : "rgba(33,37,41,0.12)",
                    color: darkHero ? "rgba(255,255,255,0.55)" : "rgba(33,37,41,0.5)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {badge}
                </span>
              </div>
            )}

            {title && (
              <div className="focus--mask mb-5">
                <h1
                  className="pulla-section-title focus--mask-inner animate-pulla-reveal"
                  style={{ color: darkHero ? "#ffffff" : "#212529" }}
                >
                  {title}
                </h1>
              </div>
            )}

            {description && (
              <div className="focus--mask">
                <p className="focus--mask-inner animate-pulla-reveal font-light leading-relaxed max-w-2xl" style={{ animationDelay: "150ms", fontFamily: "var(--font-body)", fontSize: "16px", color: darkHero ? "rgba(255,255,255,0.7)" : "rgba(33,37,41,0.65)" }}>
                  {description}
                </p>
              </div>
            )}
          </div>

        </section>
      )}

      <div className="relative z-10">{children}</div>

      <SiteFooter onSupportOpen={() => setIsSupportOpen(true)} />

      {/* Floating support btn */}
      <button
        onClick={() => setIsSupportOpen(true)}
        className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-white/10"
        style={{ background: "#2d3a52" }}
        aria-label="Open contact support"
      >
        <svg className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </main>
  )
}
