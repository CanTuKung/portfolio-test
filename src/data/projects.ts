export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  title: string;
  year: number;
  description?: string;
  images?: string[];
  /** @deprecated Use images for new entries. */
  image?: string;
  tools?: string[];
  links?: ProjectLink[];
  featured?: boolean;
  order?: number;
}

export const projects: ProjectItem[] = [
  {
    title: "Project Placeholder 1",
    year: 2026,
    description: "Short description placeholder for a selected project.",
    images: [],
    tools: ["Tool A", "Method A"],
    links: [{ label: "Details", url: "https://example.com" }],
    featured: true,
  },
  {
    title: "Project Placeholder 2",
    year: 2025,
    description: "Short description placeholder for another selected project.",
    images: [],
    tools: ["Tool B", "Method B"],
    links: [{ label: "Repository", url: "https://github.com/your-username" }],
    featured: true,
  },
  {
    title: "Project Placeholder 3",
    year: 2024,
    description: "Short description placeholder for a full projects page entry.",
    images: [],
    tools: ["Tool C", "Method C"],
  },
];
