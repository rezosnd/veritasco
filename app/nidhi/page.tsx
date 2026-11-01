"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { PullaPreloader } from "@/components/pulla-preloader"
import { VantraButton } from "@/components/vantra-button"
import { StatsCounter } from "@/components/stats-counter"
import Image from "next/image"
import Link from "next/link"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import { SiteFooter } from "@/components/site-footer"
import {
  Users,
  Landmark,
  PiggyBank,
  PieChart,
  Calculator,
  FileText,
  CreditCard,
  ShieldCheck,
  HelpCircle,
  Globe,
  Smartphone,
  Lock,
  ArrowUpRight,
} from "lucide-react"

const MODULES = [
  { num: "01", icon: Users, title: "Membership Management", desc: "Online Member / Customer registration, full KYC verification, and Customer Panel." },
  { num: "02", icon: PiggyBank, title: "Term Deposits", desc: "Pigmy/daily Deposit, Recurring Deposit, Fixed Deposit, and Monthly Income Scheme (MIS)." },
  { num: "03", icon: Landmark, title: "Loans & Advances", desc: "Business, Personal, Unsecured, Secured, Gold, Vehicle, Group, and Loan on Deposits." },
  { num: "04", icon: PieChart, title: "Share Management", desc: "Add/withdraw share, Share Certificate printing, and automated Dividend calculations." },
  { num: "05", icon: Calculator, title: "Complete Accounting", desc: "General Ledger, Journal Voucher, Cash book, Day book, Bank book, P&L A/C, Balance Sheet." },
  { num: "06", icon: FileText, title: "100+ MIS Reports", desc: "Branch Collection Report, Daily Collection, Pending Installments, and Late Fees reporting." },
  { num: "07", icon: CreditCard, title: "NEFT & Card Services", desc: "IFSC Facility, IMPS/NEFT Service, Prepaid Card, and Debit Card generation." },
  { num: "08", icon: ShieldCheck, title: "CIBIL Score Integration", desc: "Fetch CIBIL Scores and Reports directly within the platform for instant loan approvals." },
]

const QUICK = [
  { label: "Internet Banking", desc: "Online portal for members to check balances", href: "#", icon: Globe },
  { label: "Mobile App", desc: "Native application for instant member access", href: "#", icon: Smartphone },
  { label: "Govt Compliant", desc: "Purely As Per Government Nidhi Act", href: "#", icon: Lock },
  { label: "FAQ", desc: "Common queries regarding Nidhi software", href: "/faq", icon: HelpCircle },
]

export default function NidhiPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <>
      <main className="relative min-h-svh bg-[#f5f4f0] text-[#0a0a0a] overflow-x-hidden">
        <MainNav
          onSupportOpen={() => setIsSupportOpen(true)}
          onBookingOpen={() => setIsBookingOpen(true)}
        />

        {/* ══ 1. HERO — Vantra Framed Dark Canvas ══ */}
        <div className="hero_frame_wrap">
          <section data-surface="dark" className="section_hero">
            <div className="hero_image">
              <Image
                src="/workspace.png"
                alt="Nidhi Banking Software"
                fill
                priority
                quality={90}
                className="object-cover scale-105 opacity-30"
              />
            </div>

            <div className="hero_content">
              <div className="padding-global">
                <div className="container-max">
                  <div className="max-w-2xl">
                    <h1 className="heading-style-h0 text-white mb-6">
                      Nidhi Banking. <br />
                      Govt Compliant. <br />
                      Core Platform.
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-[#f5f4f0]/75 max-w-xl mb-8">
                      Enterprise banking software built strictly as per the Government Nidhi Act. Manage members, deposits, loans, shares, and complete double-entry accounting.
                    </p>

                    <div className="buttons_row">
                      <VantraButton
                        onClick={() => setIsBookingOpen(true)}
                        variant="light"
                        ariaLabel="Book Live Demo"
                      >
                        Book Live Demo
                      </VantraButton>

                      <VantraButton
                        href="#features"
                        variant="ghost"
                        className="text-white border-white/30"
                        ariaLabel="Explore Modules"
                      >
                        Explore Modules
                      </VantraButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ══ 2. STATS COUNTER ══ */}
        <section className="section-light padding-section py-16">
          <div className="padding-global">
            <div className="container-max">
              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-black/10">
                {[
                  { end: 100, suffix: "+", label: "MIS Reports" },
                  { end: 100, suffix: "%", label: "Govt Act Compliant" },
                  { end: 256, suffix: "-Bit", label: "SSL Encryption" },
                  { end: 24, suffix: "/7", label: "Core Availability" },
                ].map((s, i) => (
                  <div key={i} className="p-8 md:p-10 border-r border-b border-black/10">
                    <div className="heading-style-h2 text-[#0a0a0a] mb-2">
                      <StatsCounter end={s.end} suffix={s.suffix} />
                    </div>
                    <div className="label-mono text-[10px] text-black/50">
                      ( {s.label} )
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. MODULES GRID ══ */}
        <section id="features" className="section-dark padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-white">
                    Core Banking
                    <br />
                    Infrastructure.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( 08 Financial Systems )</div>
                  <div className="section_meta-text">End-to-end ledger and regulatory compliance</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                {MODULES.map((m) => (
                  <div
                    key={m.num}
                    className="p-8 md:p-10 border-r border-b border-white/10 hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <m.icon className="w-5 h-5 text-white/60" />
                      <span className="label-mono is-light text-[10px]">( {m.num} )</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white mb-3">
                      {m.title}
                    </h3>
                    <p className="text-sm text-[#f5f4f0]/65 leading-relaxed font-normal">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 4. QUICK LINKS ══ */}
        <section className="section-dark-secondary padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-white">
                    Compliance &amp;
                    <br />
                    Access.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( Digital Services )</div>
                  <div className="section_meta-text">Web, Mobile &amp; API Integration</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                {QUICK.map(({ label, desc, href, icon: Icon }) => (
                  <div
                    key={label}
                    className="p-8 md:p-10 border-r border-b border-white/10 hover:bg-white/[0.04] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <Icon className="w-5 h-5 text-white/50 mb-6" />
                      <h3 className="font-display text-xl font-semibold text-white mb-2">
                        {label}
                      </h3>
                      <p className="text-sm text-[#f5f4f0]/60 leading-relaxed font-normal">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5. CTA ══ */}
        <section className="section-light padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="p-10 md:p-16 rounded-3xl bg-[#0a0a0a] text-white flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <div className="label-mono is-light mb-4">Enterprise Deployment</div>
                  <h2 className="heading-style-h2 text-white mb-4">
                    Scale Your
                    <br />
                    Nidhi Operations.
                  </h2>
                  <p className="text-sm md:text-base text-white/60 font-mono">
                    Complete data migration · CIBIL scoring · IMPS/NEFT ready
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <VantraButton
                    onClick={() => setIsBookingOpen(true)}
                    variant="light"
                    ariaLabel="Book Live Demo"
                  >
                    Book Live Demo
                  </VantraButton>
                  <VantraButton
                    onClick={() => setIsSupportOpen(true)}
                    variant="ghost"
                    className="text-white border-white/20"
                    ariaLabel="Contact Support"
                  >
                    Contact Support
                  </VantraButton>
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
