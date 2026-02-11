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
    icon: HiAcademicCap,
    title: "B.Tech — Computer Science & Engineering",
    subtitle: "2nd Year • Undergraduate",
    description:
      "Building a strong foundation in programming languages like C, C++, JavaScript, and Python. Continuously improving skills in Data Structures and Algorithms (DSA) while diving into backend development with Node.js and the MERN stack.",
    period: "2023 – Present",
  },
  {
    icon: HiCode,
    title: "MERN Stack Development",
    subtitle: "Full Stack Web Development",
    description:
      "Focused on mastering the MERN stack (MongoDB, Express, React, Node.js). Building real-world projects including ecommerce layouts, hackathon platforms, and interactive web applications.",
    period: "2024 – Present",
  },
  {
    icon: HiStar,
    title: "Open Source & Problem Solving",
    subtitle: "GitHub • LeetCode",
    description:
      "Actively contributing to GitHub with exciting projects and practicing problem-solving on LeetCode. Enjoy building innovative solutions and learning new technologies to stay ahead in the fast-paced tech world.",
    period: "2024 – Present",
  },
];

export default function ExperienceSection() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Achievements & <span className="gradient-text">Education</span>
        </h1>
        <p className="text-sm sm:text-base mt-3" style={{ color: "var(--muted)" }}>
          My academic journey and milestones.
        </p>
      </div>

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
