"use client"

import { useState } from "react"
import { PageWrapper } from "@/components/page-wrapper"
import { VantraButton } from "@/components/vantra-button"
import { InteractiveSteps } from "@/components/interactive-steps"
import { TestimonialSlider } from "@/components/testimonial-slider"
import Image from "next/image"
import BookingModal from "@/components/booking-modal"
import {
  QrCode,
  MonitorSmartphone,
  CreditCard,
  BarChart3,
  ShieldCheck,
  Zap,
  ArrowUpRight,
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
  { num: "01", title: "Customer Scans QR", desc: "Each table has a unique QR code. Customers scan with any phone camera." },
  { num: "02", title: "Browses & Orders", desc: "Fully digital menu with photos, prices, customizations, and dietary filters." },
  { num: "03", title: "Kitchen Gets Alert", desc: "Order appears instantly on the kitchen display system (KDS) screen." },
  { num: "04", title: "Auto Bill Generated", desc: "Bill auto-calculates with tax, discounts, and instant UPI checkout." },
]

export default function POSPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <PageWrapper
        badge="Restaurant Technology · QSR & Dining"
        title="Turn Every Table Into a Smart Ordering System."
        description="Give your customers the power to order instantly. Run your restaurant faster, smarter, and error-free with contactless QR and real-time KDS."
        breadcrumb={[{ label: "Restaurant POS", href: "/pos" }]}
        darkHero
        bgImage="/pos-bg.png"
      >
        {/* ══ 1. HERO CALLOUT ══ */}
        <section className="section-dark padding-section pt-0 pb-16">
          <div className="padding-global">
            <div className="container-max">
              <div className="p-8 md:p-12 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <div className="label-mono is-light mb-2">Zero friction operations</div>
                  <h3 className="heading-style-h3 text-white mb-2">
                    No App. No Waiting. No Mistakes.
                  </h3>
                  <p className="text-sm md:text-base text-white/60">
                    Eliminate 80% of ordering delays and streamline kitchen operations.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <VantraButton onClick={() => setIsBookingOpen(true)} variant="light">
                    Get Started Now
                  </VantraButton>
                  <VantraButton onClick={() => setIsBookingOpen(true)} variant="ghost" className="text-white border-white/20">
                    Book Live Demo
                  </VantraButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. HOW IT WORKS ══ */}
        <section className="section-dark padding-section pt-0">
          <div className="padding-global">
            <div className="container-max">
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-white">
                    How it
                    <br />
                    works.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( 04 Steps )</div>
                  <div className="section_meta-text">From scan to automated payment</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                {steps.map((st) => (
                  <div key={st.num} className="p-8 md:p-10 border-r border-b border-white/10 hover:bg-white/[0.03] transition-colors">
                    <span className="label-mono is-light text-[10px] mb-6 block">( {st.num} )</span>
                    <h3 className="font-display text-xl font-semibold text-white mb-3">
                      {st.title}
                    </h3>
                    <p className="text-sm text-[#f5f4f0]/65 leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. BUILT FOR REAL OPERATIONS ══ */}
        <section className="section-dark-secondary padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-white">
                    Built for real
                    <br />
                    restaurant operations.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( High Volume )</div>
                  <div className="section_meta-text">Peak hour resilience</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map(({ icon: Icon, title, desc }, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-xl font-semibold text-white mb-3">
                        {title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed font-normal">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 4. REEL / INTERFACE SHOWCASE ══ */}
        <section className="section-dark padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="section_header is-center text-center">
                <div className="label-mono is-light mb-2">Live Interface</div>
                <h2 className="heading-style-h1 text-white">
                  Kitchen Display &amp;
                  <br />
                  Counter Checkout.
                </h2>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 shadow-2xl">
                <Image
                  src="/posshome.png"
                  alt="Restaurant POS Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5. TESTIMONIAL SLIDER ══ */}
        <section className="section-light padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-[#0a0a0a]">
                    Loved by chefs
                    <br />
                    &amp; restaurateurs.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( 4.8 / 5 Rating )</div>
                  <div className="section_meta-text">Across casual dining, cafes, and QSRs</div>
                </div>
              </div>

              <TestimonialSlider />
            </div>
          </div>
        </section>

        {/* ══ 6. CTA BANNER ══ */}
        <section className="section-dark padding-section text-center">
          <div className="padding-global">
            <div className="container-max max-w-2xl mx-auto">
              <div className="label-mono is-light mb-4">Go live in 48 hours</div>
              <h2 className="heading-style-h1 text-white mb-6">
                Upgrade your dining floor.
              </h2>
              <p className="text-base text-white/60 leading-relaxed mb-10">
                Book a live demo today and see how VeritasCo Restaurant POS turns tables faster and boosts your average ticket size.
              </p>
              <div className="flex justify-center">
                <VantraButton onClick={() => setIsBookingOpen(true)} variant="light">
                  Book Live Demo
                </VantraButton>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
