"use client";

import ClientShell from "@/components/ClientShell";
import { HiExternalLink, HiCode } from "react-icons/hi";

const projects = [
  {
    title: "Career Pathfinder",
    description:
      "A full-stack AI-integrated career guidance platform that helps users discover optimal career paths through intelligent assessments, personalized recommendations, and AWS-powered resource aggregation.",
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

export default function ProjectsPage() {
  return (
    <ClientShell>
      <div className="space-y-10">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-sm sm:text-base mt-3" style={{ color: "var(--muted)" }}>
            Real-world applications built with modern tech stacks.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden group
                         hover:shadow-xl hover:shadow-[var(--primary)]/10
                         transition-all duration-500"
            >
              {/* Gradient accent bar */}
              <div
                className="h-1 w-full"
                style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
              />
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full"
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

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg
                                 transition-all duration-300 hover:scale-105 text-white"
                      style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                    >
                      <HiExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg
                                 border transition-all duration-300 hover:scale-105"
                      style={{ borderColor: "var(--card-border)", color: "var(--foreground)" }}
                    >
                      <HiCode className="w-4 h-4" /> Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ClientShell>
  );
}
