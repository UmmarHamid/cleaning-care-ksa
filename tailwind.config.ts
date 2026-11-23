import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D32027',
          'red-dark': '#A8181E',
          'red-hover': '#B0191F',
          gold: '#F2B705',
          charcoal: '#1A1D20',
        },
        success: {
          DEFAULT: '#16A34A',
          dark: '#15803D',
          light: '#F0FDF4',
        },
        'slate-dark': '#0F172A',
        'slate-body': '#334155',
        'muted-gray': '#64748B',
        'studio-gray': '#F3F4F6',
        'page-bg': '#F8FAFC',
        'border-subtle': '#E2E8F0',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        sans: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      spacing: {
        touch: '44px',
      },
      screens: {
        mobile: '390px',
        tablet: '768px',
        laptop: '1440px',
      },
      boxShadow: {
        card: '0 10px 28px rgba(15, 23, 42, 0.09)',
        'card-hover': '0 10px 20px -3px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.03)',
        stat: '0 14px 34px -4px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(15, 23, 42, 0.03)',
        subtle: '0 1px 3px rgba(15, 23, 42, 0.05), 0 1px 2px rgba(15, 23, 42, 0.03)',
      },
    },
  },
  plugins: [],
};

export default config;
