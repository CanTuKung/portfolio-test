/* eslint-disable @next/next/no-img-element */
"use client";

import BlurFade from "@/components/magicui/blur-fade";
import type { NewsItem } from "@/data/news";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { useState, type ReactNode } from "react";

interface WorkSectionProps {
  items: readonly NewsItem[];
  layout?: "homepage" | "archive";
}

const formatNewsDate = (date: string) => {
  const parsed = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

function NewsMedia({ item, layout }: { item: NewsItem; layout: WorkSectionProps["layout"] }) {
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(item.image) && !imageError;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        layout === "homepage" ? "aspect-[4/5]" : "aspect-4/3"
      )}
    >
      {showImage ? (
        <img
          src={item.image}
          alt=""
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className="flex size-full items-center justify-center bg-linear-to-br from-muted to-muted/50"
          aria-label="Image not yet available"
          role="img"
        >
          <ImageIcon className="size-7 text-muted-foreground/25" strokeWidth={1.25} />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5 transition-colors duration-300 group-hover:ring-foreground/10" />
    </div>
  );
}

function NewsItemWrapper({ item, children }: { item: NewsItem; children: ReactNode }) {
  if (!item.link) {
    return <article className="group flex h-full flex-col">{children}</article>;
  }

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
    >
      {children}
    </a>
  );
}

export default function WorkSection({ items, layout = "archive" }: WorkSectionProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-5 gap-y-10",
        layout === "homepage" ? "sm:grid-cols-3" : "sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12"
      )}
    >
      {items.map((item, index) => (
        <BlurFade
          key={`${item.title}-${item.date}`}
          delay={index * 0.05}
          className="h-full"
          inView
        >
          <NewsItemWrapper item={item}>
            <NewsMedia item={item} layout={layout} />

            <div className="flex flex-1 flex-col border-b border-border/70 pb-5 pt-4 transition-colors duration-300 group-hover:border-foreground/25">
              <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                <time dateTime={item.date}>{formatNewsDate(item.date)}</time>
                {item.category && (
                  <>
                    <span className="size-0.5 rounded-full bg-muted-foreground/50" aria-hidden />
                    <span>{item.category}</span>
                  </>
                )}
              </div>

              <div className="flex items-start justify-between gap-2">
                <h3
                  className={cn(
                    "font-semibold leading-snug tracking-tight text-foreground/90 transition-colors group-hover:text-foreground",
                    layout === "homepage" ? "text-base" : "text-lg"
                  )}
                >
                  {item.title}
                </h3>
                {item.link && (
                  <ArrowUpRight
                    className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    aria-hidden
                  />
                )}
              </div>

              {item.description && (
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed text-muted-foreground",
                    layout === "homepage" ? "line-clamp-2" : "line-clamp-3"
                  )}
                >
                  {item.description}
                </p>
              )}
            </div>
          </NewsItemWrapper>
        </BlurFade>
      ))}
    </div>
  );
}
