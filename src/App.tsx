import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { FooterCTA } from "./components/FooterCTA";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SakuraRain } from "./components/SakuraRain";
import { SkillsSection } from "./components/SkillsSection";
import {
  PORTFOLIO_DATA_BY_LANGUAGE,
  type Language,
  type PortfolioData,
  type ThemeMode,
} from "./data";

interface GitHubUserResponse {
  avatar_url: string;
}

interface GitHubRepoResponse {
  name: string;
  html_url: string;
  homepage: string | null;
  updated_at: string;
  owner: {
    login: string;
  };
}

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const THEME_STORAGE_KEY = "portfolio-theme";

function normalizeHomepage(homepage: string | null | undefined, fallback: string): string {
  if (!homepage || homepage.trim().length === 0) {
    return fallback;
  }
  return homepage.startsWith("http") ? homepage : `https://${homepage}`;
}

function buildOpenGraphImage(owner: string, repo: string, updatedAt: string): string {
  const token = updatedAt.replace(/\W/g, "");
  return `https://opengraph.githubassets.com/${token}/${owner}/${repo}`;
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "vi";
  }
  const value = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return value === "en" ? "en" : "vi";
}

function getStoredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }
  const value = window.localStorage.getItem(THEME_STORAGE_KEY);
  return value === "dark" ? "dark" : "light";
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => getStoredLanguage());
  const [theme, setTheme] = useState<ThemeMode>(() => getStoredTheme());
  const [portfolio, setPortfolio] = useState<PortfolioData>(() => PORTFOLIO_DATA_BY_LANGUAGE[getStoredLanguage()]);

  useEffect(() => {
    setPortfolio(PORTFOLIO_DATA_BY_LANGUAGE[language]);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  }, [language]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }, [theme]);

  useEffect(() => {
    const controller = new AbortController();

    const syncFromGitHub = async () => {
      try {
        const base = PORTFOLIO_DATA_BY_LANGUAGE[language];
        const username = base.github.username;
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
            signal: controller.signal,
          }),
        ]);

        const user = userResponse.ok
          ? ((await userResponse.json()) as GitHubUserResponse)
          : undefined;
        const repos = reposResponse.ok
          ? ((await reposResponse.json()) as GitHubRepoResponse[])
          : undefined;

        setPortfolio(() => {
          const repoMap = new Map((repos ?? []).map((repo) => [repo.name.toLowerCase(), repo]));

          return {
            ...base,
            hero: {
              ...base.hero,
              avatar: user?.avatar_url || base.hero.avatar,
            },
            projects: base.projects.map((project) => {
              const repo = repoMap.get(project.repoName.toLowerCase());
              if (!repo) {
                return project;
              }

              const hasPresetImage = project.image.trim().length > 0;
              const useRawScreenshot = hasPresetImage && project.image.includes("raw.githubusercontent.com");
              const image = useRawScreenshot
                ? project.image
                : hasPresetImage
                  ? buildOpenGraphImage(repo.owner.login, repo.name, repo.updated_at)
                  : "";

              return {
                ...project,
                repoUrl: repo.html_url || project.repoUrl,
                liveUrl: normalizeHomepage(repo.homepage, project.liveUrl),
                image,
              };
            }),
          };
        });
      } catch {
        // Keep local fallback when GitHub API fails.
      }
    };

    void syncFromGitHub();
    return () => {
      controller.abort();
    };
  }, [language]);

  const isDark = theme === "dark";

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-rose-50 text-slate-900"
      }`}
    >
      <SakuraRain />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className={`absolute -left-20 top-20 h-72 w-72 rounded-full blur-3xl ${
            isDark ? "bg-fuchsia-900/35" : "bg-rose-200/45"
          }`}
          animate={{ x: [0, 16, -10, 0], y: [0, -12, 10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute -right-24 top-40 h-80 w-80 rounded-full blur-3xl ${
            isDark ? "bg-teal-900/25" : "bg-teal-100/30"
          }`}
          animate={{ x: [0, -20, 8, 0], y: [0, 18, -8, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Navbar
        name={portfolio.hero.name}
        signature={portfolio.ui.brandSignature}
        links={portfolio.ui.navLinks}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
        controls={portfolio.ui.controls}
      />

      <main className="mx-auto max-w-[1640px] space-y-6 px-4 py-5 lg:px-8 lg:py-7">
        <HeroSection hero={portfolio.hero} ui={portfolio.ui.hero} />
        <AboutSection
          about={portfolio.about}
          ui={{
            about: portfolio.ui.sections.about,
            strengths: portfolio.ui.sections.strengths,
            orientation: portfolio.ui.sections.orientation,
            readme: portfolio.ui.sections.readme,
          }}
        />
        <SkillsSection
          skills={portfolio.skills}
          ui={{
            skills: portfolio.ui.sections.skills,
            subtitle: portfolio.ui.sections.skillsSubtitle,
            frontend: portfolio.ui.skillTitles.frontend,
            backend: portfolio.ui.skillTitles.backend,
            database: portfolio.ui.skillTitles.database,
          }}
        />
        <ProjectsSection
          projects={portfolio.projects}
          title={portfolio.ui.sections.projects}
          subtitle={portfolio.ui.sections.projectsSubtitle}
          ctaUi={portfolio.ui.projectCta}
        />
        <FooterCTA
          title={portfolio.ui.contact.title}
          buttonLabel={portfolio.ui.contact.button}
          buttonLink={portfolio.ui.contact.link}
        />
      </main>

      <footer className="mx-auto max-w-[1640px] px-5 pb-8 lg:px-8">
        <div className="rounded-3xl border border-rose-100 bg-white/86 px-5 py-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
          <div className="mb-2 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            {portfolio.hero.contacts.map((contact) => (
              <a
                key={`footer-${contact.platform}`}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : undefined}
                rel={contact.link.startsWith("http") ? "noreferrer" : undefined}
                className="select-none caret-transparent transition hover:text-teal-700 dark:hover:text-teal-300"
              >
                {contact.platform}
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">{portfolio.ui.footer}</p>
        </div>
      </footer>
    </div>
  );
}
