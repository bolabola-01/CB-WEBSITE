"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import WhatsAppIcon from "@/components/whatsapp/WhatsAppIcon";
import { OPEN_QUOTE_MODAL_EVENT } from "@/components/whatsapp/events";
import { WHATSAPP_REPS, buildWhatsAppLink } from "@/lib/constants";

export default function QuoteModal() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Any button anywhere in the tree can open this modal by dispatching
  // OPEN_QUOTE_MODAL_EVENT (see QuoteTrigger / CtaLink / WhatsAppFloatingButton).
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(OPEN_QUOTE_MODAL_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_QUOTE_MODAL_EVENT, handleOpen);
  }, []);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, close]);

  // Lock body scroll while open, and focus the close button for keyboard users
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-heading"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="absolute inset-0 bg-navy-900/60" />

      <div
        className={`relative w-full max-w-md bg-paper border border-line transform transition-all duration-300 ${
          open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-3"
        }`}
      >
        <div className="h-1 bg-terracotta-500" />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-ink-soft hover:text-terracotta-500 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-7 pt-8 pb-7 sm:px-9 sm:pt-9 sm:pb-8">
          <p className="eyebrow mb-4">Request a Quotation</p>
          <h2 id="quote-modal-heading" className="headline text-2xl sm:text-3xl mb-2">
            Choose one of our marketing representatives.
          </h2>

          <div className="mt-7 space-y-4">
            {WHATSAPP_REPS.map((rep) => (
              <div key={rep.phoneDigits} className="border border-line p-5 sm:p-6">
                <p className="text-[11px] uppercase tracking-widest2 text-terracotta-500 font-medium">
                  {rep.label}
                </p>
                <a
                  href={`tel:${rep.phoneDigits}`}
                  className="block mt-1.5 font-display text-xl text-navy-700 hover:text-terracotta-500 transition-colors"
                >
                  {rep.phoneDisplay}
                </a>
                <a
                  href={buildWhatsAppLink(rep.phoneDigits)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full mt-4 gap-2"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat via WhatsApp
                </a>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-ink-soft leading-relaxed">
            Opens WhatsApp in a new tab with a pre-filled message so you can start the
            conversation right away.
          </p>
        </div>
      </div>
    </div>
  );
}
