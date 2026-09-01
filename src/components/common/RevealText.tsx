"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface RevealTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  splitBy?: "words" | "chars";
}

export function RevealText({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  splitBy = "words",
}: RevealTextProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const items = splitBy === "words" ? text.split(" ") : text.split("");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex flex-wrap">
        {items.map((item, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="inline-block"
            style={{ marginRight: splitBy === "words" ? "0.3em" : 0 }}
          >
            {item}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div ref={ref} className={`flex flex-col gap-6 ${alignClass}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="label"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={`heading-section ${light ? "text-white" : "text-[var(--color-pearl)]"}`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="divider-gold"
        style={{ marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`max-w-2xl text-lg leading-relaxed ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/70" : "text-[var(--color-smoke)]"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
