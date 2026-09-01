"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { galleryImages } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof galleryImages;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const image = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center"
      style={{ background: "rgba(5,5,5,0.97)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${currentIndex + 1} of ${images.length}`}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full transition-colors"
        style={{
          border: "1px solid rgba(201,168,76,0.3)",
          color: "var(--color-mist)",
        }}
        aria-label="Close lightbox"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div
        className="absolute top-6 left-6 z-10 text-sm tracking-widest"
        style={{ color: "var(--color-smoke)" }}
      >
        {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full transition-all hover:scale-110"
        style={{
          border: "1px solid rgba(201,168,76,0.3)",
          color: "var(--color-mist)",
          background: "rgba(10,10,10,0.5)",
        }}
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full transition-all hover:scale-110"
        style={{
          border: "1px solid rgba(201,168,76,0.3)",
          color: "var(--color-mist)",
          background: "rgba(10,10,10,0.5)",
        }}
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl max-h-[80vh] mx-4"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-[80vh] object-contain"
          />
          <p className="text-center text-sm mt-4" style={{ color: "var(--color-smoke)" }}>
            {image.alt}
          </p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : 0
    );

  return (
    <>
      <section className="section" style={{ background: "#0a0a0a" }}>
        <div className="container-assassin">
          {/* Header */}
          <div ref={ref} className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="label block mb-4"
            >
              Visual Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-section"
            >
              Gallery
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="divider-gold mx-auto mt-6"
            />
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, i) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="break-inside-avoid cursor-image group"
                onClick={() => openLightbox(i)}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                    style={{ background: "rgba(10,10,10,0.5)" }}
                  >
                    <span
                      className="text-xs tracking-[0.2em] uppercase px-4 py-2"
                      style={{
                        border: "1px solid rgba(201,168,76,0.5)",
                        color: "var(--color-gold)",
                        borderRadius: "var(--radius-xs)",
                      }}
                    >
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
