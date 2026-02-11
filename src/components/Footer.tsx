"use client";

import { FiGithub, FiLinkedin, FiYoutube, FiHeart } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: "https://github.com/satvik", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/satvik", label: "LinkedIn" },
  { icon: FiYoutube, href: "https://youtube.com/@satvik", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      className="py-8 section-padding border-t"
      style={{ borderColor: "var(--card-border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm flex items-center gap-1" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Satvik. Built with
          <FiHeart className="w-3.5 h-3.5 text-red-400 inline" />
          & Next.js
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 rounded-lg transition-all duration-300 hover:scale-110
                         hover:bg-white/5"
              style={{ color: "var(--muted)" }}
            >
              <social.icon className="w-5 h-5 hover:text-[var(--primary)] transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
