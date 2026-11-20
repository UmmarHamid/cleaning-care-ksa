export interface StatItem {
  metric: string;
  label: string;
  subtext: string;
  isText?: boolean;
}

export interface ClientItem {
  name: string;
  arabic?: string;
  colorClass?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export interface StrengthItem {
  title: string;
  description: string;
}

export interface HighlightItem {
  title: string;
  subtitle: string;
}

export const COMPANY_DATA = {
  name: "Cleaning Care Trading Co.",
  legalName: "Cleaning Care Trading Co.",
  arabicName: "شركة عناية التنظيف للتجارة",
  tagline: "B2B Cleaning & Hygiene Supply Partner",
  headline: "Complete Cleaning,\nHygiene & Facility\nSupply Solutions",
  shortDescription:
    "A trusted B2B distributor in Riyadh, serving businesses across the Kingdom of Saudi Arabia with bulk supply, reliable inventory and fast dispatch.",
  location: "Riyadh, Kingdom of Saudi Arabia",
  city: "Riyadh",
  country: "Kingdom of Saudi Arabia",
  vatNumber: "314071638700003",
  phone: "+966 56 282 1089",
  phoneRaw: "966562821089",
  phoneTel: "+966562821089",
  emailSales: "sales@cleaningcaretrading.com",
  emailInfo: "info@cleaningcaretrading.com",
  emailLegacy: "cleaningcaretradingest@gmail.com",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Riyadh%2C+Saudi+Arabia",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Riyadh%2C%20Saudi%20Arabia&t=&z=12&ie=UTF8&iwloc=&output=embed",

  stats: [
    {
      metric: "3",
      label: "Warehouses",
      subtext: "in Riyadh",
      isText: false,
    },
    {
      metric: "2",
      label: "Retail Stores",
      subtext: "in Riyadh",
      isText: false,
    },
    {
      metric: "Bulk Supply",
      label: "& B2B Distribution",
      subtext: "",
      isText: true,
    },
    {
      metric: "Fast",
      label: "Dispatch",
      subtext: "Across KSA",
      isText: true,
    },
  ] as StatItem[],

  about: {
    eyebrow: "ABOUT CLEANING CARE TRADING CO.",
    title: "A Trusted B2B Partner for a Cleaner, Safer KSA",
    description:
      "Cleaning Care Trading Co. is a Riyadh-based B2B distributor specializing in cleaning materials, hygiene disposables, plastic drums & waste containers, and cleaning equipment & safety products, serving businesses across the Kingdom of Saudi Arabia.",
    image: "/assets/Gemini_Generated_Image_npdyz9npdyz9npdy.png",
    imageAlt: "Cleaning Care warehouse and distribution facility exterior",
  },

  strengths: [
    {
      title: "Wide Product Range",
      description: "Complete cleaning, hygiene, plastic and safety solutions.",
    },
    {
      title: "Assured Quality",
      description: "Trusted, durable and industry-grade products.",
    },
    {
      title: "Competitive Pricing",
      description: "Cost-effective solutions for bulk and contract orders.",
    },
    {
      title: "Fast & Reliable Delivery",
      description: "Timely supply across Riyadh and KSA.",
    },
    {
      title: "Dedicated Support",
      description: "A responsive team for quotes, orders and after-sales.",
    },
    {
      title: "Trusted by Leading Clients",
      description: "Supplying major companies and long-term partners.",
    },
  ] as StrengthItem[],

  industries: [
    {
      id: "contractors",
      title: "Cleaning Companies\n& Contractors",
      image: "/assets/images (2).jpg",
      alt: "Commercial janitorial cleaning operation with cleaning trolley and worker",
    },
    {
      id: "offices",
      title: "Corporate Offices",
      image: "/assets/industry-2.webp",
      alt: "Modern professional corporate office interior",
    },
    {
      id: "horeca",
      title: "Hotels & Restaurants\n(HORECA)",
      image: "/assets/industry-3.webp",
      alt: "Premium hotel and restaurant dining interior",
    },
    {
      id: "healthcare",
      title: "Hospitals & Clinics",
      image: "/assets/industry-4.webp",
      alt: "Clean modern hospital corridor and clinical environment",
    },
    {
      id: "education",
      title: "Schools & Universities",
      image: "/assets/industry-5.webp",
      alt: "Modern educational institution and university building",
    },
    {
      id: "facility-mgmt",
      title: "Facility Management &\nMaintenance Companies",
      image: "/assets/industry-6.webp",
      alt: "Professional facility management and maintenance operations",
    },
  ] as IndustryItem[],

  infrastructureFeatures: [
    "Large storage capacity for bulk inventory",
    "Organized racking system for efficient stock management",
    "Dedicated space for liquids, plastics and cleaning materials",
    "Easy loading and unloading for distribution vehicles",
    "Reliable supply chain to meet high-volume customer demands",
  ],

  facilities: [
    {
      num: "3",
      title: "Fully Equipped Warehouses in Riyadh",
      description:
        "Strategically located warehouses with bulk storage, organized racking and efficient distribution across Riyadh.",
      image: "/assets/warehouse-exterior.webp",
      imageAlt: "Cleaning Care fully equipped warehouse facility exterior",
      theme: "red" as const,
    },
    {
      num: "2",
      title: "Retail Stores in Riyadh",
      description:
        "Well-stocked retail outlets serving walk-in customers, contractors and small businesses with a wide range of cleaning and hygiene supplies.",
      image: "/assets/retail-store.webp",
      imageAlt: "Cleaning Care retail store in Riyadh",
      theme: "white" as const,
    },
  ],

  clients: [
    { name: "AL BAWANI", arabic: "البواني", colorClass: "client-green" },
    { name: "alfanar", arabic: "الفنار", colorClass: "client-blue" },
    { name: "Hashem Contracting", arabic: "& Trading Corp.", colorClass: "" },
    { name: "Mohammed Al-Deyabi Group", arabic: "مجموعة الذيابي", colorClass: "client-gold" },
    { name: "FGC", arabic: "First Gulf Company", colorClass: "client-blue" },
    { name: "STEPCO", arabic: "", colorClass: "client-blue" },
    { name: "ABRAAJ", arabic: "", colorClass: "client-blue" },
    { name: "Ali Al-Naama Factory Co.", arabic: "شركة مصنع علي النعمة", colorClass: "" },
  ] as ClientItem[],

  highlightsStrip: [
    { title: "3 Warehouses", subtitle: "in Riyadh" },
    { title: "2 Retail Stores", subtitle: "in Riyadh" },
    { title: "Wide Range", subtitle: "of Products" },
    { title: "Fast & Reliable", subtitle: "KSA Delivery" },
    { title: "Trusted", subtitle: "by Leading Companies" },
  ] as HighlightItem[],
};
