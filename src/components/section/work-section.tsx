"use client";

import BlurFade from "@/components/magicui/blur-fade";
import MediaGallery from "@/components/media-gallery";
import type { NewsItem } from "@/data/news";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

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

export default function WorkSection({ items, layout = "archive" }: WorkSectionProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-5 gap-y-10",
        layout === "homepage"
          ? "sm:grid-cols-3"
          : "sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12"
      )}
    >
      {items.map((item, index) => {
        const images = [
          ...(item.images ?? []),
          ...(item.image ? [item.image] : []),
        ];

        return (
          <BlurFade
            key={`${item.title}-${item.date}`}
            delay={index * 0.05}
            className="h-full"
            inView
          >
            <article className="group flex h-full flex-col">
              <MediaGallery
                images={images}
                alt={item.title}
                className={layout === "homepage" ? "aspect-[4/5]" : "aspect-4/3"}
              />

              <div className="flex flex-1 flex-col border-b border-border/70 pb-5 pt-4 transition-colors duration-300 group-hover:border-foreground/25">
                <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
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
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 shrink-0 text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label={`Open ${item.title}`}
                    >
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
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
            </article>
          </BlurFade>
        );
      })}
    </div>
  );
}
