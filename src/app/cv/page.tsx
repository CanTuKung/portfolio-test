import BlurFade from "@/components/magicui/blur-fade";
import FullPageHeader from "@/components/full-page-header";
import { cvContent } from "@/data/content";
import { Download } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function CVPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-12">
      <FullPageHeader
        title="CV"
        description="CV overview driven by centralized content data."
      />

      <section>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="border rounded-xl p-6 sm:p-8 flex flex-col gap-6">
            <p className="text-muted-foreground">{cvContent.summary}</p>
            <a
              href={cvContent.filePath}
              download
              className="group inline-flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download className="size-4" />
              <span>Download CV PDF</span>
            </a>

            <div className="grid gap-6 sm:grid-cols-2">
              {cvContent.sections.map((section) => (
                <div key={section.title} className="flex flex-col gap-2">
                  <h2 className="font-semibold">{section.title}</h2>
                  {section.items.length > 0 ? (
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {section.items.map((item) => (
                        <li key={`${section.title}-${item.title}`}>
                          <p className="font-medium text-foreground">{item.title}</p>
                          {[item.subtitle, item.period].filter(Boolean).length > 0 && (
                            <p>
                              {[item.subtitle, item.period].filter(Boolean).join(" · ")}
                            </p>
                          )}
                          {item.description && <p>{item.description}</p>}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Add entries in <code>src/data/cv.ts</code>.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
