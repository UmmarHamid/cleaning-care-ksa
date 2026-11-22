# Technical Specifications — Cleaning Care Trading Co.

## 1. Architecture & Stack Decisions

- **Framework:** Next.js 14/15 (App Router) configured with `output: 'export'` (100% static HTML/CSS/JS bundle for zero server maintenance and sub-second edge delivery).
- **Language:** TypeScript (strict mode enabled).
- **Styling:** Tailwind CSS v3.4+ with CSS custom properties for brand tokens.
- **Icons:** `lucide-react` (clean 1.75px stroke weight to match Swiss industrial aesthetic).
- **Hosting & CDN:** Cloudflare Pages (Edge POP in Riyadh, KSA; automatic Brotli compression & SSL).
- **Forms & Lead Routing:**
  - **Primary B2B Action:** Direct pre-filled WhatsApp Business links (`https://wa.me/966562821089?text=...`).
  - **Secondary Form Action:** Web3Forms API (`POST https://api.web3forms.com/submit`) routing email inquiries directly to `sales@<domain>.com` with zero backend server required.

---

## 2. Verified Business Entity Data (`src/data/company.ts`)

All copy and metadata MUST strictly reflect the verified client company profile:

- **Company Name:** Cleaning Care Trading Co.
- **Arabic Reference Name:** شركة عناية التنظيف للتجارة _(for footer/legal accuracy)_
- **Location:** Riyadh, Kingdom of Saudi Arabia
- **Service Area:** Kingdom of Saudi Arabia (KSA)
- **VAT Registration Number:** `314071638700003`
- **Primary Phone / WhatsApp:** `+966 56 282 1089` (Clean URL format: `966562821089`)
- **Legacy Email (Replace on site with new corporate domain email):** `cleaningcaretradingest@gmail.com` -> migrate to `sales@<domain>.com` & `info@<domain>.com`
- **Infrastructure Highlights:**
  - **3 Fully Equipped Warehouses** in Riyadh (bulk storage, organized racking, dedicated zones for liquids, plastics & cleaning materials, fleet loading/unloading bays).
  - **2 Retail Stores** in Riyadh (serving walk-in customers, contractors, and small businesses).
- **Target B2B Sectors:**
  1. Cleaning Companies & Contractors
  2. Corporate Offices
  3. Hotels & Restaurants (HORECA)
  4. Hospitals & Clinics
  5. Schools & Universities
  6. Retail Outlets & Facility Management Companies
- **Key Enterprise Clients (Trust Strip):**
  1. Al Bawani (`البواني`)
  2. Alfanar (`الفنار`)
  3. Hashem Contracting & Trading Corp. (`شركة هاشم للمقاولات والتجارة المساهمة`)
  4. Mohammed Al-Deyabi Group (`مجموعة الذيابي`)
  5. First Gulf Company (`الشركة الخليجية الأولى FGC`)
  6. Stepco (`STEPCO`)
  7. Abraaj (`ABRAAJ`)
  8. Ali Al-Naama Factory Co. (`شركة مصنع علي النعمة`)

---

## 3. Product Catalog Schema & Master Data (`src/data/catalog.ts`)

Use the following TypeScript interface so search, capacity filtering, and WhatsApp pre-fill work uniformly:

```typescript
export type CategoryId =
  | 'cleaning-materials'
  | 'hygiene-disposables'
  | 'plastic-drums'
  | 'equipment-safety';

export interface ProductItem {
  id: string;
  name: string;
  category: CategoryId;
  shortDescription: string;
  specifications: string[]; // e.g., ['10G', '20G', '30G', '50G', '55G', '70G', '90G', '100G']
  packagingNote?: string;
  image: string; // Path under /images/
  featured?: boolean;
}
```

### Complete Product Inventory (Extracted from Client Profile)

1. **Division 1: Cleaning Materials (`cleaning-materials`)**
   - Multi-Purpose Cleaners (Commercial & Industrial Grade)
   - Disinfectants & Sanitizers (Hospital & Surface Grade)
   - Glass Cleaners
   - Floor Cleaners
   - Heavy-Duty Degreasers
   - Washroom Cleaners
   - Carpet Shampoos
   - Industrial & Laundry Detergents
   - Room Fresheners
2. **Division 2: Hygiene & Disposable Products (`hygiene-disposables`)**
   - Paper Towels & Jumbo Tissue Rolls
   - Heavy-Duty Garbage Bags — Sizes: `10G`, `20G`, `30G`, `50G`, `55G`, `70G`, `90G`, `100G`
   - Shopping Bags — Sizes: `All Sizes (Custom & Standard Bulk)`
   - Disposable Tableware & PPE — `Gloves`, `Plates`, `Bowls`, `Cups`, `Spoons`, `Forks`
   - Liquid Hand Soaps & Hand Sanitizers
   - Aluminium Foil & Cling Film Rolls
3. **Division 3: Plastic Drums & Waste Containers (`plastic-drums`)**
   - Industrial Plastic Drums & Wheeled Waste Containers — Capacities: `10G`, `20G`, `30G`, `50G`, `55G`, `70G`, `90G`, `100G`, `120G`, `240G`, `660G`, `1100G` (Available with pedal and color-coded lid options)
4. **Division 4: Cleaning Equipment & Safety Products (`equipment-safety`)**
   - Mops & Wringer Buckets
   - Microfiber Cloths (Color-coded)
   - Brooms, Brushes & Floor Wipers
   - Commercial Janitorial Cleaning Carts
   - Floor Pads & Machine Accessories
   - Plastic Safety Barricades (`1M x 1M` interlocking)
   - Traffic Safety Cones — Heights: `50CM`, `75CM`, `1M` (Weights: `8KG`, `12KG`, `15KG`, `18KG`, `20KG`)
   - Flexible Safety Cylinders & Delineator Cones
   - Heavy-Duty Plastic Pallets

---

## 4. Multi-Viewport Breakpoint Matrix

All layouts MUST be verified against these exact Tailwind breakpoints:

| Viewport Tier        | Target Width                          | Tailwind Prefix  | Grid & Layout Behavior                                                                                                                                                       |
| :------------------- | :------------------------------------ | :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mobile**           | `375px – 430px` (Test at `390px`)     | Base (`default`) | Single-column (`grid-cols-1`), stacked hero (`aspect-[4/3]` image below copy), horizontal scroll category pills, slide-over nav drawer, sticky bottom WhatsApp bar optional. |
| **Tablet**           | `768px – 1023px` (Test at `768px`)    | `md:`            | 2-column grids (`md:grid-cols-2`), compact utility bar visible, balanced 2-card bento rows, touch-friendly `48px` buttons.                                                   |
| **Laptop / Desktop** | `1280px – 1440px+` (Test at `1440px`) | `lg:` / `xl:`    | Max container `1280px` (`max-w-7xl`), 12-column split hero, 4-column product division grid (`lg:grid-cols-4`), full inline navigation bar.                                   |

---

## 5. Folder Structure

```text
├── docs/
│   ├── plan.md
│   ├── tech-specs.md
│   └── design-system.md
├── GEMINI.md                  # Root context file auto-read by Antigravity / Gemini
├── public/
│   └── images/
│       ├── hero-section-banner.png
│       ├── infra-hub.webp
│       ├── cat-cleaning-materials.webp
│       ├── cat-hygiene-disposables.webp
│       ├── cat-plastic-drums.webp
│       └── cat-equipment-safety.webp
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── products/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── BrandLogo.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   └── WhatsAppButton.tsx
│   └── data/
│       ├── company.ts
│       └── catalog.ts
```
