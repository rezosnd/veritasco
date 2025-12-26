"use client"

import { AnimatedWaves } from "@/components/animated-waves"
import { CountdownTimer } from "@/components/countdown-timer"
import { FeatureCard } from "@/components/feature-card"
import { SoftButton } from "@/components/soft-button"
import { HeroDevice } from "@/components/hero-device"
import { FeatureTable } from "@/components/feature-table"
import { MobileScrollIndicator } from "@/components/mobile-scroll-indicator"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StatsCounter } from "@/components/stats-counter"
import { ComparisonTable } from "@/components/comparison-table"
import { Timeline } from "@/components/timeline"
import { HowItWorks } from "@/components/how-it-works"
import { ChristmasSnow } from "@/components/christmas-snow"
import { SantaHat } from "@/components/santa-hat"
import Image from "next/image"
import { useState } from "react"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <main className="relative min-h-screen">
      <ChristmasSnow />
      <AnimatedWaves />
      <MobileScrollIndicator />

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="VeritasCo Logo"
            width={50}
            height={50}
            className="md:w-[60px] md:h-[60px] drop-shadow-lg"
          />
          <div className="flex items-center gap-2 md:gap-4">
            <SoftButton variant="secondary" onClick={() => window.location.href = '/join-us'}>
              Join Us as Team Member
            </SoftButton>
            <button
              onClick={() => setIsSupportOpen(true)}
              className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-xl hover:bg-background/50"
            >
              Support
            </button>
            <SoftButton onClick={() => setIsBookingOpen(true)}>Get Started</SoftButton>
          </div>
        </div>
      </nav>

      <section className="relative z-10 container mx-auto px-4 md:px-6 pt-8 md:pt-12 pb-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-foreground leading-tight text-balance mb-2">
          India's First Complete School Management ERP
          <br />
          <span className="text-primary">with In-Hand Biometric Devices</span>
        </h1>
      </section>

      {/* NEW YEAR SPECIAL OFFER SECTION */}
      <section className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="relative max-w-4xl mx-auto">
          
          {/* THE SANTA HAT - Now anchored to the left for mobile & desktop */}
          <SantaHat />

          {/* Decorative Layers */}
          <div className="absolute inset-0 bg-card rounded-[2rem] md:rounded-[2.5rem] rotate-1 soft-shadow opacity-30" />
          <div className="absolute inset-0 bg-card rounded-[2rem] md:rounded-[2.5rem] -rotate-1 soft-shadow opacity-20" />
          
          {/* Main Card Content */}
          <div className="relative soft-shadow bg-gradient-to-br from-card to-card/95 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border border-border/40 backdrop-blur-md">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full animate-pulse" />
              <h3 className="text-xl md:text-4xl font-extrabold text-center text-foreground tracking-tight">
                New Year Special Offer
              </h3>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full animate-pulse" />
            </div>

            <div className="relative mb-6 md:mb-10">
              <CountdownTimer />
            </div>

            <div className="text-center space-y-4">
              <div className="inline-block bg-primary/10 px-6 py-2 md:px-8 md:py-3 rounded-xl md:rounded-2xl border border-primary/20">
                <p className="text-base md:text-2xl font-bold text-primary">
                  🎁 10-20% Off Based on School Strength!
                </p>
              </div>
              <p className="text-xs md:text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
                Offer ends January 30, 2026. Join over 500+ schools securing their campus today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="relative z-10 container mx-auto px-4 md:px-6 py-4 md:py-8">
        <div className="relative">
          <div className="absolute inset-0 bg-card rounded-2xl md:rounded-3xl rotate-1 soft-shadow opacity-30" />
          <div className="absolute inset-0 bg-card rounded-2xl md:rounded-3xl -rotate-1 soft-shadow opacity-20" />
          <div className="relative soft-shadow bg-gradient-to-br from-card to-card/95 rounded-2xl md:rounded-3xl p-4 md:p-8 border border-border/30">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <h3 className="text-base md:text-lg font-bold text-foreground">New Year Special Offer</h3>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
            <CountdownTimer />
            <div className="text-center mt-4 md:mt-6">
              <p className="text-sm md:text-base text-muted-foreground mb-2">
                Special New Year Discount: 10-20% off based on school strength!
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Offer ends January 30, 2026. Contact us to claim your discount!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Device */}
      <section className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Revolutionary Biometric Attendance for Schools
            </h2>

            <p className="text-base md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Transform your school's attendance management with our integrated hardware and cloud-based ERP system.
              Real-time tracking, instant parent notifications, and seamless administration.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <SoftButton size="lg" onClick={() => setIsBookingOpen(true)}>
                Book Now for Your School
              </SoftButton>
              <SoftButton variant="secondary" size="lg" onClick={() => (window.location.hash = "#demo")}>
                Watch Demo
              </SoftButton>
            </div>

            <div className="soft-shadow-inset bg-primary/10 rounded-xl md:rounded-2xl p-3 md:p-4 inline-block">
              <p className="text-xs md:text-sm text-primary font-semibold">
                🎁 Free 1-month demo available for early adopters
              </p>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12 min-h-[350px] md:min-h-[550px]">
              <HeroDevice />
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="soft-shadow bg-gradient-to-br from-primary to-accent rounded-2xl md:rounded-3xl p-8 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center text-primary-foreground">
              <div>
                <StatsCounter end={500} suffix="+" />
                <div className="text-sm md:text-xl opacity-90 mt-2">Schools Trust Us</div>
              </div>
              <div>
                <StatsCounter end={50000} suffix="+" />
                <div className="text-sm md:text-xl opacity-90 mt-2">Students Tracked</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold">99.9%</div>
                <div className="text-sm md:text-xl opacity-90 mt-2">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold">24/7</div>
                <div className="text-sm md:text-xl opacity-90 mt-2">Support Available</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <HowItWorks />

      {/* About VeritasCo Section */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">About VeritasCo</h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Leading the digital transformation in educational institutions with cutting-edge biometric technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-8 md:mb-12">
              <div className="space-y-4 md:space-y-6">
                <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">Our Mission</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    To revolutionize school administration by providing secure, efficient, and user-friendly biometric
                    attendance systems that save time, reduce errors, and enhance communication between schools and
                    parents.
                  </p>
                </div>

                <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">Our Vision</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    To become the most trusted partner for educational institutions worldwide, empowering them with
                    technology that ensures student safety, operational excellence, and data-driven decision making.
                  </p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Why Choose Us?</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {[
                      "Hardware + Software integrated solution",
                      "99.9% fingerprint accuracy rate",
                      "Real-time parent notifications via SMS & App",
                      "Complete ERP with fee & academic management",
                      "24/7 dedicated customer support",
                      "Cloud-based with enterprise security",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Company Values Section */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 soft-shadow">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-foreground mb-1 md:mb-2 text-sm md:text-base">Security First</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Bank-grade encryption for all data</p>
              </div>

              <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 soft-shadow">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-foreground mb-1 md:mb-2 text-sm md:text-base">Lightning Fast</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Real-time sync in under 5 seconds</p>
              </div>

              <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 soft-shadow">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-foreground mb-1 md:mb-2 text-sm md:text-base">User Friendly</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Intuitive interface for all users</p>
              </div>

              <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 soft-shadow">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-foreground mb-1 md:mb-2 text-sm md:text-base">24/7 Support</h4>
                <p className="text-xs md:text-sm text-muted-foreground">Always here when you need us</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Complete School Management Solution
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Everything you need to run your school efficiently in one integrated platform
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <FeatureCard
              icon={
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              }
              title="Biometric Security"
              description="Advanced fingerprint recognition ensures accurate attendance with zero proxy marking. Hardware-integrated for real-time data sync."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Instant Notifications"
              description="Parents receive real-time SMS and app alerts when students arrive or are absent. Stay connected with automated updates."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              }
              title="Comprehensive Reports"
              description="Generate detailed attendance analytics, export data, and track patterns with powerful dashboard insights."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              }
              title="Fee Management"
              description="Integrated billing system with automated reminders, online payment gateway, and complete financial tracking."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              }
              title="Academic Module"
              description="Manage grades, exams, assignments, and student performance all in one unified platform."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              }
              title="Cloud-Based Access"
              description="Access your data anywhere, anytime. 99.9% uptime with enterprise-grade security and automatic backups."
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Why Switch to VeritasCo?</h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                See how we compare to traditional manual attendance systems
              </p>
            </div>
            <ComparisonTable />
          </div>
        </section>
      </ScrollReveal>

      {/* Role-Based Feature Table */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">Role-Based Feature Access</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive ERP features tailored for every user role in your institution
            </p>
          </div>
          <FeatureTable />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Quick & Easy Implementation
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Get your school up and running in just 6 days
              </p>
            </div>
            <Timeline />
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">What Schools Say About Us</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Trusted by leading educational institutions across the country
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                role: "Principal, Delhi Public School",
                text: "VeritasCo has transformed our attendance management. The real-time parent notifications have significantly improved communication and student safety.",
              },
              {
                name: "Mrs. Priya Sharma",
                role: "Administrator, St. Mary's Convent",
                text: "The integrated ERP system is a game-changer. We've reduced administrative work by 60% and parents love the instant updates.",
              },
              {
                name: "Mr. Amit Patel",
                role: "Director, Modern Academy",
                text: "Exceptional support and reliable hardware. The biometric system has eliminated proxy attendance completely. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center soft-shadow">
                    <span className="text-primary-foreground font-bold text-sm md:text-base">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">Trusted & Certified</h2>
            <p className="text-base md:text-lg text-muted-foreground">Your data security is our top priority</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { name: "ISO 27001", desc: "Certified" },
              { name: "GDPR", desc: "Compliant" },
              { name: "256-bit SSL", desc: "Encryption" },
              { name: "99.9%", desc: "Uptime SLA" },
            ].map((badge, index) => (
              <div key={index} className="soft-shadow bg-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 soft-shadow">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="font-bold text-foreground text-sm md:text-base">{badge.name}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{badge.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Everything you need to know about VeritasCo
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "How accurate is the biometric fingerprint system?",
                  a: "Our system boasts a 99.9% accuracy rate with advanced fingerprint recognition technology. It can identify students in under 2 seconds with zero false positives.",
                },
                {
                  q: "Is the data secure and compliant with privacy regulations?",
                  a: "Absolutely. We use bank-grade encryption for all data transmission and storage. Our system is fully compliant with data protection regulations and we never share student data with third parties.",
                },
                {
                  q: "What happens if the internet connection is lost?",
                  a: "The device has offline storage capability and automatically syncs data once the connection is restored. Attendance marking continues uninterrupted.",
                },
                {
                  q: "How long does installation and setup take?",
                  a: "Complete installation and staff training typically takes 2-3 days. We provide comprehensive onboarding and 24/7 support to ensure smooth implementation.",
                },
                {
                  q: "Can parents access attendance records?",
                  a: "Yes! Parents receive real-time SMS notifications and can access detailed attendance history through our mobile app with secure login credentials.",
                },
                {
                  q: "What is included in the free 1-month demo?",
                  a: "The demo includes full hardware installation, complete ERP access, staff training, and 24/7 support. No credit card required and no obligations.",
                },
              ].map((faq, index) => (
                <div key={index} className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6">
                  <h3 className="font-bold text-foreground mb-2 md:mb-3 text-sm md:text-base">{faq.q}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Demo Video Section */}
      <ScrollReveal>
        <section id="demo" className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl p-6 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3 md:mb-4">
              See VeritasCo in Action
            </h2>
            <p className="text-center text-sm md:text-base text-muted-foreground mb-6 md:mb-8 text-pretty">
              Watch how our biometric system transforms school attendance management
            </p>
            <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 soft-shadow hover:scale-110 transition-transform cursor-pointer">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">Demo video coming soon</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="soft-shadow bg-gradient-to-br from-primary to-accent rounded-2xl md:rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 md:mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-base md:text-xl text-primary-foreground/90 mb-8 md:mb-10 max-w-2xl mx-auto text-pretty">
              Join 500+ schools already using VeritasCo. Get started with a free 1-month demo today.
            </p>
            <SoftButton
              size="lg"
              onClick={() => setIsBookingOpen(true)}
              className="bg-background text-foreground hover:bg-background/90"
            >
              Book Your Free Demo Now
            </SoftButton>
            <p className="text-xs md:text-sm text-primary-foreground/80 mt-4 md:mt-6">
              No credit card required • Setup in 6 days • 24/7 support included
            </p>
          </div>
        </section>
      </ScrollReveal>

      <footer className="relative z-10 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="VeritasCo Logo" width={40} height={40} />
                <span className="text-lg font-bold text-foreground">VeritasCo</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Revolutionizing school attendance with biometric technology and cloud-based ERP solutions.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63a9.935 9.935 0 00-2.557-2.783z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-primary transition-colors">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <button onClick={() => setIsSupportOpen(true)} className="hover:text-primary transition-colors">
                    Contact
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-bold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <button onClick={() => setIsSupportOpen(true)} className="hover:text-primary transition-colors">
                    Contact Support
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    System Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">© 2025 VeritasCo. All rights reserved.</div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Support Button */}
      <button
        onClick={() => setIsSupportOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center soft-shadow hover:scale-110 transition-transform active:scale-95"
        aria-label="Contact Support"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </main>
  )
}
