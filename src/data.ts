export type Language = "vi" | "en";
export type ThemeMode = "light" | "dark";
export type ContactIconName = "Github" | "Linkedin" | "Mail" | "Phone";

export interface ContactItem {
  platform: string;
  link: string;
  icon: ContactIconName;
}

export interface ProjectItem {
  repoName: string;
  title: string;
  projectLabel: "Team" | "CÃ¡ nhÃ¢n" | "Personal";
  description: string;
  techStack: string[];
  highlights: string[];
  liveUrl: string;
  repoUrl: string;
  image: string;
}

export interface AboutData {
  heading: string;
  mindset: string;
  readmeIntro: string[];
  strengths: string[];
  orientation: string[];
}

export interface PortfolioUi {
  navLinks: Array<{ label: string; href: string }>;
  hero: {
    cvButtons: Array<{
      label: string;
      link: string;
    }>;
    secondaryCta: string;
  };
  sections: {
    about: string;
    skills: string;
    skillsSubtitle: string;
    projects: string;
    projectsSubtitle: string;
    strengths: string;
    orientation: string;
    readme: string;
  };
  skillTitles: {
    frontend: string;
    backend: string;
    database: string;
  };
  projectCta: {
    live: string;
    repo: string;
  };
  contact: {
    title: string;
    button: string;
    link: string;
  };
  controls: {
    language: string;
    vi: string;
    en: string;
    theme: string;
    light: string;
    dark: string;
  };
  brandSignature: string;
  footer: string;
}

export interface PortfolioData {
  github: {
    username: string;
  };
  hero: {
    name: string;
    role: string;
    tagline: string;
    description: string;
    avatar: string;
    contacts: ContactItem[];
  };
  about: AboutData;
  skills: {
    frontend: string[];
    backend: string[];
    databaseTools: string[];
  };
  projects: ProjectItem[];
  ui: PortfolioUi;
}

const EMAIL_WEBMAIL_LINK =
  "https://mail.google.com/mail/?view=cm&fs=1&to=niorravucontact@gmail.com&su=Li%C3%AAn%20h%E1%BB%87%20portfolio";
const CV_LINK_VI = "/VuThiNgocThao_Frontend_Developer_Intern_CV.pdf";
const CV_LINK_FS_VI = "/VuThiNgocThao_Fullstack_Developer_Intern_CV.pdf";
const CV_LINK_FS = "/VuThiNgocThao_FullstackDeveloperIntern_CV.pdf";
const CV_LINK_FE = "/VuThiNgocThao_FrontendDeveloperIntern_CV.pdf";

const baseContacts: ContactItem[] = [
  { platform: "GitHub", link: "https://github.com/pinkyni-boo", icon: "Github" },
  { platform: "LinkedIn", link: "https://linkedin.com/in/ngocthaovu", icon: "Linkedin" },
  { platform: "Email", link: EMAIL_WEBMAIL_LINK, icon: "Mail" },
  { platform: "Phone", link: "tel:0909561743", icon: "Phone" },
];

const baseSkills = {
  frontend: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Ant Design"],
  backend: ["Node.js", "Express.js", "RESTful API", "JWT Authentication"],
  databaseTools: ["MongoDB", "PostgreSQL", "Git", "GitHub", "Figma", "Postman", "Vercel", "Render"],
};

