'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductItem, CategoryId } from '@/data/catalog';
import { buildWhatsAppQuoteUrl } from '@/lib/whatsapp';
import { PackageCheck, ArrowRight, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  priority?: boolean;
}

const CATEGORY_NAMES: Record<CategoryId, string> = {
  'cleaning-materials': 'Cleaning Materials',
  'hygiene-disposables': 'Hygiene & Disposables',
  'plastic-drums': 'Plastic Drums & Containers',
  'equipment-safety': 'Equipment & Safety',
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [selectedSpec, setSelectedSpec] = useState<string>(
    product.specifications[0] || '',
  );

  const quoteUrl = buildWhatsAppQuoteUrl(product.name, selectedSpec);

  return (
    <article className='flex flex-col h-full rounded-2xl border border-border-subtle bg-white shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all group overflow-hidden'>
      {/* Studio Image Container — Swiss Precision #F3F4F6 surface */}
      <div className='w-full h-48 bg-studio-gray p-4 flex items-center justify-center relative overflow-hidden'>
        <Image
          src={product.image}
          alt={`${product.name} — Wholesale B2B supply Riyadh`}
          width={280}
          height={180}
          className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-300'
          priority={priority}
          unoptimized
        />

        {/* Category Pill Tag */}
        <span className='absolute top-3 left-3 px-2.5 py-1 text-2xs font-bold uppercase tracking-wider text-slate-700 bg-white/95 rounded-md shadow-xs border border-border-subtle pointer-events-none'>
          {CATEGORY_NAMES[product.category]}
        </span>

        {/* Popular SKU Badge */}
        {product.featured && (
          <span className='absolute top-3 right-3 px-2 py-0.5 text-2xs font-extrabold uppercase tracking-wider text-slate-dark bg-brand-gold rounded shadow-xs pointer-events-none'>
            Popular SKU
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className='p-5 sm:p-6 flex flex-col flex-1'>
        <h3 className='font-heading font-bold text-base sm:text-lg text-slate-dark leading-snug mb-2'>
          {product.name}
        </h3>

        <p className='font-body text-xs sm:text-sm text-slate-body leading-relaxed mb-4 flex-1'>
          {product.shortDescription}
        </p>

        {/* Wholesale Specifications & Capacity Selector */}
        <div className='mb-4'>
          <div className='flex items-center justify-between text-xs mb-2'>
            <span className='font-heading font-semibold text-slate-dark'>Wholesale Specs:</span>
            <span className='text-brand-red font-bold'>{selectedSpec}</span>
          </div>

          <div
            className='flex flex-wrap gap-1.5'
            role='radiogroup'
            aria-label={`Available specifications for ${product.name}`}
          >
            {product.specifications.map((spec) => {
              const isSelected = selectedSpec === spec;
              return (
                <button
                  key={spec}
                  type='button'
                  role='radio'
                  aria-checked={isSelected}
                  onClick={() => setSelectedSpec(spec)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-brand-red text-white shadow-xs'
                      : 'bg-page-bg hover:bg-slate-100 text-slate-body border border-border-subtle'
                  }`}
                >
                  {spec}
                </button>
              );
            })}
          </div>
        </div>

        {/* Packaging / Compliance Note */}
        {product.packagingNote && (
          <div className='flex items-center gap-1.5 text-2xs text-muted-gray pt-3 border-t border-border-subtle mb-4'>
            <PackageCheck className='w-3.5 h-3.5 text-brand-red shrink-0' aria-hidden='true' />
            <span className='truncate'>{product.packagingNote}</span>
          </div>
        )}

        {/* Request Bulk Quote CTA Button */}
        <div className='mt-auto pt-2'>
          <a
            href={quoteUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-bold text-xs sm:text-sm rounded-lg shadow-subtle min-h-touch transition-all group-hover:shadow-md'
            aria-label={`Request bulk quote for ${product.name} (${selectedSpec})`}
          >
            <MessageCircle className='w-4 h-4' />
            <span>Request Bulk Quote</span>
            <ArrowRight className='w-3.5 h-3.5 group-hover:translate-x-1 transition-transform' />
          </a>
        </div>
      </div>
    </article>
  );
}
