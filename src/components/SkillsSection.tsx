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
      className="rounded-3xl border border-[#e6dbe2] bg-white/84 p-4 shadow-sm backdrop-blur-sm dark:border-[#2a2b33] dark:bg-[#111218]/88 sm:p-5 md:p-8"
    >
      <span className="inline-flex rounded-full border border-[#e4cad6] bg-[#fff4f9] px-3 py-1 text-xs font-semibold uppercase tracking-[0.11em] text-[#8f4e68] dark:border-[#5a3344] dark:bg-[#2a1d23]/70 dark:text-[#f7d7e3]">
        {ui.skills}
      </span>

      <p className="mt-2 max-w-3xl text-sm text-[#5b4f60] dark:text-[#e8d9df] sm:text-base">{ui.subtitle}</p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-5 md:grid-cols-3">
        {groups.map((group, index) => (
          <motion.article
            key={group.titleKey}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.34, delay: index * 0.06 }}
            className="rounded-2xl border border-[#e3d8df] bg-white/92 p-4 shadow-sm dark:border-[#343640] dark:bg-[#111218] sm:p-5"
          >
            <h3 className="font-display text-2xl font-bold leading-tight text-[#241a31] dark:text-[#fff7fa] sm:text-3xl md:text-4xl">
              {ui[group.titleKey]}
            </h3>
            <div className="mt-3.5 flex flex-wrap gap-2 sm:mt-4 sm:gap-2.5">
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
