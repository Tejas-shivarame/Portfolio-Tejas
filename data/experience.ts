import { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "exp-backend-intern",
    type: "internship",
    title: "Backend Engineering Intern",
    organization: "Nimbus Systems",
    location: "Bengaluru, India (Hybrid)",
    startDate: "2025-01",
    endDate: "2025-06",
    description: [
      "Built and shipped 12+ REST endpoints in Django REST Framework serving the core customer dashboard.",
      "Reduced average API response time by 38% by optimizing ORM queries and adding Redis caching.",
      "Wrote integration tests with pytest, raising backend coverage from 61% to 89%.",
    ],
    tags: ["Django REST Framework", "PostgreSQL", "Redis", "pytest"],
  },
  {
    id: "exp-freelance-fastapi",
    type: "freelance",
    title: "Freelance Backend Developer",
    organization: "Self-employed",
    location: "Remote",
    startDate: "2024-06",
    endDate: "2024-12",
    description: [
      "Designed and built a FastAPI microservice for a logistics startup handling 5,000+ daily shipment events.",
      "Implemented JWT auth, rate limiting, and webhook retries with exponential backoff.",
      "Containerized the service with Docker and set up a CI pipeline with GitHub Actions.",
    ],
    tags: ["FastAPI", "Docker", "GitHub Actions", "PostgreSQL"],
  },
  {
    id: "exp-personal-orbit",
    type: "personal",
    title: "Orbit — Task & Sprint Manager",
    organization: "Personal Project",
    startDate: "2024-02",
    endDate: "2024-05",
    description: [
      "Built a full-stack Kanban and sprint planning tool from scratch to learn real-time systems.",
      "Implemented WebSocket-based live board updates and optimistic UI state on the React front end.",
    ],
    tags: ["Django", "React", "WebSockets"],
  },
  {
    id: "exp-cert-dj",
    type: "certification",
    title: "Django for Everybody Specialization",
    organization: "University of Michigan (Coursera)",
    startDate: "2023-11",
    endDate: "2023-11",
    description: [
      "Completed a 5-course specialization covering Django models, views, templates, and REST APIs.",
    ],
    tags: ["Django", "Python"],
  },
  {
    id: "exp-personal-devnotes",
    type: "personal",
    title: "DevNotes — Markdown Knowledge Base",
    organization: "Personal Project",
    startDate: "2023-08",
    endDate: "2023-10",
    description: [
      "Built a self-hosted documentation tool with Postgres full-text search and version history.",
      "Deployed as a single Docker image to simplify self-hosting for small teams.",
    ],
    tags: ["Django", "PostgreSQL", "Docker"],
  },
];
