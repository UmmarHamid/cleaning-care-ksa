import type { Metadata, Viewport } from 'next';
import './globals.css';
import { COMPANY_DATA } from '@/data/company';
import { BRAND_COLORS } from '@/lib/tokens';
import { JsonLd } from '@/components/JsonLd';

export const viewport: Viewport = {
  themeColor: BRAND_COLORS.charcoal,
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cleaningcaretrading.com'),
  title: {
    default:
      'Cleaning Care Trading Co. | Industrial Hygiene & Wholesale Cleaning Supplies Riyadh',
    template: '%s | Cleaning Care Trading Co.',
  },
  description:
    'Official B2B catalog for Cleaning Care Trading Co. Riyadh. Direct wholesale supply of commercial cleaning chemicals, hygiene paper, heavy-duty garbage bags (10G–100G), industrial waste drums (10G–1100G), and road safety equipment across Saudi Arabia.',
  keywords: [
    'Cleaning Care Trading Co.',
    'Wholesale cleaning supplies Riyadh',
    'Commercial cleaning chemicals Saudi Arabia',
    'Heavy duty garbage bags 10G 100G',
    'Plastic waste drums 1100G 240L Riyadh',
    'Janitorial equipment supplier Riyadh',
    'Hospitality hygiene paper supplies KSA',
    'B2B cleaning materials Saudi Arabia',
  ],
  authors: [{ name: COMPANY_DATA.name }],
  creator: COMPANY_DATA.name,
  publisher: COMPANY_DATA.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/assets/logo.svg',
    apple: '/assets/logo.svg',
  },
  openGraph: {
    title:
      'Cleaning Care Trading Co. | Industrial Hygiene & Wholesale Cleaning Supplies Riyadh',
    description:
      'Official B2B supplier of commercial cleaning chemicals, waste drums (10G–1100G), hygiene paper, and safety equipment in Riyadh.',
    url: 'https://cleaningcaretrading.com',
    siteName: 'Cleaning Care Trading Co.',
    locale: 'en_SA',
    type: 'website',
    images: [
      {
        url: '/assets/images/hero-section-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Cleaning Care Trading Co. High-Bay Distribution Warehouse in Riyadh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Cleaning Care Trading Co. | Industrial Hygiene & Wholesale Cleaning Supplies Riyadh',
    description:
      'Official B2B supplier of commercial cleaning chemicals, waste drums (10G–1100G), hygiene paper, and safety equipment in Riyadh.',
    images: ['/assets/images/hero-section-banner.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
