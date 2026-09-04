import BlurFade from "@/components/magicui/blur-fade";
import FullPageHeader from "@/components/full-page-header";
import { DATA } from "@/data/resume";
import { Download } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function CVPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-12">
      <FullPageHeader
        title="CV"
        description="CV page placeholder. You can replace this summary and file with your final curriculum vitae."
      />

      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="border rounded-xl p-6 sm:p-8 flex flex-col gap-4">
            <p className="text-muted-foreground">{DATA.cv.summary}</p>
            <a
              href={DATA.cv.filePath}
              download
              className="group inline-flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download className="size-4" />
              <span>Download CV PDF</span>
            </a>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
