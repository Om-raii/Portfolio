import raiClinicAi from "./assets/projects/rai-clinic-ai.svg";
import artizoImg from "./assets/projects/artizo.svg";
import carpoolImg from "./assets/projects/carpool.svg";
import fittrackImg from "./assets/projects/fittrack.svg";
import javaManagementImg from "./assets/projects/java-management.svg";
import pythonQuizImg from "./assets/projects/python-quiz.svg";
import edusiteImg from "./assets/projects/edusite.svg";

export const personalInfo = {
  name: "Om Parkash",
  role: "Full Stack Developer | MERN Stack Developer | Computer Science Student",
  location: "Karachi, Sindh, Pakistan",
  university: "SZABIST University",
  cgpa: "3.1",
  email: "omeshmalhi@gmail.com",
  phone: "+92-3470084856",
  linkedin: "https://linkedin.com/in/om-rai-b15163282",
  heroIntro: "Building scalable full-stack web applications and modern digital experiences using MERN Stack, Java, and AI-powered solutions.",
};

export const skills = {
  frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "ReactJS", level: 85 },
    { name: "NextJS", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "Tailwind CSS", level: 85 },
  ],
  backend: [
    { name: "NodeJS", level: 85 },
    { name: "ExpressJS", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "SQL", level: 75 },
    { name: "NoSQL", level: 78 },
    { name: "REST APIs", level: 88 },
  ],
  languages: ["Java", "Python", "C", "JavaScript"],
  tools: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Linux/Ubuntu"],
};

export const projects = [
  {
    id: 1,
    title: "Rai Clinic AI — Smart Patient Follow-up Portal",
    description: "A highly polished, enterprise-grade React Native (Expo) mobile application shell designed for modern healthcare environments. This application solves a critical problem in patient care: post-checkup engagement and dynamic prescription checking.",
    tech: ["React Native", "Expo", "Healthcare Tech", "Mobile App"],
    features: [
      "Patient follow-up management",
      "Smart prescription checking",
      "Enterprise-grade design",
      "Real-time notifications",
      "Patient engagement tools",
      "Healthcare workflow optimization",
    ],
    featured: true,
    image: raiClinicAi,
    github: "https://github.com/Om-raii/Rai-Clinic",
    live: "https://rai-clinic.vercel.app/",
  },
  {
    id: 2,
    title: "Artizo — Creative Services Marketplace",
    description: "A mobile-based application developed to connect clients with creative service providers such as photographers, video editors, and audio editors through a single digital platform. Simplifies discovering, selecting, and booking creative professionals using a user-friendly and secure app.",
    tech: ["Flutter", "Mobile App", "Dart"],
    features: [
      "Service provider discovery",
      "User authentication",
      "Booking system",
      "Secure payments",
      "User-friendly interface",
      "Real-time notifications",
    ],
    featured: false,
    image: artizoImg,
    github: "https://github.com/Om-raii/Artizo",
    live: "#",
  },
  {
    id: 3,
    title: "Carpool Management System",
    description: "Developed a modern and user-friendly car pooling application using Flutter for the frontend, Node.js for the backend server, and MongoDB as the database. The application allows users to easily offer rides, search for available trips, and connect with other travelers in real time.",
    tech: ["Flutter", "Node.js", "MongoDB", "Mobile App"],
    features: ["Ride offering", "Trip search", "Real-time connection", "User authentication", "Booking management", "Ride matching"],
    image: carpoolImg,
    github: "https://github.com/Om-raii/Carpool",
    live: "#",
  },
  {
    id: 4,
    title: "FitTrack Pro – Gym Management & Fitness Tracking System",
    description: "A full-stack Gym Management application developed using Flutter, Node.js, Express.js, and MongoDB. Implemented secure JWT authentication, role-based access control, workout and diet management, membership tracking, class booking, payment management, and fitness progress monitoring through RESTful APIs and Provider state management.",
    tech: ["Flutter", "Node.js", "Express.js", "MongoDB", "JWT", "RESTful APIs", "Provider"],
    features: [
      "Secure JWT authentication",
      "Role-based access control",
      "Workout and diet management",
      "Membership tracking",
      "Class booking system",
      "Payment management",
      "Fitness progress monitoring",
      "Provider state management",
    ],
    image: fittrackImg,
    github: "https://github.com/Om-raii/GYM",
    live: "#",
  },
  {
    id: 5,
    title: "Java Management System",
    description: "Java-based CRUD management system using OOP concepts and MySQL integration.",
    tech: ["Java", "MySQL"],
    image: javaManagementImg,
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Python Quiz Game",
    description: "Interactive quiz game with score tracking and validation using Python.",
    tech: ["Python"],
    image: pythonQuizImg,
    github: "#",
    live: "#",
  },
  {
    id: 7,
    title: "Umerkot EduSite",
    description: "A responsive school website developed using Laravel and PHP to provide an informative and user-friendly online platform for a high school. The project follows the MVC (Model-View-Controller) architecture of Laravel and utilizes Blade templating with reusable partial views for better code organization and maintainability.",
    tech: ["Laravel", "PHP", "Blade", "MVC", "Web App"],
    features: [
      "Responsive design",
      "School information portal",
      "MVC architecture",
      "Blade templating",
      "Reusable components",
      "Database integration",
    ],
    image: edusiteImg,
    github: "https://github.com/Om-raii/edusite",
    live: "#",
  },
];

export const experience = [
  {
    role: "Java Development Intern",
    company: "Digital Empowerment Network",
    location: "Karachi, Pakistan",
    period: "Aug 2024 – Dec 2024",
    highlights: [
      "Java application development",
      "OOP concepts",
      "MySQL integration",
      "REST APIs",
      "Agile/Scrum collaboration",
      "Debugging and testing",
    ],
  },
];

export const certifications = [
  "Java & Spring",
  "Python - Kaggle",
  "Backend Development",
  "MongoDB Basics",
  "MERN Stack",
  "NodeJS with Express & MongoDB",
  "Microsoft AI Classroom",
  "SQL",
];
