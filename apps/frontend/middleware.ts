import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // http://undefined:4200/ in nx
  // http://localhost:3000/ with create-next-app
  console.log(JSON.stringify(request.nextUrl));
  return NextResponse.next();
}
