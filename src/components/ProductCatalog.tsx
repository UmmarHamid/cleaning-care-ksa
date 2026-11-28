'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
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
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';

const DEFAULT_PAGE_SIZE = 8;
const MIN_PAGE_SIZE = 1;
const MAX_PAGE_SIZE = 100;

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

type PaginationItem = number | 'ellipsis-start' | 'ellipsis-end';

function getPaginationItems(current: number, total: number): PaginationItem[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 4) {
    return [1, 2, 3, 4, 5, 'ellipsis-end', total];
  }

  if (current >= total - 3) {
    return [1, 'ellipsis-start', total - 4, total - 3, total - 2, total - 1, total];
  }

  return [1, 'ellipsis-start', current - 1, current, current + 1, 'ellipsis-end', total];
}

export function ProductCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const rawCategoryParam = searchParams.get('category');
  const selectedCategory = useMemo(() => getCategoryFromSlug(rawCategoryParam), [rawCategoryParam]);

  const [searchInput, setSearchInput] = useState<string>('');
  const [appliedSearch, setAppliedSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [pageSizeInput, setPageSizeInput] = useState<string>(String(DEFAULT_PAGE_SIZE));

  const [prevCategory, setPrevCategory] = useState<CategoryId | 'all'>(selectedCategory);
  const catalogTopRef = useRef<HTMLDivElement>(null);

  // Synchronize invalid or empty category query parameter in URL (fallback to All Products)
  useEffect(() => {
    if (rawCategoryParam !== null && !isValidCategorySlug(rawCategoryParam)) {
      router.replace(pathname, { scroll: false });
    }
  }, [rawCategoryParam, pathname, router]);

  // Reset pagination to page 1 whenever category changes (via URL, back/forward, or click)
  if (prevCategory !== selectedCategory) {
    setPrevCategory(selectedCategory);
    if (currentPage !== 1) {
      setCurrentPage(1);
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

  // Pagination Calculations based on active pageSize
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / pageSize) || 1;
  const safeCurrentPage = currentPage > totalPages ? 1 : currentPage;
  const startIndex = (safeCurrentPage - 1) * pageSize;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + pageSize);
  const showingStart = totalProducts === 0 ? 0 : startIndex + 1;
  const showingEnd = Math.min(startIndex + pageSize, totalProducts);

  // Apply and validate custom products per page
  const applyPageSize = (rawValue: string) => {
    const trimmed = rawValue.trim();
    const parsed = parseInt(trimmed, 10);

    // If empty, non-numeric, zero, or negative, restore last valid pageSize
    if (!trimmed || isNaN(parsed) || parsed < MIN_PAGE_SIZE) {
      setPageSizeInput(String(pageSize));
      return;
    }

    // Clamp values above MAX_PAGE_SIZE (100)
    const clamped = Math.min(MAX_PAGE_SIZE, parsed);

    setPageSize(clamped);
    setPageSizeInput(String(clamped));

    // Reset to page 1 whenever page size changes
    if (clamped !== pageSize) {
      setCurrentPage(1);
    }
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Allow digits only or empty string while user is typing/backspacing
    if (val === '' || /^\d+$/.test(val)) {
      setPageSizeInput(val);
    }
  };

  const handlePageSizeBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    applyPageSize(e.target.value);
  };

  const handlePageSizeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyPageSize((e.target as HTMLInputElement).value);
      (e.target as HTMLInputElement).blur();
    }
  };

  // Category Selection Handler
  const handleSelectCategory = (categoryId: CategoryId | 'all') => {
    setCurrentPage(1);
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
    setCurrentPage(1);
  };

  // Search Clear Handler
  const handleClearSearch = () => {
    setSearchInput('');
    setAppliedSearch('');
    setCurrentPage(1);
  };

  // Reset All Filters Handler
  const handleResetAll = () => {
    setSearchInput('');
    setAppliedSearch('');
    setCurrentPage(1);
    router.push('/products', { scroll: false });
  };

  // Page Change Handler
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      if (catalogTopRef.current) {
        catalogTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div id='products-catalog' ref={catalogTopRef} className='py-8 bg-page-bg scroll-mt-24'>
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
        <div className='flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-6 pb-4 border-b border-border-subtle'>
          {/* Left: Heading and Result Count */}
          <div className='flex flex-wrap items-baseline gap-x-2.5 gap-y-1 shrink-0'>
            <span className='font-body text-xs sm:text-sm text-slate-500 whitespace-nowrap'>
              Showing {showingStart}–{showingEnd} of {totalProducts}{' '}
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
                placeholder='Search products (e.g. cleaner, tissue, bin, mop...)'
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

          {/* Right: Custom Page Size */}
          <div className='flex flex-wrap items-center justify-between sm:justify-end gap-2.5 sm:gap-3 shrink-0 self-stretch sm:self-auto'>
            {/* Custom Products Per Page Numeric Control */}
            <div className='flex items-center gap-1.5 sm:gap-2 h-11 text-xs font-semibold text-slate-500 whitespace-nowrap'>
              <label htmlFor='products-per-page-input' className='cursor-pointer text-slate-500'>
                Show:
              </label>
              <div className='relative h-11 flex items-center'>
                <input
                  id='products-per-page-input'
                  type='number'
                  min={1}
                  max={100}
                  step={1}
                  value={pageSizeInput}
                  onChange={handlePageSizeChange}
                  onBlur={handlePageSizeBlur}
                  onKeyDown={handlePageSizeKeyDown}
                  className='w-14 sm:w-16 h-11 text-center font-heading font-bold text-xs sm:text-sm text-slate-dark bg-white border border-border-subtle rounded-xl px-1.5 outline-none hover:border-slate-400 focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all [color-scheme:light]'
                  aria-label='Number of products per page'
                />
              </div>
              <span className='text-xs font-semibold text-slate-500'>per page</span>
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
          <div className='grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-5 xl:gap-6 mb-12'>
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <nav aria-label='Products catalogue pagination' className='pt-4 pb-6 w-full'>
            {/* Mobile View: Compact [Previous] Page X of Y [Next] */}
            <div className='flex sm:hidden items-center justify-between w-full max-w-xs mx-auto'>
              <button
                type='button'
                onClick={() => handlePageChange(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
                className='min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-lg border border-border-subtle bg-white text-slate-dark hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-heading font-semibold text-xs'
                aria-label='Go to previous page'
              >
                <ChevronLeft className='w-4 h-4' />
                <span>Previous</span>
              </button>

              <span className='text-xs font-semibold text-slate-600 px-2 text-center select-none'>
                Page {safeCurrentPage} of {totalPages}
              </span>

              <button
                type='button'
                onClick={() => handlePageChange(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
                className='min-h-[44px] min-w-[44px] px-3.5 py-2 rounded-lg border border-border-subtle bg-white text-slate-dark hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-heading font-semibold text-xs'
                aria-label='Go to next page'
              >
                <span>Next</span>
                <ChevronRight className='w-4 h-4' />
              </button>
            </div>

            {/* Desktop / Tablet View: Windowed Buttons with Ellipses */}
            <div className='hidden sm:flex items-center justify-center gap-1.5 sm:gap-2'>
              {/* Previous Button */}
              <button
                type='button'
                onClick={() => handlePageChange(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
                className='min-h-[40px] px-3 py-2 rounded-lg border border-border-subtle bg-white text-slate-dark hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-1 cursor-pointer font-heading font-semibold text-xs sm:text-sm'
                aria-label='Go to previous page'
              >
                <ChevronLeft className='w-4 h-4' />
                <span>Previous</span>
              </button>

              {/* Page Number & Ellipsis Items */}
              {getPaginationItems(safeCurrentPage, totalPages).map((item) => {
                if (typeof item === 'string') {
                  return (
                    <span
                      key={item}
                      className='min-h-[40px] min-w-[36px] px-1 flex items-center justify-center text-slate-400 font-bold select-none text-sm'
                      aria-hidden='true'
                    >
                      ...
                    </span>
                  );
                }

                const isActive = safeCurrentPage === item;
                return (
                  <button
                    key={item}
                    type='button'
                    onClick={() => handlePageChange(item)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`min-h-[40px] min-w-[40px] px-3.5 py-2 rounded-lg font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      isActive
                        ? 'bg-brand-red text-white shadow-subtle'
                        : 'bg-white border border-border-subtle text-slate-dark hover:bg-slate-50'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                type='button'
                onClick={() => handlePageChange(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
                className='min-h-[40px] px-3 py-2 rounded-lg border border-border-subtle bg-white text-slate-dark hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-1 cursor-pointer font-heading font-semibold text-xs sm:text-sm'
                aria-label='Go to next page'
              >
                <span>Next</span>
                <ChevronRight className='w-4 h-4' />
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
