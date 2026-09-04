export interface PublicationItem {
  title: string;
  year: number;
  authors: string;
  venue: string;
  description?: string;
  image?: string;
  tags?: string[];
  doi?: string;
  pdf?: string;
  link?: string;
  featured?: boolean;
}

export const publications: PublicationItem[] = [
  {
    title: "Paper Title Placeholder 1",
    year: 2026,
    authors: "Author A, Author B, Author C",
    venue: "Journal / Conference Name",
    description:
      "Short publication summary placeholder for your first selected paper.",
    tags: ["Transportation", "Modeling"],
    doi: "https://doi.org/",
    featured: true,
  },
  {
    title: "Paper Title Placeholder 2",
    year: 2025,
    authors: "Author A, Author B",
    venue: "Journal / Conference Name",
    description:
      "Short publication summary placeholder for your second selected paper.",
    tags: ["Autonomous Mobility"],
    pdf: "https://example.com",
    featured: true,
  },
  {
    title: "Paper Title Placeholder 3",
    year: 2024,
    authors: "Author A, Author B",
    venue: "Journal / Conference Name",
    description:
      "Short publication summary placeholder for your third selected paper.",
    tags: ["Urban Mobility", "Data Analytics"],
    link: "https://github.com/your-username",
  },
];
