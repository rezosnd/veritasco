import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// Create a DOM window for server-side DOMPurify
const window = new JSDOM('').window;
const DOMPurifyServer = DOMPurify(window as any);

export function sanitizeHtml(dirty: string): string {
  return DOMPurifyServer.sanitize(dirty, {
    ALLOWED_TAGS: [], // No HTML tags allowed
    ALLOWED_ATTR: [], // No attributes allowed
  });
}

export function sanitizeFilename(filename: string): string {
  // Remove path traversal and dangerous characters
  return filename
    .replace(/[/\\:*?"<>|]/g, '_') // Replace dangerous chars with underscore
    .replace(/\.\./g, '_') // Remove directory traversal
    .substring(0, 255); // Limit length
}