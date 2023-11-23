import { ThemeProvider } from '@/app/theme-provider';
import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Locale, i18n } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const exo_2 = Exo_2({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: 'JAMTrack',
  description: 'Job Application Management Track',
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const data = await getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={exo_2.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer data={data} />
        </ThemeProvider>
      </body>
    </html>
  );
}
