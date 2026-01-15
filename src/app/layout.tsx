import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MetaPixel from '@/components/MetaPixel';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'AI Receptionist for Private Nursing | Stop Missing Calls',
  description: 'Calculate your lost revenue and automate your intake with our AI voice receptionist.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <MetaPixel />
        <main className="min-h-screen flex flex-col font-sans">
          {children}
        </main>
      </body>
    </html>
  );
}
