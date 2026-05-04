"use client"

import { useState } from "react"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TransitionLink } from "@/components/transition-link"
import Image from "next/image"

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
      title="VeritasCo"
      description="We offer solutions for the ever-growing digital needs of schools and restaurants — with a clean, decisive process backed by a team of professionals."
      breadcrumb={[{ label: "About", href: "/about" }]}
      bgImage="/about_hero_v3.png"
    >
      {/* ══ WHO WE ARE — dark ══ */}
      <section className="section-dark pulla-section">
        <div className="container mx-auto px-8 md:px-14 max-w-[1400px]">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
              <div>
                <h2
                  className="pulla-section-title text-white mb-8 leading-none"
                >
                  We are constantly evolving.
                </h2>
              </div>
              <div className="space-y-6">
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: "1.8",
                    fontWeight: 300,
                  }}
                >
                  We act as an extended team for all your digital needs. Whether you need a full ERP overhaul or a focused POS solution, we are here to make that vision a reality — with speed, precision, and care.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: "1.8",
                    fontWeight: 300,
                  }}
                >
                  We have worked on some of the most advanced biometric setups and ERP systems in India — making them a seamless experience for administrators, parents, and teachers alike.
                </p>
                <div className="flex gap-12 pt-4">
                  {[
                    { num: "50+", label: "Schools Served" },
                    { num: "1+", label: "Years Building" },
                    { num: "99%", label: "Uptime SLA" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div
                        className="pulla-stat text-white"
                        style={{ fontSize: "clamp(32px,4vw,56px)" }}
                      >
                        {s.num}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.3)",
                          marginTop: "4px",
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══ CORE SERVICES — light (exact pulla tab layout) ══ */}
      <section className="section-light pulla-section">
        <div className="container mx-auto px-8 md:px-14 max-w-[1400px]">
          <ScrollReveal>
            <div className="mb-16 md:mb-20 pb-8" style={{ borderBottom: "1px solid rgba(33,37,41,0.08)" }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(33,37,41,0.3)",
                  marginBottom: "16px",
                }}
              >
                What we do
              </p>
              <h2
                className="pulla-section-title"
                style={{ color: "#212529" }}
              >
                Our core services
              </h2>
            </div>
          </ScrollReveal>

          {/* Tab layout — exact pulla */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: clickable titles */}
            <div className="flex flex-col">
              {SERVICES.map((svc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className="flex items-center gap-5 py-5 text-left group transition-all duration-300"
                  style={{
                    borderBottom: "1px solid rgba(33,37,41,0.06)",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(33,37,41,0.06)",
                    cursor: "pointer",
                    padding: "20px 0",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      color:
                        active === idx
                          ? "rgba(33,37,41,0.4)"
                          : "rgba(33,37,41,0.15)",
                      transition: "color 0.3s ease",
                      minWidth: "28px",
                    }}
                  >
                    {svc.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(20px,2.5vw,32px)",
                      fontWeight: 400,
                      color:
                        active === idx
                          ? "#212529"
                          : "rgba(33,37,41,0.25)",
                      transition: "color 0.4s cubic-bezier(0.12, 0.41, 0.11, 0.9)",
                      lineHeight: 1.1,
                    }}
                  >
                    {svc.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: active content */}
            <div className="relative min-h-[240px]">
              {SERVICES.map((svc, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: active === idx ? 1 : 0,
                    transform:
                      active === idx ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.6s cubic-bezier(0.12, 0.41, 0.11, 0.9)",
                    pointerEvents: active === idx ? "auto" : "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      color: "rgba(33,37,41,0.25)",
                      marginBottom: "16px",
                    }}
                  >
                    {svc.num}.
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(28px,3.5vw,48px)",
                      fontWeight: 400,
                      color: "#212529",
                      lineHeight: 1.1,
                      marginBottom: "20px",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "16px",
                      color: "rgba(33,37,41,0.6)",
                      lineHeight: "1.8",
                      fontWeight: 300,
                      maxWidth: "420px",
                    }}
                  >
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WORKSPACE MARQUEE — dark ══ */}
      <section className="section-dark overflow-hidden" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container mx-auto px-8 md:px-14 max-w-[1400px] mb-12">
          <ScrollReveal>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px,4vw,56px)",
                fontWeight: 300,
                color: "rgba(155,212,215,0.8)",
                letterSpacing: "-0.01em",
              }}
            >
              Work Space
            </h2>
          </ScrollReveal>
        </div>
        <div className="flex gap-5 w-[200vw] -ml-[5vw]">
          <div className="flex gap-5 animate-marquee">
            {[1, 2, 3, 4, 5, 6, 1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden flex-shrink-0"
                style={{
                  width: "clamp(260px,28vw,400px)",
                  aspectRatio: "4/3",
                }}
              >
                <Image
                  src="/workspace.png"
                  alt="Our Workspace"
                  fill
                  className="object-cover"
                  style={{ filter: "grayscale(20%) brightness(0.9)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLIENTS SECTION — light ══ */}
      <section className="section-light pulla-section overflow-hidden">
        <div className="container mx-auto px-8 md:px-14 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16 md:mb-24">
            <ScrollReveal animation="slide-left">
              <h2
                className="pulla-section-title"
                style={{ color: "#212529" }}
              >
                Our Clients
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  color: "rgba(33,37,41,0.6)",
                  marginTop: "24px",
                  lineHeight: "1.8",
                  fontWeight: 300,
                  maxWidth: "480px",
                }}
              >
                From elite international schools managing thousands of students to multi-chain fine dining restaurants operating at peak volume, our bespoke digital platforms are trusted to handle operations at any scale.
              </p>

              <div className="mt-12 space-y-8">
                {[
                  { title: "Bespoke Architecture", desc: "Every deployment is tailored to your unique operational flow and requirements." },
                  { title: "Zero Downtime Migration", desc: "Seamless transition from legacy systems with absolutely zero data loss." },
                  { title: "Dedicated Support Team", desc: "Direct access to our engineering team, available 24/7 to resolve issues instantly." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#0d5fb7] shrink-0" />
                    <div>
                      <h4 style={{ fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 600, color: "#212529" }}>{item.title}</h4>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(33,37,41,0.55)", marginTop: "6px", lineHeight: "1.6" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right">
              <div className="relative rounded-2xl overflow-hidden w-full shadow-2xl" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="/clients.png"
                  alt="Our Clients"
                  fill
                  className="object-cover"
                  style={{ filter: "brightness(0.95)" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Endless Client Marquee */}
        <div className="w-[200vw] -ml-[5vw] border-t border-b border-[rgba(33,37,41,0.05)] py-10 mt-10" style={{ background: "rgba(33,37,41,0.02)" }}>
          <div className="flex animate-marquee items-center">
            {[1, 2, 3, 4].map(group => (
              <div key={group} className="flex gap-16 md:gap-24 items-center shrink-0 px-8 md:px-12">
                {["Elite International Schools", "Fine Dining Chains", "Government Institutions", "Corporate Enterprises", "Global Franchises"].map((client, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(28px, 4vw, 48px)",
                      fontWeight: 400,
                      color: "rgba(33,37,41,0.8)",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {client} <span style={{ color: "#0d5fb7", marginLeft: "24px", opacity: 0.3 }}>✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Removed (Already in footer) */}
    </PageWrapper>
  )
}
