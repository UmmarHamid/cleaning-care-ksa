# Project Plan & Linear Ticket Blueprint — Cleaning Care Trading Co.

## 1. Project Summary
* **Client:** Cleaning Care Trading Co. (Riyadh, Kingdom of Saudi Arabia)
* **Package:** English Corporate B2B Website & Product Catalog (SAR 2,400 Turnkey)
* **Timeline:** 3–4 Weeks
* **Objective:** Position Cleaning Care Trading Co. as an established, enterprise-grade B2B distributor of cleaning materials, hygiene disposables, heavy-duty plastic drums, and safety equipment across Saudi Arabia—backed by 3 Riyadh warehouses, 2 retail stores, and major corporate clients (Alfanar, Al Bawani, Hashem Contracting, Stepco).

---

## 2. Milestones & Payment Gates

| Milestone | Target Window | Deliverable Scope | Commercial Gate |
| :--- | :--- | :--- | :--- |
| **M1: Brand & Foundation** | Week 1 | Repo setup, SVG logo, Imagen 3 studio visuals, responsive Header/Footer, Design System | **40% Advance** (Paid at kickoff) |
| **M2: Core Build & Staging** | Week 2 | Home, About/Infrastructure, Interactive Product Catalog (4 Divisions), Clients, Contact + Live Staging URL | **30% Milestone** (Upon staging approval) |
| **M3: QA, DNS & Go-Live** | Week 3–4 | 3-Viewport QA (Mobile/Tablet/Laptop), SEO Schema, `.com` Domain, Zoho Mail (SPF/DKIM/DMARC), Production Launch | **30% Final Balance** (Prior to handover) |

---

## 3. Linear Project Tickets & Ready-to-Use Agent Prompts

Copy these tickets directly into Linear under the project **`Cleaning Care KSA — B2B Web Platform`**. Team members can trigger them directly inside **Google Antigravity** using the Linear MCP integration.

### `CC-1` [Setup] Initialize Next.js Static Repo, Design Tokens & Structured Catalog Data
* **Milestone:** M1: Brand & Foundation
* **Owner:** Tech Lead
* **Context Files:** `@GEMINI.md`, `@tech-specs.md`, `@design-system.md`
* **Base Prompt for Antigravity / Gemini:**
  > "Initialize a Next.js (App Router) project with TypeScript, Tailwind CSS, and `output: 'export'` for Cloudflare Pages. Configure Google Fonts (`Plus Jakarta Sans` and `Inter`) and extend `tailwind.config.ts` using the exact color tokens and spacing rules in `design-system.md`. Create `src/data/company.ts` and `src/data/catalog.ts` containing all 4 product divisions, exact capacities (10G–1100G, 50cm/75cm/1M), enterprise clients, and Riyadh facility details from `tech-specs.md`."

### `CC-2` [Assets] Vectorize Brand Logo SVG & Generate Studio Product Library
* **Milestone:** M1: Brand & Foundation
* **Owner:** Design / Visual Lead
* **Context Files:** `@design-system.md`
* **Instructions & Base Prompts:**
  > 1. Trace/convert `CLEANING CARE.pdf` into a crisp inline React SVG component (`src/components/BrandLogo.tsx`) supporting `light` (dark text) and `dark` (white text) variants while preserving the Crimson Red (`#D32027`) and Warm Gold (`#F2B705`) emblem.
  > 2. Use the 6 Imagen 3 studio prompts in `design-system.md` (Section 5) via Google ImageFX / AI Studio. Export all 6 assets as compressed `.webp` files (<180KB each) into `public/images/` keeping the central 60% safe zone intact for mobile/tablet cropping.

### `CC-3` [UI Core] Build Multi-Viewport Sticky Header & Corporate Footer
* **Milestone:** M1: Brand & Foundation
* **Owner:** Frontend Dev 1
* **Context Files:** `@GEMINI.md`, `@design-system.md`
* **Base Prompt for Antigravity / Gemini:**
  > "Build `Navbar.tsx` and `Footer.tsx` following `design-system.md`. The header must include a slim Riyadh utility bar (location, `+966 56 282 1089`, VAT `314071638700003` — visible on `md` and `lg`, collapsed cleanly on mobile), the `BrandLogo` SVG, navigation links (Home, About Us, Products, Infrastructure, Contact), a high-contrast Crimson Red `'Request Bulk Quote'` CTA button, and an accessible slide-over mobile drawer (<1024px) with minimum 44px touch targets. Footer must display 4 responsive columns with quick product division links and Riyadh contact details."

