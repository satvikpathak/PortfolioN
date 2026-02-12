"use client";

import { HiAcademicCap, HiCode, HiStar } from "react-icons/hi";
import type { IconType } from "react-icons";

interface TimelineItem {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  period: string;
}

const timeline: TimelineItem[] = [
  {
    icon: HiStar,
    title: "IPD Expo Winner — 2024 & 2025",
    subtitle: "CCET, Sector 26, Chandigarh",
    description:
      "Won the IPD Expo consecutively in 2024 and 2025 at Chandigarh College of Engineering & Technology (CCET), Sector 26, Chandigarh.",
    period: "2024 – 2025",
  },
  {
    icon: HiStar,
    title: "CyberthonAI — National Hackathon Winner",
    subtitle: "1st Place out of 82 Teams",
    description:
      "Won CyberthonAI, a national-level hackathon organized by Infosys in collaboration with PEC-CRC and Chandigarh Police. Secured 1st place competing against 82 teams from across the country.",
    period: "2025",
  },
  {
    icon: HiCode,
    title: "Full Stack Intern — DRDO, Jodhpur",
    subtitle: "Defence Research & Development Organisation",
    description:
      "Completed a one-month remote internship as a Full Stack Developer at DRDO Jodhpur, working on internal tools and web applications for defence research operations.",
    period: "2025",
  },
  {
    icon: HiAcademicCap,
    title: "B.Tech — Computer Science & Engineering",
    subtitle: "3rd Year • Undergraduate",
    description:
      "Building a strong foundation in C, C++, JavaScript, and Python. Continuously improving skills in Data Structures & Algorithms while diving into full-stack development with Next.js and the MERN stack.",
    period: "2023 – Present",
  },
];

export default function ExperienceSection() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <div
          className="absolute left-[11px] top-2 bottom-2 w-px"
          style={{ background: "var(--card-border)" }}
        />

        <div className="space-y-6">
          {timeline.map((item) => (
            <div key={item.title} className="relative pl-10">
              <div
                className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
              >
                <item.icon className="w-3 h-3 text-white" />
              </div>

              <div className="glass rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1.5">
                  <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono mt-1 sm:mt-0" style={{ color: "var(--primary)" }}>
                    {item.period}
                  </span>
                </div>
                <p className="text-xs font-medium mb-2" style={{ color: "var(--primary)" }}>
                  {item.subtitle}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
