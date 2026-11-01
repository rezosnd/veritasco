"use client"

import Image from "next/image"
import Link from "next/link"

interface SiteFooterProps {
  onSupportOpen?: () => void
  onBookingOpen?: () => void
}

export function SiteFooter({ onSupportOpen, onBookingOpen }: SiteFooterProps) {
  return (
    <footer className="footer">
      <div className="padding-global">
        <div className="container-max">
          <div className="footer_wrapper">
            {/* Top Grid */}
            <div className="footer_top">
              {/* Left Brand Area */}
              <div className="footer_brand">
                <div className="footer_logo">
                  <Image
                    src="/logo.avif"
                    alt="VeritasCo Logo"
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                  <span className="font-display text-xl font-semibold text-white tracking-tight">
                    VeritasCo
                  </span>
                </div>
                <div className="footer_brand-content">
                  <p className="footer_paragraph">
                    VeritasCo builds India's premier School ERP, advanced Restaurant POS systems, and BazarChowk local commerce app. We partner with school administrators, restaurant owners, and enterprises to deliver resilient, cloud-native operational software.
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={onBookingOpen}
                    className="button is-light text-xs py-1.5 px-3"
                  >
                    <div className="button_text-col">
                      <div className="button_text-row">
                        <span className="button_text">Book a Demo</span>
                      </div>
                      <div className="button_text-row">
                        <span className="button_text">Book a Demo</span>
                      </div>
                    </div>
                    <div className="button_chip">
                      <div className="button_chip-row">
                        <div className="button_icon">
                          <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-3 h-3">
                            <path d="M5 13 13 5M6.5 5H13v6.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="button_chip-row is-second">
                        <div className="button_icon">
                          <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-3 h-3">
                            <path d="M5 13 13 5M6.5 5H13v6.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={onSupportOpen}
                    className="button is-ghost text-xs py-1.5 px-3 text-white/80 border-white/20"
                  >
                    <div className="button_text-col">
                      <div className="button_text-row">
                        <span className="button_text">Contact Team</span>
                      </div>
                      <div className="button_text-row">
                        <span className="button_text">Contact Team</span>
                      </div>
                    </div>
                    <div className="button_chip bg-white/10 text-white">
                      <div className="button_chip-row">
                        <div className="button_icon">
                          <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-3 h-3">
                            <path d="M5 13 13 5M6.5 5H13v6.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="button_chip-row is-second">
                        <div className="button_icon">
                          <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-3 h-3">
                            <path d="M5 13 13 5M6.5 5H13v6.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Navigation */}
              <div className="footer_nav">
                {/* Horizontal row of primary links */}
                <div className="footer_nav-list">
                  <Link href="/" className="footer_nav-link">
                    <div className="footer_nav-text">Home</div>
                  </Link>
                  <Link href="/about" className="footer_nav-link">
                    <div className="footer_nav-text">About</div>
                  </Link>
                  <Link href="/erp" className="footer_nav-link">
                    <div className="footer_nav-text">School ERP</div>
                  </Link>
                  <Link href="/pos" className="footer_nav-link">
                    <div className="footer_nav-text">Restaurant POS</div>
                  </Link>
                  <Link href="/testimonials" className="footer_nav-link">
                    <div className="footer_nav-text">Testimonials</div>
                  </Link>
                  <Link href="/contact" className="footer_nav-link">
                    <div className="footer_nav-text">Contact</div>
                  </Link>
                </div>

                {/* Sub-grid of detailed routes */}
                <div className="footer_links-grid">
                  <div>
                    <div className="label-mono is-light mb-3 text-[10px]">Products</div>
                    <ul className="space-y-2">
                      <li><Link href="/erp" className="footer_link">School ERP Suite</Link></li>
                      <li><Link href="/pos" className="footer_link">Restaurant POS</Link></li>
                      <li><Link href="/nidhi" className="footer_link">Nidhi Banking</Link></li>
                      <li><a href="https://bazarchowk.com/" target="_blank" rel="noopener noreferrer" className="footer_link">BazarChowk App</a></li>
                    </ul>
                  </div>

                  <div>
                    <div className="label-mono is-light mb-3 text-[10px]">ERP Deep Dive</div>
                    <ul className="space-y-2">
                      <li><Link href="/erp/features" className="footer_link">11 ERP Modules</Link></li>
                      <li><Link href="/erp/how-it-works" className="footer_link">How It Works</Link></li>
                      <li><Link href="/erp/compare" className="footer_link">Why Switch</Link></li>
                      <li><Link href="/category-proof" className="footer_link">Category Proof</Link></li>
                    </ul>
                  </div>

                  <div>
                    <div className="label-mono is-light mb-3 text-[10px]">Company & Legal</div>
                    <ul className="space-y-2">
                      <li><Link href="/founders" className="footer_link">Founders</Link></li>
                      <li><Link href="/join-us" className="footer_link">Careers / Join Us</Link></li>
                      <li><Link href="/faq" className="footer_link">FAQ</Link></li>
                      <li><Link href="/privacy-policy" className="footer_link">Privacy Policy</Link></li>
                      <li><Link href="/terms-of-service" className="footer_link">Terms of Service</Link></li>
                      <li><Link href="/refund-policy" className="footer_link">Refund Policy</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="footer_bottom">
              <div>
                © {new Date().getFullYear()} <span className="text-white font-medium">VeritasCo.Tech</span>. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <span>
                  Created with <span className="text-red-400">💓</span> by{" "}
                  <a
                    href="https://www.linkedin.com/in/rezosnd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link is-light"
                  >
                    Rezosnd
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
