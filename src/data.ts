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
  projectLabel: "Team" | "Cá nhân" | "Personal";
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
    primaryCta: string;
    secondaryCta: string;
    cvLink: string;
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
const CV_LINK = "/VuThiNgocThao_FrontendDeveloper_CV.pdf";

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
    projectLabel: "Cá nhân",
    description:
      "Dự án cá nhân xây dựng hệ thống quản lý spa, tập trung vào trải nghiệm đặt lịch trực quan và tối ưu luồng thao tác người dùng.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Ant Design", "Joi"],
    highlights: [
      "Thiết kế và phát triển tính năng đặt lịch kéo thả (drag-and-drop) bằng React Big Calendar.",
      "Xây dựng giao diện responsive, đảm bảo hiển thị chính xác theo thiết kế (pixel-perfect).",
      "Tích hợp RESTful API và triển khai xác thực người dùng bằng JWT.",
      "Thiết kế và xử lý logic đặt lịch nhằm đảm bảo tính nhất quán và hạn chế xung đột booking.",
    ],
    liveUrl: "https://spa-gules.vercel.app/",
    repoUrl: "https://github.com/pinkyni-boo/spa",
    image: "",
  },
  {
    repoName: "auction",
    title: "Auction Platform",
    projectLabel: "Team",
    description:
      "Dự án nhóm xây dựng nền tảng đấu giá, trong đó mình đảm nhận vai trò Business Analyst kết hợp phát triển hệ thống quản trị.",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT"],
    highlights: [
      "Phân tích yêu cầu nghiệp vụ và xây dựng user flow, admin flow.",
      "Chuyển đổi yêu cầu nghiệp vụ thành cấu trúc chức năng và luồng màn hình cụ thể.",
      "Triển khai chức năng quản trị gồm xác thực người dùng và phân quyền (role-based access).",
      "Đảm bảo tính nhất quán giữa luồng nghiệp vụ và trải nghiệm giao diện trong toàn hệ thống.",
      "Tham gia phát triển fullstack với trọng tâm là phía admin và luồng xử lý hệ thống.",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/thnkthuhigh/auction",
    image: "",
  },
  {
    repoName: "healthcare-clinic-system",
    title: "Healthcare System",
    projectLabel: "Team",
    description:
      "Dự án nhóm xây dựng hệ thống quản lý phòng khám dựa trên các quy trình vận hành thực tế.",
    techStack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Đảm nhận vai trò Business Analyst, phân tích luồng tiếp nhận bệnh nhân, đặt lịch và điều phối khám.",
      "Xây dựng cấu trúc hệ thống và luồng xử lý dựa trên yêu cầu thực tế của phòng khám.",
      "Phát triển dashboard quản trị cho lễ tân và quản lý theo workflow vận hành.",
      "Tích hợp RESTful API bằng Axios và triển khai phân quyền truy cập (RBAC) bằng JWT.",
      "Tham gia phát triển fullstack với trọng tâm là phía admin và luồng vận hành hệ thống.",
    ],
    liveUrl: "",
    repoUrl: "https://github.com/thnkthuhigh/healthcare-clinic-system",
    image: "",
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
    image: "",
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
    image: "",
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
    image: "",
  },
];

