"use client"

import { useState } from "react"
import { X, Calendar, ArrowRight, Check, AlertCircle, Loader2, ChevronLeft } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<"choice" | "details">("choice")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    productType: "erp" as "erp" | "pos" | "nidhi",
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    location: "",
    volumeCount: "",
    message: "",
  })

  const handleReset = () => {
    setStep("choice")
    setSubmitStatus("idle")
    setFormData({
      productType: "erp",
      businessName: "",
      contactPerson: "",
      email: "",
      phone: "",
      location: "",
      volumeCount: "",
      message: "",
    })
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setTimeout(() => {
          handleReset()
        }, 4000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[Booking] submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  const isERP = formData.productType === "erp"
  const isNidhi = formData.productType === "nidhi"

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#141414]/80 backdrop-blur-md">
      <div className="bg-[#1a1f2e] border border-white/10 rounded-[32px] max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative animate-in fade-in zoom-in duration-500 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all z-50"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitStatus === "success" ? (
          <div className="py-12 text-center">
            <div className="w-24 h-24 bg-[#9bd4d7]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <div className="w-16 h-16 bg-[#9bd4d7] rounded-full flex items-center justify-center animate-in zoom-in duration-500">
                <Check className="w-8 h-8 text-[#1a1f2e]" />
              </div>
            </div>
            <h3 className="text-3xl font-display text-white mb-4">Request Received</h3>
            <p className="text-white/40 font-light max-w-sm mx-auto leading-relaxed">
              Our experts will reach out to you within 24 hours to schedule your personalized live demo.
            </p>
            <button
              onClick={handleReset}
              className="mt-10 pulla-btn pulla-btn-primary mx-auto"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-[#9bd4d7] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(155,212,215,0.2)]">
                <Calendar className="w-9 h-9 text-[#1a1f2e]" />
              </div>
              <h2 className="text-3xl font-display text-white mb-2">Book a Live Demo</h2>
              <p className="text-white/40 font-light text-sm">Experience the future of business management.</p>
            </div>

            {step === "choice" ? (
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <button
                    onClick={() => {
                      setFormData({ ...formData, productType: "erp" })
                      setStep("details")
                    }}
                    className="group p-8 rounded-3xl border border-white/10 bg-white/5 text-left hover:border-[#9bd4d7] hover:bg-white/[0.08] transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#2d3a52] flex items-center justify-center text-[#9bd4d7] mb-6 group-hover:scale-110 transition-transform duration-500">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">School ERP</h3>
                    <p className="text-white/30 text-sm font-light leading-relaxed">Complete automation with in-hand biometric attendance.</p>
                  </button>

                  <button
                    onClick={() => {
                      setFormData({ ...formData, productType: "pos" })
                      setStep("details")
                    }}
                    className="group p-8 rounded-3xl border border-white/10 bg-white/5 text-left hover:border-[#9bd4d7] hover:bg-white/[0.08] transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#2d3a52] flex items-center justify-center text-[#9bd4d7] mb-6 group-hover:scale-110 transition-transform duration-500">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Restaurant POS</h3>
                    <p className="text-white/30 text-sm font-light leading-relaxed">QR ordering, KDS, and automated cloud billing.</p>
                  </button>

                  <button
                    onClick={() => {
                      setFormData({ ...formData, productType: "nidhi" })
                      setStep("details")
                    }}
                    className="group p-8 rounded-3xl border border-white/10 bg-white/5 text-left hover:border-[#9bd4d7] hover:bg-white/[0.08] transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#2d3a52] flex items-center justify-center text-[#9bd4d7] mb-6 group-hover:scale-110 transition-transform duration-500">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Nidhi Banking</h3>
                    <p className="text-white/30 text-sm font-light leading-relaxed">Enterprise banking infrastructure with NEFT & CIBIL.</p>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Back Button & Selection Info */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep("choice")}
                    className="w-10 h-10 rounded-xl bg-[#2d3a52] flex items-center justify-center text-[#9bd4d7] hover:bg-[#3d4d6a] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-0.5">Selected Product</p>
                    <p className="text-white font-medium text-sm capitalize">{isERP ? "School ERP Solution" : isNidhi ? "Nidhi Banking Software" : "Restaurant POS System"}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep("choice")}
                    className="text-[10px] font-bold text-[#9bd4d7] uppercase tracking-widest hover:underline px-2"
                  >
                    Change
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-3">{isERP ? "School Name" : isNidhi ? "Nidhi Company Name" : "Restaurant Name"} *</label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#9bd4d7] transition-all"
                      placeholder={isERP ? "e.g. St. Xavier's International" : isNidhi ? "e.g. Suvidha Nidhi Ltd." : "e.g. The Grand Bistro"}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-3">Contact Person *</label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#9bd4d7] transition-all"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-3">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#9bd4d7] transition-all"
                      placeholder="+91"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-3">City / Location *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#9bd4d7] transition-all"
                      placeholder="e.g. New Delhi, India"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-3">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#9bd4d7] transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-3">
                      {isERP ? "Approximate Student Count" : isNidhi ? "Approximate Member Count" : "Average Monthly Orders"} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.volumeCount}
                      onChange={(e) => setFormData({ ...formData, volumeCount: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#9bd4d7] transition-all"
                      placeholder={isERP ? "e.g. 500+" : isNidhi ? "e.g. 2000+" : "e.g. 1000+"}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full pulla-btn pulla-btn-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group h-14"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Request Live Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  {submitStatus === "error" && (
                    <p className="mt-4 text-red-400 text-sm flex items-center gap-2 justify-center animate-pulse">
                      <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  )
}
