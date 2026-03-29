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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="space-y-4"
    >
      <div className="rounded-3xl border border-[#e6dbe2] bg-white/84 p-4 shadow-sm backdrop-blur-sm dark:border-[#2a2b33] dark:bg-[#111218]/88 sm:p-5 md:p-7">
        <h2 className="font-display text-3xl font-bold text-[#241a31] dark:text-[#fff7fa] sm:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm leading-relaxed text-[#5b4f60] dark:text-[#e8d9df]">{subtitle}</p> : null}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.repoName}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.22, delay: Math.min(index, 2) * 0.03 }}
            className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#e3d8df] bg-white/92 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-[#2a2b33] dark:bg-[#111218]"
          >
            <span
              className={`absolute right-0 top-4 z-10 rounded-l-full px-3 py-1 text-xs font-semibold tracking-[0.08em] ${
                project.projectLabel === "Team"
                  ? "bg-[#d9b65a] text-[#111218]"
                  : "bg-[#f4bfd2] text-[#5a2d40]"
              }`}
            >
              {project.projectLabel}
            </span>

            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ) : (
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#fffbfd] via-[#f7edf8] to-[#f9f1e8] dark:from-[#0d0d10] dark:via-[#15151a] dark:to-[#111217]">
                <div className="absolute inset-x-0 top-0 h-10 bg-white/50 dark:bg-[#111218]/45" />
                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e4d8e0] bg-white/75 shadow-inner backdrop-blur-sm dark:border-[#343640] dark:bg-[#17181d]/80">
                  <ImageIcon size={28} className="text-[#baaeb7] dark:text-[#70626b]" />
                </div>
              </div>
            )}

            <div className="flex h-full flex-1 flex-col gap-3 p-4 sm:p-5">
              <h3 className="font-display text-2xl font-bold text-[#241a31] dark:text-[#fff7fa] sm:text-3xl">{project.title}</h3>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechBadge key={`${project.repoName}-${tech}`} label={tech} variant="teal" small />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-[#5b4f60] dark:text-[#e8d9df]">{project.description}</p>

              <ul className="space-y-1.5">
                {project.highlights.map((item) => (
                  <li key={`${project.repoName}-${item}`} className="list-inside list-disc text-sm text-[#5b4f60] dark:text-[#e8d9df]">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-w-[108px] flex-1 select-none justify-center rounded-full bg-[#d9b65a] px-4 py-2 text-sm font-semibold text-[#111218] transition hover:bg-[#c8a247] sm:flex-none"
                  >
                    {ctaUi.live}
                  </a>
                ) : (
                  <span className="hidden min-w-[108px] sm:inline-flex" aria-hidden="true"></span>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-[108px] flex-1 select-none justify-center rounded-full border border-[#e4cad6] bg-[#fff4f9] px-4 py-2 text-sm font-semibold text-[#8f4e68] transition hover:border-[#f4bfd2] hover:text-[#6e334a] dark:border-[#5a3344] dark:bg-[#2a1d23]/70 dark:text-[#f7d7e3] dark:hover:border-[#f4bfd2]/70 dark:hover:text-[#fff0f6] sm:flex-none"
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
