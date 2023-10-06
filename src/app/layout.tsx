import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const exo_2 = Exo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JAMTrack',
  description: 'Job Application Management Track',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={exo_2.className}>
        <Header />
        <main className="bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
