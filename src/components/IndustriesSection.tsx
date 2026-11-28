import React from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import { SECTION_SPACING } from "@/lib/tokens";
import { Sparkles, Building2, UtensilsCrossed, Plus, GraduationCap, Wrench } from "lucide-react";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

export function IndustriesSection() {
  const { industries } = COMPANY_DATA;

  return (
    <section id='industries' className={`${SECTION_SPACING.y} bg-white`}>
      <div className={SECTION_SPACING.container}>
        <div className={`text-center sm:text-left max-w-3xl mx-auto sm:mx-0 ${SECTION_SPACING.headerMb}`}>
          <div className='flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-3'>
            <span className='h-0.5 w-10 sm:w-14 sm:hidden bg-brand-red rounded-full' aria-hidden='true' />
            <h2 className='font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-dark tracking-tight'>
              Industries We Serve
            </h2>
            <span className='h-0.5 w-10 sm:w-14 bg-brand-red rounded-full' aria-hidden='true' />
          </div>
          <p className='font-body text-slate-body text-sm sm:text-base leading-relaxed'>
            Supplying high-quality cleaning and hygiene products to a wide range of business sectors
            across Saudi Arabia.
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4'>
          {/* 1. Cleaning Companies & Contractors */}
          <SpotlightCard className='h-full rounded-2xl' hoverScale={1.02}>
            <article className='flex flex-col items-center h-full rounded-2xl bg-white border border-border-subtle shadow-subtle hover:shadow-card transition-all overflow-hidden text-center group'>
              <div className='w-full h-28 relative bg-slate-100 overflow-hidden'>
                <Image
                  src={industries[0].image}
                  alt={industries[0].alt}
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>
              <div
                className='w-16 h-16 rounded-full bg-white shadow-subtle border border-slate-100 flex items-center justify-center text-brand-red -mt-5 mb-2 relative z-10 shrink-0'
                aria-hidden='true'
              >
                <Sparkles className='w-10 h-10' />
              </div>
              <h3 className='font-heading font-black text-xs sm:text-sm text-slate-dark leading-snug px-2.5 pb-4 min-h-[60px] sm:min-h-[52px] flex items-center justify-center'>
                Cleaning Companies
                <br />
                &amp; Contractors
              </h3>
            </article>
          </SpotlightCard>

          {/* 2. Corporate Offices */}
          <SpotlightCard className='h-full rounded-2xl' hoverScale={1.02}>
            <article className='flex flex-col items-center h-full rounded-2xl bg-white border border-border-subtle shadow-subtle hover:shadow-card transition-all overflow-hidden text-center group'>
              <div className='w-full h-28 relative bg-slate-100 overflow-hidden'>
                <Image
                  src={industries[1].image}
                  alt={industries[1].alt}
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>
              <div
                className='w-16 h-16 rounded-full bg-white shadow-subtle border border-slate-100 flex items-center justify-center text-brand-red -mt-5 mb-2 relative z-10 shrink-0'
                aria-hidden='true'
              >
                <Building2 className='w-10 h-10' />
              </div>
              <h3 className='font-heading font-black text-xs sm:text-sm text-slate-dark leading-snug px-2.5 pb-4 min-h-[60px] sm:min-h-[52px] flex items-center justify-center'>
                Corporate Offices
              </h3>
            </article>
          </SpotlightCard>

          {/* 3. Hotels & Restaurants (HORECA) */}
          <SpotlightCard className='h-full rounded-2xl' hoverScale={1.02}>
            <article className='flex flex-col items-center h-full rounded-2xl bg-white border border-border-subtle shadow-subtle hover:shadow-card transition-all overflow-hidden text-center group'>
              <div className='w-full h-28 relative bg-slate-100 overflow-hidden'>
                <Image
                  src={industries[2].image}
                  alt={industries[2].alt}
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>
              <div
                className='w-16 h-16 rounded-full bg-white shadow-subtle border border-slate-100 flex items-center justify-center text-brand-red -mt-5 mb-2 relative z-10 shrink-0'
                aria-hidden='true'
              >
                <UtensilsCrossed className='w-10 h-10' />
              </div>
              <h3 className='font-heading font-black text-xs sm:text-sm text-slate-dark leading-snug px-2.5 pb-4 min-h-[60px] sm:min-h-[52px] flex items-center justify-center'>
                Hotels &amp; Restaurants
                <br />
                (HORECA)
              </h3>
            </article>
          </SpotlightCard>

          {/* 4. Hospitals & Clinics */}
          <SpotlightCard className='h-full rounded-2xl' hoverScale={1.02}>
            <article className='flex flex-col items-center h-full rounded-2xl bg-white border border-border-subtle shadow-subtle hover:shadow-card transition-all overflow-hidden text-center group'>
              <div className='w-full h-28 relative bg-slate-100 overflow-hidden'>
                <Image
                  src={industries[3].image}
                  alt={industries[3].alt}
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>
              <div
                className='w-16 h-16 rounded-full bg-white shadow-subtle border border-slate-100 flex items-center justify-center text-brand-red -mt-5 mb-2 relative z-10 shrink-0'
                aria-hidden='true'
              >
                <Plus className='w-10 h-10 stroke-[3]' />
              </div>
              <h3 className='font-heading font-black text-xs sm:text-sm text-slate-dark leading-snug px-2.5 pb-4 min-h-[60px] sm:min-h-[52px] flex items-center justify-center'>
                Hospitals &amp; Clinics
              </h3>
            </article>
          </SpotlightCard>

          {/* 5. Schools & Universities */}
          <SpotlightCard className='h-full rounded-2xl' hoverScale={1.02}>
            <article className='flex flex-col items-center h-full rounded-2xl bg-white border border-border-subtle shadow-subtle hover:shadow-card transition-all overflow-hidden text-center group'>
              <div className='w-full h-28 relative bg-slate-100 overflow-hidden'>
                <Image
                  src={industries[4].image}
                  alt={industries[4].alt}
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>
              <div
                className='w-16 h-16 rounded-full bg-white shadow-subtle border border-slate-100 flex items-center justify-center text-brand-red -mt-5 mb-2 relative z-10 shrink-0'
                aria-hidden='true'
              >
                <GraduationCap className='w-10 h-10' />
              </div>
              <h3 className='font-heading font-black text-xs sm:text-sm text-slate-dark leading-snug px-2.5 pb-4 min-h-[60px] sm:min-h-[52px] flex items-center justify-center'>
                Schools &amp; Universities
              </h3>
            </article>
          </SpotlightCard>

          {/* 6. Facility Management & Maintenance Companies */}
          <SpotlightCard className='h-full rounded-2xl' hoverScale={1.02}>
            <article className='flex flex-col items-center h-full rounded-2xl bg-white border border-border-subtle shadow-subtle hover:shadow-card transition-all overflow-hidden text-center group'>
              <div className='w-full h-28 relative bg-slate-100 overflow-hidden'>
                <Image
                  src={industries[5].image}
                  alt={industries[5].alt}
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>
              <div
                className='w-16 h-16 rounded-full bg-white shadow-subtle border border-slate-100 flex items-center justify-center text-brand-red -mt-5 mb-2 relative z-10 shrink-0'
                aria-hidden='true'
              >
                <Wrench className='w-10 h-10' />
              </div>
              <h3 className='font-heading font-black text-xs sm:text-sm text-slate-dark leading-snug px-2.5 pb-4 min-h-[60px] sm:min-h-[52px] flex items-center justify-center'>
                Facility Management &amp;
                <br />
                Maintenance Companies
              </h3>
            </article>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
