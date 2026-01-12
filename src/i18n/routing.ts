// src/i18n/routing.ts
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar', 'ckb'],
  defaultLocale: 'en',
  localePrefix: 'always' // Added this back for consistency
});