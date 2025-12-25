import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';
import { logger } from '@/lib/logger';

export function withAuth(handler: (request: NextRequest) => Promise<NextResponse>) {
  return async (request: NextRequest) => {
    const token = getTokenFromRequest(request);

    if (!token) {
      logger.security('Unauthorized API access attempt', {
        path: request.nextUrl.pathname,
        method: request.method,
      }, request);
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);

    if (!decoded || decoded.role !== 'admin') {
      logger.security('Invalid token used for API access', {
        path: request.nextUrl.pathname,
        method: request.method,
        tokenValid: !!decoded,
        role: decoded?.role,
      }, request);
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    // Log successful authenticated request
    logger.info('Authenticated API access', {
      path: request.nextUrl.pathname,
      method: request.method,
      userRole: decoded.role,
    }, request);

    // Token is valid, proceed with the handler
    return handler(request);
  };
}