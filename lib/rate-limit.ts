// Simple in-memory rate limiter for Next.js
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number,
  windowMs: number
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const key = identifier;
  const record = rateLimitStore.get(key);

  if (!record || now > record.resetTime) {
    // First request or window expired
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { allowed: true, remaining: maxRequests - 1, resetTime: now + windowMs };
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  record.count++;
  return { allowed: true, remaining: maxRequests - record.count, resetTime: record.resetTime };
}

// Rate limiting configurations
export const otpRateLimit = (ip: string) =>
  checkRateLimit(`otp_${ip}`, 5, 15 * 60 * 1000); // 5 requests per 15 minutes

export const formSubmissionRateLimit = (ip: string) =>
  checkRateLimit(`form_${ip}`, 10, 60 * 60 * 1000); // 10 requests per hour

export const bookingRateLimit = (ip: string) =>
  checkRateLimit(`booking_${ip}`, 5, 60 * 60 * 1000); // 5 requests per hour