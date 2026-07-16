export type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 0 - 100, used for proficiency bars
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
}

export type ExperienceType =
  | "internship"
  | "freelance"
  | "personal"
  | "certification";

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  tags?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "instagram";
}

export interface NavLink {
  label: string;
  href: string;
}
