import React from "react";
import Image from "next/image";
import { COMPANY_DATA } from "@/data/company";
import { SECTION_SPACING } from "@/lib/tokens";
import { Factory, Truck, Tag, CreditCard, Layers, ShieldCheck, type LucideIcon } from "lucide-react";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const STRENGTH_ICONS: LucideIcon[] = [
  Factory,
  Truck,
  Tag,
  CreditCard,
  Layers,
  ShieldCheck,
];

export function WhyChooseSection() {
  const { strengths } = COMPANY_DATA;

  return (
    <section className={`${SECTION_SPACING.y} bg-white`}>
      <div className={SECTION_SPACING.container}>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch'>
          <div className='lg:col-span-7 flex flex-col justify-center min-w-0 w-full text-center sm:text-left'>
            <SectionHeader
              eyebrow='WHY CHOOSE CLEANING CARE?'
              title='Your Reliable B2B Supply Partner in Saudi Arabia'
              description='We combine extensive inventory, competitive pricing and reliable service to meet the cleaning and hygiene supply needs of businesses across the Kingdom.'
              className='mb-6'
              titleClassName='w-full max-w-none lg:max-w-xl font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-dark tracking-tight leading-tight mb-3'
              descriptionClassName='font-body text-slate-body text-base sm:text-lg leading-relaxed w-full max-w-none lg:max-w-xl'
            />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full text-left'>
              {strengths.map((strength, idx) => {
                const Icon = STRENGTH_ICONS[idx] ?? ShieldCheck;
                return (
                  <SpotlightCard
                    key={strength.title}
                    className='h-full rounded-xl'
                    maxTilt={2}
                    hoverScale={1.02}
                  >
                    <div className='flex items-start gap-2.5 p-3 sm:p-3.5 bg-white border border-border-subtle rounded-xl shadow-subtle hover:shadow-card transition-all h-full'>
                      <span
                        className='shrink-0 text-brand-red mt-0.5 flex items-center justify-center'
                        aria-hidden='true'
                      >
                        <Icon size={32} />
                      </span>
                      <div className='flex flex-col gap-1 min-w-0'>
                        <h3 className='font-heading font-bold text-xs sm:text-sm text-slate-dark leading-tight'>
                          {strength.title}
                        </h3>
                        <p className='font-body text-2xs sm:text-xs text-slate-body leading-normal'>
                          {strength.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>

          <SpotlightCard
            className='lg:col-span-5 relative rounded-2xl overflow-hidden shadow-card min-h-[260px] sm:min-h-[360px] lg:min-h-[460px] h-full w-full'
            maxTilt={2}
            hoverScale={1.01}
          >
            <div className='relative w-full h-full min-h-[260px] sm:min-h-[360px] lg:min-h-[460px] rounded-2xl overflow-hidden'>
              <Image
                src='/assets/images/why-choose-us-warehouse-team.webp'
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
