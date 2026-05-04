"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

const MENU_ITEMS = [
  { num: "01", label: "HOME",           href: "/" },
  { num: "02", label: "SCHOOL ERP",     href: "/erp" },
  { num: "03", label: "RESTAURANT POS", href: "/pos" },
  { num: "04", label: "ABOUT",          href: "/about" },
  { num: "05", label: "CONTACT",        href: "/contact" },
]

const SOCIAL = [
  { label: "LINKEDIN",  href: "https://linkedin.com/company/veritascotech" },
  { label: "INSTAGRAM", href: "https://instagram.com/veritascotech" },
  { label: "FACEBOOK",  href: "https://facebook.com/veritascotech" },
  { label: "TWITTER",   href: "https://twitter.com/veritascotech" },
]

export function MainNav({
  onSupportOpen,
  onBookingOpen,
}: {
  onSupportOpen?: () => void
  onBookingOpen?: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const idx = MENU_ITEMS.findIndex(item =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    )
    setHovered(idx >= 0 ? idx : 0)
  }, [pathname])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const navigate = useCallback((href: string) => {
    setMenuOpen(false)
    if ("startViewTransition" in document) {
      ;(document as any).startViewTransition(() => router.push(href))
    } else {
      router.push(href)
    }
  }, [router])

  const navColor = menuOpen ? "#212529" : "#ffffff"

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav
        className={`pulla-nav ${scrolled && !menuOpen ? "scrolled" : ""}`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2.5 z-10 bg-transparent border-none"
          aria-label="VeritasCo Home"
        >
          <Image
            src="/logo.avif"
            alt="VeritasCo"
            width={34}
            height={34}
            priority
            className="w-8 h-8 transition-all duration-500"
            style={{ filter: menuOpen ? "brightness(0)" : "brightness(1)" }}
          />
          <span
            className="text-sm font-semibold tracking-tight transition-colors duration-500"
            style={{ fontFamily: "var(--font-body)", color: navColor }}
          >
            VeritasCo
          </span>
        </button>


        {/* 2-line hamburger */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => onBookingOpen?.()}
            className="hidden sm:inline-flex pulla-btn-nav"
            style={{ 
              borderColor: menuOpen ? "rgba(33,37,41,0.15)" : "rgba(255,255,255,0.25)",
              color: navColor
            }}
          >
            BOOK DEMO
          </button>
          <button
            onClick={() => setMenuOpen(v => !v)}
            className={`pulla-hamburger z-10 ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span style={{ background: navColor }} />
            <span style={{ background: navColor }} />
          </button>
        </div>
      </nav>

      {/* ── FULL-SCREEN MENU ── */}
      <div
        className={`pulla-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* Social links — rotated vertical left */}
        <div className="pulla-menu-social">
          {SOCIAL.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>

        {/* Main content */}
        <div className="pulla-menu-main">
          {/* Nav items — horizontal, all 5 visible */}
          <div
            className="pulla-menu-items scrollbar-hide"
            style={{
              gap: "clamp(30px, 5vw, 80px)",
              overflowX: "auto",
              paddingBottom: "20px",
              display: "flex",
              width: "100%",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {MENU_ITEMS.map((item, idx) => (
              <div
                key={item.href}
                className={`pulla-menu-item-wrap flex-shrink-0 ${hovered === idx ? "is-active" : ""}`}
                onMouseEnter={() => setHovered(idx)}
                onClick={() => setHovered(idx)}
              >
                {/* Concentric circles on active */}
                {hovered === idx && (
                  <div className="pulla-circles" aria-hidden="true">
                    <div className="pulla-circle pulla-circle-1" />
                    <div className="pulla-circle pulla-circle-2" />
                    <div className="pulla-circle pulla-circle-3" />
                  </div>
                )}

                <div className="pulla-item-reveal">
                  <button
                    onClick={() => navigate(item.href)}
                    className="pulla-item-inner py-4"
                    style={{ background: "none", border: "none", padding: "10px 0", textAlign: "left" }}
                  >
                    <span className="pulla-item-num">{item.num}</span>
                    <span className="pulla-item-label">{item.label}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows — exact pulla */}
          <div className="pulla-menu-arrows">
            <button
              className="pulla-arrow-btn"
              onClick={() => setHovered(h => Math.max(0, h - 1))}
              aria-label="Previous"
            >←</button>
            <div className="pulla-arrow-line" />
            <button
              className="pulla-arrow-btn"
              onClick={() => setHovered(h => Math.min(MENU_ITEMS.length - 1, h + 1))}
              aria-label="Next"
            >→</button>
          </div>

          {/* Active page label (replaces preview image) */}
          <div
            className="pulla-menu-preview-label"
            style={{
              marginTop: "24px",
              opacity: 0,
              transform: "translateY(12px)",
              transition: "all 0.5s cubic-bezier(0.16,1,0.3,1) 0.5s",
            }}
          >
            <span style={{
              fontFamily: "var(--font-body)", fontSize: "10px", fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "rgba(33,37,41,0.3)",
            }}>
              Navigate to {MENU_ITEMS[hovered]?.label}
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pulla-menu-bottom">
          <p>© {new Date().getFullYear()} VeritasCo.Tech</p>
          <button
            onClick={() => { onBookingOpen?.(); setMenuOpen(false) }}
            className="pulla-btn pulla-btn-primary"
            style={{ fontSize: "12px", padding: "10px 22px" }}
          >
            Book Demo
          </button>
        </div>
      </div>
    </>
  )
}
