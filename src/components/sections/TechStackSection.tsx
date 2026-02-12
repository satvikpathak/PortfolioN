"use client";

import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "html5",
  "css3",
  "javascript",
  "tailwindcss",
  "bootstrap",
  "react",
  "nodedotjs",
  "git",
  "github",
  "cplusplus",
  "c",
  "python",
  "wordpress",
  "nextdotjs",
  "prisma",
  "mongodb",
  "typescript",
  "postgresql",
  "vercel",
];

export default function TechStackSection() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Tech <span className="gradient-text">Stack</span> & Tools
        </h1>
        <p className="text-sm sm:text-base mt-3" style={{ color: "var(--muted)" }}>
          The technologies and tools I use to bring ideas to life.
        </p>
      </div>

      <div className="relative flex size-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
    </div>
  );
}
