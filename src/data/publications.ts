export type PublicationCategory =
  | "international-journal"
  | "international-conference"
  | "domestic-conference";

export interface PublicationItem {
  title: string;
  year: number;
  authors: string;
  venue: string;
  category: PublicationCategory;
  status?: string;
  description?: string;
  tags?: string[];
  doi?: string;
  pdf?: string;
  link?: string;
  featured?: boolean;
}

export const publications: PublicationItem[] = [
  {
    title:
      "Clustering-enhanced Bayesian optimization (CEBO): A case study on T-pedal wheel design of a stair-climbing robot",
    year: 2026,
    authors: "HyunSeo Jang, HyeonBeen Seo, Yeong Eun Song*, Ungki Lee*",
    venue: "Advanced Engineering Informatics 76 (2026) 105096",
    category: "international-journal",
    status: "Published",
    description:
      "Application of the CEBO framework to T-pedal wheel design for a stair-climbing robot.",
    tags: ["CEBO", "T-pedal Wheel Design"],
    doi: "https://www.sciencedirect.com/science/article/pii/S1474034626007883?via%3Dihub",
    featured: true,
  },
  {
    title:
      "Comparative optimization of electric robo-taxi (eRT) and electric unmanned aerial vehicle (eUAV) systems",
    year: 2026,
    authors: "HyeonBeen Seo, Subeen Kim, Buyong Shin, Ungki Lee*",
    venue: "Scientific Reports 16, 12617 (2026)",
    category: "international-journal",
    status: "Published",
    description:
      "A system-level optimization study comparing the cost and travel-time trade-offs of electric robo-taxis and electric UAVs.",
    tags: ["Mobility System Optimization", "Urban Air/Ground Mobility"],
    doi: "https://www.nature.com/articles/s41598-026-42843-y",
    featured: true,
  },
  {
    title: "Optimization of CPV System Using Genetic Algorithm",
    year: 2025,
    authors: "Sanggeon Park, Sungkyu Choi, HyeonBeen Seo, Ungki Lee*",
    venue: "80th Anniversary Conference of KSME",
    category: "domestic-conference",
    description:
      "GA-based multi-objective optimization of a Fresnel-lens CPV system for improved power output and irradiance uniformity.",
    tags: ["Genetic Algorithm", "CPV System Design"],
  },
  {
    title:
      "Physics-Informed Bayesian Optimization for Stable and Efficient Path Planning in Rough Terrain",
    year: 2026,
    authors: "HyeonBeen Seo, SungKyu Choi, SangGeon Park, Ungki Lee*",
    venue:
      "Asian Congress of Structural and Multidisciplinary Optimization 2026 (ACSMO 2026)",
    category: "international-conference",
    description:
      "Bayesian optimization-based waypoint planning for fuel-efficient and feasible rough-terrain navigation using simulation.",
    tags: ["Bayesian Optimization", "Rough-Terrain Path Planning"],
  },
];