const projectsVi: ProjectItem[] = [
  {
    repoName: "spa",
    title: "Spa Management System",
    projectLabel: "CÃ¡ nhÃ¢n",
    description:
      "Dá»± Ã¡n cÃ¡ nhÃ¢n xÃ¢y dá»±ng há»‡ thá»‘ng quáº£n lÃ½ spa, táº­p trung vÃ o tráº£i nghiá»‡m Ä‘áº·t lá»‹ch trá»±c quan vÃ  tá»‘i Æ°u luá»“ng thao tÃ¡c ngÆ°á»i dÃ¹ng.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Ant Design", "Joi"],
    highlights: [
      "Thiáº¿t káº¿ vÃ  phÃ¡t triá»ƒn tÃ­nh nÄƒng Ä‘áº·t lá»‹ch kÃ©o tháº£ (drag-and-drop) báº±ng React Big Calendar.",
      "XÃ¢y dá»±ng giao diá»‡n responsive, Ä‘áº£m báº£o hiá»ƒn thá»‹ chÃ­nh xÃ¡c theo thiáº¿t káº¿ (pixel-perfect).",
      "TÃ­ch há»£p RESTful API vÃ  triá»ƒn khai xÃ¡c thá»±c ngÆ°á»i dÃ¹ng báº±ng JWT.",
      "Thiáº¿t káº¿ vÃ  xá»­ lÃ½ logic Ä‘áº·t lá»‹ch nháº±m Ä‘áº£m báº£o tÃ­nh nháº¥t quÃ¡n vÃ  háº¡n cháº¿ xung Ä‘á»™t booking.",
    ],
    liveUrl: "https://spa-gules.vercel.app/",
    repoUrl: "https://github.com/pinkyni-boo/spa",
    image: "/project-spa.png",
  },
  {
    repoName: "auction",
    title: "Auction Platform",
    projectLabel: "Team",
    description:
      "Dá»± Ã¡n nhÃ³m xÃ¢y dá»±ng ná»n táº£ng Ä‘áº¥u giÃ¡, trong Ä‘Ã³ mÃ¬nh Ä‘áº£m nháº­n vai trÃ² Business Analyst káº¿t há»£p phÃ¡t triá»ƒn há»‡ thá»‘ng quáº£n trá»‹.",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT"],
    highlights: [
      "PhÃ¢n tÃ­ch yÃªu cáº§u nghiá»‡p vá»¥ vÃ  xÃ¢y dá»±ng user flow, admin flow.",
      "Chuyá»ƒn Ä‘á»•i yÃªu cáº§u nghiá»‡p vá»¥ thÃ nh cáº¥u trÃºc chá»©c nÄƒng vÃ  luá»“ng mÃ n hÃ¬nh cá»¥ thá»ƒ.",
      "Triá»ƒn khai chá»©c nÄƒng quáº£n trá»‹ gá»“m xÃ¡c thá»±c ngÆ°á»i dÃ¹ng vÃ  phÃ¢n quyá»n (role-based access).",
      "Äáº£m báº£o tÃ­nh nháº¥t quÃ¡n giá»¯a luá»“ng nghiá»‡p vá»¥ vÃ  tráº£i nghiá»‡m giao diá»‡n trong toÃ n há»‡ thá»‘ng.",
      "Tham gia phÃ¡t triá»ƒn fullstack vá»›i trá»ng tÃ¢m lÃ  phÃ­a admin vÃ  luá»“ng xá»­ lÃ½ há»‡ thá»‘ng.",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/thnkthuhigh/auction",
    image: "/project-auction.png",
  },
  {
    repoName: "healthcare-clinic-system",
    title: "Healthcare System",
    projectLabel: "Team",
    description:
      "Dá»± Ã¡n nhÃ³m xÃ¢y dá»±ng há»‡ thá»‘ng quáº£n lÃ½ phÃ²ng khÃ¡m dá»±a trÃªn cÃ¡c quy trÃ¬nh váº­n hÃ nh thá»±c táº¿.",
    techStack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Äáº£m nháº­n vai trÃ² Business Analyst, phÃ¢n tÃ­ch luá»“ng tiáº¿p nháº­n bá»‡nh nhÃ¢n, Ä‘áº·t lá»‹ch vÃ  Ä‘iá»u phá»‘i khÃ¡m.",
      "XÃ¢y dá»±ng cáº¥u trÃºc há»‡ thá»‘ng vÃ  luá»“ng xá»­ lÃ½ dá»±a trÃªn yÃªu cáº§u thá»±c táº¿ cá»§a phÃ²ng khÃ¡m.",
      "PhÃ¡t triá»ƒn dashboard quáº£n trá»‹ cho lá»… tÃ¢n vÃ  quáº£n lÃ½ theo workflow váº­n hÃ nh.",
      "TÃ­ch há»£p RESTful API báº±ng Axios vÃ  triá»ƒn khai phÃ¢n quyá»n truy cáº­p (RBAC) báº±ng JWT.",
      "Tham gia phÃ¡t triá»ƒn fullstack vá»›i trá»ng tÃ¢m lÃ  phÃ­a admin vÃ  luá»“ng váº­n hÃ nh há»‡ thá»‘ng.",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/thnkthuhigh/healthcare-clinic-system",
    image: "/project-healthcare.png",
  },
];

