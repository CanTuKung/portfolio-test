export interface CVEntry {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
}

export interface CVSection {
  title: string;
  items: CVEntry[];
}

export interface CVContent {
  filePath: string;
  summary: string;
  sections: CVSection[];
}

export const cvContent: CVContent = {
  filePath: "/cv/cv.pdf",
  summary:
    "Download the PDF CV below. You can also maintain section entries in this file without changing UI components.",
  sections: [
    { title: "Education", items: [] },
    { title: "Research Experience", items: [] },
    { title: "Professional Experience", items: [] },
    { title: "Awards", items: [] },
    { title: "Publications", items: [] },
    { title: "Projects", items: [] },
    { title: "Skills", items: [] },
  ],
};
