"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import ContactSupportModal from "@/components/contact-support-modal"
import Link from "next/link"
import { Download, LogOut, RefreshCw, Shield, Users, Calendar, ArrowRight } from "lucide-react"

interface Application {
  _id: string
  fullName: string
  email: string
  phone: string
  position: string
  yearsOfExperience: number
  currentCompany: string
  skills: string
  whyInterested: string
  pastExperience: string
  resume?: {
    filename: string
    contentType: string
    data: string
  }
  status: string
  createdAt: string
}

interface Booking {
  _id: string
  businessName: string
  contactPerson: string
  email: string
  phone: string
  volumeCount: string
  message: string
  status: string
  createdAt: string
}

export default function AdminVeritasco() {
  const [authToken, setAuthToken] = useState<string | null>(null)
  const [authError, setAuthError] = useState('')
  const [password, setPassword] = useState('')
  const [csrfToken, setCsrfToken] = useState('')
  const isAuthenticated = !!authToken
  const [isSupportOpen, setIsSupportOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'applications' | 'bookings'>('applications')
  const [applications, setApplications] = useState<Application[]>([])
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Check if already authenticated and fetch CSRF token
  useEffect(() => {
    const token = localStorage.getItem('veritasco_admin_token')
    if (token) {
      setAuthToken(token)
      fetchData(token)
    }

    // Fetch CSRF token
    fetch('/api/csrf-token')
      .then(res => res.json())
      .then(data => setCsrfToken(data.csrfToken))
      .catch(err => console.error('Failed to fetch CSRF token:', err))
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: password,
          csrfToken: csrfToken
        })
      })

      const result = await response.json()

      if (response.ok) {
        setAuthToken(result.token)
        localStorage.setItem('veritasco_admin_token', result.token)
        setPassword('')
        fetchData(result.token)
      } else {
        setAuthError(result.error || 'Login failed')
      }
    } catch (error) {
      setAuthError('An error occurred during login')
    }
  }

  const handleLogout = () => {
    setAuthToken(null)
    localStorage.removeItem('veritasco_admin_token')
    setPassword('')
    setAuthError('')
  }

  const fetchData = async (token?: string) => {
    const currentToken = token || authToken
    if (!currentToken) return

    try {
      setLoading(true)
      const [applicationsRes, bookingsRes] = await Promise.all([
        fetch('/api/admin/applications', {
          headers: {
            'Authorization': `Bearer ${currentToken}`
          }
        }),
        fetch('/api/admin/bookings', {
          headers: {
            'Authorization': `Bearer ${currentToken}`
          }
        })
      ])

      if (applicationsRes.ok) {
        const applicationsData = await applicationsRes.json()
        setApplications(applicationsData)
      }

      if (bookingsRes.ok) {
        const bookingsData = await bookingsRes.json()
        setBookings(bookingsData)
      }
    } catch (err) {
      setError('Failed to load data')
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  const downloadResume = (application: Application) => {
    if (!application.resume) return

    const byteCharacters = atob(application.resume.data)
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    const blob = new Blob([byteArray], { type: application.resume.contentType })

    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = application.resume.filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <main className="min-h-screen bg-[#f5f4f0] text-[#0a0a0a]">
      {/* Top Minimal Admin Header */}
      <header className="border-b border-[rgba(10,10,10,0.08)] bg-[#ffffff]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.avif"
                alt="VeritasCo.Tech Logo"
                width={40}
                height={40}
                priority
                quality={90}
                className="w-10 h-10 object-contain"
              />
              <span className="font-semibold text-sm tracking-tight text-[#0a0a0a]">
                VERITASCO<span className="text-[#737373] font-normal"> / CONTROL</span>
              </span>
            </Link>
            <span className="hidden md:inline-block label-mono text-[10px] px-2.5 py-1 rounded-full border border-[rgba(10,10,10,0.08)] bg-[#faf9f5] text-[#737373]">
              v2.4 SECURE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsSupportOpen(true)}
              className="label-mono text-xs text-[#737373] hover:text-[#0a0a0a] px-3.5 py-2 rounded-full border border-transparent hover:border-[rgba(10,10,10,0.08)] transition-all"
            >
              Support
            </button>
            <Link
              href="/"
              className="label-mono text-xs text-[#737373] hover:text-[#0a0a0a] px-3.5 py-2 rounded-full border border-transparent hover:border-[rgba(10,10,10,0.08)] transition-all"
            >
              Return Home
            </Link>
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="label-mono text-xs bg-[#0a0a0a] text-white hover:bg-[#262626] px-4 py-2 rounded-full transition-all inline-flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Login Screen */}
      {!isAuthenticated && (
        <section className="w-full max-w-md mx-auto px-4 py-20 md:py-32">
          <div className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-3xl p-8 md:p-10 shadow-sm">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[rgba(10,10,10,0.06)]">
              <span className="label-mono text-xs text-[#737373]">GATEWAY ACCESS</span>
              <Shield className="w-4 h-4 text-[#737373]" />
            </div>

            <h1 className="heading-style-h3 text-[#0a0a0a] tracking-tight mb-2">
              Admin Authentication
            </h1>
            <p className="text-xs text-[#737373] leading-relaxed mb-8">
              Authorized personnel only. Please provide the administrative master passphrase.
            </p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label htmlFor="password" className="block label-mono text-xs text-[#737373] mb-2 uppercase">
                  Security Passphrase
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(10,10,10,0.12)] bg-[#faf9f5] text-sm text-[#0a0a0a] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#0a0a0a] transition-colors"
                  placeholder="••••••••••••"
                />
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#0a0a0a] text-white hover:bg-[#262626] text-xs label-mono font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>VERIFY & ACCESS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Authenticated Dashboard */}
      {isAuthenticated && (
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[rgba(10,10,10,0.08)]">
            <div>
              <div className="label-mono text-xs text-[#737373] mb-2">
                VERITASCO CONSOLE / SYSTEM OVERVIEW
              </div>
              <h1 className="heading-style-h2 text-[#0a0a0a] tracking-tight">
                Institutional Records
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fetchData()}
                className="label-mono text-xs px-4 py-2 rounded-full border border-[rgba(10,10,10,0.12)] bg-[#ffffff] text-[#0a0a0a] hover:bg-[#faf9f5] transition-all flex items-center gap-2"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                <span>SYNC DATA</span>
              </button>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={() => setActiveTab('applications')}
              className={`px-5 py-2.5 rounded-full text-xs label-mono font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'applications'
                  ? 'bg-[#0a0a0a] text-[#f5f4f0] shadow-sm'
                  : 'bg-[#ffffff] text-[#737373] border border-[rgba(10,10,10,0.08)] hover:text-[#0a0a0a]'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>APPLICATIONS ({applications.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-5 py-2.5 rounded-full text-xs label-mono font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'bookings'
                  ? 'bg-[#0a0a0a] text-[#f5f4f0] shadow-sm'
                  : 'bg-[#ffffff] text-[#737373] border border-[rgba(10,10,10,0.08)] hover:text-[#0a0a0a]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>SCHOOL BOOKINGS ({bookings.length})</span>
            </button>
          </div>

          {/* Loading & Error States */}
          {loading && (
            <div className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-3xl p-12 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-[#0a0a0a] border-t-transparent" />
              <p className="mt-4 text-xs label-mono text-[#737373]">FETCHING SYSTEM RECORDS...</p>
            </div>
          )}

          {error && (
            <div className="border border-red-200 bg-red-50 rounded-3xl p-8 text-center text-red-600 mb-8">
              <p className="text-sm font-medium mb-3">{error}</p>
              <button
                onClick={() => fetchData()}
                className="label-mono text-xs px-4 py-2 rounded-full bg-[#0a0a0a] text-white"
              >
                Retry Request
              </button>
            </div>
          )}

          {/* Content Lists */}
          {!loading && !error && (
            <>
              {/* Applications Tab */}
              {activeTab === 'applications' && (
                <div className="space-y-4">
                  {applications.length === 0 ? (
                    <div className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-3xl p-12 text-center">
                      <p className="text-sm text-[#737373]">No career applications received yet.</p>
                    </div>
                  ) : (
                    applications.map((app) => (
                      <div
                        key={app._id}
                        className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-2xl p-6 md:p-8 hover:border-[rgba(10,10,10,0.18)] transition-all shadow-sm"
                      >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 mb-6 border-b border-[rgba(10,10,10,0.06)]">
                          <div>
                            <span className="label-mono text-[11px] text-[#737373]">CANDIDATE</span>
                            <h3 className="heading-style-h4 text-[#0a0a0a] tracking-tight mt-0.5">
                              {app.fullName}
                            </h3>
                            <p className="text-xs label-mono text-[#0a0a0a] mt-1">
                              Role: {app.position}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <span className="label-mono text-[11px] px-3 py-1 rounded-full border border-[rgba(10,10,10,0.08)] bg-[#faf9f5] text-[#737373]">
                              {formatDate(app.createdAt)}
                            </span>
                            {app.resume && (
                              <button
                                type="button"
                                onClick={() => downloadResume(app)}
                                className="label-mono text-xs px-3.5 py-1.5 rounded-full bg-[#0a0a0a] text-white hover:bg-[#262626] transition-colors inline-flex items-center gap-1.5"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Resume</span>
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-xs">
                          <div>
                            <div className="label-mono text-[#737373] mb-1">CONTACT</div>
                            <div className="text-[#0a0a0a] font-medium">{app.email}</div>
                            <div className="text-[#737373] mt-0.5">{app.phone}</div>
                          </div>
                          <div>
                            <div className="label-mono text-[#737373] mb-1">EXPERIENCE</div>
                            <div className="text-[#0a0a0a] font-medium">{app.yearsOfExperience} Years</div>
                            <div className="text-[#737373] mt-0.5">Current: {app.currentCompany || 'N/A'}</div>
                          </div>
                          <div>
                            <div className="label-mono text-[#737373] mb-1">SKILLS</div>
                            <div className="text-[#0a0a0a]">{app.skills}</div>
                          </div>
                        </div>

                        {app.whyInterested && (
                          <div className="mb-4 p-4 rounded-xl bg-[#faf9f5] text-xs">
                            <div className="label-mono text-[#737373] mb-1">WHY INTERESTED</div>
                            <p className="text-[#0a0a0a] leading-relaxed">{app.whyInterested}</p>
                          </div>
                        )}

                        {app.pastExperience && (
                          <div className="p-4 rounded-xl bg-[#faf9f5] text-xs">
                            <div className="label-mono text-[#737373] mb-1">PAST EXPERIENCE & PROJECTS</div>
                            <p className="text-[#0a0a0a] leading-relaxed">{app.pastExperience}</p>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* Bookings Tab */}
              {activeTab === 'bookings' && (
                <div className="space-y-4">
                  {bookings.length === 0 ? (
                    <div className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-3xl p-12 text-center">
                      <p className="text-sm text-[#737373]">No booking requests received yet.</p>
                    </div>
                  ) : (
                    bookings.map((booking) => (
                      <div
                        key={booking._id}
                        className="border border-[rgba(10,10,10,0.08)] bg-[#ffffff] rounded-2xl p-6 md:p-8 hover:border-[rgba(10,10,10,0.18)] transition-all shadow-sm"
                      >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 mb-6 border-b border-[rgba(10,10,10,0.06)]">
                          <div>
                            <span className="label-mono text-[11px] text-[#737373]">INSTITUTION</span>
                            <h3 className="heading-style-h4 text-[#0a0a0a] tracking-tight mt-0.5">
                              {booking.businessName}
                            </h3>
                            <p className="text-xs label-mono text-[#737373] mt-1">
                              Contact: {booking.contactPerson}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <span className="label-mono text-[11px] px-3 py-1 rounded-full border border-[rgba(10,10,10,0.08)] bg-[#faf9f5] text-[#737373]">
                              {formatDate(booking.createdAt)}
                            </span>
                            <span className="label-mono text-[11px] px-3 py-1 rounded-full bg-[#0a0a0a] text-white">
                              {booking.status}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-xs">
                          <div>
                            <div className="label-mono text-[#737373] mb-1">DIRECT CONTACT</div>
                            <div className="text-[#0a0a0a] font-medium">{booking.email}</div>
                            <div className="text-[#737373] mt-0.5">{booking.phone}</div>
                          </div>
                          <div>
                            <div className="label-mono text-[#737373] mb-1">STUDENT CAPACITY / VOLUME</div>
                            <div className="text-[#0a0a0a] font-medium">{booking.volumeCount}</div>
                          </div>
                          <div>
                            <div className="label-mono text-[#737373] mb-1">COMMUNICATION NOTE</div>
                            <div className="text-[#0a0a0a] leading-relaxed">{booking.message || "No notes provided"}</div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </>
          )}
        </section>
      )}

      <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </main>
  )
}
