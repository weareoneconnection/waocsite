import type { Metadata } from 'next';
import './globals.css';
import type { ReactNode } from 'react';
import { LanguageProvider } from '@/components/ui/language-provider';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

export const metadata: Metadata = {
  title: 'WAOC — Official Ecosystem Gateway',
  description:
    'WAOC is a long-term effort to restore trust, coordination, and human connection through transparent and verifiable systems.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="min-h-screen">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
