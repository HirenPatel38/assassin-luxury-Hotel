"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto transition
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [inView, next]);

  const testimonial = testimonials[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="section" style={{ background: "#080808" }}>
      <div className="container-assassin">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="label block mb-4"
          >
            Guest Voices
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-section"
          >
            Testimonials
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="divider-gold mx-auto mt-6"
          />
        </div>

        {/* Slider */}
        <div className="max-w-3xl mx-auto relative">
          {/* Quote icon */}
          <Quote
            size={48}
            className="mx-auto mb-8 opacity-20"
            style={{ color: "var(--color-gold)" }}
          />

          <div className="min-h-[280px] md:min-h-[240px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center"
              >
                <p
                  className="text-lg md:text-xl leading-relaxed mb-8 italic"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-pearl)",
                  }}
                >
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      color: "var(--color-gold)",
                      border: "1px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium" style={{ color: "var(--color-pearl)" }}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-smoke)" }}>
                      {testimonial.title} · {testimonial.stayDate}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} style={{ color: "var(--color-gold)", fontSize: "14px" }}>
                      ★
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all hover:scale-110"
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                color: "var(--color-mist)",
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="transition-all duration-300"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background:
                      i === current
                        ? "var(--color-gold)"
                        : "rgba(201,168,76,0.2)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all hover:scale-110"
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                color: "var(--color-mist)",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
