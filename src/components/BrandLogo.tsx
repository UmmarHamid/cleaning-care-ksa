import Image from 'next/image';

export type BrandLogoSize =
  | 'header'
  | 'footer'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'custom';

export interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: BrandLogoSize;
  className?: string;
  height?: number;
  width?: number;
  priority?: boolean;
}

// Aspect ratio of the original vector logo is 2033 / 1833 ≈ 1.1091 (width / height)
const ASPECT_RATIO = 2033 / 1833;

const SIZE_PRESETS: Record<
  Exclude<BrandLogoSize, 'custom'>,
  { height: number; width: number }
> = {
  header: { height: 96, width: 106 },
  footer: { height: 96, width: 106 },
  sm: { height: 44, width: 49 },
  md: { height: 68, width: 75 },
  lg: { height: 96, width: 106 },
  xl: { height: 120, width: 133 },
};

export function BrandLogo({
  variant = 'light',
  size = 'header',
  className = '',
  height,
  width,
  priority = true,
}: BrandLogoProps) {
  const isDark = variant === 'dark';
  const logoSrc = isDark ? '/assets/logo-white.svg' : '/assets/logo.svg';

  const preset = size !== 'custom' ? SIZE_PRESETS[size] : null;
  const resolvedHeight = height ?? preset?.height ?? 76;
  const resolvedWidth =
    width ??
    (height ? Math.round(height * ASPECT_RATIO) : (preset?.width ?? 84));

  const sizeClass = size !== 'custom' ? `brand-logo-${size}` : '';

  return (
    <span
      className={`brand-logo-wrap ${sizeClass} ${className}`.trim()}
      style={{
        height: `${resolvedHeight}px`,
        width: `${resolvedWidth}px`,
        aspectRatio: '2033 / 1833',
      }}
      aria-label='Cleaning Care Trading Co.'
    >
      <Image
        src={logoSrc}
        alt='Cleaning Care Trading Co.'
        width={resolvedWidth}
        height={resolvedHeight}
        priority={priority}
        className='brand-logo-img w-auto h-full max-h-full max-w-full object-contain block transition-transform duration-200'
      />
    </span>
  );
}
