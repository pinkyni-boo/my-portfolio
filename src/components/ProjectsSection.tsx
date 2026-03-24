import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import type { ProjectItem } from "../data";
import { TechBadge } from "./TechBadge";

interface ProjectCtaUi {
  live: string;
  repo: string;
}

interface ProjectsSectionProps {
  projects: ProjectItem[];
  title: string;
  subtitle?: string;
  ctaUi: ProjectCtaUi;
}

export function ProjectsSection({ projects, title, subtitle, ctaUi }: ProjectsSectionProps) {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.52, ease: "easeOut" }}
      className="space-y-4"
    >
      <div className="rounded-3xl border border-rose-100 bg-white/88 p-5 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 md:p-7">
        <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.repoName}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.36, delay: index * 0.05 }}
            className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <span
              className={`absolute right-0 top-4 z-10 rounded-l-full px-3 py-1 text-xs font-semibold tracking-[0.08em] ${
                project.projectLabel === "Team"
                  ? "bg-teal-600 text-white"
                  : "bg-rose-200 text-rose-900"
              }`}
            >
              {project.projectLabel}
            </span>

            {project.image ? (
              <img src={project.image} alt={project.title} className="h-48 w-full object-cover" loading="lazy" />
            ) : (
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-white via-rose-50/55 to-white">
                <div className="absolute inset-x-0 top-0 h-10 bg-white/45 dark:bg-slate-900/30" />
                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/70 shadow-inner backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80">
                  <ImageIcon size={28} className="text-slate-300/85 dark:text-slate-500" />
                </div>
              </div>
            )}

            <div className="flex h-full flex-1 flex-col gap-3 p-5">
              <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechBadge key={`${project.repoName}-${tech}`} label={tech} variant="teal" small />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>

              <ul className="space-y-1.5">
                {project.highlights.map((item) => (
                  <li key={`${project.repoName}-${item}`} className="list-inside list-disc text-sm text-slate-600 dark:text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center gap-2 pt-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-w-[96px] select-none justify-center rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
                  >
                    {ctaUi.live}
                  </a>
                ) : (
                  <span className="inline-flex min-w-[96px]" aria-hidden="true"></span>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-[96px] select-none justify-center rounded-full border border-teal-600 px-4 py-2 text-sm font-semibold text-teal-700 transition hover:bg-teal-50 dark:text-teal-300 dark:hover:bg-teal-900/20"
                >
                  {ctaUi.repo}
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
