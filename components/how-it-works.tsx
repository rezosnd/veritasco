"use client"

import { ScrollReveal } from "./scroll-reveal"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Device in Classroom",
      description: "A handheld biometric device is kept in the classroom, ready for attendance marking.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Teacher Selects Section",
      description: "At the start of class, the teacher simply selects the class section from the device menu.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Students Scan Fingerprint",
      description:
        "The device is passed around and each student places their finger on the scanner for instant recognition.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Automatic Verification",
      description:
        "The technology matches their unique fingerprint and marks them present automatically in under 2 seconds.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Zero Proxy Attendance",
      description: "Biometric verification prevents classmates from proxy-marking attendance, ensuring 100% accuracy.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ]

  return (
    <ScrollReveal>
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 border-b border-[rgba(10,10,10,0.08)] pb-8">
          <div>
            <div className="label-mono mb-3 text-[#737373]">( Execution Sequence )</div>
            <h2 className="heading-style-h2 text-[#0a0a0a] tracking-tight">
              How Attendance Works
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#737373] max-w-xl font-normal leading-relaxed">
            Simple, fast, and foolproof biometric attendance in 5 easy steps — designed for Indian classrooms.
          </p>
        </div>

        {/* 5-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-3xl p-8 hover:border-[rgba(10,10,10,0.2)] transition-all duration-300 flex flex-col justify-between ${
                index === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-8">
                <span className="label-mono text-xs text-[#737373]">
                  STEP {step.number}
                </span>
                <div className="w-10 h-10 rounded-full border border-[rgba(10,10,10,0.08)] bg-[#faf9f5] flex items-center justify-center text-[#0a0a0a] group-hover:bg-[#0a0a0a] group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Main Content */}
              <div>
                <h3 className="heading-style-h4 text-[#0a0a0a] tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#737373] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Footnote */}
              <div className="mt-8 pt-4 border-t border-[rgba(10,10,10,0.06)] flex items-center justify-between text-[11px] label-mono text-[#a3a3a3]">
                <span>VERITASCO BIOMETRIC PROTOCOL</span>
                <span>VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Efficiency Callout */}
        <div className="mt-12 p-8 md:p-10 rounded-3xl border border-[rgba(10,10,10,0.08)] bg-[#faf9f5] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="label-mono text-xs text-[#737373]">( Class Efficiency Benchmark )</div>
            <div className="text-lg md:text-xl font-medium text-[#0a0a0a]">
              Complete attendance for 50 students in under 3 minutes
            </div>
            <p className="text-xs md:text-sm text-[#737373]">
              Save 15+ hours per week compared to manual roll-call registers.
            </p>
          </div>
          <div className="label-mono text-xs px-4 py-2 rounded-full border border-[rgba(10,10,10,0.12)] bg-[#ffffff] text-[#0a0a0a] font-medium shrink-0">
            ZERO PROXY GUARANTEE
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
