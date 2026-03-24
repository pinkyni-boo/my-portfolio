import type { GitHubRepo, GitHubUser } from "./github";

export type PortfolioStatus = "loading" | "ready" | "fallback" | "empty";

export interface NavLink {
  href: string;
  label: string;
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

export interface AboutPanelCopy {
  kicker: string;
  title: string;
  body: string;
  points: readonly string[];
}

export interface PortfolioContent {
  navLinks: readonly NavLink[];
  heroEyebrow: string;
  heroTitle: string;
  heroSummary: string;
  heroNote: string;
  about: SectionCopy & {
    paragraphs: readonly string[];
    panels: readonly AboutPanelCopy[];
  };
  skills: SectionCopy;
  projects: SectionCopy;
  experience: SectionCopy;
  education: SectionCopy;
  contact: SectionCopy;
  footerText: string;
  ui: {
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    viewCode: string;
    liveDemo: string;
    viewCv: string;
    downloadCv: string;
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
}

export interface CareerProfile {
  displayName: string;
  headline: string;
  objective: string;
  phone: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
  gpa: string;
  english: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  items: readonly string[];
}

export interface ExperienceItem {
  period: string;
  project: string;
  role: string;
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
  repoUrl?: string;
  demoUrl?: string;
}

export interface EducationItem {
  period: string;
  school: string;
  program: string;
  details: readonly string[];
}

export interface CvSpotlight {
  headline: string;
  summary: string;
  note: string;
  fileName: string;
}

export interface CuratedProject {
  id: string;
  repoName?: string;
  title: string;
  badge: string;
  period: string;
  role: string;
  summary: string;
  impact: string;
  stack: readonly string[];
  highlights: readonly string[];
  repoUrl?: string;
  demoUrl?: string;
  visualSize: "hero" | "tall" | "wide" | "standard";
}

export interface CareerData {
  profile: CareerProfile;
  skillsByGroup: readonly SkillGroup[];
  experienceItems: readonly ExperienceItem[];
  educationItems: readonly EducationItem[];
  curatedProjects: readonly CuratedProject[];
  cv: CvSpotlight;
}

export interface ContactLinkViewModel {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface ProfileStatViewModel {
  value: string;
  label: string;
  supporting: string;
}

export interface ProfileViewModel {
  displayName: string;
  headline: string;
  avatarUrl: string;
  githubUrl: string;
  objective: string;
  location: string;
  quickFacts: readonly string[];
  contactLinks: readonly ContactLinkViewModel[];
  stats: readonly ProfileStatViewModel[];
}

export interface ProjectCardViewModel {
  id: string;
  title: string;
  badge: string;
  period: string;
  role: string;
  summary: string;
  impact: string;
  stack: readonly string[];
  highlights: readonly string[];
  repoUrl: string | null;
  demoUrl: string | null;
  visualSize: "hero" | "tall" | "wide" | "standard";
}

export interface CvSpotlightViewModel {
  headline: string;
  summary: string;
  note: string;
  fileUrl: string;
  fileName: string;
}

export interface PortfolioViewModel {
  profile: ProfileViewModel;
  featuredProjects: readonly ProjectCardViewModel[];
  skills: readonly SkillGroup[];
  experience: readonly ExperienceItem[];
  education: readonly EducationItem[];
  cv: CvSpotlightViewModel;
}

export interface PortfolioState {
  status: PortfolioStatus;
  data: PortfolioViewModel;
}

export interface GitHubPortfolioSnapshot {
  user: GitHubUser;
  repos: GitHubRepo[];
}
