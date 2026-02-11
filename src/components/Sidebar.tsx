"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tech Stack", href: "/techstack" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-5 left-5 z-[60] md:hidden p-2.5 rounded-xl glass"
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <FiX className="w-5 h-5" style={{ color: "var(--foreground)" }} />
        ) : (
          <FiMenu className="w-5 h-5" style={{ color: "var(--foreground)" }} />
        )}
      </button>

      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[49] bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 flex flex-col justify-between
                     py-10 px-5 w-48 transition-transform duration-300
                     md:translate-x-0
                     ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ background: "var(--sidebar-bg)", backdropFilter: "blur(20px)" }}
      >
        {/* Nav links */}
        <nav className="mt-14 md:mt-6 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "text-[var(--primary)] bg-[var(--primary)]/8"
                      : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-white/5"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Theme toggle at bottom */}
        <div className="flex flex-col items-start gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200
                       text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-white/5"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <>
                <FiSun className="w-3.5 h-3.5" />
                <span className="tracking-widest uppercase" style={{ writingMode: "horizontal-tb" }}>
                  Light
                </span>
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
    </>
  );
}
