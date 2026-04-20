// Prisma-based OTP store for Neon PostgreSQL (serverless compatible)
import { prisma } from './prisma'

interface OtpEntry {
  otp: string
  expiresAt: number
  email: string
  createdAt: number
}

class DatabaseOtpStore {
  async set(email: string, entry: { otp: string; expiresAt: number }): Promise<void> {
    try {
      await prisma.otp.upsert({
        where: { email },
        update: {
          otp: entry.otp,
          expiresAt: BigInt(entry.expiresAt),
          createdAt: BigInt(Date.now()),
        },
        create: {
          email,
          otp: entry.otp,
          expiresAt: BigInt(entry.expiresAt),
          createdAt: BigInt(Date.now()),
        },
      })
      await this.cleanup()
    } catch (error) {
      console.error('Error setting OTP in database:', error)
      throw new Error('Database temporarily unavailable. Please try again later.')
    }
  }

  async get(email: string): Promise<OtpEntry | undefined> {
    try {
      const entry = await prisma.otp.findUnique({ where: { email } })
      if (!entry) return undefined

      if (Number(entry.expiresAt) < Date.now()) {
        await this.delete(email)
        return undefined
      }

      return {
        otp: entry.otp,
        expiresAt: Number(entry.expiresAt),
        email: entry.email,
        createdAt: Number(entry.createdAt),
      }
    } catch (error) {
      console.error('Error getting OTP from database:', error)
      throw new Error('Database temporarily unavailable. Please try again later.')
    }
  }

  async delete(email: string): Promise<void> {
    try {
      await prisma.otp.deleteMany({ where: { email } })
    } catch (error) {
      console.error('Error deleting OTP from database:', error)
    }
  }

  private async cleanup(): Promise<void> {
    try {
      await prisma.otp.deleteMany({ where: { expiresAt: { lt: BigInt(Date.now()) } } })
    } catch (error) {
      console.error('Error cleaning up OTPs:', error)
    }
  }

  async getStats(): Promise<{ total: number; active: number; expired: number }> {
    try {
      const total = await prisma.otp.count()
      const active = await prisma.otp.count({ where: { expiresAt: { gte: BigInt(Date.now()) } } })
      return { total, active, expired: total - active }
    } catch (error) {
      console.error('Error getting OTP stats:', error)
      return { total: 0, active: 0, expired: 0 }
    }
  }
}

export const otpStore = new DatabaseOtpStore()