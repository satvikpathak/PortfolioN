"use client";

import { IconCloud } from "@/components/ui/icon-cloud";
import { useTheme } from "@/components/ThemeProvider";

const slugs = [
  // Frontend
  "nextdotjs",
  "react",
  "typescript",
  "javascript",
  "html5",
  "css3",
  "tailwindcss",
  "shadcnui",
  "framer",
  // Backend
  "nodedotjs",
  "express",
  "prisma",
  // Databases
  "mongodb",
  "mysql",
  "postgresql",
  "neon",
  // DevOps & Cloud
  "docker",
  "amazonaws",
  "vercel",
  // AI / Research
  "python",
  "tensorflow",
  // Core CS
  "cplusplus",
  "leetcode",
  // Environment & Tools
  "git",
  "github",
  "linux",
  "windows11",
  "vmware",
];

export default function TechStackSection() {
  const { theme } = useTheme();
  const iconColor = theme === "light" ? "1a1816" : "e8e4de";

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${iconColor}`
  );

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden"
         style={{ height: "calc(100vh - 220px)" }}>
      <IconCloud images={images} />
    </div>
  );
}
