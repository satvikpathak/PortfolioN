"use client";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: FiGithub, href: "https://github.com/satvikpathak", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/satvik-pathak-601833331/", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/satvikpathak007", label: "X" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/satvikpathak007/", label: "LeetCode" },
];

export default function HomeSection() {
  return (
    <div className="space-y-8">
      {/* Welcome / About */}
      <div className="max-w-2xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          I&apos;m a <strong style={{ color: "var(--foreground)" }}>Full Stack Developer</strong> focused
          on building scalable, real-world digital solutions. As a{" "}
          <strong style={{ color: "var(--foreground)" }}>National Hackathon Winner</strong>, I design
          and develop <strong style={{ color: "var(--foreground)" }}>complete web applications</strong>, from intuitive frontends to robust backend
          architectures, delivering <strong style={{ color: "var(--foreground)" }}>high-performance products</strong> that prioritize usability,
          efficiency, and impact.
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
          href="mailto:satvikpathak007@gmail.com"
          className="text-sm transition-colors duration-200 hover:text-[var(--primary)]"
          style={{ color: "var(--muted)" }}
        >
          satvikpathak007@gmail.com
        </a>
      </div>
    </div>
  );
}
