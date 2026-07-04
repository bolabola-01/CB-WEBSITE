"use client";

import WhatsAppIcon from "@/components/whatsapp/WhatsAppIcon";
import { openQuoteModal } from "@/components/whatsapp/events";

export default function WhatsAppFloatingButton() {
  return (
    <button
      type="button"
      onClick={openQuoteModal}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-card transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </button>
  );
}
