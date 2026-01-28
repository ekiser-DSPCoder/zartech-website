import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'R. Eric Kiser - Cybersecurity Professional',
  description: 'Certified Information Security Manager with 10+ years of experience in cybersecurity, penetration testing, and security education.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-primary-950 dark:via-gray-900 dark:to-accent-950">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
