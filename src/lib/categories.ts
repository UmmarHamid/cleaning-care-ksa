import { CategoryId } from '@/data/catalog';

export type CategorySlug =
  | 'cleaning-materials'
  | 'hygiene-disposables'
  | 'cleaning-equipment-tools'
  | 'safety-products';

/**
 * Canonical URL slugs specified in the design and technical requirements:
 * - All Products: /products
 * - Cleaning Materials: /products?category=cleaning-materials
 * - Hygiene & Disposable Products: /products?category=hygiene-disposables
 * - Cleaning Equipment & Tools: /products?category=cleaning-equipment-tools
 * - Safety Products: /products?category=safety-products
 */
export const CATEGORY_SLUG_MAP: Record<CategoryId, CategorySlug> = {
  'cleaning-materials': 'cleaning-materials',
  'hygiene-disposables': 'hygiene-disposables',
  'cleaning-equipment-tools': 'cleaning-equipment-tools',
  'safety-products': 'safety-products',
};

export const SLUG_TO_CATEGORY_MAP: Record<string, CategoryId> = {
  // Canonical Slugs
  'cleaning-materials': 'cleaning-materials',
  'hygiene-disposables': 'hygiene-disposables',
  'cleaning-equipment-tools': 'cleaning-equipment-tools',
  'safety-products': 'safety-products',

  // Backward-compatible Aliases
  'plastic-drums-containers': 'hygiene-disposables',
  'plastic-drums': 'hygiene-disposables',
  'cleaning-equipment-safety': 'cleaning-equipment-tools',
  'equipment-safety': 'cleaning-equipment-tools',
};

/**
 * Returns the canonical URL slug for a given CategoryId.
 */
export function getCategorySlug(category: CategoryId): CategorySlug {
  return CATEGORY_SLUG_MAP[category];
}

/**
 * Resolves a URL slug into a strictly typed CategoryId or 'all'.
 */
export function getCategoryFromSlug(slug: string | null | undefined): CategoryId | 'all' {
  if (!slug) return 'all';
  const normalized = slug.trim().toLowerCase();
  return SLUG_TO_CATEGORY_MAP[normalized] ?? 'all';
}

/**
 * Validates whether a given slug is a recognized category identifier.
 */
export function isValidCategorySlug(slug: string | null | undefined): boolean {
  if (!slug) return false;
  const normalized = slug.trim().toLowerCase();
  return normalized in SLUG_TO_CATEGORY_MAP;
}

/**
 * Generates the clean canonical URL for navigating to a category.
 */
export function buildCategoryUrl(category: CategoryId | 'all'): string {
  if (category === 'all') {
    return '/products';
  }
  const slug = getCategorySlug(category);
  return `/products?category=${slug}`;
}
