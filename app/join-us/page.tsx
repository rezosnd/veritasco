"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { VantraButton } from "@/components/vantra-button"
import ContactSupportModal from "@/components/contact-support-modal"
import BookingModal from "@/components/booking-modal"
import { ArrowLeft, CheckCircle2, ShieldCheck, Mail } from "lucide-react"

export default function JoinUs() {
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    yearsOfExperience: '',
    currentCompany: '',
    skills: '',
    whyInterested: '',
    pastExperience: ''
  })
  const [resume, setResume] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [step, setStep] = useState<'form' | 'otp'>('form')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [otpError, setOtpError] = useState('')

  const positions = [
    'Embedded/IoT Engineer',
    'Backend Developer',
    'AI Developer',
    'Frontend Developer',
    'Deployment/Field Implementation Engineer',
    'Test Engineer',
    'DevOps'
  ]

  const validateField = (name: string, value: string) => {
    const errors = { ...fieldErrors }

    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          errors.fullName = 'Full name is required'
        } else if (value.length < 2) {
          errors.fullName = 'Full name must be at least 2 characters'
        } else if (value.length > 100) {
          errors.fullName = 'Full name too long'
        } else {
          delete errors.fullName
        }
        break

      case 'email':
        if (!value.trim()) {
          errors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.email = 'Please enter a valid email address'
        } else {
          delete errors.email
        }
        break

      case 'phone':
        if (!value.trim()) {
          errors.phone = 'Phone number is required'
        } else if (value.length < 10) {
          errors.phone = 'Phone number must be at least 10 digits'
        } else if (value.length > 15) {
          errors.phone = 'Phone number too long'
        } else {
          delete errors.phone
        }
        break

      case 'position':
        if (!value.trim()) {
          errors.position = 'Position is required'
        } else {
          delete errors.position
        }
        break

      case 'yearsOfExperience':
        if (!value.trim()) {
          errors.yearsOfExperience = 'Years of experience is required'
        } else {
          const years = parseInt(value)
          if (isNaN(years) || years < 0) {
            errors.yearsOfExperience = 'Please enter a valid number'
          } else if (years > 70) {
            errors.yearsOfExperience = 'Please enter a realistic experience level'
          } else {
            delete errors.yearsOfExperience
          }
        }
        break

      case 'skills':
        if (!value.trim()) {
          errors.skills = 'Skills description is required'
        } else if (value.length < 5) {
          errors.skills = 'Please provide at least 5 characters'
        } else {
          delete errors.skills
        }
        break

      case 'whyInterested':
        if (!value.trim()) {
          errors.whyInterested = 'Please tell us why you are interested'
        } else if (value.length < 10) {
          errors.whyInterested = 'Please provide at least 10 characters'
        } else {
          delete errors.whyInterested
        }
        break

      case 'pastExperience':
        if (!value.trim()) {
          errors.pastExperience = 'Experience description is required'
        } else if (value.length < 10) {
          errors.pastExperience = 'Please provide at least 10 characters'
        } else {
          delete errors.pastExperience
        }
        break
    }

    setFieldErrors(errors)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    validateField(name, value)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 'form') {
      await sendOTP()
    } else {
      await verifyOTPAndSubmit()
    }
  }

  const sendOTP = async () => {
    const errors = []

    if (!formData.fullName.trim()) errors.push('Full name is required')
    if (!formData.email.trim()) errors.push('Email is required')
    if (!formData.phone.trim()) errors.push('Phone number is required')
    if (!formData.position.trim()) errors.push('Position is required')
    if (!formData.yearsOfExperience.trim()) {
      errors.push('Years of experience is required')
    } else {
      const years = parseInt(formData.yearsOfExperience)
      if (isNaN(years) || years < 0 || years > 70) {
        errors.push('Please enter a valid number for years of experience (0-70)')
      }
    }
    if (!formData.skills.trim() || formData.skills.trim().length < 5) {
      errors.push('Please provide at least 5 characters about your skills')
    }
    if (!formData.whyInterested.trim() || formData.whyInterested.trim().length < 10) {
      errors.push('Please tell us why you are interested (at least 10 characters)')
    }
    if (!formData.pastExperience.trim() || formData.pastExperience.trim().length < 10) {
      errors.push('Please provide some details about your experience (at least 10 characters)')
    }

    if (errors.length > 0) {
      setSubmitMessage('Please fix the following errors:\n' + errors.join('\n'))
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/join-us/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email.trim(),
          name: formData.fullName
        })
      })

      const result = await response.json()

      if (response.ok) {
        setOtpSent(true)
        setStep('otp')
        setSubmitMessage('OTP sent to your email. Please check your inbox.')
      } else {
        setSubmitMessage(result.message || 'Failed to send OTP. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const verifyOTPAndSubmit = async () => {
    if (!otp) {
      setOtpError('Please enter the OTP.')
      return
    }

    setIsSubmitting(true)
    setOtpError('')

    try {
      const verifyResponse = await fetch('/api/join-us/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email.trim(),
          otp: otp
        })
      })

      const verifyResult = await verifyResponse.json()

      if (!verifyResponse.ok) {
        setOtpError(verifyResult.message || 'Invalid OTP.')
        setIsSubmitting(false)
        return
      }

      const submitData = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value as string)
      })
      if (resume) {
        submitData.append('resume', resume)
      }

      const response = await fetch('/api/join-us', {
        method: 'POST',
        body: submitData
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitMessage('Application submitted successfully! We will contact you soon.')
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          yearsOfExperience: '',
          currentCompany: '',
          skills: '',
          whyInterested: '',
          pastExperience: ''
        })
        setResume(null)
        setStep('form')
        setOtp('')
        setOtpSent(false)
      } else {
        setOtpError(result.message || 'Failed to submit application. Please try again.')
      }
    } catch (error) {
      setOtpError('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackToForm = () => {
    setStep('form')
    setOtp('')
    setOtpError('')
    setSubmitMessage('')
    setFieldErrors({})
  }

  return (
    <main className="relative min-h-svh bg-[#f5f4f0] text-[#0a0a0a] overflow-x-hidden">
      <MainNav
        onSupportOpen={() => setIsSupportOpen(true)}
        onBookingOpen={() => setIsBookingOpen(true)}
      />

      {/* ══ HERO BANNER ══ */}
      <section className="pt-36 pb-12 md:pt-44 md:pb-16 bg-[#0a0a0a] text-white">
        <div className="padding-global">
          <div className="container-max max-w-4xl mx-auto text-center">
            <div className="label-mono is-light mb-4">
              ( Careers · Engineering &amp; Field )
            </div>
            <h1 className="heading-style-h1 text-white mb-6">
              Build what’s next with us.
            </h1>
            <p className="text-base md:text-lg text-[#f5f4f0]/70 max-w-2xl mx-auto leading-relaxed">
              We are looking for exceptional engineers and problem-solvers to build the future of India's educational and hospitality infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ══ APPLICATION FORM ══ */}
      <section className="padding-section py-16">
        <div className="padding-global">
          <div className="container-max max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl border border-black/10 p-8 md:p-14 shadow-sm">
              <div className="mb-10 text-center">
                <span className="label-mono mb-2 block">
                  {step === 'form' ? '( 01 / Candidate Details )' : '( 02 / Verification )'}
                </span>
                <h2 className="heading-style-h3 text-[#0a0a0a]">
                  {step === 'form' ? 'Apply to VeritasCo' : 'Verify Your Email'}
                </h2>
                <p className="text-sm text-[#0a0a0a]/60 mt-2">
                  {step === 'form'
                    ? "Fill in your profile details below. An instant OTP will be sent to your email to verify."
                    : `We've sent a 6-digit OTP to ${formData.email}. Please enter it to complete your application.`}
                </p>
              </div>

              {step === 'form' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block label-mono text-[10px] text-black/60 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border bg-[#fbfbfa] text-sm focus:outline-none focus:border-black font-body ${
                          fieldErrors.fullName ? 'border-red-500' : 'border-black/15'
                        }`}
                      />
                      {fieldErrors.fullName && (
                        <p className="text-red-500 text-xs mt-1 font-mono">{fieldErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block label-mono text-[10px] text-black/60 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border bg-[#fbfbfa] text-sm focus:outline-none focus:border-black font-body ${
                          fieldErrors.email ? 'border-red-500' : 'border-black/15'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-red-500 text-xs mt-1 font-mono">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block label-mono text-[10px] text-black/60 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border bg-[#fbfbfa] text-sm focus:outline-none focus:border-black font-body ${
                          fieldErrors.phone ? 'border-red-500' : 'border-black/15'
                        }`}
                      />
                      {fieldErrors.phone && (
                        <p className="text-red-500 text-xs mt-1 font-mono">{fieldErrors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="position" className="block label-mono text-[10px] text-black/60 mb-2">
                        Position Applying For *
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border bg-[#fbfbfa] text-sm focus:outline-none focus:border-black font-body ${
                          fieldErrors.position ? 'border-red-500' : 'border-black/15'
                        }`}
                      >
                        <option value="">Select Role</option>
                        {positions.map(pos => (
                          <option key={pos} value={pos}>{pos}</option>
                        ))}
                      </select>
                      {fieldErrors.position && (
                        <p className="text-red-500 text-xs mt-1 font-mono">{fieldErrors.position}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="resume" className="block label-mono text-[10px] text-black/60 mb-2">
                      Resume / CV (.pdf, .doc, .docx) *
                    </label>
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#fbfbfa] text-sm file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-mono file:bg-[#0a0a0a] file:text-white"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="yearsOfExperience" className="block label-mono text-[10px] text-black/60 mb-2">
                        Years of Experience *
                      </label>
                      <input
                        type="number"
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        value={formData.yearsOfExperience}
                        onChange={handleInputChange}
                        required
                        min="0"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#fbfbfa] text-sm focus:outline-none focus:border-black font-body ${
                          fieldErrors.yearsOfExperience ? 'border-red-500' : 'border-black/15'
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="currentCompany" className="block label-mono text-[10px] text-black/60 mb-2">
                        Current / Previous Company
                      </label>
                      <input
                        type="text"
                        id="currentCompany"
                        name="currentCompany"
                        value={formData.currentCompany}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#fbfbfa] text-sm focus:outline-none focus:border-black font-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="skills" className="block label-mono text-[10px] text-black/60 mb-2">
                      Key Skills &amp; Technologies *
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#fbfbfa] text-sm focus:outline-none focus:border-black font-body resize-none"
                      placeholder="List key technologies, languages, frameworks, or hardware platforms..."
                    />
                  </div>

                  <div>
                    <label htmlFor="whyInterested" className="block label-mono text-[10px] text-black/60 mb-2">
                      Why are you interested in VeritasCo? *
                    </label>
                    <textarea
                      id="whyInterested"
                      name="whyInterested"
                      value={formData.whyInterested}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#fbfbfa] text-sm focus:outline-none focus:border-black font-body resize-none"
                      placeholder="Tell us what excites you about our products and mission..."
                    />
                  </div>

                  <div>
                    <label htmlFor="pastExperience" className="block label-mono text-[10px] text-black/60 mb-2">
                      Past Experience &amp; Notable Projects *
                    </label>
                    <textarea
                      id="pastExperience"
                      name="pastExperience"
                      value={formData.pastExperience}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-black/15 bg-[#fbfbfa] text-sm focus:outline-none focus:border-black font-body resize-none"
                      placeholder="Describe what you built, shipped, or solved..."
                    />
                  </div>

                  {submitMessage && (
                    <div className="p-4 rounded-xl text-sm font-mono bg-black/5 text-[#0a0a0a] whitespace-pre-line">
                      {submitMessage}
                    </div>
                  )}

                  <div className="pt-4 flex justify-center">
                    <VantraButton
                      type="submit"
                      variant="dark"
                      ariaLabel={isSubmitting ? "Sending OTP..." : "Send OTP & Continue"}
                    >
                      {isSubmitting ? 'Sending OTP...' : 'Send OTP & Continue'}
                    </VantraButton>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-5 h-5 text-[#0a0a0a]" />
                    </div>
                    <p className="text-sm font-mono text-black/60">
                      Code sent to <span className="font-semibold text-black">{formData.email}</span>
                    </p>
                  </div>

                  <div className="max-w-xs mx-auto">
                    <label htmlFor="otp" className="block label-mono text-center text-[10px] text-black/60 mb-2">
                      6-Digit Security Code
                    </label>
                    <input
                      type="text"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      required
                      maxLength={6}
                      className="w-full px-4 py-3 text-center text-3xl font-mono tracking-widest border border-black/20 rounded-xl bg-[#fbfbfa] focus:outline-none focus:border-black"
                      placeholder="000000"
                    />
                  </div>

                  {otpError && (
                    <p className="text-red-500 text-xs font-mono text-center">{otpError}</p>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <button
                      type="button"
                      onClick={handleBackToForm}
                      className="px-6 py-2.5 rounded-full border border-black/20 text-xs font-mono uppercase tracking-wider text-black/70 hover:bg-black/5"
                    >
                      Back to Edit
                    </button>

                    <VantraButton
                      type="submit"
                      variant="dark"
                      ariaLabel={isSubmitting ? "Verifying..." : "Verify & Submit Application"}
                    >
                      {isSubmitting ? 'Verifying...' : 'Verify & Submit'}
                    </VantraButton>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={sendOTP}
                      disabled={isSubmitting}
                      className="text-xs font-mono uppercase tracking-wider text-black/50 hover:text-black underline"
                    >
                      Didn't receive code? Resend
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter
        onSupportOpen={() => setIsSupportOpen(true)}
        onBookingOpen={() => setIsBookingOpen(true)}
      />

      <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  )
}
