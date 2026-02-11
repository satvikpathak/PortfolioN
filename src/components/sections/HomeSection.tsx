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
          I am an undergrad CSE student with a strong passion for building{" "}
          <strong style={{ color: "var(--foreground)" }}>efficient and scalable web applications</strong>.
          Having learnt front-end technologies like React, HTML, CSS, and JavaScript, along with
          backend technologies such as Node.js and MongoDB, I focus on creating robust solutions
          that deliver seamless user experiences.
        </p>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          Currently, I&apos;m honing my skills in the{" "}
          <strong style={{ color: "var(--foreground)" }}>MERN stack and DSA</strong>, aiming to
          master full stack development and make meaningful contributions to impactful projects.
          My goal is to continuously evolve my skills and craft innovative applications that
          solve real-world problems.
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
