"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./scrollReveal";

// Replace with your actual project data
const projects = [
  {
    id: 1,
    title: "I love Arcane",
    description: "Timebomb forever",
    image: "/images/Dummy.png",
    link: "https://www.netflix.com/title/81435684",
  },
  {
    id: 2,
    title: "Who doesn't love Arcane",
    description: "JayViktor forever",
    image: "/images/Viktor.png",
    link: "https://www.netflix.com/title/81435684",
  },
];

const Projects: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="min-h-screen bg-black text-white px-8 md:px-16 py-24"
    >
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My favorite show <span className="text-[#5CABFA]"></span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ScrollReveal 
            key={project.id} 
            delay={0.2 * project.id} // Stagger animation: project 1 = 0.2s, project 2 = 0.4s
          >
            <motion.div
              whileHover={{ scale: 1.03 }} // scale: 1.03 = grows to 103% size on hover
              // Try: 1.05 for more dramatic, 1.01 for subtle
              transition={{ duration: 0.3 }} // 0.3s hover animation
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-[#5CABFA]/20 transition-all"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-4 text-[#5CABFA] hover:underline"
                >
                  view project →
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
