"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X, Zap, Fingerprint, BarChart2, Building2, Star, HelpCircle, Home, MessageSquare } from "lucide-react"
import { SoftButton } from "./soft-button"

interface NavItem {
  label: string
  href: string
  items?: { label: string; href: string; description?: string }[]
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "#",
    items: [
      { label: "School ERP", href: "/erp", description: "Complete school management system" },
      { label: "Restaurant POS", href: "/pos", description: "Smart QR-based smart ordering system" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "contact" }, // sentinel — triggers modal
]

// Mobile shortcut grid items
const mobileNav = [
  { label: "School ERP", href: "/erp", icon: Building2 },
  { label: "Restaurant POS", href: "/pos", icon: Zap },
  { label: "About", href: "/about", icon: Star },
  { label: "Contact", href: "contact", icon: HelpCircle },
]

export function MainNav({
  onSupportOpen,
  onBookingOpen,
}: {
  onSupportOpen?: () => void
  onBookingOpen?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <div
      className={`sticky top-0 z-[999] transition-all duration-300 ${scrolled
          ? "bg-card/95 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-card border-b border-border/40"
        }`}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 min-w-0">
            <Image
              src="/logo.avif"
              alt="VeritasCo.Tech Logo"
              width={36}
              height={36}
              priority
              quality={90}
              sizes="36px"
              className="w-8 h-8 flex-shrink-0 drop-shadow-lg p-0.5"
            />
            {/* Hide text below 360px to prevent navbar overflow */}
            <span className="hidden min-[360px]:block text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 whitespace-nowrap">
              VeritasCo
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.label === "Contact" ? (
                  <button
                    onClick={onSupportOpen}
                    className="flex items-center gap-1 text-[13.5px] font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5"
                  >
                    Contact
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-[13.5px] font-medium transition-colors px-3 py-2 rounded-lg hover:bg-primary/5 ${isActive(item.href)
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary"
                      }`}
                  >
                    {item.label}
                    {item.items && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </Link>
                )}

                {/* Dropdown */}
                {item.items && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-in fade-in slide-in-from-top-2 w-[300px] z-50">
                    <div className="bg-card/98 backdrop-blur-xl soft-shadow-sm rounded-2xl border border-border/50 p-2 flex flex-col gap-1">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={`group/item flex flex-col px-4 py-3 rounded-xl transition-colors border border-transparent hover:border-primary/10 hover:bg-primary/5 ${isActive(sub.href) ? "bg-primary/8 border-primary/10" : ""
                            }`}
                        >
                          <span className={`text-[13.5px] font-semibold transition-colors ${isActive(sub.href) ? "text-primary" : "text-foreground group-hover/item:text-primary"}`}>
                            {sub.label}
                          </span>
                          {sub.description && (
                            <span className="text-[12px] text-muted-foreground mt-0.5 leading-snug">
                              {sub.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 ml-2">
            <button
              onClick={onSupportOpen}
              className="text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-xl hover:bg-primary/5"
            >
              Support
            </button>
            <SoftButton size="sm" className="text-[13px] px-4 py-1.5" onClick={onBookingOpen}>
              Book Demo
            </SoftButton>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <div className="lg:hidden flex items-center ml-auto gap-1.5 flex-shrink-0">
            {!isOpen && (
              <SoftButton
                size="sm"
                className="text-[11px] min-[400px]:text-xs px-2.5 min-[400px]:px-3 py-2 min-h-[40px] whitespace-nowrap"
                onClick={onBookingOpen}
              >
                <span className="hidden min-[400px]:inline">Book Demo</span>
                <span className="min-[400px]:hidden">Demo</span>
              </SoftButton>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2.5 rounded-xl hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-overlay"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── Rendered at portal level, covers full viewport */}
      {isOpen && (
        <div
          id="mobile-nav-overlay"
          className="lg:hidden fixed inset-0 top-14 bg-card/98 backdrop-blur-xl z-[998] overflow-y-auto overscroll-contain"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 24px)" }}
        >
          <div className="container mx-auto px-4 py-5">

            {/* Section shortcut grid */}
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Navigate to
            </p>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {mobileNav.map(({ label, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex flex-col items-center gap-2 p-3 rounded-2xl text-center transition-all border min-h-[72px] justify-center ${isActive(href)
                      ? "bg-primary/10 text-primary border-primary/20 font-semibold"
                      : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground border-transparent"
                    }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${isActive(href) ? "bg-primary/20" : "bg-background soft-shadow-sm"
                    }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-medium leading-tight">{label}</span>
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-border/50" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">More</span>
              <div className="flex-1 h-px bg-border/50" />
            </div>

            {/* Quick links list */}
            <div className="flex flex-col gap-0.5 mb-6">
              <Link href="/" className={`px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-colors flex items-center gap-3 ${pathname === "/" ? "text-primary bg-primary/5" : "text-foreground hover:text-primary hover:bg-primary/5"}`}>
                <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                Home
              </Link>
              <button
                onClick={onSupportOpen}
                className="text-left px-4 py-3.5 rounded-xl text-[15px] font-semibold text-foreground hover:text-primary hover:bg-primary/5 transition-colors flex items-center gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                Contact &amp; Support
              </button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border/40">
              <SoftButton
                size="sm"
                className="w-full justify-center py-3.5 text-sm"
                onClick={() => { onBookingOpen?.(); setIsOpen(false) }}
              >
                Book a Free Demo
              </SoftButton>
              <button
                onClick={() => { onSupportOpen?.(); setIsOpen(false) }}
                className="w-full text-center text-sm font-medium text-muted-foreground hover:text-primary bg-primary/5 hover:bg-primary/10 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Help &amp; Support
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
