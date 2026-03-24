import { Languages, MoonStar, SunMedium } from "lucide-react";
import type { Language, ThemeMode } from "../data";

interface NavLinkItem {
  label: string;
  href: string;
}

interface ControlsUi {
  language: string;
  vi: string;
  en: string;
  theme: string;
  light: string;
  dark: string;
}

interface NavbarProps {
  name: string;
  links: NavLinkItem[];
  language: Language;
  onLanguageChange: (language: Language) => void;
  theme: ThemeMode;
  onThemeToggle: () => void;
  controls: ControlsUi;
}

function isExternalLink(href: string): boolean {
  return href.startsWith("http") || href.endsWith(".pdf");
}

export function Navbar({
  name,
  links,
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
  controls,
}: NavbarProps) {
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100/80 bg-white/70 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-[1640px] items-center justify-between gap-3 px-4 py-4 lg:px-8">
        <a
          href="#top"
          className="shrink-0 select-none caret-transparent font-display text-2xl font-bold text-slate-900 transition hover:text-teal-600 dark:text-slate-100 dark:hover:text-teal-300"
        >
          {name}
        </a>

        <div className="flex min-w-0 items-center gap-3">
          <nav aria-label="Portfolio Navigation" className="flex items-center gap-4 overflow-x-auto md:gap-6">
            {links.map((link) => (
              <a
                key={`${link.label}-${link.href}`}
                href={link.href}
                target={isExternalLink(link.href) ? "_blank" : undefined}
                rel={isExternalLink(link.href) ? "noreferrer" : undefined}
                className="shrink-0 select-none caret-transparent text-sm font-semibold text-slate-600 transition hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:text-teal-300 dark:focus-visible:ring-offset-slate-950"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div className="flex items-center gap-1 rounded-full border border-rose-200 bg-white/90 p-1 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <Languages size={14} className="ml-1 text-slate-500 dark:text-slate-400" aria-hidden="true" />
              <button
                type="button"
                onClick={() => onLanguageChange("vi")}
                aria-label={`${controls.language} ${controls.vi}`}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  language === "vi"
                    ? "bg-teal-600 text-white"
                    : "text-slate-600 hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-300"
                }`}
              >
                {controls.vi}
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange("en")}
                aria-label={`${controls.language} ${controls.en}`}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  language === "en"
                    ? "bg-teal-600 text-white"
                    : "text-slate-600 hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-300"
                }`}
              >
                {controls.en}
              </button>
            </div>

            <button
              type="button"
              onClick={onThemeToggle}
              title={`${controls.theme}: ${isDark ? controls.dark : controls.light}`}
              aria-label={`${controls.theme}: ${isDark ? controls.dark : controls.light}`}
              className="inline-flex h-9 w-9 select-none items-center justify-center rounded-full border border-rose-200 bg-white/90 text-slate-700 shadow-sm transition hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-teal-300 dark:focus-visible:ring-offset-slate-950"
            >
              {isDark ? <MoonStar size={16} /> : <SunMedium size={16} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
