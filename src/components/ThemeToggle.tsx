"use client";

import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full transition-all duration-300 hover:scale-110
                 bg-white/10 hover:bg-white/20 backdrop-blur-sm
                 border border-white/10"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun className="w-5 h-5" style={{ color: "var(--foreground)" }} />
      ) : (
        <FiMoon className="w-5 h-5" style={{ color: "var(--foreground)" }} />
      )}
    </button>
  );
}
