"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type CursorState = "default" | "hover" | "image" | "drag";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='hover']") || target.closest("a") || target.closest("button")) {
        setState("hover");
      } else if (target.closest("[data-cursor='image']") || target.closest(".cursor-image")) {
        setState("image");
      } else if (target.closest("[data-cursor='drag']")) {
        setState("drag");
      } else {
        setState("default");
      }
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [isMobile, visible]);

  if (isMobile) return null;

  const sizeMap: Record<CursorState, { outer: number; inner: number }> = {
    default: { outer: 32, inner: 6 },
    hover: { outer: 64, inner: 20 },
    image: { outer: 80, inner: 28 },
    drag: { outer: 72, inner: 24 },
  };

  const labelMap: Record<CursorState, string> = {
    default: "",
    hover: "VIEW",
    image: "EXPLORE",
    drag: "DRAG",
  };

  const size = sizeMap[state];

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ mixBlendMode: "difference" }}
    >
      {/* Outer ring */}
      <motion.div
        className="absolute rounded-full border flex items-center justify-center"
        style={{
          borderColor: "var(--color-gold)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          left: position.x,
          top: position.y,
          width: size.outer,
          height: size.outer,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        {labelMap[state] && (
          <motion.span
            className="text-[8px] font-semibold tracking-widest uppercase"
            style={{ color: "var(--color-gold)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {labelMap[state]}
          </motion.span>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="absolute rounded-full"
        style={{
          background: "var(--color-gold)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          left: position.x,
          top: position.y,
          width: size.inner,
          height: size.inner,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.3,
        }}
      />
    </div>
  );
}
