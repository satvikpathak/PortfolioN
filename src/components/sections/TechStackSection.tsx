"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiC,
  SiPython,
  SiWordpress,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Tech {
  name: string;
  icon: IconType;
  desc: string;
}

const techs: Tech[] = [
  { name: "HTML5", icon: SiHtml5, desc: "Markup & semantic structure" },
  { name: "CSS3", icon: SiCss3, desc: "Styling & responsive design" },
  { name: "JavaScript", icon: SiJavascript, desc: "Core web programming language" },
  { name: "Tailwind CSS", icon: SiTailwindcss, desc: "Utility-first CSS framework" },
  { name: "Bootstrap", icon: SiBootstrap, desc: "Component-based CSS framework" },
  { name: "React", icon: SiReact, desc: "UI component library" },
  { name: "Node.js", icon: SiNodedotjs, desc: "Server-side JavaScript runtime" },
  { name: "Git", icon: SiGit, desc: "Version control system" },
  { name: "GitHub", icon: SiGithub, desc: "Code hosting & collaboration" },
  { name: "C++", icon: SiCplusplus, desc: "Systems & competitive programming" },
  { name: "C", icon: SiC, desc: "Low-level systems programming" },
  { name: "Python", icon: SiPython, desc: "Scripting & automation" },
  { name: "WordPress", icon: SiWordpress, desc: "CMS & website builder" },
];

export default function TechStackSection() {
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {techs.map((tech, i) => (
          <div
            key={tech.name}
            className="glass rounded-2xl p-5 flex items-start gap-4 group
                       hover:shadow-lg hover:shadow-[var(--primary)]/10
                       transition-all duration-300 cursor-default"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center
                         transition-transform duration-300 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
            >
              <tech.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold" style={{ color: "var(--foreground)" }}>
                {tech.name}
              </h3>
              <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                {tech.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
