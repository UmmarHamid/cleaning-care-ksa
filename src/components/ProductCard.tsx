import React from "react";
import Image from "next/image";
import { ProductItem } from "@/data/catalog";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { buildProductBulkOrderUrl } from "@/lib/whatsapp";

interface ProductCardProps {
  product: ProductItem;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const bulkOrderUrl = buildProductBulkOrderUrl(product.name);

  return (
    <SpotlightCard className='h-full rounded-2xl'>
      <article className='group flex flex-col h-full rounded-2xl border border-border-subtle bg-white overflow-hidden shadow-subtle hover:shadow-md hover:-translate-y-1 hover:border-brand-red/40 transition-all duration-300 ease-out motion-reduce:transform-none'>
        {/* Studio Image Container */}
        <div className='w-full aspect-[4/3] bg-studio-gray p-3 sm:p-4 flex items-center justify-center overflow-hidden relative shrink-0'>
          <Image
            src={product.image}
            alt={product.imageAlt || `${product.name} — Cleaning Care Trading Co. Wholesale KSA`}
            width={300}
            height={225}
            className='w-full h-full object-contain'
            priority={priority}
            unoptimized
          />
        </div>

        {/* Card Body */}
        <div className='p-3.5 sm:p-4 flex flex-col flex-1'>
          {/* Centre-Aligned Product Title */}
          <div className='h-11 flex items-center justify-center text-center mb-1.5'>
            <h3 className='font-heading font-bold text-sm sm:text-base text-slate-dark leading-snug group-hover:text-brand-red transition-colors line-clamp-2'>
              {product.name}
            </h3>
          </div>

          {/* Simple Product Description */}
          <p className='font-body font-normal text-slate-500 text-xs leading-relaxed text-center mb-4'>
            {product.description}
          </p>

          {/* Order in Bulk on WhatsApp CTA Button */}
          <div className='mt-auto pt-2.5 border-t border-border-subtle/80'>
            <WhatsAppButton
              href={bulkOrderUrl}
              variant='secondary'
              size='md'
              rounded='lg'
              fullWidth
              className='text-xs sm:text-xs px-2.5 py-2 sm:py-2.5 whitespace-nowrap group-hover:shadow-md'
              aria-label={`Order ${product.name} in Bulk on WhatsApp`}
            >
              Order in Bulk on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
}
