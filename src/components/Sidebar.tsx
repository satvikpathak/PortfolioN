"use client";

import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";
import {
  HiHome,
  HiCode,
  HiFolder,
  HiStar,
  HiAcademicCap,
  HiMail,
} from "react-icons/hi";
import type { SectionId } from "./ClientShell";
import type { IconType } from "react-icons";

interface SidebarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

interface NavItem {
  label: string;
  id: SectionId;
  icon: IconType;
}

const navLinks: NavItem[] = [
  { label: "Home", id: "home", icon: HiHome },
  { label: "Tech Stack", id: "techstack", icon: HiCode },
  { label: "Projects", id: "projects", icon: HiFolder },
  { label: "Experience", id: "experience", icon: HiStar },
  { label: "Certificates", id: "certificates", icon: HiAcademicCap },
  { label: "Contact", id: "contact", icon: HiMail },
];

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* ── Desktop: floating bullet nav on the left ── */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full z-50 flex-col justify-between py-10 px-5 w-48">
        {/* Nav items — clean bullets, no background panel */}
        <nav className="mt-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                            transition-all duration-200 text-left
                  ${
                    isActive
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
              >
                {/* Bullet dot */}
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200"
                  style={{
                    background: isActive ? "var(--foreground)" : "var(--muted)",
                    transform: isActive ? "scale(1.4)" : "scale(1)",
                  }}
                />
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Theme toggle */}
        <div className="flex flex-col items-start gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200
                       text-[var(--muted)] hover:text-[var(--foreground)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <>
                <FiSun className="w-3.5 h-3.5" />
                <span className="tracking-widest uppercase">Light</span>
              </>
            ) : (
              <>
                <FiMoon className="w-3.5 h-3.5" />
                <span className="tracking-widest uppercase">Dark</span>
              </>
            )}
          </button>
          {theme === "light" && (
            <span
              className="text-[9px] leading-tight px-3 opacity-50"
              style={{ color: "var(--muted)" }}
            >
              Switch to dark mode for best experience
            </span>
          )}
        </div>
      </aside>

      {/* ── Mobile: fixed bottom bar with icons ── */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around
                   py-2 px-1"
        style={{
          background: "var(--sidebar-bg)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid var(--card-border)",
        }}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          const Icon = link.icon;
          return (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg transition-all duration-200
                ${
                  isActive
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted)]"
                }`}
              aria-label={link.label}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[8px] font-medium leading-none">{link.label}</span>
            </button>
          );
        })}

        {/* Theme toggle in mobile bar */}
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg transition-all duration-200
                     text-[var(--muted)]"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <FiSun className="w-5 h-5" />
          ) : (
            <FiMoon className="w-5 h-5" />
          )}
          <span className="text-[8px] font-medium leading-none">Theme</span>
        </button>
      </nav>
    </>
  );
}
