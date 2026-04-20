"use client"

import { AnimatedWaves } from "@/components/animated-waves"
import { SoftButton } from "@/components/soft-button"
import Image from "next/image"
import { useState } from "react"
import ContactSupportModal from "@/components/contact-support-modal"

export default function JoinUs() {
  const [isSupportOpen, setIsSupportOpen] = useState(false)
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
      // Send OTP first
      await sendOTP()
    } else {
      // Verify OTP and submit form
      await verifyOTPAndSubmit()
    }
  }

  const sendOTP = async () => {
    // Validate all required fields before sending OTP
    const errors = []

    if (!formData.fullName.trim()) {
      errors.push('Full name is required')
    }

    if (!formData.email.trim()) {
      errors.push('Email is required')
    }

    if (!formData.phone.trim()) {
      errors.push('Phone number is required')
    }

    if (!formData.position.trim()) {
      errors.push('Position is required')
    }

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
        headers: {
          'Content-Type': 'application/json'
        },
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
      // First verify OTP
      const verifyResponse = await fetch('/api/join-us/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
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

      // OTP verified, now submit the form
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
    <main className="relative min-h-screen">
      <AnimatedWaves />

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Image
            src="/logo.avif"
            alt="VeritasCo.Tech Logo"
            width={50}
            height={50}
            priority
            quality={90}
            sizes="50px"
            className="md:w-[60px] md:h-[60px] drop-shadow-lg"
          />
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => setIsSupportOpen(true)}
              className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-xl hover:bg-background/50"
            >
              Support
            </button>
            <SoftButton onClick={() => window.location.href = '/'}>Home</SoftButton>
          </div>
        </div>
      </nav>

      {/* Join Us Form */}
      <section className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-card rounded-2xl md:rounded-3xl rotate-1 soft-shadow opacity-30" />
            <div className="absolute inset-0 bg-card rounded-2xl md:rounded-3xl -rotate-1 soft-shadow opacity-20" />
            <div className="relative soft-shadow bg-gradient-to-br from-card to-card/95 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border/30">
              <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-6">
                {step === 'form' ? 'Join Our Team' : 'Verify Your Email'}
              </h1>
              <p className="text-muted-foreground text-center mb-8">
                {step === 'form'
                  ? "We're looking for talented individuals to help us build the future of school management technology."
                  : "We've sent a 6-digit OTP to your email. Please enter it below to verify your identity."
                }
              </p>

              {step === 'form' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${
                          fieldErrors.fullName ? 'border-red-500' : 'border-border'
                        }`}
                      />
                      {fieldErrors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${
                          fieldErrors.email ? 'border-red-500' : 'border-border'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${
                          fieldErrors.phone ? 'border-red-500' : 'border-border'
                        }`}
                      />
                      {fieldErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-foreground mb-2">
                        Position Applying For *
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${
                          fieldErrors.position ? 'border-red-500' : 'border-border'
                        }`}
                      >
                        <option value="">Select Position</option>
                        {positions.map(pos => (
                          <option key={pos} value={pos}>{pos}</option>
                        ))}
                      </select>
                      {fieldErrors.position && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.position}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-foreground mb-2">
                      Resume/CV *
                    </label>
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-foreground mb-2">
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
                        className={`w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary ${
                          fieldErrors.yearsOfExperience ? 'border-red-500' : 'border-border'
                        }`}
                      />
                      {fieldErrors.yearsOfExperience && (
                        <p className="text-red-500 text-sm mt-1">{fieldErrors.yearsOfExperience}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="currentCompany" className="block text-sm font-medium text-foreground mb-2">
                        Current/Previous Company
                      </label>
                      <input
                        type="text"
                        id="currentCompany"
                        name="currentCompany"
                        value={formData.currentCompany}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="skills" className="block text-sm font-medium text-foreground mb-2">
                      Key Skills & Technologies *
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className={`w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                        fieldErrors.skills ? 'border-red-500' : 'border-border'
                      }`}
                      placeholder="List your key skills and technologies you're proficient in..."
                    />
                    {fieldErrors.skills && (
                      <p className="text-red-500 text-sm mt-1">{fieldErrors.skills}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="whyInterested" className="block text-sm font-medium text-foreground mb-2">
                      Why are you interested in this position? *
                    </label>
                    <textarea
                      id="whyInterested"
                      name="whyInterested"
                      value={formData.whyInterested}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className={`w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                        fieldErrors.whyInterested ? 'border-red-500' : 'border-border'
                      }`}
                      placeholder="Tell us why you're interested in joining VeritasCo..."
                    />
                    {fieldErrors.whyInterested && (
                      <p className="text-red-500 text-sm mt-1">{fieldErrors.whyInterested}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="pastExperience" className="block text-sm font-medium text-foreground mb-2">
                      Past Experience & Projects *
                    </label>
                    <textarea
                      id="pastExperience"
                      name="pastExperience"
                      value={formData.pastExperience}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className={`w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                        fieldErrors.pastExperience ? 'border-red-500' : 'border-border'
                      }`}
                      placeholder="Describe your relevant past experience and notable projects..."
                    />
                    {fieldErrors.pastExperience && (
                      <p className="text-red-500 text-sm mt-1">{fieldErrors.pastExperience}</p>
                    )}
                  </div>

                  <div className="text-center">
                    <SoftButton type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending OTP...' : 'Send OTP & Continue'}
                    </SoftButton>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      OTP sent to: <span className="font-medium text-foreground">{formData.email}</span>
                    </p>
                  </div>

                  <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-foreground mb-2 text-center">
                      Enter 6-digit OTP
                    </label>
                    <input
                      type="text"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      required
                      maxLength={6}
                      className="w-full px-3 py-3 text-center text-2xl font-mono tracking-widest border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="000000"
                    />
                  </div>

                  {otpError && (
                    <p className="text-red-500 text-sm text-center">{otpError}</p>
                  )}

                  <div className="flex gap-3">
                    <SoftButton
                      type="button"
                      onClick={handleBackToForm}
                      variant="secondary"
                      className="flex-1"
                    >
                      Back
                    </SoftButton>
                    <SoftButton
                      type="submit"
                      disabled={isSubmitting || otp.length !== 6}
                      className="flex-1"
                    >
                      {isSubmitting ? 'Verifying...' : 'Verify & Submit'}
                    </SoftButton>
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={sendOTP}
                      disabled={isSubmitting}
                      className="text-sm text-primary hover:text-primary/80 underline"
                    >
                      Didn't receive OTP? Resend
                    </button>
                  </div>
                </form>
              )}

              {submitMessage && step === 'form' && (
                <div className={`text-center p-3 rounded-lg mt-4 ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                  {submitMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </main>
  )
}