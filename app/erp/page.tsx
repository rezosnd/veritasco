"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { PullaPreloader } from "@/components/pulla-preloader"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TransitionLink } from "@/components/transition-link"
import { StatsCounter } from "@/components/stats-counter"
import { Timeline } from "@/components/timeline"
import Image from "next/image"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import { SiteFooter } from "@/components/site-footer"
import {
  ArrowRight, ArrowDown, GraduationCap, Smartphone, BookOpen,
  Bus, Home as HomeIcon, Users, BarChart3, ShieldCheck,
  Fingerprint, Star, HelpCircle, GitCompare
} from "lucide-react"

/* ── All ERP feature modules ── */
const MODULES = [
  { num: "01", icon: GraduationCap, title: "Admissions & Fees",    desc: "Streamlined admissions, fee collection, and overdue tracking — all automated." },
  { num: "02", icon: Fingerprint,   title: "Biometric Attendance", desc: "In-hand handheld device. Scan anywhere — classrooms, fields, buses." },
  { num: "03", icon: Smartphone,    title: "Student & Parent App", desc: "Digital diary, homework submissions, live fees, and school announcements." },
  { num: "04", icon: BookOpen,      title: "Academic & LMS",       desc: "Subjects, quizzes, study material upload, and performance tracking." },
  { num: "05", icon: Bus,           title: "Transport GPS",        desc: "Route planning, live driver tracking, and parent SMS alerts." },
  { num: "06", icon: HomeIcon,      title: "Hostel Management",    desc: "Room allocation, occupant management, and daily attendance." },
  { num: "07", icon: Users,         title: "Staff & Payroll",      desc: "HR records, leave management, salary slips, and payroll automation." },
  { num: "08", icon: BarChart3,     title: "Analytics & Reports",  desc: "Real-time dashboards — fee collection, attendance, academics." },
]

const QUICK = [
  { label: "How It Works",  desc: "The 5-step biometric attendance process",   href: "/erp/how-it-works", icon: Fingerprint },
  { label: "Why Switch",    desc: "VeritasCo vs manual register attendance",   href: "/erp/compare",      icon: GitCompare  },
  { label: "Testimonials",  desc: "500+ schools share their experience",        href: "/testimonials",     icon: Star        },
  { label: "FAQ",           desc: "Instant answers to your questions",          href: "/faq",              icon: HelpCircle  },
]

