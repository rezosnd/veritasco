import { NextRequest } from 'next/server';

export interface LogEntry {
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'security';
  message: string;
  ip?: string;
  userAgent?: string;
  path?: string;
  method?: string;
  statusCode?: number;
  userId?: string;
  details?: any;
}

class Logger {
  private logs: LogEntry[] = [];
  private readonly maxLogs = 1000; // Keep last 1000 logs in memory

  private log(level: LogEntry['level'], message: string, details?: any, request?: NextRequest) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      details,
    };

    if (request) {
      entry.ip = request.headers.get('x-forwarded-for') ||
                 request.headers.get('x-real-ip') ||
                 'unknown';
      entry.userAgent = request.headers.get('user-agent') || 'unknown';
      entry.path = request.nextUrl.pathname;
      entry.method = request.method;
    }

    // Add to in-memory logs
    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift(); // Remove oldest log
    }

    // Console logging with appropriate level
    const logMessage = `[${entry.timestamp}] ${level.toUpperCase()}: ${message}`;
    switch (level) {
      case 'error':
        console.error(logMessage, details);
        break;
      case 'warn':
        console.warn(logMessage, details);
        break;
      case 'security':
        console.error(`🔴 SECURITY: ${logMessage}`, details);
        break;
      default:
        console.log(logMessage, details);
    }
  }

  info(message: string, details?: any, request?: NextRequest) {
    this.log('info', message, details, request);
  }

  warn(message: string, details?: any, request?: NextRequest) {
    this.log('warn', message, details, request);
  }

  error(message: string, details?: any, request?: NextRequest) {
    this.log('error', message, details, request);
  }

  security(message: string, details?: any, request?: NextRequest) {
    this.log('security', message, details, request);
  }

  getLogs(level?: LogEntry['level'], limit = 100): LogEntry[] {
    let filteredLogs = this.logs;

    if (level) {
      filteredLogs = this.logs.filter(log => log.level === level);
    }

    return filteredLogs.slice(-limit).reverse(); // Most recent first
  }

  getSecurityLogs(limit = 50): LogEntry[] {
    return this.getLogs('security', limit);
  }
}

export const logger = new Logger();