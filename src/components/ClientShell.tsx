"use client";

import type { ReactNode } from "react";
import ThemeProvider from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), {
  ssr: false,
});

const TubesCursor = dynamic(() => import("@/components/TubesCursor"), {
  ssr: false,
});

interface ClientShellProps {
  children: ReactNode;
}

export default function ClientShell({ children }: ClientShellProps) {
  return (
    <ThemeProvider>
      <TubesCursor />
      <ParticleBackground />
      <Sidebar />
      {/* Main content area — offset by sidebar on desktop */}
      <main className="md:ml-48 h-screen overflow-y-auto">
        <div className="page-content min-h-screen flex items-center">
          <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
            {children}
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
