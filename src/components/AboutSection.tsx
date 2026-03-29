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
      className="rounded-3xl border border-[#e6dbe2] bg-white/84 p-4 shadow-sm backdrop-blur-sm dark:border-[#2a2b33] dark:bg-[#111218]/88 sm:p-5 md:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <article className="space-y-3 rounded-3xl border border-[#e3d8df] bg-white/92 p-4 dark:border-[#343640] dark:bg-[#111218] sm:space-y-4 sm:p-6">
          <span className="inline-flex rounded-full border border-[#e4cad6] bg-[#fff4f9] px-3 py-1 text-xs font-semibold uppercase tracking-[0.11em] text-[#8f4e68] dark:border-[#5a3344] dark:bg-[#2a1d23]/70 dark:text-[#f7d7e3]">
            {ui.about}
          </span>
          <p className="font-display text-3xl font-bold leading-tight text-[#241a31] dark:text-[#fff7fa] sm:text-4xl">{about.heading}</p>

          <div className="space-y-2.5 sm:space-y-3">
            {mindsetParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-[#5b4f60] dark:text-[#e8d9df] sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {about.readmeIntro.length > 0 ? (
            <div className="rounded-2xl border border-[#ebd8a9] bg-[#fffaeb] p-3.5 dark:border-[#5b4a26] dark:bg-[#2a2317]/60 sm:p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#9f7925] dark:text-[#f2d48a]">{ui.readme}</p>
              <div className="mt-2 space-y-2">
                {about.readmeIntro.map((line) => (
                  <p key={line} className="text-xs leading-relaxed text-[#5b4f60] dark:text-[#e8d9df] sm:text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ) : null}
        </article>

        <div className="space-y-3 sm:space-y-4">
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.38, delay: 0.05 }}
            className="rounded-3xl border border-[#e3d8df] bg-white/92 p-4 dark:border-[#343640] dark:bg-[#111218] sm:p-6"
          >
            <h3 className="font-display text-2xl font-bold text-[#241a31] dark:text-[#fff7fa] sm:text-3xl">{ui.strengths}</h3>
            <ul className="mt-4 grid gap-2.5">
              {about.strengths.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-[#ece1e7] bg-[#fff8fb] px-3 py-2 dark:border-[#343640] dark:bg-[#17181d] "
                >
                  <CircleCheckBig size={16} className="mt-0.5 shrink-0 text-[#d9b65a]" />
                  <span className="text-xs font-medium text-[#5b4f60] dark:text-[#e8d9df] sm:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.38, delay: 0.1 }}
            className="rounded-3xl border border-[#e3d8df] bg-white/92 p-4 dark:border-[#343640] dark:bg-[#111218] sm:p-6"
          >
            <h3 className="font-display text-2xl font-bold text-[#241a31] dark:text-[#fff7fa] sm:text-3xl">{ui.orientation}</h3>
            <ul className="mt-4 space-y-2.5">
              {about.orientation.map((item) => (
                <li
                  key={item}
                  className="list-inside list-disc rounded-xl border border-[#ece1e7] bg-[#fff8fb] px-3 py-2 text-xs text-[#5b4f60] dark:border-[#343640] dark:bg-[#17181d] dark:text-[#e8d9df] sm:text-sm"
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
