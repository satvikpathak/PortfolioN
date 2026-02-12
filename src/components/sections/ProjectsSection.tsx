"use client";

import { HiExternalLink, HiCode } from "react-icons/hi";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Career Pathfinder",
    description:
      "AI-driven career guidance platform that analyzes skills, suggests learning paths, and provides personalized career recommendations.",
    tags: ["Next.js", "TypeScript", "Gemini AI", "Prisma", "Tailwind CSS"],
  },
  {
    title: "EntreConnect",
    description:
      "Empowering young startup founders with mentorship, industry connections, and AI-driven growth tools.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    codeUrl: "https://github.com/satvikpathak/pec-hackathon/tree/main",
  },
  {
    title: "Compliance Portal",
    description:
      "Full-stack regulatory compliance management system with document tracking, audit trails, and automated reporting.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
  },
  {
    title: "Hackathon Club Website",
    description:
      "A fully functioning talent sharing and hackathon locating website at your disposal.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://hc-frontend-five.vercel.app/",
    image: "/projects/hackathon-club.png",
  },
  {
    title: "Email Assistant",
    description:
      "AI-powered Gmail helper that provides intelligent email management, smart replies, and inbox organization.",
    tags: ["Next.js", "TypeScript", "Gemini AI", "Gmail API", "Tailwind CSS"],
    liveUrl: "https://email-assistant-roan.vercel.app/",
    image: "/projects/email-assistant.png",
  },
];

export default function ProjectsSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass rounded-2xl overflow-hidden group
                       hover:shadow-xl hover:shadow-[var(--primary)]/10
                       transition-all duration-500 flex flex-col"
          >
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
            />

            {/* Project screenshot or placeholder */}
            {project.image ? (
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 60%, var(--card))" }}
                />
              </div>
            ) : (
              <div
                className="w-full h-44 flex items-center justify-center"
                style={{ background: "var(--card)", borderBottom: "1px solid var(--card-border)" }}
              >
                <span className="text-xs font-mono tracking-wider uppercase" style={{ color: "var(--muted)" }}>
                  Currently Under Development
                </span>
              </div>
            )}

            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--muted)" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--card-border)",
                      color: "var(--primary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg
                               transition-all duration-300 hover:scale-105 text-white"
                    style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                  >
                    <HiExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg
                               border transition-all duration-300 hover:scale-105"
                    style={{ borderColor: "var(--card-border)", color: "var(--foreground)" }}
                  >
                    <HiCode className="w-3.5 h-3.5" /> Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
