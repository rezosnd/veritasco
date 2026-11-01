"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

interface MainNavProps {
  onSupportOpen?: () => void
  onBookingOpen?: () => void
}

export function MainNav({ onSupportOpen, onBookingOpen }: MainNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false)
    setSolutionsOpen(false)
    setAboutOpen(false)
  }, [pathname])

  // Prevent background scroll when nav panel is expanded
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const navigate = useCallback((href: string) => {
    setMenuOpen(false)
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer")
      return
    }
    if ("startViewTransition" in document) {
      ;(document as any).startViewTransition(() => router.push(href))
    } else {
      router.push(href)
    }
  }, [router])

  return (
    <>
      {/* Background Dimming Scrim */}
      <div
        className={`header-bg ${menuOpen ? "is-visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <header className="header">
        <div className={`nav_shell ${menuOpen ? "is-expanded" : ""} ${scrolled ? "is-scrolled" : ""}`}>
          {/* Top Bar Pill */}
          <div className="nav_bar">
            {/* Logo Link */}
            <Link
              href="/"
              className="nav_logo-link"
              aria-label="VeritasCo Home"
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/logo.avif"
                alt="VeritasCo Logo"
                width={26}
                height={26}
                priority
                className="logo_image"
              />
              <span className="text-sm font-semibold tracking-tight text-white font-sans">
                VeritasCo
              </span>
            </Link>

            {/* Center Tagline */}
            <div className="nav_page-title text-white/70">
              One ecosystem, zero handoffs
            </div>

            {/* Right Buttons: Quick Demo + 4-Dot Glyph */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  onBookingOpen?.()
                }}
                className="hidden sm:inline-flex items-center text-[11px] font-mono uppercase tracking-[0.14em] text-white/90 hover:text-white bg-white/10 hover:bg-white/15 px-3.5 py-1.5 rounded-full border border-white/20 transition-all cursor-pointer"
              >
                Book Demo
              </button>

              <button
                type="button"
                role="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="nav_menu-button"
              >
                <div className="nav_menu-glyph">
                  <div className="nav_menu-dot is-a" />
                  <div className="nav_menu-dot is-b" />
                  <div className="nav_menu-dot is-c" />
                  <div className="nav_menu-dot is-d" />
                </div>
              </button>
            </div>
          </div>

          {/* Navigation Overlay Panel */}
          <div className="nav_panel">
            <div className="nav_panel-inner">
              <nav className="nav_menu-list" aria-label="Main navigation menu">
                {/* Home */}
                <div
                  className="nav_menu-row group"
                  onClick={() => navigate("/")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="nav_menu-label text-white font-medium text-lg md:text-xl">Home</span>
                  <div className="nav_menu-icon text-white/70 group-hover:text-white">
                    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M5 13 13 5M6.5 5H13v6.5" />
                    </svg>
                  </div>
                </div>

                {/* Solutions (Submenu) */}
                <div className="nav_submenu">
                  <div
                    className="nav_menu-row group"
                    onClick={() => setSolutionsOpen((prev) => !prev)}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="nav_menu-label text-white font-medium text-lg md:text-xl">Solutions</span>
                    <div className="nav_menu-icon text-white/70 group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-4 h-4 transition-transform duration-300 ${solutionsOpen ? "rotate-45" : ""}`}
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>

                  <div className={`nav_submenu-wrap ${solutionsOpen ? "is-open" : ""}`}>
                    <div className="nav_submenu-list space-y-1 my-2">
                      <div
                        className="nav_submenu-link cursor-pointer flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                        onClick={() => navigate("/erp")}
                      >
                        <div>
                          <div className="font-medium text-white text-sm">School ERP Suite</div>
                          <div className="text-xs text-white/40 font-mono">Biometric Attendance, Fees & LMS</div>
                        </div>
                        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-white/60">
                          <path d="M5 13 13 5M6.5 5H13v6.5" />
                        </svg>
                      </div>

                      <div
                        className="nav_submenu-link cursor-pointer flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                        onClick={() => navigate("/pos")}
                      >
                        <div>
                          <div className="font-medium text-white text-sm">Restaurant POS</div>
                          <div className="text-xs text-white/40 font-mono">QR Table Ordering & Kitchen Display</div>
                        </div>
                        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-white/60">
                          <path d="M5 13 13 5M6.5 5H13v6.5" />
                        </svg>
                      </div>

                      <div
                        className="nav_submenu-link cursor-pointer flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                        onClick={() => navigate("/nidhi")}
                      >
                        <div>
                          <div className="font-medium text-white text-sm">Nidhi Banking Software</div>
                          <div className="text-xs text-white/40 font-mono">Govt Act Compliant Core Banking</div>
                        </div>
                        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-white/60">
                          <path d="M5 13 13 5M6.5 5H13v6.5" />
                        </svg>
                      </div>

                      <div
                        className="nav_submenu-link cursor-pointer flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                        onClick={() => navigate("https://bazarchowk.com/")}
                      >
                        <div>
                          <div className="font-medium text-white text-sm">BazarChowk Super App</div>
                          <div className="text-xs text-white/40 font-mono">India's Local Commerce App</div>
                        </div>
                        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-white/60">
                          <path d="M5 13 13 5M6.5 5H13v6.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About (Submenu) */}
                <div className="nav_submenu">
                  <div
                    className="nav_menu-row group"
                    onClick={() => setAboutOpen((prev) => !prev)}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="nav_menu-label text-white font-medium text-lg md:text-xl">About</span>
                    <div className="nav_menu-icon text-white/70 group-hover:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-4 h-4 transition-transform duration-300 ${aboutOpen ? "rotate-45" : ""}`}
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>

                  <div className={`nav_submenu-wrap ${aboutOpen ? "is-open" : ""}`}>
                    <div className="nav_submenu-list space-y-1 my-2">
                      <div
                        className="nav_submenu-link cursor-pointer flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                        onClick={() => navigate("/about")}
                      >
                        <span className="font-medium text-white text-sm">The Company Overview</span>
                        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-white/60">
                          <path d="M5 13 13 5M6.5 5H13v6.5" />
                        </svg>
                      </div>

                      <div
                        className="nav_submenu-link cursor-pointer flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                        onClick={() => navigate("/founders")}
                      >
                        <span className="font-medium text-white text-sm">Founders & Leadership</span>
                        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-white/60">
                          <path d="M5 13 13 5M6.5 5H13v6.5" />
                        </svg>
                      </div>

                      <div
                        className="nav_submenu-link cursor-pointer flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                        onClick={() => navigate("/category-proof")}
                      >
                        <span className="font-medium text-white text-sm">Category Proof & Innovation</span>
                        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-white/60">
                          <path d="M5 13 13 5M6.5 5H13v6.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div
                  className="nav_menu-row group"
                  onClick={() => navigate("/testimonials")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="nav_menu-label text-white font-medium text-lg md:text-xl">Testimonials</span>
                  <div className="nav_menu-icon text-white/70 group-hover:text-white">
                    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M5 13 13 5M6.5 5H13v6.5" />
                    </svg>
                  </div>
                </div>

                {/* FAQ */}
                <div
                  className="nav_menu-row group"
                  onClick={() => navigate("/faq")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="nav_menu-label text-white font-medium text-lg md:text-xl">FAQ</span>
                  <div className="nav_menu-icon text-white/70 group-hover:text-white">
                    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M5 13 13 5M6.5 5H13v6.5" />
                    </svg>
                  </div>
                </div>

                {/* Careers */}
                <div
                  className="nav_menu-row group"
                  onClick={() => navigate("/join-us")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="nav_menu-label text-white font-medium text-lg md:text-xl">Careers</span>
                  <div className="nav_menu-icon text-white/70 group-hover:text-white">
                    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M5 13 13 5M6.5 5H13v6.5" />
                    </svg>
                  </div>
                </div>

                {/* Contact */}
                <div
                  className="nav_menu-row group"
                  onClick={() => navigate("/contact")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="nav_menu-label text-white font-medium text-lg md:text-xl">Contact</span>
                  <div className="nav_menu-icon text-white/70 group-hover:text-white">
                    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M5 13 13 5M6.5 5H13v6.5" />
                    </svg>
                  </div>
                </div>
              </nav>

              {/* Bottom Quick Demo Button in Nav Panel */}
              <div className="nav_panel-cta-wrap mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false)
                    onBookingOpen?.()
                  }}
                  className="button is-light w-full justify-between"
                >
                  <div className="button_text-col">
                    <div className="button_text-row">
                      <span className="button_text">Book a Free Demo</span>
                    </div>
                    <div className="button_text-row">
                      <span className="button_text">Book a Free Demo</span>
                    </div>
                  </div>
                  <div className="button_chip">
                    <div className="button_chip-row">
                      <div className="button_icon">
                        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-3.5 h-3.5">
                          <path d="M5 13 13 5M6.5 5H13v6.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false)
                    onSupportOpen?.()
                  }}
                  className="button is-ghost w-full justify-between text-white border-white/20"
                >
                  <div className="button_text-col">
                    <div className="button_text-row">
                      <span className="button_text">24/7 Support</span>
                    </div>
                    <div className="button_text-row">
                      <span className="button_text">24/7 Support</span>
                    </div>
                  </div>
                  <div className="button_chip">
                    <div className="button_chip-row">
                      <div className="button_icon">
                        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-3.5 h-3.5">
                          <path d="M5 13 13 5M6.5 5H13v6.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
