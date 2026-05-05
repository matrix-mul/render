import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const hasToken = request.cookies.has("session_token_anush");
  const isAuthPage = request.nextUrl.pathname === "/"

  if (isAuthPage) {
    if (hasToken) {
      return NextResponse.redirect(new URL("/stories", request.url));
    }
    return NextResponse.next();
  }

  if (!hasToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // This runs on all UI routes, but skips API routes, images, and static files
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};

// useGet usePost axios_instance react_query 