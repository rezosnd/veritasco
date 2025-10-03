"use client"

import type React from "react"

import { useState } from "react"
import { SoftButton } from "./soft-button"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactPerson: "",
    email: "",
    phone: "",
    studentCount: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setTimeout(() => {
          onClose()
          setFormData({
            schoolName: "",
            contactPerson: "",
            email: "",
            phone: "",
            studentCount: "",
            message: "",
          })
          setSubmitStatus("idle")
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Booking submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full soft-shadow-inset bg-background flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110 active:scale-95"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Book Now for Your School</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Get a <span className="text-primary font-semibold">free 1-month demo</span> and experience the future of
            attendance management
          </p>
        </div>

        {submitStatus === "success" ? (
          <div className="soft-shadow-inset bg-green-50 dark:bg-green-950/20 rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-green-700 dark:text-green-400 mb-2">Booking Submitted!</h3>
            <p className="text-sm md:text-base text-green-600 dark:text-green-500">
              We'll contact you within 24 hours to schedule your demo.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-xs md:text-sm font-semibold text-foreground mb-2">School Name *</label>
                <input
                  type="text"
                  required
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  className="w-full soft-shadow-inset bg-background rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Enter school name"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-foreground mb-2">Contact Person *</label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full soft-shadow-inset bg-background rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Principal/Administrator name"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-foreground mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full soft-shadow-inset bg-background rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="school@example.com"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full soft-shadow-inset bg-background rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-foreground mb-2">
                Number of Students *
              </label>
              <input
                type="number"
                required
                value={formData.studentCount}
                onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                className="w-full soft-shadow-inset bg-background rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Approximate student count"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-foreground mb-2">Additional Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full soft-shadow-inset bg-background rounded-xl px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            {submitStatus === "error" && (
              <div className="soft-shadow-inset bg-red-50 dark:bg-red-950/20 rounded-xl p-3 md:p-4 text-red-600 dark:text-red-400 text-xs md:text-sm">
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <SoftButton type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </SoftButton>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-background/50"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
