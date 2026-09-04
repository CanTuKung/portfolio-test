import { cvContent } from "@/data/cv";
import { education } from "@/data/education";
import { news } from "@/data/news";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";

const parseDateSafe = (value: string) => {
  const timestamp = new Date(value).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
};

export const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

export const featuredPublications = sortedPublications.filter(
  (publication) => publication.featured
);

export const sortedProjects = [...projects].sort((a, b) => {
  const aOrder = typeof a.order === "number" ? a.order : Number.POSITIVE_INFINITY;
  const bOrder = typeof b.order === "number" ? b.order : Number.POSITIVE_INFINITY;

  if (aOrder !== bOrder) {
    return aOrder - bOrder;
  }

  return b.year - a.year;
});

export const featuredProjects = sortedProjects.filter((project) => project.featured);

export const sortedNews = [...news].sort(
  (a, b) => parseDateSafe(b.date) - parseDateSafe(a.date)
);

export const recentNews = sortedNews.slice(0, 3);

export { cvContent, education, profile };
