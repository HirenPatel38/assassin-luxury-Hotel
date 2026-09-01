"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase("reveal");
          setTimeout(onComplete, 1200);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "#0a0a0a" }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 60%)",
            }}
          />

          {/* Brand mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 flex flex-col items-center gap-6"
          >
            {/* Logo text */}
            <h1
              className="text-6xl md:text-8xl tracking-[0.3em] font-light"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-gold)",
                textShadow: "0 0 60px rgba(201,168,76,0.2)",
              }}
            >
              ASSASSIN
            </h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-4 text-xs tracking-[0.4em] uppercase"
              style={{ color: "var(--color-smoke)" }}
            >
              <span>Luxury</span>
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--color-gold)" }} />
              <span>Privacy</span>
              <span className="w-1 h-1 rounded-full" style={{ background: "var(--color-gold)" }} />
              <span>Experience</span>
            </motion.div>

            {/* Progress bar */}
            <div className="mt-12 w-48 h-[1px] relative" style={{ background: "rgba(201,168,76,0.15)" }}>
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{
                  background: "linear-gradient(90deg, var(--color-gold-dark), var(--color-gold))",
                  width: `${progress}%`,
                }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Progress number */}
            <motion.span
              className="text-xs tracking-widest"
              style={{ color: "var(--color-smoke)" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {String(Math.min(progress, 100)).padStart(3, "0")}
            </motion.span>
          </motion.div>

          {/* Corner accents */}
          <div
            className="absolute top-8 left-8 w-8 h-8 border-t border-l"
            style={{ borderColor: "rgba(201,168,76,0.3)" }}
          />
          <div
            className="absolute top-8 right-8 w-8 h-8 border-t border-r"
            style={{ borderColor: "rgba(201,168,76,0.3)" }}
          />
          <div
            className="absolute bottom-8 left-8 w-8 h-8 border-b border-l"
            style={{ borderColor: "rgba(201,168,76,0.3)" }}
          />
          <div
            className="absolute bottom-8 right-8 w-8 h-8 border-b border-r"
            style={{ borderColor: "rgba(201,168,76,0.3)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
