import { ThemeProvider } from '@/app/theme-provider';
import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';

const exo_2 = Exo_2({ subsets: ['latin'] });

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export const metadata: Metadata = {
  title: 'JAMTrack',
  description: 'Job Application Management Track',
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={exo_2.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer lang={lang} />
        </ThemeProvider>
      </body>
    </html>
  );
}
