import { Project } from "@/types";

export const projects: Project[] = [
{
  slug: "developer-portfolio",
  title: "Developer Portfolio",
  description:
    "A responsive portfolio showcasing my projects, technical skills, and professional experience.",
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
    "A legal consultation booking platform connecting clients with advocates for scheduled appointments and case inquiries.",
  longDescription:
    "Book My Advocate is a Django-based web platform that lets clients search for advocates by specialization, view availability, and book consultation slots. Built with Django REST Framework for the API layer and SQLite for data storage, with role-based access for clients and advocates.",
  image: "/images/projects/book-my-advocate.svg",
  tags: ["Python", "Django", "Django REST Framework", "SQLite"],
  githubUrl: "https://github.com/tejasvijay96/book-my-advocate",
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
  {
    slug: "pulse-analytics",
    title: "Pulse — Realtime Analytics Dashboard",
    description:
      "An event analytics dashboard with live charts, funnels, and cohort retention views.",
    image: "/images/projects/pulse.svg",
    tags: ["FastAPI", "React", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/pulse-analytics",
    liveUrl: "https://pulse-analytics-demo.vercel.app",
    featured: false,
    year: 2024,
  },
  {
    slug: "shelfie",
    title: "Shelfie — Inventory Tracker",
    description:
      "A small-business inventory and invoicing tool with barcode lookups and low-stock alerts.",
    image: "/images/projects/shelfie.svg",
    tags: ["Django", "SQLite", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/yourusername/shelfie",
    featured: false,
    year: 2023,
  },
  {
    slug: "commit-stream",
    title: "CommitStream — GitHub Activity Visualizer",
    description:
      "Turns GitHub commit history into an animated, shareable contribution story.",
    image: "/images/projects/commitstream.svg",
    tags: ["Next.js", "TypeScript", "GitHub API"],
    githubUrl: "https://github.com/yourusername/commit-stream",
    liveUrl: "https://commit-stream.vercel.app",
    featured: false,
    year: 2023,
  },
];

export const allProjectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();
