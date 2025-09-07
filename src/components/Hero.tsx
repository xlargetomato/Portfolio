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
          <div className="lg:col-span-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-black leading-snug tracking-tight mb-6">
              Hi, my name is <span className="font-semibold">Ahmed Hegazy</span>
            </h1>

            <div className="max-w-2xl mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                I’m a Software Developer with experience across different fields
                of technology. I enjoy exploring new areas, picking up new
                skills, and building whatever ideas I set my mind to.
              </p>
            </div>

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
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide uppercase">
                  Download CV
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

          <div className="lg:col-span-4 order-last lg:order-last">
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto lg:ml-auto lg:mr-0">
                <Image
                  src="/profile/profile.png"
                  alt="Ahmed Hegazy - Profile"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 320px, 320px"
                  priority
                />
              </div>

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
