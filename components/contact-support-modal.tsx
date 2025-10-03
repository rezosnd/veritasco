"use client"

interface ContactSupportModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactSupportModal({ isOpen, onClose }: ContactSupportModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="soft-shadow bg-card rounded-2xl md:rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full soft-shadow-inset bg-background flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110 active:scale-95"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6 md:mb-8">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 soft-shadow">
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Contact Support</h2>
          <p className="text-muted-foreground text-sm md:text-base">We're here to help you 24/7</p>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:veritasco.tech@gmail.com"
            className="block soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0 soft-shadow">
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">Email Support</h3>
                <p className="text-primary font-medium text-sm md:text-base break-all">veritasco.tech@gmail.com</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-2">Response within 2 hours</p>
              </div>
            </div>
          </a>

          <div className="soft-shadow-inset bg-background rounded-xl md:rounded-2xl p-4 md:p-6">
            <div className="flex items-start gap-3 md:gap-4 mb-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0 soft-shadow">
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground mb-3 text-base md:text-lg">Call Us</h3>
                <div className="space-y-2">
                  <a
                    href="tel:+918709442363"
                    className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-sm md:text-base p-2 rounded-lg hover:bg-primary/5 active:scale-95 transition-all"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+91 8709442363</span>
                  </a>
                  <a
                    href="tel:+919835343838"
                    className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-sm md:text-base p-2 rounded-lg hover:bg-primary/5 active:scale-95 transition-all"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+91 9835343838</span>
                  </a>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mt-3">Available 24/7 for support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-center text-xs md:text-sm text-muted-foreground leading-relaxed">
            Our support team is available 24/7 to assist you with any questions or concerns
          </p>
        </div>
      </div>
    </div>
  )
}
