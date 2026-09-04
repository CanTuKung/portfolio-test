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
    degree: "M.S. in CCS Graduate School of Mobility",
    department: "Advisor: Prof. Namwoo Kang",
    period: "Sep.2026 - Present",
    logo: "/education/images.png",
    url: "https://mo.kaist.ac.kr/",
  },
  {
    institution: "Korea University (Sejong Campus)",
    degree: "B.S. in Department of Mobility Science and Engineering",
    department: "Advisor: Prof. Ungki Lee",
    period: "Mar.2021 - Aug.2026",
    logo: "/education/emblem_1.png",
    url: "https://sejong.korea.ac.kr/sites/dmse/index.do",
  },
];
