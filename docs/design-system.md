# Design System & Visual Asset Guide — Cleaning Care Trading Co.

## 1. Color Palette & Tailwind Tokens

Extracted from the official **Cleaning Care Trading Co.** emblem and optimized for high-contrast B2B readability:

| Token Name | Hex Code | Tailwind Class Suggestion | Usage Rules |
| :--- | :--- | :--- | :--- |
| **Brand Crimson** | `#D32027` | `bg-brand-red` / `text-brand-red` | Primary CTAs, active filter tabs, section eyebrows, key accents |
| **Brand Crimson Dark** | `#A8181E` | `hover:bg-brand-red-dark` | Hover/pressed state for primary buttons |
| **Brand Gold** | `#F2B705` | `bg-brand-gold` / `text-brand-gold` | Dark-section badges, stat numbers, subtle accent borders |
| **Industrial Charcoal** | `#1A1D20` | `bg-brand-charcoal` | Hero background, footer background, high-contrast banners |
| **Slate Dark (Text)** | `#0F172A` | `text-slate-900` | Primary headings and card titles |
| **Slate Body (Text)** | `#334155` | `text-slate-700` | Paragraphs, product descriptions, table cells |
| **Muted Gray** | `#64748B` | `text-slate-500` | Captions, VAT metadata, secondary labels |
| **Studio Card Surface** | `#F3F4F6` | `bg-studio-gray` | Product image containers (matches Imagen 3 cyclorama backdrop) |
| **Page Canvas** | `#FFFFFF` / `#F8FAFC` | `bg-white` / `bg-slate-50` | Alternating clean page sections |
| **WhatsApp Action** | `#16A34A` | `bg-emerald-600` | Dedicated "Inquire on WhatsApp" action buttons |

---

## 2. Typography Scale

* **Display & Headings:** `Plus Jakarta Sans` (Weights: `600`, `700`, `800` | Tracking: `-0.02em`)
* **Body & Specifications:** `Inter` (Weights: `400`, `500`, `600`)

| Element | Mobile (`390px`) | Tablet (`768px`) | Laptop (`1440px`) | Weight & Line Height |
| :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | `2rem` (`32px`) | `2.75rem` (`44px`) | `3.5rem` (`56px`) | `800` / `1.12` |
| **Section H2** | `1.5rem` (`24px`) | `2rem` (`32px`) | `2.25rem` (`36px`) | `700` / `1.2` |
| **Card H3** | `1.125rem` (`18px`) | `1.25rem` (`20px`) | `1.25rem` (`20px`) | `700` / `1.3` |
| **Body Copy** | `0.9375rem` (`15px`) | `1rem` (`16px`) | `1rem` (`16px`) | `400` / `1.6` |
| **Spec Badge** | `0.75rem` (`12px`) | `0.75rem` (`12px`) | `0.8125rem` (`13px`) | `600` / `1.2` |

---

## 3. Component Patterns & Elevation
* **Cards:** `rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200`
* **Buttons:**
  * *Primary:* `inline-flex items-center justify-center min-h-[44px] px-6 rounded-lg bg-[#D32027] text-white font-semibold hover:bg-[#A8181E] transition-colors`
  * *WhatsApp Quote:* `inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-lg border border-emerald-600 text-emerald-700 bg-emerald-50/60 hover:bg-emerald-600 hover:text-white font-semibold transition-colors`
* **Section Spacing:** `py-12 md:py-16 lg:py-24` with inner container `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

---

## 4. Logo SVG Specification (`src/components/BrandLogo.tsx`)
* Recreate the emblem from `CLEANING CARE.pdf` as an inline SVG (`viewBox="0 0 280 64"`).
* Keep the red/gold graphic mark on the left (`48x48` equivalent) paired with stacked typography:
  * Line 1: `CLEANING CARE` (Bold, uppercase, tight tracking)
  * Line 2: `TRADING CO.` (Medium, tracked out `+0.14em`, Crimson Red accent bar)
* Support prop `variant?: 'light' | 'dark'` so text switches cleanly between `#0F172A` (on white navbar) and `#FFFFFF` (on `#1A1D20` dark footer).

---

## 5. Master Imagen 3 Studio Prompts (Google ImageFX / AI Studio)

