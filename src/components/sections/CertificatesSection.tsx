"use client";

import { HiExternalLink } from "react-icons/hi";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const certificates: Certificate[] = [
  { title: "CyberthonAI Hackathon", issuer: "National Level AI Hackathon", date: "2025", link: "#" },
  { title: "DRDO Internship", issuer: "Defence Research & Development Organisation", date: "2025", link: "/drdo.pdf" },
  { title: "Full Stack Web Development", issuer: "Udemy", date: "2024", link: "/udemy.pdf" },
  { title: "C++ Programming Certificate", issuer: "Coursera", date: "2024", link: "#" },
];

export default function CertificatesSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certificates.map((cert) => (
          <a
            key={cert.title}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl p-6 group block
                       hover:shadow-lg hover:shadow-[var(--primary)]/10
                       transition-all duration-300"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4
                         transition-transform duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, var(--foreground), var(--accent))" }}
            >
              <HiExternalLink className="w-5 h-5" style={{ color: "var(--background)" }} />
            </div>

            <h3 className="text-sm sm:text-base font-bold mb-1" style={{ color: "var(--foreground)" }}>
              {cert.title}
            </h3>
            <p className="text-xs sm:text-sm mb-1" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              {cert.issuer}
            </p>
            <p className="text-xs font-mono" style={{ color: "var(--foreground)", opacity: 0.5 }}>
              {cert.date}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
