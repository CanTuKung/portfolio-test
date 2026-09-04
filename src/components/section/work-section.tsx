/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NewsItem } from "@/data/news";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-cover flex-none"
      onError={() => setImageError(true)}
    />
  );
}

interface WorkSectionProps {
  items: readonly NewsItem[];
  limit?: number;
}

const formatNewsDate = (date: string) => {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function WorkSection({ items, limit }: WorkSectionProps) {
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {visibleItems.map((newsItem) => (
        <AccordionItem
          key={`${newsItem.title}-${newsItem.date}`}
          value={`${newsItem.title}-${newsItem.date}`}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                {newsItem.image && <LogoImage src={newsItem.image} alt={newsItem.title} />}
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {newsItem.title}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
                  </div>
                  {newsItem.category && (
                    <div className="font-sans text-sm text-muted-foreground">
                      {newsItem.category}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>{formatNewsDate(newsItem.date)}</span>
              </div>
            </div>
          </AccordionTrigger>
          {(newsItem.description || newsItem.link) && (
            <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
              <div className="flex flex-col gap-2">
                {newsItem.description && <p>{newsItem.description}</p>}
                {newsItem.link && (
                  <a
                    href={newsItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-foreground hover:underline underline-offset-4"
                  >
                    Read more
                  </a>
                )}
              </div>
            </AccordionContent>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
