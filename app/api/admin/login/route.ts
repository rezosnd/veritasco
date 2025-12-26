import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, generateToken } from '@/lib/auth';
import { verifyCSRFToken, getSessionIdFromRequest } from '@/lib/csrf';
import { logger } from '@/lib/logger';

export async function POST(request: NextRequest) {
  try {
    const { password, csrfToken } = await request.json();

    // Verify CSRF token
    const sessionId = getSessionIdFromRequest(request);
    if (!csrfToken || !verifyCSRFToken(sessionId, csrfToken)) {
      logger.security('CSRF token validation failed', {
        sessionId,
        providedToken: csrfToken ? 'present' : 'missing',
      }, request);
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      );
    }

    if (!password) {
      logger.warn('Login attempt with missing password', {}, request);
      return NextResponse.json(
        { error: 'Password is required' },
        { status: 400 }
      );
    }

    const isValidPassword = await verifyPassword(password);

    if (!isValidPassword) {
      logger.security('Failed login attempt with invalid password', {}, request);
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    const token = generateToken();
    logger.security('Successful admin login', {}, request);

    return NextResponse.json({
      message: 'Login successful',
      token: token,
    });

  } catch (error) {
    logger.error('Admin login error', { error: error instanceof Error ? error.message : String(error) }, request);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}