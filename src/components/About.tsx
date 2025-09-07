"use client";

const About = () => {
  const timeline = [
    {
      year: "2025",
      title: "DEPI Software Testing Program",
      description:
        "QA methodologies, test automation, and quality assurance best practices.",
      current: true,
    },
    {
      year: "2025",
      title: "Full-Stack Development",
      description: "Next.js (Full-Stack with API Routes)",
      current: true,
    },
    {
      year: "2024",
      title: "Full-Stack Development",
      description: "React, Next.js and TypeScript",
      current: false,
    },
    {
      year: "2024",
      title: "Game Development using Unity",
      description: "Unity, C#, Blender, and game development.",
      current: false,
    },
    {
      year: "2023",
      title: "Web Development Foundation",
      description: "HTML, CSS, JavaScript fundamentals and responsive design.",
      current: false,
    },
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight">
              About
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light">
                I&apos;m a passionate developer with a strong foundation in
                modern web technologies and a growing expertise in software
                testing. My journey began with front-end development, and
                I&apos;ve since expanded into full-stack development while
                pursuing formal training in QA methodologies.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed font-light">
                I believe in writing clean, maintainable code and ensuring
                quality through thorough testing. My approach combines technical
                skills with attention to detail, always striving to deliver
                reliable and user-friendly applications.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Beyond web and software development, I also love gaming and have
                been learning Unity to explore game development. It’s an
                exciting way for me to combine creativity with programming and
                continue expanding my skills into new areas.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-sm font-medium text-black tracking-wide uppercase mb-6">
                Learning Journey
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium ${
                          item.current
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-black">{item.title}</h4>
                        {item.current && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 font-light text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
