import { Icons } from "@/components/icons";
import {
  BookOpen,
  Download,
  FolderKanban,
  HomeIcon,
  Mail,
  Newspaper,
} from "lucide-react";

export const DATA = {
  name: "Hyeon Been",
  initials: "KR",
  url: "https://example.com",
  location: "Daejeon, South Korea",
  locationLink: "https://www.google.com/maps/place/KAIST",
  description:
    "Mobility engineering researcher at KAIST studying intelligent transportation systems and urban mobility.",
  summary:
    "I am a researcher focused on mobility engineering at KAIST. My current work explores data-driven transportation systems, autonomous mobility, and human-centered mobility design. This website is a short academic profile with selected publications and updates.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Intelligent Transportation Systems" },
    { name: "Autonomous Mobility" },
    { name: "Traffic Flow Modeling" },
    { name: "Mobility Data Analytics" },
    { name: "Human-Centered Mobility Design" },
  ],
  navbar: [
    { href: "/#hero", icon: HomeIcon, label: "Home" },
    { href: "/#publications", icon: BookOpen, label: "Publications" },
    { href: "/#projects", icon: FolderKanban, label: "Projects" },
    { href: "/#news", icon: Newspaper, label: "News" },
    { href: "/#contact", icon: Mail, label: "Contact" },
    {
      href: "/cv-placeholder.pdf",
      icon: Download,
      label: "CV Download",
      download: true,
    },
  ],
  cv: {
    filePath: "/cv-placeholder.pdf",
    summary: "Placeholder CV preview. Replace with your full curriculum vitae.",
  },
  contact: {
    email: "researcher@kaist.ac.kr",
    tel: "+82-00-0000-0000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/your-username",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/your-profile",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/your-handle",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:researcher@kaist.ac.kr",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  news: [
    {
      company: "Lab Website Launch",
      href: "/news",
      badges: [],
      location: "KAIST",
      title: "News Update",
      logoUrl: "/me.png",
      start: "Aug 2026",
      end: "Aug 2026",
      description:
        "Initial version of the personal academic website launched with core profile sections.",
    },
    {
      company: "Conference Submission",
      href: "/news",
      badges: [],
      location: "KAIST",
      title: "News Update",
      logoUrl: "/me.png",
      start: "Jul 2026",
      end: "Jul 2026",
      description:
        "Submitted a manuscript on mobility behavior modeling (placeholder entry).",
    },
    {
      company: "Seminar Talk",
      href: "/news",
      badges: [],
      location: "KAIST",
      title: "News Update",
      logoUrl: "/me.png",
      start: "Jun 2026",
      end: "Jun 2026",
      description:
        "Presented recent research directions in smart mobility systems.",
    },
    {
      company: "Dataset Release",
      href: "/news",
      badges: [],
      location: "KAIST",
      title: "News Update",
      logoUrl: "/me.png",
      start: "May 2026",
      end: "May 2026",
      description:
        "Released a placeholder dataset page for ongoing mobility experiments.",
    },
  ],
  education: [
    {
      school: "Korea Advanced Institute of Science and Technology (KAIST)",
      href: "https://www.kaist.ac.kr/en/",
      degree: "Ph.D. in Mobility Engineering (placeholder)",
      logoUrl: "/me.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "[Previous University]",
      href: "https://example.com",
      degree: "B.S. in Mechanical Engineering (placeholder)",
      logoUrl: "/me.png",
      start: "2017",
      end: "2021",
    },
  ],
  publications: [
    {
      title: "Paper Title Placeholder 1",
      href: "https://doi.org/",
      dates: "2026",
      active: true,
      description:
        "Short publication summary placeholder for your first selected paper.",
      technologies: ["Journal", "Transportation", "Modeling"],
      links: [
        {
          type: "DOI",
          href: "https://doi.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Paper Title Placeholder 2",
      href: "https://doi.org/",
      dates: "2025",
      active: true,
      description:
        "Short publication summary placeholder for your second selected paper.",
      technologies: ["Conference", "Autonomous Mobility"],
      links: [
        {
          type: "PDF",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Paper Title Placeholder 3",
      href: "https://doi.org/",
      dates: "2024",
      active: true,
      description:
        "Short publication summary placeholder for your third selected paper.",
      technologies: ["Urban Mobility", "Data Analytics"],
      links: [
        {
          type: "Code",
          href: "https://github.com/your-username",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  projects: [
    {
      title: "Project Placeholder 1",
      href: "https://example.com",
      dates: "2026",
      active: true,
      description: "Short description placeholder for a selected project.",
      technologies: ["Tool A", "Method A"],
      links: [
        {
          type: "Details",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Project Placeholder 2",
      href: "https://example.com",
      dates: "2025",
      active: true,
      description: "Short description placeholder for another selected project.",
      technologies: ["Tool B", "Method B"],
      links: [
        {
          type: "Repo",
          href: "https://github.com/your-username",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Project Placeholder 3",
      href: "https://example.com",
      dates: "2024",
      active: true,
      description: "Short description placeholder for a full projects page entry.",
      technologies: ["Tool C", "Method C"],
      links: [],
      image: "",
      video: "",
    },
  ],
} as const;
