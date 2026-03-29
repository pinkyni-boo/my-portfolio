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
    <header className="sticky top-0 z-50 border-b border-[#e2d8df]/85 bg-[#fffafc]/82 backdrop-blur-md dark:border-[#2a2b33]/90 dark:bg-[#0d0d10]/82">
      <div className="mx-auto max-w-[1640px] px-3 py-3 sm:px-4 md:flex md:items-center md:justify-between md:gap-4 lg:px-8">
        <div className="flex items-center gap-2 md:min-w-0 md:flex-1">
          <a
            href="#top"
            className="min-w-0 select-none caret-transparent text-[#201726] transition hover:text-[#9f7925] dark:text-[#fff7fa] dark:hover:text-[#f2d48a]"
          >
            <span className="inline-flex min-w-0 items-end gap-1.5 sm:gap-2">
              <span className="truncate font-display text-lg font-bold sm:text-xl md:text-2xl">{name}</span>
              <span className="truncate font-signature text-[1.06rem] font-normal leading-none text-[#b6842c]/95 dark:text-[#d9b65a]/95 sm:text-[1.2rem] md:text-[1.35rem]">
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
              className="shrink-0 select-none caret-transparent text-xs font-semibold text-[#655560] transition hover:text-[#9f7925] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9b65a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff8fb] dark:text-[#e8d9df] dark:hover:text-[#f2d48a] dark:focus-visible:ring-offset-[#0d0d10] sm:text-sm"
            >
              {link.label}
            </a>
          ))}

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <div className="flex items-center gap-1 rounded-full border border-[#e3d7df] bg-white/95 p-0.5 shadow-sm dark:border-[#343640] dark:bg-[#111218]">
              <Languages size={13} className="ml-1 text-[#8d7f88] dark:text-[#a996a0]" aria-hidden="true" />
              <button
                type="button"
                onClick={() => onLanguageChange("vi")}
                aria-label={`${controls.language} ${controls.vi}`}
                className={`rounded-full px-2 py-1 text-[11px] font-semibold transition sm:px-2.5 sm:text-xs ${
                  language === "vi"
                    ? "bg-[#f4bfd2] text-[#111218]"
                    : "text-[#655560] hover:text-[#9f7925] dark:text-[#e8d9df] dark:hover:text-[#f2d48a]"
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
                    ? "bg-[#f4bfd2] text-[#111218]"
                    : "text-[#655560] hover:text-[#9f7925] dark:text-[#e8d9df] dark:hover:text-[#f2d48a]"
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
              className="inline-flex h-8 w-8 select-none items-center justify-center rounded-full border border-[#e3d7df] bg-white/95 text-[#655560] shadow-sm transition hover:text-[#9f7925] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9b65a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff8fb] dark:border-[#343640] dark:bg-[#111218] dark:text-[#e8d9df] dark:hover:text-[#f2d48a] dark:focus-visible:ring-offset-[#0d0d10] sm:h-9 sm:w-9"
            >
              {isDark ? <MoonStar size={15} /> : <SunMedium size={15} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
