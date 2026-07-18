export const siteConfig = {
  name: "Tejas S",
  role: "Software Engineer & Python Backend Developer",
  shortBio:
    "I build fast, reliable backend systems and clean, thoughtful interfaces — from Django APIs to React front ends.",
  defaultTitle: "Tejas S — Software Engineer & Python Backend Developer", // ← added missing space before "—"
  description:
    "Portfolio of Tejas S, a software engineer specializing in Python backend development, REST APIs, and modern full-stack web applications.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tejas.dev",
  ogImage: "/images/Tejas_Profile.png", // ← fixed: leading slash + forward slashes
  email: "tejasvijay96@gmail.com",
  phone: "+91 81050 31246",
  location: "Bengaluru, India",
  resumeUrl: "resume/Tejas_S_Resume.pdf",
  keywords: [
    "Software Engineer",
    "Python Developer",
    "Django Developer",
    "Backend Engineer",
    "FastAPI",
    "React Developer",
    "Full Stack Developer",
    "Portfolio",
  ],
};