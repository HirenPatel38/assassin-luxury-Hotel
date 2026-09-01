"use client";

import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { getRoomBySlug, rooms } from "@/data/rooms";
import { formatPrice } from "@/utils/formatters";
import { FadeIn } from "@/components/common/FadeIn";
import {
  Users,
  Maximize,
  Eye,
  Bed,
  Check,
  ArrowLeft,
} from "lucide-react";

export default function RoomDetails() {
  const { slug } = useParams<{ slug: string }>();
  const room = getRoomBySlug(slug || "signature");

  if (!room) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#0a0a0a" }}>
        <div className="text-center">
          <h1 className="heading-section mb-4">Room Not Found</h1>
          <Link to="/rooms" className="btn-outline">
            <span>Back to Rooms</span>
          </Link>
        </div>
      </main>
    );
  }

  const specs = [
    { icon: Maximize, label: "Size", value: room.size },
    { icon: Users, label: "Guests", value: `${room.guests} Guests` },
    { icon: Bed, label: "Bed", value: room.beds },
    { icon: Eye, label: "View", value: room.view },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back */}
      <div className="container-assassin pt-28 pb-4">
        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--color-gold)]"
          style={{ color: "var(--color-mist)" }}
        >
          <ArrowLeft size={16} />
          All Rooms
        </Link>
      </div>

      {/* Hero Image */}
      <section className="px-4 md:px-8 mb-16">
        <div
          className="relative overflow-hidden mx-auto"
          style={{
            maxHeight: "60vh",
            borderRadius: "var(--radius-md)",
          }}
        >
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
            style={{ minHeight: "400px" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 40%)",
            }}
          />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <span className="label block mb-2">{room.tagline}</span>
            <h1 className="heading-section">{room.name}</h1>
          </div>
          <div
            className="absolute top-4 right-4 md:top-8 md:right-8 px-6 py-3 glass"
            style={{ borderRadius: "var(--radius-sm)" }}
          >
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--color-gold)" }}
            >
              From {formatPrice(room.pricePerNight)}/night
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: "#0a0a0a" }}>
        <div className="container-assassin">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeIn>
                <p
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: "var(--color-pearl)" }}
                >
                  {room.description}
                </p>
              </FadeIn>

              {/* Specs Grid */}
              <FadeIn delay={0.1}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-4 text-center"
                      style={{
                        border: "1px solid rgba(201,168,76,0.12)",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      <spec.icon
                        size={20}
                        className="mx-auto mb-2"
                        style={{ color: "var(--color-gold)" }}
                      />
                      <p
                        className="text-[10px] tracking-[0.15em] uppercase mb-1"
                        style={{ color: "var(--color-smoke)" }}
                      >
                        {spec.label}
                      </p>
                      <p className="text-sm font-medium" style={{ color: "var(--color-pearl)" }}>
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Amenities */}
              <FadeIn delay={0.2}>
                <h3
                  className="text-lg mb-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-pearl)",
                  }}
                >
                  Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 py-2"
                    >
                      <Check
                        size={16}
                        style={{ color: "var(--color-gold)", flexShrink: 0 }}
                      />
                      <span className="text-sm" style={{ color: "var(--color-mist)" }}>
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Sidebar - Booking CTA */}
            <div>
              <FadeIn delay={0.1}>
                <div
                  className="sticky top-28 p-8"
                  style={{
                    background: "var(--color-midnight)",
                    border: "1px solid rgba(201,168,76,0.12)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <h3
                    className="text-xl mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-gold)",
                    }}
                  >
                    Reserve This Room
                  </h3>
                  <p className="text-sm mb-6" style={{ color: "var(--color-smoke)" }}>
                    Starting from {formatPrice(room.pricePerNight)} per night
                  </p>

                  <div className="space-y-3 mb-6">
                    {[
                      ["Room", room.name],
                      ["Size", room.size],
                      ["Guests", `${room.guests}`],
                      ["Bed", room.beds],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex justify-between py-2 text-sm"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                      >
                        <span style={{ color: "var(--color-smoke)" }}>{label}</span>
                        <span style={{ color: "var(--color-pearl)" }}>{value}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/book" className="btn-primary w-full text-center">
                    <span>Book Now</span>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Gallery */}
          <FadeIn delay={0.3}>
            <div className="mt-16">
              <h3
                className="text-lg mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-pearl)",
                }}
              >
                Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {room.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden"
                    style={{ borderRadius: "var(--radius-sm)", aspectRatio: "4/3" }}
                  >
                    <img
                      src={img}
                      alt={`${room.name} gallery ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Other Rooms */}
          <div className="mt-16">
            <h3
              className="text-lg mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-pearl)",
              }}
            >
              Explore Other Rooms
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms
                .filter((r) => r.slug !== room.slug)
                .map((r) => (
                  <Link
                    key={r.slug}
                    to={`/rooms/${r.slug}`}
                    className="group"
                  >
                    <div
                      className="overflow-hidden mb-3"
                      style={{ aspectRatio: "16/10", borderRadius: "var(--radius-sm)" }}
                    >
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <h4
                      className="text-base mb-1"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-pearl)",
                      }}
                    >
                      {r.name}
                    </h4>
                    <p className="text-xs" style={{ color: "var(--color-smoke)" }}>
                      From {formatPrice(r.pricePerNight)}/night
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