const projectsEn: ProjectItem[] = [
  {
    repoName: "spa",
    title: "Spa Management System",
    projectLabel: "Personal",
    description:
      "A personal fullstack project for spa operations, focused on intuitive booking experience and streamlined user flow.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Ant Design", "Joi"],
    highlights: [
      "Built drag-and-drop scheduling with React Big Calendar.",
      "Developed a responsive, pixel-accurate UI.",
      "Integrated RESTful APIs and implemented JWT-based authentication.",
      "Designed booking logic to keep data consistent and reduce schedule conflicts.",
    ],
    liveUrl: "https://spa-gules.vercel.app/",
    repoUrl: "https://github.com/pinkyni-boo/spa",
    image: "/project-spa.png",
  },
  {
    repoName: "auction",
    title: "Auction Platform",
    projectLabel: "Team",
    description:
      "A team project for an auction platform where I worked as both Business Analyst and admin-system developer.",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT"],
    highlights: [
      "Analyzed business requirements and designed user/admin flows.",
      "Translated business needs into concrete feature and screen structures.",
      "Implemented admin-side authentication and role-based access features.",
      "Aligned business workflows with interface behavior across the platform.",
      "Contributed as a fullstack developer with focus on admin operations.",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/thnkthuhigh/auction",
    image: "/project-auction.png",
  },
  {
    repoName: "healthcare-clinic-system",
    title: "Healthcare System",
    projectLabel: "Team",
    description:
      "A team project for clinic management based on real-world operational workflows.",
    techStack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Led BA work for patient intake, appointment, and treatment coordination flows.",
      "Defined system structure and process flow from practical clinic requirements.",
      "Built responsive admin dashboards for receptionist and manager roles.",
      "Integrated REST APIs with Axios and implemented JWT-based RBAC.",
      "Contributed to fullstack implementation with emphasis on admin-side operations.",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/thnkthuhigh/healthcare-clinic-system",
    image: "/project-healthcare.png",
  },
];

