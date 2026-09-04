import BlurFade from "@/components/magicui/blur-fade";
import FullPageHeader from "@/components/full-page-header";
import WorkSection from "@/components/section/work-section";
import { sortedNews } from "@/data/content";

const BLUR_FADE_DELAY = 0.04;

export default function NewsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-12">
      <FullPageHeader
        title="News"
        description="Chronological news from the centralized dataset (newest first)."
      />

      <section>
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">All News</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection items={sortedNews} />
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
