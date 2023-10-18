import { cookieName, fallbackLng, languages } from '@/app/i18n/settings';
import acceptLanguage from 'accept-language';
import { NextRequest, NextResponse } from 'next/server';

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};

export function middleware(req: NextRequest) {
  let lng;
  if (req.cookies?.has?.(cookieName)) {
    const cookieValue = req.cookies.get(cookieName);
    if (cookieValue) {
      lng = acceptLanguage.get(cookieValue.value);
    }
  }
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
  }

  if (req.headers.has('referer')) {
    const refererHeaderValue = req.headers.get('referer');
    if (refererHeaderValue) {
      const refererUrl = new URL(refererHeaderValue);
      const lngInReferer = languages.find(l => refererUrl.pathname.startsWith(`/${l}`));
      const response = NextResponse.next();
      if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
      return response;
    }
  }

  return NextResponse.next();
}