Generate all 6 images using **Imagen 3** and convert to `.webp` inside `public/images/`. Keep main subjects centered in the middle 60% safe zone for mobile/tablet responsiveness.

### A. `hero-warehouse.webp` (Aspect Ratio: `16:9`)
> Architectural commercial photography of a spotless, modern high-bay industrial distribution warehouse in Riyadh, Saudi Arabia. Neatly organized heavy-duty steel pallet racking stacked with bulk 20-liter commercial cleaning chemical jerrycans, wrapped pallets of jumbo paper towel rolls, and rows of brand-new green and yellow 1100-liter four-wheeled HDPE waste containers in the foreground. Polished concrete floor reflecting warm golden-hour sunlight streaming from loading bay doors, crisp industrial aesthetics, shot on 24mm lens, f/8, sharp focus, editorial corporate photography, no text or watermarks.

### B. `infra-hub.webp` (Aspect Ratio: `16:9`)
> Clean, bright commercial photography of a modern wholesale janitorial and hygiene supply showroom and distribution hub. Wide aisles with neatly stocked shelving displaying commercial floor cleaners, microfiber mop heads, heavy-duty plastic drums, and safety cones, alongside a clean loading area ready for commercial dispatch. Bright neutral LED warehouse lighting, crisp architectural lines, realistic industrial commercial photography, 35mm lens, high clarity, no text or logos.

### C. `cat-cleaning-materials.webp` (Aspect Ratio: `4:3`)
> Commercial studio product photography of an organized group of industrial and commercial cleaning chemical containers: two translucent 20-liter heavy-duty HDPE jerrycans filled with vibrant blue glass cleaner and amber degreaser liquid, two 5-liter white commercial disinfectant jugs, and two sleek trigger spray bottles with clear and green cleaning solutions. Arranged neatly on a seamless light cool-gray (#F3F4F6) cyclorama studio background, soft diffused overhead softbox lighting, crisp realistic plastic reflections, subtle grounded contact shadows, 85mm studio macro lens, f/11, clean minimal commercial catalog aesthetic, no text or labels on bottles.

### D. `cat-hygiene-disposables.webp` (Aspect Ratio: `4:3`)
> Commercial studio product photography of bulk commercial hygiene and disposable supplies arranged in a clean composition: two large jumbo white commercial tissue rolls, a neat stack of folded paper hand towels, a heavy-duty black commercial garbage bag roll, a sleek wall-mounted soap dispenser, and a box of blue nitrile disposable gloves. Placed on a seamless light cool-gray (#F3F4F6) cyclorama studio background, soft diffused overhead softbox lighting, crisp paper and plastic textures, subtle grounded contact shadows, 85mm studio lens, f/11, clean minimal commercial catalog aesthetic, no text or branding.

### E. `cat-plastic-drums.webp` (Aspect Ratio: `4:3`)
> Commercial studio product photography of heavy-duty industrial HDPE waste containers and plastic drums: a large forest-green 660-liter four-wheeled commercial dumpster bin with a closed lid positioned slightly behind a bright yellow 240-liter wheeled pedal waste bin and a sleek dark charcoal 120-liter commercial pedal bin. Arranged in a staggered three-quarter angle on a seamless light cool-gray (#F3F4F6) cyclorama studio background, soft diffused overhead softbox lighting, crisp matte-gloss HDPE plastic texture, subtle grounded contact shadows, 85mm studio lens, f/11, clean minimal commercial catalog aesthetic, no text or logos.

### F. `cat-equipment-safety.webp` (Aspect Ratio: `4:3`)
> Commercial studio product photography of commercial janitorial equipment paired with industrial safety products: a heavy-duty yellow commercial mop bucket with downward press wringer and aluminum mop handle, a stack of folded blue and red microfiber cleaning cloths, two bright orange 75cm traffic safety cones with white reflective collars, and a modular red-and-white interlocking plastic safety barricade section. Arranged neatly on a seamless light cool-gray (#F3F4F6) cyclorama studio background, soft diffused overhead softbox lighting, subtle grounded contact shadows, 85mm studio lens, f/11, clean minimal commercial catalog aesthetic, no text or logos.