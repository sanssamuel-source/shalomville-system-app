
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function GET() {
  const serialized = serialize('auth_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: -1,
    path: '/',
  });

  const response = NextResponse.redirect(new URL('/login', 'http://localhost:3000')); // In production use proper URL
  response.headers.set('Set-Cookie', serialized);
  return response;
}
