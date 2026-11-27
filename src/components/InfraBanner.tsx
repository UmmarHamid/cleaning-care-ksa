import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { Warehouse, Store, ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

export function InfraBanner() {
  return (
    <section id='infrastructure-banner' className='py-8 sm:py-12 bg-white relative overflow-hidden'>
      {/* Background Architectural Grid & Ambient Brand Glow */}
      <div
        className='absolute inset-0 bg-industrial-grid pointer-events-none z-0'
        aria-hidden='true'
      />
      <div className='absolute inset-0 bg-brand-glow pointer-events-none z-0' aria-hidden='true' />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='relative grid grid-cols-1 lg:grid-cols-12 bg-gradient-to-br from-brand-red-dark to-brand-red rounded-2xl overflow-hidden shadow-card items-stretch'>
          {/* Left Content Panel */}
          <div className='lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center z-10 text-white text-center sm:text-left items-center sm:items-start'>
            <h2 className='font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-tight mb-2 max-w-sm mx-auto sm:mx-0'>
              Our Infrastructure in Riyadh
            </h2>
            <p className='font-body text-white/90 text-md leading-relaxed mb-6 max-w-sm mx-auto sm:mx-0'>
              A strong logistics and distribution setup to ensure consistent supply, fast delivery,
              and reliable service across the Kingdom.
            </p>
            <div className='w-full sm:w-fit'>
              <Link
                href='#infrastructure'
                className='w-full sm:w-fit inline-flex justify-center items-center gap-2 bg-white hover:bg-page-bg text-brand-red hover:text-brand-red-dark font-heading font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-subtle min-h-touch transition-all hover:-translate-y-0.5 group'
              >
                <span>Explore Our Infrastructure</span>
                <ArrowRight
                  className='w-4 h-4 group-hover:translate-x-1 transition-transform'
                  aria-hidden='true'
                />
              </Link>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className='col-start-1 row-start-2 lg:col-start-6 lg:row-start-1 lg:col-span-7 relative w-full h-full min-h-[260px] sm:min-h-[320px] lg:min-h-0 overflow-hidden [clip-path:none] lg:[clip-path:polygon(7%_0,100%_0,100%_100%,0%_100%)]'>
            <Image
              src='/assets/images/our-infrastructure-warehouse-interior.png'
              alt='Clean, organized Cleaning Care logistics warehouse in Riyadh with tall pallet racks'
              fill
              className='object-cover object-center'
              unoptimized
            />
            {/* Gold diagonal accent line on desktop */}
            <div
              className='hidden lg:block absolute -top-[15%] -bottom-[15%] left-[2.2%] w-2 bg-brand-gold -skew-x-[7.5deg] z-10 shadow-md'
              aria-hidden='true'
            />
          </div>

          {/* Stat Overlay Card */}
          <SpotlightCard
            className='col-start-1 row-start-2 self-end relative mt-28 sm:mt-40 mx-3 mb-3 sm:mx-5 sm:mb-5 lg:col-start-auto lg:row-start-auto lg:self-auto lg:absolute lg:top-1/2 lg:left-[48.5%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:m-0 z-20 rounded-xl'
            maxTilt={2}
            hoverScale={1.02}
          >
            <div className='bg-white rounded-xl p-3 sm:p-3.5 shadow-stat flex flex-row lg:flex-col justify-around lg:justify-center items-center lg:items-stretch gap-2 sm:gap-3 border border-border-subtle lg:w-52 h-full'>
              <div className='flex items-center gap-2 sm:gap-2.5 min-w-0'>
                <span
                  className='text-brand-red flex items-center justify-center shrink-0'
                  aria-hidden='true'
                >
                  <Warehouse className='w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10' />
                </span>
                <div className='flex flex-col min-w-0'>
                  <strong className='font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight text-slate-dark'>
                    {COMPANY_DATA.stats[0].metric}
                  </strong>
                  <span className='font-body font-semibold text-xs sm:text-sm text-muted-gray leading-tight'>
                    Fully Equipped Warehouses
                  </span>
                </div>
              </div>

              <div className='h-8 w-px lg:h-px lg:w-full bg-border-subtle shrink-0' aria-hidden='true' />

              <div className='flex items-center gap-2 sm:gap-2.5 min-w-0'>
                <span
                  className='text-brand-red flex items-center justify-center shrink-0'
                  aria-hidden='true'
                >
                  <Store className='w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10' />
                </span>
                <div className='flex flex-col min-w-0'>
                  <strong className='font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight text-slate-dark'>
                    {COMPANY_DATA.stats[1].metric}
                  </strong>
                  <span className='font-body font-semibold text-xs sm:text-sm text-muted-gray leading-tight'>
                    Retail Stores in Riyadh
                  </span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
