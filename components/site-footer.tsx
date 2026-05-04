"use client"

import Image from "next/image"
import { TransitionLink } from "./transition-link"

export function SiteFooter({ onSupportOpen }: { onSupportOpen: () => void }) {
  return (
    <footer className="section-dark border-t pulla-section pt-20 pb-10" style={{ borderColor: "rgba(255,255,255,0.06)", fontFamily: "var(--font-body)" }}>
      <div className="container mx-auto px-8 md:px-14 max-w-[1400px]">
        <div className="mb-16">
          <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>
            Let's keep in touch
          </p>
          <button onClick={onSupportOpen} className="pulla-link text-left" style={{ background: "none", border: "none", padding: 0 }}>
            <span
              className="font-light transition-colors duration-300"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px,3.5vw,52px)", color: "rgba(255,255,255,0.6)", letterSpacing: "-0.01em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              info@veritasco.tech
            </span>
          </button>
        </div>

        <div className="pulla-divider mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.avif" alt="VeritasCo" width={22} height={22} className="opacity-50" />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.45)" }}>VeritasCo</span>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)", fontWeight: 300, lineHeight: "1.7", maxWidth: "220px" }}>
              Complete digital solutions for modern businesses.
            </p>
          </div>
          {[
            { title: "Products", links: [{ l: "School ERP", h: "/erp" }, { l: "Restaurant POS", h: "/pos" }] },
            { title: "Company",  links: [{ l: "About Us", h: "/about" }, { l: "Testimonials", h: "/testimonials" }, { l: "Contact", action: onSupportOpen }] },
            { title: "Support",  links: [{ l: "FAQ", h: "/faq" }, { l: "Privacy Policy", h: "/privacy-policy" }] },
          ].map((col) => (
            <div key={col.title}>
              <h3 style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.18)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "14px" }}>{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map(({ l, h, action }: any) => (
                  <li key={l}>
                    {action ? (
                      <button onClick={action} className="pulla-link" style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.45)", background: "none", border: "none", padding: 0, cursor: "pointer" }}>{l}</button>
                    ) : (
                      <TransitionLink href={h} className="pulla-link" style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{l}</TransitionLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pulla-divider mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3" style={{ fontSize: "11px", color: "rgba(255,255,255,0.18)" }}>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <p>© {new Date().getFullYear()} VeritasCo.Tech. All rights reserved.</p>
            <p>
              Created with <span className="text-red-500/60">💓</span> by{" "}
              <a 
                href="https://www.linkedin.com/in/rezosnd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors underline underline-offset-4 decoration-white/10"
              >
                Rezosnd
              </a>
            </p>
          </div>
          <TransitionLink href="/privacy-policy" style={{ color: "rgba(255,255,255,0.18)", textDecoration: "none" }}>Privacy Policy</TransitionLink>
        </div>
      </div>
    </footer>
  )
}
