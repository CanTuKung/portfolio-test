import FullPageHeader from "@/components/full-page-header";
import CardsShowcaseSection from "@/components/section/cards-showcase-section";
import { DATA } from "@/data/resume";

export default function ProjectsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-12">
      <FullPageHeader
        title="Projects"
        description="Complete project list placeholder. Add project details, methods, and links later."
      />

      <CardsShowcaseSection
        badgeLabel="Projects"
        title="All Projects"
        description="All project entries are shown here in full-page view."
        items={DATA.projects}
        delayOffset={2}
      />
    </main>
  );
}
