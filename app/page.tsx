"use client"

import { MainNav } from "@/components/main-nav"
import { AnimatedWaves } from "@/components/animated-waves"
import { SoftButton } from "@/components/soft-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import BookingModal from "@/components/booking-modal"
import ContactSupportModal from "@/components/contact-support-modal"
import { ArrowRight, GraduationCap, Utensils, Zap, ShieldCheck, CheckCircle } from "lucide-react"

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <main className="relative min-h-svh bg-white">
      <AnimatedWaves />

      <MainNav
        onSupportOpen={() => setIsSupportOpen(true)}
        onBookingOpen={() => setIsBookingOpen(true)}
      />

      {/* ── HERO SECTION ── */}
      <section className="relative z-10 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">VeritasCo Ecosystem</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
            Complete Digital Solutions <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">for Modern Businesses</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-10 text-balance leading-relaxed max-w-2xl mx-auto">
            From schools to restaurants — manage everything with powerful, scalable, cloud-based systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SoftButton size="lg" className="w-full sm:w-auto text-base group" onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </SoftButton>
            <SoftButton
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Demo
            </SoftButton>
          </div>
        </div>
      </section>

      {/* ── PRODUCT SELECTION SECTION ── */}
      <section id="products" className="relative z-10 py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Choose Your Solution</h2>
            <p className="text-lg text-muted-foreground">Select the product built specifically for your industry.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Card 1: School ERP */}
            <ScrollReveal>
              <div className="group relative bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <GraduationCap className="w-48 h-48 text-primary" />
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">School ERP</h3>
                <p className="text-xl text-slate-600 mb-8 font-medium">Smart school management system</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                    <span className="text-lg">Biometric attendance</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                    <span className="text-lg">Student & fee management</span>
                  </li>
                  <li className="flex items-center text-slate-700">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                    <span className="text-lg">LMS & analytics</span>
                  </li>
                </ul>

                <Link href="/erp" className="w-full">
                  <SoftButton size="lg" className="w-full text-base group/btn">
                    Explore ERP
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </SoftButton>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 2: Restaurant POS */}
            <ScrollReveal>
              <div className="group relative bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Utensils className="w-48 h-48 text-primary" />
                </div>
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                  <Utensils className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Restaurant POS</h3>
                <p className="text-xl text-slate-300 mb-8 font-medium">Smart QR-based restaurant system</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center text-slate-200">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0" />
                    <span className="text-lg">QR ordering</span>
                  </li>
                  <li className="flex items-center text-slate-200">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0" />
                    <span className="text-lg">Real-time kitchen display</span>
                  </li>
                  <li className="flex items-center text-slate-200">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0" />
                    <span className="text-lg">Auto billing & UPI payments</span>
                  </li>
                </ul>

                <Link href="/pos" className="w-full">
                  <SoftButton size="lg" className="w-full text-base bg-white text-slate-900 hover:bg-slate-100 group/btn">
                    Explore POS
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </SoftButton>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PLATFORM POSITIONING SECTION ── */}
      <section className="relative z-10 py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">One Platform. Multiple Solutions.</h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
              VeritasCo is building a unified ecosystem of digital tools designed to simplify operations across industries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center">
                   <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                       <GraduationCap className="w-6 h-6" />
                   </div>
                   <h4 className="font-bold text-lg mb-1">Schools</h4>
                   <p className="text-slate-500">ERP System</p>
               </div>
               <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center">
                   <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                       <Utensils className="w-6 h-6" />
                   </div>
                   <h4 className="font-bold text-lg mb-1">Restaurants</h4>
                   <p className="text-slate-500">POS System</p>
               </div>
               <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center">
                   <div className="w-12 h-12 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center mb-4">
                       <Zap className="w-6 h-6" />
                   </div>
                   <h4 className="font-bold text-lg mb-1">Future</h4>
                   <p className="text-slate-500">More business solutions</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FUTURE VISION SECTION ── */}
      <section className="relative z-10 py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 text-center border border-slate-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for the Future</h2>
            <p className="text-xl text-slate-400 mb-12">
              We are continuously expanding VeritasCo into a complete digital ecosystem including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4">
                    <ShieldCheck className="w-10 h-10 mx-auto text-primary mb-3" />
                    <p className="font-medium text-slate-300">Retail management systems</p>
                </div>
                <div className="text-center p-4">
                    <ShieldCheck className="w-10 h-10 mx-auto text-primary mb-3" />
                    <p className="font-medium text-slate-300">Healthcare solutions</p>
                </div>
                <div className="text-center p-4">
                    <ShieldCheck className="w-10 h-10 mx-auto text-primary mb-3" />
                    <p className="font-medium text-slate-300">Business analytics tools</p>
                </div>
                <div className="text-center p-4">
                    <ShieldCheck className="w-10 h-10 mx-auto text-primary mb-3" />
                    <p className="font-medium text-slate-300">Custom enterprise software</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <ScrollReveal>
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="soft-shadow bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Start Your Digital Transformation Today
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link href="/erp" className="w-full sm:w-auto">
                  <SoftButton size="lg" className="w-full bg-white text-slate-900 hover:bg-slate-100">
                    Explore ERP
                  </SoftButton>
              </Link>
              <Link href="/pos" className="w-full sm:w-auto">
                  <SoftButton size="lg" className="w-full bg-white text-slate-900 hover:bg-slate-100">
                    Explore POS
                  </SoftButton>
              </Link>
              <SoftButton
                size="lg"
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-none"
              >
                Book Demo
              </SoftButton>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <Image src="/logo.avif" alt="VeritasCo Logo" width={36} height={36} loading="lazy" quality={85} sizes="36px" />
                <span className="text-base font-bold text-foreground">VeritasCo</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                Complete digital solutions and cloud-based ecosystem for modern businesses.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link href="/erp" className="hover:text-primary transition-colors">School ERP</Link>
                    </li>
                    <li>
                      <Link href="/pos" className="hover:text-primary transition-colors">Restaurant POS</Link>
                    </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><button onClick={() => setIsSupportOpen(true)} className="hover:text-primary transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => setIsSupportOpen(true)} className="hover:text-primary transition-colors">Contact Support</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © {new Date().getFullYear()} VeritasCo. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </main>
  )
}
