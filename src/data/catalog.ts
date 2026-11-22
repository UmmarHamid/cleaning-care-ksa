/**
 * Product Catalog Schema & Master Data for Cleaning Care Trading Co. (Riyadh, KSA)
 * Reference: docs/tech-spec.md, docs/plan.md & GEMINI.md
 */

export type CategoryId =
  | 'cleaning-materials'
  | 'hygiene-disposables'
  | 'plastic-drums'
  | 'equipment-safety';

export interface CategoryInfo {
  id: CategoryId;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  itemCountLabel?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: CategoryId;
  shortDescription: string;
  specifications: string[]; // e.g., ['10G', '20G', '30G', '50G', '55G', '70G', '90G', '100G'] or ['50CM', '75CM', '1M']
  packagingNote?: string;
  image: string; // Path under /assets/ or /images/
  featured?: boolean;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'cleaning-materials',
    title: 'Cleaning Materials',
    shortDescription:
      'Industrial & commercial grade cleaners, disinfectants, degreasers, floor care and detergents.',
    image: '/images/cat-cleaning-materials.webp',
    imageAlt:
      'Commercial cleaning chemical containers and industrial solutions',
    itemCountLabel: '9 Product Lines',
  },
  {
    id: 'hygiene-disposables',
    title: 'Hygiene & Disposables',
    shortDescription:
      'Paper towels, tissue rolls, heavy-duty garbage bags (10G–100G), tableware, PPE, soaps and sanitizers.',
    image: '/images/cat-hygiene-disposables.webp',
    imageAlt:
      'Paper tissue rolls, commercial trash liners and hygiene supplies',
    itemCountLabel: '7 Product Lines',
  },
  {
    id: 'plastic-drums',
    title: 'Plastic Drums & Containers',
    shortDescription:
      'Industrial waste bins, storage drums and wheeled containers in multiple capacities (10G–1100G).',
    image: '/images/cat-plastic-drums.webp',
    imageAlt:
      'Commercial wheeled plastic waste containers and heavy-duty storage drums',
    itemCountLabel: '4 Product Lines',
  },
  {
    id: 'equipment-safety',
    title: 'Cleaning Equipment & Safety',
    shortDescription:
      'Janitorial carts, wringer mops, traffic cones (50cm/75cm/1M), safety barricades, and plastic pallets.',
    image: '/images/cat-equipment-safety.webp',
    imageAlt:
      'Janitorial cleaning equipment, microfiber cloths and road safety products',
    itemCountLabel: '9 Product Lines',
  },
];