export const PORTFOLIO_DATA_BY_LANGUAGE: Record<Language, PortfolioData> = {
  vi: {
    github: {
      username: "pinkyni-boo",
    },
    hero: {
      name: "Vũ Thị Ngọc Thảo",
      role: "Frontend Developer Intern",
      tagline: "Với định hướng rõ ràng trong việc xây dựng giao diện web.",
      description:
        "Mình yêu thích việc thiết kế và phát triển web, đặc biệt là những giao diện rõ ràng, dễ dùng và bám sát nhu cầu thực tế.\n\nTrong quá trình làm dự án, mình không chỉ code frontend mà còn tham gia phân tích nghiệp vụ (BA), xây dựng luồng hệ thống và phát triển các chức năng fullstack phía admin.\n\nMình có thể làm frontend, hiểu backend ở mức đủ dùng, và sẵn sàng học thêm để đáp ứng yêu cầu thực tế của sản phẩm.",
      avatar: "https://avatars.githubusercontent.com/u/215128142?v=4",
      contacts: baseContacts,
    },
    about: {
      heading: "Mình ưu tiên hiểu hệ thống trước khi xây dựng giao diện.",
      mindset:
        "Trong các dự án, mình thường bắt đầu từ việc phân tích luồng nghiệp vụ, xác định người dùng và cách hệ thống vận hành.\n\nTừ đó, mình chuyển các yêu cầu thành UI flow rõ ràng, chia thành các màn hình và component để dễ phát triển và bảo trì.\n\nMình đã từng đảm nhận vai trò Business Analyst trong dự án nhóm, đồng thời trực tiếp xây dựng các chức năng theo luồng đã thiết kế.\n\nMục tiêu của mình là tạo ra những giao diện không chỉ đẹp mà còn dễ hiểu, dễ dùng và phù hợp với cách hệ thống hoạt động thực tế.",
      readmeIntro: [
        "Mình làm việc theo hướng ưu tiên hệ thống và luồng nghiệp vụ trước, sau đó mới tối ưu UI detail để trải nghiệm đồng nhất.",
        "Mỗi màn hình đều cần rõ mục tiêu sử dụng, thao tác dễ hiểu và khả năng mở rộng khi nghiệp vụ tăng dần.",
        "Điểm mình theo đuổi là giao diện có thẩm mỹ, nhưng vẫn phải bám sát workflow thật của đội vận hành.",
      ],
      strengths: [
        "Có kinh nghiệm đảm nhận vai trò Business Analyst và phát triển hệ thống",
        "Hiểu và xây dựng được luồng nghiệp vụ",
        "Phát triển frontend với React, xây dựng giao diện responsive, dễ sử dụng",
        "Có thể làm fullstack ở mức phục vụ hệ thống (API, auth, database)",
        "Chủ động học thêm công nghệ mới khi cần để đáp ứng yêu cầu dự án",
      ],
      orientation: [
        "Định hướng phát triển theo Frontend, tập trung vào các sản phẩm thực tế",
        "Ưu tiên môi trường có hệ thống rõ ràng và có thể học hỏi thêm về sản phẩm",
        "Muốn nâng cao khả năng xây dựng UI gắn với nghiệp vụ và hệ thống",
        "Sẵn sàng học thêm công nghệ mới để phát triển bản thân trong công việc",
      ],
    },
    skills: baseSkills,
    projects: projectsVi,
    ui: {
      navLinks: [
        { label: "Về Tôi", href: "#about" },
        { label: "Kỹ Năng", href: "#skills" },
        { label: "Dự Án", href: "#projects" },
        { label: "CV", href: CV_LINK },
        { label: "Liên Hệ", href: "#contact" },
      ],
      hero: {
        primaryCta: "Xem CV",
        secondaryCta: "Xem dự án",
        cvLink: CV_LINK,
      },
      sections: {
        about: "Về Tôi",
        skills: "Kỹ Năng",
        skillsSubtitle:
          "Tập trung vào nhóm công nghệ mình dùng trực tiếp trong dự án thực tế, ưu tiên độ rõ ràng và khả năng triển khai.",
        projects: "Dự Án",
        projectsSubtitle:
          "Bao gồm dự án Team và dự án Cá nhân để thể hiện khả năng phối hợp nhóm và năng lực tự triển khai.",
        strengths: "Điểm Mạnh",
        orientation: "Định Hướng",
        readme: "Tư duy làm việc",
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
        title: "Sẵn sàng cho cơ hội mới.",
        button: "Liên hệ",
        link: EMAIL_WEBMAIL_LINK,
      },
      controls: {
        language: "Ngôn ngữ",
        vi: "VI",
        en: "EN",
        theme: "Giao diện",
        light: "Sáng",
        dark: "Tối",
      },
      brandSignature: "niorravu",
      footer: "© 2026 Vũ Thị Ngọc Thảo",
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
        { label: "CV", href: CV_LINK },
        { label: "Contact", href: "#contact" },
      ],
      hero: {
        primaryCta: "View CV",
        secondaryCta: "View Projects",
        cvLink: CV_LINK,
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
      footer: "© 2026 Vu Thi Ngoc Thao",
    },
  },
};

export const PORTFOLIO_DATA = PORTFOLIO_DATA_BY_LANGUAGE.vi;
