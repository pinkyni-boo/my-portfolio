import { motion } from "framer-motion";

interface FooterCTAProps {
  title: string;
  buttonLabel: string;
  buttonLink: string;
}

function isExternalLink(link: string): boolean {
  return link.startsWith("http");
}

export function FooterCTA({ title, buttonLabel, buttonLink }: FooterCTAProps) {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-3xl border border-rose-100 bg-white/88 p-7 text-center shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 md:p-10"
    >
      <h2 className="font-display text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-5xl">
        {title}
      </h2>
      <a
        href={buttonLink}
        target={isExternalLink(buttonLink) ? "_blank" : undefined}
        rel={isExternalLink(buttonLink) ? "noreferrer" : undefined}
        className="mt-6 inline-flex select-none rounded-full bg-teal-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-teal-700"
      >
        {buttonLabel}
      </a>
    </motion.section>
  );
}
