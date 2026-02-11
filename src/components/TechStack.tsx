"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiAmazonwebservices,
  SiPrisma,
  SiGooglegemini,
} from "react-icons/si";
import { TbDatabase, TbMathFunction } from "react-icons/tb";

const techs = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "Neon DB", icon: TbDatabase },
  { name: "Prisma", icon: SiPrisma },
  { name: "Gemini API", icon: SiGooglegemini },
  { name: "MATLAB", icon: TbMathFunction },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass rounded-2xl p-6 flex flex-col items-center gap-3
                         cursor-default transition-shadow duration-300
                         hover:shadow-lg hover:shadow-[var(--primary)]/10"
            >
              <tech.icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: "var(--primary)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
