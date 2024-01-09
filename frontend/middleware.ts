import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.cookies.get("strapi_jwt"), "COOOKIE");

  const JWT_TOKEN = request.cookies.get("strapi_jwt")?.value || "";

  if (JWT_TOKEN) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/auth/sign-in", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - auth (authentication files)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|auth|_next/static|_next/image|favicon.ico).*)",
  ],
};
