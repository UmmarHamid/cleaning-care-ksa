'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { DIVISIONS, PRODUCTS, CategoryId } from '@/data/catalog';
import { ProductCard } from '@/components/ProductCard';
import { buildWhatsAppQuoteUrl } from '@/lib/whatsapp';
import {
  Search,
  X,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  FileSpreadsheet,
} from 'lucide-react';

interface ProductCatalogProps {
  initialCategory?: CategoryId | 'all';
  showHeader?: boolean;
}

export function ProductCatalog({
  initialCategory = 'all',
  showHeader = true,
}: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(
    initialCategory,
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active division details if a single division is chosen
  const activeDivision = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return DIVISIONS.find((d) => d.id === selectedCategory) || null;
  }, [selectedCategory]);

  // Filter products based on active category and instant search query
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!query) return true;

      const matchesName = product.name.toLowerCase().includes(query);
      const matchesDesc = product.shortDescription.toLowerCase().includes(query);
      const matchesPackaging =
        product.packagingNote?.toLowerCase().includes(query) ?? false;
      const matchesSpecs = product.specifications.some((spec) =>
        spec.toLowerCase().includes(query),
      );

      return matchesName || matchesDesc || matchesPackaging || matchesSpecs;
    });
  }, [selectedCategory, searchQuery]);

  // Compute SKU count for each division
  const divisionCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: PRODUCTS.length,
    };
    for (const div of DIVISIONS) {
      counts[div.id] = div.subCategories.length;
    }
    return counts;
  }, []);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <section id='products-catalog' className='py-12 sm:py-16 bg-page-bg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Heading (if enabled) */}
        {showHeader && (
          <div className='text-center sm:text-left max-w-3xl mx-auto sm:mx-0 mb-10'>
            <div className='flex items-center justify-center sm:justify-start gap-3 mb-3'>
              <span className='h-0.5 w-12 sm:hidden bg-brand-red rounded-full' aria-hidden='true' />
              <span className='text-brand-red font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase'>
                PROCUREMENT CATALOG
              </span>
              <span className='h-0.5 w-12 bg-brand-red rounded-full' aria-hidden='true' />
            </div>
            <h2 className='font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-dark tracking-tight leading-tight mb-3'>
              Wholesale B2B Product Catalog
            </h2>
            <p className='font-body text-slate-body text-sm sm:text-base leading-relaxed'>
              Browse all 4 core divisions and sub-categories. Immediate bulk warehouse supply across Saudi Arabia.
            </p>
          </div>
        )}

        {/* Search & Filter Toolbar Container */}
        <div className='bg-white border border-border-subtle rounded-2xl p-4 sm:p-6 mb-8 shadow-card'>
          {/* Search Row */}
          <div className='relative w-full mb-3.5'>
            <span className='absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none flex items-center'>
              <Search className='w-4.5 h-4.5' aria-hidden='true' />
            </span>
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Instant search by name, capacity, or gauge (e.g. 1100G, 240L, 75cm, 100G, 5L Jerrycan, Maxi roll)...'
              className='w-full pl-11 pr-10 h-11 text-sm text-slate-dark bg-page-bg border border-border-subtle rounded-lg outline-none font-body focus:border-brand-red focus:bg-white focus:ring-1 focus:ring-brand-red transition-all'
              aria-label='Search wholesale products'
            />
            {searchQuery && (
              <button
                type='button'
                onClick={() => setSearchQuery('')}
                className='absolute right-2.5 top-1/2 -translate-y-1/2 border-none bg-transparent text-slate-400 hover:text-slate-600 cursor-pointer p-1.5 flex items-center justify-center'
                aria-label='Clear search'
              >
                <X className='w-4 h-4' />
              </button>
            )}
          </div>

          {/* Quick Search Chips */}
          <div className='flex flex-wrap items-center gap-2 mb-4 text-xs text-muted-gray'>
            <span className='font-semibold'>Popular Specifications:</span>
            {[
              '1100G',
              '240L',
              '75cm',
              '100G',
              '5L Jerrycan',
              'Maxi Roll',
              'Degreaser',
              'Safety Cones',
              'Nitrile',
            ].map((term) => {
              const isTermActive = searchQuery.toLowerCase() === term.toLowerCase();
              return (
                <button
                  key={term}
                  type='button'
                  onClick={() => setSearchQuery(term)}
                  className={`min-h-[38px] px-3.5 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all inline-flex items-center ${
                    isTermActive
                      ? 'bg-brand-red text-white shadow-xs'
                      : 'bg-page-bg hover:bg-slate-100 text-slate-body border border-border-subtle'
                  }`}
                >
                  {term}
                </button>
              );
            })}
          </div>

          {/* Division Filter Tabs (Horizontal scroll on mobile) */}
          <div className='flex items-center gap-2 overflow-x-auto pb-1'>
            {/* All Divisions Tab */}
            <button
              type='button'
              onClick={() => setSelectedCategory('all')}
              className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer min-h-touch transition-all ${
                selectedCategory === 'all'
                  ? 'bg-brand-red text-white shadow-subtle'
                  : 'bg-page-bg hover:bg-slate-100 text-slate-body border border-border-subtle'
              }`}
            >
              <span>All Divisions</span>
              <span
                className={`text-2xs px-2 py-0.5 rounded-full font-bold ${
                  selectedCategory === 'all'
                    ? 'bg-white/25 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {divisionCounts.all}
              </span>
            </button>

            {/* Individual Division Tabs */}
            {DIVISIONS.map((div) => {
              const isActive = selectedCategory === div.id;
              return (
                <button
                  key={div.id}
                  type='button'
                  onClick={() => setSelectedCategory(div.id)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer min-h-touch transition-all ${
                    isActive
                      ? 'bg-brand-red text-white shadow-subtle'
                      : 'bg-page-bg hover:bg-slate-100 text-slate-body border border-border-subtle'
                  }`}
                >
                  <span>{div.title}</span>
                  <span
                    className={`text-2xs px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-white/25 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {divisionCounts[div.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Division Feature Banner (if a single division is chosen) */}
        {activeDivision && (
          <div className='mb-8 rounded-2xl bg-gradient-to-br from-brand-charcoal to-slate-dark text-white p-6 sm:p-8 border border-slate-700 shadow-card flex flex-col lg:flex-row items-center justify-between gap-6'>
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-3xl'>
              <div className='w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-white/10 p-2 shrink-0 flex items-center justify-center overflow-hidden'>
                <Image
                  src={activeDivision.image}
                  alt={activeDivision.imageAlt}
                  width={140}
                  height={140}
                  className='object-contain w-full h-full'
                  unoptimized
                />
              </div>
              <div className='text-center sm:text-left'>
                <span className='inline-block text-2xs font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/15 px-2.5 py-1 rounded mb-2'>
                  {activeDivision.subtitle}
                </span>
                <h3 className='font-heading font-extrabold text-xl sm:text-2xl text-white mb-2'>
                  {activeDivision.title}
                </h3>
                <p className='text-xs sm:text-sm text-slate-300 leading-relaxed mb-4'>
                  {activeDivision.shortDescription}
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-2xs sm:text-xs text-slate-200'>
                  {activeDivision.wholesaleHighlights.map((hl, i) => (
                    <div key={i} className='flex items-center gap-1.5'>
                      <CheckCircle2 className='w-3.5 h-3.5 text-brand-gold shrink-0' />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-2.5'>
              <a
                href={buildWhatsAppQuoteUrl(
                  `Wholesale Tender Inquiry: ${activeDivision.title}`,
                )}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-bold text-xs sm:text-sm rounded-lg shadow-subtle min-h-touch transition-all'
              >
                <MessageCircle className='w-4 h-4' />
                <span>Request Division Tender</span>
              </a>
            </div>
          </div>
        )}

        {/* Results Metadata Bar */}
        <div className='flex flex-wrap items-center justify-between gap-3 mb-6'>
          <p className='text-sm text-slate-600 font-medium'>
            Showing{' '}
            <strong className='text-slate-dark font-bold'>
              {filteredProducts.length}
            </strong>{' '}
            {filteredProducts.length === 1 ? 'sub-category' : 'sub-categories'}
            {selectedCategory !== 'all' && (
              <span>
                {' '}
                in{' '}
                <span className='text-brand-red font-semibold'>
                  {DIVISIONS.find((c) => c.id === selectedCategory)?.title}
                </span>
              </span>
            )}
            {searchQuery && (
              <span>
                {' '}
                matching &ldquo;
                <strong className='text-slate-dark'>{searchQuery}</strong>
                &rdquo;
              </span>
            )}
          </p>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              type='button'
              onClick={handleClearFilters}
              className='border-none bg-transparent text-brand-red hover:text-brand-red-dark text-xs font-semibold cursor-pointer inline-flex items-center gap-1.5 p-1'
            >
              <span>✕ Reset Filters</span>
            </button>
          )}
        </div>

        {/* Sub-Categories Grid */}
        {filteredProducts.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={index < 4}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className='bg-white border border-border-subtle rounded-2xl p-10 sm:p-12 text-center max-w-lg mx-auto my-10 shadow-card'>
            <h3 className='m-0 mb-2 font-heading text-lg font-bold text-slate-dark'>
              No matching specifications found
            </h3>
            <p className='m-0 mb-5 text-sm text-muted-gray leading-normal'>
              No wholesale lines matched &ldquo;{searchQuery}&rdquo;. Try another specification term or browse all 4 product divisions.
            </p>
            <div className='flex justify-center gap-2.5 flex-wrap'>
              <button
                type='button'
                onClick={handleClearFilters}
                className='inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white font-heading font-bold rounded-lg shadow-subtle min-h-touch px-5 py-2 text-xs sm:text-sm transition-colors'
              >
                View All Divisions
              </button>
              <a
                href={buildWhatsAppQuoteUrl(
                  searchQuery ? `Custom Tender Inquiry: ${searchQuery}` : undefined,
                )}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 bg-success hover:bg-success-dark text-white font-heading font-bold rounded-lg shadow-subtle min-h-touch px-5 py-2 text-xs sm:text-sm transition-colors'
              >
                <MessageCircle className='w-4 h-4' />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Wholesale Tender & Custom RFP Banner */}
        <div className='mt-12 bg-gradient-to-br from-brand-charcoal to-slate-dark rounded-2xl p-7 sm:p-8 text-white flex flex-wrap items-center justify-between gap-6 border border-slate-700 shadow-card'>
          <div className='max-w-2xl mx-auto sm:mx-0 text-center sm:text-left flex flex-col items-center sm:items-start'>
            <span className='inline-flex items-center gap-1.5 bg-brand-gold/20 text-brand-gold text-2xs font-bold uppercase tracking-wider px-2.5 py-1 rounded mb-2'>
              <FileSpreadsheet className='w-3.5 h-3.5' />
              <span>Institutional &amp; Government Tenders</span>
            </span>
            <h3 className='font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2'>
              Need Custom Quantities, Special Sizes, or Unlisted SKUs?
            </h3>
            <p className='text-sm text-slate-300 leading-relaxed'>
              Our procurement desk supplies construction camps, hospital tenders, facility managers, and hotel chains across Riyadh with volume contract rates and direct warehouse delivery.
            </p>
          </div>
          <div className='w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 flex-wrap'>
            <a
              href={buildWhatsAppQuoteUrl('Custom B2B Tender / Volume Order')}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-bold text-xs sm:text-sm rounded-lg shadow-subtle min-h-touch transition-all whitespace-nowrap'
            >
              <span>Contact Procurement Desk</span>
              <ArrowRight className='w-4 h-4' aria-hidden='true' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
