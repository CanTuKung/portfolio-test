export type SocialIcon = "linkedin" | "x" | "email" | "globe";

export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIcon;
  showInNavbar?: boolean;
}

export interface ProfileContent {
  name: string;
  initials: string;
  siteUrl: string;
  shortTitle: string;
  shortIntroduction: string;
  researchInterests: string[];
  profileImage: string;
  contactEmail: string;
  contactPhone?: string;
  socialLinks: SocialLink[];
}

export const profile: ProfileContent = {
  name: "Hyeon Been Seo",
  initials: "HBS",
  siteUrl: "https://example.com",
  shortTitle: "Mobility Engineering Researcher",
  shortIntroduction:
    "M.S. student at the CCS Graduate School of Mobility.\nFocused on system-level optimization of mobility engineering problems.",
  researchInterests: [
    "Bayesian Optimization",
    "Surrogate Modeling",
    "AI-driven Design Optimization",
    "Data-Driven Mobility",
    "Path Planning & Routing Optimization",
  ],
  profileImage: "/profile/profile.jpg",
  contactEmail: "shbj0524@kaist.ac.kr",
  contactPhone: "+82-00-0000-0000",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/your-profile",
      icon: "linkedin",
    },
    {
      name: "X",
      url: "https://x.com/your-handle",
      icon: "x",
    },
    {
      name: "Email",
      url: "mailto:shbj0524@kaist.ac.kr",
      icon: "email",
    },
  ],
};

export const navigationLinks = [
  { href: "/", label: "Home", icon: "home" as const },
  {
    href: "/publications",
    label: "Publications",
    icon: "publications" as const,
  },
  { href: "/projects", label: "Projects", icon: "projects" as const },
  { href: "/news", label: "News", icon: "news" as const },
  { href: "/#contact", label: "Contact", icon: "contact" as const },
  {
    href: "/cv",
    label: "CV",
    icon: "cv" as const,
  },
] as const;
