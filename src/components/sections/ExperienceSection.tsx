"use client";

import { HiAcademicCap, HiShieldCheck, HiStar, HiTrendingUp } from "react-icons/hi";
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
    subtitle: "7th Semester • 8.5 CGPA",
    description:
      "Specializing in full-stack development, cloud computing, and AI/ML. Consistently on the Dean's list with a focus on building production-grade software.",
    period: "2022 – Present",
  },
  {
    icon: HiShieldCheck,
    title: "TGC-144 Indian Army Entry",
    subtitle: "Technical Graduate Commission",
    description:
      "Actively preparing for the TGC-144 entry to serve in the Indian Army as a Technical Officer, combining engineering expertise with national service.",
    period: "2025",
  },
  {
    icon: HiStar,
    title: "Full-Stack AI Applications",
    subtitle: "Career Pathfinder • AutoClient",
    description:
      "Designed and deployed AI-integrated platforms using AWS, Gemini API, and modern web frameworks, demonstrating end-to-end product development capability.",
    period: "2024 – Present",
  },
  {
    icon: HiTrendingUp,
    title: "Cloud & DevOps Proficiency",
    subtitle: "AWS • Serverless • CI/CD",
    description:
      "Built serverless architectures with AWS Lambda, DynamoDB, and S3. Experienced in infrastructure-as-code and automated deployment pipelines.",
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
