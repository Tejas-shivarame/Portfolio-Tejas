import { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [

  {
    id: "cert-python-fullstack",
    type: "certification",
    title: "Python Full Stack Development",
    organization: "Test Yantra (PySpiders)",
    startDate: "2025-01",
    endDate: "2025-10",
    description: [
      "Completed comprehensive training in Python Full Stack Development covering Python, SQL, HTML, CSS, JavaScript, React, and Django.",
      "Built responsive web applications and implemented CRUD operations, REST APIs, and database integration through hands-on projects.",
      "Strengthened problem-solving skills by developing real-world applications using modern web development technologies."
    ],
    tags: ["Python","HTML","CSS","JavaScript","React","Django","SQL"]
  },
  {
    id: "exp-frontend-intern",
    type: "internship",
    title: "Frontend Engineering Intern",
    organization: "Robowaves",
    location: "Bengaluru, India",
    startDate: "2025-01",
    endDate: "2025-06",
    description: [
      "Developed a responsive e-commerce website using HTML, CSS, JavaScript, and React with a modern, user-friendly interface.",
      "Built reusable React components, implemented product listings, shopping cart functionality, and dynamic routing for a seamless user experience.",
      "Optimized website performance, ensured cross-browser compatibility, and collaborated with the team to deliver a scalable and maintainable frontend application.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
  id: "proj-arecanut-status-detection",
  type: "personal",
  title: "Arecanut Status Detection Using Deep Learning",
  organization: "M.S. Ramaiah University of Applied Sciences",
  location: "Bengaluru, India",
  startDate: "2024-01",
  endDate: "2024-05",
  description: [
    "Developed a real-time arecanut status detection system using TensorFlow Lite, OpenCV, and Raspberry Pi to classify arecanuts as ripe, unripe, or dry.",
    "Integrated a CNN-based deep learning model with Pi Camera for automated image capture and accurate classification, reducing manual effort.",
    "Evaluated deep learning and traditional machine learning (SVM) approaches, demonstrating superior accuracy and practical applicability in agricultural environments."
  ],
  tags: ["Python","TensorFlow Lite","OpenCV","Raspberry Pi","Machine Learning","SVM","CNN"]   
  },
  {
    id: "exp-personal-bookmyadvocate",
    type: "personal",
    title: "Book My Advocate",
    organization: "Personal Project",
    startDate: "2026-01",
    endDate: "2026-06",
    description: [
    "Designed and developed a production-ready backend using Django REST Framework, exposing RESTful APIs for user management, advocate profiles, appointment scheduling, and case management.",
    "Built secure authentication and authorization using JWT and Role-Based Access Control (RBAC) while implementing PostgreSQL database modeling, query optimization, and API validation.",
    "Configured Celery with Redis to execute asynchronous background tasks such as email notifications, appointment confirmations, and scheduled jobs, improving application scalability and responsiveness."
    ],
    tags: ["Python","Django","Django REST Framework","REST APIs","SQLite","Celery","Redis","JWT"]
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
];
