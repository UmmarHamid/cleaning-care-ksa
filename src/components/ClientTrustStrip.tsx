import React from "react";
import { COMPANY_DATA } from "@/data/company";

export function ClientTrustStrip() {
  const { clients } = COMPANY_DATA;

  return (
    <section className='py-16 bg-page-bg border-y border-border-subtle'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-3xl mx-auto mb-10'>
          <div className='flex items-center justify-center gap-3 sm:gap-4 mb-3'>
            <span className='h-0.5 w-10 sm:w-14 bg-brand-red rounded-full' aria-hidden='true' />
            <span className='text-brand-red font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase'>
              Our Valued Clients
            </span>
            <span className='h-0.5 w-10 sm:w-14 bg-brand-red rounded-full' aria-hidden='true' />
          </div>
          <h2 className='font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-dark tracking-tight leading-tight mb-3'>
            Trusted by Leading Companies in Saudi Arabia
          </h2>
          <p className='font-body text-slate-body text-sm sm:text-base leading-relaxed'>
            We are proud to be a trusted supplier for major companies and organizations across
            various sectors, delivering quality products and reliable supply solutions.
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4'>
          {clients.map((client) => (
            <div
              key={client.name}
              className='flex flex-col justify-center items-center min-h-[100px] p-4 rounded-xl border border-border-subtle bg-white shadow-subtle hover:shadow-card transition-all text-center'
            >
              <strong className='font-heading font-extrabold text-base sm:text-lg text-slate-dark tracking-tight'>
                {client.name}
              </strong>
              {client.arabic && (
                <small className='text-muted-gray text-xs mt-0.5' dir='rtl'>
                  {client.arabic}
                </small>
              )}
            </div>
          ))}
        </div>

        <p className='text-center text-xs text-muted-gray mt-8'>
          Official B2B supplier and vendor partner to corporate infrastructure projects across KSA.
        </p>
      </div>
    </section>
  );
}
