import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('auth_token');
  if (request.nextUrl.pathname.startsWith('/add-item') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}