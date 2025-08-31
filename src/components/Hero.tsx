"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left column - Content */}
          <div className="lg:col-span-8">
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-black leading-[0.9] tracking-tight mb-8">
              Software Developer
            </h1>

            {/* Subtitle */}
            <div className="max-w-2xl mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                I build clean, maintainable applications and ensure quality
                through testing. Currently expanding my skills in Java, Unity
                C#, and QA methodologies while staying adaptable to new
                technologies and challenges.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-16">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide uppercase">
                  View Work
                </span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </a>

              <a
                href="/explore"
                className="group inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide uppercase">
                  Explore Projects
                </span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide uppercase">
                  Get in Touch
                </span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

{/* Right column - Profile Photo */}
<div className="lg:col-span-4 order-last lg:order-last">
  <div className="relative">
    {/* Photo container */}
    <div className="relative w-80 h-80 mx-auto lg:ml-auto lg:mr-0">
      <Image
        src="/profile/profile.png"
        alt="Ahmed - Software Developer"
        fill
        className="object-cover rounded-2xl"
        sizes="(max-width: 768px) 320px, 320px"
        priority
      />
    </div>

    {/* Decorative elements */}
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-50 rounded-full -z-10"></div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;




