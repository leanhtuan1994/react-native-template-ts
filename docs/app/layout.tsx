import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import { IBM_Plex_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Atlas Starter | React Native Template',
    template: '%s | Atlas Starter',
  },
  description:
    "Your All-in-One Solution for Building Outstanding React Native/Expo Apps. From editor setup to store submission, we've got you covered!",
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Atlas Starter | React Native Template',
    description:
      'Your All-in-One Solution for Building Outstanding React Native/Expo Apps.',
    images: ['/og.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.jpg'],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <RootProvider theme={{ defaultTheme: 'dark' }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
