import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/data/catalog";

function CategoryIcon({ id }: { id: string }) {
  if (id === "cleaning-materials") {
    return (
      <svg
        className="category-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 3h.01" />
        <path d="M7 5h.01" />
        <path d="M11 7h.01" />
        <path d="M3 7h.01" />
        <path d="M7 9h.01" />
        <path d="M3 11h.01" />
        <rect width="4" height="4" x="15" y="5" />
        <path d="m19 9 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V11l2-2" />
        <path d="m13 14 8-2" />
        <path d="m13 19 8-2" />
      </svg>
    );
  }
  if (id === "hygiene-disposables") {
    return (
      <svg
        className="category-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    );
  }
  if (id === "plastic-drums") {
    return (
      <svg
        className="category-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        <line x1="10" x2="10" y1="11" y2="17" />
        <line x1="14" x2="14" y1="11" y2="17" />
      </svg>
    );
  }
  return (
    <svg
      className="category-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9.3 6.2a4.55 4.55 0 0 0 5.4 0" />
      <path d="M7.9 10.7a8.1 8.1 0 0 0 8.2 0" />
      <path d="M6.5 15.2a11.64 11.64 0 0 0 11 0" />
      <path d="m14 2 5.5 17H4.5L10 2Z" />
      <path d="M2 22h20" />
    </svg>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="section products-section">
      <div className="container">
        <div className="section-heading product-heading">
          <div className="heading-with-lines">
            <span className="heading-line" aria-hidden="true" />
            <h2>Our Products at a Glance</h2>
            <span className="heading-line" aria-hidden="true" />
          </div>
          <p className="product-subtitle">
            Explore our complete range of cleaning, hygiene, plastic and safety
            products, trusted by businesses across Saudi Arabia.
          </p>
        </div>

        <div className="product-grid">
          {CATEGORIES.map((cat) => (
            <article key={cat.id} className="product-card">
              <Link className="product-image" href="#contact">
                <Image
                  src={cat.image}
                  alt={cat.imageAlt}
                  width={300}
                  height={210}
                  unoptimized
                />
              </Link>
              <div className="product-body">
                <div className="card-title-row">
                  <CategoryIcon id={cat.id} />
                  <h3>{cat.title}</h3>
                </div>
                <p>{cat.shortDescription}</p>
                <Link href="#contact" className="text-link">
                  View Products <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
