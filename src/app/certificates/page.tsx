"use client";

import ClientShell from "@/components/ClientShell";
import { HiExternalLink } from "react-icons/hi";

const certificates = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "#",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    date: "2024",
    link: "#",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "2024",
    link: "#",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "GeeksforGeeks",
    date: "2023",
    link: "#",
  },
];

export default function CertificatesPage() {
  return (
    <ClientShell>
      <div className="space-y-10">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Certificates</span> & Credentials
          </h1>
          <p className="text-sm sm:text-base mt-3" style={{ color: "var(--muted)" }}>
            Professional certifications and completed courses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificates.map((cert, i) => (
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
                style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
              >
                <HiExternalLink className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-sm font-bold mb-1" style={{ color: "var(--foreground)" }}>
                {cert.title}
              </h3>
              <p className="text-xs mb-1" style={{ color: "var(--primary)" }}>
                {cert.issuer}
              </p>
              <p className="text-xs font-mono" style={{ color: "var(--muted)" }}>
                {cert.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </ClientShell>
  );
}
