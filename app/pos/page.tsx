"use client"

import { PageWrapper } from "@/components/page-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { InteractiveSteps } from "@/components/interactive-steps"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import BookingModal from "@/components/booking-modal"
import {
  ArrowRight, QrCode, MonitorSmartphone, CreditCard,
  BarChart3, ShieldCheck, Zap, Clock, Users
} from "lucide-react"

const features = [
  { icon: QrCode, title: "QR Table Ordering", desc: "Customers scan, order, and pay — no app download, no waiting." },
  { icon: MonitorSmartphone, title: "Real-time Kitchen Display", desc: "Orders go directly to kitchen display. Zero miscommunication." },
  { icon: CreditCard, title: "Auto Billing & UPI", desc: "Auto-generate bills and accept UPI, cards, and cash seamlessly." },
  { icon: BarChart3, title: "Sales Analytics", desc: "Daily, weekly, and monthly reports for informed decision-making." },
  { icon: ShieldCheck, title: "Secure Cloud Data", desc: "All your restaurant data encrypted and backed up automatically." },
  { icon: Zap, title: "Instant Setup", desc: "Go live in under 48 hours. No hardware installation needed." },
]

const steps = [
  { num: "01", title: "Customer Scans QR", desc: "Each table has a unique QR code. Customers scan with any phone." },
  { num: "02", title: "Browses & Orders", desc: "Fully digital menu with photos, prices, and dietary filters." },
  { num: "03", title: "Kitchen Gets Alert", desc: "Order appears instantly on the kitchen display system." },
  { num: "04", title: "Auto Bill Generated", desc: "Bill auto-calculates with tax, discounts, and service charge." },
]

export default function POSPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <PageWrapper
        title="Turn Every Table Into a Smart Ordering System"
        description="Give your customers the power to order instantly. Run your restaurant faster, smarter, and error-free."
        breadcrumb={[{ label: "Restaurant POS", href: "/pos" }]}
        darkHero
        bgImage="/pos-bg.png"
      >
        {/* ── HERO VISUAL — dark ── */}
        <section className="section-dark pulla-section pt-0 pb-20">
          <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
            <div className="max-w-3xl">
              <p className="text-2xl md:text-4xl font-light text-white/60 mb-10 leading-relaxed">
                No App. No Waiting. No Mistakes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="pulla-btn pulla-btn-primary"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="pulla-btn pulla-btn-outline-white"
                >
                  Book Live Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS — dark ── */}
        <section className="section-dark pulla-section">
          <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-[0.95]">
                  How It Works
                </h2>
                <p className="text-base text-white/45 font-light max-w-xs leading-relaxed">
                  From scan to payment — the entire flow in 4 steps.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12">
              <InteractiveSteps steps={steps} />
            </div>
          </div>
        </section>

        {/* ── FEATURES GRID — dark ── */}
        <section className="section-dark pulla-section">
          <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-[0.95] mb-16 md:mb-20">
                Built for Real<br />Restaurant Operations
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map(({ icon: Icon, title, desc }, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 60}>
                  <div className="pulla-card rounded-[24px] p-8 h-full">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
                    <p className="text-white/40 font-light leading-relaxed">{desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── AUTO-ANIMATED TESTIMONIAL SLIDER ── */}
        <section className="section-dark pulla-section overflow-hidden pt-0 relative">
          {/* Background Decorative Asset */}
          <div className="absolute top-0 right-[5%] w-[400px] h-[400px] opacity-35 pointer-events-none">
            <Image 
              src="/posshome.png" 
              alt="" 
              fill 
              className="object-contain"
            />
          </div>

          <div className="container mx-auto px-6 md:px-10 max-w-[1400px] relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-12">Loved by Local Restaurants</h2>
            </ScrollReveal>
            
            <TestimonialSlider testimonials={[
              { name: "The Spice Route", location: "Mumbai", quote: "No more wrong orders. The kitchen gets the ticket instantly. It completely transformed our weekend rush." },
              { name: "Curry Leaf Cafe", location: "Bangalore", quote: "Customers love scanning and paying without waiting for the waiter. Table turnover increased by 30%." },
              { name: "Tandoori Nights", location: "Delhi", quote: "Setup took 24 hours. The analytics dashboard shows exactly what sells best on which days." },
              { name: "Masala Art", location: "Hyderabad", quote: "The UPI integration directly in the POS saves us hours of manual reconciliation every night." }
            ]} />
          </div>
        </section>

        {/* ── STATS — dark ── */}
        <section className="section-dark pulla-section border-t border-white/10">
          <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "48h", label: "Setup Time" },
                  { value: "0", label: "Apps to Download" },
                  { value: "99%", label: "Order Accuracy" },
                  { value: "24/7", label: "Support" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="pulla-stat-number text-white mb-2">{stat.value}</div>
                    <p className="text-sm font-medium text-white/50 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA — dark ── */}
        <section className="section-dark pulla-section text-center">
          <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-[0.95] mb-8">
                Ready to Transform<br />Your Restaurant?
              </h2>
              <p className="text-xl text-white/40 font-light max-w-xl mx-auto mb-12 leading-relaxed">
                Join hundreds of restaurants running smarter with VeritasCo POS.
              </p>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="pulla-btn pulla-btn-primary text-base"
              >
                Book a Free Demo
              </button>
            </ScrollReveal>
          </div>
        </section>
      </PageWrapper>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
