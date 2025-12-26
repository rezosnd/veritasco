// Database-based OTP store for Vercel/serverless compatibility
import { MongoClient } from 'mongodb';

interface OtpEntry {
  otp: string;
  expiresAt: number;
  email: string;
  createdAt: number;
}

class DatabaseOtpStore {
  private client: MongoClient | null = null;
  private dbName = 'veritasco';
  private collectionName = 'otps';

  constructor() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      console.warn('MONGODB_URI environment variable not set - OTP storage will be unavailable');
      return;
    }
    try {
      this.client = new MongoClient(uri, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000, // 5 second timeout
        socketTimeoutMS: 5000,
      });
    } catch (error) {
      console.error('Failed to create MongoDB client:', error);
      this.client = null;
    }
  }

  private async getCollection() {
    if (!this.client) {
      throw new Error('Database connection not available');
    }
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
      console.error('Error setting OTP in database:', error);
      throw new Error('Database temporarily unavailable. Please try again later.');
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

      return entry as unknown as OtpEntry;
    } catch (error) {
      console.error('Error getting OTP from database:', error);
      throw new Error('Database temporarily unavailable. Please try again later.');
    }
  }

  async delete(email: string): Promise<void> {
    try {
      const collection = await this.getCollection();
      await collection.deleteOne({ email });
    } catch (error) {
      console.error('Error deleting OTP from database:', error);
      // Don't throw error for delete operations - they're not critical
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
      // Don't throw error for cleanup operations
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
    if (this.client) {
      await this.client.close();
    }
  }
}

// Export singleton instance
export const otpStore = new DatabaseOtpStore();