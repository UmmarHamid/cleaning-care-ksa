import React from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import { Check, Warehouse, Store } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

export function InfrastructureBento() {
  const { infrastructureFeatures, facilities } = COMPANY_DATA;

  return (
    <section id='infrastructure' className='py-16 bg-white relative overflow-hidden'>
      {/* Background Architectural Grid & Ambient Brand Glow */}
      <div className='absolute inset-0 bg-industrial-grid pointer-events-none z-0' aria-hidden='true' />
      <div className='absolute inset-0 bg-brand-glow pointer-events-none z-0' aria-hidden='true' />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Section Heading */}
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <div className='flex items-center justify-center gap-3 sm:gap-4 mb-3'>
            <span className='h-0.5 w-10 sm:w-14 bg-brand-red rounded-full' aria-hidden='true' />
            <span className='text-brand-red font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase'>
              OUR INFRASTRUCTURE
            </span>
            <span className='h-0.5 w-10 sm:w-14 bg-brand-red rounded-full' aria-hidden='true' />
          </div>
          <h2 className='font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-dark tracking-tight leading-tight mb-3'>
            Strong Facilities for a Reliable Supply
          </h2>
          <p className='font-body text-slate-body text-sm sm:text-base leading-relaxed'>
            A well-established logistics and distribution network in Riyadh to ensure consistent
            inventory, fast delivery and uninterrupted supply for our customers across Saudi Arabia.
          </p>
        </div>

        {/* Main Bento Hero Card */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-10'>
          <RevealOnScroll
            delay={0}
            className='lg:col-span-7 h-full'
          >
            <SpotlightCard className='relative rounded-2xl lg:rounded-r-none overflow-hidden min-h-[360px] sm:min-h-[440px] h-full shadow-card'>
              <Image
                src='/assets/images/our-infrastructure-warehouse-interior.png'
                alt='Organized warehouse interior with inventory and high pallet racking in Riyadh'
                fill
                className='object-cover object-center'
                unoptimized
              />
              <svg
                className='hidden lg:block absolute right-0 top-0 bottom-0 w-[88px] h-full pointer-events-none z-10'
                viewBox='0 0 100 500'
                preserveAspectRatio='none'
                aria-hidden='true'
              >
                <path d='M 100,0 L 52,0 C 92,150 80,320 5,500 L 100,500 Z' fill='#FFFFFF' />
                <path
                  className='stroke-brand-red'
                  d='M 52,0 C 92,150 80,320 5,500'
                  fill='none'
                  strokeWidth='14'
                  strokeLinecap='round'
                />
              </svg>
            </SpotlightCard>
          </RevealOnScroll>

          <RevealOnScroll
            delay={60}
            className='lg:col-span-5 h-full'
          >
            <SpotlightCard className='flex flex-col justify-center min-w-0 p-6 sm:p-8 rounded-2xl border border-border-subtle bg-white shadow-subtle h-full'>
              <h3 className='font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-slate-dark tracking-tight mb-3'>
                Warehouse &amp; <span className='text-brand-red'>Distribution Facilities</span>
              </h3>
              <p className='font-body text-slate-body text-sm sm:text-base leading-relaxed mb-6'>
                Our company operates a well-organized wholesale warehouse and storage facility
                designed to maintain a large inventory of cleaning products, materials, plastics and
                hygiene supplies.
              </p>
              <div className='flex flex-col gap-2.5'>
                {infrastructureFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className='flex items-center gap-3 p-3 sm:p-3.5 bg-page-bg border border-border-subtle rounded-xl text-xs sm:text-sm font-semibold text-slate-dark shadow-subtle hover:translate-x-1 hover:border-slate-300 transition-all'
                  >
                    <span
                      className='w-5 h-5 text-brand-red shrink-0 flex items-center justify-center'
                      aria-hidden='true'
                    >
                      <Check className='w-4 h-4' />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </RevealOnScroll>
        </div>

        {/* 2-Card Facility Bento Strip */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Warehouse Card */}
          <RevealOnScroll
            delay={120}
            className='h-full'
          >
            <SpotlightCard
              spotlightColor='rgba(255, 255, 255, 0.15)'
              className='grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark text-white shadow-card h-full'
            >
              <div className='sm:col-span-6 flex flex-col'>
                <div className='flex items-start mb-2 gap-4'>
                  <Warehouse size={64} className='shrink-0' />
                  <div className='flex flex-col gap-0.5'>
                    <span className='font-heading font-extrabold text-5xl text-brand-gold leading-none'>
                      {facilities[0].num}
                    </span>

                    <h3 className='font-heading font-bold text-lg text-white mb-1.5'>
                      {facilities[0].title}
                    </h3>
                  </div>
                </div>
                <hr className='border-t border-gray-300 mb-4' />
                <p className='font-body text-white/90 text-xs sm:text-sm leading-relaxed'>
                  {facilities[0].description}
                </p>
              </div>
              <div className='sm:col-span-6 relative w-full h-40 sm:h-44 rounded-xl overflow-hidden shadow-subtle'>
                <Image
                  src={facilities[0].image}
                  alt={facilities[0].imageAlt}
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>
            </SpotlightCard>
          </RevealOnScroll>

          {/* Retail Store Card */}
          <RevealOnScroll
            delay={180}
            className='h-full'
          >
            <SpotlightCard className='grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center p-6 sm:p-7 rounded-2xl bg-white border border-border-subtle text-slate-dark shadow-subtle hover:shadow-card transition-all h-full'>
              <div className='sm:col-span-6 flex flex-col'>
                <div className='flex items-start mb-2 gap-4'>
                  <Store size={64} className='text-brand-red shrink-0' />
                  <div className='flex flex-col gap-0.5'>
                    <span className='font-heading font-extrabold text-5xl text-brand-gold leading-none'>
                      {facilities[1].num}
                    </span>

                    <h3 className='font-heading font-bold text-lg text-slate-dark mb-1.5'>
                      {facilities[1].title}
                    </h3>
                  </div>
                </div>
                <hr className='border-t border-gray-300 mb-4' />
                <p className='font-body text-slate-body text-xs sm:text-sm leading-relaxed'>
                  {facilities[1].description}
                </p>
              </div>
              <div className='sm:col-span-6 relative w-full h-40 sm:h-44 rounded-xl overflow-hidden shadow-subtle'>
                <Image
                  src={facilities[1].image}
                  alt={facilities[1].imageAlt}
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>
            </SpotlightCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
