// In-memory OTP store with persistence (use Redis/database in production)
interface OtpEntry {
  otp: string;
  expiresAt: number;
  email: string;
  createdAt: number;
}

class OtpStore {
  private store = new Map<string, OtpEntry>();

  set(email: string, entry: { otp: string; expiresAt: number }): void {
    const otpEntry: OtpEntry = {
      ...entry,
      email,
      createdAt: Date.now(),
    };
    this.store.set(email, otpEntry);
    this.cleanup(); // Clean up expired entries
  }

  get(email: string): OtpEntry | undefined {
    const entry = this.store.get(email);
    if (entry && entry.expiresAt < Date.now()) {
      this.store.delete(email); // Remove expired entry
      return undefined;
    }
    return entry;
  }

  delete(email: string): void {
    this.store.delete(email);
  }

  // Clean up expired entries
  private cleanup(): void {
    const now = Date.now();
    for (const [email, entry] of this.store.entries()) {
      if (entry.expiresAt < now) {
        this.store.delete(email);
      }
    }
  }

  // Get stats for monitoring
  getStats(): { total: number; active: number; expired: number } {
    const now = Date.now();
    let active = 0;
    let expired = 0;

    for (const entry of this.store.values()) {
      if (entry.expiresAt > now) {
        active++;
      } else {
        expired++;
      }
    }

    return {
      total: this.store.size,
      active,
      expired,
    };
  }

  // Periodic cleanup (call this in a cron job or interval)
  cleanupExpired(): void {
    this.cleanup();
  }
}

export const otpStore = new OtpStore();

// Set up periodic cleanup every 5 minutes
if (typeof globalThis !== 'undefined') {
  setInterval(() => {
    otpStore.cleanupExpired();
  }, 5 * 60 * 1000);
}