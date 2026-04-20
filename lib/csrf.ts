import { randomBytes } from 'crypto'
import { prisma } from './prisma'

const CSRF_TOKENS = new Map<string, { token: string; expiresAt: number }>()

export async function generateCSRFToken(sessionId: string): Promise<string> {
  const token = randomBytes(32).toString('hex')
  const expiresAt = Date.now() + 60 * 60 * 1000 // 1 hour

  try {
    await prisma.csrfToken.upsert({
      where: { sessionId },
      update: { token, expiresAt: BigInt(expiresAt), createdAt: BigInt(Date.now()) },
      create: { sessionId, token, expiresAt: BigInt(expiresAt), createdAt: BigInt(Date.now()) },
    })

    CSRF_TOKENS.set(sessionId, { token, expiresAt })

    // Clean up expired tokens
    await prisma.csrfToken.deleteMany({ where: { expiresAt: { lt: BigInt(Date.now()) } } })
  } catch (error) {
    console.error('Failed to store CSRF token in database:', error)
    CSRF_TOKENS.set(sessionId, { token, expiresAt })
  }

  for (const [key, value] of CSRF_TOKENS.entries()) {
    if (value.expiresAt < Date.now()) CSRF_TOKENS.delete(key)
  }

  return token
}

export async function verifyCSRFToken(sessionId: string, token: string): Promise<boolean> {
  const stored = CSRF_TOKENS.get(sessionId)
  if (stored && stored.expiresAt >= Date.now() && stored.token === token) {
    CSRF_TOKENS.delete(sessionId)
    return true
  }

  try {
    const dbEntry = await prisma.csrfToken.findFirst({ where: { sessionId, token } })

    if (!dbEntry || Number(dbEntry.expiresAt) < Date.now()) return false

    await prisma.csrfToken.delete({ where: { id: dbEntry.id } })
    return true
  } catch (error) {
    console.error('Failed to verify CSRF token in database:', error)
    return false
  }
}

export function getSessionIdFromRequest(request: Request): string {
  const ip =
    request.headers.get('x-forwarded-for') ||
    request.headers.get('x-real-ip') ||
    'unknown'
  const ua = request.headers.get('user-agent') || 'unknown'
  return Buffer.from(`${ip}:${ua}`).toString('base64')
}