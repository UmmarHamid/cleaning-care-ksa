import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIES } from '@/data/catalog';
import { buildWhatsAppQuoteUrl } from '@/lib/whatsapp';
import { ArrowRight, BrushCleaning, Toilet, TrafficCone, Trash } from 'lucide-react';

function CategoryIcon({ id }: { id: string }) {
  if (id === 'cleaning-materials') {
    return <BrushCleaning className='w-6 h-6 text-brand-red shrink-0' aria-hidden='true' />;
  }
  if (id === 'hygiene-disposables') {
    return <Toilet className='w-6 h-6 text-brand-red shrink-0' aria-hidden='true' />;
  }
  if (id === 'plastic-drums') {
    return <Trash className='w-6 h-6 text-brand-red shrink-0' aria-hidden='true' />;
  }
  return <TrafficCone className='w-6 h-6 text-brand-red shrink-0' aria-hidden='true' />;
}

export function ProductsSection() {
  return (
    <section id='products' className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Heading */}
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <div className='flex items-center justify-center gap-3 sm:gap-4 mb-3'>
            <span className='h-0.5 w-10 sm:w-14 bg-brand-red rounded-full' aria-hidden='true' />
            <h2 className='font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-dark tracking-tight leading-tight'>
              Our Product Divisions
            </h2>
            <span className='h-0.5 w-10 sm:w-14 bg-brand-red rounded-full' aria-hidden='true' />
          </div>
          <p className='font-body text-slate-body text-sm sm:text-base leading-relaxed'>
            Comprehensive range of professional cleaning, hygiene, waste management and safety solutions
            <br className='hidden sm:inline' /> for commercial, industrial and institutional clients across Saudi Arabia.
          </p>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {CATEGORIES.map((cat) => (
            <article
              key={cat.id}
              className='flex flex-col h-full rounded-2xl border border-border-subtle bg-white overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all group'
            >
              <Link className='w-full h-52 bg-studio-gray p-4 flex items-center justify-center overflow-hidden' href='/products'>
                <Image
                  src={cat.image}
                  alt={cat.imageAlt}
                  width={300}
                  height={210}
                  className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-300'
                  unoptimized
                />
              </Link>
              <div className='p-5 sm:p-6 flex flex-col flex-1'>
                <div className='flex items-center gap-2.5 mb-2.5'>
                  <CategoryIcon id={cat.id} />
                  <h3 className='font-heading font-bold text-base sm:text-lg text-slate-dark leading-tight'>
                    {cat.title}
                  </h3>
                </div>
                <p className='font-body text-slate-body text-xs sm:text-sm leading-relaxed mb-4 flex-1'>
                  {cat.shortDescription}
                </p>
                <div className='mt-auto pt-2 flex items-center justify-between'>
                  <Link
                    href='/products'
                    className='inline-flex items-center gap-1.5 text-brand-red hover:text-brand-red-dark font-heading font-bold text-sm min-h-touch transition-all group-hover:translate-x-0.5'
                  >
                    <span>View Products</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Homepage Catalog Action Strip */}
        <div className='mt-10 bg-white border border-border-subtle rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6 shadow-card'>
          <div className='max-w-xl'>
            <h4 className='font-heading text-base sm:text-lg font-bold text-slate-dark mb-1'>
              Looking for individual item specifications (10G–1100G) and instant capacity search?
            </h4>
            <p className='font-body text-xs sm:text-sm text-muted-gray'>
              Browse all 29+ wholesale items with live search, spec selectors, and pre-filled WhatsApp quotes.
            </p>
          </div>
          <div className='flex items-center gap-3 flex-wrap'>
            <Link
              href='/products'
              className='inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-subtle min-h-touch transition-all'
            >
              <span>Explore Full Interactive Catalog</span>
              <span aria-hidden='true'>→</span>
            </Link>
            <a
              href={buildWhatsAppQuoteUrl()}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 bg-success hover:bg-success-dark text-white font-heading font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-subtle min-h-touch transition-all'
            >
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
