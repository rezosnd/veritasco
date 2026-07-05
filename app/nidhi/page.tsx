"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { PullaPreloader } from "@/components/pulla-preloader"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TransitionLink } from "@/components/transition-link"
import { StatsCounter } from "@/components/stats-counter"
import Image from "next/image"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import { SiteFooter } from "@/components/site-footer"
import {
  ArrowRight, ArrowDown, Users, Landmark, PiggyBank, PieChart,
  Calculator, FileText, CreditCard, ShieldCheck, 
  HelpCircle, Globe, Smartphone, Lock
} from "lucide-react"

/* ── Nidhi feature modules ── */
const MODULES = [
  { num: "01", icon: Users,       title: "Membership Management", desc: "Online Member / Customer registration, full KYC verification, and Customer Panel." },
  { num: "02", icon: PiggyBank,   title: "Term Deposits",         desc: "Pigmy/daily Deposit, Recurring Deposit, Fixed Deposit, and Monthly Income Scheme (MIS)." },
  { num: "03", icon: Landmark,    title: "Loans & Advances",      desc: "Business, Personal, Unsecured, Secured, Gold, Vehicle, Group, and Loan on Deposits." },
  { num: "04", icon: PieChart,    title: "Share Management",      desc: "Add/withdraw share, Share Certificate printing, and automated Dividend calculations." },
  { num: "05", icon: Calculator,  title: "Complete Accounting",   desc: "General Ledger, Journal Voucher, Cash book, Day book, Bank book, P&L A/C, Balance Sheet." },
  { num: "06", icon: FileText,    title: "100+ MIS Reports",      desc: "Branch Collection Report, Daily Collection, Pending Installments, and Late Fees reporting." },
  { num: "07", icon: CreditCard,  title: "NEFT & Card Services",  desc: "IFSC Facility, IMPS/NEFT Service, Prepaid Card, and Debit Card generation." },
  { num: "08", icon: ShieldCheck, title: "CIBIL Score Integration",desc: "Fetch CIBIL Scores and Reports directly within the platform for instant loan approvals." },
]

const QUICK = [
  { label: "Internet Banking",  desc: "Online portal for members to check balances",    href: "#", icon: Globe },
  { label: "Mobile App",        desc: "Native application for instant access",          href: "#", icon: Smartphone },
  { label: "Govt Compliant",    desc: "Purely As Per Government Nidhi Act",             href: "#", icon: Lock  },
  { label: "FAQ",               desc: "Common queries regarding Nidhi software",        href: "/faq", icon: HelpCircle },
]

export default function NidhiPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <>
      <PullaPreloader pageName="Nidhi Banking" />
      <main style={{ backgroundColor: "#f4f3f0", minHeight: "100svh", overflowX: "hidden" }}>
        <MainNav
          onSupportOpen={() => setIsSupportOpen(true)}
          onBookingOpen={() => setIsBookingOpen(true)}
        />

        {/* ══ HERO — dark full-screen ══ */}
        <section style={{
          minHeight: "100svh", backgroundColor: "#0d1d36",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "120px 0 0", position: "relative", overflow: "hidden",
        }}>
          {/* Background Gradient / Imagery */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
            <div className="absolute inset-0 bg-[#0d1d36]/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d36] via-[#0d1d36]/90 to-transparent" />
            {/* Shimmer accent */}
            <div aria-hidden style={{ position: "absolute", top: "10%", right: "-10%", width: "50%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, rgba(13,95,183,0.15) 0%, transparent 70%)", filter: "blur(40px)" }} />
          </div>

          <div style={{ padding: "0 8% 8%", position: "relative", zIndex: 10 }}>
            {/* Badge */}
            <div style={{ marginBottom: "28px" }}>
              <span style={{
                fontFamily: "'Open Sans',sans-serif", fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}>
                · Enterprise Banking Infrastructure
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
                Veritasco
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
                Nidhi
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
                100% Customizable and Purely as per Government Act. Manage Members, Term Deposits, Loans, Shares, and Accounting seamlessly with our secure Nidhi Company Software.
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
                  className="pulla-btn pulla-btn-outline-white animate-pulla-reveal inline-flex items-center gap-2 group transition-all duration-300 hover:bg-white hover:text-[#0d1d36]"
                  style={{ 
                    animationDelay: "550ms", 
                    animationFillMode: "both",
                    borderColor: "rgba(255,255,255,0.4)" 
                  }}
                >
                  Explore Modules <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ STATS ══ */}
        <section style={{ backgroundColor: "#f4f3f0", padding: "80px 8%" }}>
          <ScrollReveal>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
              gap: "0", borderTop: "1px solid rgba(33,37,41,0.08)",
              borderLeft: "1px solid rgba(33,37,41,0.08)",
            }}>
              {[
                { end: 100, suffix: "%", label: "Govt Compliant" },
                { end: 100, suffix: "+", label: "MIS Reports" },
                { end: 99, suffix: ".9%", label: "Uptime SLA" },
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
        <section id="features" style={{ backgroundColor: "#0d1d36", padding: "100px 8%" }}>
          <ScrollReveal>
            <div style={{ marginBottom: "64px" }}>
              <p style={{
                fontFamily: "'Open Sans',sans-serif", fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)", marginBottom: "16px",
              }}>Enterprise Banking Infrastructure</p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: "clamp(36px,6vw,80px)", fontWeight: 400,
                color: "#ffffff", lineHeight: "0.95",
                letterSpacing: "-0.01em", margin: 0,
              }}>8 Core Modules.<br />One Solution.</h2>
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
                  transition: "background 0.3s ease", cursor: "default", height: "100%"
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
        </section>

        {/* ══ QUICK LINKS — dark ══ */}
        <section style={{ backgroundColor: "#091426", padding: "80px 8%" }}>
          <ScrollReveal>
            <h2 style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "clamp(28px,4vw,48px)", fontWeight: 400,
              color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em", marginBottom: "40px",
            }}>Digital Channels</h2>
          </ScrollReveal>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))",
            gap: "0", borderTop: "1px solid rgba(255,255,255,0.06)",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
          }}>
            {QUICK.map(({ label, desc, href, icon: Icon }, idx) => (
              <ScrollReveal key={label} delay={idx * 60}>
                <div style={{ display: "block", height: "100%", textDecoration: "none" }}>
                  <div style={{
                    padding: "40px 32px",
                    height: "100%",
                    borderRight: "1px solid rgba(255,255,255,0.06)",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", 
                    display: "flex", flexDirection: "column",
                  }}>
                    <div style={{ marginBottom: "24px" }}>
                      <Icon style={{ width: 22, height: 22, color: "rgba(255,255,255,0.35)", transition: "color 0.3s ease" }} />
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
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ══ CTA — light ══ */}
        <section style={{ backgroundColor: "#f4f3f0", padding: "100px 8%" }}>
          <ScrollReveal>
            <div style={{ borderTop: "1px solid rgba(33,37,41,0.08)", paddingTop: "64px" }}>
              <p style={{
                fontFamily: "'Open Sans',sans-serif", fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(33,37,41,0.25)", marginBottom: "20px",
              }}>Ready to upgrade?</p>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "32px" }}>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond',Georgia,serif",
                  fontSize: "clamp(40px,7vw,100px)", fontWeight: 700,
                  color: "#212529", lineHeight: "0.9",
                  letterSpacing: "-0.02em", margin: 0,
                }}>Transform<br />Your Bank.</h2>
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
                    100% Government Act Compliant
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
          style={{ background: "#0d1d36" }}
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
