import { X, Mail, Phone, LifeBuoy, Clock } from "lucide-react"

interface ContactSupportModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactSupportModal({ isOpen, onClose }: ContactSupportModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#141414]/80 backdrop-blur-md">
      <div className="bg-[#1a1f2e] border border-white/10 rounded-[32px] max-w-lg w-full max-h-[90vh] overflow-y-auto p-8 md:p-10 relative animate-in fade-in zoom-in duration-500 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all z-50"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-[#9bd4d7] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(155,212,215,0.3)]">
            <LifeBuoy className="w-10 h-10 text-[#1a1f2e]" />
          </div>
          <h2 className="text-3xl font-display text-white mb-2">Contact Support</h2>
          <p className="text-white/40 font-light text-sm">Our expert team is here to assist you 24/7.</p>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:info@veritasco.tech"
            className="group block p-6 rounded-3xl border border-white/10 bg-white/5 hover:border-[#9bd4d7] hover:bg-white/[0.08] transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#2d3a52] flex items-center justify-center text-[#9bd4d7] group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Email Support</h3>
                <p className="text-white text-lg font-medium">info@veritasco.tech</p>
                <div className="flex items-center gap-2 mt-2 text-[#9bd4d7]/60 text-xs">
                  <Clock className="w-3 h-3" /> Response within 2 hours
                </div>
              </div>
            </div>
          </a>

          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#2d3a52] flex items-center justify-center text-[#9bd4d7]">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Direct Lines</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+918709442363"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all group"
                  >
                    <span className="text-white font-medium">+91 8709442363</span>
                    <span className="text-[#9bd4d7] opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest">Call Now</span>
                  </a>
                  <a
                    href="tel:+919835343838"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all group"
                  >
                    <span className="text-white font-medium">+91 9835343838</span>
                    <span className="text-[#9bd4d7] opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest">Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5">
          <p className="text-center text-[11px] text-white/20 uppercase tracking-[0.15em] leading-relaxed">
            24/7 Critical Infrastructure Support
          </p>
        </div>
      </div>
    </div>
  )
}
