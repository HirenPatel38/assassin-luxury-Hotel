"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Rooms", path: "/rooms" },
  { label: "Experience", path: "/experience" },
  { label: "Dining", path: "/dining" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const isScrolled = scrollY > 50;

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Navbar */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          background: isScrolled
            ? "rgba(10, 10, 10, 0.85)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(201,168,76,0.1)" : "1px solid transparent",
        }}
      >
        <div className="container-assassin flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <span
              className="text-xl md:text-2xl tracking-[0.25em] font-light"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-gold)",
              }}
            >
              ASSASSIN
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-[13px] tracking-[0.12em] uppercase transition-colors duration-300"
                style={{
                  color:
                    location.pathname === link.path
                      ? "var(--color-gold)"
                      : "var(--color-mist)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-gold)";
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.path) {
                    e.currentTarget.style.color = "var(--color-mist)";
                  }
                }}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-[1px]"
                    style={{ background: "var(--color-gold)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/book"
              className="btn-primary !py-3 !px-8 text-[11px]"
            >
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-10 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X size={24} color="var(--color-gold)" />
            ) : (
              <Menu size={24} color="var(--color-gold)" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "rgba(10, 10, 10, 0.97)" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className="text-2xl tracking-[0.2em] uppercase transition-colors"
                    style={{
                      fontFamily: "var(--font-display)",
                      color:
                        location.pathname === link.path
                          ? "var(--color-gold)"
                          : "var(--color-pearl)",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Book CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.5 }}
                className="mt-8"
              >
                <Link
                  to="/book"
                  className="btn-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Book Your Stay</span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
