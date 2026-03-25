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
  signature: string;
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
  signature,
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
      <div className="mx-auto max-w-[1640px] px-3 py-3 sm:px-4 md:flex md:items-center md:justify-between md:gap-4 lg:px-8">
        <div className="flex items-center gap-2 md:min-w-0 md:flex-1">
          <a
            href="#top"
            className="min-w-0 select-none caret-transparent text-slate-900 transition hover:text-teal-600 dark:text-slate-100 dark:hover:text-teal-300"
          >
            <span className="inline-flex min-w-0 items-end gap-1.5 sm:gap-2">
              <span className="truncate font-display text-lg font-bold sm:text-xl md:text-2xl">{name}</span>
              <span className="truncate font-signature text-[1.06rem] font-normal leading-none text-teal-700/90 dark:text-teal-300/90 sm:text-[1.2rem] md:text-[1.35rem]">
                {signature}
              </span>
            </span>
          </a>

        </div>

        <nav
          aria-label="Portfolio Navigation"
          className="mt-2 flex items-center gap-3 overflow-x-auto pb-1 md:mt-0 md:justify-end md:gap-4 md:overflow-visible md:pb-0"
        >
          {links.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              target={isExternalLink(link.href) ? "_blank" : undefined}
              rel={isExternalLink(link.href) ? "noreferrer" : undefined}
              className="shrink-0 select-none caret-transparent text-xs font-semibold text-slate-600 transition hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:text-teal-300 dark:focus-visible:ring-offset-slate-950 sm:text-sm"
            >
              {link.label}
            </a>
          ))}

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <div className="flex items-center gap-1 rounded-full border border-rose-200 bg-white/90 p-0.5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <Languages size={13} className="ml-1 text-slate-500 dark:text-slate-400" aria-hidden="true" />
              <button
                type="button"
                onClick={() => onLanguageChange("vi")}
                aria-label={`${controls.language} ${controls.vi}`}
                className={`rounded-full px-2 py-1 text-[11px] font-semibold transition sm:px-2.5 sm:text-xs ${
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
                className={`rounded-full px-2 py-1 text-[11px] font-semibold transition sm:px-2.5 sm:text-xs ${
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
              className="inline-flex h-8 w-8 select-none items-center justify-center rounded-full border border-rose-200 bg-white/90 text-slate-700 shadow-sm transition hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-teal-300 dark:focus-visible:ring-offset-slate-950 sm:h-9 sm:w-9"
            >
              {isDark ? <MoonStar size={15} /> : <SunMedium size={15} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
