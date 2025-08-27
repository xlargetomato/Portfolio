"use client";

import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Palette,
  Zap,
  Server,
  Coffee,
  GitBranch,
  TestTube,
  Bug,
  Terminal,
  Eye,
  Send,
  Gamepad2,
} from "lucide-react";

const Skills = () => {
  const skillCategories = {
    frontend: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Zap },
      { name: "TypeScript", icon: Code2 },
      { name: "JavaScript (ES6+)", icon: Code2 },
      { name: "HTML5 & CSS3", icon: Globe },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Responsive Design", icon: Smartphone },
    ],
    backend: [
      { name: "Node.js", icon: Server },
      { name: "Java", icon: Coffee },
      { name: "RESTful APIs", icon: Send },
      { name: "Database Design", icon: Database },
      { name: "Unity C#", icon: Gamepad2 },
      { name: "Express.js", icon: Server },
    ],
    others: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Selenium", icon: Bug },
      { name: "TestNG", icon: TestTube },
      { name: "QA Testing", icon: Bug },
      { name: "Test Automation", icon: TestTube },
      { name: "VS Code", icon: Terminal },
      { name: "Chrome DevTools", icon: Eye },
      { name: "Postman", icon: Send },
    ],
  };

  const SkillCard = ({ skill }: { skill: { name: string; icon: React.ElementType } }) => {
    const IconComponent = skill.icon;

    return (
      <div className="group bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
        <div className="flex items-center gap-3">
          <IconComponent
            size={16}
            className="text-gray-500 group-hover:text-gray-700 transition-colors duration-200 flex-shrink-0"
          />
          <span className="text-gray-700 font-medium text-sm group-hover:text-black transition-colors duration-200">
            {skill.name}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column - Title */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight">
              Skills
            </h2>
          </div>

          {/* Right column - Skills */}
          <div className="lg:col-span-8 space-y-12">
            {/* Frontend */}
            <div>
              <h3 className="text-sm font-medium text-black tracking-wide uppercase mb-6">
                Frontend
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skillCategories.frontend.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-sm font-medium text-black tracking-wide uppercase mb-6">
                Backend
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skillCategories.backend.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Others */}
            <div>
              <h3 className="text-sm font-medium text-black tracking-wide uppercase mb-6">
                Tools & Testing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skillCategories.others.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
