"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { projects, allTechnologies, type Project } from "@/components/projectsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ExploreCard = ({ project }: { project: Project }) => {
  return (
    <div className="group border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-colors">
      <div className="relative overflow-hidden bg-gray-100 rounded-lg mb-4 aspect-[16/9]">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-base md:text-lg font-light tracking-tight">{project.title}</h3>
        <span className="text-xs text-gray-500 whitespace-nowrap">{project.year}</span>
      </div>
      <p className="text-sm text-gray-600 font-light line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.slice(0, 6).map((tech) => (
          <span key={tech} className="text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full font-medium">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:text-gray-600">
            Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-black hover:text-gray-600">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setQuery("");
    setSelectedTechs([]);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery = q
        ? p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.some((t) => t.toLowerCase().includes(q))
        : true;
      const matchesTechs = selectedTechs.length
        ? selectedTechs.every((t) => p.tech.includes(t))
        : true;
      return matchesQuery && matchesTechs;
    });
  }, [query, selectedTechs]);

  return (
    <>
      <Header />
      <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight">Explore Projects</h1>
            <p className="text-gray-600 font-light mt-2">Search and filter across my work by name and technologies.</p>
          </div>
          <Link href="/" className="text-sm text-gray-600 hover:text-black">Back Home</Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1 space-y-6">
            <div>
              <label className="text-sm font-medium text-black">Search</label>
              <div className="mt-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, description, or tech..."
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-black">Technologies</label>
                {(query || selectedTechs.length > 0) && (
                  <button onClick={clearFilters} className="text-xs text-gray-600 hover:text-black inline-flex items-center gap-1">
                    <X size={14} /> Clear
                  </button>
                )}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {allTechnologies.map((tech) => {
                  const active = selectedTechs.includes(tech);
                  return (
                    <button
                      key={tech}
                      onClick={() => toggleTech(tech)}
                      className={`text-xs px-3 py-1.5 rounded-full border ${
                        active ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {tech}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600 font-light">
                Showing {filtered.length} of {projects.length}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center text-gray-600 py-16 border border-dashed border-gray-200 rounded-xl">
                No projects match your filters.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p) => (
                  <ExploreCard key={p.title} project={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}


