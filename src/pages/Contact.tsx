"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/common/FadeIn";
import { hotelInfo } from "@/data/hotel";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
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
          <span className="label block mb-4">Get in Touch</span>
          <h1 className="heading-hero">Contact</h1>
          <div className="divider-gold mx-auto mt-6" />
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: "#0a0a0a" }}>
        <div className="container-assassin">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <FadeIn>
                <h2
                  className="heading-sub mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Reach Us
                </h2>
                <div className="divider-gold mb-8" />

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin size={20} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--color-pearl)" }}>
                        {hotelInfo.address}
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-smoke)" }}>
                        {hotelInfo.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone size={20} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--color-pearl)" }}>
                        {hotelInfo.phone}
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-smoke)" }}>
                        Available 24/7
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail size={20} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--color-pearl)" }}>
                        {hotelInfo.email}
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-smoke)" }}>
                        Response within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
