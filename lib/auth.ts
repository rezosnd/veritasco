import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-this';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2a$10$default.hash.needs.to.be.changed'; // Will be set after hashing

export interface AuthToken {
  role: 'admin';
  iat: number;
  exp: number;
}

export async function verifyPassword(password: string): Promise<boolean> {
  // In production, compare with hashed password
  const storedHash = process.env.ADMIN_PASSWORD_HASH || await hashPassword(process.env.ADMIN_PASSWORD || 'default');
  return await bcrypt.compare(password, storedHash);
}

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

export function generateToken(): string {
  const payload: AuthToken = {
    role: 'admin',
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): AuthToken | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AuthToken;
    return decoded;
  } catch (error) {
    return null;
  }
}

export function getTokenFromRequest(request: Request): string | null {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.substring(7);
}