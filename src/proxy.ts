// src/proxy.ts
import createMiddleware from 'next-intl/middleware';
// CHANGE THIS LINE: Import from routing, NOT navigation
import { routing } from './i18n/routing'; 

const proxy = createMiddleware(routing);

export default proxy;

export const config = {
  // Matcher remains the same
  matcher: ['/((?!api|_next|.*\\..*).*)']
};