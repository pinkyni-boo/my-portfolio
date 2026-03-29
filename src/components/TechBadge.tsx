import { Braces, Database, Globe, KeyRound, Layers, Server, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TechBadgeProps {
  label: string;
  variant?: "rose" | "teal";
  small?: boolean;
}

interface TechIconConfig {
  iconUrl?: string;
  icon?: LucideIcon;
}

const TECH_ICON_MAP: Record<string, TechIconConfig> = {
  react: { iconUrl: "https://cdn.simpleicons.org/react/61DAFB" },
  typescript: { iconUrl: "https://cdn.simpleicons.org/typescript/3178C6" },
  "javascript-(es6+)": { iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  javascript: { iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  "tailwind-css": { iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  "ant-design": { iconUrl: "https://cdn.simpleicons.org/antdesign/1677FF" },
  "node.js": { iconUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  "express.js": { iconUrl: "https://cdn.simpleicons.org/express/111111" },
  "restful-api": { icon: Server },
  "jwt-auth": { icon: KeyRound },
  mongodb: { iconUrl: "https://cdn.simpleicons.org/mongodb/47A248" },
  postgresql: { iconUrl: "https://cdn.simpleicons.org/postgresql/4169E1" },
  git: { iconUrl: "https://cdn.simpleicons.org/git/F05032" },
  github: { iconUrl: "https://cdn.simpleicons.org/github/181717" },
  figma: { iconUrl: "https://cdn.simpleicons.org/figma/F24E1E" },
  postman: { iconUrl: "https://cdn.simpleicons.org/postman/FF6C37" },
  vercel: { iconUrl: "https://cdn.simpleicons.org/vercel/000000" },
  "next.js-(fundamentals)": { iconUrl: "https://cdn.simpleicons.org/nextdotjs/000000" },
  zustand: { icon: Layers },
  joi: { icon: Braces },
  html: { iconUrl: "https://cdn.simpleicons.org/html5/E34F26" },
  css: { iconUrl: "https://cdn.simpleicons.org/css/663399" },
  java: { iconUrl: "https://cdn.simpleicons.org/openjdk/000000" },
  mysql: { iconUrl: "https://cdn.simpleicons.org/mysql/4479A1" },
  jwt: { icon: KeyRound },
};

const DEFAULT_ICON_MAP: Record<string, LucideIcon> = {
  rose: Globe,
  teal: Wrench,
};

function normalizeTechLabel(label: string): string {
  return label.trim().toLowerCase().replace(/\s+/g, "-");
}

export function TechBadge({ label, variant = "rose", small = false }: TechBadgeProps) {
  const key = normalizeTechLabel(label);
  const config = TECH_ICON_MAP[key];
  const DefaultIcon = DEFAULT_ICON_MAP[variant] ?? Database;
  const sizeClass = small ? "h-3.5 w-3.5" : "h-4 w-4";
  const textClass = small ? "text-xs font-semibold" : "text-sm font-medium";
  const colorClass =
    variant === "teal"
      ? "border-[#ebd8a9] bg-[#fff9eb] text-[#9f7925] dark:border-[#5b4a26] dark:bg-[#2a2317]/70 dark:text-[#f2d48a]"
      : "border-[#e4cad6] bg-[#fff4f9] text-[#8f4e68] dark:border-[#5a3344] dark:bg-[#2a1d23]/70 dark:text-[#f7d7e3]";

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 ${textClass} ${colorClass}`}>
      {config?.iconUrl ? (
        <img src={config.iconUrl} alt={label} className={sizeClass} loading="lazy" />
      ) : null}
      {!config?.iconUrl && config?.icon ? <config.icon className={sizeClass} /> : null}
      {!config?.iconUrl && !config?.icon ? <DefaultIcon className={sizeClass} /> : null}
      <span>{label}</span>
    </span>
  );
}