export const PRODUCTS: ProductItem[] = [
  // ==========================================
  // Division 1: Cleaning Materials (cleaning-materials)
  // ==========================================
  {
    id: 'multi-purpose-cleaner',
    name: 'Multi-Purpose Cleaners',
    category: 'cleaning-materials',
    shortDescription:
      'Commercial & industrial grade high-concentration surface cleaners for floors, tiles, and counters.',
    specifications: ['5L Jerrycan', '20L Jerrycan', '200L Drum Bulk'],
    packagingNote: 'Heavy-duty HDPE industrial containers',
    image: '/images/cat-cleaning-materials.webp',
    featured: true,
  },
  {
    id: 'disinfectants-sanitizers',
    name: 'Disinfectants & Surface Sanitizers',
    category: 'cleaning-materials',
    shortDescription:
      'Hospital-grade antimicrobial sanitizers and surface disinfectants formulated for clinical compliance.',
    specifications: ['750ml Spray', '5L Jerrycan', '20L Bulk'],
    packagingNote: 'Broad-spectrum antibacterial & antiviral certified',
    image: '/images/cat-cleaning-materials.webp',
    featured: true,
  },
  {
    id: 'glass-cleaner',
    name: 'Commercial Glass Cleaners',
    category: 'cleaning-materials',
    shortDescription:
      'Streak-free quick-drying formula for commercial storefronts, architectural glass, and mirrors.',
    specifications: ['750ml Trigger Spray', '5L Refill', '20L Jerrycan'],
    image: '/images/cat-cleaning-materials.webp',
  },
  {
    id: 'floor-care-cleaner',
    name: 'Floor Cleaners & Polishers',
    category: 'cleaning-materials',
    shortDescription:
      'High-shine neutral floor cleaners formulated for marble, terrazzo, polished concrete, tile, and epoxy.',
    specifications: ['5L Can', '20L Jerrycan', '200L Drum'],
    image: '/images/cat-cleaning-materials.webp',
    featured: true,
  },
  {
    id: 'heavy-duty-degreaser',
    name: 'Heavy-Duty Industrial Degreasers',
    category: 'cleaning-materials',
    shortDescription:
      'Fast-acting industrial solvent and water-based degreasers for commercial kitchens, workshops, and plant machinery.',
    specifications: ['5L Can', '20L Jerrycan', '200L Drum'],
    packagingNote:
      'Dissolves petroleum grease, vegetable oils, and carbon deposits',
    image: '/images/cat-cleaning-materials.webp',
    featured: true,
  },
  {
    id: 'washroom-cleaner-descaler',
    name: 'Washroom Cleaners & Acid Descalers',
    category: 'cleaning-materials',
    shortDescription:
      'Powerful descaling and anti-limescale toilet cleaners for public restrooms and hospitality facilities.',
    specifications: ['1L Squeeze Bottle', '5L Refill', '20L Bulk'],
    image: '/images/cat-cleaning-materials.webp',
  },
  {
    id: 'carpet-upholstery-shampoo',
    name: 'Carpet & Upholstery Shampoos',
    category: 'cleaning-materials',
    shortDescription:
      'Low-foam extraction cleaner for commercial carpet extractors and fabric upholstery in corporate offices.',
    specifications: ['5L Can', '20L Jerrycan'],
    image: '/images/cat-cleaning-materials.webp',
  },
  {
    id: 'industrial-laundry-detergent',
    name: 'Industrial & Laundry Detergents',
    category: 'cleaning-materials',
    shortDescription:
      'High-efficiency commercial laundry powders and liquid concentrates for hotels, hospitals, and linen services.',
    specifications: ['10KG Sack', '20KG Bulk Sack', '20L Liquid Can'],
    image: '/images/cat-cleaning-materials.webp',
  },
  {
    id: 'room-fresheners-air-care',
    name: 'Room Fresheners & Air Care Deodorizers',
    category: 'cleaning-materials',
    shortDescription:
      'Long-lasting fragrance sprays and automatic dispenser refills for lobbies, washrooms, and conference halls.',
    specifications: [
      '300ml Aerosol',
      'Dispenser Refill 250ml',
      '5L Liquid Bulk',
    ],
    image: '/images/cat-cleaning-materials.webp',
  },

  // ==========================================
  // Division 2: Hygiene & Disposable Products (hygiene-disposables)
  // ==========================================
  {
    id: 'jumbo-tissue-paper-towels',
    name: 'Paper Towels & Jumbo Tissue Rolls',
    category: 'hygiene-disposables',
    shortDescription:
      'High-absorbency commercial virgin pulp maxi rolls, centerfeed towels, and folded hand towels.',
    specifications: [
      'Maxi Roll 1-Ply',
      'Maxi Roll 2-Ply',
      'Centerfeed',
      'Interfold V-Fold',
      'Autocut',
    ],
    packagingNote:
      'Shrink-wrapped bulk packs of 6 rolls / 12 packs per master carton',
    image: '/images/cat-hygiene-disposables.webp',
    featured: true,
  },
  {
    id: 'heavy-duty-garbage-bags',
    name: 'Heavy-Duty Garbage Bags',
    category: 'hygiene-disposables',
    shortDescription:
      'Puncture-resistant LDPE and HDPE commercial waste disposal liners in all standard industrial capacities.',
    specifications: ['10G', '20G', '30G', '50G', '55G', '70G', '90G', '100G'],
    packagingNote:
      'Available in black, yellow hazard, clear recyclable, and medical red',
    image: '/images/cat-hygiene-disposables.webp',
    featured: true,
  },
  {
    id: 'commercial-shopping-bags',
    name: 'Commercial Shopping & Carry Bags',
    category: 'hygiene-disposables',
    shortDescription:
      'Reinforced handle plastic and biodegradable shopping bags for retail outlets and distribution.',
    specifications: ['Small', 'Medium', 'Large', 'Custom Bulk Specification'],
    packagingNote:
      'Custom logo printing available on bulk enterprise contracts',
    image: '/images/cat-hygiene-disposables.webp',
  },
  {
    id: 'disposable-tableware-cutlery',
    name: 'Disposable Tableware & Cutlery',
    category: 'hygiene-disposables',
    shortDescription:
      'Food-grade single-use catering disposables for staff cafeterias, events, and restaurants.',
    specifications: [
      'Plates',
      'Bowls',
      'Cups',
      'Spoons',
      'Forks',
      'Complete Combo Pack',
    ],
    image: '/images/cat-hygiene-disposables.webp',
  },
  {
    id: 'disposable-gloves-ppe',
    name: 'Disposable PPE & Examination Gloves',
    category: 'hygiene-disposables',
    shortDescription:
      'Powder-free medical examination and food-service grade nitrile, latex, and vinyl gloves.',
    specifications: ['Small', 'Medium', 'Large', 'X-Large'],
    packagingNote: 'Box of 100 pcs / 10 boxes per master carton',
    image: '/images/cat-hygiene-disposables.webp',
    featured: true,
  },
  {
    id: 'liquid-hand-soap',
    name: 'Liquid Hand Soaps & Sanitizers',
    category: 'hygiene-disposables',
    shortDescription:
      'Gentle antibacterial moisturizing foam and liquid hand washes for commercial dispensers.',
    specifications: [
      '500ml Pump',
      '5L Refill Can',
      '20L Bulk Drum',
      'Cartridge Refill 1L',
    ],
    image: '/images/cat-hygiene-disposables.webp',
  },
  {
    id: 'aluminium-foil-cling-film',
    name: 'Aluminium Foil & Cling Film Rolls',
    category: 'hygiene-disposables',
    shortDescription:
      'Heavy-gauge commercial food wrap rolls for restaurants, catering operations, and kitchen facilities.',
    specifications: [
      '30cm x 150M',
      '45cm x 150M',
      'Commercial Jumbo Cutter Box',
    ],
    image: '/images/cat-hygiene-disposables.webp',
  },

  // ==========================================
  // Division 3: Plastic Drums & Waste Containers (plastic-drums)
  // ==========================================
  {
    id: 'commercial-wheeled-waste-containers',
    name: 'Industrial Wheeled Waste Containers',
    category: 'plastic-drums',
    shortDescription:
      'Heavy-duty UV-stabilized HDPE outdoor and facility waste bins equipped with reinforced rubber wheels.',
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
    packagingNote:
      'Available with ergonomic foot pedal mechanisms and color-coded recycling lids',
    image: '/images/cat-plastic-drums.webp',
    featured: true,
  },
  {
    id: 'indoor-pedal-waste-bins',
    name: 'Commercial Indoor Pedal Bins',
    category: 'plastic-drums',
    shortDescription:
      'Hands-free foot pedal bins for hygiene-critical environments such as clinics, kitchens, and offices.',
    specifications: ['10G', '20G', '30G', '50G', '55G', '70G', '90G', '100G'],
    packagingNote:
      'Constructed with impact-resistant polypropylene with tight-closing lids',
    image: '/images/cat-plastic-drums.webp',
    featured: true,
  },
  {
    id: 'storage-drums-containers',
    name: 'Heavy-Duty Plastic Storage Drums',
    category: 'plastic-drums',
    shortDescription:
      'Tight-head and open-top UN-rated plastic drums for liquid chemicals, detergents, and industrial bulk goods.',
    specifications: ['30L', '60L', '120L', '200L / 55G', '1000L IBC Tote'],
    packagingNote:
      'High-density polyethylene (HDPE) with leak-proof gasket closures',
    image: '/images/cat-plastic-drums.webp',
    featured: true,
  },
  {
    id: 'open-top-material-drums',
    name: 'Open-Top Chemical & Material Barrels',
    category: 'plastic-drums',
    shortDescription:
      'Wide-mouth drums with galvanized locking clamp rings for powder chemicals, waste collection, and parts.',
    specifications: ['50L', '100L', '150L', '200L / 55G'],
    image: '/images/cat-plastic-drums.webp',
  },

  // ==========================================
  // Division 4: Cleaning Equipment & Safety Products (equipment-safety)
  // ==========================================
  {
    id: 'janitorial-cleaning-carts',
    name: 'Commercial Janitorial Carts',
    category: 'equipment-safety',
    shortDescription:
      'Multi-tier professional housekeeping trolleys with heavy-duty vinyl waste bags and tool organizers.',
    specifications: ['3-Tier Standard', 'High-Capacity Lockable Cabinet Cart'],
    image: '/images/cat-equipment-safety.webp',
    featured: true,
  },
  {
    id: 'mops-wringer-buckets',
    name: 'Mops & Downward-Press Wringer Buckets',
    category: 'equipment-safety',
    shortDescription:
      'Heavy-duty mobile mopping buckets with downward-pressure wringers, non-marking casters, and fiberglass handles.',
    specifications: [
      '20L Single Bucket',
      '36L Dual Separation Bucket',
      'Kentucky Cotton Head',
      'Microfiber Head',
    ],
    image: '/images/cat-equipment-safety.webp',
    featured: true,
  },
  {
    id: 'color-coded-microfiber-cloths',
    name: 'Color-Coded Microfiber Cleaning Cloths',
    category: 'equipment-safety',
    shortDescription:
      'Lint-free split-microfiber cloths designed for cross-contamination prevention in HACCP and healthcare environments.',
    specifications: [
      'Blue (General Areas)',
      'Red (Sanitary & Toilets)',
      'Yellow (Disinfection & Surfaces)',
      'Green (Food & Kitchen Areas)',
    ],
    packagingNote:
      'Pack of 10 pcs / Master carton of 100 pcs (40cm x 40cm, 320 GSM)',
    image: '/images/cat-equipment-safety.webp',
    featured: true,
  },
  {
    id: 'brooms-brushes-squeegees',
    name: 'Commercial Brooms, Brushes & Floor Wipers',
    category: 'equipment-safety',
    shortDescription:
      'Industrial floor squeegees with natural moss rubber blades, stiff outdoor sweeping brooms, and scrub brushes.',
    specifications: [
      '45cm Squeegee',
      '55cm Squeegee',
      '75cm Heavy Squeegee',
      '1M Industrial Wiper',
    ],
    image: '/images/cat-equipment-safety.webp',
  },
  {
    id: 'rotary-floor-pads-accessories',
    name: 'Floor Machine Pads & Buffer Accessories',
    category: 'equipment-safety',
    shortDescription:
      'Commercial rotary scrubbing, stripping, and polishing floor pads for single-disc and scrubber-dryer machines.',
    specifications: [
      '16 inch',
      '17 inch',
      '20 inch',
      'Black (Stripping)',
      'Red (Buffing)',
      'White (Polishing)',
    ],
    image: '/images/cat-equipment-safety.webp',
  },
  {
    id: 'traffic-safety-cones',
    name: 'Traffic & Facility Safety Cones',
    category: 'equipment-safety',
    shortDescription:
      'High-visibility orange PVC safety cones with 3M reflective sleeves for parking lots, warehouses, and roadside work.',
    specifications: ['50CM Height', '75CM Height', '1M Height'],
    packagingNote:
      'Weighted base options available: 8KG, 12KG, 15KG, 18KG, 20KG',
    image: '/images/cat-equipment-safety.webp',
    featured: true,
  },
  {
    id: 'safety-barricades',
    name: 'Interlocking Plastic Safety Barricades',
    category: 'equipment-safety',
    shortDescription:
      'Modular water- and sand-ballastable crowd and hazard barrier panels for construction sites and warehouses.',
    specifications: ['1M x 1M Interlocking Panel', '2M x 1M Heavy Panel'],
    packagingNote: 'Bright UV-resistant red and white high-visibility panels',
    image: '/images/cat-equipment-safety.webp',
    featured: true,
  },
  {
    id: 'flexible-safety-cylinders',
    name: 'Flexible Safety Cylinders & Delineators',
    category: 'equipment-safety',
    shortDescription:
      'Impact-recovery polyurethane flexible guide posts and bollards with reflective collars for traffic lanes.',
    specifications: ['75CM Flexible Post', '1M Spring-Base Delineator'],
    image: '/images/cat-equipment-safety.webp',
  },
  {
    id: 'heavy-duty-plastic-pallets',
    name: 'Heavy-Duty Industrial Plastic Pallets',
    category: 'equipment-safety',
    shortDescription:
      'Racking-grade, hygienic, 4-way entry plastic pallets for food processing, cleanrooms, and automated warehouses.',
    specifications: ['1200 x 1000 mm Standard', '1200 x 800 mm Euro Size'],
    packagingNote:
      'Static load capacity up to 6,000 KG / Dynamic load up to 1,500 KG',
    image: '/images/cat-equipment-safety.webp',
    featured: true,
  },
];

