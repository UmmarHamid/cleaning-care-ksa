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
        <div className='text-center sm:text-left max-w-3xl mx-auto sm:mx-0 mb-12'>
          <div className='flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-3'>
            <span className='h-0.5 w-10 sm:w-14 sm:hidden bg-brand-red rounded-full' aria-hidden='true' />
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
          {/* Text Content - spans 7 columns on desktop, order-2 on mobile/tablet so image displays first after heading */}
          <RevealOnScroll
            delay={0}
            className='order-2 lg:order-1 lg:col-span-7 h-full w-full'
          >
            <SpotlightCard className='flex flex-col justify-center min-w-0 p-6 sm:p-8 rounded-2xl border border-border-subtle bg-white shadow-subtle h-full w-full text-center sm:text-left'>
              <h3 className='font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-slate-dark tracking-tight mb-3 w-full max-w-none'>
                Warehouse &amp; <span className='text-brand-red'>Distribution Facilities</span>
              </h3>
              <p className='font-body text-slate-body text-sm sm:text-base leading-relaxed mb-6 w-full max-w-none'>
                Our company operates a well-organized wholesale warehouse and storage facility
                designed to maintain a large inventory of cleaning products, materials, plastics and
                hygiene supplies.
              </p>
              <div className='flex flex-col gap-2.5 w-full text-left'>
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

          {/* Clean Warehouse Image - spans 5 columns, order-1 on mobile/tablet so it appears right after section heading */}
          <RevealOnScroll
            delay={60}
            className='order-1 lg:order-2 lg:col-span-5 h-full w-full'
          >
            <SpotlightCard className='relative rounded-2xl overflow-hidden w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] h-full shadow-card'>
              <Image
                src='/assets/images/our-infrastructure-warehouse-interior.png'
                alt='Organized warehouse interior with inventory and high pallet racking in Riyadh'
                fill
                className='object-cover object-center'
                unoptimized
              />
            </SpotlightCard>
          </RevealOnScroll>
        </div>

        {/* 2-Card Facility Bento Strip */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Warehouse Card */}
          <RevealOnScroll
            delay={120}
            className='h-full'
          >
            <SpotlightCard
              spotlightColor='rgba(255, 255, 255, 0.15)'
              className='grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-brand-red to-brand-red-dark text-white shadow-card h-full'
            >
              <div className='sm:col-span-6 flex flex-col justify-between h-full'>
                <div>
                  <div className='flex items-start mb-2 gap-4'>
                    <Warehouse size={56} className='shrink-0' />
                    <div className='flex flex-col gap-0.5'>
                      <span className='font-heading font-extrabold text-4xl sm:text-5xl text-brand-gold leading-none'>
                        {facilities[0].num}
                      </span>

                      <h3 className='font-heading font-bold text-base sm:text-lg text-white mb-1.5'>
                        {facilities[0].title}
                      </h3>
                    </div>
                  </div>
                  <hr className='border-t border-white/20 mb-4' />
                  <p className='font-body text-white/90 text-xs sm:text-sm leading-relaxed'>
                    {facilities[0].description}
                  </p>
                </div>
              </div>
              <div className='sm:col-span-6 relative w-full h-44 sm:h-48 rounded-xl overflow-hidden shadow-subtle'>
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
            <SpotlightCard className='grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center p-6 sm:p-7 rounded-2xl bg-white border border-border-subtle text-slate-dark shadow-subtle hover:shadow-card transition-all h-full'>
              <div className='sm:col-span-6 flex flex-col justify-between h-full'>
                <div>
                  <div className='flex items-start mb-2 gap-4'>
                    <Store size={56} className='text-brand-red shrink-0' />
                    <div className='flex flex-col gap-0.5'>
                      <span className='font-heading font-extrabold text-4xl sm:text-5xl text-brand-gold leading-none'>
                        {facilities[1].num}
                      </span>

                      <h3 className='font-heading font-bold text-base sm:text-lg text-slate-dark mb-1.5'>
                        {facilities[1].title}
                      </h3>
                    </div>
                  </div>
                  <hr className='border-t border-border-subtle mb-4' />
                  <p className='font-body text-slate-body text-xs sm:text-sm leading-relaxed'>
                    {facilities[1].description}
                  </p>
                </div>
              </div>
              <div className='sm:col-span-6 relative w-full h-44 sm:h-48 rounded-xl overflow-hidden shadow-subtle'>
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
