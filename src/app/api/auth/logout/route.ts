
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function GET(request: Request) {
  const serialized = serialize('auth_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: -1,
    path: '/',
  });

  const response = NextResponse.redirect(new URL('/login', request.url));
  response.headers.set('Set-Cookie', serialized);
  return response;
}
