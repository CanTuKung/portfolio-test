export interface NewsItem {
  title: string;
  date: string;
  description?: string;
  image?: string;
  category?: string;
  link?: string;
}

export const news: NewsItem[] = [
  {
    title: "Lab Website Launch",
    date: "2026-08-01",
    description:
      "Initial version of the personal academic website launched with core profile sections.",
    category: "Website",
  },
  {
    title: "Conference Submission",
    date: "2026-07-01",
    description: "Submitted a manuscript on mobility behavior modeling.",
    category: "Publication",
  },
  {
    title: "Seminar Talk",
    date: "2026-06-01",
    description: "Presented recent research directions in smart mobility systems.",
    category: "Talk",
  },
  {
    title: "Dataset Release",
    date: "2026-05-01",
    description: "Released a dataset page for ongoing mobility experiments.",
    category: "Data",
  },
];
