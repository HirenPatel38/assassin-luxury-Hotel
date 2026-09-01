"use client";

import { motion } from "framer-motion";
import BookingForm from "@/components/booking/BookingForm";

export default function Booking() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, #0a0a0a 70%)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <span className="label block mb-4">Reservations</span>
          <h1 className="heading-hero">Book Your Stay</h1>
          <div className="divider-gold mx-auto mt-6" />
          <p
            className="max-w-xl mx-auto mt-6 text-sm leading-relaxed"
            style={{ color: "var(--color-smoke)" }}
          >
            Begin your journey at ASSASSIN. Select your dates, choose your room,
            and prepare for an experience beyond ordinary.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section" style={{ background: "#0a0a0a" }}>
        <div className="container-assassin">
          <BookingForm />
        </div>
      </section>
    </motion.main>
  );
}
