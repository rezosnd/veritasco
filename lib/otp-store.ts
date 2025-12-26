// Database-based OTP store for Vercel/serverless compatibility
import { MongoClient } from 'mongodb';

interface OtpEntry {
  otp: string;
  expiresAt: number;
  email: string;
  createdAt: number;
}

class DatabaseOtpStore {
  private client: MongoClient;
  private dbName = 'veritasco';
  private collectionName = 'otps';

  constructor() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI environment variable is required');
    }
    this.client = new MongoClient(uri);
  }

  private async getCollection() {
    await this.client.connect();
    const db = this.client.db(this.dbName);
    return db.collection(this.collectionName);
  }

  async set(email: string, entry: { otp: string; expiresAt: number }): Promise<void> {
    try {
      const collection = await this.getCollection();
      const otpEntry: OtpEntry = {
        ...entry,
        email,
        createdAt: Date.now(),
      };

      // Upsert the OTP entry
      await collection.replaceOne(
        { email },
        otpEntry,
        { upsert: true }
      );

      // Clean up expired entries
      await this.cleanup();
    } catch (error) {
      console.error('Error setting OTP:', error);
      throw error;
    }
  }

  async get(email: string): Promise<OtpEntry | undefined> {
    try {
      const collection = await this.getCollection();
      const entry = await collection.findOne({ email });

      if (!entry) {
        return undefined;
      }

      // Check if expired
      if (entry.expiresAt < Date.now()) {
        await this.delete(email); // Remove expired entry
        return undefined;
      }

      return entry as OtpEntry;
    } catch (error) {
      console.error('Error getting OTP:', error);
      throw error;
    }
  }

  async delete(email: string): Promise<void> {
    try {
      const collection = await this.getCollection();
      await collection.deleteOne({ email });
    } catch (error) {
      console.error('Error deleting OTP:', error);
      throw error;
    }
  }

  // Clean up expired entries
  private async cleanup(): Promise<void> {
    try {
      const collection = await this.getCollection();
      const now = Date.now();
      await collection.deleteMany({ expiresAt: { $lt: now } });
    } catch (error) {
      console.error('Error cleaning up OTPs:', error);
    }
  }

  // Get stats for monitoring
  async getStats(): Promise<{ total: number; active: number; expired: number }> {
    try {
      const collection = await this.getCollection();
      const now = Date.now();

      const total = await collection.countDocuments();
      const active = await collection.countDocuments({ expiresAt: { $gte: now } });
      const expired = total - active;

      return { total, active, expired };
    } catch (error) {
      console.error('Error getting OTP stats:', error);
      return { total: 0, active: 0, expired: 0 };
    }
  }

  // Close connection (optional, Vercel handles this)
  async close(): Promise<void> {
    await this.client.close();
  }
}

// Export singleton instance
export const otpStore = new DatabaseOtpStore();