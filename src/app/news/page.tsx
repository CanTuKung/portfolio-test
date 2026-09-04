import BlurFade from "@/components/magicui/blur-fade";
import FullPageHeader from "@/components/full-page-header";
import WorkSection from "@/components/section/work-section";

const BLUR_FADE_DELAY = 0.04;

export default function NewsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-12">
      <FullPageHeader
        title="News"
        description="Chronological news placeholders. Replace with your full update history later."
      />

      <section>
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">All News</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
