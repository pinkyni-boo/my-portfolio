import { motion } from "framer-motion";
import { BriefcaseBusiness, CircleUserRound, GitBranch, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ContactItem } from "../data";

interface HeroData {
  name: string;
  role: string;
  tagline: string;
  description: string;
  avatar: string;
  contacts: ContactItem[];
}

interface HeroUi {
  cvButtons: Array<{
    label: string;
    link: string;
  }>;
  secondaryCta: string;
}

interface HeroSectionProps {
  hero: HeroData;
  ui: HeroUi;
}

const iconMap: Record<ContactItem["icon"], LucideIcon> = {
  Github: GitBranch,
  Linkedin: BriefcaseBusiness,
  Mail,
  Phone,
};

function isExternalLink(link: string): boolean {
  return link.startsWith("http") || link.endsWith(".pdf");
}

export function HeroSection({ hero, ui }: HeroSectionProps) {
  const descriptionParagraphs = hero.description
    .split("\n\n")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-3xl border border-[#e8dde4] bg-[linear-gradient(120deg,#fffbfe_0%,#f6eef8_42%,#f8f0e6_100%)] p-4 shadow-sm backdrop-blur-sm dark:border-[#2f3038] dark:bg-[linear-gradient(118deg,#05070f_0%,#0b0f1e_38%,#13151d_72%,#111217_100%)] sm:p-5 md:p-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[34%] top-[-36%] h-80 w-80 rounded-full bg-[#f4bfd2]/40 blur-3xl dark:bg-[#f4bfd2]/34" />
        <div className="absolute right-[-7%] top-[-18%] h-72 w-72 rounded-full bg-[#d9b65a]/34 blur-3xl dark:bg-[#d9b65a]/28" />
        <svg
          viewBox="0 0 1200 120"
          className="absolute bottom-1 left-0 h-20 w-full opacity-80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M10 94C184 28 388 24 586 70c158 36 324 46 604 10" stroke="#f4bfd2" strokeOpacity="0.3" strokeWidth="1.8" fill="none" />
          <path d="M20 108C206 40 396 44 588 84c170 34 338 38 600 2" stroke="#d9b65a" strokeOpacity="0.26" strokeWidth="1.8" fill="none" />
        </svg>
      </div>

      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative z-10 space-y-5 lg:pr-2"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e4d8e0] bg-white/88 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-[#8f4e68] dark:border-[#343640] dark:bg-[#121319]/90 dark:text-[#f7d7e3]">
            pinkyni-boo
          </span>

          <h1 className="max-w-[15.5ch] font-display text-[2rem] font-bold leading-[1.05] text-[#241a31] dark:text-[#fff7fa] sm:text-[2.35rem] md:text-[3.3rem] lg:text-[3.8rem]">
            {hero.tagline}
          </h1>

          <div className="max-w-[63ch] space-y-2.5 sm:space-y-3">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-[#5b4f60] dark:text-[#e8d9df] sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid w-full grid-cols-1 gap-2.5 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-3">
            {ui.cvButtons.map((button, index) => (
              <a
                key={`cv-${button.label}`}
                href={button.link}
                target={isExternalLink(button.link) ? "_blank" : undefined}
                rel={isExternalLink(button.link) ? "noreferrer" : undefined}
                onClick={button.link === "#" ? (event) => event.preventDefault() : undefined}
                title={button.link === "#" ? "Sap cap nhat file CV" : button.label}
                className={`inline-flex select-none items-center justify-center rounded-full px-4 py-2.5 text-xs font-semibold transition sm:px-5 sm:text-sm ${
                  index === 0
                    ? "bg-[#d9b65a] text-[#111218] hover:bg-[#c8a247]"
                    : "border border-[#e1d4dd] bg-white/92 text-[#8f4e68] hover:border-[#f4bfd2] hover:text-[#6e334a] dark:border-[#343640] dark:bg-[#111218] dark:text-[#f4bfd2] dark:hover:border-[#f4bfd2]/60 dark:hover:text-[#f7d7e3]"
                } ${button.link === "#" ? "cursor-default opacity-85" : ""}`}
              >
                {button.label}
              </a>
            ))}

            <a
              href="#projects"
              className="inline-flex select-none items-center justify-center rounded-full border border-[#e1d4dd] bg-white/92 px-5 py-2.5 text-xs font-semibold text-[#9f7925] transition hover:border-[#d9b65a]/70 hover:text-[#8f6b1e] dark:border-[#343640] dark:bg-[#111218] dark:text-[#f2d48a] dark:hover:border-[#d9b65a]/70 dark:hover:text-[#fff0c7] sm:px-6 sm:text-sm"
            >
              {ui.secondaryCta}
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.06, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-[580px] rounded-3xl border border-[#e5d9e1] bg-white/92 px-5 py-6 text-center shadow-sm transition hover:shadow-md dark:border-[#343640] dark:bg-[#111218]/95 sm:px-7 sm:py-8 md:px-8 md:py-9"
        >
          <img
            src={hero.avatar}
            alt={hero.name}
            className="mx-auto h-28 w-28 rounded-full border-4 border-[#e5d9e1] object-cover dark:border-[#343640] sm:h-36 sm:w-36 md:h-44 md:w-44"
          />

          <h2 className="mt-4 font-display text-3xl font-bold text-[#241a31] dark:text-[#fff7fa] sm:mt-5 sm:text-4xl">
            {hero.name}
          </h2>
          <p className="mt-1 text-base font-medium text-[#8f4e68] dark:text-[#f4bfd2] sm:text-lg md:text-xl">{hero.role}</p>

          <div className="mt-4 flex items-center justify-center gap-2.5 sm:mt-5 sm:gap-3">
            {hero.contacts.map((contact) => {
              const Icon = iconMap[contact.icon] ?? CircleUserRound;

              return (
                <a
                  key={`${contact.platform}-${contact.link}`}
                  href={contact.link}
                  target={contact.link.startsWith("http") ? "_blank" : undefined}
                  rel={contact.link.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={contact.platform}
                  title={contact.link}
                  className="inline-flex h-9 w-9 select-none items-center justify-center rounded-full border border-[#e1d4dd] text-[#655560] transition hover:border-[#d9b65a] hover:text-[#9f7925] dark:border-[#343640] dark:text-[#e8d9df] dark:hover:text-[#f2d48a] sm:h-10 sm:w-10"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
