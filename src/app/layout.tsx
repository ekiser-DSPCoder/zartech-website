import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zartech - R. Eric Kiser',
  description: 'Personal website of R. Eric Kiser - Cybersecurity Professional & Technical Writer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={garamond.variable}>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
