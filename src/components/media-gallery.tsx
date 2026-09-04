/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { useMemo, useState } from "react";

interface MediaGalleryProps {
  images?: readonly string[];
  alt: string;
  className?: string;
}

export default function MediaGallery({ images = [], alt, className }: MediaGalleryProps) {
  const normalizedImages = useMemo(
    () => [...new Set(images.filter((image) => image.trim().length > 0))],
    [images]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const availableImages = normalizedImages.filter((image) => !failedImages.has(image));
  const safeActiveIndex = availableImages.length
    ? activeIndex % availableImages.length
    : 0;
  const activeImage = availableImages[safeActiveIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => {
      const next = (current % availableImages.length) + direction;
      return (next + availableImages.length) % availableImages.length;
    });
  };

  return (
    <div
      className={cn(
        "group/media relative overflow-hidden bg-muted",
        className ?? "aspect-video"
      )}
    >
      {activeImage ? (
        <img
          key={activeImage}
          src={activeImage}
          alt={`${alt} (${safeActiveIndex + 1} of ${availableImages.length})`}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          onError={() => {
            setFailedImages((current) => new Set(current).add(activeImage));
          }}
        />
      ) : (
        <div
          className="flex size-full items-center justify-center bg-linear-to-br from-muted to-muted/50"
          role="img"
          aria-label={`${alt} image not yet available`}
        >
          <ImageIcon className="size-7 text-muted-foreground/25" strokeWidth={1.25} />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5" />

      {availableImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => move(-1)}
            className="absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground opacity-90 backdrop-blur-sm transition sm:opacity-0 sm:group-hover/media:opacity-100"
            aria-label={`Previous image for ${alt}`}
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground opacity-90 backdrop-blur-sm transition sm:opacity-0 sm:group-hover/media:opacity-100"
            aria-label={`Next image for ${alt}`}
          >
            <ChevronRight className="size-4" />
          </button>
          <span className="absolute bottom-2 right-2 rounded-full bg-background/85 px-2 py-1 text-xs tabular-nums text-foreground backdrop-blur-sm">
            {safeActiveIndex + 1} / {availableImages.length}
          </span>
        </>
      )}
    </div>
  );
}
