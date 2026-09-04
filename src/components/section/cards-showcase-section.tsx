import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export type ShowcaseItem = {
  title: string;
  year?: number;
  description?: string;
  image?: string;
  tags?: readonly string[];
  href?: string;
  links?: readonly {
    label: string;
    url: string;
  }[];
};

interface CardsShowcaseSectionProps {
  badgeLabel: string;
  title: string;
  description: string;
  items: readonly ShowcaseItem[];
  maxItems?: number;
  viewAllHref?: string;
  viewAllLabel?: string;
  delayOffset?: number;
}

const BLUR_FADE_DELAY = 0.04;

export default function CardsShowcaseSection({
  badgeLabel,
  title,
  description,
  items,
  maxItems,
  viewAllHref,
  viewAllLabel,
  delayOffset = 0,
}: CardsShowcaseSectionProps) {
  const visibleItems =
    typeof maxItems === "number" ? items.slice(0, maxItems) : items;

  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">{badgeLabel}</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>

        <div className="flex flex-col gap-y-3 items-center justify-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance">
            {description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr w-full">
        {visibleItems.map((item, id) => (
          <BlurFade
            key={`${item.title}-${item.year ?? "na"}`}
            delay={BLUR_FADE_DELAY * (12 + delayOffset) + id * 0.05}
            className="h-full"
          >
            <ProjectCard
              href={item.href}
              title={item.title}
              description={item.description}
              dates={item.year ? String(item.year) : undefined}
              tags={item.tags}
              image={item.image}
              links={item.links}
            />
          </BlurFade>
        ))}
      </div>

      {viewAllHref && viewAllLabel && (
        <div className="flex justify-end">
          <Link
            href={viewAllHref}
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>{viewAllLabel}</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
