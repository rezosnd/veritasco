"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { VantraButton } from "@/components/vantra-button"
import { CalDirectEmbed } from "@/components/cal-direct-embed"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import {
  GraduationCap,
  Utensils,
  ShoppingCart,
  Landmark,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
} from "lucide-react"

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqItems = [
    {
      q: "How does the biometric attendance hardware operate?",
      a: "Our handheld biometric devices operate in-hand anywhere across classrooms, assembly fields, or school buses. With full offline storage for up to 10,000 records, attendance marks in under 2 seconds per student and automatically synchronizes with the cloud when connected.",
    },
    {
      q: "How long does onboarding and deployment take?",
      a: "For schools, full deployment, staff onboarding, and device setup are completed in just 6 days. For Restaurant POS, we configure digital menus and kitchen displays within 48 hours.",
    },
    {
      q: "Can parents monitor attendance and pay school fees via mobile?",
      a: "Yes. Parents receive instant SMS alerts the moment a child checks in. The native parent mobile app provides real-time access to digital diaries, fee payment via UPI/cards, homework submissions, and bus tracking.",
    },
    {
      q: "What makes Restaurant POS different from standard billing software?",
      a: "VeritasCo Restaurant POS eliminates waiter bottlenecks with contactless QR table ordering. Customers scan, order, and pay from their phones while orders stream straight to the Kitchen Display System (KDS) in real time.",
    },
    {
      q: "Is Nidhi Software compliant with Government of India regulations?",
      a: "Strictly. Our Nidhi core banking software is designed purely as per the Government Nidhi Companies Act, providing full member KYC, share management, loans, term deposits, and 100+ automated MIS accounting reports.",
    },
  ]

  return (
    <>
      <main className="relative min-h-svh overflow-x-hidden bg-[#f5f4f0] text-[#0a0a0a]">
        {/* Top Minimal Floating Navbar */}
        <MainNav
          onSupportOpen={() => setIsSupportOpen(true)}
          onBookingOpen={() => setIsBookingOpen(true)}
        />

        {/* ══ 1. HERO SECTION (Framed Canvas with 4-Side Soft Bone Border) ══ */}
        <div className="hero_frame_wrap">
          <section data-surface="dark" data-screen-label="Hero" className="section_hero">
            {/* Cinematic Background Image */}
            <div className="hero_image">
              <Image
                src="/hero1.png"
                alt="VeritasCo Platform Background"
                fill
                priority
                quality={95}
                className="object-cover scale-105"
              />
            </div>

            <div className="hero_content">
              <div className="padding-global">
                <div className="container-max">
                  <div className="hero_layout">
                    {/* Left Column: Editorial Heading & Subtitle */}
                    <div className="max-w-2xl">
                      <h1 className="heading-style-h0 text-white mb-6">
                        Build.{" "}
                        <br />
                        Every System.{" "}
                        <br />
                        Smarter.
                      </h1>

                      <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-[#f5f4f0]/75 max-w-lg mb-8">
                        We engineer unified operational platforms — from India&apos;s #1 School ERP &amp; Handheld Biometrics to QR Restaurant POS, Nidhi Core Banking, and Custom Software Architecture.
                      </p>

                      <div className="buttons_row">
                        <VantraButton
                          href="#work"
                          variant="light"
                          ariaLabel="Explore Solutions"
                        >
                          Explore Solutions
                        </VantraButton>

                        <VantraButton
                          onClick={() => setIsBookingOpen(true)}
                          variant="ghost"
                          className="text-white border-white/30"
                          ariaLabel="Book a Free Demo"
                        >
                          Book a Free Demo
                        </VantraButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ══ 2. STATEMENT & MARQUEE SECTION ══ */}
        <section className="section_statement">
          <div className="padding-global">
            <div className="container-max">
              <div className="statement_wrap">
                <p className="statement_text">
                  VeritasCo builds School ERP, digital{" "}
                  <br className="hidden md:inline" />
                  POS, and local commerce. All of it{" "}
                  <br className="hidden md:inline" />
                  made to hold together.
                </p>

                {/* Infinite Partner / Institution Marquee */}
                <div className="statement_marquee">
                  <div className="statement_track">
                    {/* First Loop */}
                    <div className="statement_set">
                      <div className="flex items-center gap-3 font-display font-semibold text-xl tracking-tight text-black/60">
                        <GraduationCap className="w-6 h-6 text-black/40" />
                        <span>Delhi Public School</span>
                      </div>
                      <div className="flex items-center gap-3 font-display font-semibold text-xl tracking-tight text-black/60">
                        <Utensils className="w-6 h-6 text-black/40" />
                        <span>Spice Route Bistro</span>
                      </div>
                      <div className="flex items-center gap-3 font-display font-semibold text-xl tracking-tight text-black/60">
                        <GraduationCap className="w-6 h-6 text-black/40" />
                        <span>St. Mary's Convent</span>
                      </div>
                      <div className="flex items-center gap-3 font-display font-semibold text-xl tracking-tight text-black/60">
                        <ShoppingCart className="w-6 h-6 text-black/40" />
                        <span>BazarChowk Local</span>
                      </div>
                      <div className="flex items-center gap-3 font-display font-semibold text-xl tracking-tight text-black/60">
                        <Landmark className="w-6 h-6 text-black/40" />
                        <span>Modern Academy</span>
                      </div>
                    </div>

                    {/* Duplicate Loop for Continuous Marquee */}
                    <div className="statement_set" aria-hidden="true">
                      <div className="flex items-center gap-3 font-display font-semibold text-xl tracking-tight text-black/60">
                        <GraduationCap className="w-6 h-6 text-black/40" />
                        <span>Delhi Public School</span>
                      </div>
                      <div className="flex items-center gap-3 font-display font-semibold text-xl tracking-tight text-black/60">
                        <Utensils className="w-6 h-6 text-black/40" />
                        <span>Spice Route Bistro</span>
                      </div>
                      <div className="flex items-center gap-3 font-display font-semibold text-xl tracking-tight text-black/60">
                        <GraduationCap className="w-6 h-6 text-black/40" />
                        <span>St. Mary's Convent</span>
                      </div>
                      <div className="flex items-center gap-3 font-display font-semibold text-xl tracking-tight text-black/60">
                        <ShoppingCart className="w-6 h-6 text-black/40" />
                        <span>BazarChowk Local</span>
                      </div>
                      <div className="flex items-center gap-3 font-display font-semibold text-xl tracking-tight text-black/60">
                        <Landmark className="w-6 h-6 text-black/40" />
                        <span>Modern Academy</span>
                      </div>
                    </div>
                  </div>
                  <div className="statement_cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. WORK & SOLUTIONS GRID (Vantra Project Cards) ══ */}
        <section id="work" data-screen-label="Selected work" className="section_work padding-section">
          <div className="padding-global">
            <div className="container-max">
              {/* Header */}
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-[#0a0a0a]">
                    Solutions{" "}
                    <br className="hidden sm:inline" />
                    that last.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( Featured Solutions )</div>
                  <div className="section_meta-text">ERP, POS, Banking, Super App</div>
                </div>
              </div>

              {/* 2x2 Grid */}
              <div className="work_grid">
                {/* Card 1: School ERP */}
                <Link href="/erp" className="work_card group">
                  <Image
                    src="/erp_hero_bg.png"
                    alt="School ERP Platform"
                    fill
                    className="work_card-img"
                  />
                  <div className="work_panel">
                    <div className="work_panel-left">
                      <h3 className="work_client">School ERP+</h3>
                      <div className="work_meta-stack">
                        <span className="work_meta-year">2026</span>
                        <span className="work_meta-cat">Education &amp; Biometric</span>
                      </div>
                    </div>
                    <div className="work_cta-wrap">
                      <div className="work_link">
                        <span className="work_link-text">Discover platform</span>
                        <ArrowUpRight className="work_link-icon w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Card 2: Restaurant POS */}
                <Link href="/pos" className="work_card group">
                  <Image
                    src="/pos-bg.png"
                    alt="Restaurant POS System"
                    fill
                    className="work_card-img"
                  />
                  <div className="work_panel">
                    <div className="work_panel-left">
                      <h3 className="work_client">Restaurant POS®</h3>
                      <div className="work_meta-stack">
                        <span className="work_meta-year">2026</span>
                        <span className="work_meta-cat">QR Ordering &amp; KDS</span>
                      </div>
                    </div>
                    <div className="work_cta-wrap">
                      <div className="work_link">
                        <span className="work_link-text">Discover platform</span>
                        <ArrowUpRight className="work_link-icon w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Card 3: BazarChowk Super App */}
                <a
                  href="https://bazarchowk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work_card group"
                >
                  <Image
                    src="/clients.png"
                    alt="BazarChowk Super App"
                    fill
                    className="work_card-img object-cover"
                  />
                  <div className="work_panel">
                    <div className="work_panel-left">
                      <h3 className="work_client">BazarChowk+</h3>
                      <div className="work_meta-stack">
                        <span className="work_meta-year">2026</span>
                        <span className="work_meta-cat">Local Commerce Super App</span>
                      </div>
                    </div>
                    <div className="work_cta-wrap">
                      <div className="work_link">
                        <span className="work_link-text">Visit BazarChowk</span>
                        <ArrowUpRight className="work_link-icon w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* Card 4: Nidhi Banking Software */}
                <Link href="/nidhi" className="work_card group">
                  <Image
                    src="/workspace.png"
                    alt="Nidhi Banking Software"
                    fill
                    className="work_card-img"
                  />
                  <div className="work_panel">
                    <div className="work_panel-left">
                      <h3 className="work_client">Nidhi Banking®</h3>
                      <div className="work_meta-stack">
                        <span className="work_meta-year">2025</span>
                        <span className="work_meta-cat">Govt Act Core Banking</span>
                      </div>
                    </div>
                    <div className="work_cta-wrap">
                      <div className="work_link">
                        <span className="work_link-text">Discover platform</span>
                        <ArrowUpRight className="work_link-icon w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 4. SERVICES / PRACTICES (What we actually do.) ══ */}
        <section id="services" data-screen-label="Services" className="section_services padding-section">
          <div className="padding-global">
            <div className="container-max">
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-[#0a0a0a]">
                    What we{" "}
                    <br className="hidden sm:inline" />
                    actually do.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( Four core practices )</div>
                  <div className="section_meta-text">One senior engineering team</div>
                </div>
              </div>

              <div className="services_grid">
                {/* 001 */}
                <div className="services_card">
                  <div className="label-mono">( 001 )</div>
                  <div className="services_glyph-wrap">
                    <GraduationCap className="w-5 h-5 text-[#0a0a0a]" />
                  </div>
                  <div className="services_card-body">
                    <div className="services_card-label">School ERP</div>
                    <div className="services_card-text">
                      In-hand biometric attendance, automated fee management, student LMS, and parent tracking apps.
                    </div>
                  </div>
                </div>

                {/* 002 */}
                <div className="services_card">
                  <div className="label-mono">( 002 )</div>
                  <div className="services_glyph-wrap">
                    <Utensils className="w-5 h-5 text-[#0a0a0a]" />
                  </div>
                  <div className="services_card-body">
                    <div className="services_card-label">Restaurant POS</div>
                    <div className="services_card-text">
                      QR table ordering, real-time kitchen displays, auto-billing with instant UPI, and inventory sync.
                    </div>
                  </div>
                </div>

                {/* 003 */}
                <div className="services_card">
                  <div className="label-mono">( 003 )</div>
                  <div className="services_glyph-wrap">
                    <ShoppingCart className="w-5 h-5 text-[#0a0a0a]" />
                  </div>
                  <div className="services_card-body">
                    <div className="services_card-label">Local Commerce</div>
                    <div className="services_card-text">
                      BazarChowk super app connecting towns and villages with rapid 10-minute essential deliveries.
                    </div>
                  </div>
                </div>

                {/* 004 */}
                <div className="services_card">
                  <div className="label-mono">( 004 )</div>
                  <div className="services_glyph-wrap">
                    <Landmark className="w-5 h-5 text-[#0a0a0a]" />
                  </div>
                  <div className="services_card-body">
                    <div className="services_card-label">Nidhi Banking</div>
                    <div className="services_card-text">
                      Enterprise banking platform strictly per Government Act with IMPS/NEFT and 100+ MIS reports.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5. DIRECT CAL.COM INTERACTIVE SCHEDULER ══ */}
        <section id="custom-software" className="padding-section pt-0">
          <div className="padding-global">
            <div className="container-max">
              <div className="border border-[rgba(10,10,10,0.08)] bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-8 border-b border-[rgba(10,10,10,0.08)]">
                  <div>
                    <div className="label-mono mb-2 text-[#737373]">
                      ( Direct Calendar Integration · Cal.com )
                    </div>
                    <h2 className="heading-style-h2 text-[#0a0a0a] tracking-tight">
                      Create Custom Software{" "}
                      <br className="hidden sm:inline" />
                      &amp; Dedicated Services.
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-[#737373] max-w-md font-normal leading-relaxed">
                    Book a dedicated 30-minute discovery call directly with the VeritasCo engineering leadership on Cal.com. Pick your preferred date and time slot below.
                  </p>
                </div>

                {/* Live Embedded Cal.com Interactive Calendar */}
                <div className="max-w-4xl mx-auto">
                  <CalDirectEmbed height="620px" />
                </div>

                <div className="mt-8 pt-6 border-t border-[rgba(10,10,10,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="flex flex-wrap items-center gap-3 text-[#737373]">
                    <span>Direct Mail: <a href="mailto:info@veritasco.tech" className="text-[#0a0a0a] font-medium hover:underline">info@veritasco.tech</a></span>
                    <span>·</span>
                    <span>Direct Phone: <a href="tel:+918709442363" className="text-[#0a0a0a] font-medium hover:underline">+91-8709442363</a></span>
                  </div>
                  <span className="label-mono text-[11px] text-[#a3a3a3]">VERITASCO ENGINEERING DESK</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6. TESTIMONIALS (What clients say back.) ══ */}
        <section id="testimonials" data-screen-label="Testimonials" className="section_testimonials padding-section pt-0">
          <div className="padding-global">
            <div className="container-max">
              <div className="section_header">
                <div>
                  <h2 className="heading-style-h2 text-[#0a0a0a]">
                    What clients{" "}
                    <br className="hidden sm:inline" />
                    say back.
                  </h2>
                </div>
                <div className="section_meta">
                  <div className="section_meta-text">( 4.9 / 5 Rating )</div>
                  <div className="section_meta-text">Across 500+ schools &amp; venues since 2023</div>
                </div>
              </div>

              <div className="testimonial_grid">
                {/* Vantra Score Card */}
                <div className="testimonial_card is-score">
                  <div className="testimonial_score-row">
                    <div className="testimonial_score">
                      <span>4.9</span>
                      <span className="testimonial_score-max">/5</span>
                    </div>
                    <div className="testimonial_score-text">
                      Across 500+ school launches and restaurant setups, rated by the administrators and teams we shipped with.
                    </div>
                  </div>

                  <div className="testimonial_faces">
                    <div className="testimonial_stack">
                      <Image
                        src="/rehan.png"
                        alt="Client avatar"
                        width={34}
                        height={34}
                        className="testimonial_face"
                      />
                      <Image
                        src="/aman.png"
                        alt="Client avatar"
                        width={34}
                        height={34}
                        className="testimonial_face"
                      />
                    </div>
                    <div className="testimonial_faces-label">Trusted by 50,000+ daily users</div>
                  </div>
                </div>

                {/* Card 1 */}
                <div className="testimonial_card">
                  <div className="testimonial_person">
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center font-bold text-sm">
                      RK
                    </div>
                    <div className="testimonial_person-meta">
                      <div className="testimonial_name">Dr. Rajesh Kumar</div>
                      <div className="testimonial_role">Principal · Delhi Public School</div>
                    </div>
                  </div>
                  <div className="testimonial_quote">
                    "VeritasCo ERP transformed our attendance. 1,200 students are checked in under 12 minutes every morning with zero proxy marking. Outstanding engineering."
                  </div>
                </div>

                {/* Card 2 */}
                <div className="testimonial_card">
                  <div className="testimonial_person">
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center font-bold text-sm">
                      VS
                    </div>
                    <div className="testimonial_person-meta">
                      <div className="testimonial_name">Vikram Singh</div>
                      <div className="testimonial_role">Owner · Spice Route Bistro</div>
                    </div>
                  </div>
                  <div className="testimonial_quote">
                    "Table turnover increased by 35% in our first two weeks. Customers scan the QR, order instantly, and tickets stream straight to the kitchen display."
                  </div>
                </div>

                {/* Card 3 */}
                <div className="testimonial_card">
                  <div className="testimonial_person">
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center font-bold text-sm">
                      SS
                    </div>
                    <div className="testimonial_person-meta">
                      <div className="testimonial_name">Sunita Sharma</div>
                      <div className="testimonial_role">Director · Modern Academy</div>
                    </div>
                  </div>
                  <div className="testimonial_quote">
                    "Parents love the instant WhatsApp/SMS notification the moment their child enters school. Fee collection dues dropped by 40% in our first quarter."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 7. FAQ (Before you brief us.) ══ */}
        <section id="faq" data-screen-label="FAQ" className="section_faq padding-section pt-0">
          <div className="padding-global">
            <div className="container-max">
              <div className="faq_layout">
                {/* Left Column: Sticky Heading */}
                <div className="faq_head">
                  <h2 className="heading-style-h2 text-[#0a0a0a]">
                    Before{" "}
                    <br className="hidden sm:inline" />
                    you brief us.
                  </h2>
                  <p className="mt-4 text-sm text-[#737373] max-w-xs font-normal leading-relaxed">
                    Clear answers on implementation timelines, hardware specs, and software support.
                  </p>
                </div>

                {/* Right Column: Accordion */}
                <div className="faq_list">
                  {faqItems.map((item, idx) => {
                    const isOpen = openFaq === idx
                    return (
                      <div
                        key={idx}
                        className={`faq_row ${isOpen ? "is-open" : ""}`}
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                      >
                        <div className="faq_row-head">
                          <div className="faq_question">{item.q}</div>
                          <div className="faq_icon">
                            <div className="faq_icon-h" />
                            <div className="faq_icon-v" />
                          </div>
                        </div>
                        <div className="faq_answer">
                          <p className="faq_answer-text">{item.a}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 8. CAREERS / START DEPLOYMENT BANNER ══ */}
        <div className="hero_frame_wrap">
          <section id="careers" className="section_careers">
            <div className="careers_media">
              <Image
                src="/about_hero_v3.png"
                alt="VeritasCo Team"
                fill
                className="image-cover"
              />
            </div>

            <div className="padding-global">
              <div className="container-max">
                <div className="careers_content">
                  <div className="careers_title-wrap">
                    <h2 className="careers_title">
                      Build{" "}
                      <br className="hidden sm:inline" />
                      what’s next with us.
                    </h2>
                  </div>

                  <p className="careers_text">
                    Wherever you sit at VeritasCo, there is room to shape real institutions and leave a lasting mark.
                  </p>

                  <div className="buttons_row">
                    <VantraButton
                      onClick={() => setIsBookingOpen(true)}
                      variant="light"
                    >
                      Start a Project
                    </VantraButton>

                    <VantraButton
                      href="/join-us"
                      variant="dark"
                    >
                      Join the Team
                    </VantraButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ══ 9. FOOTER ══ */}
        <SiteFooter
          onSupportOpen={() => setIsSupportOpen(true)}
          onBookingOpen={() => setIsBookingOpen(true)}
        />
      </main>

      {/* Booking and Support Modals */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </>
  )
}
