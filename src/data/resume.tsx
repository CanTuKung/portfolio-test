import { Icons } from "@/components/icons";
import {
  BookOpen,
  FlaskConical,
  HomeIcon,
  Newspaper,
  UserIcon,
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
    { href: "/#about", icon: UserIcon, label: "About" },
    { href: "/#research", icon: FlaskConical, label: "Research" },
    { href: "/#publications", icon: BookOpen, label: "Publications" },
    { href: "/#news", icon: Newspaper, label: "News" },
  ],
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
  work: [
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
  projects: [
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
  hackathons: [
    {
      title: "Micromobility and Cities",
      dates: "Interest Area",
      location: "Research Theme",
      description: "How shared mobility systems influence sustainable urban travel.",
      image: "/me.png",
      links: [],
    },
    {
      title: "Autonomous Transit Systems",
      dates: "Interest Area",
      location: "Research Theme",
      description: "Scalable and safe deployment strategies for autonomous public transit.",
      image: "/me.png",
      links: [],
    },
    {
      title: "Mobility and Human Factors",
      dates: "Interest Area",
      location: "Research Theme",
      description: "Designing equitable and user-centered transportation systems.",
      image: "/me.png",
      links: [],
    },
  ],
} as const;
