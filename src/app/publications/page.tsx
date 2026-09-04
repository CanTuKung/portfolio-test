import CardsShowcaseSection from "@/components/section/cards-showcase-section";
import FullPageHeader from "@/components/full-page-header";
import { DATA } from "@/data/resume";

export default function PublicationsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-12">
      <FullPageHeader
        title="Publications"
        description="Complete publication list placeholder. Replace these entries with your full publication records."
      />

      <CardsShowcaseSection
        badgeLabel="Publications"
        title="All Publications"
        description="All publication entries are shown here in full-page view."
        items={DATA.publications}
        delayOffset={0}
      />
    </main>
  );
}
