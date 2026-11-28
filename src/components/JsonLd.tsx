import React from 'react';
import { COMPANY_DATA, SITE_URL } from '@/data/company';
import { CATEGORIES } from '@/data/catalog';
import { WHATSAPP_BASE_URL } from '@/lib/whatsapp';

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['WholesaleStore', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_DATA.name,
    legalName: COMPANY_DATA.legalName,
    alternateName: COMPANY_DATA.arabicName,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo.svg`,
    image: `${SITE_URL}/assets/images/hero-section-banner.webp`,
    description: COMPANY_DATA.shortDescription,
    telephone: COMPANY_DATA.phoneTel,
    email: COMPANY_DATA.emailSales,
    taxID: COMPANY_DATA.vatNumber,
    vatID: COMPANY_DATA.vatNumber,
    priceRange: '$$',
    currenciesAccepted: 'SAR',
    paymentAccepted: 'Bank Transfer, Commercial Invoice, Corporate PO',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Al-Kharj Road, Industrial Area',
      addressLocality: COMPANY_DATA.city,
      addressRegion: 'Riyadh Province',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.6408,
      longitude: 46.7728,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: COMPANY_DATA.serviceArea,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
        ],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Commercial & Industrial Cleaning Supply Catalog',
      itemListElement: CATEGORIES.map((cat, idx) => ({
        '@type': 'OfferCatalog',
        name: cat.title,
        description: cat.shortDescription,
        position: idx + 1,
      })),
    },
    sameAs: [
      COMPANY_DATA.googleMapsUrl,
      WHATSAPP_BASE_URL,
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
