"use client";

import { motion } from "framer-motion";
import { HiAcademicCap, HiShieldCheck, HiStar, HiTrendingUp } from "react-icons/hi";

const timeline = [
  {
    icon: HiAcademicCap,
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "7th Semester • 8.5 CGPA",
    description:
      "Specializing in full-stack development, cloud computing, and AI/ML applications. Consistently on the Dean's list with a focus on building production-grade software.",
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

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Achievements & <span className="gradient-text">Education</span>
          </h2>
          <p className="max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            My academic journey and milestones.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-px"
            style={{ background: "var(--card-border)" }}
          />

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Dot */}
                <div
                  className="absolute left-2 sm:left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--primary), var(--accent))",
                  }}
                >
                  <item.icon className="w-3 h-3 text-white" />
                </div>

                <div className="glass rounded-xl p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
                      {item.title}
                    </h3>
                    <span
                      className="text-xs font-mono mt-1 sm:mt-0"
                      style={{ color: "var(--primary)" }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-2" style={{ color: "var(--primary)" }}>
                    {item.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
