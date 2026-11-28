import React from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import { SECTION_SPACING } from "@/lib/tokens";
import { Factory, Truck, Tag, CreditCard, Layers, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

export function WhyChooseSection() {
  const { strengths } = COMPANY_DATA;

  return (
    <section className={`${SECTION_SPACING.y} bg-white`}>
      <div className={SECTION_SPACING.container}>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch'>
          <div className='lg:col-span-7 flex flex-col justify-center min-w-0 w-full text-center sm:text-left'>
            <div className='flex items-center justify-center sm:justify-start gap-3.5 mb-2.5'>
              <span
                className='inline-block sm:hidden w-11 h-[2.5px] bg-brand-red rounded-sm shrink-0'
                aria-hidden='true'
              />
              <span className='text-brand-red font-heading font-black text-xs sm:text-sm tracking-wider uppercase'>
                WHY CHOOSE CLEANING CARE?
              </span>
              <span
                className='inline-block w-11 h-[2.5px] bg-brand-red rounded-sm shrink-0'
                aria-hidden='true'
              />
            </div>
            <h2 className='w-full max-w-none lg:max-w-xl font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-dark tracking-tight leading-tight mb-3'>
              Your Reliable B2B Supply Partner in Saudi Arabia
            </h2>
            <p className='font-body text-slate-body text-base sm:text-lg leading-relaxed mb-6 w-full max-w-none lg:max-w-xl'>
              We combine extensive inventory, competitive pricing and reliable service to meet the
              cleaning and hygiene supply needs of businesses across the Kingdom.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full text-left'>
              {/* Strength 1 */}
              <SpotlightCard className='h-full rounded-xl' maxTilt={2} hoverScale={1.02}>
                <div className='flex items-start gap-2.5 p-3 sm:p-3.5 bg-white border border-border-subtle rounded-xl shadow-subtle hover:shadow-card transition-all h-full'>
                  <span
                    className='shrink-0 text-brand-red mt-0.5 flex items-center justify-center'
                    aria-hidden='true'
                  >
                    <Factory size={32} />
                  </span>
                  <div className='flex flex-col gap-1 min-w-0'>
                    <h3 className='font-heading font-bold text-xs sm:text-sm text-slate-dark leading-tight'>
                      {strengths[0].title}
                    </h3>
                    <p className='font-body text-2xs sm:text-xs text-slate-body leading-normal'>
                      {strengths[0].description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              {/* Strength 2 */}
              <SpotlightCard className='h-full rounded-xl' maxTilt={2} hoverScale={1.02}>
                <div className='flex items-start gap-2.5 p-3 sm:p-3.5 bg-white border border-border-subtle rounded-xl shadow-subtle hover:shadow-card transition-all h-full'>
                  <span
                    className='shrink-0 text-brand-red mt-0.5 flex items-center justify-center'
                    aria-hidden='true'
                  >
                    <Truck size={32} />
                  </span>
                  <div className='flex flex-col gap-1 min-w-0'>
                    <h3 className='font-heading font-bold text-xs sm:text-sm text-slate-dark leading-tight'>
                      {strengths[1].title}
                    </h3>
                    <p className='font-body text-2xs sm:text-xs text-slate-body leading-normal'>
                      {strengths[1].description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              {/* Strength 3 */}
              <SpotlightCard className='h-full rounded-xl' maxTilt={2} hoverScale={1.02}>
                <div className='flex items-start gap-2.5 p-3 sm:p-3.5 bg-white border border-border-subtle rounded-xl shadow-subtle hover:shadow-card transition-all h-full'>
                  <span
                    className='shrink-0 text-brand-red mt-0.5 flex items-center justify-center'
                    aria-hidden='true'
                  >
                    <Tag size={32} />
                  </span>
                  <div className='flex flex-col gap-1 min-w-0'>
                    <h3 className='font-heading font-bold text-xs sm:text-sm text-slate-dark leading-tight'>
                      {strengths[2].title}
                    </h3>
                    <p className='font-body text-2xs sm:text-xs text-slate-body leading-normal'>
                      {strengths[2].description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              {/* Strength 4 */}
              <SpotlightCard className='h-full rounded-xl' maxTilt={2} hoverScale={1.02}>
                <div className='flex items-start gap-2.5 p-3 sm:p-3.5 bg-white border border-border-subtle rounded-xl shadow-subtle hover:shadow-card transition-all h-full'>
                  <span
                    className='shrink-0 text-brand-red mt-0.5 flex items-center justify-center'
                    aria-hidden='true'
                  >
                    <CreditCard size={32} />
                  </span>
                  <div className='flex flex-col gap-1 min-w-0'>
                    <h3 className='font-heading font-bold text-xs sm:text-sm text-slate-dark leading-tight'>
                      {strengths[3].title}
                    </h3>
                    <p className='font-body text-2xs sm:text-xs text-slate-body leading-normal'>
                      {strengths[3].description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              {/* Strength 5 */}
              <SpotlightCard className='h-full rounded-xl' maxTilt={2} hoverScale={1.02}>
                <div className='flex items-start gap-2.5 p-3 sm:p-3.5 bg-white border border-border-subtle rounded-xl shadow-subtle hover:shadow-card transition-all h-full'>
                  <span
                    className='shrink-0 text-brand-red mt-0.5 flex items-center justify-center'
                    aria-hidden='true'
                  >
                    <Layers size={32} />
                  </span>
                  <div className='flex flex-col gap-1 min-w-0'>
                    <h3 className='font-heading font-bold text-xs sm:text-sm text-slate-dark leading-tight'>
                      {strengths[4].title}
                    </h3>
                    <p className='font-body text-2xs sm:text-xs text-slate-body leading-normal'>
                      {strengths[4].description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              {/* Strength 6 */}
              <SpotlightCard className='h-full rounded-xl' maxTilt={2} hoverScale={1.02}>
                <div className='flex items-start gap-2.5 p-3 sm:p-3.5 bg-white border border-border-subtle rounded-xl shadow-subtle hover:shadow-card transition-all h-full'>
                  <span
                    className='shrink-0 text-brand-red mt-0.5 flex items-center justify-center'
                    aria-hidden='true'
                  >
                    <ShieldCheck size={32} />
                  </span>
                  <div className='flex flex-col gap-1 min-w-0'>
                    <h3 className='font-heading font-bold text-xs sm:text-sm text-slate-dark leading-tight'>
                      {strengths[5].title}
                    </h3>
                    <p className='font-body text-2xs sm:text-xs text-slate-body leading-normal'>
                      {strengths[5].description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>

          <SpotlightCard
            className='lg:col-span-5 relative rounded-2xl overflow-hidden shadow-card min-h-[260px] sm:min-h-[360px] lg:min-h-[460px] h-full w-full'
            maxTilt={2}
            hoverScale={1.01}
          >
            <div className='relative w-full h-full min-h-[260px] sm:min-h-[360px] lg:min-h-[460px] rounded-2xl overflow-hidden'>
              <Image
                src='/assets/images/why-choose-us-warehouse-team.jpg'
                alt='Cleaning Care warehouse specialist in safety vest managing operations'
                fill
                className='object-cover object-[center_30%]'
                unoptimized
              />
              <svg
                className='hidden lg:block absolute left-0 top-0 bottom-0 w-[88px] h-full pointer-events-none z-10'
                viewBox='0 0 100 500'
                preserveAspectRatio='none'
                aria-hidden='true'
              >
                <path d='M 0,0 L 48,0 C 8,150 20,320 95,500 L 0,500 Z' fill='#FFFFFF' />
                <path
                  className='stroke-brand-red'
                  d='M 48,0 C 8,150 20,320 95,500'
                  fill='none'
                  strokeWidth='14'
                  strokeLinecap='round'
                />
              </svg>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
