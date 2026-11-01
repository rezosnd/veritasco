"use client"

import { useState } from "react"
import { PageWrapper } from "@/components/page-wrapper"
import { VantraButton } from "@/components/vantra-button"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, GraduationCap, Utensils, ShieldCheck, CheckCircle2 } from "lucide-react"

const SERVICES = [
  {
    num: "01",
    title: "School ERP Solutions",
    desc: "Ideation, design, and development of complete ERP systems tailored specifically for modern educational institutions with real-time data sync.",
  },
  {
    num: "02",
    title: "Biometric Integration",
    desc: "Real-time, offline-capable biometric attendance tracking hardware integrated seamlessly with cloud infrastructure for accurate records.",
  },
  {
    num: "03",
    title: "Parent & Teacher Apps",
    desc: "Whether iOS or Android, we develop mobile apps that are user friendly, sophisticated, and deeply functional for daily school operations.",
  },
  {
    num: "04",
    title: "Data Analytics & AI",
    desc: "Advanced insights and AI-powered reporting to help schools understand patterns, improve outcomes, and make data-driven decisions.",
  },
  {
    num: "05",
    title: "Restaurant POS Solutions",
    desc: "End-to-end point of sale systems with real-time inventory, fast billing, and deep analytics built specifically for restaurants and cafes.",
  },
]

