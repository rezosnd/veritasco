"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { SoftButton } from "./soft-button"

// Dropdown item interface
interface NavItem {
  label: string
  href: string
  items?: { label: string; href: string; description?: string }[]
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "/contact" },
]

export function MainNav({ 
  onSupportOpen, 
  onBookingOpen 
}: { 
  onSupportOpen?: () => void
  onBookingOpen?: () => void 
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <div className="relative z-50 bg-card border-b border-border/40">
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
            <Image
              src="/logo.avif"
              alt="VeritasCo.Tech Logo"
              width={40}
              height={40}
              priority
              quality={90}
              sizes="40px"
              className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg mr-2 p-0.5"
            />
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              VeritasCo.Tech
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group px-2 py-4"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.label === "Contact Us" && onSupportOpen) {
                      e.preventDefault();
                      onSupportOpen();
                    } else if (item.href.startsWith("#") && item.href !== "#") {
                      e.preventDefault();
                      const target = document.querySelector(item.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="flex items-center text-[15px] font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                  {item.items && (
                    <ChevronDown className="ml-1 w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.items && activeDropdown === item.label && (
                  <div className={`absolute top-full left-0 pt-2 animate-in fade-in slide-in-from-top-2 ${item.items.length > 4 ? "w-[600px] -ml-[150px]" : "w-[320px]"}`}>
                    <div className={`bg-card/95 backdrop-blur-xl soft-shadow rounded-2xl border border-border/50 p-3 overflow-hidden ${item.items.length > 4 ? "grid grid-cols-2 gap-2" : "flex flex-col gap-1"}`}>
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="group/item flex flex-col px-4 py-3 rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10"
                        >
                          <span className="text-[15px] font-semibold text-foreground group-hover/item:text-primary transition-colors">
                            {subItem.label}
                          </span>
                          {subItem.description && (
                            <span className="text-[13px] text-muted-foreground mt-1 leading-snug">
                              {subItem.description}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 ml-auto lg:ml-4">
            <button
              onClick={onSupportOpen}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-xl hover:bg-primary/5"
            >
              Support
            </button>
            <SoftButton
              size="sm"
              className="text-sm px-4 py-2"
              onClick={onBookingOpen}
            >
              Get Started
            </SoftButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary p-2 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border/40 last:border-0 pb-2 mb-2 last:mb-0 last:pb-0">
                {item.items ? (
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground px-3 py-2 text-[15px]">
                      {item.label}
                    </div>
                    <div className="space-y-1 pl-4 ml-3 border-l text-sm">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.label === "Contact Us" && onSupportOpen) {
                        e.preventDefault();
                        onSupportOpen();
                        setIsOpen(false);
                      } else if (item.href.startsWith("#") && item.href !== "#") {
                        e.preventDefault();
                        const target = document.querySelector(item.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                        setIsOpen(false);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="block px-3 py-2 text-[15px] font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            
            <div className="flex flex-col gap-3 pt-4 border-t border-border/40 mt-4">
              <SoftButton
                size="sm"
                className="w-full justify-center"
                onClick={() => {
                  onBookingOpen && onBookingOpen();
                  setIsOpen(false);
                }}
              >
                Get Started Now
              </SoftButton>
              <button
                onClick={() => {
                  onSupportOpen && onSupportOpen();
                  setIsOpen(false);
                }}
                className="w-full text-center text-[15px] font-medium text-muted-foreground hover:text-primary bg-primary/5 hover:bg-primary/10 py-3 rounded-xl transition-colors"
              >
                Help & Support
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
