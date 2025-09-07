"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed font-light">
                I&lsquo;m always interested in new opportunities and
                collaborations. Whether you have a project in mind or just want
                to connect, I&apos;d love to hear from you.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:ahmed@example.com"
                  className="group inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  <span className="font-medium">ahmedhegazysad@gmail.com</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </a>

                <div className="flex items-center gap-6">
                  <a
                    href="https://www.linkedin.com/in/ahmed-hegazy567/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
                  >
                    <Linkedin size={16} className="flex-shrink-0" />
                    <span className="text-sm font-medium">LinkedIn</span>
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </a>

                  <a
                    href="https://github.com/xlargetomato"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
                  >
                    <Github size={16} className="flex-shrink-0" />
                    <span className="text-sm font-medium">GitHub</span>
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 text-black bg-transparent border-0 border-b border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 text-black bg-transparent border-0 border-b border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-0 py-3 text-black bg-transparent border-0 border-b border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 resize-none font-light"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300"
                >
                  <span className="text-sm font-medium tracking-wide uppercase">
                    Send Message
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
