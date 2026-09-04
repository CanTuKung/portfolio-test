import CardsShowcaseSection, {
  type ShowcaseItem,
} from "@/components/section/cards-showcase-section";
import FullPageHeader from "@/components/full-page-header";
import { sortedPublications } from "@/data/content";

const publicationItems: ShowcaseItem[] = sortedPublications.map((publication) => {
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

export default function PublicationsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-12">
      <FullPageHeader
        title="Publications"
        description="Complete publication list from a single centralized dataset."
      />

      <CardsShowcaseSection
        badgeLabel="Publications"
        title="All Publications"
        description="All publication entries are shown here."
        items={publicationItems}
        delayOffset={0}
      />
    </main>
  );
}
