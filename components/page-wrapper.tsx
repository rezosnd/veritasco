"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import Image from "next/image"
import Link from "next/link"

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
    <div className="relative min-h-svh bg-[#f5f4f0] text-[#0a0a0a] selection:bg-[#0a0a0a] selection:text-[#f5f4f0]">
      {/* Navigation */}
      <MainNav
        onSupportOpen={() => setIsSupportOpen(true)}
        onBookingOpen={() => setIsBookingOpen(true)}
      />

      {/* Editorial Page Hero */}
      {!hideHero && (
        <div className="hero_frame_wrap">
          <section
            className={`relative z-10 flex flex-col justify-end pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden rounded-3xl ${
              darkHero ? "bg-[#0a0a0a] text-[#f5f4f0]" : "bg-[#ffffff] text-[#0a0a0a] border border-[rgba(10,10,10,0.08)]"
            }`}
          >
          {/* Hero background image treatment */}
          {bgImage && (
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <Image
                src={bgImage}
                alt=""
                fill
                priority
                className="object-cover scale-105 opacity-30"
              />
              <div
                className={`absolute inset-0 ${
                  darkHero
                    ? "bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"
                    : "bg-gradient-to-t from-[#f5f4f0] via-[#f5f4f0]/85 to-transparent"
                }`}
              />
            </div>
          )}

          {!bgImage && darkHero && (
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-white/10 blur-[120px]" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-white/5 blur-[100px]" />
            </div>
          )}

          <div className="padding-global relative z-10">
            <div className="container-max">
              {/* Breadcrumbs */}
              {breadcrumb && breadcrumb.length > 0 && (
                <nav
                  className="flex items-center gap-2 mb-8 flex-wrap font-mono text-[11px] uppercase tracking-[0.16em] opacity-60"
                  aria-label="Breadcrumbs"
                >
                  <Link href="/" className="hover:opacity-100 transition-opacity">
                    ( Home )
                  </Link>
                  {breadcrumb.map((crumb, i) => (
                    <span key={i} className="flex items-center gap-2">
                      <span className="opacity-40">/</span>
                      <Link href={crumb.href} className="hover:opacity-100 transition-opacity">
                        {crumb.label}
                      </Link>
                    </span>
                  ))}
                </nav>
              )}

              {/* Status Badge */}
              {badge && (
                <div className="mb-6">
                  <span
                    className={`label-mono ${
                      darkHero ? "is-light" : ""
                    } px-3 py-1 rounded-full border ${
                      darkHero ? "border-white/15 bg-white/5" : "border-black/10 bg-black/5"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    {badge}
                  </span>
                </div>
              )}

              {/* Editorial Heading */}
              {title && (
                <h1
                  className={`heading-style-h1 mb-6 max-w-4xl ${
                    darkHero ? "text-white" : "text-[#0a0a0a]"
                  }`}
                >
                  {title}
                </h1>
              )}

              {/* Subtitle / Description */}
              {description && (
                <p
                  className={`text-base md:text-xl font-normal leading-relaxed max-w-2xl ${
                    darkHero ? "text-[#f5f4f0]/70" : "text-[#0a0a0a]/70"
                  }`}
                >
                  {description}
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
      )}

      {/* Page Body */}
      <div className="relative z-10">{children}</div>

      {/* Footer */}
      <SiteFooter
        onSupportOpen={() => setIsSupportOpen(true)}
        onBookingOpen={() => setIsBookingOpen(true)}
      />

      {/* Booking and Support Modals */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </div>
  )
}
