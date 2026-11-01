"use client"

import { useState } from "react"
import { X, Calendar, ArrowRight, Check, Loader2, ChevronLeft, MessageSquare } from "lucide-react"
import { CalDirectEmbed } from "@/components/cal-direct-embed"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [activeTab, setActiveTab] = useState<"cal" | "form">("cal")
  const [step, setStep] = useState<"choice" | "details">("choice")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    productType: "erp" as "erp" | "pos" | "nidhi" | "custom",
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

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="bg-[#0f0f0f] border border-[rgba(245,244,240,0.15)] rounded-3xl max-w-4xl w-full max-h-[94vh] overflow-y-auto p-6 sm:p-8 md:p-10 relative animate-in fade-in zoom-in-95 duration-200 shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/15 transition-all z-50 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Header & Mode Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10 pr-10">
          <div>
            <div className="label-mono is-light text-[10px] mb-1">
              ( VeritasCo Consultation )
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              Schedule Session or Send Inquiry
            </h2>
          </div>

          {/* Clean Segmented Tab Control */}
          <div className="inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("cal")}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "cal"
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Live Cal.com</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("form")}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "form"
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct Form</span>
            </button>
          </div>
        </div>

        {/* TAB 1: DIRECT INTERACTIVE CAL.COM EMBED */}
        {activeTab === "cal" && (
          <div className="space-y-4">
            <div className="text-xs text-white/60 flex items-center justify-between">
              <span>Select an available date &amp; time below:</span>
              <a
                href="https://cal.com/veritasco/create-custome-software-and-service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline font-mono"
              >
                cal.com/veritasco ↗
              </a>
            </div>

            {/* Live Interactive Iframe Embed */}
            <CalDirectEmbed height="580px" />
          </div>
        )}

        {/* TAB 2: DIRECT FORM SUBMISSION */}
        {activeTab === "form" && (
          <>
            {submitStatus === "success" ? (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                    <Check className="w-6 h-6 text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Request Received</h3>
                <p className="text-white/60 text-sm max-w-sm mx-auto leading-relaxed">
                  Our engineering leadership will reach out within 24 hours to schedule your walkthrough.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-8 px-6 py-2.5 rounded-full bg-white text-black text-xs font-mono tracking-wider hover:bg-white/90"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-1">Direct System Inquiry</h3>
                  <p className="text-white/50 text-xs font-mono">Select a solution below to configure your deployment request.</p>
                </div>

                {step === "choice" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { type: "erp", title: "School ERP Suite", desc: "Biometric attendance, fees & LMS" },
                      { type: "pos", title: "Restaurant POS", desc: "Contactless QR ordering & KDS" },
                      { type: "nidhi", title: "Nidhi Banking", desc: "Govt Act core banking platform" },
                      { type: "custom", title: "Custom Software", desc: "Tailored enterprise development" },
                    ].map((item) => (
                      <button
                        key={item.type}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, productType: item.type as any })
                          setStep("details")
                        }}
                        className="group p-5 rounded-2xl border border-white/10 bg-white/[0.02] text-left hover:border-white/30 hover:bg-white/[0.06] transition-all cursor-pointer flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono uppercase tracking-wider text-white/50">
                            {item.type}
                          </span>
                          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                        <div>
                          <div className="font-medium text-white text-base mb-1">{item.title}</div>
                          <div className="text-xs text-white/50">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <button
                      type="button"
                      onClick={() => setStep("choice")}
                      className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white font-mono mb-2"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Back to selection</span>
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                          Institution / Organization Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white"
                          placeholder="Institution or Organization Name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                          Contact Person
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contactPerson}
                          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white"
                          placeholder="Contact Person Full Name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white"
                          placeholder="Official Email Address"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white"
                          placeholder="Phone Number with Country Code"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                          City / State
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white"
                          placeholder="e.g. Patna, Bihar"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                          Capacity / Students / Tables
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.volumeCount}
                          onChange={(e) => setFormData({ ...formData, volumeCount: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white"
                          placeholder="e.g. 1,200 students"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                        Notes &amp; Specific Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white"
                        placeholder="Tell us about your current challenges or launch timeline..."
                      />
                    </div>

                    {submitStatus === "error" && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 font-mono">
                        Failed to submit request. Please retry or contact us at info@veritasco.tech
                      </div>
                    )}

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 text-xs font-mono tracking-wider font-semibold transition-all disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>SUBMITTING...</span>
                          </>
                        ) : (
                          <span>CONFIRM INQUIRY</span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </>
        )}
        {/* Direct Email & Phone Coordinates */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/50 font-mono">
          <span>Direct Mail: <a href="mailto:info@veritasco.tech" className="text-white hover:underline">info@veritasco.tech</a></span>
          <span>Phone: <a href="tel:+918709442363" className="text-white hover:underline">+91-8709442363</a></span>
        </div>
      </div>
    </div>
  )
}
