import FullPageHeader from "@/components/full-page-header";
import PublicationsSection from "@/components/section/publications-section";
import { sortedPublications } from "@/data/content";
import type { PublicationCategory } from "@/data/publications";

const publicationGroups: {
  category: PublicationCategory;
  title: string;
}[] = [
  {
    category: "international-journal",
    title: "International Journals",
  },
  {
    category: "international-conference",
    title: "International Conferences",
  },
  {
    category: "domestic-conference",
    title: "Domestic Conferences",
  },
];

export default function PublicationsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-12">
      <FullPageHeader
        title="Publications"
        description="Journal articles and conference proceedings."
      />

      <div className="flex flex-col gap-16">
        {publicationGroups.map((group, index) => {
          const items = sortedPublications.filter(
            (publication) => publication.category === group.category
          );

          return (
            <section key={group.category}>
              <PublicationsSection
                title={group.title}
                items={items}
                layout="archive"
                delayOffset={index * 2}
              />
            </section>
          );
        })}
      </div>
    </main>
  );
}
