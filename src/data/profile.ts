export type SocialIcon = "github" | "linkedin" | "x" | "email" | "globe";

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
  about: string;
  profileImage: string;
  contactEmail: string;
  contactPhone?: string;
  socialLinks: SocialLink[];
}

export const profile: ProfileContent = {
  name: "Hyeon Been",
  initials: "HB",
  siteUrl: "https://example.com",
  shortTitle: "Mobility Engineering Researcher",
  shortIntroduction:
    "Mobility engineering researcher at KAIST studying intelligent transportation systems and urban mobility.",
  about:
    "I am a researcher focused on mobility engineering at KAIST. My current work explores data-driven transportation systems, autonomous mobility, and human-centered mobility design. This website is a short academic profile with selected publications and updates.",
  profileImage: "/profile/profile.jpg",
  contactEmail: "researcher@kaist.ac.kr",
  contactPhone: "+82-00-0000-0000",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      icon: "github",
      showInNavbar: true,
    },
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
      url: "mailto:researcher@kaist.ac.kr",
      icon: "email",
    },
  ],
};

export const navigationLinks = [
  { href: "/#hero", label: "Home", icon: "home" as const },
  {
    href: "/#publications",
    label: "Publications",
    icon: "publications" as const,
  },
  { href: "/#projects", label: "Projects", icon: "projects" as const },
  { href: "/#news", label: "News", icon: "news" as const },
  { href: "/#contact", label: "Contact", icon: "contact" as const },
  {
    href: "/cv/cv.pdf",
    label: "CV Download",
    icon: "cv" as const,
    download: true,
  },
] as const;
