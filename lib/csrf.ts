import { randomBytes } from 'crypto';

const CSRF_TOKENS = new Map<string, { token: string; expiresAt: number }>();

export function generateCSRFToken(sessionId: string): string {
  const token = randomBytes(32).toString('hex');
  const expiresAt = Date.now() + 60 * 60 * 1000; // 1 hour

  CSRF_TOKENS.set(sessionId, { token, expiresAt });

  // Clean up expired tokens
  for (const [key, value] of CSRF_TOKENS.entries()) {
    if (value.expiresAt < Date.now()) {
      CSRF_TOKENS.delete(key);
    }
  }

  return token;
}

export function verifyCSRFToken(sessionId: string, token: string): boolean {
  const stored = CSRF_TOKENS.get(sessionId);

  if (!stored || stored.expiresAt < Date.now()) {
    return false;
  }

  if (stored.token !== token) {
    return false;
  }

  // Token is single-use, remove after verification
  CSRF_TOKENS.delete(sessionId);
  return true;
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