"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { hotelInfo } from "@/data/hotel";
import { MapPin, Plane, Navigation } from "lucide-react";

export default function LocationSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section" style={{ background: "#0a0a0a" }}>
      <div className="container-assassin">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map UI */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-[4/3] overflow-hidden"
            style={{
              borderRadius: "var(--radius-md)",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            {/* Stylized map background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.08) 0%, #0a0a0a 70%)",
              }}
            />

            {/* Grid lines */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Center pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: "var(--color-gold)",
                    boxShadow: "0 0 30px rgba(201,168,76,0.5)",
                  }}
                />
                <div
                  className="absolute -inset-4 rounded-full animate-ping"
                  style={{
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                />
              </motion.div>
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-center mt-3 whitespace-nowrap"
                style={{ color: "var(--color-gold)" }}
              >
                {hotelInfo.name}
              </p>
            </div>

            {/* Decorative markers */}
            {[
              { x: "20%", y: "30%", label: "Marina" },
              { x: "75%", y: "25%", label: "Palm" },
              { x: "80%", y: "70%", label: "Mall" },
            ].map((marker) => (
              <div
                key={marker.label}
                className="absolute"
                style={{ left: marker.x, top: marker.y }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "rgba(201,168,76,0.4)" }}
                />
                <span
                  className="text-[8px] tracking-wider uppercase block mt-1"
                  style={{ color: "var(--color-smoke)" }}
                >
                  {marker.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="label block mb-4">Location</span>
            <h2
              className="heading-sub mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Find Your Way Here
            </h2>
            <div className="divider-gold mb-8" />

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin size={20} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--color-pearl)" }}>
                    {hotelInfo.address}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-smoke)" }}>
                    {hotelInfo.city}, {hotelInfo.country}
                  </p>
                </div>
              </div>

              {/* Airport */}
              <div className="flex gap-4">
                <Plane size={20} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--color-pearl)" }}>
                    {hotelInfo.airport}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-smoke)" }}>
                    {hotelInfo.airportDistance}
                  </p>
                </div>
              </div>

              {/* Nearby */}
              <div className="flex gap-4">
                <Navigation size={20} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p className="text-sm font-medium mb-2" style={{ color: "var(--color-pearl)" }}>
                    Nearby
                  </p>
                  <ul className="space-y-1">
                    {hotelInfo.nearbyAttractions.map((attr) => (
                      <li
                        key={attr}
                        className="text-sm"
                        style={{ color: "var(--color-smoke)" }}
                      >
                        {attr}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${hotelInfo.phone}`}
                  className="btn-outline !py-3 !px-6 text-[11px] text-center"
                >
                  <span>Call Us</span>
                </a>
                <a
                  href={`mailto:${hotelInfo.email}`}
                  className="btn-primary !py-3 !px-6 text-[11px]"
                >
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
