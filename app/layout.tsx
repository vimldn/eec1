import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Extra Edge Club | SEO Agency UK | Since 2011',
    template: '%s | Extra Edge Club'
  },
  description: 'UK SEO specialists since 2011. We help businesses grow through Local SEO, SEO, and SEO Consultancy. Trusted by Sixes Cricket, The Gentleman\'s Journal, and more.',
  keywords: ['SEO agency UK', 'local SEO', 'SEO consultancy', 'digital marketing', 'search engine optimisation'],
  authors: [{ name: 'Extra Edge Club Ltd' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Extra Edge Club',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
