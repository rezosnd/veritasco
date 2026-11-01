"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { PullaPreloader } from "@/components/pulla-preloader"
import { VantraButton } from "@/components/vantra-button"
import { StatsCounter } from "@/components/stats-counter"
import { Timeline } from "@/components/timeline"
import Image from "next/image"
import Link from "next/link"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import { SiteFooter } from "@/components/site-footer"
import {
  GraduationCap,
  Smartphone,
  BookOpen,
  Bus,
  Home as HomeIcon,
  Users,
  BarChart3,
  Fingerprint,
  Star,
  HelpCircle,
  GitCompare,
  ArrowUpRight,
} from "lucide-react"

const MODULES = [
  { num: "01", icon: GraduationCap, title: "Admissions & Fees", desc: "Streamlined admissions, fee collection, and overdue tracking — all automated." },
  { num: "02", icon: Fingerprint, title: "Biometric Attendance", desc: "In-hand handheld device. Scan anywhere — classrooms, fields, buses." },
  { num: "03", icon: Smartphone, title: "Student & Parent App", desc: "Digital diary, homework submissions, live fees, and school announcements." },
  { num: "04", icon: BookOpen, title: "Academic & LMS", desc: "Subjects, quizzes, study material upload, and performance tracking." },
  { num: "05", icon: Bus, title: "Transport GPS", desc: "Route planning, live driver tracking, and parent SMS alerts." },
  { num: "06", icon: HomeIcon, title: "Hostel Management", desc: "Room allocation, occupant management, and daily attendance." },
  { num: "07", icon: Users, title: "Staff & Payroll", desc: "HR records, leave management, salary slips, and payroll automation." },
  { num: "08", icon: BarChart3, title: "Analytics & Reports", desc: "Real-time dashboards — fee collection, attendance, academics." },
]

const QUICK = [
  { label: "How It Works", desc: "The 5-step biometric attendance process", href: "/erp/how-it-works", icon: Fingerprint },
  { label: "Why Switch", desc: "VeritasCo vs manual register attendance", href: "/erp/compare", icon: GitCompare },
  { label: "Testimonials", desc: "500+ schools share their experience", href: "/testimonials", icon: Star },
  { label: "FAQ", desc: "Instant answers to your questions", href: "/faq", icon: HelpCircle },
]

export default function ERPPage() {
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
                src="/erp_hero_bg.png"
                alt="School ERP Platform"
                fill
                priority
                quality={90}
                className="object-cover scale-105 opacity-35"
              />
            </div>

            <div className="hero_content">
              <div className="padding-global">
                <div className="container-max">
                  <div className="max-w-2xl">
                    <h1 className="heading-style-h0 text-white mb-6">
                      School ERP. <br />
                      Complete. <br />
                      In Hand.
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-[#f5f4f0]/75 max-w-xl mb-8">
                      Transform your school&apos;s attendance, fees, academics, transport,
                      hostel, and HR — all in one secure, cloud-based platform with
                      in-hand biometric devices.
                    </p>

                    <div className="buttons_row">
                      <VantraButton
                        onClick={() => setIsBookingOpen(true)}
                        variant="light"
                        ariaLabel="Book Free Demo"
                      >
                        Book Free Demo
                      </VantraButton>

                      <VantraButton
                        href="#features"
                        variant="ghost"
                        className="text-white border-white/30"
                        ariaLabel="Explore Features"
                      >
                        Explore Features
                      </VantraButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ══ 2. STATS COUNTER — Vantra Hairline Grid ══ */}
        <section className="section-light padding-section py-16">
          <div className="padding-global">
            <div className="container-max">
              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-black/10">
                {[
                  { end: 10, suffix: "+", label: "Schools Trust Us" },
                  { end: 50000, suffix: "+", label: "Students Tracked" },
                  { end: 99, suffix: ".9%", label: "Accuracy Rate" },
                  { end: 24, suffix: "/7", label: "Support Available" },
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

        {/* ══ 3. MODULES GRID — Vantra Dark Editorial Grid ══ */}
        <section id="features" className="section-dark padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-white">
                    11 Modules.
                    <br />
                    One Platform.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( Complete Suite )</div>
                  <div className="section_meta-text">Everything your school needs</div>
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

              <div className="mt-12 flex justify-center">
                <VantraButton href="/erp/features" variant="light">
                  Explore All 11 Modules
                </VantraButton>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 4. QUICK EXPLORATION LINKS ══ */}
        <section className="section-dark-secondary padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-white">
                    Explore
                    <br />
                    further.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( Deep Dive )</div>
                  <div className="section_meta-text">Technical resources &amp; guides</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                {QUICK.map(({ label, desc, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    className="group p-8 md:p-10 border-r border-b border-white/10 hover:bg-white/[0.04] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <Icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors mb-6" />
                      <h3 className="font-display text-xl font-semibold text-white mb-2">
                        {label}
                      </h3>
                      <p className="text-sm text-[#f5f4f0]/60 leading-relaxed font-normal">
                        {desc}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between text-xs font-mono uppercase tracking-[0.12em] text-white/50 group-hover:text-white pt-4 border-t border-white/5">
                      <span>View details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5. GO LIVE IN 6 DAYS TIMELINE ══ */}
        <section className="section-dark padding-section">
          <div className="padding-global">
            <div className="container-max mb-12">
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-white">
                    Go live in
                    <br />
                    6 days.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( Rapid Deployment )</div>
                  <div className="section_meta-text">Zero-downtime transition</div>
                </div>
              </div>

              <p className="text-base md:text-lg text-[#f5f4f0]/70 max-w-xl mb-12 leading-relaxed">
                A completely streamlined, zero-downtime integration process designed specifically for educational institutions to transition effortlessly.
              </p>

              <Timeline />
            </div>
          </div>
        </section>

        {/* ══ 6. CTA BANNER ══ */}
        <section className="section-light padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="p-10 md:p-16 rounded-3xl bg-[#0a0a0a] text-white flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <div className="label-mono is-light mb-4">Ready to get started?</div>
                  <h2 className="heading-style-h2 text-white mb-4">
                    Transform
                    <br />
                    Your School.
                  </h2>
                  <p className="text-sm md:text-base text-white/60 font-mono">
                    No credit card · Setup in 6 days · 24/7 direct engineer support
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <VantraButton
                    onClick={() => setIsBookingOpen(true)}
                    variant="light"
                    ariaLabel="Book Free Demo"
                  >
                    Book Free Demo
                  </VantraButton>
                  <VantraButton
                    onClick={() => setIsSupportOpen(true)}
                    variant="ghost"
                    className="text-white border-white/20"
                    ariaLabel="Contact Team"
                  >
                    Contact Team
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
