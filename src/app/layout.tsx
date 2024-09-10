import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';

// Import the styles provided by the react-pdf-viewer packages
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

import Providers from './provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Valdi',
  description:
    'This is my personal github pages. This is still under developmemt, but you can see some of the things that I made...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='sm:scroll-smooth'>
      <body
        className={`${inter.className} ${inter.variable}`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
