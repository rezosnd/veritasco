"use client"

import { AnimatedWaves } from "@/components/animated-waves"
import { SoftButton } from "@/components/soft-button"
import { MobileScrollIndicator } from "@/components/mobile-scroll-indicator"
import Image from "next/image"
import { useState, useEffect } from "react"
import ContactSupportModal from "@/components/contact-support-modal"

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
  schoolName: string
  contactPerson: string
  email: string
  phone: string
  studentCount: number
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
    const authToken = token || authToken;
    if (!authToken) return;

    try {
      setLoading(true)
      const [applicationsRes, bookingsRes] = await Promise.all([
        fetch('/api/admin/applications', {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }),
        fetch('/api/admin/bookings', {
          headers: {
            'Authorization': `Bearer ${authToken}`
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
    <main className="relative min-h-screen">
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
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors font-medium px-3 py-2 rounded-xl hover:bg-background/50"
              >
                Logout
              </button>
            )}
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

      {/* Login Form */}
      {!isAuthenticated && (
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-card rounded-2xl md:rounded-3xl rotate-1 soft-shadow opacity-30" />
              <div className="absolute inset-0 bg-card rounded-2xl md:rounded-3xl -rotate-1 soft-shadow opacity-20" />
              <div className="relative soft-shadow bg-gradient-to-br from-card to-card/95 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border/30">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-6">
                  Admin Login
                </h1>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter admin password"
                    />
                  </div>
                  {authError && (
                    <p className="text-red-500 text-sm text-center">{authError}</p>
                  )}
                  <div className="text-center">
                    <SoftButton type="submit">Login</SoftButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Admin Panel */}
      {isAuthenticated && (
        <section className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-card rounded-2xl md:rounded-3xl rotate-1 soft-shadow opacity-30" />
              <div className="absolute inset-0 bg-card rounded-2xl md:rounded-3xl -rotate-1 soft-shadow opacity-20" />
              <div className="relative soft-shadow bg-gradient-to-br from-card to-card/95 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border/30">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-6">
                  VeritasCo Admin Panel
                </h1>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                  <div className="flex bg-muted rounded-lg p-1">
                    <button
                      onClick={() => setActiveTab('applications')}
                      className={`px-6 py-2 rounded-md font-medium transition-colors ${
                        activeTab === 'applications'
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      Join Us Applications ({applications.length})
                    </button>
                    <button
                      onClick={() => setActiveTab('bookings')}
                      className={`px-6 py-2 rounded-md font-medium transition-colors ${
                        activeTab === 'bookings'
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      School Bookings ({bookings.length})
                    </button>
                  </div>
                </div>

                {loading && (
                  <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <p className="mt-2 text-muted-foreground">Loading data...</p>
                  </div>
                )}

                {error && (
                  <div className="text-center py-8">
                    <p className="text-red-500">{error}</p>
                    <SoftButton onClick={fetchData} className="mt-4">Retry</SoftButton>
                  </div>
                )}

                {!loading && !error && (
                  <>
                    {/* Applications Tab */}
                    {activeTab === 'applications' && (
                      <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-foreground">Join Us Applications</h2>
                        {applications.length === 0 ? (
                          <p className="text-muted-foreground text-center py-8">No applications received yet.</p>
                        ) : (
                          <div className="grid gap-6">
                            {applications.map((app) => (
                              <div key={app._id} className="bg-background/50 rounded-lg p-6 border border-border/20">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                                  <div>
                                    <h3 className="font-semibold text-foreground">{app.fullName}</h3>
                                    <p className="text-sm text-muted-foreground">{app.position}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm"><span className="font-medium">Email:</span> {app.email}</p>
                                    <p className="text-sm"><span className="font-medium">Phone:</span> {app.phone}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm"><span className="font-medium">Experience:</span> {app.yearsOfExperience} years</p>
                                    <p className="text-sm"><span className="font-medium">Company:</span> {app.currentCompany || 'N/A'}</p>
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <h4 className="font-medium mb-2">Skills & Technologies</h4>
                                  <p className="text-sm text-muted-foreground">{app.skills}</p>
                                </div>

                                <div className="mb-4">
                                  <h4 className="font-medium mb-2">Why Interested</h4>
                                  <p className="text-sm text-muted-foreground">{app.whyInterested}</p>
                                </div>

                                <div className="mb-4">
                                  <h4 className="font-medium mb-2">Past Experience</h4>
                                  <p className="text-sm text-muted-foreground">{app.pastExperience}</p>
                                </div>

                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-muted-foreground">
                                    Submitted: {formatDate(app.createdAt)}
                                  </span>
                                  {app.resume && (
                                    <SoftButton
                                      size="sm"
                                      onClick={() => downloadResume(app)}
                                      className="text-xs"
                                    >
                                      Download Resume
                                    </SoftButton>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Bookings Tab */}
                    {activeTab === 'bookings' && (
                      <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-foreground">School Bookings</h2>
                        {bookings.length === 0 ? (
                          <p className="text-muted-foreground text-center py-8">No bookings received yet.</p>
                        ) : (
                          <div className="grid gap-6">
                            {bookings.map((booking) => (
                              <div key={booking._id} className="bg-background/50 rounded-lg p-6 border border-border/20">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                                  <div>
                                    <h3 className="font-semibold text-foreground">{booking.schoolName}</h3>
                                    <p className="text-sm text-muted-foreground">Contact: {booking.contactPerson}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm"><span className="font-medium">Email:</span> {booking.email}</p>
                                    <p className="text-sm"><span className="font-medium">Phone:</span> {booking.phone}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm"><span className="font-medium">Students:</span> {booking.studentCount}</p>
                                    <p className="text-sm"><span className="font-medium">Status:</span> {booking.status}</p>
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <h4 className="font-medium mb-2">Message</h4>
                                  <p className="text-sm text-muted-foreground">{booking.message}</p>
                                </div>

                                <div className="flex justify-end">
                                  <span className="text-xs text-muted-foreground">
                                    Submitted: {formatDate(booking.createdAt)}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </main>
  )
}