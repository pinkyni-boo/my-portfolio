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
  primaryCta: string;
  secondaryCta: string;
  cvLink: string;
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

export function HeroSection({ hero, ui }: HeroSectionProps) {
  const descriptionParagraphs = hero.description
    .split("\n\n")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  return (
    <section
      id="top"
      className="rounded-3xl border border-rose-100 bg-white/85 p-5 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 md:p-8"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-5 lg:pr-2"
        >
          <h1 className="max-w-[15.5ch] font-display text-[2.7rem] font-bold leading-[1.03] text-slate-900 dark:text-slate-100 md:text-[3.3rem] lg:text-[3.8rem]">
            {hero.tagline}
          </h1>
          <div className="max-w-[63ch] space-y-3">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={ui.cvLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex select-none items-center rounded-full bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              {ui.primaryCta}
            </a>
            <a
              href="#projects"
              className="inline-flex select-none items-center rounded-full border border-teal-600 px-6 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-50 dark:text-teal-300 dark:hover:bg-teal-900/20"
            >
              {ui.secondaryCta}
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.06, ease: "easeOut" }}
          className="mx-auto w-full max-w-[580px] rounded-3xl border border-rose-100 bg-white px-8 py-9 text-center shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
        >
          <img
            src={hero.avatar}
            alt={hero.name}
            className="mx-auto h-44 w-44 rounded-full border-4 border-rose-100 object-cover"
          />
          <h2 className="mt-5 font-display text-4xl font-bold text-slate-900 dark:text-slate-100">{hero.name}</h2>
          <p className="mt-1 text-xl font-medium text-slate-600 dark:text-slate-300">{hero.role}</p>

          <div className="mt-5 flex items-center justify-center gap-3">
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
                  className="inline-flex h-10 w-10 select-none items-center justify-center rounded-full border border-rose-100 text-slate-600 transition hover:border-teal-500 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:text-teal-300"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
