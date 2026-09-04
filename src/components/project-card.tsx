/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface CardLink {
  label: string;
  url: string;
}

interface Props {
  title: string;
  href?: string;
  description?: string;
  dates?: string;
  tags?: readonly string[];
  image?: string;
  video?: string;
  links?: readonly CardLink[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const hasMainLink = Boolean(href);
  const media = video ? (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-48 object-cover"
    />
  ) : image ? (
    <ProjectImage src={image} alt={title} />
  ) : null;

  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200",
        hasMainLink ? "cursor-pointer" : "cursor-default",
        className
      )}
    >
      {media && (
        <div className="relative shrink-0">
          {hasMainLink ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {media}
            </Link>
          ) : (
            <div className="block">{media}</div>
          )}
          {links && links.length > 0 && (
            <div className="absolute top-2 right-2 flex flex-wrap gap-2 justify-end">
              {links.map((link, idx) => (
                <Link
                  href={link.url}
                  key={`${link.label}-${idx}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Badge
                    className="text-xs bg-black text-white hover:bg-black/90"
                    variant="default"
                  >
                    {link.label}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            {dates && <time className="text-xs text-muted-foreground">{dates}</time>}
          </div>
          {hasMainLink && (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </div>
        {description && (
          <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <Markdown>{description}</Markdown>
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
