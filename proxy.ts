import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const publicRoutes = ["/about_us", "/"];
  const hasToken = request.cookies.has("session_token_anush");
  const isAuthPage = request.nextUrl.pathname === "/";

  if (isAuthPage) {
    if (hasToken) {
      return NextResponse.redirect(new URL("/stories", request.url));
    }
    return NextResponse.next();
  }

  if (!hasToken) {
    if (publicRoutes.includes(request.nextUrl.pathname))
      return NextResponse.next();

    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
