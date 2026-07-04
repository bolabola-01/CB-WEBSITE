"use client";

import { openQuoteModal } from "@/components/whatsapp/events";

interface QuoteTriggerProps {
  children: React.ReactNode;
  className?: string;
  onBeforeOpen?: () => void;
}

export default function QuoteTrigger({ children, className, onBeforeOpen }: QuoteTriggerProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onBeforeOpen?.();
        openQuoteModal();
      }}
    >
      {children}
    </button>
  );
}
