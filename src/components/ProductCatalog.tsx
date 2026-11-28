'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { PRODUCTS, CategoryId } from '@/data/catalog';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/Button';
import { buildCategoryUrl, getCategoryFromSlug, isValidCategorySlug } from '@/lib/categories';
import {
  Search,
  X,
  LayoutGrid,
  SprayCan,
  Package,
  Wrench,
  TrafficCone,
  ChevronDown,
  RotateCcw,
} from 'lucide-react';

const DEFAULT_VISIBLE_COUNT = 8;
const SHOW_MORE_STEP = 8;
const MIN_VISIBLE_COUNT = 1;
const MAX_VISIBLE_COUNT = 100;

interface CategoryTabItem {
  id: CategoryId | 'all';
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORY_TABS: CategoryTabItem[] = [
  { id: 'all', label: 'All Products', icon: LayoutGrid },
  { id: 'cleaning-materials', label: 'Cleaning Materials', icon: SprayCan },
  { id: 'hygiene-disposables', label: 'Hygiene & Disposable Products', icon: Package },
  { id: 'cleaning-equipment-tools', label: 'Cleaning Equipment & Tools', icon: Wrench },
  { id: 'safety-products', label: 'Safety Products', icon: TrafficCone },
];

export function ProductCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const rawCategoryParam = searchParams.get('category');
  const selectedCategory = useMemo(() => getCategoryFromSlug(rawCategoryParam), [rawCategoryParam]);

  const [searchInput, setSearchInput] = useState<string>('');
  const [appliedSearch, setAppliedSearch] = useState<string>('');
  const [initialCount, setInitialCount] = useState<number>(DEFAULT_VISIBLE_COUNT);
  const [visibleCount, setVisibleCount] = useState<number>(DEFAULT_VISIBLE_COUNT);
  const [countInput, setCountInput] = useState<string>(String(DEFAULT_VISIBLE_COUNT));

  const [prevCategory, setPrevCategory] = useState<CategoryId | 'all'>(selectedCategory);

  // Synchronize invalid or empty category query parameter in URL (fallback to All Products)
  useEffect(() => {
    if (rawCategoryParam !== null && !isValidCategorySlug(rawCategoryParam)) {
      router.replace(pathname, { scroll: false });
    }
  }, [rawCategoryParam, pathname, router]);

  // Reset visible count whenever category changes (via URL, back/forward, or click)
  if (prevCategory !== selectedCategory) {
    setPrevCategory(selectedCategory);
    if (visibleCount !== initialCount) {
      setVisibleCount(initialCount);
    }
  }

