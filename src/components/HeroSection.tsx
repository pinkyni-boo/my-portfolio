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
      className="rounded-3xl border border-rose-100 bg-white/85 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-5 md:p-8"
    >
      <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-5 lg:pr-2"
        >
          <h1 className="max-w-[15.5ch] font-display text-[2rem] font-bold leading-[1.05] text-slate-900 dark:text-slate-100 sm:text-[2.35rem] md:text-[3.3rem] lg:text-[3.8rem]">
            {hero.tagline}
          </h1>

          <div className="max-w-[63ch] space-y-2.5 sm:space-y-3">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
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
                title={button.link === "#" ? "Sắp cập nhật file CV" : button.label}
                className={`inline-flex select-none items-center justify-center rounded-full px-4 py-2.5 text-xs font-semibold transition sm:px-5 sm:text-sm ${
                  index === 0
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "border border-teal-600 text-teal-700 hover:bg-teal-50 dark:text-teal-300 dark:hover:bg-teal-900/20"
                } ${button.link === "#" ? "cursor-default opacity-85" : ""}`}
              >
                {button.label}
              </a>
            ))}

            <a
              href="#projects"
              className="inline-flex select-none items-center justify-center rounded-full border border-teal-600 px-5 py-2.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-50 dark:text-teal-300 dark:hover:bg-teal-900/20 sm:px-6 sm:text-sm"
            >
              {ui.secondaryCta}
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.06, ease: "easeOut" }}
          className="mx-auto w-full max-w-[580px] rounded-3xl border border-rose-100 bg-white px-5 py-6 text-center shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900 sm:px-7 sm:py-8 md:px-8 md:py-9"
        >
          <img
            src={hero.avatar}
            alt={hero.name}
            className="mx-auto h-28 w-28 rounded-full border-4 border-rose-100 object-cover sm:h-36 sm:w-36 md:h-44 md:w-44"
          />

          <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-slate-100 sm:mt-5 sm:text-4xl">
            {hero.name}
          </h2>
          <p className="mt-1 text-base font-medium text-slate-600 dark:text-slate-300 sm:text-lg md:text-xl">
            {hero.role}
          </p>

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
                  className="inline-flex h-9 w-9 select-none items-center justify-center rounded-full border border-rose-100 text-slate-600 transition hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:text-teal-300 sm:h-10 sm:w-10"
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
