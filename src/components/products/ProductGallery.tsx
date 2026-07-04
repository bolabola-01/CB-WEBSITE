"use client";

import { useEffect, useState } from "react";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { SanityImage } from "@/types";

export default function ProductGallery({
  gallery,
  title,
}: {
  gallery: SanityImage[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasImages = gallery && gallery.length > 0;

  const next = () => setActive((i) => (i + 1) % gallery.length);
  const prev = () => setActive((i) => (i - 1 + gallery.length) % gallery.length);

  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, gallery.length]);

  return (
    <div>
      <div className="relative h-[420px] w-full bg-paper-warm border border-line group">
        {hasImages ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={gallery[active].asset.url}
              alt={gallery[active].alt || title}
              className="h-full w-full object-cover cursor-zoom-in"
              onClick={() => setLightboxOpen(true)}
            />
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label="View full size"
              className="absolute bottom-3 right-3 bg-paper/90 border border-line p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Expand className="h-4 w-4 text-navy-700" />
            </button>
            {gallery[active].caption && (
              <p className="absolute bottom-0 left-0 right-0 bg-navy-900/70 text-paper text-xs px-3 py-2">
                {gallery[active].caption}
              </p>
            )}
          </>
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="font-display italic text-3xl text-navy-700/25">{title}</span>
          </div>
        )}
      </div>

      {hasImages && gallery.length > 1 && (
        <div className="mt-4 flex gap-3 flex-wrap">
          {gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-20 w-20 border ${
                i === active ? "border-terracotta-500" : "border-line"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.asset.url} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && hasImages && (
        <div
          className="fixed inset-0 z-[100] bg-navy-900/90 flex items-center justify-center p-4 sm:p-10"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setLightboxOpen(false);
          }}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute top-5 right-5 text-paper hover:text-terracotta-400 transition-colors"
          >
            <X className="h-7 w-7" />
          </button>

          {gallery.length > 1 && (
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 text-paper hover:text-terracotta-400 transition-colors"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>
          )}

          <figure className="max-w-4xl w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={gallery[active].asset.url}
              alt={gallery[active].alt || title}
              className="w-full max-h-[80vh] object-contain"
            />
            {gallery[active].caption && (
              <figcaption className="text-center text-paper/80 text-sm mt-4">
                {gallery[active].caption}
              </figcaption>
            )}
          </figure>

          {gallery.length > 1 && (
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 text-paper hover:text-terracotta-400 transition-colors"
            >
              <ChevronRight className="h-9 w-9" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
