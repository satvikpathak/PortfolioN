"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface TubesCursorApp {
  tubes: {
    setColors: (colors: string[]) => void;
    setLightsColors: (colors: string[]) => void;
  };
  dispose?: () => void;
}

export default function TubesCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<TubesCursorApp | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!canvasRef.current) return;

    let destroyed = false;

    async function init() {
      try {
        const module = await import(
          /* webpackIgnore: true */
          // @ts-expect-error -- External CDN module without type declarations
          "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
        );
        const TubesCursorInit = module.default as (
          canvas: HTMLCanvasElement,
          options: Record<string, unknown>
        ) => TubesCursorApp;

        if (destroyed) return;

        const app = TubesCursorInit(canvasRef.current!, {
          tubes: {
            colors: ["#f967fb", "#53bc28", "#6958d5"],
            lights: {
              intensity: 200,
              colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
            },
          },
        });

        appRef.current = app;
      } catch (err) {
        console.error("TubesCursor failed to load:", err);
      }
    }

    init();

    return () => {
      destroyed = true;
      if (appRef.current?.dispose) {
        appRef.current.dispose();
        appRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="tubes-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "auto",
        overflow: "hidden",
        mixBlendMode: "screen",
      }}
    />
  );
}
