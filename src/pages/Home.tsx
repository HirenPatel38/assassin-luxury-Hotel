"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/common/FadeIn";
import { RevealText } from "@/components/common/RevealText";
import Hero from "@/components/hero/Hero";
import RoomsHorizontal from "@/components/rooms/RoomsHorizontal";
import ExperienceSection from "@/components/experience/ExperienceSection";
import DiningSection from "@/components/dining/DiningSection";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import TestimonialsSlider from "@/components/testimonials/TestimonialsSlider";
import CTASection from "@/components/cta/CTASection";
import LocationSection from "@/components/common/LocationSection";
import Room3DScene from "@/components/three/Room3DScene";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      {/* Introduction Section */}
      <section className="section" style={{ background: "#0a0a0a" }}>
        <div className="container-assassin text-center">
          <FadeIn>
            <RevealText
              text="A PLACE BEYOND EXPECTATION"
              as="h2"
              className="heading-section mb-8"
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="divider-gold mx-auto mb-8" />
          </FadeIn>
          <FadeIn delay={0.4}>
            <p
              className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
              style={{ color: "var(--color-smoke)" }}
            >
              Where architecture becomes art, service becomes intuition, and every
              moment is crafted to transcend the ordinary. ASSASSIN is not just a
              hotel—it is an experience designed for those who expect nothing less
              than extraordinary.
            </p>
          </FadeIn>
        </div>
      </section>

      <RoomsHorizontal />
      <Room3DScene />
      <ExperienceSection />
      <DiningSection />
      <GalleryGrid />
      <TestimonialsSlider />
      <LocationSection />
      <CTASection />
    </motion.main>
  );
}
