/* eslint-disable @next/next/no-img-element */

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import CardsShowcaseSection, {
  type ShowcaseItem,
} from "@/components/section/cards-showcase-section";
import ContactSection from "@/components/section/contact-section";
import PublicationsSection from "@/components/section/publications-section";
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

const BLUR_FADE_DELAY = 0.04;

const projectItems: ShowcaseItem[] = featuredProjects.map((project) => ({
  title: project.title,
  year: project.year,
  description: project.description,
  images: project.images,
  image: project.image,
  tags: project.tools,
  href: project.links?.[0]?.url,
  links: project.links,
}));

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={profile.name}
              />

              <BlurFadeText
                className="max-w-[600px] whitespace-pre-line text-base text-muted-foreground md:max-w-[720px] md:text-lg"
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

      <section id="research-interests">
        <div className="mx-auto flex min-h-0 w-full max-w-4xl flex-col gap-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="flex items-center gap-3 text-2xl font-bold">
              <span className="h-5 w-1 rounded-full bg-portfolio-accent" aria-hidden />
              Research Interests
            </h2>
          </BlurFade>

          <div className="flex flex-wrap gap-2.5">
            {profile.researchInterests.map((interest, index) => (
              <BlurFade
                key={interest}
                delay={BLUR_FADE_DELAY * 6 + index * 0.04}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-portfolio-accent/20 bg-portfolio-accent-soft/60 px-3 py-1.5 text-sm text-foreground/75 transition-colors duration-200 hover:border-portfolio-accent/40 hover:bg-portfolio-accent-soft hover:text-foreground">
                  <span className="size-1.5 rounded-full bg-portfolio-accent/70" aria-hidden />
                  {interest}
                </span>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="mx-auto flex min-h-0 w-full max-w-4xl flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="flex items-center gap-3 text-2xl font-bold">
              <span className="h-5 w-1 rounded-full bg-portfolio-accent" aria-hidden />
              Education
            </h2>
          </BlurFade>

          <div className="relative flex flex-col gap-8">
            {education.length > 1 && (
              <div className="absolute bottom-10 left-5 top-10 w-px bg-linear-to-b from-portfolio-accent/10 via-portfolio-accent/35 to-portfolio-accent/10 md:left-6" aria-hidden />
            )}
            {education.map((item, index) => {
              const content = (
                <>
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className="relative z-10 size-10 flex-none overflow-hidden rounded-full border bg-background p-1 object-contain shadow ring-2 ring-border transition-colors group-hover:ring-portfolio-accent/30 md:size-12"
                      />
                    ) : (
                      <div className="relative z-10 size-10 flex-none rounded-full border bg-background p-1 shadow ring-2 ring-border transition-colors group-hover:ring-portfolio-accent/30 md:size-12" />
                    )}

                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="flex items-center gap-2 font-semibold leading-none transition-colors group-hover:text-portfolio-accent">
                        {item.institution}
                        {item.url && (
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            aria-hidden
                          />
                        )}
                      </div>

                      <div className="font-sans text-sm text-muted-foreground">
                        <div>{item.degree}</div>
                        {item.department && <div>{item.department}</div>}
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
          <PublicationsSection
            title="Publications"
            items={featuredPublications}
            maxItems={2}
            viewAllHref="/publications"
            viewAllLabel="View All Publications"
            layout="homepage"
            delayOffset={0}
          />
        </BlurFade>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <CardsShowcaseSection
            title="Projects"
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
              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <span className="h-5 w-1 rounded-full bg-portfolio-accent" aria-hidden />
                News
              </h2>
              <Link
                href="/news"
                className="group inline-flex items-center gap-1 text-sm text-portfolio-accent/80 transition-colors hover:text-portfolio-accent"
              >
                <span>View All News</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <WorkSection items={recentNews} layout="homepage" />
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
