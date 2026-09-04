import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import type { PublicationItem } from "@/data/publications";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PublicationsSectionProps {
  title: string;
  items: readonly PublicationItem[];
  maxItems?: number;
  viewAllHref?: string;
  viewAllLabel?: string;
  layout?: "homepage" | "archive";
  delayOffset?: number;
}

const formatAuthors = (authors: string) =>
  authors.split(",").map((author, index, allAuthors) => {
    const trimmedAuthor = author.trim();
    const isCorrespondingAuthor = trimmedAuthor.endsWith("*");
    const authorName = trimmedAuthor.replace(/\*$/, "");
    const isProfileAuthor = /hyeon\s*been\s+seo/i.test(authorName);

    return (
      <span key={`${authorName}-${index}`}>
        <span className={cn(isProfileAuthor && "font-semibold text-foreground/85")}>
          {authorName}
        </span>
        {isCorrespondingAuthor && <sup className="ml-0.5 text-[0.7em]">*</sup>}
        {index < allAuthors.length - 1 && ", "}
      </span>
    );
  });

export default function PublicationsSection({
  title,
  items,
  maxItems,
  viewAllHref,
  viewAllLabel,
  layout = "archive",
  delayOffset = 0,
}: PublicationsSectionProps) {
  const visibleItems =
    typeof maxItems === "number" ? items.slice(0, maxItems) : items;

  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex flex-col items-center gap-y-4 text-center">
        <div className="h-px w-full bg-linear-to-r from-transparent via-portfolio-accent/35 to-transparent" />
        <h2
          className={cn(
            "font-bold tracking-tighter",
            layout === "homepage" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
          )}
        >
          {title}
        </h2>
      </div>

      <div
        className={cn(
          "grid grid-cols-1 gap-3",
          layout === "homepage" && "sm:grid-cols-2"
        )}
      >
        {visibleItems.map((publication, index) => {
          const links = [
            publication.doi ? { label: "DOI", url: publication.doi } : null,
            publication.pdf ? { label: "PDF", url: publication.pdf } : null,
            publication.link ? { label: "Link", url: publication.link } : null,
          ].filter((value): value is NonNullable<typeof value> => Boolean(value));

          return (
            <BlurFade
              key={`${publication.title}-${publication.year}`}
              delay={0.04 * (delayOffset + index)}
              className="h-full"
              inView
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-card/30 p-5 transition-colors duration-200 hover:border-portfolio-accent/30 hover:bg-portfolio-accent-soft/20 sm:p-6">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-portfolio-accent/25 transition-colors duration-200 group-hover:bg-portfolio-accent/60" aria-hidden />
                <div className="mb-3 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                  <time className="tabular-nums">{publication.year}</time>
                  {publication.status && (
                    <span className="rounded-full border border-portfolio-accent/20 bg-portfolio-accent-soft/70 px-2.5 py-1 font-medium text-portfolio-accent">
                      {publication.status}
                    </span>
                  )}
                </div>

                <h3
                  className={cn(
                    "font-semibold leading-snug tracking-tight text-foreground",
                    layout === "homepage" ? "text-base" : "text-lg"
                  )}
                >
                  {publication.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {formatAuthors(publication.authors)}
                </p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-foreground/80">
                  {publication.venue}
                </p>

                {publication.description && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {publication.description}
                  </p>
                )}

                {publication.tags && publication.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {publication.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="h-6 border-border/80 px-2 text-xs font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {links.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-border/60 pt-4 text-sm">
                    {links.map((link) => (
                      <a
                        key={`${publication.title}-${link.label}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1 font-medium text-portfolio-accent/80 transition-colors hover:text-portfolio-accent"
                      >
                        {link.label}
                        <ArrowUpRight className="size-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </BlurFade>
          );
        })}
      </div>

      {viewAllHref && viewAllLabel && (
        <div className="flex justify-end">
          <Link
            href={viewAllHref}
            className="group inline-flex items-center gap-1 text-sm text-portfolio-accent/80 transition-colors hover:text-portfolio-accent"
          >
            <span>{viewAllLabel}</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
