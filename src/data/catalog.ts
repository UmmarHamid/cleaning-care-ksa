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

export interface SubCategoryItem {
  id: string;
  name: string;
  category: CategoryId;
  shortDescription: string;
  specifications: string[]; // Wholesale capacities, sizes, gauges
  packagingNote: string;
  popular?: boolean;
}

export interface DivisionCategory extends CategoryInfo {
  subtitle: string;
  subCategories: SubCategoryItem[];
  wholesaleHighlights: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: CategoryId;
  shortDescription: string;
  specifications: string[];
  packagingNote?: string;
  image: string;
  featured?: boolean;
}

export const DIVISIONS: DivisionCategory[] = [
  {
    id: 'cleaning-materials',
    title: 'Cleaning Materials',
    subtitle: 'Industrial & Institutional Chemical Formulations',
    shortDescription:
      'Heavy-duty commercial grade cleaners, disinfectants, degreasers, floor care and detergents.',
    image: '/assets/images/product-section-product-1.jpg',
    imageAlt: 'Commercial cleaning chemical containers and industrial solutions',
    itemCountLabel: '9 Sub-Categories',
    wholesaleHighlights: [
      'High-concentration industrial blending',
      'Available in 5L cans up to 200L bulk drums',
      'Hospital & commercial clinical compliance',
      'Direct warehouse dispatch in Riyadh',
    ],
    subCategories: [
      {
        id: 'multi-purpose-cleaners',
        name: 'Multi-Purpose Cleaners',
        category: 'cleaning-materials',
        shortDescription:
          'High-concentration surface cleaners for commercial floors, tiles, marble, and counters.',
        specifications: ['5L Jerrycan', '20L Jerrycan', '200L Drum Bulk'],
        packagingNote: 'Pallet of 48 cans / Bulk drum dispatch',
        popular: true,
      },
      {
        id: 'disinfectants-sanitizers',
        name: 'Disinfectants & Surface Sanitizers',
        category: 'cleaning-materials',
        shortDescription:
          'Hospital-grade broad-spectrum antimicrobial sanitizers and surface disinfectants.',
        specifications: ['750ml Spray', '5L Jerrycan', '20L Bulk Drum'],
        packagingNote: 'Certified antibacterial & antiviral clinical formulation',
        popular: true,
      },
      {
        id: 'commercial-glass-cleaners',
        name: 'Commercial Glass Cleaners',
        category: 'cleaning-materials',
        shortDescription:
          'Streak-free quick-drying formula for commercial storefronts, architectural glass, and mirrors.',
        specifications: ['750ml Trigger', '5L Refill Can', '20L Jerrycan'],
        packagingNote: 'Bulk refill cartons for facility managers',
      },
      {
        id: 'floor-care-cleaners',
        name: 'Floor Cleaners & Polishers',
        category: 'cleaning-materials',
        shortDescription:
          'High-shine neutral floor cleaners formulated for marble, terrazzo, polished concrete, and epoxy.',
        specifications: ['5L Can', '20L Jerrycan', '200L Drum'],
        packagingNote: 'Compatible with commercial floor scrubbing machines',
        popular: true,
      },
      {
        id: 'heavy-duty-degreasers',
        name: 'Heavy-Duty Industrial Degreasers',
        category: 'cleaning-materials',
        shortDescription:
          'Industrial solvent and alkaline degreasers for grease, oil, and workshop machinery cleaning.',
        specifications: ['5L Can', '20L Jerrycan', '200L Steel Drum'],
        packagingNote: 'Heavy-duty industrial formulation',
        popular: true,
      },
      {
        id: 'washroom-cleaners',
        name: 'Washroom Cleaners & Descalers',
        category: 'cleaning-materials',
        shortDescription:
          'Acidic and neutral bathroom cleaners for limescale, mineral deposit removal, and sanitization.',
        specifications: ['1L Bottle', '5L Can', '20L Jerrycan'],
        packagingNote: 'Carton of 12 x 1L / 4 x 5L wholesale case',
      },
      {
        id: 'carpet-shampoos',
        name: 'Carpet Shampoos & Fabric Cleaners',
        category: 'cleaning-materials',
        shortDescription:
          'Low-foaming extraction carpet shampoos for hotel ballrooms, prayer halls, and corporate offices.',
        specifications: ['5L Can', '20L Jerrycan'],
        packagingNote: 'Formulated for injection/extraction machines',
      },
      {
        id: 'industrial-detergents',
        name: 'Industrial & Laundry Detergents',
        category: 'cleaning-materials',
        shortDescription:
          'Commercial laundry powders, liquid detergents, and stain removers for hotel and hospital linens.',
        specifications: ['10kg Bag', '25kg Industrial Sack', '20L Liquid'],
        packagingNote: 'Heavy-duty commercial laundry grade',
      },
      {
        id: 'room-fresheners',
        name: 'Air & Room Fresheners',
        category: 'cleaning-materials',
        shortDescription:
          'Long-lasting commercial room deodorizers and aerosol fresheners for hospitality and corporate lobbies.',
        specifications: ['300ml Aerosol', '500ml Trigger Spray', '5L Refill'],
        packagingNote: 'Wholesale cases of 24 units',
      },
    ],
  },
  {
    id: 'hygiene-disposables',
    title: 'Hygiene & Disposables',
    subtitle: 'Commercial Paper, Heavy-Duty Liners & PPE Supplies',
    shortDescription:
      'Paper towels, tissue rolls, heavy-duty garbage bags (10G–100G), tableware, PPE, soaps and sanitizers.',
    image: '/assets/images/product-section-product-2.jpg',
    imageAlt: 'Paper tissue rolls, commercial trash liners and hygiene supplies',
    itemCountLabel: '7 Sub-Categories',
    wholesaleHighlights: [
      'Complete garbage bag gauge range: 10G to 100G',
      'Virgin pulp & recycled commercial paper rolls',
      'Bulk catering tableware & certified nitrile PPE',
      'Palletized supply for camps, towers & hotels',
    ],
    subCategories: [
      {
        id: 'paper-towels-tissue-rolls',
        name: 'Commercial Paper Towels & Maxi Rolls',
        category: 'hygiene-disposables',
        shortDescription:
          'Jumbo toilet rolls, Maxi rolls, C-fold towels, and centerpull dispenser rolls.',
        specifications: ['Maxi Roll 300M', 'Centerpull 2-Ply', 'C-Fold Towels', 'Jumbo Roll 2-Ply'],
        packagingNote: 'Bulk wrapped packs / Pallet distribution',
        popular: true,
      },
      {
        id: 'heavy-duty-garbage-bags',
        name: 'Heavy-Duty Commercial Garbage Bags',
        category: 'hygiene-disposables',
        shortDescription:
          'Tear-resistant LDPE and HDPE trash liners engineered for municipal, hospital, and construction waste.',
        specifications: ['10G', '20G', '30G', '50G', '55G', '70G', '90G', '100G'],
        packagingNote: 'Rolls packed in 25kg/50kg master export cartons',
        popular: true,
      },
      {
        id: 'bulk-shopping-bags',
        name: 'Custom & Bulk Shopping Bags',
        category: 'hygiene-disposables',
        shortDescription:
          'Standard and reinforced carrier shopping bags for retail chains, supermarkets, and wholesale stores.',
        specifications: ['Small Bulk', 'Medium Bulk', 'Large Bulk', 'Jumbo Heavy-Duty'],
        packagingNote: 'Available plain or custom corporate branded in bulk',
      },
      {
        id: 'disposable-tableware',
        name: 'Disposable Tableware & Food Packaging',
        category: 'hygiene-disposables',
        shortDescription:
          'Disposable plates, bowls, cups, spoons, forks, and food containers for worker camps and catering.',
        specifications: ['Plates Pack', 'Bowls Pack', 'Hot/Cold Cups', 'Cutlery Set Bulk'],
        packagingNote: 'Hygienically packaged food-grade cartons',
      },
      {
        id: 'liquid-soaps-sanitizers',
        name: 'Commercial Liquid Soaps & Sanitizers',
        category: 'hygiene-disposables',
        shortDescription:
          'Antibacterial hand soaps, luxury foam refills, and alcohol-based gel hand sanitizers.',
        specifications: ['500ml Pump', '5L Refill Can', '20L Bulk Jerrycan'],
        packagingNote: 'Standard dispenser cartridges and bulk refill jugs',
        popular: true,
      },
      {
        id: 'disposable-gloves-ppe',
        name: 'Disposable Gloves & Personal Protective Equipment',
        category: 'hygiene-disposables',
        shortDescription:
          'Nitrile, latex, and vinyl gloves, disposable face masks, aprons, and shoe covers for facility hygiene.',
        specifications: ['Nitrile (S/M/L/XL)', 'Latex 100-pack', 'Vinyl 100-pack', 'PE Aprons'],
        packagingNote: 'Cases of 10 boxes (1,000 gloves per carton)',
        popular: true,
      },
      {
        id: 'foil-cling-rolls',
        name: 'Aluminium Foil & Commercial Cling Film',
        category: 'hygiene-disposables',
        shortDescription:
          'Heavy-duty food-grade aluminium foil and stretch cling film rolls for central kitchens and catering.',
        specifications: ['Foil 30cm x 150M', 'Foil 45cm x 150M', 'Cling 45cm x 300M'],
        packagingNote: 'Cutter box packaging / Master catering carton',
      },
    ],
  },
  {
    id: 'plastic-drums',
    title: 'Plastic Drums & Containers',
    subtitle: 'Industrial Wheeled Bins & HDPE Chemical Drums',
    shortDescription:
      'Industrial waste bins, storage drums and wheeled containers in multiple capacities (10G–1100G).',
    image: '/assets/images/product-section-product-3.jpg',
    imageAlt: 'Commercial wheeled plastic waste containers and heavy-duty storage drums',
    itemCountLabel: '4 Sub-Categories',
    wholesaleHighlights: [
      'Full capacity range: 10G to 1100G',
      'Wheeled bins from 120L to 1100L with foot pedals',
      'EN840 certified virgin HDPE UV-stabilized plastic',
      'Color-coded municipal sorting options (Green, Yellow, Blue, Charcoal)',
    ],
    subCategories: [
      {
        id: 'wheeled-waste-containers',
        name: 'Commercial Wheeled Waste Containers (120L–1100L)',
        category: 'plastic-drums',
        shortDescription:
          'EN840 certified 2-wheeled and 4-wheeled industrial mobile waste dumpsters with pedal options.',
        specifications: ['120L Pedal Bin', '240L Heavy-Duty', '660L 4-Wheeled', '1100L Dumpster'],
        packagingNote: 'Stackable nested shipment from Riyadh warehouse',
        popular: true,
      },
      {
        id: 'hdpe-storage-drums',
        name: 'Heavy-Duty HDPE Industrial Storage Drums',
        category: 'plastic-drums',
        shortDescription:
          'Blow-molded chemical and water storage drums with leak-proof screw caps and carrying handles.',
        specifications: ['10G', '20G', '30G', '50G', '55G', '70G', '90G', '100G'],
        packagingNote: 'UN-rated for chemical & industrial transport',
        popular: true,
      },
      {
        id: 'chemical-open-top-barrels',
        name: 'Chemical Storage Barrels with Galvanized Clamp Rings',
        category: 'plastic-drums',
        shortDescription:
          'Wide-mouth open-top HDPE barrels with heavy-duty locking rings for solids, powders, and liquids.',
        specifications: ['30L Open-Top', '60L Clamp-Ring', '120L Barrel', '220L Full-Open'],
        packagingNote: 'Airtight EPDM gasket with galvanized steel locking ring',
      },
      {
        id: 'indoor-recycling-bins',
        name: 'Commercial Indoor Recycling & Waste Separation Stations',
        category: 'plastic-drums',
        shortDescription:
          'Color-coded multi-stream sorting bins for corporate office lobbies, schools, and hospitals.',
        specifications: ['3-Compartment Station', '4-Stream Center', '60L Slim Bin', 'Stainless Trim'],
        packagingNote: 'Supplied with Arabic/English categorization labels',
      },
    ],
  },
  {
    id: 'equipment-safety',
    title: 'Cleaning Equipment & Safety',
    subtitle: 'Professional Janitorial Hardware & Traffic Safety Equipment',
    shortDescription:
      'Janitorial carts, wringer mops, traffic cones (50cm/75cm/1M), safety barricades, and plastic pallets.',
    image: '/assets/images/product-section-product-4.jpg',
    imageAlt: 'Janitorial cleaning equipment, microfiber cloths and road safety products',
    itemCountLabel: '8 Sub-Categories',
    wholesaleHighlights: [
      'Traffic safety cones in 50cm, 75cm, 1M with 8kg–20kg bases',
      'Modular 1M x 1M interlocking road safety barricades',
      'Heavy-duty rackable HDPE plastic pallets',
      'Full commercial housekeeping carts & wringer systems',
    ],
    subCategories: [
      {
        id: 'janitorial-carts',
        name: 'Commercial Janitorial Housekeeping Carts',
        category: 'equipment-safety',
        shortDescription:
          'Ergonomic cleaning trolleys with non-marking wheels, vinyl waste bags, and storage shelves.',
        specifications: ['Standard 3-Shelf', 'Lockable Cabinet Cart', 'Heavy-Duty Hotel Trolley'],
        packagingNote: 'Flat-pack carton with quick-assembly hardware',
        popular: true,
      },
      {
        id: 'mop-wringer-buckets',
        name: 'Downward-Press Commercial Mop Wringer Buckets',
        category: 'equipment-safety',
        shortDescription:
          'High-efficiency commercial mop buckets with down-press wringer mechanisms and dirty water dividers.',
        specifications: ['20L Single Bucket', '32L Heavy Wringer', 'Dual 36L Division System'],
        packagingNote: 'Durable corrosion-resistant nylon wheels',
        popular: true,
      },
      {
        id: 'microfiber-cleaning-cloths',
        name: 'HACCP Color-Coded Microfiber Cleaning Cloths',
        category: 'equipment-safety',
        shortDescription:
          'High-density 300GSM microfiber towels for lint-free, streak-free hospital and office cleaning.',
        specifications: ['Blue (General)', 'Red (Restroom)', 'Yellow (Disinfection)', 'Green (Kitchen)'],
        packagingNote: 'Packs of 10 / Master bulk carton of 200 cloths',
      },
      {
        id: 'brooms-brushes-squeegees',
        name: 'Commercial Brooms, Floor Scrubbers & Squeegees',
        category: 'equipment-safety',
        shortDescription:
          'Heavy-duty floor wipers, industrial push brooms, and telescopic handles for facility maintenance.',
        specifications: ['45cm Wiper', '60cm Floor Squeegee', 'Industrial Stiff Broom', 'Aluminium Pole'],
        packagingNote: 'Wholesale bundles with threaded heavy-duty handles',
      },
      {
        id: 'traffic-safety-cones',
        name: 'Traffic Safety Cones with Weighted Rubber Bases',
        category: 'equipment-safety',
        shortDescription:
          'UV-stabilized high-visibility orange road cones with reflective white collars and heavy bases.',
        specifications: ['50CM (8KG Base)', '75CM (12KG Base)', '1M (15KG Base)', '1M (20KG Base)'],
        packagingNote: 'Palletized bundles for highway & construction projects',
        popular: true,
      },
      {
        id: 'safety-barricades',
        name: 'Modular Interlocking Plastic Safety Barricades',
        category: 'equipment-safety',
        shortDescription:
          'Durable red-and-white modular safety fencing for crowd management, construction zones, and hazards.',
        specifications: ['1M x 1M Interlocking', '1.5M Heavy Barrier', 'Water-Fillable Base'],
        packagingNote: 'Nestable design for rapid truck dispatch in Riyadh',
        popular: true,
      },
      {
        id: 'flexible-delineator-cylinders',
        name: 'Flexible Delineator Safety Cylinders & Bollards',
        category: 'equipment-safety',
        shortDescription:
          'Impact-resistant rebounding polyurethane safety bollards for parking structures and lane dividers.',
        specifications: ['75cm Reflective', '1M Spring Delineator', 'Surface Anchor Kit'],
        packagingNote: 'Supplied with concrete/asphalt bolt fixings',
      },
      {
        id: 'hdpe-plastic-pallets',
        name: 'Heavy-Duty Rackable & Nestable HDPE Plastic Pallets',
        category: 'equipment-safety',
        shortDescription:
          'Hygienic, washable 4-way entry plastic pallets for warehouse racking, food, and pharmaceutical storage.',
        specifications: ['1200x1000mm Rackable (1.5T)', '1200x800mm Euro (1.2T)', 'Nestable Light (1T)'],
        packagingNote: 'High-density polyethylene for long-term warehouse operations',
        popular: true,
      },
    ],
  },
];

// Flat CATEGORIES list for Header, Footer, Inquiry dropdown, etc.
export const CATEGORIES: CategoryInfo[] = DIVISIONS.map((div) => ({
  id: div.id,
  title: div.title,
  shortDescription: div.shortDescription,
  image: div.image,
  imageAlt: div.imageAlt,
  itemCountLabel: div.itemCountLabel,
}));

// Backward-compatible flattened PRODUCTS list
export const PRODUCTS: ProductItem[] = DIVISIONS.flatMap((div) =>
  div.subCategories.map((sub) => ({
    id: sub.id,
    name: sub.name,
    category: sub.category,
    shortDescription: sub.shortDescription,
    specifications: sub.specifications,
    packagingNote: sub.packagingNote,
    image: div.image,
    featured: sub.popular,
  })),
);
