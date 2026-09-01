"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { experiences } from "@/data/experiences";

function ExperienceItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["20px", "0px"]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isEven ? "" : "lg:direction-rtl"
      }`}
    >
      {/* Image */}
      <motion.div
        style={{ scale, borderRadius }}
        className={`overflow-hidden ${isEven ? "" : "lg:order-2"}`}
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(10,10,10,0.3) 0%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* Text */}
      <div className={`${isEven ? "" : "lg:order-1 lg:text-right"}`}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="label block mb-4"
        >
          0{index + 1} — Experience
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-sub mb-4"
        >
          {experience.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base leading-relaxed max-w-lg"
          style={{ color: "var(--color-smoke)" }}
        >
          {experience.description}
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="divider-gold mt-6"
          style={{ marginLeft: isEven ? 0 : "auto", marginRight: isEven ? "auto" : 0 }}
        />
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section" style={{ background: "#0a0a0a" }}>
      <div className="container-assassin">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="label block mb-4"
          >
            Curated Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-section"
          >
            The Assassin Experience
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="divider-gold mx-auto mt-6"
          />
        </div>

        {/* Experience Items */}
        <div className="space-y-24 md:space-y-32">
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
