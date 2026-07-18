"use client";

import { useState, useMemo } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

const DEFAULT_PHONE_NUMBER = "918105031246"; // country code + number, no + or spaces
const DEFAULT_MESSAGE = "Hi! I found your portfolio and would like to connect.";

type Position = "bottom-right" | "bottom-left";
type Size = "sm" | "md" | "lg";

interface WhatsAppBadgeProps {
  phoneNumber?: string;
  message?: string;
  position?: Position;
  size?: Size;
  showTooltip?: boolean;
  showNotificationBadge?: boolean;
}

const sizeMap: Record<Size, string> = {
  sm: "h-12 w-12 text-2xl",
  md: "h-14 w-14 text-3xl",
  lg: "h-16 w-16 text-4xl",
};

const positionMap: Record<Position, string> = {
  "bottom-right": "bottom-24 right-6 sm:bottom-28 sm:right-8",
  "bottom-left": "bottom-24 left-6 sm:bottom-28 sm:left-8",
};

export function WhatsAppBadge({
  phoneNumber = DEFAULT_PHONE_NUMBER,
  message = DEFAULT_MESSAGE,
  position = "bottom-right",
  size = "md",
  showTooltip = true,
  showNotificationBadge = false,
}: WhatsAppBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = useMemo(() => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }, [phoneNumber, message]);

  return (
    <div className={cn("fixed z-40 animate-badge-enter", positionMap[position])}>
      <div className="relative flex items-center">
        {showTooltip && (
          <span
            role="tooltip"
            className={cn(
              "absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground shadow-lg transition-all duration-200 sm:block",
              isHovered
                ? "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-2 opacity-0"
            )}
          >
            Chat with us on WhatsApp
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-border" />
          </span>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          className={cn(
            "relative flex items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 ease-out will-change-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "animate-whatsapp-pulse",
            sizeMap[size]
          )}
          style={{ backgroundColor: "#25D366" }}
        >
          <FaWhatsapp aria-hidden="true" />

          {showNotificationBadge && (
            <span
              aria-hidden="true"
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-destructive text-[10px] font-bold text-destructive-foreground"
            >
              1
            </span>
          )}
        </a>
      </div>
    </div>
  );
}