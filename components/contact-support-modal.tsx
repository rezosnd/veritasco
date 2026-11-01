"use client"

import { X, Mail, Phone, Clock, ArrowUpRight, ShieldCheck } from "lucide-react"

interface ContactSupportModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactSupportModal({ isOpen, onClose }: ContactSupportModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="bg-[#0e0e11] border border-white/12 rounded-[28px] max-w-lg w-full max-h-[90vh] overflow-y-auto p-7 sm:p-9 relative animate-in fade-in zoom-in-95 duration-300 shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all z-50 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] text-white/50 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>24/7 Engineering Support</span>
          </div>
          <h2 className="heading-style-h2 text-white mb-2 text-2xl sm:text-3xl font-semibold">
            Contact Support
          </h2>
          <p className="text-white/60 text-sm font-normal leading-relaxed">
            Our expert engineering and infrastructure team is on standby 24/7 to assist your institution.
          </p>
        </div>

        {/* Support Channels */}
        <div className="space-y-4">
          {/* Email Support Card */}
          <a
            href="mailto:info@veritasco.tech"
            className="group block p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1">
                    Official Support Email
                  </div>
                  <div className="text-white text-base font-medium">info@veritasco.tech</div>
                  <div className="flex items-center gap-1.5 mt-2 text-xs font-mono text-emerald-400/90">
                    <Clock className="w-3 h-3" />
                    <span>Average response under 2 hours</span>
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </a>

          {/* Direct Phone Lines Card */}
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                Direct Priority Lines
              </span>
            </div>

            <div className="space-y-2.5">
              <a
                href="tel:+918709442363"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/8 hover:border-white/20 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-white font-medium text-sm">+91 8709442363</span>
                </div>
                <span className="text-xs font-mono text-white/70 group-hover:text-white inline-flex items-center gap-1">
                  <span>Call Now</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>

              <a
                href="tel:+919835343838"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/8 hover:border-white/20 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-white font-medium text-sm">+91 9835343838</span>
                </div>
                <span className="text-xs font-mono text-white/70 group-hover:text-white inline-flex items-center gap-1">
                  <span>Call Now</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Status Footer */}
        <div className="mt-8 pt-5 border-t border-white/8 flex items-center justify-between text-[11px] font-mono text-white/40">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>24/7 Critical Infrastructure SLA</span>
          </div>
          <span className="text-white/30">Active Dispatch</span>
        </div>
      </div>
    </div>
  )
}
