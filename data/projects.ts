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
  slug: "hospital-management-system",
  title: "Hospital Management System",
description:
  "A comprehensive Hospital Management System that streamlines patient care, appointment scheduling, medical records, & hospital operations. The platform provides secure authentication, role-based access control, & scalable REST APIs for efficient healthcare management. It enhances hospital efficiency by simplifying patient care, appointments, & administrative tasks.",longDescription:
    "A modern Hospital Management System built with Django REST Framework and Next.js, designed for multi-hospital environments. It features JWT authentication with refresh token rotation, email OTP verification, optional TOTP-based 2FA, role-based access control (RBAC), Celery-powered background processing, PostgreSQL, Redis, and Dockerized deployment. The frontend is built using Next.js 15, React, TypeScript, Tailwind CSS, Zustand, and React Query to deliver a fast, responsive, and scalable user experience. The architecture is designed to support future modules including patient management, doctors, appointments, billing, pharmacy, laboratory, dashboards, analytics, notifications, and reporting.",

  image: "/images/projects/hospital-management-system.svg",

  tags: [
    "Python",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "Next.js",
    "TypeScript",
    "Docker",
  ],
  githubUrl: "https://github.com/Tejas-shivarame/Hospital-Management-System.git",
  liveUrl: "https://your-live-demo.vercel.app",

  featured: true,
  year: 2026,
}
];

export const allProjectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();
