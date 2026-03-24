import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import type { AboutData } from "../data";

interface SectionUi {
  about: string;
  strengths: string;
  orientation: string;
  readme: string;
}

interface AboutSectionProps {
  about: AboutData;
  ui: SectionUi;
}

export function AboutSection({ about, ui }: AboutSectionProps) {
  const mindsetParagraphs = about.mindset
    .split("\n\n")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.52, ease: "easeOut" }}
      className="rounded-3xl border border-rose-100 bg-white/85 p-5 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 md:p-8"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <article className="space-y-4 rounded-3xl border border-rose-100 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.11em] text-rose-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-100">
            {ui.about}
          </span>
          <p className="font-display text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100">
            {about.heading}
          </p>
          <div className="space-y-3">
            {mindsetParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          {about.readmeIntro.length > 0 ? (
            <div className="rounded-2xl border border-teal-100 bg-teal-50/45 p-4 dark:border-teal-900/40 dark:bg-teal-900/20">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-teal-700 dark:text-teal-300">
                {ui.readme}
              </p>
              <div className="mt-2 space-y-2">
                {about.readmeIntro.map((line) => (
                  <p key={line} className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ) : null}
        </article>

        <div className="space-y-4">
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.38, delay: 0.05 }}
            className="rounded-3xl border border-rose-100 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-100">{ui.strengths}</h3>
            <ul className="mt-4 grid gap-2.5">
              {about.strengths.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-rose-100 bg-rose-50/45 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/70"
                >
                  <CircleCheckBig size={16} className="mt-0.5 shrink-0 text-teal-600" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.38, delay: 0.1 }}
            className="rounded-3xl border border-rose-100 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-slate-100">
              {ui.orientation}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {about.orientation.map((item) => (
                <li
                  key={item}
                  className="list-inside list-disc rounded-xl bg-rose-50/45 px-3 py-2 text-sm text-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </motion.section>
  );
}
