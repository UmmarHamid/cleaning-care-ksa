# GEMINI.md — Antigravity & Team Engineering Guardrails

> **Instruction for AI Agents (Google Antigravity / Gemini CLI / Code Assist) & Team Developers:**
> Read this file before modifying any code or generating UI components in this repository.

## 1. Project Identity & Goal
You are building the official B2B corporate and wholesale catalog website for **Cleaning Care Trading Co.** (Riyadh, Saudi Arabia).
* **Primary Conversion Goal:** Drive B2B bulk quote inquiries via **WhatsApp (`+966 56 282 1089`)** and corporate inquiry forms.
* **No E-Commerce Cart:** Do NOT add shopping carts, checkout flows, payment gateways, or retail unit prices. Every product action is a **"Request Bulk Quote"** or **"Inquire on WhatsApp"** CTA.
* **Language Scope:** English only (strictly polished corporate procurement English).

## 2. Non-Negotiable Visual & UX Rules
1. **Aesthetic Direction ("Swiss Industrial Precision"):** Clean, bright, authoritative, and uncluttered. 85% crisp white/cool-gray surfaces, 10% deep charcoal (`#0F172A` / `#1A1D20`), and 5% brand Crimson Red (`#D32027`) + Warm Gold (`#F2B705`).
2. **Strict Color Discipline:**
   * Never use generic blue (`blue-600`) for buttons or links—always use Brand Red (`#D32027`, hover `#B0191F`).
   * Reserve Warm Gold (`#F2B705`) for trust badges, warehouse stat accents, and subtle highlights—never as a body text color on white backgrounds (fails WCAG contrast).
3. **3-Viewport Responsiveness Mandate:**
   * Every PR/ticket must look balanced and free of horizontal scroll at **Mobile (`390px`)**, **Tablet (`768px`)**, and **Laptop (`1440px`)**.
   * Never hardcode fixed pixel widths (`w-[600px]`) on containers or images; use fluid widths (`w-full`, `max-w-7xl`) and responsive aspect ratios (`aspect-[4/3]`).
   * Ensure all interactive buttons, filter pills, and mobile nav links have a minimum height/width of `44px` (`min-h-[44px]`).
4. **Image Handling:**
   * Always use Next.js `<Image>` (with `unoptimized: true` configured in `next.config.mjs` for static export) and explicit `alt` attributes.
   * Product category thumbnails must sit inside `#F3F4F6` rounded containers with `object-contain p-4` so studio edges blend seamlessly.

## 3. Coding Standards
* Use **TypeScript** with strict interfaces imported from `src/data/catalog.ts` and `src/data/company.ts`. Never hardcode company phone numbers, VAT numbers, or product lists inside JSX components—always import from `src/data/`.
* Keep components modular, accessible (semantic `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, proper `aria-label` on icon buttons), and lightweight (avoid heavy animation libraries; use clean CSS transitions).
* Format WhatsApp URLs using a shared helper `buildWhatsAppQuoteUrl(productName?: string, spec?: string)` in `src/lib/whatsapp.ts`.
* keep component max lines not more than 500
* create reusable components if usage is more than once
* for colors and constants use /create reusable  tokens avoid using adhoc values
## 4. Reference Docs
* Full ticket roadmap & prompts: `docs/plan.md`
* Data schemas, client details & product lists: `docs/tech-specs.md`
* Color tokens, typography & Imagen 3 prompts: `docs/design-system.md`