/**
 * Design System Brand Tokens for Cleaning Care Trading Co. (Riyadh, KSA)
 * Swiss Industrial Precision aesthetic.
 * Reference: docs/design-system.md, docs/plan.md & GEMINI.md
 */

export const BRAND_COLORS = {
  red: '#D32027',
  redDark: '#A8181E',
  redHover: '#B0191F',
  gold: '#F2B705',
  charcoal: '#1A1D20',

  slateDark: '#0F172A',
  slateBody: '#334155',
  mutedGray: '#64748B',
  studioGray: '#F3F4F6',
  pageBg: '#F8FAFC',
  white: '#FFFFFF',
  borderSubtle: '#E2E8F0',

  success: '#16A34A',
  successDark: '#15803D',
  successLight: '#F0FDF4',
} as const;

export const SECTION_SPACING = {
  y: 'py-10 md:py-14 lg:py-16',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  headerMb: 'mb-8 md:mb-10 lg:mb-12',
} as const;
