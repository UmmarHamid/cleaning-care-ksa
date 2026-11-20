export type CategoryId =
  | "cleaning-materials"
  | "hygiene-disposables"
  | "plastic-drums"
  | "equipment-safety";

export interface CategoryInfo {
  id: CategoryId;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
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

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "cleaning-materials",
    title: "Cleaning Materials",
    shortDescription:
      "Industrial & commercial grade cleaners, disinfectants, degreasers, floor care and more.",
    image: "/assets/category-1.webp",
    imageAlt: "Commercial cleaning chemical containers",
  },
  {
    id: "hygiene-disposables",
    title: "Hygiene & Disposables",
    shortDescription:
      "Paper towels, tissue rolls, garbage bags, disposable tableware, PPE, soaps and sanitizers.",
    image: "/assets/category-2.webp",
    imageAlt: "Paper tissue rolls and hygiene supplies",
  },
  {
    id: "plastic-drums",
    title: "Plastic Drums & Containers",
    shortDescription:
      "Waste bins, drums and wheeled containers in multiple capacities (10G–1100G) with pedal options.",
    image: "/assets/category-3.webp",
    imageAlt: "Commercial wheeled plastic waste containers",
  },
  {
    id: "equipment-safety",
    title: "Cleaning Equipment & Safety",
    shortDescription:
      "Mops, cleaning carts, microfiber cloths, safety cones, barricades, floor pads and heavy-duty pallets.",
    image: "/assets/category-4.webp",
    imageAlt: "Janitorial cleaning equipment and safety products",
  },
];

