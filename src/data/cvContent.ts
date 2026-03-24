import type { CareerData } from "../types/portfolio";

export const CAREER_DATA: CareerData = {
  profile: {
    displayName: "Vũ Thị Ngọc Thảo",
    headline: "Frontend Developer",
    objective:
      "Frontend developer intern focused on building scalable React applications and improving user experience through clean component architecture and efficient state management.",
    phone: "0909561743",
    email: "niorravucontact@gmail.com",
    githubUrl: "https://github.com/pinkyni-boo",
    linkedinUrl: "https://linkedin.com/in/ngocthaovu",
    location: "Thu Duc, Ho Chi Minh City",
    gpa: "3.07",
    english: "Intermediate English",
  },
  skillsByGroup: [
    {
      title: "Frontend",
      description:
        "Nhóm kỹ năng mình dùng nhiều nhất khi xây giao diện, component và trải nghiệm trên web app.",
      items: ["React","JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Ant Design"],
    },
    {
      title: "Backend & API",
      description:
        "Mình vẫn thích hiểu luồng dữ liệu phía sau để làm frontend chặt hơn và chủ động hơn khi ghép hệ thống.",
      items: ["Node.js", "Express.js", "RESTful API", "JWT Authentication"],
    },
    {
      title: "Database & Tools",
      description:
        "Các công cụ mình dùng để triển khai, version control và đưa project lên môi trường chạy thật.",
      items: ["MongoDB", "PostgreSQL", "Git", "GitHub", "Vercel", "Render"],
    },
  ],
  experienceItems: [
    {
      period: "03/2026 - Hiện tại",
      project: "Healthcare Clinic Management System",
      role: "Business Analyst / Fullstack Developer",
      summary:
        "Hệ thống quản lý phòng khám với luồng tiếp nhận, lịch hẹn, tư vấn và điều trị, hướng đến trải nghiệm rõ ràng cho cả nhân sự vận hành lẫn người dùng nội bộ.",
      highlights: [
        "Xây workflow cho đăng ký bệnh nhân, đặt lịch khám, khám bệnh và điều trị.",
        "Phát triển dashboard cho receptionist, cashier và quản lý phòng khám.",
        "Thiết kế auto-refresh 10–30 giây cho lịch hẹn, hàng chờ và thanh toán.",
        "Xây REST API với JWT-based role access control.",
        "Triển khai logic booking slot và doctor queue để tránh overbooking.",
      ],
      stack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
      repoUrl: "https://github.com/thnkthuhigh/healthcare-clinic-system",
    },
    {
      period: "01/2026 - 03/2026",
      project: "Spa Management System",
      role: "Fullstack Developer",
      summary:
        "Admin system cho vận hành spa với booking, khách hàng, hóa đơn và báo cáo, nhấn mạnh vào nghiệp vụ đặt lịch và phân quyền truy cập.",
      highlights: [
        "Xây hệ thống quản trị cho booking, khách hàng, hóa đơn và báo cáo.",
        "Làm lịch hẹn kéo thả với React Big Calendar.",
        "Phát triển REST APIs và auth với JWT role-based access.",
        "Viết backend validation và booking logic bằng Joi.",
      ],
      stack: ["React", "Node.js", "Express.js", "MongoDB", "Ant Design", "JWT"],
      repoUrl: "https://github.com/pinkyni-boo/spa",
      demoUrl: "https://spa-gules.vercel.app/",
    },
  ],
  educationItems: [
    {
      period: "2022 - 2026",
      school: "HUTECH University",
      program: "Information Technology",
      details: ["GPA: 3.07", "Định hướng phát triển theo Frontend / Product Web Development"],
    },
  ],
  curatedProjects: [
    {
      id: "healthcare-clinic-system",
      title: "Healthcare Clinic Management System",
      badge: "Flagship Case",
      period: "03/2026 - Hiện tại",
      role: "Business Analyst / Fullstack Developer",
      summary:
        "Một bài toán vận hành phòng khám khá dày nghiệp vụ, nơi mình vừa tham gia phân tích flow vừa trực tiếp hiện thực hóa giao diện và logic hệ thống.",
      impact:
        "Project giúp mình rèn rõ tư duy workflow, kiểm soát hàng chờ, lịch hẹn và phân quyền giữa nhiều vai trò trong cùng một sản phẩm.",
      stack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
      highlights: [
        "Dashboard cho receptionist, cashier và clinic management",
        "Auto-refresh cho lịch khám, queue và payment",
        "JWT role access control",
      ],
      repoUrl: "https://github.com/thnkthuhigh/healthcare-clinic-system",
      visualSize: "hero",
    },
    {
      id: "spa",
      repoName: "spa",
      title: "Spa Management System",
      badge: "Live System",
      period: "01/2026 - 03/2026",
      role: "Fullstack Developer",
      summary:
        "Hệ thống quản lý spa đa chức năng, kết hợp website phía khách hàng với khu vực quản trị booking, khách hàng, hóa đơn và báo cáo.",
      impact:
        "Mình dùng project này để thể hiện khả năng làm fullstack trong một hệ thống có tính vận hành thật và nhiều màn hình quản trị.",
      stack: ["React", "Node.js", "Express.js", "MongoDB", "Ant Design", "JWT"],
      highlights: [
        "Booking flow và drag-and-drop scheduling",
        "REST API + JWT authentication",
        "Joi validation cho backend",
      ],
      visualSize: "tall",
    },
    {
      id: "demo-doan-coso",
      repoName: "demo-doan-coso",
      title: "Gym Management App",
      badge: "Fullstack Build",
      period: "2025 - 2026",
      role: "Fullstack Developer",
      summary:
        "Ứng dụng quản lý phòng gym với frontend và backend đi cùng nhau, phù hợp để cho thấy cách mình nối UI, auth và dữ liệu vào một flow sử dụng rõ ràng.",
      impact:
        "Project này đại diện cho giai đoạn mình chủ động hơn với kiến trúc đầy đủ của một ứng dụng web, không chỉ dừng ở phần giao diện.",
      stack: ["React", "Express", "MongoDB", "Vite", "Tailwind CSS"],
      highlights: [
        "Frontend và backend tách lớp rõ",
        "Auth flow và quản trị dữ liệu",
        "Dự án có cấu trúc triển khai thực hành",
      ],
      visualSize: "wide",
    },
    {
      id: "tgdd",
      repoName: "tgdd",
      title: "Business Workflow Project",
      badge: "System Thinking",
      period: "2026",
      role: "Developer",
      summary:
        "Một project thiên về nghiệp vụ và logic hệ thống, giúp mình thực hành cách tiếp cận dữ liệu, luồng quản trị và tổ chức code theo hướng có cấu trúc.",
      impact:
        "Dù không phải project thiên về visual, nó cho thấy mình không chỉ quan tâm phần nhìn mà còn để ý cách bài toán được tổ chức phía sau.",
      stack: ["Java", "Spring Boot", "Maven", "Business Logic"],
      highlights: [
        "Tư duy dữ liệu và workflow",
        "Cấu trúc backend có tổ chức",
        "Bài toán thiên về vận hành và quản trị",
      ],
      visualSize: "standard",
    },
  ],
  cv: {
    headline: "Frontend Developer CV",
    summary:
      "Bản CV hiện tại tập trung vào React applications, clean component architecture, user experience và hai project fullstack mình đã trực tiếp tham gia xây dựng.",
    note: "PDF đầy đủ gồm thông tin liên hệ, mục tiêu nghề nghiệp, kỹ năng, học vấn và kinh nghiệm dự án.",
    fileName: "VuThiNgocThao_FrontendDeveloper_CV.pdf",
  },
};
