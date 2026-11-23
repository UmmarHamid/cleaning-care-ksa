/**
 * Design System Brand Tokens for Cleaning Care Trading Co. (Riyadh, KSA)
 * Swiss Industrial Precision aesthetic.
 * Reference: docs/design-system.md, docs/plan.md & GEMINI.md
 */

export const BRAND_COLORS = {
  // Brand Crimson & Accents
  red: '#D32027',
  redDark: '#A8181E',
  redHover: '#B0191F',
  gold: '#F2B705',
  charcoal: '#1A1D20',

  // Neutrals & Surfaces
  slateDark: '#0F172A',
  slateBody: '#334155',
  mutedGray: '#64748B',
  studioGray: '#F3F4F6',
  pageBg: '#F8FAFC',
  white: '#FFFFFF',
  borderSubtle: '#E2E8F0',

  // Generic Semantic Feedback Colors (Success / Confirmations / Inquiries)
  success: '#16A34A',
  successDark: '#15803D',
  successLight: '#F0FDF4',
} as const;

export const TYPOGRAPHY = {
  fonts: {
    heading: "'Plus Jakarta Sans', sans-serif",
    body: "'Inter', sans-serif",
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
} as const;

export const BREAKPOINTS = {
  mobile: '390px',
  tablet: '768px',
  laptop: '1440px',
} as const;

export const TOUCH_TARGET_MIN = '44px';

export const SHADOWS = {
  card: '0 10px 28px rgba(15, 23, 42, 0.09)',
  cardHover: '0 10px 20px -3px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.03)',
  stat: '0 14px 34px -4px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(15, 23, 42, 0.03)',
  subtle: '0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)',
} as const;
