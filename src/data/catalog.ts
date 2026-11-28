/**
 * Product Catalog Schema & Master Data for Cleaning Care Trading Co. (Riyadh, KSA)
 * Reference: Official Client Product Range Audit & docs/tech-spec.md
 */

export type CategoryId =
  | 'cleaning-materials'
  | 'hygiene-disposables'
  | 'cleaning-equipment-tools'
  | 'safety-products';

export interface CategoryInfo {
  id: CategoryId;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  itemCountLabel?: string;
}

export interface SubCategoryItem {
  id: string;
  name: string;
  category: CategoryId;
  image: string;
  imageAlt: string;
  description: string;
  specifications: string[];
  packagingNote?: string;
  popular?: boolean;
}

export interface DivisionCategory {
  id: CategoryId;
  title: string;
  subtitle: string;
  shortDescription: string;
  itemCountLabel?: string;
  wholesaleHighlights: string[];
  subCategories: SubCategoryItem[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  specifications: string[];
  packagingNote?: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

/**
 * Official Client Product Range — Exactly 4 website categories and 26 official product families.
 * Source of Truth: Client-Approved Official Product Families
 */
export const DIVISIONS: DivisionCategory[] = [
  {
    id: 'cleaning-materials',
    title: 'Cleaning Materials',
    subtitle: 'Industrial & Commercial Chemical Formulations',
    shortDescription:
      'Multi-purpose cleaners, disinfectants, degreasers, floor care, washroom solutions, and commercial detergents.',
    wholesaleHighlights: [
      'High-concentration commercial blending',
      'Available for commercial and facility maintenance',
      'Direct warehouse dispatch in Riyadh',
    ],
    subCategories: [
      {
        id: 'multi-purpose-cleaners',
        name: 'Multi-Purpose Cleaners',
        category: 'cleaning-materials',
        image: '/assets/images/products/multi-purpose-cleaners.webp',
        imageAlt:
          'Commercial multi-purpose surface cleaner bottle for institutional facility maintenance',
        description:
          'Cleaning formulations designed for daily washing and routine surface care in residential, office, and commercial environments. Developed for maintenance of washable floors, counters, tiles, and standard work surfaces.',
        specifications: [],
        popular: true,
      },
      {
        id: 'disinfectants-sanitizers',
        name: 'Disinfectants & Sanitizers',
        category: 'cleaning-materials',
        image: '/assets/images/products/hand-sanitizer.webp',
        imageAlt: 'Commercial disinfectant and sanitizing solutions for workplace hygiene',
        description:
          'Sanitizing and disinfection solutions formulated for surface hygiene and routine cleanliness in commercial premises. Intended for regular surface wiping and sanitation protocols across workplaces, schools, and business facilities.',
        specifications: [],
        popular: true,
      },
      {
        id: 'glass-cleaners',
        name: 'Glass Cleaners',
        category: 'cleaning-materials',
        image: '/assets/images/products/glass-cleaners.webp',
        imageAlt: 'Commercial glass cleaner spray bottles for streak-free surface cleaning',
        description:
          'Liquid cleaning formulations developed for streak-free wiping of commercial glass, storefront display cases, architectural partitions, and mirrors. Leaves surfaces clear of fingerprints and routine dust marks.',
        specifications: [],
      },
      {
        id: 'floor-cleaners',
        name: 'Floor Cleaners',
        category: 'cleaning-materials',
        image: '/assets/images/products/floor-cleaner.webp',
        imageAlt: 'Commercial floor cleaner liquid containers for facility maintenance',
        description:
          'Concentrated liquid floor cleaners suitable for manual mopping and standard floor scrubber machines. Formulated for daily cleaning of tiled, polished concrete, and commercial floor surfaces across facilities.',
        specifications: [],
      },
      {
        id: 'degreasers',
        name: 'Degreasers',
        category: 'cleaning-materials',
        image: '/assets/images/products/degreasers.webp',
        imageAlt: 'Heavy-duty industrial degreaser chemical containers for commercial facilities',
        description:
          'Heavy-duty cleaning formulations intended to assist with breaking down and lifting grease, grime, and oil deposits. Suitable for commercial kitchens, workshop floors, industrial equipment, and maintenance environments.',
        specifications: [],
      },
      {
        id: 'washroom-cleaners',
        name: 'Washroom Cleaners',
        category: 'cleaning-materials',
        image: '/assets/images/products/washroom-cleaners.webp',
        imageAlt: 'Commercial washroom and restroom cleaner bottles for sanitary fixtures',
        description:
          'Targeted hygiene cleaners formulated for everyday washing of sanitary basins, ceramic wall and floor tiles, urinals, and restroom surfaces in public and corporate facilities.',
        specifications: [],
      },
      {
        id: 'carpet-shampoos',
        name: 'Carpet Shampoos',
        category: 'cleaning-materials',
        image: '/assets/images/products/carpet-cleaning.webp',
        imageAlt: 'Commercial carpet shampoo and upholstery cleaning solution containers',
        description:
          'Carpet cleaning solutions designed for use in extraction cleaning machines and manual spot cleaning. Lifts embedded dirt and refreshes high-traffic carpets and textile floor coverings in commercial buildings.',
        specifications: [],
      },
      {
        id: 'detergents',
        name: 'Detergents',
        category: 'cleaning-materials',
        image: '/assets/images/products/detergents.webp',
        imageAlt:
          'Commercial laundry detergent and washing solution packaging for institutional facilities',
        description:
          'Washing detergent formulations engineered for routine linen care, workwear laundering, and commercial washing operations across hospitality, healthcare, and industrial laundry setups.',
        specifications: [],
      },
      {
        id: 'room-fresheners',
        name: 'Room Fresheners',
        category: 'cleaning-materials',
        image: '/assets/images/products/fragrance.webp',
        imageAlt: 'Commercial room freshener and air deodorizing spray containers',
        description:
          'Air deodorizers and fragrance solutions formulated to neutralize ambient odors and maintain pleasant indoor air quality in corporate offices, hotel corridors, restrooms, and reception lounges.',
        specifications: [],
      },
    ],
  },
  {
    id: 'hygiene-disposables',
    title: 'Hygiene & Disposable Products',
    subtitle: 'Commercial Paper, Packaging, Food-Service & Drum Containment',
    shortDescription:
      'Paper towels, garbage bags, shopping bags, disposable tableware, hand soaps, plastic drums, and food packaging foils.',
    wholesaleHighlights: [
      'High-volume institutional packaging',
      'Hygienic disposables for commercial dining and facility restrooms',
      'Direct warehouse dispatch in Riyadh',
    ],
    subCategories: [
      {
        id: 'paper-towels-tissue-rolls',
        name: 'Paper Towels & Tissue Rolls',
        category: 'hygiene-disposables',
        image: '/assets/images/products/toilet-tissue-rolls.webp',
        imageAlt: 'Commercial paper towel rolls and institutional toilet tissue supplies',
        description:
          'Absorbent paper rolls and commercial restroom tissues designed for routine hand drying and washroom hygiene. Engineered for standard dispensers in corporate restrooms, medical clinics, and public facilities.',
        specifications: [],
        popular: true,
      },
      {
        id: 'garbage-bags',
        name: 'Garbage Bags',
        category: 'hygiene-disposables',
        image: '/assets/images/products/heavy-duty-garbage-bags.webp',
        imageAlt: 'Heavy-duty commercial garbage bags in rolls ranging from 10G to 100G',
        description:
          'Heavy-duty refuse liners engineered for reliable waste containment in commercial waste receptacles. Supplied in bulk rolls for facility maintenance, hospitality, and warehouse disposal requirements.',
        specifications: ['10G', '20G', '30G', '50G', '55G', '70G', '90G', '100G'],
        popular: true,
      },
      {
        id: 'shopping-bags',
        name: 'Shopping Bags',
        category: 'hygiene-disposables',
        image: '/assets/images/products/plastic-carry-bags.webp',
        imageAlt: 'Commercial plastic shopping and carry bags for retail distribution',
        description:
          'Durable plastic carry bags designed for retail merchandise packaging, takeaway packaging, and general commercial transport of goods.',
        specifications: ['All Sizes'],
      },
      {
        id: 'disposable-gloves-tableware',
        name: 'Disposable Gloves, Plates, Bowls, Cups, Spoons & Forks',
        category: 'hygiene-disposables',
        image: '/assets/images/products/disposable-plates.webp',
        imageAlt:
          'Disposable dining tableware including plates, bowls, cups, cutlery and protective gloves',
        description:
          'Single-use dining supplies and protective gloves suited for event catering, corporate cafeterias, and institutional meal services. Includes plates, bowls, drinking cups, utensils, and protective service gloves.',
        specifications: [],
      },
      {
        id: 'hand-soaps-sanitizers',
        name: 'Hand Soaps & Sanitizers',
        category: 'hygiene-disposables',
        image: '/assets/images/products/hand-soap.webp',
        imageAlt:
          'Commercial liquid hand soap and hand sanitizer dispensers for workplace washrooms',
        description:
          'Liquid hand wash soaps and rinse-free hand sanitizers formulated for daily employee and visitor hygiene. Suitable for refillable dispensers across commercial restrooms, kitchens, and entrance foyers.',
        specifications: [],
      },
      {
        id: 'plastic-drums',
        name: 'Plastic Drums',
        category: 'hygiene-disposables',
        image: '/assets/images/products/hdpe-plastic-drums.webp',
        imageAlt: 'Industrial HDPE plastic drums available from 10G to 1100G capacity',
        description:
          'Industrial-grade molded plastic drums and bulk containers designed for secure storage and liquid containment across commercial facilities, processing units, and logistics yards.',
        specifications: [
          '10G',
          '20G',
          '30G',
          '50G',
          '55G',
          '70G',
          '90G',
          '100G',
          '120G',
          '240G',
          '660G',
          '1100G',
        ],
        popular: true,
      },
      {
        id: 'aluminium-cling-foils',
        name: 'Aluminium & Cling Foils',
        category: 'hygiene-disposables',
        image: '/assets/images/products/aluminium-foil.webp',
        imageAlt: 'Commercial grade aluminium foil and food wrap packaging rolls',
        description:
          'Commercial aluminium foil rolls and stretch cling film wraps for preserving, wrapping, and covering food items in commercial kitchens, bakeries, and catering operations.',
        specifications: [],
      },
    ],
  },
  {
    id: 'cleaning-equipment-tools',
    title: 'Cleaning Equipment & Tools',
    subtitle: 'Commercial Janitorial Tools & Facility Maintenance Systems',
    shortDescription:
      'Janitorial carts, microfiber mops, scrubbing pads, manual brooms, and routine maintenance tools.',
    wholesaleHighlights: [
      'Commercial-grade maintenance equipment',
      'Janitorial trolleys and specialized tool accessories',
      'Direct warehouse dispatch in Riyadh',
    ],
    subCategories: [
      {
        id: 'mops-buckets',
        name: 'Mops & Buckets',
        category: 'cleaning-equipment-tools',
        image: '/assets/images/products/mop-bucket.webp',
        imageAlt: 'Commercial mop and wringer bucket combination for janitorial floor maintenance',
        description:
          'Commercial wet mopping systems and wheeled bucket units equipped with downpress wringers. Designed for efficient floor washing and maintenance across large commercial floor areas.',
        specifications: [],
        popular: true,
      },
      {
        id: 'microfiber-cloths',
        name: 'Microfiber Cloths',
        category: 'cleaning-equipment-tools',
        image: '/assets/images/products/fibre-cloths.webp',
        imageAlt: 'Commercial microfiber cleaning cloths for surface wiping and polishing',
        description:
          'Lint-free microfiber cloths suitable for dry dusting, wet wiping, and surface polishing on desks, glass partitions, electronics, and delicate finishes without scratching.',
        specifications: [],
      },
      {
        id: 'brooms-brushes-wipers',
        name: 'Brooms, Brushes & Wipers',
        category: 'cleaning-equipment-tools',
        image: '/assets/images/products/cleaning-broom.webp',
        imageAlt: 'Commercial sweeping brooms, scrub brushes and rubber floor squeegees',
        description:
          'Manual floor maintenance tools designed for routine sweeping, floor scrubbing, and surface water removal in walkways, warehouse floors, and facility corridors.',
        specifications: [],
      },
      {
        id: 'cleaning-carts',
        name: 'Cleaning Carts',
        category: 'cleaning-equipment-tools',
        image: '/assets/images/products/cleaning-cart.webp',
        imageAlt: 'Janitorial service cart trolley with shelves and waste collection bag',
        description:
          'Mobile housekeeping service trolleys designed for carrying cleaning supplies, replacement consumables, and waste bags during routine janitorial operations in commercial buildings.',
        specifications: [],
      },
      {
        id: 'floor-pads-accessories',
        name: 'Floor Pads & Accessories',
        category: 'cleaning-equipment-tools',
        image: '/assets/images/products/cleaning-pads-and-accessories.webp',
        imageAlt: 'Commercial floor scrubber machine pads and polishing accessories',
        description:
          'Circular floor machine pads designed for scrubbing, stripping, and buffing operations on commercial floor surfaces with rotary floor machines.',
        specifications: [],
      },
    ],
  },
  {
    id: 'safety-products',
    title: 'Safety Products',
    subtitle: 'Road Safety, Traffic Guidance & Waste Management Solutions',
    shortDescription:
      'Plastic safety barricades, reflective traffic cones, flexible delineator posts, waste containers, and pallets.',
    wholesaleHighlights: [
      'High-visibility reflective safety materials',
      'Roadway and facility traffic safety products',
      'Direct warehouse dispatch in Riyadh',
    ],
    subCategories: [
      {
        id: 'plastic-safety-barricades',
        name: 'Plastic Safety Barricades',
        category: 'safety-products',
        image: '/assets/images/products/plastic-safety-barricades.webp',
        imageAlt: 'Modular interlocking plastic safety barricades for perimeter control',
        description:
          'Interlocking plastic barricades engineered for crowd guidance, temporary maintenance perimeters, pedestrian channelization, and safety zoning across commercial facilities.',
        specifications: [],
        popular: true,
      },
      {
        id: 'safety-cones',
        name: 'Safety Cones',
        category: 'safety-products',
        image: '/assets/images/products/safety-cone.webp',
        imageAlt: 'High-visibility traffic safety cones for work zone and hazard demarcation',
        description:
          'Cone markers designed for delineating temporary work zones, wet floor areas, parking bays, and maintenance points in commercial and outdoor premises.',
        specifications: [],
      },
      {
        id: 'flexible-cylinders-cones',
        name: 'Flexible Cylinders & Cones',
        category: 'safety-products',
        image: '/assets/images/products/safety-cylinder.webp',
        imageAlt: 'Flexible delineator posts and rebound safety cylinders for traffic guidance',
        description:
          'Flexible delineators and safety guide posts designed for vehicle route channelization, lane separation, and boundary marking in parking garages and commercial premises.',
        specifications: [],
      },
      {
        id: 'waste-containers',
        name: 'Waste Containers',
        category: 'safety-products',
        image: '/assets/images/products/waste-bins.webp',
        imageAlt: 'Heavy-duty wheeled commercial mobile waste containers and refuse bins',
        description:
          'Mobile refuse containers and wheeled bins designed for central waste collection and disposal in commercial properties, residential compounds, and business facilities.',
        specifications: [],
      },
      {
        id: 'plastic-palettes',
        name: 'Plastic Palettes',
        category: 'safety-products',
        image: '/assets/images/products/plastic-pallets.webp',
        imageAlt: 'Heavy-duty industrial molded plastic pallets for warehouse material handling',
        description:
          'Molded plastic pallets designed for storing, stacking, and transporting packaged inventory with forklifts and pallet jacks in warehouse and logistics environments.',
        specifications: [],
      },
    ],
  },
];

/**
 * Official division showcase hero images for homepage cards.
 */
const DIVISION_HERO_IMAGES: Record<CategoryId, { image: string; imageAlt: string }> = {
  'cleaning-materials': {
    image: '/assets/images/product-section-product-1.webp',
    imageAlt: 'Commercial cleaning chemical containers and industrial solutions',
  },
  'hygiene-disposables': {
    image: '/assets/images/product-section-product-2.webp',
    imageAlt: 'Paper tissue rolls, commercial trash liners, plastic drums and hygiene supplies',
  },
  'cleaning-equipment-tools': {
    image: '/assets/images/product-section-product-4.webp',
    imageAlt: 'Janitorial cleaning equipment, microfiber cloths and commercial tools',
  },
  'safety-products': {
    image: '/assets/images/product-section-product-3.webp',
    imageAlt: 'Roadway safety barricades, traffic cones and commercial waste containers',
  },
};

/**
 * Flat CATEGORIES list with dynamically computed product counts.
 * Used for Header, Footer, Inquiry dropdown, and Homepage showcase.
 */
export const CATEGORIES: CategoryInfo[] = DIVISIONS.map((div) => {
  const count = div.subCategories.length;
  const countLabel = count === 1 ? '1 Product Family' : `${count} Products`;
  return {
    id: div.id,
    title: div.title,
    shortDescription: div.shortDescription,
    image: DIVISION_HERO_IMAGES[div.id].image,
    imageAlt: DIVISION_HERO_IMAGES[div.id].imageAlt,
    itemCountLabel: countLabel,
  };
});

/**
 * Official client-approved displayed products list (26 items total).
 * Strict adherence to the official product range:
 * - Category 1 (Cleaning Materials): 9 products
 * - Category 2 (Hygiene & Disposable Products): 7 product families (including Plastic Drums)
 * - Category 3 (Cleaning Equipment & Tools): 5 product families
 * - Category 4 (Safety Products): 5 product families
 */
export const PRODUCTS: ProductItem[] = DIVISIONS.flatMap((div) =>
  div.subCategories.map((sub) => ({
    id: sub.id,
    name: sub.name,
    category: sub.category,
    description: sub.description,
    specifications: sub.specifications,
    packagingNote: sub.packagingNote,
    image: sub.image,
    imageAlt: sub.imageAlt,
    featured: sub.popular,
  })),
);

/**
 * Archived / historical records preserved for data safety per Section 9.
 * Kept recoverable; not rendered in active catalogue display.
 */
export const ARCHIVED_PRODUCTS: readonly ProductItem[] = [
  {
    id: 'chemical-open-top-barrels',
    name: 'Chemical Storage Barrels with Galvanized Clamp Rings',
    category: 'hygiene-disposables',
    description:
      'Wide-mouth open-top HDPE barrels with heavy-duty locking rings for solids, powders, and liquids.',
    specifications: ['30L Open-Top', '60L Clamp-Ring', '120L Barrel', '220L Full-Open'],
    packagingNote: 'Airtight EPDM gasket with galvanized steel locking ring',
    image: '/assets/images/products/hdpe-plastic-drums.webp',
    imageAlt: 'Chemical storage barrels with galvanized clamp rings',
  },
  {
    id: 'indoor-recycling-bins',
    name: 'Commercial Indoor Recycling & Waste Separation Stations',
    category: 'safety-products',
    description:
      'Color-coded multi-stream sorting bins for corporate office lobbies, schools, and hospitals.',
    specifications: ['3-Compartment Station', '4-Stream Center', '60L Slim Bin'],
    packagingNote: 'Supplied with Arabic/English categorization labels',
    image: '/assets/images/products/waste-bins.webp',
    imageAlt: 'Colour-coded indoor waste and recycling stations',
  },
] as const;

export const ALL_PRODUCTS = PRODUCTS;
