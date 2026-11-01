"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { PullaPreloader } from "@/components/pulla-preloader"
import { VantraButton } from "@/components/vantra-button"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import { Linkedin, Instagram, Facebook, Twitter, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/veritasco", icon: Linkedin },
    { label: "Instagram", href: "https://www.instagram.com/veritasco.tech", icon: Instagram },
    { label: "Facebook", href: "https://facebook.com/veritascotech", icon: Facebook },
    { label: "Twitter", href: "https://twitter.com/veritascotech", icon: Twitter },
  ]

  return (
    <>
      <PullaPreloader pageName="Contact" />

      <main className="relative min-h-svh bg-[#f5f4f0] text-[#0a0a0a] overflow-x-hidden">
        <MainNav
          onSupportOpen={() => setIsSupportOpen(true)}
          onBookingOpen={() => setIsBookingOpen(true)}
        />

        {/* ══ VANTRA EDITORIAL CONTACT HERO ══ */}
        <section className="pt-36 pb-20 md:pt-48 md:pb-28">
          <div className="padding-global">
            <div className="container-max">
              <div className="mb-6">
                <span className="label-mono px-3 py-1 rounded-full border border-black/10 bg-black/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a] animate-pulse" />
                  Contact · Bhubaneswar — India
                </span>
              </div>

              <h1 className="heading-style-h0 text-[#0a0a0a] mb-12">
                Let’s build
                <br />
                together.
              </h1>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-20">
                <VantraButton
                  onClick={() => setIsBookingOpen(true)}
                  variant="dark"
                  ariaLabel="Book a Live Product Demo"
                >
                  Book a Product Demo
                </VantraButton>

                <VantraButton
                  onClick={() => setIsSupportOpen(true)}
                  variant="ghost"
                  className="border-black/20 text-[#0a0a0a]"
                  ariaLabel="Contact Support Desk"
                >
                  Contact Support Desk
                </VantraButton>
              </div>

              {/* ══ METADATA INFORMATION GRID ══ */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-black/10">
                {/* Email */}
                <div className="space-y-3">
                  <div className="label-mono text-[10px] text-black/40">Direct Email</div>
                  <div>
                    <a
                      href="mailto:info@veritasco.tech"
                      className="font-display text-xl md:text-2xl font-medium text-[#0a0a0a] hover:opacity-60 transition-opacity block"
                    >
                      info@veritasco.tech
                    </a>
                    <p className="text-xs text-black/50 mt-1 font-mono">Replies within 4 business hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-3">
                  <div className="label-mono text-[10px] text-black/40">Direct Phone</div>
                  <div>
                    <a
                      href="tel:+918709442363"
                      className="font-display text-xl md:text-2xl font-medium text-[#0a0a0a] hover:opacity-60 transition-opacity block"
                    >
                      +91 87094 42363
                    </a>
                    <p className="text-xs text-black/50 mt-1 font-mono">Mon – Sat: 9:00 AM – 7:00 PM IST</p>
                  </div>
                </div>

                {/* Headquarters */}
                <div className="space-y-3">
                  <div className="label-mono text-[10px] text-black/40">Studio Location</div>
                  <address className="not-italic text-sm text-[#0a0a0a]/80 leading-relaxed font-body">
                    <strong className="font-semibold block text-[#0a0a0a]">VeritasCo Technologies</strong>
                    Bhubaneswar, Odisha<br />
                    India — 751001
                  </address>
                </div>

                {/* Social Channels */}
                <div className="space-y-3">
                  <div className="label-mono text-[10px] text-black/40">Follow The Studio</div>
                  <div className="flex flex-col gap-2">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between py-1 text-sm text-[#0a0a0a]/75 hover:text-[#0a0a0a] border-b border-black/5 transition-colors"
                      >
                        <span>{s.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ MAP / COMMITMENT SECTION ══ */}
        <section className="section-dark padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="label-mono is-light mb-3">( Response Commitment )</div>
                  <h2 className="heading-style-h2 text-white mb-6">
                    Zero waiting.
                    <br />
                    Direct engineers.
                  </h2>
                  <p className="text-[#f5f4f0]/70 text-base md:text-lg leading-relaxed">
                    When you contact VeritasCo, you are not handed down to junior script readers. You speak directly with the team who designs the hardware and writes the cloud code.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
                  <div className="flex items-center gap-3 text-white font-display text-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Active Support &amp; Deployment Hours</span>
                  </div>
                  <div className="text-sm text-white/60 font-mono space-y-1">
                    <div>Admissions &amp; Academic Onboarding: Active</div>
                    <div>Hardware Dispatch &amp; Replacement: Immediate</div>
                    <div>24/7 Cloud Monitoring: Operational</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <SiteFooter
          onSupportOpen={() => setIsSupportOpen(true)}
          onBookingOpen={() => setIsBookingOpen(true)}
        />

        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
      </main>
    </>
  )
}
