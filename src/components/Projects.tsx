"use client";

import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects as allProjects } from "./projectsData";

const Projects = () => {
  const projects = allProjects;

  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <div className={`group ${project.featured ? "lg:col-span-2" : ""}`}>
      <div
        className={`relative overflow-hidden bg-gray-100 mb-6 ${
          project.featured ? "aspect-[16/9]" : "aspect-[16/9]"
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-fill transition-transform duration-500 group-hover:scale-105"
          sizes={
            project.featured
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg md:text-xl font-light text-black tracking-tight">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500 mt-1 sm:mt-0">
            {project.year}
          </span>
        </div>

        <p className="text-gray-600 leading-relaxed font-light">
          {project.description}
        </p>

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

        <div className="flex items-center gap-6 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
            >
              <Github size={16} />
              <span className="text-sm font-medium">Code</span>
            </a>
          )}
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
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight mb-4">
                Selected Work
              </h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl">
                A collection of projects showcasing my development journey from
                web applications to testing frameworks and game development.
              </p>
            </div>
            <a
              href="/explore"
              className="group inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300 bg-gray-50 hover:bg-gray-100 px-6 py-3 rounded-lg border border-gray-200"
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                Explore All Projects
              </span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-sm font-medium text-black tracking-wide uppercase mb-8">
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-16">
            {projects
              .filter((p) => p.featured)
              .slice(0, 2)
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-20">
          <h3 className="text-sm font-medium text-black tracking-wide uppercase mb-8">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects
              .filter((p) => !p.featured)
              .slice(0, 3)
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>
        </div>

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
            href="/explore"
            className="group inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg"
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
