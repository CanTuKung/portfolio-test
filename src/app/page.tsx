/* eslint-disable @next/next/no-img-element */

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import CardsShowcaseSection, {
  type ShowcaseItem,
} from "@/components/section/cards-showcase-section";
import ContactSection from "@/components/section/contact-section";
import WorkSection from "@/components/section/work-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  education,
  featuredProjects,
  featuredPublications,
  profile,
  recentNews,
} from "@/data/content";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const publicationItems: ShowcaseItem[] = featuredPublications.map((publication) => {
  const links = [
    publication.doi ? { label: "DOI", url: publication.doi } : null,
    publication.pdf ? { label: "PDF", url: publication.pdf } : null,
    publication.link ? { label: "Link", url: publication.link } : null,
  ].filter((value): value is NonNullable<typeof value> => Boolean(value));

  const descriptionParts = [
    `${publication.authors} · ${publication.venue}`,
    publication.description,
  ].filter(Boolean);

  return {
    title: publication.title,
    year: publication.year,
    description: descriptionParts.join("\n\n"),
    image: publication.image,
    tags: publication.tags,
    href: publication.doi ?? publication.pdf ?? publication.link,
    links,
  };
});

const projectItems: ShowcaseItem[] = featuredProjects.map((project) => ({
  title: project.title,
  year: project.year,
  description: project.description,
  image: project.image,
  tags: project.tools,
  href: project.links?.[0]?.url,
  links: project.links,
}));

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={profile.name}
              />

              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={profile.shortIntroduction}
              />
            </div>

            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={profile.name} src={profile.profileImage} />
                <AvatarFallback>{profile.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About Me</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{profile.about}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>

          <div className="flex flex-col gap-8">
            {education.map((item, index) => {
              const content = (
                <>
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}

                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {item.institution}
                        {item.url && (
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            aria-hidden
                          />
                        )}
                      </div>

                      <div className="font-sans text-sm text-muted-foreground">
                        {[item.degree, item.department].filter(Boolean).join(" · ")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>{item.period}</span>
                  </div>
                </>
              );

              return (
                <BlurFade
                  key={`${item.institution}-${item.period}`}
                  delay={BLUR_FADE_DELAY * 6 + index * 0.05}
                >
                  {item.url ? (
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-3 justify-between group"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-x-3 justify-between">{content}</div>
                  )}
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <section id="publications">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <CardsShowcaseSection
            badgeLabel="Publications"
            title="Selected Publications"
            description="Featured publication entries from the full publications dataset."
            items={publicationItems}
            maxItems={2}
            viewAllHref="/publications"
            viewAllLabel="View All Publications"
            delayOffset={0}
          />
        </BlurFade>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <CardsShowcaseSection
            badgeLabel="Projects"
            title="Selected Projects"
            description="Featured project entries from the full projects dataset."
            items={projectItems}
            maxItems={2}
            viewAllHref="/projects"
            viewAllLabel="View All Projects"
            delayOffset={2}
          />
        </BlurFade>
      </section>

      <section id="news">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold">News</h2>
              <Link
                href="/news"
                className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>View All News</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <WorkSection items={recentNews} />
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
