import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

interface LocaleLayoutProps {
  children: React.ReactNode;
  // UPDATE 1: Params is now a Promise in Next.js 15/16
  params: Promise<{ locale: string }>; 
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  // UPDATE 2: You must await params before accessing properties
  const { locale } = await params;

  // Validate that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(); 
  
  // Handle RTL languages
  const isRtl = locale === 'ar' || locale === 'ckb';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}