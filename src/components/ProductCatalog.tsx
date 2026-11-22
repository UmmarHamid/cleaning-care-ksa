'use client';

import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS, CategoryId } from '@/data/catalog';
import { ProductCard } from '@/components/ProductCard';
import { buildWhatsAppQuoteUrl } from '@/lib/whatsapp';

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

  // Filter products based on active category and instant search query
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      // Category filter match
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      if (!matchesCategory) return false;

      // Keyword / Spec / Capacity instant search match
      if (!query) return true;

      const matchesName = product.name.toLowerCase().includes(query);
      const matchesDesc = product.shortDescription
        .toLowerCase()
        .includes(query);
      const matchesPackaging =
        product.packagingNote?.toLowerCase().includes(query) ?? false;
      const matchesSpecs = product.specifications.some((spec) =>
        spec.toLowerCase().includes(query),
      );

      return matchesName || matchesDesc || matchesPackaging || matchesSpecs;
    });
  }, [selectedCategory, searchQuery]);

  // Compute SKU count for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: PRODUCTS.length,
    };
    for (const cat of CATEGORIES) {
      counts[cat.id] = PRODUCTS.filter((p) => p.category === cat.id).length;
    }
    return counts;
  }, []);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <section
      id='products-catalog'
      className='section'
      style={{
        background: '#F8FAFC',
        paddingTop: '48px',
        paddingBottom: '64px',
      }}
    >
      <div className='container'>
        {/* Section Heading (if enabled) */}
        {showHeader && (
          <div className='section-heading product-heading'>
            <div className='heading-with-lines'>
              <span className='heading-line' aria-hidden='true' />
              <h2>Wholesale B2B Product Catalog</h2>
              <span className='heading-line' aria-hidden='true' />
            </div>
            <p className='product-subtitle'>
              Browse over 29 commercial supply lines across all 4 divisions.
              Real-time Riyadh stock ready for immediate commercial dispatch.
            </p>
          </div>
        )}

        {/* Search & Filter Toolbar Container */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '18px 20px',
            marginBottom: '24px',
            boxShadow: '0 1px 3px rgba(15,23,42,0.04)',
          }}
        >
          {/* Search Row */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              marginBottom: '14px',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#94A3B8',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <svg
                width='18'
                height='18'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </span>
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Instant search by product name, specification (e.g. 1100G, 240L, 75cm, 100G, 5L Can)...'
              style={{
                width: '100%',
                paddingLeft: '42px',
                paddingRight: searchQuery ? '40px' : '16px',
                height: '46px',
                fontSize: '14px',
                color: '#0F172A',
                background: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                borderRadius: '10px',
                outline: 'none',
                fontFamily: 'var(--body)',
                boxSizing: 'border-box',
              }}
              aria-label='Search wholesale products'
            />
            {searchQuery && (
              <button
                type='button'
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  border: 'none',
                  background: 'transparent',
                  color: '#94A3B8',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label='Clear search'
              >
                <svg
                  width='16'
                  height='16'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Quick Search Chips */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
              fontSize: '12px',
              color: '#64748B',
            }}
          >
            <span style={{ fontWeight: 600 }}>Popular Searches:</span>
            {[
              '1100G',
              '240L',
              '75cm',
              '100G',
              '5L Can',
              'Maxi Roll',
              'Degreaser',
              'Safety Cones',
            ].map((term) => (
              <button
                key={term}
                type='button'
                onClick={() => setSearchQuery(term)}
                style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  background:
                    searchQuery.toLowerCase() === term.toLowerCase()
                      ? '#D32027'
                      : '#F1F5F9',
                  color:
                    searchQuery.toLowerCase() === term.toLowerCase()
                      ? '#FFFFFF'
                      : '#334155',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  minHeight: '36px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                className='min-h-[36px] sm:min-h-[36px]'
              >
                {term}
              </button>
            ))}
          </div>

          {/* Category Tabs (Touch scroll on mobile) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '4px',
            }}
          >
            {/* All Products Tab */}
            <button
              type='button'
              onClick={() => setSelectedCategory('all')}
              style={{
                flexShrink: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 650,
                cursor: 'pointer',
                minHeight: '44px',
                border:
                  selectedCategory === 'all'
                    ? '1px solid #D32027'
                    : '1px solid #E2E8F0',
                background: selectedCategory === 'all' ? '#D32027' : '#F8FAFC',
                color: selectedCategory === 'all' ? '#FFFFFF' : '#334155',
                transition: 'all 0.15s ease',
              }}
            >
              <span>All Products</span>
              <span
                style={{
                  fontSize: '11px',
                  padding: '2px 7px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  background:
                    selectedCategory === 'all'
                      ? 'rgba(255,255,255,0.25)'
                      : '#E2E8F0',
                  color: selectedCategory === 'all' ? '#FFFFFF' : '#475569',
                }}
              >
                {categoryCounts.all}
              </span>
            </button>

            {/* Division Tabs */}
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type='button'
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    flexShrink: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 650,
                    cursor: 'pointer',
                    minHeight: '44px',
                    border: isActive
                      ? '1px solid #D32027'
                      : '1px solid #E2E8F0',
                    background: isActive ? '#D32027' : '#F8FAFC',
                    color: isActive ? '#FFFFFF' : '#334155',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>{cat.title}</span>
                  <span
                    style={{
                      fontSize: '11px',
                      padding: '2px 7px',
                      borderRadius: '12px',
                      fontWeight: 700,
                      background: isActive
                        ? 'rgba(255,255,255,0.25)'
                        : '#E2E8F0',
                      color: isActive ? '#FFFFFF' : '#475569',
                    }}
                  >
                    {categoryCounts[cat.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '18px',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '13.5px',
              color: '#475569',
              fontWeight: 500,
            }}
          >
            Showing{' '}
            <strong style={{ color: '#0F172A', fontWeight: 700 }}>
              {filteredProducts.length}
            </strong>{' '}
            {filteredProducts.length === 1 ? 'product' : 'products'}
            {selectedCategory !== 'all' && (
              <span>
                {' '}
                in{' '}
                <span style={{ color: '#D32027', fontWeight: 650 }}>
                  {CATEGORIES.find((c) => c.id === selectedCategory)?.title}
                </span>
              </span>
            )}
            {searchQuery && (
              <span>
                {' '}
                matching &ldquo;
                <strong style={{ color: '#0F172A' }}>{searchQuery}</strong>
                &rdquo;
              </span>
            )}
          </p>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              type='button'
              onClick={handleClearFilters}
              style={{
                border: 'none',
                background: 'transparent',
                color: '#D32027',
                fontSize: '12.5px',
                fontWeight: 650,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 8px',
              }}
            >
              <span>✕ Reset Filters</span>
            </button>
          )}
        </div>

        {/* Products Grid — 4 Columns on Laptop, 2 on Tablet, 1 on Mobile */}
        {filteredProducts.length > 0 ? (
          <div className='catalog-grid'>
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
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '18px',
              padding: '48px 24px',
              textAlign: 'center',
              maxWidth: '480px',
              margin: '40px auto',
            }}
          >
            <h3
              style={{
                margin: '0 0 8px',
                fontFamily: 'var(--heading)',
                fontSize: '18px',
                fontWeight: 700,
                color: '#0F172A',
              }}
            >
              No products found
            </h3>
            <p
              style={{
                margin: '0 0 20px',
                fontSize: '13.5px',
                color: '#64748B',
                lineHeight: 1.5,
              }}
            >
              No wholesale items matched your search query &ldquo;{searchQuery}
              &rdquo;. Try another keyword or browse all product divisions.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              <button
                type='button'
                onClick={handleClearFilters}
                className='button button-red'
                style={{
                  minHeight: '42px',
                  padding: '8px 18px',
                  fontSize: '13px',
                }}
              >
                View All Products
              </button>
              <a
                href={buildWhatsAppQuoteUrl(
                  searchQuery ? `Custom Inquiry: ${searchQuery}` : undefined,
                )}
                target='_blank'
                rel='noopener noreferrer'
                className='button button-whatsapp'
                style={{
                  minHeight: '42px',
                  padding: '8px 18px',
                  fontSize: '13px',
                }}
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Wholesale Tender & Custom Supply Banner */}
        <div
          style={{
            marginTop: '48px',
            background: 'linear-gradient(135deg, #1A1D20 0%, #0F172A 100%)',
            borderRadius: '16px',
            padding: '28px 32px',
            color: '#FFFFFF',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            border: '1px solid #334155',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(242,183,5,0.18)',
                color: '#F2B705',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                padding: '3px 10px',
                borderRadius: '4px',
                marginBottom: '8px',
              }}
            >
              Enterprise & Tender Procurement
            </span>
            <h3
              style={{
                margin: '0 0 6px',
                fontFamily: 'var(--heading)',
                fontSize: '20px',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
              }}
            >
              Need Custom Quantities, Special Sizes, or Unlisted SKUs?
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: '13px',
                color: '#94A3B8',
                lineHeight: 1.5,
              }}
            >
              Our procurement desk supplies construction camps, hospital
              tenders, facility managers, and hotel chains across Riyadh with
              volume contract rates and direct warehouse delivery.
            </p>
          </div>
          <div>
            <a
              href={buildWhatsAppQuoteUrl('Custom B2B Tender / Volume Order')}
              target='_blank'
              rel='noopener noreferrer'
              className='button button-red'
              style={{
                minHeight: '44px',
                padding: '10px 22px',
                fontSize: '13px',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Contact Procurement Desk</span>
              <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
