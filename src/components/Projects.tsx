"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Career Pathfinder",
    description:
      "A full-stack AI-integrated career guidance platform that helps users discover optimal career paths through intelligent assessments, personalized recommendations, and resource aggregation — powered by AWS cloud services.",
    tags: ["Next.js", "AWS", "Gemini AI", "DynamoDB", "Lambda"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "AutoClient",
    description:
      "An automated freelancing client acquisition pipeline that discovers potential clients, analyzes their needs using AI, and generates personalized outreach — streamlining the entire sales development process.",
    tags: ["Next.js", "Neon DB", "Prisma", "Gemini API", "Firecrawl"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            Real-world applications built with modern tech stacks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} {...project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
