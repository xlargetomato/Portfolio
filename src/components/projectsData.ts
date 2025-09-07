export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  demo: string | null;
  year: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Course Management System",
    description:
      "A web-based system designed to help students manage courses and quizzes in an organized way. The platform includes a login page for specific students who can create and manage courses, as well as add and organize quiz questions. \n This was my first real project, and while the code was not perfect, I was proud to create something functional that solved a real problem for students. It also gave me valuable experience in teamwork, frontend development, and integrating with backend systems.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
    github: "https://github.com/xlargetomato/Course-Management-System",
    demo: "https://uni-website.unaux.com/",
    year: "2023",
    image: "/projects/image1.png",
    featured: false,
  },
  {
    title: "ReelVault",
    description:
      "A Next.js app to save, organize, and search Instagram and Facebook reels with clean UI, fast add flow, and powerful filters.",
    tech: ["NEXT", "Node.js", "Tailwind", "MySql", "Prisma"],
    github: "https://github.com/xlargetomato/ReelVault",
    demo: "",
    year: "2025",
    image: "/projects/reel.jpg",
    featured: false,
  },
  {
    title: "Gym Management Desktop App",
    description:
      "A desktop application built for a local gym to manage users, subscriptions, attendance, and membership details.",
    tech: ["HTML", "CSS", "JavaScript", "Electron", "JSON (for lightweight local storage)"],
    github: "https://github.com/xlargetomato/Shawky-Gym",
    demo: null,
    year: "2025",
    image: "/projects/image2.png",
    featured: false,
  },
{
  title: "File Organizer",
  description: "Windows desktop application that organizes files intelligently by type, date, or size. Includes a safe preview system, undo functionality, and modern UI with progress tracking. Built with AI-assisted design (Claude Sonnet 4) for UI/UX.",
  tech: ["C#", ".NET Framework", "WinForms", "Visual Studio"],
  github: "https://github.com/xlargetomato/File-Organizer",
  demo: null,
  year: "2025",
  image: "/projects/file-organizer.png",
  featured: false,
},
  {
    title: "Unity 2D Platformer",
    description:
      "A 2D platformer game featuring custom physics, level design, and character animations. Showcases game development skills and C# programming proficiency.",
    tech: ["Unity", "C#", "Game Design", "2D Graphics"],
    github: "https://github.com/xlargetomato/unity-platformer",
    demo: null,
    year: "2024",
    image: "/projects/image1.png",
    featured: true,
  },

  {
    title: "DEPI Final Exam On JAVA",
    description:
      "As part of my DEPI Java final exam, I built 20 mini-programs and a University Management System using Object-Oriented Programming principles. The tasks ranged from small utilities (ATM simulation, calculator, password validator, games) to larger applications like managing students, courses, and GPA calculation. This project strengthened my ability to design with encapsulation, inheritance, polymorphism, and abstraction while practicing problem-solving with real-world scenarios.",
    tech: ["OOP", "Java"],
    github: "https://github.com/xlargetomato/depi-final-exam-java",
    demo: null,
    year: "2025",
    image: "/projects/java.jpg",
    featured: false,
  },

];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.tech))
).sort();








