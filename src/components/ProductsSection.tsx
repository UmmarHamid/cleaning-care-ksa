import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIES } from '@/data/catalog';
import { SECTION_SPACING } from '@/lib/tokens';
import { buildCategoryUrl } from '@/lib/categories';
import { buildWhatsAppQuoteUrl } from '@/lib/whatsapp';
import {
  ArrowRight,
  BrushCleaning,
  Package,
  SprayCan,
  Toilet,
  TrafficCone,
  Truck,
} from 'lucide-react';
import { SpotlightCard } from '@/components/motion/SpotlightCard';
import { BorderBeam } from '@/components/motion/BorderBeam';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

function CategoryIcon({ id }: { id: string }) {
  if (id === 'cleaning-materials') {
    return <SprayCan className='w-6 h-6 text-brand-red shrink-0' aria-hidden='true' />;
  }
  if (id === 'hygiene-disposables') {
    return <Package className='w-6 h-6 text-brand-red shrink-0' aria-hidden='true' />;
  }
  if (id === 'cleaning-equipment-tools') {
    return <Truck className='w-6 h-6 text-brand-red shrink-0' aria-hidden='true' />;
  }
  return <TrafficCone className='w-6 h-6 text-brand-red shrink-0' aria-hidden='true' />;
}

export function ProductsSection() {
  return (
    <section id='products' className={`${SECTION_SPACING.y} bg-white`}>
      <div className={SECTION_SPACING.container}>
        {/* Section Heading */}
        <div
          className={`text-center sm:text-left max-w-3xl mx-auto sm:mx-0 ${SECTION_SPACING.headerMb}`}
        >
          <div className='flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-3'>
            <span
              className='h-0.5 w-10 sm:w-14 sm:hidden bg-brand-red rounded-full'
              aria-hidden='true'
            />
            <h2 className='font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-dark tracking-tight leading-tight'>
              Product Division
            </h2>
            <span className='h-0.5 w-10 sm:w-14 bg-brand-red rounded-full' aria-hidden='true' />
          </div>
          <p className='font-body text-slate-body text-sm sm:text-base leading-relaxed'>
            Explore our complete range of cleaning, hygiene, plastic and safety products, trusted by
            businesses across Saudi Arabia.
          </p>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {CATEGORIES.map((cat) => (
            <SpotlightCard key={cat.id} className='h-full rounded-2xl'>
              <article className='group flex flex-col h-full rounded-2xl border border-border-subtle bg-white overflow-hidden shadow-subtle hover:shadow-md hover:-translate-y-1 hover:border-[#D32027]/40 transition-all duration-300 ease-out motion-reduce:transform-none'>
                <Link
                  className='w-full h-52 bg-studio-gray p-4 flex items-center justify-center overflow-hidden'
                  href={buildCategoryUrl(cat.id)}
                >
                  <Image
                    src={cat.image}
                    alt={cat.imageAlt}
                    width={300}
                    height={210}
                    className='w-full h-full object-contain'
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
                      href={buildCategoryUrl(cat.id)}
                      className='inline-flex items-center gap-1.5 text-brand-red hover:text-brand-red-dark font-heading font-bold text-sm min-h-touch transition-all group-hover:translate-x-0.5 motion-reduce:transform-none'
                    >
                      <span>View Products</span>
                      <ArrowRight
                        size={16}
                        className='group-hover:translate-x-0.5 transition-transform duration-300 motion-reduce:transform-none'
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </SpotlightCard>
          ))}
        </div>

        {/* Featured "Bulk Wholesale & Same-Day Riyadh Dispatch" Action Strip Card */}
        <SpotlightCard className='relative mt-10 rounded-2xl' hoverScale={1.01} maxTilt={1.5}>
          <div className='relative bg-white border border-border-subtle rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6 shadow-card overflow-hidden w-full'>
            <BorderBeam
              size={90}
              duration={4.5}
              colorFrom='#D32027'
              colorTo='#F2B705'
              borderWidth={1.5}
            />
            <div className='max-w-xl relative z-10 text-center sm:text-left flex flex-col items-center sm:items-start mx-auto sm:mx-0'>
              <div className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/15 text-slate-dark border border-brand-gold/30 text-2xs font-extrabold uppercase tracking-wider mb-2.5'>
                <Truck className='w-3.5 h-3.5 text-brand-red' />
                <span>Bulk Wholesale </span>
              </div>
              <h4 className='font-heading text-base sm:text-lg font-bold text-slate-dark mb-1'>
                Looking for individual item specifications and instant capacity search?
              </h4>
              <p className='font-body text-xs sm:text-sm text-muted-gray'>
                Browse all 29+ wholesale items with live search, spec selectors, and pre-filled
                WhatsApp quotes.
              </p>
            </div>
            <div className='flex items-center justify-center sm:justify-start gap-3 flex-wrap relative z-10 w-full sm:w-auto'>
              <Button
                href='/products'
                variant='primary'
                size='md'
                rightIcon={<span>→</span>}
                className='w-full md:w-fit'
              >
                Explore Full Catalog
              </Button>
              <WhatsAppButton
                href={buildWhatsAppQuoteUrl()}
                variant='secondary'
                size='md'
                className='w-full md:w-fit'
              >
                Inquire on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
