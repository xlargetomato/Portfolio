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
    title: "Task Management App",
    description:
      "Collaborative task management with real-time updates, drag-and-drop functionality, and team collaboration features. Includes advanced filtering and project organization.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/ahmed/task-manager",
    demo: "https://task-manager-demo.vercel.app",
    year: "2024",
    image: "/projects/image1.png",
    featured: true,
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
    title: "Weather Dashboard",
    description:
      "Responsive weather application with current conditions, forecasts, and beautiful data visualizations. Features location-based services and interactive charts.",
    tech: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    github: "https://github.com/ahmed/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app",
    year: "2024",
    image: "/projects/image2.png",
    featured: false,
  },
  {
    title: "Unity 2D Platformer",
    description:
      "A 2D platformer game featuring custom physics, level design, and character animations. Showcases game development skills and C# programming proficiency.",
    tech: ["Unity", "C#", "Game Design", "2D Graphics"],
    github: "https://github.com/ahmed/unity-platformer",
    demo: null,
    year: "2024",
    image: "/projects/image1.png",
    featured: true,
  },
  // Additional placeholder projects to make explore page richer
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


];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.tech))
).sort();



