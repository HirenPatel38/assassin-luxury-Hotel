"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import { rooms } from "@/data/rooms";
import { useInView } from "react-intersection-observer";
import { Users, Maximize, Eye } from "lucide-react";

export default function RoomsHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ background: "#050505" }}>
      {/* Section Header */}
      <div ref={headingRef} className="container-assassin mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="label block mb-4"
        >
          Accommodations
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="heading-section"
        >
          Rooms & Suites
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headingInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="divider-gold mt-6"
        />
      </div>

      {/* Horizontal Scroll Cards */}
      <div ref={containerRef}>
        <motion.div
          style={{ x }}
          className="flex gap-6 md:gap-8 px-8 md:px-16"
        >
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </motion.div>
      </div>

      {/* View All Link */}
      <div className="container-assassin mt-12 flex justify-center">
        <Link
          to="/rooms"
          className="btn-outline text-[11px]"
        >
          <span>View All Rooms</span>
        </Link>
      </div>
    </section>
  );
}

function RoomCard({
  room,
  index,
}: {
  room: (typeof rooms)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="flex-shrink-0 w-[320px] md:w-[420px] group"
    >
      <Link to={`/rooms/${room.slug}`}>
        {/* Image */}
        <div
          className="relative overflow-hidden mb-6 cursor-image"
          style={{ aspectRatio: "3/4", borderRadius: "var(--radius-sm)" }}
        >
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
            style={{
              background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)",
            }}
          >
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "var(--color-gold)" }}
            >
              View Details →
            </span>
          </div>
          {/* Price badge */}
          <div
            className="absolute top-4 right-4 px-4 py-2 glass"
            style={{ borderRadius: "var(--radius-xs)" }}
          >
            <span className="text-xs font-semibold" style={{ color: "var(--color-gold)" }}>
              From ${room.pricePerNight}/night
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-3">
          <h3
            className="text-xl md:text-2xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-pearl)" }}
          >
            {room.name}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-smoke)" }}>
            {room.tagline}
          </p>

          {/* Quick stats */}
          <div className="flex items-center gap-6 pt-2">
            <span className="flex items-center gap-2 text-xs" style={{ color: "var(--color-mist)" }}>
              <Maximize size={14} style={{ color: "var(--color-gold)" }} />
              {room.size}
            </span>
            <span className="flex items-center gap-2 text-xs" style={{ color: "var(--color-mist)" }}>
              <Users size={14} style={{ color: "var(--color-gold)" }} />
              {room.guests} Guests
            </span>
            <span className="flex items-center gap-2 text-xs" style={{ color: "var(--color-mist)" }}>
              <Eye size={14} style={{ color: "var(--color-gold)" }} />
              {room.view}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
