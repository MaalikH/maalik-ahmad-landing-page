import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Detect mobile and pass as a request header (no redirect)
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile && request.nextUrl.pathname === '/') {
    // Set request header so getServerSideProps can detect mobile
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-is-mobile', '1');
    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    // Tell Google this page varies by device
    response.headers.set('Vary', 'User-Agent');
    return response;
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