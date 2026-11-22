import React from "react";
import { COMPANY_DATA } from "@/data/company";
import { CATEGORIES } from "@/data/catalog";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["WholesaleStore", "LocalBusiness"],
    "@id": "https://cleaningcaretrading.com/#organization",
    name: COMPANY_DATA.name,
    legalName: COMPANY_DATA.legalName,
    alternateName: COMPANY_DATA.arabicName,
    url: "https://cleaningcaretrading.com",
    logo: "https://cleaningcaretrading.com/assets/category-1.webp",
    image: "https://cleaningcaretrading.com/assets/hero-warehouse.webp",
    description: COMPANY_DATA.shortDescription,
    telephone: COMPANY_DATA.phoneTel,
    email: COMPANY_DATA.emailSales,
    taxID: COMPANY_DATA.vatNumber,
    vatID: COMPANY_DATA.vatNumber,
    priceRange: "$$",
    currenciesAccepted: "SAR",
    paymentAccepted: "Bank Transfer, Commercial Invoice, Corporate PO",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al-Kharj Road, Industrial Area",
      addressLocality: COMPANY_DATA.city,
      addressRegion: "Riyadh Province",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.6408,
      longitude: 46.7728,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: COMPANY_DATA.serviceArea,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial & Industrial Cleaning Supply Catalog",
      itemListElement: CATEGORIES.map((cat, idx) => ({
        "@type": "OfferCatalog",
        name: cat.title,
        description: cat.shortDescription,
        position: idx + 1,
      })),
    },
    sameAs: [
      COMPANY_DATA.googleMapsUrl,
      `https://wa.me/${COMPANY_DATA.phoneRaw}`,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
