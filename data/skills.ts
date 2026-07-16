import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", category: "Frontend", level: 95 },
  { name: "CSS", category: "Frontend", level: 90 },
  { name: "JavaScript", category: "Frontend", level: 92 },
  { name: "TypeScript", category: "Frontend", level: 85 },
  { name: "React", category: "Frontend", level: 88 },
  { name: "Next.js", category: "Frontend", level: 85 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },

  // Backend
  { name: "Python", category: "Backend", level: 95 },
  { name: "Django", category: "Backend", level: 95 },
  { name: "Flask", category: "Backend", level: 90 },
  { name: "Django REST Framework", category: "Backend", level: 88 },
  { name: "FastAPI", category: "Backend", level: 82 },
  { name: "RESTAPI", category: "Backend", level: 82 },



  // Database
  { name: "PostgreSQL", category: "Database", level: 85 },
  { name: "MySQL", category: "Database", level: 80 },
  { name: "SQLite", category: "Database", level: 85 },

  // Tools
  { name: "Git", category: "Tools", level: 92 },
  { name: "GitHub", category: "Tools", level: 92 },
  { name: "Docker", category: "Tools", level: 78 },
  { name: "Postman", category: "Tools", level: 88 },
  { name: "VS Code", category: "Tools", level: 95 },
  { name: "Linux", category: "Tools", level: 80 },
];

export const skillCategories = ["Frontend", "Backend", "Database", "Tools"] as const;
