/**
 * Verified Business Entity Data & Types for Cleaning Care Trading Co. (Riyadh, KSA)
 * Reference: docs/tech-spec.md, docs/plan.md & GEMINI.md
 */

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
  description?: string;
}

export interface StrengthItem {
  title: string;
  description: string;
}

export interface HighlightItem {
  title: string;
  subtitle: string;
}

export interface FacilityItem {
  num: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  theme: 'red' | 'white';
  features?: string[];
}

export interface CompanyData {
  name: string;
  legalName: string;
  arabicName: string;
  tagline: string;
  headline: string;
  shortDescription: string;
  location: string;
  city: string;
  country: string;
  serviceArea: string;
  vatNumber: string;
  phone: string;
  phoneRaw: string;
  phoneTel: string;
  emailSales: string;
  emailInfo: string;
  emailLegacy: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  stats: StatItem[];
  about: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  strengths: StrengthItem[];
  industries: IndustryItem[];
  infrastructureFeatures: string[];
  facilities: FacilityItem[];
  clients: ClientItem[];
  highlightsStrip: HighlightItem[];
}

export const COMPANY_DATA: CompanyData = {
  name: 'Cleaning Care Trading Co.',
  legalName: 'Cleaning Care Trading Co.',
  arabicName: 'شركة عناية التنظيف للتجارة',
  tagline: 'B2B Cleaning & Hygiene Supply Partner',
  headline: 'Complete Cleaning,\nHygiene & Facility\nSupply Solutions',
  shortDescription:
    'A trusted B2B distributor in Riyadh, serving businesses across the Kingdom of Saudi Arabia with bulk supply, reliable inventory and fast dispatch.',
  location: 'Riyadh, Kingdom of Saudi Arabia',
  city: 'Riyadh',
  country: 'Kingdom of Saudi Arabia',
  serviceArea: 'Kingdom of Saudi Arabia (KSA)',
  vatNumber: '314071638700003',
  phone: '+966 56 282 1089',
  phoneRaw: '966562821089',
  phoneTel: '+966562821089',
  emailSales: 'sales@cleaningcaretrading.com',
  emailInfo: 'info@cleaningcaretrading.com',
  emailLegacy: 'cleaningcaretradingest@gmail.com',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Riyadh%2C+Saudi+Arabia',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Riyadh%2C%20Saudi%20Arabia&t=&z=12&ie=UTF8&iwloc=&output=embed',

  stats: [
    {
      metric: '3',
      label: 'Warehouses',
      subtext: 'in Riyadh',
      isText: false,
    },
    {
      metric: '2',
      label: 'Retail Stores',
      subtext: 'in Riyadh',
      isText: false,
    },
    {
      metric: '500+',
      label: 'Bulk SKUs',
      subtext: 'in Stock',
      isText: false,
    },
    {
      metric: 'Fast',
      label: 'Dispatch',
      subtext: 'Across KSA',
      isText: true,
    },
  ],

  about: {
    eyebrow: 'ABOUT CLEANING CARE TRADING CO.',
    title: 'A Trusted B2B Partner for a Cleaner, Safer KSA',
    description:
      'Cleaning Care Trading Co. is a Riyadh-based B2B distributor specializing in cleaning materials, hygiene disposables, plastic drums & waste containers, and cleaning equipment & safety products, serving businesses across the Kingdom of Saudi Arabia.',
    image: '/assets/images/about-section-warehouse-exterior.png',
    imageAlt: 'Cleaning Care warehouse and distribution facility exterior',
  },

  strengths: [
    {
      title: 'Wide Product Range',
      description: 'Complete cleaning, hygiene, plastic and safety solutions.',
    },
    {
      title: 'Assured Quality',
      description: 'Trusted, durable and industry-grade products.',
    },
    {
      title: 'Competitive Pricing',
      description: 'Cost-effective solutions for bulk and contract orders.',
    },
    {
      title: 'Fast & Reliable Delivery',
      description: 'Timely supply across Riyadh and KSA.',
    },
    {
      title: 'Dedicated Support',
      description: 'A responsive team for quotes, orders and after-sales.',
    },
    {
      title: 'Trusted by Leading Clients',
      description: 'Supplying major companies and long-term partners.',
    },
  ],

  industries: [
    {
      id: 'contractors',
      title: 'Cleaning Companies\n& Contractors',
      image: '/assets/images/who-we-serve-industry-1.jpg',
      alt: 'Commercial janitorial cleaning chemicals and supplies',
      description:
        'Bulk chemicals, janitorial trolleys, and floor care machines for commercial cleaning contractors.',
    },
    {
      id: 'offices',
      title: 'Corporate Offices',
      image: '/assets/images/who-we-serve-industry-2.jpg',
      alt: 'Corporate restroom hygiene dispensers, hand soaps and paper disposables',
      description:
        'Restroom hygiene dispensers, hand soaps, sanitizers, and waste sorting systems.',
    },
    {
      id: 'horeca',
      title: 'Hotels & Restaurants\n(HORECA)',
      image: '/assets/images/who-we-serve-industry-3.jpg',
      alt: 'Commercial floor care equipment and safety supplies for hospitality',
      description:
        'Kitchen degreasers, food-grade tableware, cling film, and sanitary disposables.',
    },
    {
      id: 'healthcare',
      title: 'Hospitals & Clinics',
      image: '/assets/images/who-we-serve-industry-4.jpg',
      alt: 'Healthcare facility logistics and medical supply distribution',
      description:
        'Hospital-grade disinfectants, color-coded medical waste bins, and certified PPE gloves.',
    },
    {
      id: 'education',
      title: 'Schools & Universities',
      image: '/assets/images/who-we-serve-industry-5.jpg',
      alt: 'Educational institutional bulk cleaning supply warehousing',
      description:
        'High-traffic floor cleaning compounds, hand washing supplies, and indoor pedal bins.',
    },
    {
      id: 'facility-mgmt',
      title: 'Facility Management &\nMaintenance Companies',
      image: '/assets/images/who-we-serve-industry-6.png',
      alt: 'Heavy-duty industrial plastic drums and waste containers',
      description:
        'Heavy-duty outdoor waste containers (120G–1100G), pallets, and crowd safety barricades.',
    },
  ],

  infrastructureFeatures: [
    'Large storage capacity for bulk inventory',
    'Organized racking system for efficient stock management',
    'Dedicated space for liquids, plastics and cleaning materials',
    'Easy loading and unloading for distribution vehicles',
    'Reliable supply chain to meet high-volume customer demands',
  ],

  facilities: [
    {
      num: '3',
      title: 'Fully Equipped Warehouses in Riyadh',
      description:
        'Strategically located warehouses with bulk storage, organized racking and efficient distribution across Riyadh.',
      image: '/assets/images/about-section-warehouse-exterior.png',
      imageAlt: 'Cleaning Care fully equipped warehouse facility exterior',
      theme: 'red',
      features: [
        'Bulk palletized liquid and chemical storage zones',
        'High-density racking systems for rapid picking',
        'Dedicated loading docks for fast KSA fleet dispatch',
      ],
    },
    {
      num: '2',
      title: 'Retail Stores in Riyadh',
      description:
        'Well-stocked retail outlets serving walk-in customers, contractors and small businesses with a wide range of cleaning and hygiene supplies.',
      image: '/assets/images/retail-market.png',
      imageAlt: 'Cleaning Care retail store in Riyadh',
      theme: 'white',
      features: [
        'Immediate pickup for contractors and facility managers',
        'Sample testing for commercial cleaning formulations',
        'Direct trade counter support for small business accounts',
      ],
    },
  ],

  clients: [
    { name: 'AL BAWANI', arabic: 'البواني', colorClass: 'client-green' },
    { name: 'alfanar', arabic: 'الفنار', colorClass: 'client-blue' },
    {
      name: 'Hashem Contracting',
      arabic: 'شركة هاشم للمقاولات والتجارة المساهمة',
      colorClass: '',
    },
    {
      name: 'Mohammed Al-Deyabi Group',
      arabic: 'مجموعة الذيابي',
      colorClass: 'client-gold',
    },
    {
      name: 'FGC',
      arabic: 'First Gulf Company · الشركة الخليجية الأولى',
      colorClass: 'client-blue',
    },
    {
      name: 'STEPCO',
      arabic: 'شركة التوريدات والخدمات الفنية',
      colorClass: 'client-blue',
    },
    { name: 'ABRAAJ', arabic: 'أبراج', colorClass: 'client-blue' },
    {
      name: 'Ali Al-Naama Factory Co.',
      arabic: 'شركة مصنع علي النعمة',
      colorClass: '',
    },
  ],

  highlightsStrip: [
    { title: '3 Warehouses', subtitle: 'in Riyadh' },
    { title: '2 Retail Stores', subtitle: 'in Riyadh' },
    { title: 'Wide Range', subtitle: 'of Products' },
    { title: 'Fast & Reliable', subtitle: 'KSA Delivery' },
    { title: 'Trusted', subtitle: 'by Leading Companies' },
  ],
};