export const PORTFOLIO_DATA_BY_LANGUAGE: Record<Language, PortfolioData> = {
  vi: {
    github: {
      username: "pinkyni-boo",
    },
    hero: {
      name: "VÅ© Thá»‹ Ngá»c Tháº£o",
      role: "Frontend Developer Intern",
      tagline: "Vá»›i Ä‘á»‹nh hÆ°á»›ng rÃµ rÃ ng trong viá»‡c xÃ¢y dá»±ng giao diá»‡n web.",
      description:
        "MÃ¬nh yÃªu thÃ­ch viá»‡c thiáº¿t káº¿ vÃ  phÃ¡t triá»ƒn web, Ä‘áº·c biá»‡t lÃ  nhá»¯ng giao diá»‡n rÃµ rÃ ng, dá»… dÃ¹ng vÃ  bÃ¡m sÃ¡t nhu cáº§u thá»±c táº¿.\n\nTrong quÃ¡ trÃ¬nh lÃ m dá»± Ã¡n, mÃ¬nh khÃ´ng chá»‰ code frontend mÃ  cÃ²n tham gia phÃ¢n tÃ­ch nghiá»‡p vá»¥ (BA), xÃ¢y dá»±ng luá»“ng há»‡ thá»‘ng vÃ  phÃ¡t triá»ƒn cÃ¡c chá»©c nÄƒng fullstack phÃ­a admin.\n\nMÃ¬nh cÃ³ thá»ƒ lÃ m frontend, hiá»ƒu backend á»Ÿ má»©c Ä‘á»§ dÃ¹ng, vÃ  sáºµn sÃ ng há»c thÃªm Ä‘á»ƒ Ä‘Ã¡p á»©ng yÃªu cáº§u thá»±c táº¿ cá»§a sáº£n pháº©m.",
      avatar: "https://avatars.githubusercontent.com/u/215128142?v=4",
      contacts: baseContacts,
    },
    about: {
      heading: "MÃ¬nh Æ°u tiÃªn hiá»ƒu há»‡ thá»‘ng trÆ°á»›c khi xÃ¢y dá»±ng giao diá»‡n.",
      mindset:
        "Trong cÃ¡c dá»± Ã¡n, mÃ¬nh thÆ°á»ng báº¯t Ä‘áº§u tá»« viá»‡c phÃ¢n tÃ­ch luá»“ng nghiá»‡p vá»¥, xÃ¡c Ä‘á»‹nh ngÆ°á»i dÃ¹ng vÃ  cÃ¡ch há»‡ thá»‘ng váº­n hÃ nh.\n\nTá»« Ä‘Ã³, mÃ¬nh chuyá»ƒn cÃ¡c yÃªu cáº§u thÃ nh UI flow rÃµ rÃ ng, chia thÃ nh cÃ¡c mÃ n hÃ¬nh vÃ  component Ä‘á»ƒ dá»… phÃ¡t triá»ƒn vÃ  báº£o trÃ¬.\n\nMÃ¬nh Ä‘Ã£ tá»«ng Ä‘áº£m nháº­n vai trÃ² Business Analyst trong dá»± Ã¡n nhÃ³m, Ä‘á»“ng thá»i trá»±c tiáº¿p xÃ¢y dá»±ng cÃ¡c chá»©c nÄƒng theo luá»“ng Ä‘Ã£ thiáº¿t káº¿.\n\nMá»¥c tiÃªu cá»§a mÃ¬nh lÃ  táº¡o ra nhá»¯ng giao diá»‡n khÃ´ng chá»‰ Ä‘áº¹p mÃ  cÃ²n dá»… hiá»ƒu, dá»… dÃ¹ng vÃ  phÃ¹ há»£p vá»›i cÃ¡ch há»‡ thá»‘ng hoáº¡t Ä‘á»™ng thá»±c táº¿.",
      readmeIntro: [
        "MÃ¬nh lÃ m viá»‡c theo hÆ°á»›ng Æ°u tiÃªn há»‡ thá»‘ng vÃ  luá»“ng nghiá»‡p vá»¥ trÆ°á»›c, sau Ä‘Ã³ má»›i tá»‘i Æ°u UI detail Ä‘á»ƒ tráº£i nghiá»‡m Ä‘á»“ng nháº¥t.",
        "Má»—i mÃ n hÃ¬nh Ä‘á»u cáº§n rÃµ má»¥c tiÃªu sá»­ dá»¥ng, thao tÃ¡c dá»… hiá»ƒu vÃ  kháº£ nÄƒng má»Ÿ rá»™ng khi nghiá»‡p vá»¥ tÄƒng dáº§n.",
        "Äiá»ƒm mÃ¬nh theo Ä‘uá»•i lÃ  giao diá»‡n cÃ³ tháº©m má»¹, nhÆ°ng váº«n pháº£i bÃ¡m sÃ¡t workflow tháº­t cá»§a Ä‘á»™i váº­n hÃ nh.",
      ],
      strengths: [
        "CÃ³ kinh nghiá»‡m Ä‘áº£m nháº­n vai trÃ² Business Analyst vÃ  phÃ¡t triá»ƒn há»‡ thá»‘ng",
        "Hiá»ƒu vÃ  xÃ¢y dá»±ng Ä‘Æ°á»£c luá»“ng nghiá»‡p vá»¥",
        "PhÃ¡t triá»ƒn frontend vá»›i React, xÃ¢y dá»±ng giao diá»‡n responsive, dá»… sá»­ dá»¥ng",
        "CÃ³ thá»ƒ lÃ m fullstack á»Ÿ má»©c phá»¥c vá»¥ há»‡ thá»‘ng (API, auth, database)",
        "Chá»§ Ä‘á»™ng há»c thÃªm cÃ´ng nghá»‡ má»›i khi cáº§n Ä‘á»ƒ Ä‘Ã¡p á»©ng yÃªu cáº§u dá»± Ã¡n",
      ],
      orientation: [
        "Äá»‹nh hÆ°á»›ng phÃ¡t triá»ƒn theo Frontend, táº­p trung vÃ o cÃ¡c sáº£n pháº©m thá»±c táº¿",
        "Æ¯u tiÃªn mÃ´i trÆ°á»ng cÃ³ há»‡ thá»‘ng rÃµ rÃ ng vÃ  cÃ³ thá»ƒ há»c há»i thÃªm vá» sáº£n pháº©m",
        "Muá»‘n nÃ¢ng cao kháº£ nÄƒng xÃ¢y dá»±ng UI gáº¯n vá»›i nghiá»‡p vá»¥ vÃ  há»‡ thá»‘ng",
        "Sáºµn sÃ ng há»c thÃªm cÃ´ng nghá»‡ má»›i Ä‘á»ƒ phÃ¡t triá»ƒn báº£n thÃ¢n trong cÃ´ng viá»‡c",
      ],
    },
    skills: baseSkills,
    projects: projectsVi,
    ui: {
      navLinks: [
        { label: "Vá» TÃ´i", href: "#about" },
        { label: "Ká»¹ NÄƒng", href: "#skills" },
        { label: "Dá»± Ãn", href: "#projects" },
        { label: "LiÃªn Há»‡", href: "#contact" },
      ],
      hero: {
        cvButtons: [
          { label: "CV Frontend Developer", link: CV_LINK_VI },
          { label: "CV FullStack Developer", link: CV_LINK_FS_VI },
        ],
        secondaryCta: "Xem dá»± Ã¡n",
      },
      sections: {
        about: "Vá» TÃ´i",
        skills: "Ká»¹ NÄƒng",
        skillsSubtitle:
          "Táº­p trung vÃ o nhÃ³m cÃ´ng nghá»‡ mÃ¬nh dÃ¹ng trá»±c tiáº¿p trong dá»± Ã¡n thá»±c táº¿, Æ°u tiÃªn Ä‘á»™ rÃµ rÃ ng vÃ  kháº£ nÄƒng triá»ƒn khai.",
        projects: "Dá»± Ãn",
        projectsSubtitle:
          "Bao gá»“m dá»± Ã¡n Team vÃ  dá»± Ã¡n CÃ¡ nhÃ¢n Ä‘á»ƒ thá»ƒ hiá»‡n kháº£ nÄƒng phá»‘i há»£p nhÃ³m vÃ  nÄƒng lá»±c tá»± triá»ƒn khai.",
        strengths: "Äiá»ƒm Máº¡nh",
        orientation: "Äá»‹nh HÆ°á»›ng",
        readme: "TÆ° duy lÃ m viá»‡c",
      },
      skillTitles: {
        frontend: "Frontend",
        backend: "Backend & API",
        database: "Database & Tools",
      },
      projectCta: {
        live: "Live Link",
        repo: "Repo Link",
      },
      contact: {
        title: "Sáºµn sÃ ng cho cÆ¡ há»™i má»›i.",
        button: "LiÃªn há»‡",
        link: EMAIL_WEBMAIL_LINK,
      },
      controls: {
        language: "NgÃ´n ngá»¯",
        vi: "VI",
        en: "EN",
        theme: "Giao diá»‡n",
        light: "SÃ¡ng",
        dark: "Tá»‘i",
      },
      brandSignature: "niorravu",
      footer: "Â© 2026 VÅ© Thá»‹ Ngá»c Tháº£o",
    },
  },
  en: {
    github: {
      username: "pinkyni-boo",
    },
    hero: {
      name: "Vu Thi Ngoc Thao",
      role: "Frontend Developer Intern",
      tagline: "Frontend Developer Intern focused on building clear, practical web interfaces.",
      description:
        "I enjoy designing and building web experiences that are clear, easy to use, and aligned with real product needs.\n\nDuring projects, I do more than frontend coding. I also contribute to business analysis, define system flow, and build admin-side fullstack features.\n\nI am confident with frontend, understand backend at a practical level, and keep learning to match real product requirements.",
      avatar: "https://avatars.githubusercontent.com/u/215128142?v=4",
      contacts: baseContacts,
    },
    about: {
      heading: "I prioritize understanding the system before building the interface.",
      mindset:
        "In most projects, I begin with business flow analysis, user roles, and operational behavior.\n\nThen I translate requirements into clear UI flows, split them into screens and reusable components, and keep implementation maintainable.\n\nI have worked as a Business Analyst in team projects while directly implementing features based on the designed flow.\n\nMy goal is to build interfaces that are not only visually clean but also easy to understand, easy to use, and aligned with real workflows.",
      readmeIntro: [
        "I usually start from business logic and workflow clarity, then refine UI details for consistency.",
        "Each screen should have a clear purpose, predictable interactions, and room for future scale.",
        "I care about aesthetics, but product flow and real operations always come first.",
      ],
      strengths: [
        "Hands-on experience in both Business Analysis and system development",
        "Ability to understand and design business workflows",
        "Strong React-based frontend implementation with responsive, user-friendly UI",
        "Can deliver practical fullstack features (API, auth, database)",
        "Proactive in learning new technologies to meet project needs",
      ],
      orientation: [
        "Growing as a Frontend developer on real-world products",
        "Prefer environments with clear systems and strong product learning",
        "Want to improve UI implementation tied closely to business workflow",
        "Open to learning new stacks needed by the team",
      ],
    },
    skills: baseSkills,
    projects: projectsEn,
    ui: {
      navLinks: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      hero: {
        cvButtons: [
          { label: "CV Frontend Developer", link: CV_LINK_FE },
          { label: "CV Fullstack Developer", link: CV_LINK_FS },
        ],
        secondaryCta: "View Projects",
      },
      sections: {
        about: "About",
        skills: "Skills",
        skillsSubtitle:
          "Focused on the technologies I actively use in real projects, with priority on clarity and delivery.",
        projects: "Projects",
        projectsSubtitle:
          "Includes both team and personal projects to demonstrate collaboration and independent execution.",
        strengths: "Strengths",
        orientation: "Career Focus",
        readme: "Working Mindset",
      },
      skillTitles: {
        frontend: "Frontend",
        backend: "Backend & API",
        database: "Database & Tools",
      },
      projectCta: {
        live: "Live Demo",
        repo: "Source Code",
      },
      contact: {
        title: "Open to new opportunities.",
        button: "Contact Me",
        link: EMAIL_WEBMAIL_LINK,
      },
      controls: {
        language: "Language",
        vi: "VI",
        en: "EN",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
      },
      brandSignature: "niorravu",
      footer: "© Vu Thi Ngoc Thao",
    },
  },
};

export const PORTFOLIO_DATA = PORTFOLIO_DATA_BY_LANGUAGE.en;



