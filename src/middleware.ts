import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (PUBLIC_FILE.test(pathname)) return;
  if (pathname.startsWith("/api") || pathname.startsWith("/_next")) return;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
};

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
