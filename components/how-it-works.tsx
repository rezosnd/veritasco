"use client"

import { useEffect, useRef, useState } from "react"
import { ScrollReveal } from "./scroll-reveal"

export function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const steps = [
    {
      number: "01",
      title: "Device in Classroom",
      description: "A handheld biometric device is kept in the classroom, ready for attendance marking.",
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSteps((prev) => new Set(prev).add(index))
              }
            })
          },
          { threshold: 0.2 },
        )

        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <ScrollReveal>
      <section className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">How Attendance Works</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Simple, fast, and foolproof biometric attendance in 5 easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el
                }}
                className={`relative soft-shadow bg-background rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-700 ease-out hover:scale-105 ${
                  isMobile || visibleSteps.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center soft-shadow">
                  <span className="text-primary-foreground font-bold text-sm md:text-base">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 soft-shadow-inset">
                  <div className="w-10 h-10 md:w-12 md:h-12 text-primary">{step.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{step.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>

                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent opacity-30" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 md:mt-16 text-center">
            <div className="soft-shadow-inset bg-primary/10 rounded-xl md:rounded-2xl p-6 md:p-8 inline-block">
              <p className="text-sm md:text-base text-primary font-semibold mb-2">
                ⚡ Complete attendance for 50 students in under 3 minutes
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Save 15+ hours per week compared to manual attendance
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
