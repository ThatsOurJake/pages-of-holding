import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const { headers, nextUrl } = request;
  let uuid = headers.get('x-correlation-id');

  if (!uuid) {
    uuid = crypto.randomUUID();
    headers.set('x-correlation-id', uuid);
  }

  fetch(`${nextUrl.protocol}//${nextUrl.host}/api/log`, {
    body: JSON.stringify({ message: `Incoming Request: ${nextUrl.pathname}`}),
    headers: { 'x-correlation-id': uuid },
    method: 'POST'
  });

  if (headers.has('x-route-override')) {
    const value = headers.get('x-route-override');
    const url = request.nextUrl.clone();
    url.pathname = value!;

    fetch(`${nextUrl.protocol}//${nextUrl.host}/api/log`, {
      body: JSON.stringify({ message: `Redirecting to: ${url.pathname}`}),
      headers: { 'x-correlation-id': uuid },
      method: 'POST'
    });

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/', '/portfolio', '/placeholder']
};
