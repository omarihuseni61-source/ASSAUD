// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleTranslateProvider } from '@/lib/google-translate';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import siteConfig from '@/data/site/config.json';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.siteName} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    type: 'website',
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} - ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

// Your custom language list: note the value format is "source|target"
const customLanguages = [
  { value: 'en|en', label: 'English' },
  { value: 'en|sw', label: 'Swahili' },
  { value: 'en|es', label: 'Español' },
  { value: 'en|fr', label: 'Français' },
  { value: 'en|ar', label: 'Arabic' },
  { value: 'en|zh-CN', label: 'Chinese' },
  { value: 'en|pt', label: 'Portuguese' },
  { value: 'en|de', label: 'Germany' },
  { value: 'en|ja', label: 'Japanese' },
  { value: 'en|it', label: 'Italiano' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTranslateProvider
          pageLanguage="en"
          availableLanguages={customLanguages}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </GoogleTranslateProvider>
      </body>
    </html>
  );
}