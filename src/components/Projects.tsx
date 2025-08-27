"use client";

import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Course Management System",
      description:
        "A web-based system designed to help students manage courses and quizzes in an organized way. The platform includes a login page for specific students who can create and manage courses, as well as add and organize quiz questions. \n This was my first real project, and while the code was not perfect, I was proud to create something functional that solved a real problem for students. It also gave me valuable experience in teamwork, frontend development, and integrating with backend systems.",
      tech: ["HTML", "CSS", "JavaScript","jQuery", "PHP", "MySQL"],
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
      image: "/projects/task-manager.jpg",
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
      image: "/projects/weather-dashboard.jpg",
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
      image: "/projects/unity-platformer.jpg",
      featured: true,
    },
  ];

  const ProjectCard = ({
    project,
    index,
  }: {
    project: (typeof projects)[0];
    index: number;
  }) => (
    <div className={`group ${project.featured ? "lg:col-span-2" : ""}`}>
      {/* Project Image */}
             <div
         className={`relative overflow-hidden bg-gray-100 mb-6 ${
           project.featured ? "aspect-[16/9]" : "aspect-[16/9]"
         }`}
       >

        {/* Uncomment when you have actual images */}
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-fill transition-transform duration-500 group-hover:scale-105"
          sizes={project.featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        {/* Project header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg md:text-xl font-light text-black tracking-tight">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500 mt-1 sm:mt-0">
            {project.year}
          </span>
        </div>

        {/* Project description */}
        <p className="text-gray-600 leading-relaxed font-light">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project links */}
        <div className="flex items-center gap-6 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
          >
            <Github size={16} />
            <span className="text-sm font-medium">Code</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
            >
              <ExternalLink size={16} />
              <span className="text-sm font-medium">Live Demo</span>
              <ArrowUpRight
                size={16}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="work" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl">
            A collection of projects showcasing my development journey from web
            applications to testing frameworks and game development.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-20">
          <h3 className="text-sm font-medium text-black tracking-wide uppercase mb-8">
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-16">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="border-t border-gray-200 pt-20">
          <h3 className="text-sm font-medium text-black tracking-wide uppercase mb-8">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
          </div>
        </div>

        {/* View More Section */}
        <div className="mt-20 pt-12 border-t border-gray-200 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-light text-black mb-4">
              Explore More Work
            </h3>
            <p className="text-gray-600 font-light">
              These projects represent my core competencies, but I&apos;m
              constantly experimenting with new technologies and building
              smaller projects to expand my skills.
            </p>
          </div>

          <a
            href="https://github.com/xlargetomato"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
          >
            <span className="text-sm font-medium tracking-wide uppercase">
              View All Projects
            </span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