export default function AboutPage() {
  const [active, setActive] = useState(0)

  return (
    <PageWrapper
      badge="VeritasCo — About Us"
      title="We offer solutions for the ever-growing digital needs of schools and restaurants."
      description="Backed by a dedicated senior engineering team, we design, deploy, and support resilient operational software across India."
      breadcrumb={[{ label: "About", href: "/about" }]}
      bgImage="/about_hero_v3.png"
      darkHero
    >
      {/* ══ 1. WHO WE ARE (Dark Section) ══ */}
      <section className="section-dark padding-section">
        <div className="padding-global">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div>
                <div className="label-mono is-light mb-4">( Studio Profile )</div>
                <h2 className="heading-style-h2 text-white">
                  We are constantly
                  <br />
                  evolving.
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-base md:text-lg font-normal leading-relaxed text-[#f5f4f0]/75">
                  We act as an extended team for all your digital needs. Whether you need a full ERP overhaul or a focused POS solution, we are here to make that vision a reality — with speed, precision, and care.
                </p>
                <p className="text-base md:text-lg font-normal leading-relaxed text-[#f5f4f0]/75">
                  We have worked on some of the most advanced biometric setups and ERP systems in India — making them a seamless experience for administrators, parents, and teachers alike.
                </p>

                {/* Numbers Grid */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                  {[
                    { num: "50+", label: "Schools Served" },
                    { num: "1+", label: "Years Building" },
                    { num: "99%", label: "Uptime SLA" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="heading-style-h2 text-white mb-1">
                        {s.num}
                      </div>
                      <div className="label-mono is-light text-[10px]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. CORE SERVICES (Light Section - Vantra Editorial Split) ══ */}
      <section className="section-light padding-section">
        <div className="padding-global">
          <div className="container-max">
            <div className="section_header">
              <div>
                <h2 className="heading-style-h2 text-[#0a0a0a]">
                  Our core
                  <br />
                  services.
                </h2>
              </div>
              <div className="section_meta">
                <div className="section_meta-text">( 05 Capabilities )</div>
                <div className="section_meta-text">End-to-end technology</div>
              </div>
            </div>

            {/* Editorial Tab Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 pt-6">
              {/* Left Column: Interactive selector */}
              <div className="flex flex-col">
                {SERVICES.map((svc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActive(idx)}
                    className="flex items-center justify-between py-6 text-left group transition-all duration-300 border-b border-black/10 bg-transparent"
                  >
                    <div className="flex items-center gap-6">
                      <span className={`label-mono text-xs ${active === idx ? "text-[#0a0a0a]" : "text-black/30"}`}>
                        ( {svc.num} )
                      </span>
                      <span className={`font-display text-2xl md:text-3xl font-medium tracking-tight transition-colors ${active === idx ? "text-[#0a0a0a]" : "text-black/35 group-hover:text-black/70"}`}>
                        {svc.title}
                      </span>
                    </div>
                    <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 ${active === idx ? "text-[#0a0a0a] translate-x-1 -translate-y-1" : "text-black/20"}`} />
                  </button>
                ))}
              </div>

              {/* Right Column: Active Description Panel */}
              <div className="flex flex-col justify-center bg-white p-8 md:p-12 rounded-2xl border border-black/5 shadow-sm min-h-[300px]">
                <div className="label-mono mb-4">( Capability {SERVICES[active].num} )</div>
                <h3 className="heading-style-h3 text-[#0a0a0a] mb-4">
                  {SERVICES[active].title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#0a0a0a]/70">
                  {SERVICES[active].desc}
                </p>
                <div className="mt-8 pt-6 border-t border-black/5 flex items-center gap-4">
                  <VantraButton href="/contact" variant="dark">
                    Request Proposal
                  </VantraButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. WORKSPACE SHOWCASE ══ */}
      <section className="section-dark padding-section overflow-hidden">
        <div className="padding-global">
          <div className="container-max mb-12">
            <div className="section_header">
              <div>
                <h2 className="heading-style-h2 text-white">
                  Built for
                  <br />
                  reliability.
                </h2>
              </div>
              <div className="section_meta">
                <div className="section_meta-text">( Engineering Studio )</div>
                <div className="section_meta-text">Cloud-native infrastructure</div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] border border-white/10 shadow-2xl">
              <Image
                src="/workspace.png"
                alt="VeritasCo Engineering Workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-white font-display text-xl font-medium">
                  VeritasCo Headquarters & Deployment Lab
                </div>
                <div className="label-mono is-light">
                  Bhubaneswar · India
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. CLIENTS SECTION ══ */}
      <section className="section-light padding-section">
        <div className="padding-global">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="label-mono mb-3">( Trusted Scale )</div>
                <h2 className="heading-style-h2 text-[#0a0a0a] mb-6">
                  Our Clients.
                </h2>
                <p className="text-base md:text-lg text-[#0a0a0a]/70 leading-relaxed mb-8">
                  From elite international schools managing thousands of students to multi-chain fine dining restaurants operating at peak volume, our bespoke digital platforms are trusted to handle operations at any scale.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Bespoke Architecture", desc: "Every deployment is tailored to your unique operational flow and requirements." },
                    { title: "Zero Downtime Migration", desc: "Seamless transition from legacy systems with absolutely zero data loss." },
                    { title: "Dedicated Support Team", desc: "Direct access to our engineering team, available 24/7 to resolve issues instantly." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl border border-black/5 bg-white">
                      <div className="w-2 h-2 rounded-full bg-[#0a0a0a] shrink-0 mt-2" />
                      <div>
                        <h4 className="font-display font-semibold text-base text-[#0a0a0a]">{item.title}</h4>
                        <p className="text-sm text-[#0a0a0a]/65 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-black/10 shadow-xl">
                <Image
                  src="/clients.png"
                  alt="Our Clients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5. FOUNDERS / LEADERSHIP SECTION ══ */}
      <section className="section-dark padding-section">
        <div className="padding-global">
          <div className="container-max">
            <div className="section_header">
              <div>
                <h2 className="heading-style-h2 text-white">
                  The team behind
                  <br />
                  Veritasco.
                </h2>
              </div>
              <div className="section_meta">
                <div className="section_meta-text">( Leadership )</div>
                <div className="section_meta-text">Founders & Engineering</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Rehan Suman */}
              <article className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row gap-8 items-start">
                <div className="relative w-36 h-44 rounded-xl overflow-hidden shrink-0 border border-white/15">
                  <Image
                    src="/rehan.png"
                    alt="Rehan Suman — Co-Founder & CEO"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <span className="label-mono is-light text-[10px] px-2.5 py-1 rounded-full border border-white/15 bg-white/5 mb-3 inline-block">
                    Co-Founder &amp; CEO
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-white mb-2">
                    Rehan Suman
                  </h3>
                  <p className="text-sm text-[#f5f4f0]/70 leading-relaxed mb-6 font-normal">
                    Rehan Suman is the Co-Founder and CEO of Veritasco, leading product vision, strategic growth, and business development. He is the driving force behind Veritasco's mission to bring enterprise-grade ERP and POS technology to Indian schools and restaurants.
                  </p>
                  <Link
                    href="/founders#rehan-suman"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-white/90 hover:text-white"
                  >
                    <span>Read Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>

              {/* Aman Kumar */}
              <article className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row gap-8 items-start">
                <div className="relative w-36 h-44 rounded-xl overflow-hidden shrink-0 border border-white/15">
                  <Image
                    src="/aman.png"
                    alt="Aman Kumar — Co-Founder & CTO"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <span className="label-mono is-light text-[10px] px-2.5 py-1 rounded-full border border-white/15 bg-white/5 mb-3 inline-block">
                    Co-Founder &amp; CTO
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-white mb-2">
                    Aman Kumar
                  </h3>
                  <p className="text-sm text-[#f5f4f0]/70 leading-relaxed mb-6 font-normal">
                    Aman Kumar is the Co-Founder and CTO of Veritasco, architecting the cloud infrastructure and technical backbone of India's first biometric-integrated School ERP and QR-based Restaurant POS platform.
                  </p>
                  <Link
                    href="/founders#aman-kumar"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-white/90 hover:text-white"
                  >
                    <span>Read Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
