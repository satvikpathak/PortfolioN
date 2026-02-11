"use client";

import ClientShell from "@/components/ClientShell";
import { FiFileText, FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";

const socials = [
  { icon: FiFileText, href: "/resume.pdf", label: "Resume" },
  { icon: FiGithub, href: "https://github.com/satvik", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/satvik", label: "LinkedIn" },
  { icon: FiYoutube, href: "https://youtube.com/@satvik", label: "YouTube" },
];

export default function HomePage() {
  return (
    <ClientShell>
      <div className="space-y-8">
        {/* Name */}
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="gradient-text">Satvik</span>
          </h1>
          <p className="text-base sm:text-lg mt-2" style={{ color: "var(--muted)" }}>
            Full-Stack Developer & CSE Student
          </p>
        </div>

        {/* Welcome block */}
        <div className="max-w-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Welcome</h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            I&apos;m a developer passionate about building{" "}
            <strong style={{ color: "var(--foreground)" }}>intelligent, cloud-native applications</strong>{" "}
            that solve real-world problems. From AI-integrated career guidance platforms to
            automated client acquisition pipelines, I craft full-stack solutions with{" "}
            <strong style={{ color: "var(--foreground)" }}>Next.js, AWS, and modern AI APIs</strong>.
          </p>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Currently a 7th-semester CSE student with an{" "}
            <strong style={{ color: "var(--foreground)" }}>8.5 CGPA</strong>, preparing for the{" "}
            <strong style={{ color: "var(--foreground)" }}>TGC-144 Indian Army</strong> entry.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 pt-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-3 rounded-xl glass transition-all duration-300
                         hover:scale-110 hover:shadow-lg hover:shadow-[var(--primary)]/15"
              style={{ color: "var(--muted)" }}
            >
              <s.icon className="w-5 h-5 hover:text-[var(--primary)] transition-colors" />
            </a>
          ))}
        </div>

        {/* Contact teaser */}
        <div className="pt-4">
          <h3 className="text-lg font-semibold mb-2">Contact Me</h3>
          <a
            href="mailto:satvik@example.com"
            className="text-sm transition-colors duration-200 hover:text-[var(--primary)]"
            style={{ color: "var(--muted)" }}
          >
            satvik@example.com
          </a>
        </div>
      </div>
    </ClientShell>
  );
}
