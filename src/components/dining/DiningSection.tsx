"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { menuCategories } from "@/data/menu";
import { X } from "lucide-react";

const diningImages = [
  {
    title: "Restaurant",
    subtitle: "Fine Dining",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
  },
  {
    title: "Rooftop Bar",
    subtitle: "Cocktails & Views",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
  },
  {
    title: "Private Dining",
    subtitle: "Exclusive Events",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  },
  {
    title: "Breakfast",
    subtitle: "Morning Ritual",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=600&fit=crop",
  },
];

function MenuModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState("breakfast");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ background: "rgba(10,10,10,0.95)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Dining menu"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-3xl max-h-[80vh] overflow-auto"
            style={{
              background: "var(--color-midnight)",
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: "var(--radius-md)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
              <div>
                <h3
                  className="text-2xl md:text-3xl"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
                >
                  Menu
                </h3>
                <p className="text-sm mt-1" style={{ color: "var(--color-smoke)" }}>
                  Culinary Artistry
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
                style={{
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "var(--color-mist)",
                }}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto gap-1 p-4 md:px-8" style={{ borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase whitespace-nowrap transition-all duration-300"
                  style={{
                    background:
                      activeTab === cat.id
                        ? "var(--color-gold)"
                        : "transparent",
                    color:
                      activeTab === cat.id
                        ? "var(--color-obsidian)"
                        : "var(--color-mist)",
                    borderRadius: "var(--radius-xs)",
                    fontWeight: activeTab === cat.id ? 600 : 400,
                  }}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="p-6 md:p-8 space-y-6">
              {menuCategories
                .find((c) => c.id === activeTab)
                ?.items.map((item, i) => (
                  <motion.div
                    key={`${activeTab}-${i}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start justify-between gap-4"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "16px" }}
                  >
                    <div className="flex-1">
                      <h4
                        className="text-base font-medium mb-1"
                        style={{ color: "var(--color-pearl)", fontFamily: "var(--font-display)" }}
                      >
                        {item.name}
                      </h4>
                      <p className="text-sm" style={{ color: "var(--color-smoke)" }}>
                        {item.description}
                      </p>
                    </div>
                    <span
                      className="text-sm font-semibold whitespace-nowrap pt-1"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {item.price}
                    </span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function DiningSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <section className="section" style={{ background: "#080808" }}>
        <div className="container-assassin">
          {/* Header */}
          <div ref={ref} className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="label block mb-4"
            >
              Gastronomy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-section"
            >
              Culinary Artistry
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="divider-gold mx-auto mt-6"
            />
          </div>

          {/* Dining Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diningImages.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group cursor-image"
              >
                <div
                  className="relative overflow-hidden mb-4"
                  style={{ aspectRatio: "3/4", borderRadius: "var(--radius-sm)" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "rgba(10,10,10,0.8)",
                    }}
                  >
                    <span className="label mb-2">{item.subtitle}</span>
                    <h3
                      className="text-xl"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-gold)",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
                <h3
                  className="text-lg mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-pearl)",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-smoke)" }}>
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* View Menu CTA */}
          <div className="text-center mt-12">
            <button
              className="btn-primary"
              onClick={() => setMenuOpen(true)}
            >
              <span>View Menu</span>
            </button>
          </div>
        </div>
      </section>

      <MenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
