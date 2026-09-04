import FullPageHeader from "@/components/full-page-header";
import CardsShowcaseSection, {
  type ShowcaseItem,
} from "@/components/section/cards-showcase-section";
import { sortedProjects } from "@/data/content";

const projectItems: ShowcaseItem[] = sortedProjects.map((project) => ({
  title: project.title,
  year: project.year,
  description: project.description,
  image: project.image,
  tags: project.tools,
  href: project.links?.[0]?.url,
  links: project.links,
}));

export default function ProjectsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-12">
      <FullPageHeader
        title="Projects"
        description="Complete project list from a single centralized dataset."
      />

      <CardsShowcaseSection
        badgeLabel="Projects"
        title="All Projects"
        description="All project entries are shown here."
        items={projectItems}
        delayOffset={2}
      />
    </main>
  );
}
