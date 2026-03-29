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
      className="rounded-3xl border border-[#e6dbe2] bg-white/84 p-5 text-center shadow-sm backdrop-blur-sm dark:border-[#2a2b33] dark:bg-[#111218]/88 sm:p-7 md:p-10"
    >
      <h2 className="font-display text-3xl font-bold leading-tight text-[#241a31] dark:text-[#fff7fa] sm:text-4xl md:text-5xl">{title}</h2>
      <a
        href={buttonLink}
        target={isExternalLink(buttonLink) ? "_blank" : undefined}
        rel={isExternalLink(buttonLink) ? "noreferrer" : undefined}
        className="mt-5 inline-flex w-full select-none justify-center rounded-full bg-[#d9b65a] px-6 py-2.5 text-sm font-semibold text-[#111218] transition hover:bg-[#c8a247] sm:mt-6 sm:w-auto sm:px-8 sm:py-3 sm:text-base"
      >
        {buttonLabel}
      </a>
    </motion.section>
  );
}
