"use client";

import { motion } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, liveUrl, codeUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass rounded-2xl overflow-hidden group hover:shadow-xl
                 hover:shadow-[var(--primary)]/10 transition-all duration-500"
    >
      {/* Gradient header bar */}
      <div
        className="h-1.5 w-full"
        style={{
          background: "linear-gradient(90deg, var(--primary), var(--accent))",
        }}
      />

      <div className="p-6 sm:p-8">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
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
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg
                         transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--accent))",
                color: "white",
              }}
            >
              <HiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg
                         border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "var(--card-border)",
                color: "var(--foreground)",
              }}
            >
              <HiCode className="w-4 h-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
