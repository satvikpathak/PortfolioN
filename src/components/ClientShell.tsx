"use client";

import ThemeProvider from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import HomeSection from "@/components/sections/HomeSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";

const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), {
  ssr: false,
});

const TubesCursor = dynamic(() => import("@/components/TubesCursor"), {
  ssr: false,
});

export type SectionId = "home" | "techstack" | "projects" | "experience" | "certificates" | "contact";

const sectionComponents: Record<SectionId, React.ComponentType> = {
  home: HomeSection,
  techstack: TechStackSection,
  projects: ProjectsSection,
  experience: ExperienceSection,
  certificates: CertificatesSection,
  contact: ContactSection,
};

export default function ClientShell() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const ActiveComponent = sectionComponents[activeSection];

  return (
    <ThemeProvider>
      <TubesCursor />
      <ParticleBackground />
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />

      <main className="md:ml-48 h-screen flex flex-col pb-16 md:pb-0">
        {/* Persistent header — slides left on non-home sections */}
        <motion.div
          layout
          className={`flex-shrink-0 w-full px-6 sm:px-10 lg:px-16 pt-12 sm:pt-16 pb-4 ${
            activeSection === "home" ? "max-w-5xl mx-auto" : ""
          }`}
          transition={{ layout: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="gradient-text">Satvik Pathak</span>
          </h1>
          <p className="text-sm sm:text-base mt-1.5" style={{ color: "var(--muted)" }}>
            Developer
          </p>
        </motion.div>

        {/* Scrollable section content */}
        <div className="flex-1 overflow-y-auto">
          <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-6 pb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