// ==========================================
// Utility Query Functions
// ==========================================

/**
 * Returns all products belonging to a given division/category.
 */
export function getProductsByCategory(category: CategoryId): ProductItem[] {
  return PRODUCTS.filter((item) => item.category === category);
}

/**
 * Finds a single product by its unique string identifier.
 */
export function getProductById(id: string): ProductItem | undefined {
  return PRODUCTS.find((item) => item.id === id);
}

/**
 * Returns all products marked as featured for showcase grids.
 */
export function getFeaturedProducts(): ProductItem[] {
  return PRODUCTS.filter((item) => item.featured);
}

/**
 * Searches products by keyword across name, description, and specifications,
 * with optional category filtering.
 */
export function searchProducts(
  query: string,
  category?: CategoryId | 'all',
): ProductItem[] {
  const normalized = query.trim().toLowerCase();

  return PRODUCTS.filter((item) => {
    if (category && category !== 'all' && item.category !== category) {
      return false;
    }
    if (!normalized) return true;

    const matchesName = item.name.toLowerCase().includes(normalized);
    const matchesDesc = item.shortDescription
      .toLowerCase()
      .includes(normalized);
    const matchesSpecs = item.specifications.some((spec) =>
      spec.toLowerCase().includes(normalized),
    );
    const matchesPkg = item.packagingNote
      ? item.packagingNote.toLowerCase().includes(normalized)
      : false;

    return matchesName || matchesDesc || matchesSpecs || matchesPkg;
  });
}

/**
 * Finds category metadata by its ID.
 */
export function getCategoryById(id: CategoryId): CategoryInfo | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}