export const PRODUCTS: ProductItem[] = [
  // 1. Cleaning Materials
  {
    id: "multi-purpose-cleaner",
    name: "Multi-Purpose Cleaners",
    category: "cleaning-materials",
    shortDescription: "Commercial & industrial grade high-concentration surface cleaners.",
    specifications: ["5L", "20L Jerrycan", "Custom Bulk Drum"],
    packagingNote: "Heavy-duty HDPE containers",
    image: "/assets/category-1.webp",
    featured: true,
  },
  {
    id: "disinfectants-sanitizers",
    name: "Disinfectants & Surface Sanitizers",
    category: "cleaning-materials",
    shortDescription: "Hospital-grade antimicrobial sanitizers and surface disinfectants.",
    specifications: ["5L", "20L", "Spray 750ml"],
    image: "/assets/category-1.webp",
    featured: true,
  },
  {
    id: "glass-cleaner",
    name: "Commercial Glass Cleaners",
    category: "cleaning-materials",
    shortDescription: "Streak-free formula for storefronts, glass partitions and facades.",
    specifications: ["5L", "20L", "Trigger Spray"],
    image: "/assets/category-1.webp",
  },
  {
    id: "heavy-duty-degreaser",
    name: "Heavy-Duty Industrial Degreasers",
    category: "cleaning-materials",
    shortDescription: "Fast-acting degreasing solution for kitchens, garages, and workshops.",
    specifications: ["20L Jerrycan", "200L Drum"],
    image: "/assets/category-1.webp",
    featured: true,
  },
  {
    id: "floor-care-cleaner",
    name: "Floor Cleaners & Polishers",
    category: "cleaning-materials",
    shortDescription: "High-shine floor neutral cleaners for marble, terrazzo, tile and epoxy.",
    specifications: ["5L", "20L"],
    image: "/assets/category-1.webp",
  },

  // 2. Hygiene & Disposables
  {
    id: "jumbo-tissue-paper-towels",
    name: "Paper Towels & Jumbo Tissue Rolls",
    category: "hygiene-disposables",
    shortDescription: "High-absorbency commercial maxi rolls and folded centerfeed towels.",
    specifications: ["Maxi Roll", "Centerfeed", "Interfold V-Fold", "Autocut"],
    image: "/assets/category-2.webp",
    featured: true,
  },
  {
    id: "heavy-duty-garbage-bags",
    name: "Heavy-Duty Garbage Bags",
    category: "hygiene-disposables",
    shortDescription: "Puncture-resistant LDPE/HDPE commercial trash liners.",
    specifications: ["10G", "20G", "30G", "50G", "55G", "70G", "90G", "100G"],
    packagingNote: "Available in black, yellow, clear and medical red",
    image: "/assets/category-2.webp",
    featured: true,
  },
  {
    id: "disposable-gloves-ppe",
    name: "Disposable PPE & Gloves",
    category: "hygiene-disposables",
    shortDescription: "Nitrile, vinyl, and latex examination & food-service grade gloves.",
    specifications: ["Small", "Medium", "Large", "X-Large"],
    image: "/assets/category-2.webp",
  },
  {
    id: "liquid-hand-soap",
    name: "Liquid Hand Soaps & Sanitizers",
    category: "hygiene-disposables",
    shortDescription: "Gentle moisturizing foam and liquid hand washes for high-traffic restrooms.",
    specifications: ["5L Refill", "20L Bulk", "Wall-Mount Cartridge"],
    image: "/assets/category-2.webp",
  },

  // 3. Plastic Drums & Waste Containers
  {
    id: "commercial-wheeled-waste-containers",
    name: "Industrial Wheeled Waste Containers",
    category: "plastic-drums",
    shortDescription: "UV-stabilized HDPE outdoor and facility waste containers with solid rubber wheels.",
    specifications: ["120G", "240G", "360G", "660G", "1100G"],
    packagingNote: "Available with pedal mechanism and color-coded lids",
    image: "/assets/category-3.webp",
    featured: true,
  },
  {
    id: "indoor-pedal-waste-bins",
    name: "Commercial Indoor Pedal Bins",
    category: "plastic-drums",
    shortDescription: "Hands-free foot pedal bins for clinics, offices, and catering kitchens.",
    specifications: ["10G", "20G", "30G", "50G", "55G", "70G", "90G", "100G"],
    image: "/assets/category-3.webp",
  },
  {
    id: "storage-drums-containers",
    name: "Heavy-Duty Plastic Storage Drums",
    category: "plastic-drums",
    shortDescription: "Tight-head and open-top plastic drums for chemical and bulk fluid storage.",
    specifications: ["30L", "60L", "120L", "200L / 55G"],
    image: "/assets/category-3.webp",
  },

  // 4. Cleaning Equipment & Safety
  {
    id: "janitorial-cleaning-carts",
    name: "Commercial Janitorial Carts",
    category: "equipment-safety",
    shortDescription: "Multi-shelf utility trolleys with vinyl bag for housekeeping and janitorial teams.",
    specifications: ["3-Tier Standard", "High-Capacity Lockable"],
    image: "/assets/category-4.webp",
    featured: true,
  },
  {
    id: "mops-wringer-buckets",
    name: "Mops & Downward-Press Wringer Buckets",
    category: "equipment-safety",
    shortDescription: "Heavy-duty dual bucket mopping system with aluminum handles and cotton/Kentucky heads.",
    specifications: ["20L Single", "36L Dual Wringer"],
    image: "/assets/category-4.webp",
  },
  {
    id: "traffic-safety-cones",
    name: "Traffic & Facility Safety Cones",
    category: "equipment-safety",
    shortDescription: "Reflective high-visibility weighted PVC safety cones for parking and road safety.",
    specifications: ["50CM", "75CM", "1M"],
    packagingNote: "Weights: 8KG, 12KG, 15KG, 18KG, 20KG",
    image: "/assets/category-4.webp",
    featured: true,
  },
  {
    id: "safety-barricades",
    name: "Interlocking Safety Barricades",
    category: "equipment-safety",
    shortDescription: "Modular water/sand fillable plastic crowd and hazard barricades.",
    specifications: ["1M x 1M Interlocking"],
    image: "/assets/category-4.webp",
  },
  {
    id: "heavy-duty-plastic-pallets",
    name: "Heavy-Duty Plastic Pallets",
    category: "equipment-safety",
    shortDescription: "Racking-grade hygienic plastic pallets for cleanroom and warehouse storage.",
    specifications: ["1200 x 1000 mm", "1200 x 800 mm"],
    image: "/assets/category-4.webp",
  },
];
