import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "ghost-dark" | "inverted";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonRounded = "md" | "lg" | "xl" | "full";
export type ButtonIconColor = "current" | "brand" | "whatsapp" | "muted";
export type ButtonIconPosition = "left" | "right";
export type ButtonJustify = "center" | "between";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded;
  fullWidth?: boolean;
  justify?: ButtonJustify;
  icon?: React.ReactNode;
  iconPosition?: ButtonIconPosition;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconColor?: ButtonIconColor;
  leftIconColor?: ButtonIconColor;
  rightIconColor?: ButtonIconColor;
  iconClassName?: string;
  contentClassName?: string;
  overlay?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
  href?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  title?: string;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-red hover:bg-brand-red-dark focus-visible:bg-brand-red-dark text-white shadow-subtle focus-visible:ring-brand-red/30",
  secondary:
    "bg-white hover:bg-slate-50 text-slate-dark border border-border-subtle hover:border-slate-300 shadow-subtle focus-visible:ring-slate-400/40",
  "ghost-dark":
    "bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/60 focus-visible:ring-white/40",
  inverted:
    "bg-white hover:bg-page-bg text-brand-red hover:text-brand-red-dark shadow-subtle focus-visible:ring-white/50",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "min-h-[36px] px-4 py-2 text-xs",
  md: "min-h-touch px-5 py-2.5 text-xs sm:text-sm",
  lg: "min-h-touch px-6 py-3 text-sm sm:text-base",
};

const ROUNDED_CLASSES: Record<ButtonRounded, string> = {
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const ICON_COLOR_CLASSES: Record<ButtonIconColor, string> = {
  current: "text-current",
  brand: "text-brand-red",
  whatsapp: "text-success",
  muted: "text-muted-gray",
};

const JUSTIFY_CLASSES: Record<ButtonJustify, string> = {
  center: "justify-center",
  between: "justify-between",
};

function isExternalHref(href: string, external?: boolean): boolean {
  if (external !== undefined) return external;
  return /^(https?:\/\/|mailto:|tel:)/i.test(href);
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  rounded = "lg",
  fullWidth = false,
  justify = "center",
  icon,
  iconPosition = "left",
  leftIcon,
  rightIcon,
  iconColor = "current",
  leftIconColor,
  rightIconColor,
  iconClassName = "",
  contentClassName = "",
  overlay,
  isLoading = false,
  loadingText,
  className = "",
  href,
  external,
  type = "button",
  disabled = false,
  onClick,
  target,
  rel,
  "aria-label": ariaLabel,
  title,
}: ButtonProps) {
  const resolvedLeftIcon = leftIcon ?? (icon && iconPosition === "left" ? icon : null);
  const resolvedRightIcon = rightIcon ?? (icon && iconPosition === "right" ? icon : null);

  const resolvedLeftColor =
    leftIconColor ??
    (resolvedLeftIcon && (!resolvedRightIcon || iconPosition === "left") ? iconColor : "current");
  const resolvedRightColor =
    rightIconColor ??
    (resolvedRightIcon && (!resolvedLeftIcon || iconPosition === "right") ? iconColor : "current");

  const baseClasses = [
    "relative inline-flex items-center gap-2 font-heading font-bold transition-all cursor-pointer",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
    "active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100",
    overlay ? "overflow-hidden" : "",
    fullWidth ? "w-full" : "",
    JUSTIFY_CLASSES[justify],
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    ROUNDED_CLASSES[rounded],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const buildIconWrapperClass = (color: ButtonIconColor) =>
    `inline-flex items-center justify-center shrink-0 ${ICON_COLOR_CLASSES[color]} ${iconClassName}`.trim();

  const innerContent = (
    <>
      {overlay}
      {isLoading ? (
        <span className={`relative z-10 inline-flex items-center gap-2 ${contentClassName}`.trim()}>
          <Loader2 className='w-4 h-4 animate-spin shrink-0' aria-hidden='true' />
          <span>{loadingText ?? children}</span>
        </span>
      ) : (
        <>
          {resolvedLeftIcon && (
            <span className={`relative z-10 ${buildIconWrapperClass(resolvedLeftColor)}`} aria-hidden='true'>
              {resolvedLeftIcon}
            </span>
          )}
          <span className={`relative z-10 ${contentClassName}`.trim()}>{children}</span>
          {resolvedRightIcon && (
            <span className={`relative z-10 ${buildIconWrapperClass(resolvedRightColor)}`} aria-hidden='true'>
              {resolvedRightIcon}
            </span>
          )}
        </>
      )}
    </>
  );

  if (href) {
    if (isExternalHref(href, external)) {
      const isHttp = /^https?:\/\//i.test(href);
      return (
        <a
          href={href}
          target={target ?? (isHttp ? "_blank" : undefined)}
          rel={rel ?? (isHttp ? "noopener noreferrer" : undefined)}
          className={baseClasses}
          onClick={onClick}
          aria-label={ariaLabel}
          title={title}
        >
          {innerContent}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={baseClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        title={title}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
    >
      {innerContent}
    </button>
  );
}
