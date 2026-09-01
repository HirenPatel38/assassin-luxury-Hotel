"use client";

import { motion } from "framer-motion";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#0a0a0a" }}
    >
      <div className="text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-8xl md:text-[10rem] font-light mb-4"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-gold)",
            opacity: 0.3,
            lineHeight: 1,
          }}
        >
          404
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="heading-section mb-4"
        >
          Room Not Found
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="divider-gold mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm mb-8 max-w-md mx-auto"
          style={{ color: "var(--color-smoke)" }}
        >
          The page you are looking for does not exist or has been moved.
          Let us guide you back to a place of luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/" className="btn-primary">
            <span>Return Home</span>
          </Link>
          <Link to="/contact" className="btn-outline">
            <span>Contact Us</span>
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
