import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Products — Wholesale Cleaning & Hygiene Supplies | Cleaning Care Trading Co. Riyadh",
  description:
    "Explore our complete range of cleaning materials, hygiene disposables, plastic containers and professional cleaning equipment for businesses across Saudi Arabia. Bulk supply from Riyadh warehouses.",
  keywords: [
    "Cleaning Care Trading Co.",
    "Wholesale cleaning chemicals Riyadh",
    "Commercial garbage bags 10G 100G",
    "Industrial waste containers 1100G 240L",
    "Janitorial supplies Saudi Arabia",
    "Hospitality hygiene paper supplies",
    "Traffic safety cones Riyadh",
  ],
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-page-bg'>
        <Suspense
          fallback={
            <div className='min-h-[60vh] flex items-center justify-center text-slate-400 font-heading text-sm'>
              Loading product catalogue...
            </div>
          }
        >
          <ProductCatalog />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
