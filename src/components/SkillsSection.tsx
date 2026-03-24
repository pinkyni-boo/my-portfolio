import { motion } from "framer-motion";
import { TechBadge } from "./TechBadge";

interface SkillsData {
  frontend: string[];
  backend: string[];
  databaseTools: string[];
}

interface SectionUi {
  skills: string;
  subtitle: string;
  frontend: string;
  backend: string;
  database: string;
}

interface SkillsSectionProps {
  skills: SkillsData;
  ui: SectionUi;
}

const groups: Array<{ titleKey: "frontend" | "backend" | "database"; dataKey: keyof SkillsData }> = [
  { titleKey: "frontend", dataKey: "frontend" },
  { titleKey: "backend", dataKey: "backend" },
  { titleKey: "database", dataKey: "databaseTools" },
];

export function SkillsSection({ skills, ui }: SkillsSectionProps) {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.52, ease: "easeOut" }}
      className="rounded-3xl border border-rose-100 bg-white/90 p-5 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 md:p-8"
    >
      <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.11em] text-rose-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-100">
        {ui.skills}
      </span>

      <p className="mt-2 max-w-3xl text-base text-slate-600 dark:text-slate-300">{ui.subtitle}</p>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
        {groups.map((group, index) => (
          <motion.article
            key={group.titleKey}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.34, delay: index * 0.06 }}
            className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 className="font-display text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-4xl">
              {ui[group.titleKey]}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {skills[group.dataKey].map((item) => (
                <TechBadge key={`${group.dataKey}-${item}`} label={item} variant="rose" />
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
