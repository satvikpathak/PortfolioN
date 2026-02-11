"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { HiArrowDown, HiDocumentDownload } from "react-icons/hi";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base font-mono tracking-widest uppercase mb-4"
            style={{ color: "var(--muted)" }}
          >
            Hello, I&apos;m
          </motion.p>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Satvik Pathak</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl font-light mb-2"
            style={{ color: "var(--foreground)" }}
          >
            CSE Student{" "}
            <span style={{ color: "var(--muted)" }}>•</span>{" "}
            Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm sm:text-base max-w-lg mx-auto mb-8"
            style={{ color: "var(--muted)" }}
          >
            Building intelligent, cloud-native applications that solve real-world problems.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-medium
                       text-white transition-all duration-300 hover:scale-105 hover:shadow-lg
                       hover:shadow-[var(--primary)]/25"
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--accent))",
            }}
          >
            View Projects
            <HiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-medium
                       border transition-all duration-300 hover:scale-105 glass"
            style={{
              color: "var(--foreground)",
              borderColor: "var(--card-border)",
            }}
          >
            <HiDocumentDownload className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
            style={{ borderColor: "var(--muted)" }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--primary)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