export default function ERPPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <>
      <PullaPreloader pageName="School ERP" />
      <main style={{ backgroundColor: "#f4f3f0", minHeight: "100svh", overflowX: "hidden" }}>
        <MainNav
          onSupportOpen={() => setIsSupportOpen(true)}
          onBookingOpen={() => setIsBookingOpen(true)}
        />

        {/* ══ HERO — light full-screen like pulla ══ */}
        <section style={{
          minHeight: "100svh", backgroundColor: "#2d3a52",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "120px 0 0", position: "relative", overflow: "hidden",
        }}>
          {/* Background Image */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
            <Image 
              src="/erp_hero_bg.png" 
              alt="ERP Background" 
              fill 
              className="object-cover animate-hero-bg" 
              style={{ filter: "brightness(0.25)" }} 
              priority 
            />
            <div className="absolute inset-0 bg-[#2d3a52]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d3a52] via-[#2d3a52]/60 to-transparent" />
          </div>

          <div style={{ padding: "0 8% 8%", position: "relative", zIndex: 10 }}>
            {/* Badge */}
            <div style={{ marginBottom: "28px" }}>
              <span style={{
                fontFamily: "'Open Sans',sans-serif", fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
              }}>
                · India's #1 School ERP Platform
              </span>
            </div>

            {/* Giant heading */}
            <div style={{ overflow: "hidden", lineHeight: "0.88", marginBottom: "4px" }}>
              <h1 className="animate-pulla-reveal" style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: "clamp(52px,11vw,160px)", fontWeight: 700,
                color: "#ffffff", lineHeight: "0.88",
                letterSpacing: "-0.02em", margin: 0, display: "block",
                animationDelay: "0ms",
                animationFillMode: "both"
              }}>
                School ERP
              </h1>
            </div>
            <div style={{ overflow: "hidden", lineHeight: "0.88", marginBottom: "56px" }}>
              <span className="animate-pulla-reveal" style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: "clamp(52px,11vw,160px)", fontWeight: 700,
                color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.15)",
                lineHeight: "0.88", letterSpacing: "-0.02em", display: "block",
                animationDelay: "120ms",
                animationFillMode: "both"
              }}>
                School ERP
              </span>
            </div>

            {/* Content row */}
            <div style={{
              display: "flex", flexWrap: "wrap", alignItems: "flex-end",
              justifyContent: "space-between", gap: "32px",
              borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "40px",
            }}>
              <p style={{
                fontFamily: "'Open Sans',sans-serif", fontSize: "clamp(14px,1.5vw,17px)",
                fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: "1.8",
                maxWidth: "480px", margin: 0,
              }}>
                Transform your school's attendance, fees, academics, transport,
                hostel, and HR — all in one secure, cloud-based platform with
                in-hand biometric devices.
              </p>
              <div className="focus--mask" style={{ display: "flex", gap: "16px", flexWrap: "wrap", pointerEvents: "auto" }}>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="pulla-btn pulla-btn-primary animate-pulla-reveal"
                  style={{ animationDelay: "400ms", animationFillMode: "both" }}
                >
                  Book Free Demo <ArrowRight className="w-4 h-4" />
                </button>
                <a 
                  href="#features" 
                  className="pulla-btn pulla-btn-outline-white animate-pulla-reveal inline-flex items-center gap-2 group transition-all duration-300 hover:bg-white hover:text-[#2d3a52]"
                  style={{ 
                    animationDelay: "550ms", 
                    animationFillMode: "both",
                    borderColor: "rgba(255,255,255,0.4)" 
                  }}
                >
                  Explore Features <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ STATS — light ══ */}
        <section style={{ backgroundColor: "#f4f3f0", padding: "80px 8%" }}>
          <ScrollReveal>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
              gap: "0", borderTop: "1px solid rgba(33,37,41,0.08)",
              borderLeft: "1px solid rgba(33,37,41,0.08)",
            }}>
              {[
                { end: 10, suffix: "+", label: "Schools Trust Us" },
                { end: 50000, suffix: "+", label: "Students Tracked" },
                { end: 99, suffix: ".9%", label: "Accuracy Rate" },
                { end: 24, suffix: "/7", label: "Support Available" },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "40px 32px",
                  borderRight: "1px solid rgba(33,37,41,0.08)",
                  borderBottom: "1px solid rgba(33,37,41,0.08)",
                }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond',Georgia,serif",
                    color: "#212529", lineHeight: 1, marginBottom: "8px",
                  }}>
                    <StatsCounter end={s.end} suffix={s.suffix} className="text-[clamp(36px,4.5vw,60px)] font-semibold" />
                  </div>
                  <div style={{
                    fontFamily: "'Open Sans',sans-serif", fontSize: "11px",
                    fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "rgba(33,37,41,0.3)",
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ══ MODULES GRID — dark ══ */}
        <section id="features" style={{ backgroundColor: "#2d3a52", padding: "100px 8%" }}>
          <ScrollReveal>
            <div style={{ marginBottom: "64px" }}>
              <p style={{
                fontFamily: "'Open Sans',sans-serif", fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.2)", marginBottom: "16px",
              }}>Everything Your School Needs</p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: "clamp(36px,6vw,80px)", fontWeight: 400,
                color: "#ffffff", lineHeight: "0.95",
                letterSpacing: "-0.01em", margin: 0,
              }}>11 Modules.<br />One Platform.</h2>
            </div>
          </ScrollReveal>

          {/* Grid — flat bordered cards like pulla */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRight: "none", borderBottom: "none",
          }}>
            {MODULES.map((m, idx) => (
              <ScrollReveal key={m.num} delay={idx * 50}>
                <div style={{
                  padding: "36px 32px", borderRight: "1px solid rgba(255,255,255,0.07)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  transition: "background 0.3s ease", cursor: "default",
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                    <m.icon style={{ width: 22, height: 22, color: "rgba(255,255,255,0.45)" }} />
                    <span style={{
                      fontFamily: "'Open Sans',sans-serif", fontSize: "10px", fontWeight: 700,
                      color: "rgba(255,255,255,0.15)", letterSpacing: "0.12em",
                    }}>{m.num}</span>
                  </div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond',Georgia,serif",
                    fontSize: "clamp(20px,1.8vw,26px)", fontWeight: 500,
                    color: "#ffffff", marginBottom: "10px", lineHeight: 1.2,
                  }}>{m.title}</h3>
                  <p style={{
                    fontFamily: "'Open Sans',sans-serif", fontSize: "13px",
                    fontWeight: 300, color: "rgba(255,255,255,0.45)", lineHeight: "1.7",
                  }}>{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div style={{ marginTop: "48px", display: "flex", justifyContent: "center" }}>
              <TransitionLink href="/erp/features">
                <button className="pulla-btn pulla-btn-outline">
                  Explore All 11 Modules <ArrowRight className="w-4 h-4" />
                </button>
              </TransitionLink>
            </div>
          </ScrollReveal>
        </section>



        {/* ══ QUICK LINKS — dark ══ */}
        <section style={{ backgroundColor: "#212b3b", padding: "80px 8%" }}>
          <ScrollReveal>
            <h2 style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "clamp(28px,4vw,48px)", fontWeight: 400,
              color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em", marginBottom: "40px",
            }}>Explore Further</h2>
          </ScrollReveal>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))",
            gap: "0", borderTop: "1px solid rgba(255,255,255,0.06)",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
          }}>
            {QUICK.map(({ label, desc, href, icon: Icon }, idx) => (
              <ScrollReveal key={label} delay={idx * 60}>
                <TransitionLink href={href} className="group" style={{ display: "block", height: "100%", textDecoration: "none" }}>
                  <div style={{
                    padding: "40px 32px",
                    height: "100%",
                    borderRight: "1px solid rgba(255,255,255,0.06)",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", 
                    cursor: "pointer",
                    display: "flex", flexDirection: "column",
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)"
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "transparent"
                    }}
                  >
                    <div style={{ marginBottom: "24px" }}>
                      <Icon style={{ width: 22, height: 22, color: "rgba(255,255,255,0.35)", transition: "color 0.3s ease" }} className="group-hover:text-[#9bd4d7]" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontFamily: "'Cormorant Garamond',Georgia,serif",
                        fontSize: "24px", fontWeight: 500,
                        color: "#ffffff", marginBottom: "12px",
                      }}>{label}</h3>
                      <p style={{
                        fontFamily: "'Open Sans',sans-serif", fontSize: "14px",
                        fontWeight: 300, color: "rgba(255,255,255,0.4)", lineHeight: "1.6",
                      }}>{desc}</p>
                    </div>
                    
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "32px" }}>
                      <span style={{ 
                        fontSize: "11px", color: "rgba(255,255,255,0.3)", 
                        fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em",
                        transition: "color 0.3s ease"
                      }} className="group-hover:text-white">View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#9bd4d7] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </TransitionLink>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ══ 6 DAYS GO LIVE TIMELINE ══ */}
        <section style={{ backgroundColor: "#212529", paddingTop: "120px" }}>
          <div className="container mx-auto px-8 md:px-14 max-w-[1400px] mb-4 text-center md:text-left">
            <ScrollReveal>
              <h2 style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: "clamp(48px,8vw,120px)", fontWeight: 700,
                color: "#ffffff", lineHeight: "0.9",
                letterSpacing: "-0.02em", margin: 0,
              }}>Go Live in <span style={{ color: "#9bd4d7" }}>6 Days.</span></h2>
              <p style={{
                fontFamily: "'Open Sans',sans-serif", fontSize: "16px",
                color: "rgba(255,255,255,0.6)", fontWeight: 300, marginTop: "24px",
                maxWidth: "500px", lineHeight: "1.7"
              }}>
                A completely streamlined, zero-downtime integration process designed specifically for educational institutions to transition effortlessly.
              </p>
            </ScrollReveal>
          </div>
          <Timeline />
        </section>

        {/* ══ CTA — light ══ */}
        <section style={{ backgroundColor: "#f4f3f0", padding: "100px 8%" }}>
          <ScrollReveal>
            <div style={{ borderTop: "1px solid rgba(33,37,41,0.08)", paddingTop: "64px" }}>
              <p style={{
                fontFamily: "'Open Sans',sans-serif", fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(33,37,41,0.25)", marginBottom: "20px",
              }}>Ready to get started?</p>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond',Georgia,serif",
                  fontSize: "clamp(40px,7vw,100px)", fontWeight: 700,
                  color: "#212529", lineHeight: "0.9",
                  letterSpacing: "-0.02em", margin: 0,
                }}>Transform<br />Your School.</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="pulla-btn pulla-btn-dark"
                  >
                    Book Free Demo <ArrowRight className="w-4 h-4" />
                  </button>
                  <p style={{
                    fontFamily: "'Open Sans',sans-serif", fontSize: "11px",
                    color: "rgba(33,37,41,0.3)", fontWeight: 300,
                  }}>
                    No credit card · Setup in 6 days · 24/7 support
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
          <svg className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>

        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
      </main>
    </>
  )
}
