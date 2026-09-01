"use client";

import { motion } from "framer-motion";
import { Link } from "react-router";
import { rooms } from "@/data/rooms";
import { FadeIn, ScaleIn } from "@/components/common/FadeIn";
import { SectionHeading } from "@/components/common/RevealText";
import { Users, Maximize, Eye } from "lucide-react";

export default function Rooms() {
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
          <span className="label block mb-4">Accommodations</span>
          <h1 className="heading-hero">Rooms & Suites</h1>
          <div className="divider-gold mx-auto mt-6" />
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section" style={{ background: "#0a0a0a" }}>
        <div className="container-assassin">
          <SectionHeading
            label="Curated Spaces"
            title="Each Room Tells a Story"
            subtitle="Every accommodation at ASSASSIN has been meticulously designed to create an atmosphere of refined luxury. From custom Italian furnishings to panoramic views, no detail has been overlooked."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {rooms.map((room, i) => (
              <FadeIn key={room.id} delay={i * 0.1}>
                <ScaleIn>
                  <Link
                    to={`/rooms/${room.slug}`}
                    className="group block"
                  >
                    <div
                      className="relative overflow-hidden mb-6 cursor-image"
                      style={{
                        aspectRatio: "16/10",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 50%)",
                        }}
                      >
                        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--color-gold)" }}>
                          View Details →
                        </span>
                      </div>
                      <div
                        className="absolute top-4 right-4 px-4 py-2 glass"
                        style={{ borderRadius: "var(--radius-xs)" }}
                      >
                        <span className="text-xs font-semibold" style={{ color: "var(--color-gold)" }}>
                          From ${room.pricePerNight}/night
                        </span>
                      </div>
                    </div>

                    <h3
                      className="text-xl md:text-2xl mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-pearl)",
                      }}
                    >
                      {room.name}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "var(--color-smoke)" }}>
                      {room.tagline}
                    </p>

                    <div className="flex items-center gap-6">
                      <span
                        className="flex items-center gap-2 text-xs"
                        style={{ color: "var(--color-mist)" }}
                      >
                        <Maximize size={14} style={{ color: "var(--color-gold)" }} />
                        {room.size}
                      </span>
                      <span
                        className="flex items-center gap-2 text-xs"
                        style={{ color: "var(--color-mist)" }}
                      >
                        <Users size={14} style={{ color: "var(--color-gold)" }} />
                        {room.guests} Guests
                      </span>
                      <span
                        className="flex items-center gap-2 text-xs"
                        style={{ color: "var(--color-mist)" }}
                      >
                        <Eye size={14} style={{ color: "var(--color-gold)" }} />
                        {room.view}
                      </span>
                    </div>
                  </Link>
                </ScaleIn>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
