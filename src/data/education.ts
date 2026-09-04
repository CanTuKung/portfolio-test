export interface EducationItem {
  institution: string;
  degree: string;
  department?: string;
  period: string;
  description?: string;
  logo?: string;
  url?: string;
}

export const education: EducationItem[] = [
  {
    institution: "Korea Advanced Institute of Science and Technology (KAIST)",
    degree: "Ph.D. in Mobility Engineering",
    department: "Graduate School of Mobility",
    period: "2023 - Present",
    logo: "/profile/profile.jpg",
    url: "https://www.kaist.ac.kr/en/",
  },
  {
    institution: "[Previous University]",
    degree: "B.S. in Mechanical Engineering",
    period: "2017 - 2021",
    logo: "/profile/profile.jpg",
    url: "https://example.com",
  },
];
