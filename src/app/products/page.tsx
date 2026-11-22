import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { ProductCatalog } from '@/components/ProductCatalog';
import { Footer } from '@/components/Footer';
import { COMPANY_DATA } from '@/data/company';

export const metadata: Metadata = {
  title: 'B2B Product Catalog | Cleaning Care Trading Co. Riyadh',
  description:
    'Complete wholesale and industrial cleaning product catalog. Cleaning chemicals, hygiene paper rolls, heavy-duty garbage bags (10G–100G), industrial waste drums (10G–1100G), and road safety equipment in Riyadh.',
  keywords: [
    'Cleaning Care Trading Co.',
    'Wholesale cleaning chemicals Riyadh',
    'Commercial garbage bags 10G 100G',
    'Industrial waste containers 1100G 240L',
    'Janitorial supplies Saudi Arabia',
    'Hospitality hygiene paper supplies',
  ],
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-slate-50'>
        {/* Page Hero & Breadcrumbs */}
        <section className='bg-gradient-to-b from-[#1A1D20] to-[#0F172A] text-white py-12 md:py-16 border-b border-slate-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Breadcrumbs */}
            <nav
              aria-label='Breadcrumb'
              className='flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-4'
            >
              <Link href='/' className='hover:text-white transition-colors'>
                Home
              </Link>
              <span aria-hidden='true'>/</span>
              <span className='text-[#F2B705] font-semibold'>
                Product Catalog
              </span>
            </nav>

            <div className='max-w-3xl'>
              <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#F2B705] text-xs font-bold uppercase tracking-wider mb-3'>
                <span>Riyadh Wholesale Inventory</span>
              </div>
              <h1 className='font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight'>
                Wholesale & Industrial Product Catalog
              </h1>
              <p className='mt-4 text-slate-300 text-sm sm:text-base leading-relaxed'>
                Direct procurement from Cleaning Care Trading Co. Warehoused
                across 3 strategic Riyadh storage hubs with rapid
                same-day/next-day commercial dispatch.
              </p>

              {/* Direct Warehouse Phone / VAT Strip */}
              <div className='mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80 pt-4'>
                <span>
                  VAT Number:{' '}
                  <strong className='text-slate-200'>
                    {COMPANY_DATA.vatNumber}
                  </strong>
                </span>
                <span>
                  Dispatch Hub:{' '}
                  <strong className='text-slate-200'>
                    {COMPANY_DATA.location}
                  </strong>
                </span>
                <span>
                  Immediate Quote:{' '}
                  <a
                    href={`tel:${COMPANY_DATA.phoneTel}`}
                    className='text-[#F2B705] hover:underline font-semibold'
                  >
                    {COMPANY_DATA.phone}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Product Catalog Component */}
        <ProductCatalog showHeader={false} />
      </main>
      <Footer />
    </>
  );
}