### `CC-4` [Feature] Home Page: Enterprise Hero, Stats Strip & Client Trust Band
* **Milestone:** M2: Core Build & Staging
* **Owner:** Frontend Dev 1
* **Context Files:** `@GEMINI.md`, `@tech-specs.md`, `@design-system.md`
* **Base Prompt for Antigravity / Gemini:**
  > "Build the Home page hero and authority sections using `design-system.md`. Implement a 12-column split hero on `#1A1D20` dark charcoal featuring a Warm Gold eyebrow badge, bold `Plus Jakarta Sans` headline, dual CTAs (`'Explore Product Catalog'` in `#D32027` + `'WhatsApp Sales Desk'` outline), and the `hero-warehouse.webp` visual framed safely across `390px`, `768px`, and `1440px` viewports. Below the hero, add an overlapping 4-metric stats bar (3 Warehouses in Riyadh, 2 Retail Stores, 500+ Bulk SKUs, Fast KSA Dispatch) and a monochrome-to-color Enterprise Client Trust Strip featuring Al Bawani, Alfanar, Hashem Contracting, Mohammed Al-Deyabi Group, First Gulf Company, and Stepco."

### `CC-5` [Feature] Interactive B2B Product Catalog & WhatsApp Bulk Quote Builder
* **Milestone:** M2: Core Build & Staging
* **Owner:** Frontend Dev 2
* **Context Files:** `@GEMINI.md`, `@tech-specs.md`, `@design-system.md`
* **Base Prompt for Antigravity / Gemini:**
  > "Build both the Home page 4-Category Overview Grid and the dedicated `/products` Interactive Catalog view powered by `src/data/catalog.ts`. Include horizontal touch-scrollable category filter tabs (`All`, `Cleaning Materials`, `Hygiene & Disposables`, `Plastic Drums & Containers`, `Cleaning Equipment & Safety`), an instant search bar filtering by product name or size/capacity (e.g., `1100G`, `240L`, `75cm`), and product cards on `#F3F4F6` surfaces with `aspect-[4/3] object-contain` images, size pills, and a `'Request Bulk Quote'` button that opens `https://wa.me/966562821089` with a URL-encoded message specifying the exact product name and selected capacity."

### `CC-6` [Feature] Infrastructure Bento Grid, Sectors Served & Contact Page
* **Milestone:** M2: Core Build & Staging
* **Owner:** Frontend Dev 2
* **Context Files:** `@GEMINI.md`, `@tech-specs.md`, `@design-system.md`
* **Base Prompt for Antigravity / Gemini:**
  > "Build the `/about` and `/contact` pages (plus the Home page Bento Infrastructure preview). Highlight Cleaning Care's 3 Riyadh warehouses (bulk pallet storage, organized racking, fleet loading) and 2 retail stores (walk-in contractor & household supply), a 6-sector B2B grid (Cleaning Companies, Corporate Offices, Hotels & Restaurants, Hospitals & Clinics, Schools & Universities, Facility Management), an embedded Riyadh Google Map, and a Web3Forms bulk inquiry form with fields for Company Name, Contact Person, Phone/WhatsApp, Product Category, and Estimated Order Volume."

### `CC-7` [QA & SEO] 3-Viewport Responsive Audit, Schema Markup & Performance Tuning
* **Milestone:** M3: QA, DNS & Go-Live
* **Owner:** Tech Lead
* **Context Files:** `@GEMINI.md`, `@tech-specs.md`
* **Base Prompt for Antigravity / Gemini:**
  > "Audit every route across three mandatory viewports: Mobile (`390x844`), Tablet (`768x1024`), and Laptop (`1440x900`). Eliminate any horizontal overflow, clipped images, or sub-44px tap targets. Add JSON-LD `LocalBusiness` / `WholesaleStore` structured data for Riyadh, dynamic meta tags, `sitemap.xml`, and `robots.txt`. Verify Lighthouse scores >= 95 across Performance, Accessibility, Best Practices, and SEO."

### `CC-8` [Ops] Cloudflare Pages Production Deployment, Domain & Zoho Mail Setup
* **Milestone:** M3: QA, DNS & Go-Live
* **Owner:** Tech Lead
* **Checklist:**
  > 1. Register approved `.com` domain.
  > 2. Connect GitHub repo to Cloudflare Pages (`npm run build` -> `out/` directory) and attach custom domain + Auto SSL.
  > 3. Provision Zoho Mail (up to 5 mailboxes: `info@`, `sales@`, `orders@`, `support@`, `admin@`) and configure `MX`, `SPF`, `DKIM`, and `DMARC` DNS records in Cloudflare.