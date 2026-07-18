import { Project } from "@/types";

export const projects: Project[] = [
{
  slug: "developer-portfolio",
  title: "Developer Portfolio",
  description:
    "A responsive portfolio website showcasing my projects, technical skills, and professional experience. Built with modern web technologies, it highlights my expertise in full-stack development, problem-solving, and creating user-friendly digital experiences. The portfolio also includes my achievements, certifications, and contact information for potential employers and clients.",
  longDescription:
    "Designed and developed a modern portfolio using Next.js and Tailwind CSS. The portfolio features project showcases, skills, experience, contact form, smooth animations, dark mode, SEO optimization, and responsive design. It serves as a central hub for recruiters and clients to explore my work.",
  image: "/images/projects/developer-portfolio.svg",
  tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  githubUrl: "https://github.com/Tejas-shivarame/Portfolio-Tejas.git",
  liveUrl: "https://portfolio-tejas-b82shd8bz-tejas2000-shivarme-personal.vercel.app/",
  featured: true,
  year: 2026,
},
{
  slug: "book-my-advocate",
  title: "Book My Advocate",
  description:
    "A legal consultation booking platform that connects clients with experienced advocates for seamless appointment scheduling and case inquiries. The platform provides a secure and user-friendly interface for booking consultations, managing legal requests, and communicating efficiently. It streamlines the legal consultation process, making professional legal assistance more accessible and convenient.",
  longDescription:
    "Book My Advocate is a Django-based web platform that lets clients search for advocates by specialization, view availability, and book consultation slots. Built with Django REST Framework for the API layer and SQLite for data storage, with role-based access for clients and advocates.",
  image: "/images/projects/book-my-advocate.svg",
  tags: ["Python","Django","Django REST Framework","REST APIs","SQLite","Celery","Redis","JWT"],
  githubUrl: "https://github.com/Tejas-shivarame/Book-My-Advocate-Legal-Consultation-Platform.git",
  liveUrl: "https://your-portfolio-url.com",
  featured: true,
  year: 2026,
},

  {
    slug: "devnotes",
    title: "DevNotes — Markdown Knowledge Base",
    description:
      "A self-hosted knowledge base for engineering teams with full-text search and version history.",
    longDescription:
      "DevNotes lets teams write and organize markdown documentation with instant full-text search (Postgres tsvector), tagging, and revision history — deployed as a single Docker image.",
    image: "/images/projects/devnotes.svg",
    tags: ["Django", "PostgreSQL", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/yourusername/devnotes",
    liveUrl: "https://devnotes-demo.vercel.app",
    featured: true,
    year: 2026,
  },
];

export const allProjectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();
