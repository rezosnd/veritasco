import { randomBytes } from 'crypto';
import clientPromise from './mongodb';

interface CSRFEntry {
  sessionId: string;
  token: string;
  expiresAt: number;
  createdAt: number;
}

const CSRF_TOKENS = new Map<string, { token: string; expiresAt: number }>();

export async function generateCSRFToken(sessionId: string): Promise<string> {
  const token = randomBytes(32).toString('hex');
  const expiresAt = Date.now() + 60 * 60 * 1000; // 1 hour

  try {
    // Store in database for serverless compatibility
    const client = await clientPromise;
    const db = client.db('veritasco');
    const collection = db.collection('csrf_tokens');

    await collection.replaceOne(
      { sessionId },
      {
        sessionId,
        token,
        expiresAt,
        createdAt: Date.now()
      },
      { upsert: true }
    );

    // Also store in memory for faster access during the same request
    CSRF_TOKENS.set(sessionId, { token, expiresAt });

    // Clean up expired tokens from database
    await collection.deleteMany({ expiresAt: { $lt: Date.now() } });

  } catch (error) {
    console.error('Failed to store CSRF token in database:', error);
    // Fallback to in-memory only
    CSRF_TOKENS.set(sessionId, { token, expiresAt });
  }

  // Clean up expired tokens from memory
  for (const [key, value] of CSRF_TOKENS.entries()) {
    if (value.expiresAt < Date.now()) {
      CSRF_TOKENS.delete(key);
    }
  }

  return token;
}

export async function verifyCSRFToken(sessionId: string, token: string): Promise<boolean> {
  // First check in-memory cache
  const stored = CSRF_TOKENS.get(sessionId);
  if (stored && stored.expiresAt >= Date.now() && stored.token === token) {
    CSRF_TOKENS.delete(sessionId);
    return true;
  }

  // If not in memory, check database
  try {
    const client = await clientPromise;
    const db = client.db('veritasco');
    const collection = db.collection('csrf_tokens');

    const dbEntry = await collection.findOne({ sessionId, token });

    if (!dbEntry || dbEntry.expiresAt < Date.now()) {
      return false;
    }

    // Token is valid, remove it
    await collection.deleteOne({ sessionId, token });
    return true;

  } catch (error) {
    console.error('Failed to verify CSRF token in database:', error);
    return false;
  }
}

export function getSessionIdFromRequest(request: Request): string {
  // In a real app, this would come from a session cookie
  // For now, use IP + User-Agent as a simple session identifier
  const ip = request.headers.get('x-forwarded-for') ||
             request.headers.get('x-real-ip') ||
             'unknown';
  const ua = request.headers.get('user-agent') || 'unknown';

  return Buffer.from(`${ip}:${ua}`).toString('base64');
}