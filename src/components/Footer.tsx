"use client";

import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="text-lg font-medium text-black tracking-tight mb-2">
              Ahmed
            </div>
            <p className="text-sm text-gray-600 font-light">
              Software Developer
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-6">
              <a
                href="mailto:ahmedhegazysad@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors duration-300 font-medium"
              >
                <Mail size={14} />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-hegazy567/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors duration-300 font-medium"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/xlargetomato"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors duration-300 font-medium"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            </div>

            <p className="text-xs text-gray-500 font-light">
              © {currentYear} Ahmed. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
