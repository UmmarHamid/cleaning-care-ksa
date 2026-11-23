import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/data/catalog";
import { buildWhatsAppQuoteUrl } from "@/lib/whatsapp";
import { ArrowRight, BrushCleaning, Toilet, TrafficCone, Trash } from "lucide-react";

function CategoryIcon({ id }: { id: string }) {
  if (id === "cleaning-materials") {
    return <BrushCleaning className='category-icon' size={24} aria-hidden='true' />;
  }
  if (id === "hygiene-disposables") {
    return <Toilet className='category-icon' size={24} aria-hidden='true' />;
  }
  if (id === "plastic-drums") {
    return <Trash className='category-icon' size={24} aria-hidden='true' />;
  }
  return <TrafficCone className='category-icon' size={24} aria-hidden='true' />;
}

export function ProductsSection() {
  return (
    <section id='products' className='section products-section'>
      <div className='container'>
        <div className='section-heading product-heading'>
          <div className='heading-with-lines'>
            <span className='heading-line' aria-hidden='true' />
            <h2>Our Products at a Glance</h2>
            <span className='heading-line' aria-hidden='true' />
          </div>
          <p className='product-subtitle'>
            Explore our complete range of cleaning, hygiene, plastic and safety products,
            <br className='hidden sm:inline' /> trusted by businesses across Saudi Arabia.
          </p>
        </div>

        <div className='product-grid'>
          {CATEGORIES.map((cat) => (
            <article key={cat.id} className='product-card group'>
              <Link className='product-image' href='/products'>
                <Image src={cat.image} alt={cat.imageAlt} width={300} height={210} unoptimized />
              </Link>
              <div className='product-body'>
                <div className='card-title-row'>
                  <CategoryIcon id={cat.id} />
                  <h3>{cat.title}</h3>
                </div>
                <p>{cat.shortDescription}</p>
                <div className='mt-auto pt-3 flex items-center justify-between'>
                  <Link href='/products' className='text-link'>
                    View Products <ArrowRight className='ml-1' size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Homepage Catalog Action Strip */}
        <div
          style={{
            marginTop: "36px",
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "14px",
            padding: "20px 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            boxShadow: "0 1px 3px rgba(15,23,42,0.04)",
          }}
        >
          <div>
            <h4
              style={{
                margin: "0 0 4px",
                fontFamily: "var(--heading)",
                fontSize: "16px",
                fontWeight: 700,
                color: "#0F172A",
              }}
            >
              Looking for individual item specifications (10G–1100G) and instant capacity search?
            </h4>
            <p style={{ margin: 0, fontSize: "13.5px", color: "#64748B" }}>
              Browse all 29+ wholesale items with live search, spec selectors, and pre-filled
              WhatsApp quotes.
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link
              href='/products'
              className='button button-red'
              style={{ minHeight: "44px", padding: "10px 20px", fontSize: "13.5px" }}
            >
              <span>Explore Full Interactive Catalog</span>
              <span aria-hidden='true'>→</span>
            </Link>
            <a
              href={buildWhatsAppQuoteUrl()}
              target='_blank'
              rel='noopener noreferrer'
              className='button button-whatsapp'
              style={{ minHeight: "44px", padding: "10px 18px", fontSize: "13.5px" }}
            >
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
