"use client";

import { motion } from "framer-motion";
import AboutTimeline from "@/components/about/AboutTimeline";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, #0a0a0a 70%)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <span className="label block mb-4">Our Story</span>
          <h1 className="heading-hero">About</h1>
          <div className="divider-gold mx-auto mt-6" />
        </div>
      </section>

      <AboutTimeline />
    </motion.main>
  );
}
