"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { PullaPreloader } from "@/components/pulla-preloader"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import { TransitionLink } from "@/components/transition-link"
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react"

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <>
      <PullaPreloader pageName="Contact" />
      <main style={{ backgroundColor: "#f4f3f0", minHeight: "100svh", overflowX: "hidden" }}>
        <MainNav
          onSupportOpen={() => setIsSupportOpen(true)}
          onBookingOpen={() => setIsBookingOpen(true)}
        />

        {/* ══ PULLA-EXACT CONTACT LAYOUT ══
            - Giant "Contact Us" fills the screen vertically
            - Content row (email | line | address | social) sits BELOW the title
            - No hero image, no hero section — just pure typography + light bg */}
        <section
          style={{
            minHeight: "100svh",
            backgroundColor: "#f4f3f0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "120px 0 0",
          }}
        >
          {/* Container */}
          <div style={{ padding: "0 8% 7%" }}>

            {/* Giant "Contact Us" - Pulla Exact Repeating Scroll Effect */}
            <div style={{ position: "relative", marginBottom: "40px" }}>
              
              {/* Layer 1: Primary Title (Solid with layered skew reveal) */}
              <div className="font-curtain contact-transition" style={{ position: "relative" }}>
                <div className="overflow-hidden" style={{ lineHeight: "0.88" }}>
                  <div className="animate-marquee">
                    {[1, 2, 3].map(i => (
                      <h1
                        key={i}
                        className="animate-skew-reveal-bg"
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "clamp(60px, 13.5vw, 190px)",
                          fontWeight: 700,
                          color: "#0d5fb7",
                          lineHeight: "0.88",
                          letterSpacing: "-0.02em",
                          textTransform: "uppercase",
                          margin: "0 40px 0 0",
                          display: "block",
                          transformOrigin: "left center"
                        }}
                      >
                        Contact Us
                      </h1>
                    ))}
                  </div>
                </div>
                
                {/* Foreground Black Mask Wipe */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, overflow: "hidden", lineHeight: "0.88", pointerEvents: "none" }}>
                  <div className="animate-marquee">
                    {[1, 2, 3].map(i => (
                      <span
                        key={i}
                        className="animate-skew-reveal-fg"
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "clamp(60px, 13.5vw, 190px)",
                          fontWeight: 700,
                          color: "#212529",
                          lineHeight: "0.88",
                          letterSpacing: "-0.02em",
                          textTransform: "uppercase",
                          margin: "0 40px 0 0",
                          display: "block",
                          transformOrigin: "left center",
                        }}
                      >
                        Contact Us
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Layer 2: Repeated Outline Titles (The 'title-repeat' Scroll Effect) */}
              {[1, 2].map((i) => (
                <div key={i} className="font-curtain contact-transition title-repeat" style={{ marginTop: "8px" }}>
                  <div className="overflow-hidden" style={{ lineHeight: "0.88" }}>
                    <div className="animate-marquee">
                      {[1, 2, 3].map(j => (
                        <h1
                          key={j}
                          className="animate-skew-reveal-bg"
                          style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: "clamp(60px, 13.5vw, 190px)",
                            fontWeight: 700,
                            color: "transparent",
                            WebkitTextStroke: "1.5px rgba(33,37,41,0.1)",
                            lineHeight: "0.88",
                            letterSpacing: "-0.02em",
                            textTransform: "uppercase",
                            margin: "0 40px 0 0",
                            display: "block",
                            transformOrigin: "left center",
                            animationDelay: `${0.1 + (i * 0.15)}s`
                          }}
                        >
                          Contact Us
                        </h1>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Content row — pulla exact: email | line | address | social ── */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "clamp(24px, 4vw, 64px)",
                marginTop: "clamp(40px, 6vw, 80px)",
                flexWrap: "wrap",
              }}
            >
              {/* Contact Info (Email & Phone) — large links */}
              <div style={{ flex: "2 1 240px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <h3 style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "9px", fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "rgba(33,37,41,0.3)", marginBottom: "8px",
                  }}>Email Us</h3>
                  <a
                    href="mailto:info@veritasco.tech"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "clamp(16px, 2vw, 24px)",
                      fontWeight: 600,
                      color: "#0d5fb7",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(13,95,183,0.2)",
                      paddingBottom: "4px",
                      display: "inline-block",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#0d5fb7")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(13,95,183,0.2)")}
                  >
                    info@veritasco.tech
                  </a>
                </div>

                <div>
                  <h3 style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "9px", fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "rgba(33,37,41,0.3)", marginBottom: "8px",
                  }}>Call Us</h3>
                  <a
                    href="tel:+918709442363"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "clamp(16px, 2vw, 24px)",
                      fontWeight: 600,
                      color: "#0d5fb7",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(13,95,183,0.2)",
                      paddingBottom: "4px",
                      display: "inline-block",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#0d5fb7")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(13,95,183,0.2)")}
                  >
                    +91 87094 42363
                  </a>
                </div>
              </div>

              {/* Vertical separator line */}
              <div style={{
                width: "1px",
                height: "80px",
                background: "rgba(33,37,41,0.12)",
                flexShrink: 0,
                alignSelf: "center",
              }} />

              {/* Address */}
              <div style={{ flex: "1 1 160px", display: "flex", flexDirection: "column" }}>
                <h3 style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "9px", fontWeight: 700,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "rgba(33,37,41,0.3)", marginBottom: "16px",
                }}>Visit Us</h3>
                <address style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "14px", fontWeight: 400,
                  color: "#212529", lineHeight: "1.8",
                  fontStyle: "normal",
                  position: "relative",
                  paddingLeft: "16px",
                  borderLeft: "2px solid #0d5fb7",
                }}>
                  <strong style={{ fontWeight: 700, color: "#0d5fb7", display: "block", marginBottom: "4px" }}>VeritasCo.Tech</strong>
                  Bhubaneswar, Odisha<br />
                  India — 751001
                </address>
              </div>

              {/* Social */}
              <div style={{ flex: "1 1 140px" }}>
                <h3 style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "9px", fontWeight: 700,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "rgba(33,37,41,0.3)", marginBottom: "16px",
                }}>Social Media</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { label: "LinkedIn",  href: "https://linkedin.com/company/veritascotech", icon: Linkedin },
                    { label: "Instagram", href: "https://instagram.com/veritascotech", icon: Instagram },
                    { label: "Facebook",  href: "https://facebook.com/veritascotech", icon: Facebook },
                    { label: "Twitter",   href: "https://twitter.com/veritascotech", icon: Twitter },
                  ].map(s => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center"
                        style={{
                          fontFamily: "'Open Sans', sans-serif",
                          fontSize: "14px", fontWeight: 600,
                          color: "#212529", textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#0d5fb7")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#212529")}
                      >
                        <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(33,37,41,0.15)] text-[rgba(33,37,41,0.6)] group-hover:border-[#0d5fb7] group-hover:bg-[#0d5fb7] group-hover:text-white transition-all duration-300 mr-3">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className="relative overflow-hidden inline-flex items-center">
                          {s.label}
                          <svg className="w-3 h-3 ml-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal footer */}
        <footer style={{
          background: "#2d3a52",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "32px 8%",
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between", gap: "16px",
        }}>
          <p style={{
            fontFamily: "'Open Sans',sans-serif", fontSize: "11px",
            color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em",
          }}>
            © {new Date().getFullYear()} VeritasCo.Tech
          </p>
          <div style={{ display: "flex", gap: "32px" }}>
            {[{l:"Home",h:"/"},{l:"School ERP",h:"/erp"},{l:"Restaurant POS",h:"/pos"},{l:"Privacy",h:"/privacy-policy"}].map(({l,h}) => (
              <TransitionLink key={l} href={h} style={{
                fontFamily: "'Open Sans',sans-serif", fontSize: "12px",
                fontWeight: 300, color: "rgba(255,255,255,0.3)", textDecoration: "none",
              }}>{l}</TransitionLink>
            ))}
          </div>
        </footer>

        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
      </main>
    </>
  )
}
