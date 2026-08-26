import './global.css';
import { Analytics } from '@vercel/analytics/next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Space_Grotesk } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  // Required for the OG/Twitter image paths below to resolve to absolute URLs;
  // without it Next falls back to localhost and the social card never loads.
  // Deliberately still the pre-rebrand Vercel hostname — that deployment is the
  // one actually serving these docs. Update it together with the Vercel project
  // when a custom domain is set up.
  metadataBase: new URL('https://react-native-template-atlas.vercel.app'),
  title: {
    default: 'Caracal | React Native Template',
    template: '%s | Caracal',
  },
  description:
    "Your All-in-One Solution for Building Outstanding React Native/Expo Apps. From editor setup to store submission, we've got you covered!",
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Caracal | React Native Template',
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <RootProvider theme={{ defaultTheme: 'dark' }}>
          {children}
        </RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
