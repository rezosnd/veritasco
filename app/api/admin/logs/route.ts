import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';
import { logger } from '@/lib/logger';

async function handler(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const level = url.searchParams.get('level') as 'info' | 'warn' | 'error' | 'security' | undefined;
    const limit = parseInt(url.searchParams.get('limit') || '100');

    const logs = level ? logger.getLogs(level, limit) : logger.getLogs(undefined, limit);

    return NextResponse.json({
      logs,
      total: logs.length,
    });

  } catch (error) {
    console.error('Logs API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch logs' },
      { status: 500 }
    );
  }
}

export const GET = withAuth(handler);