  // Compute live product counts per category from displayed products
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: PRODUCTS.length,
    };
    for (const product of PRODUCTS) {
      counts[product.category] = (counts[product.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filter products by selected category and search query
  const filteredProducts = useMemo(() => {
    const query = appliedSearch.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      // 1. Category Filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // 2. Search Query Filter
      if (!query) return true;

      const matchesName = product.name.toLowerCase().includes(query);
      const matchesDesc = product.description.toLowerCase().includes(query);
      const matchesPackaging = product.packagingNote?.toLowerCase().includes(query) ?? false;
      const matchesSpecs = product.specifications.some((spec) =>
        spec.toLowerCase().includes(query),
      );

      return matchesName || matchesDesc || matchesPackaging || matchesSpecs;
    });
  }, [selectedCategory, appliedSearch]);

  // Progressive Reveal Calculations
  const totalProducts = filteredProducts.length;
  const showingCount = Math.min(visibleCount, totalProducts);
  const currentProducts = filteredProducts.slice(0, showingCount);
  const remainingCount = totalProducts - showingCount;
  const hasMore = remainingCount > 0;
  const nextBatchCount = Math.min(SHOW_MORE_STEP, remainingCount);

  // Apply and validate custom initial visible count (desktop/tablet)
  const applyVisibleCount = (rawValue: string) => {
    const trimmed = rawValue.trim();
    const parsed = parseInt(trimmed, 10);

    if (!trimmed || isNaN(parsed) || parsed < MIN_VISIBLE_COUNT) {
      setCountInput(String(initialCount));
      return;
    }

    const clamped = Math.min(MAX_VISIBLE_COUNT, parsed);
    setInitialCount(clamped);
    setVisibleCount(clamped);
    setCountInput(String(clamped));
  };

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^\d+$/.test(val)) {
      setCountInput(val);
    }
  };

  const handleCountBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    applyVisibleCount(e.target.value);
  };

  const handleCountKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyVisibleCount((e.target as HTMLInputElement).value);
      (e.target as HTMLInputElement).blur();
    }
  };

  // Category Selection Handler
  const handleSelectCategory = (categoryId: CategoryId | 'all') => {
    setVisibleCount(initialCount);
    const targetUrl = buildCategoryUrl(categoryId);
    router.push(targetUrl, { scroll: false });
  };

  // Search Submit Handler
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputEl = e.currentTarget.querySelector('input') as HTMLInputElement | null;
    const query = inputEl ? inputEl.value : searchInput;
    setSearchInput(query);
    setAppliedSearch(query);
    setVisibleCount(initialCount);
  };

  // Search Clear Handler
  const handleClearSearch = () => {
    setSearchInput('');
    setAppliedSearch('');
    setVisibleCount(initialCount);
  };

  // Reset All Filters Handler
  const handleResetAll = () => {
    setSearchInput('');
    setAppliedSearch('');
    setVisibleCount(initialCount);
    router.push('/products', { scroll: false });
  };

  // Reveal 8 more products in place without scrolling
  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(totalProducts, prev + SHOW_MORE_STEP));
  };

  return (
    <div id='products-catalog' className='py-8 bg-page-bg scroll-mt-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Five Category Cards Row matching reference mockup */}
        <div
          role='tablist'
          aria-label='Product categories'
          className='grid grid-cols-2 min-[540px]:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8'
        >
          {CATEGORY_TABS.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            const count = categoryCounts[tab.id] ?? 0;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                role='tab'
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => handleSelectCategory(tab.id)}
                className={`group relative flex items-center gap-3 p-2 rounded-xl border text-left transition-all duration-200 cursor-pointer   h-full ${
                  isSelected
                    ? 'bg-brand-red text-white border-brand-red shadow-md'
                    : 'bg-white text-slate-dark border-border-subtle hover:border-brand-red/40 hover:bg-slate-50/80 shadow-xs'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white'
                  }`}
                >
                  <Icon className='w-5 h-5' />
                </div>
                <div className='flex-1 min-w-0 flex flex-col justify-center'>
                  <span
                    className={`font-heading font-bold text-xs leading-snug  ${
                      isSelected
                        ? 'text-white'
                        : 'text-slate-dark group-hover:text-brand-red transition-colors'
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={`text-2xs font-semibold mt-0.5 ${
                      isSelected ? 'text-white/85' : 'text-muted-gray'
                    }`}
                  >
                    ({count})
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Product Listing Toolbar: Left: Heading & Count | Centre: Search Products | Right: View & Sort */}
        <div className='flex flex-col items-center md:items-center md:flex-row  gap-4 mb-6 pb-4 border-b border-border-subtle'>
          {/* Left: Heading and Result Count */}
          <div className='flex flex-wrap items-baseline md:items-center gap-x-2.5 gap-y-1 shrink-0'>
            <span className='font-body text-xs sm:text-sm text-slate-500 whitespace-nowrap'>
              Showing {showingCount} of {totalProducts}{' '}
              {CATEGORY_TABS.find((tab) => tab.id === selectedCategory)?.label || 'Products'}
            </span>
          </div>

          {/* Centre: Product Search Field */}
          <div className='w-full md:mx-4'>
            <form
              onSubmit={handleSearchSubmit}
              className='relative flex items-center bg-white border border-border-subtle rounded-full shadow-subtle focus-within:border-brand-red focus-within:ring-2 focus-within:ring-brand-red/15 transition-all p-1 pl-3.5 sm:pl-4 overflow-hidden h-11'
            >
              <label htmlFor='product-catalog-search' className='sr-only'>
                Search products by name, gauge, capacity, or keyword
              </label>
              <input
                id='product-catalog-search'
                type='text'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder='Search products (e.g. cleaner, tissue, bin, mop, sanitizer etc)'
                className='flex-1 h-full text-xs sm:text-sm text-slate-dark placeholder-slate-400 bg-white focus:bg-white active:bg-white autofill:bg-white autofill:shadow-[inset_0_0_0px_1000px_#ffffff] autofill:[-webkit-text-fill-color:#0F172A] [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_#ffffff] [&:-webkit-autofill]:[-webkit-text-fill-color:#0F172A] [&:-webkit-autofill:focus]:shadow-[inset_0_0_0px_1000px_#ffffff] outline-none focus:outline-none focus:ring-0 border-none font-body px-1 sm:px-1.5 min-w-0 [color-scheme:light]'
              />
              {searchInput && (
                <button
                  type='button'
                  onClick={handleClearSearch}
                  className='p-1.5 sm:p-2 text-slate-400 hover:text-slate-600 focus:text-slate-600 focus:outline-none transition-colors cursor-pointer mr-1 shrink-0'
                  aria-label='Clear search'
                >
                  <X className='w-4 h-4' />
                </button>
              )}
              <Button
                type='submit'
                variant='primary'
                size='sm'
                rounded='full'
                className='h-9 px-5 sm:px-6 text-xs sm:text-sm shrink-0'
              >
                Search
              </Button>
            </form>
          </div>

          {/* Right: Custom Visible Count (hidden on mobile) */}
          <div className='hidden md:flex items-center justify-end gap-2.5 sm:gap-3 shrink-0'>
            <div className='flex items-center gap-2 h-11 text-xs font-semibold text-slate-500 whitespace-nowrap'>
              <label htmlFor='products-per-page-input' className='cursor-pointer text-slate-500'>
                Show:
              </label>
              <div className='relative h-11 flex items-center'>
                <input
                  id='products-per-page-input'
                  type='number'
                  min={MIN_VISIBLE_COUNT}
                  max={MAX_VISIBLE_COUNT}
                  step={1}
                  value={countInput}
                  onChange={handleCountChange}
                  onBlur={handleCountBlur}
                  onKeyDown={handleCountKeyDown}
                  className='w-14 sm:w-16 h-11 text-center font-heading font-bold text-xs sm:text-sm text-slate-dark bg-white border border-border-subtle rounded-xl px-1.5 outline-none hover:border-slate-400 focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all [color-scheme:light]'
                  aria-label='Number of products to show'
                />
              </div>
              <span className='text-xs font-semibold text-slate-500'>items</span>
            </div>
          </div>
        </div>

        {/* Active Search Filter Badge if search applied */}
        {appliedSearch && (
          <div className='flex items-center gap-2 mb-6'>
            <span className='text-xs text-slate-500'>Filtered by keyword:</span>
            <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red font-medium text-xs border border-brand-red/20'>
              &ldquo;{appliedSearch}&rdquo;
              <button
                type='button'
                onClick={handleClearSearch}
                className='p-0.5 hover:text-brand-red-dark transition-colors cursor-pointer'
                aria-label='Remove keyword filter'
              >
                <X className='w-3 h-3' />
              </button>
            </span>
            <button
              type='button'
              onClick={handleResetAll}
              className='text-xs text-slate-400 hover:text-slate-600 transition-colors underline cursor-pointer ml-2'
            >
              Reset all
            </button>
          </div>
        )}

        {/* Product Grid / Empty State */}
        {totalProducts > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 mb-12'>
            {currentProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 4} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className='bg-white border border-border-subtle rounded-2xl p-10 sm:p-14 text-center max-w-md mx-auto my-12 shadow-card'>
            <div className='w-12 h-12 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto mb-4'>
              <Search className='w-6 h-6' />
            </div>
            <h3 className='font-heading font-bold text-lg text-slate-dark mb-2'>
              No products found
            </h3>
            <p className='text-xs sm:text-sm text-muted-gray mb-6 leading-relaxed'>
              No products matched &ldquo;{appliedSearch}&rdquo; in the selected category. Try
              searching for general terms like &ldquo;cleaner&rdquo;, &ldquo;bag&rdquo;, or
              &ldquo;drum&rdquo;.
            </p>
            <Button
              variant='primary'
              size='md'
              onClick={handleResetAll}
              leftIcon={<RotateCcw className='w-4 h-4' />}
            >
              Reset Search &amp; Show All Products
            </Button>
          </div>
        )}

        {/* Show More Controls */}
        {hasMore && (
          <div className='py-2 flex flex-col items-center gap-3'>
            <Button
              variant='secondary'
              size='md'
              onClick={handleShowMore}
              rightIcon={<ChevronDown className='w-4 h-4' />}
              iconColor='brand'
              className='w-full sm:w-auto px-6'
            >
              Show More Products ({nextBatchCount} more)
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
