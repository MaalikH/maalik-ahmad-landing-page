import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of paths that should not redirect mobile users
const EXCLUDED_PATHS = ['/quicklinks', '/api', '/_next', '/static'];

export function middleware(request: NextRequest) {
  // Don't redirect if the path is in the excluded list
  if (EXCLUDED_PATHS.some(path => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check if user is on mobile
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  // Only redirect mobile users from the homepage to quicklinks
  if (isMobile && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/quicklinks', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (static files)
     * 4. all root files inside public (e.g. /favicon.ico)
     */
    '/((?!api|_next|static|[\\w-]+\\.\\w+).*)',
  ],
}; 