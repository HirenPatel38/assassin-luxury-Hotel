"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { timeline, hotelInfo } from "@/data/hotel";

export default function AboutTimeline() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section" style={{ background: "#0a0a0a" }}>
      <div className="container-assassin">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="label block mb-4"
          >
            Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-section"
          >
            The House of Assassin
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="divider-gold mx-auto mt-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto mt-8 text-base leading-relaxed"
            style={{ color: "var(--color-smoke)" }}
          >
            {hotelInfo.description}
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { number: "127", label: "Luxury Rooms" },
            { number: "4", label: "Restaurants" },
            { number: "6", label: "Years of Excellence" },
            { number: "12", label: "World Awards" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <p
                className="text-4xl md:text-5xl mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
              >
                {stat.number}
              </p>
              <p className="text-xs tracking-[0.15em] uppercase" style={{ color: "var(--color-smoke)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-[1px] hidden md:block"
            style={{ background: "rgba(201,168,76,0.2)" }}
          />

          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    isLeft ? "" : "md:direction-rtl"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full hidden md:block z-10"
                    style={{
                      background: "var(--color-gold)",
                      boxShadow: "0 0 20px rgba(201,168,76,0.4)",
                    }}
                  />

                  {/* Content */}
                  <div
                    className={`${isLeft ? "md:text-right md:pr-16" : "md:text-left md:pl-16 md:order-2"}`}
                  >
                    <span
                      className="text-4xl md:text-5xl font-light mb-2 block"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-gold)",
                        opacity: 0.6,
                      }}
                    >
                      {item.year}
                    </span>
                    <h3
                      className="text-xl mb-3"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-pearl)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-smoke)" }}>
                      {item.description}
                    </p>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={`hidden md:block ${isLeft ? "md:order-2" : ""}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Awards */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs tracking-[0.2em] uppercase mb-8"
            style={{ color: "var(--color-gold)" }}
          >
            Recognition & Awards
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hotelInfo.awards.map((award, i) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-6"
                style={{
                  border: "1px solid rgba(201,168,76,0.1)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <p className="text-sm" style={{ color: "var(--color-pearl)" }}>
                  {award}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
