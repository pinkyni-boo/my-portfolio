import type { GitHubRepo, GitHubUser } from "../types/github";
import type {
  CareerData,
  ContactLinkViewModel,
  CvSpotlightViewModel,
  PortfolioViewModel,
  ProfileStatViewModel,
  ProfileViewModel,
  ProjectCardViewModel,
} from "../types/portfolio";

function toSafeUrl(value: string | null | undefined): string | null {
  const text = value?.trim();
  if (!text) {
    return null;
  }

  try {
    const url = new URL(text.startsWith("http") ? text : `https://${text}`);
    return url.toString();
  } catch {
    return null;
  }
}

function buildProfileStats(
  user: GitHubUser,
  repos: GitHubRepo[],
  career: CareerData,
): ProfileStatViewModel[] {
  const liveDemoCount = repos.filter((repo) => Boolean(toSafeUrl(repo.homepage))).length;

  return [
    {
      value: String(user.public_repos).padStart(2, "0"),
      label: "Repo Public",
      supporting: "Được cập nhật đều, có thể đọc trực tiếp trên GitHub.",
    },
    {
      value: String(liveDemoCount).padStart(2, "0"),
      label: "Live Demo",
      supporting: "Các bản chạy thử online để xem trải nghiệm thực tế.",
    },
    {
      value: career.profile.gpa,
      label: "GPA",
      supporting: "Nền tảng học tập hiện tại tại HUTECH University.",
    },
  ];
}

function buildContactLinks(career: CareerData): ContactLinkViewModel[] {
  return [
    {
      label: "GitHub",
      value: "github.com/pinkyni-boo",
      href: career.profile.githubUrl,
      external: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ngocthaovu",
      href: career.profile.linkedinUrl,
      external: true,
    },
    {
      label: "Email",
      value: career.profile.email,
      href: `mailto:${career.profile.email}`,
    },
    {
      label: "Điện thoại",
      value: career.profile.phone,
      href: `tel:${career.profile.phone}`,
    },
  ];
}

function buildProfile(user: GitHubUser, repos: GitHubRepo[], career: CareerData): ProfileViewModel {
  return {
    displayName: career.profile.displayName,
    headline: career.profile.headline,
    avatarUrl: user.avatar_url,
    githubUrl: career.profile.githubUrl,
    objective: career.profile.objective,
    location: career.profile.location,
    quickFacts: [career.profile.location, career.profile.english, "Open for Frontend Internship"],
    contactLinks: buildContactLinks(career),
    stats: buildProfileStats(user, repos, career),
  };
}

function resolveProjectRepoUrl(projectRepoUrl: string | undefined, sourceRepo?: GitHubRepo): string | null {
  return projectRepoUrl ?? sourceRepo?.html_url ?? null;
}

function resolveProjectDemoUrl(projectDemoUrl: string | undefined, sourceRepo?: GitHubRepo): string | null {
  return toSafeUrl(projectDemoUrl) ?? toSafeUrl(sourceRepo?.homepage);
}

function buildFeaturedProjects(repos: GitHubRepo[], career: CareerData): ProjectCardViewModel[] {
  const repoMap = new Map(repos.map((repo) => [repo.name, repo]));

  return career.curatedProjects.map((project) => {
    const sourceRepo = project.repoName ? repoMap.get(project.repoName) : undefined;

    return {
      id: project.id,
      title: project.title,
      badge: project.badge,
      period: project.period,
      role: project.role,
      summary: project.summary,
      impact: project.impact,
      stack: project.stack,
      highlights: project.highlights,
      repoUrl: resolveProjectRepoUrl(project.repoUrl, sourceRepo),
      demoUrl: resolveProjectDemoUrl(project.demoUrl, sourceRepo),
      visualSize: project.visualSize,
    };
  });
}

function buildCvSpotlight(career: CareerData): CvSpotlightViewModel {
  return {
    headline: career.cv.headline,
    summary: career.cv.summary,
    note: career.cv.note,
    fileUrl: `/${encodeURIComponent(career.cv.fileName)}`,
    fileName: career.cv.fileName,
  };
}

export function buildPortfolioViewModel(
  user: GitHubUser,
  repos: GitHubRepo[],
  career: CareerData,
): PortfolioViewModel {
  return {
    profile: buildProfile(user, repos, career),
    featuredProjects: buildFeaturedProjects(repos, career),
    skills: career.skillsByGroup,
    experience: career.experienceItems,
    education: career.educationItems,
    cv: buildCvSpotlight(career),
  };
}
