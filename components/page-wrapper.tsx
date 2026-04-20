"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { AnimatedWaves } from "@/components/animated-waves"
import { SoftButton } from "@/components/soft-button"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import Image from "next/image"
import Link from "next/link"

interface PageWrapperProps {
  children: React.ReactNode
  badge?: string
  title: string
  description: string
  breadcrumb?: { label: string; href: string }[]
}

/** Shared footer used on every sub-page */
function SiteFooter({
  onSupportOpen,
}: {
  onSupportOpen: () => void
}) {
  return (
    <footer className="relative z-10 bg-card border-t border-border mt-10">
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-14">
        {/* 4-col grid — collapses to 2-col on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8">
          {/* Brand — full width on smallest screens */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logo.avif"
                alt="VeritasCo.Tech Logo"
                width={36}
                height={36}
                loading="lazy"
                quality={85}
                sizes="36px"
              />
              <span className="text-base font-bold text-foreground">
                VeritasCo.Tech
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Revolutionizing school management with biometric technology and
              cloud-based ERP solutions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                ["Features", "/features"],
                ["How It Works", "/how-it-works"],
                ["Compare", "/compare"],
                ["Role Access", "/features#role-access"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-primary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <button
                  onClick={onSupportOpen}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={onSupportOpen}
                  className="hover:text-primary transition-colors"
                >
                  Contact Support
                </button>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  System Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} VeritasCo.Tech. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  {l}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export function PageWrapper({
  children,
  badge,
  title,
  description,
  breadcrumb,
}: PageWrapperProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <main className="relative min-h-svh">
      <AnimatedWaves />

      <MainNav
        onSupportOpen={() => setIsSupportOpen(true)}
        onBookingOpen={() => setIsBookingOpen(true)}
      />

      {/* ── Page Hero Banner ── */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-5 sm:pt-8 md:pt-14 pb-4 md:pb-10">
        {/* Breadcrumb nav */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            className="flex items-center flex-wrap gap-1.5 text-[11px] sm:text-xs text-muted-foreground mb-4"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span aria-hidden="true">/</span>
                {i === breadcrumb.length - 1 ? (
                  <span className="text-foreground font-medium" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-primary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Page title block */}
        <div className="max-w-2xl">
          {badge && (
            <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-3">
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-primary tracking-wide">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-2 sm:mb-3 text-balance">
            {title}
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed text-pretty">
            {description}
          </p>
        </div>
      </section>

      {/* ── Page Content ── */}
      <div className="relative z-10">{children}</div>

      {/* ── Footer ── */}
      <SiteFooter onSupportOpen={() => setIsSupportOpen(true)} />

      {/* ── Floating support button (safe-area aware) ── */}
      <button
        onClick={() => setIsSupportOpen(true)}
        className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center soft-shadow hover:scale-110 transition-transform active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label="Open contact support"
        style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <ContactSupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />
    </main>
  )
}
