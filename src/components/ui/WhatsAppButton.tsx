import React from "react";
import { Button, ButtonProps } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export interface WhatsAppButtonProps extends Omit<ButtonProps, "href"> {
  href: string;
}

export function WhatsAppButton({
  variant = "secondary",
  icon,
  iconPosition = "left",
  iconColor = "whatsapp",
  external = true,
  ...props
}: WhatsAppButtonProps) {
  const defaultIcon = <WhatsAppIcon className='w-4 h-4' />;

  return (
    <Button
      variant={variant}
      icon={icon ?? defaultIcon}
      iconPosition={iconPosition}
      iconColor={iconColor}
      external={external}
      {...props}
    />
  );
}
