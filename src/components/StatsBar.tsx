import React from "react";
import { COMPANY_DATA } from "@/data/company";
import { Layers, Store, Truck, Warehouse } from "lucide-react";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { BorderBeam } from "@/components/motion/BorderBeam";

export function StatsBar() {
  return (
    <section
      className='relative z-20 -mt-11 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full'
      aria-label='Company highlights'
    >
      <SpotlightCard
        maxTilt={1.5}
        hoverScale={1.005}
        className='relative bg-white border border-border-subtle rounded-2xl shadow-stat p-3 sm:p-5 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-0 lg:divide-x divide-border-subtle overflow-hidden'
      >
        <BorderBeam
          duration={4.5}
          size={90}
          borderWidth={1.5}
          colorFrom='#D32027'
          colorTo='#F2B705'
        />
        {/* Stat 1: 3 Warehouses */}
        <div className='flex items-center justify-center gap-3 sm:gap-4 p-2 sm:p-3'>
          <Warehouse className='text-brand-red w-8 h-8 sm:w-10 sm:h-10 shrink-0' />
          <div className='flex flex-col justify-center leading-snug'>
            <strong className='font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-slate-dark tracking-tight leading-none'>
              {COMPANY_DATA.stats[0].metric}
            </strong>
            <span className='font-heading font-bold text-2xs sm:text-xs text-slate-dark leading-tight mt-1'>
              {COMPANY_DATA.stats[0].label}
            </span>
            <span className='font-body text-2xs text-muted-gray leading-tight'>
              {COMPANY_DATA.stats[0].subtext}
            </span>
          </div>
        </div>

        {/* Stat 2: 2 Retail Stores */}
        <div className='flex items-center justify-center gap-3 sm:gap-4 p-2 sm:p-3'>
          <Store className='text-brand-red w-8 h-8 sm:w-10 sm:h-10 shrink-0' />
          <div className='flex flex-col justify-center leading-snug'>
            <strong className='font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-slate-dark tracking-tight leading-none'>
              {COMPANY_DATA.stats[1].metric}
            </strong>
            <span className='font-heading font-bold text-2xs sm:text-xs text-slate-dark leading-tight mt-1'>
              {COMPANY_DATA.stats[1].label}
            </span>
            <span className='font-body text-2xs text-muted-gray leading-tight'>
              {COMPANY_DATA.stats[1].subtext}
            </span>
          </div>
        </div>

        {/* Stat 3: 500+ Bulk SKUs */}
        <div className='flex items-center justify-center gap-3 sm:gap-4 p-2 sm:p-3'>
          <Layers className='text-brand-red w-8 h-8 sm:w-10 sm:h-10 shrink-0' />
          <div className='flex flex-col justify-center leading-snug'>
            <strong className='font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-slate-dark tracking-tight leading-none'>
              {COMPANY_DATA.stats[2].metric}
            </strong>
            <span className='font-heading font-bold text-2xs sm:text-xs text-slate-dark leading-tight mt-1'>
              {COMPANY_DATA.stats[2].label}
            </span>
            <span className='font-body text-2xs text-muted-gray leading-tight'>
              {COMPANY_DATA.stats[2].subtext}
            </span>
          </div>
        </div>

        {/* Stat 4: Fast KSA Dispatch */}
        <div className='flex items-center justify-center gap-3 sm:gap-4 p-2 sm:p-3'>
          <Truck className='text-brand-red w-8 h-8 sm:w-10 sm:h-10 shrink-0' />
          <div className='flex flex-col justify-center leading-snug'>
            <strong className='font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-slate-dark tracking-tight leading-none'>
              {COMPANY_DATA.stats[3].metric}
            </strong>
            <span className='font-heading font-bold text-2xs sm:text-xs text-slate-dark leading-tight mt-1'>
              {COMPANY_DATA.stats[3].label}
            </span>
            <span className='font-body text-2xs text-muted-gray leading-tight'>
              {COMPANY_DATA.stats[3].subtext}
            </span>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
