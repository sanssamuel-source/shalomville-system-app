
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function GET(request: Request) {
  // ...
  const response = NextResponse.redirect(new URL('/login', request.url));
  response.headers.set('Set-Cookie', serialized);
  return response;
}
