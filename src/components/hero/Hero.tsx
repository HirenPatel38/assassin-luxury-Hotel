"use client";

import { motion } from "framer-motion";
import { Link } from "react-router";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { ArrowDown } from "lucide-react";

function HeroScene() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Main torus */}
        <mesh rotation={[0.5, 0, 0]}>
          <torusGeometry args={[2, 0.15, 32, 100]} />
          <MeshDistortMaterial
            color="#c9a84c"
            metalness={0.9}
            roughness={0.1}
            distort={0.15}
            speed={2}
          />
        </mesh>

        {/* Inner torus */}
        <mesh rotation={[1.2, 0.3, 0]}>
          <torusGeometry args={[1.4, 0.08, 24, 64]} />
          <meshStandardMaterial
            color="#dfc06e"
            metalness={0.95}
            roughness={0.05}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Central sphere */}
        <mesh>
          <icosahedronGeometry args={[0.5, 2]} />
          <MeshDistortMaterial
            color="#c9a84c"
            metalness={0.8}
            roughness={0.15}
            distort={0.2}
            speed={3}
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Floating rings */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} rotation={[Math.PI / 2 + i * 0.4, i * 0.6, 0]}>
            <torusGeometry args={[2.5 + i * 0.3, 0.02, 16, 64]} />
            <meshStandardMaterial
              color="#c9a84c"
              metalness={1}
              roughness={0.1}
              transparent
              opacity={0.2 - i * 0.05}
            />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

export default function Hero() {
  const words = ["LIVE", "BEYOND", "ORDINARY"];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(201,168,76,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(201,168,76,0.04) 0%, transparent 50%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#c9a84c" />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#dfc06e" />
            <spotLight
              position={[0, 8, 0]}
              intensity={0.8}
              angle={0.5}
              penumbra={1}
              color="#c9a84c"
            />
            <HeroScene />
          </Canvas>
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <span className="label">Luxury Hotel & Resort</span>
        </motion.div>

        {/* Main Title */}
        <div className="mb-6">
          <motion.h1
            className="heading-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.7 }}
          >
            {words.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1,
                    delay: 0.7 + i * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  style={{
                    fontFamily: "var(--font-display)",
                    color: i === 2 ? "var(--color-gold)" : "var(--color-pearl)",
                    lineHeight: 1,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--color-smoke)" }}
        >
          A luxury hotel experience designed around architecture, atmosphere,
          and unforgettable moments.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/rooms" className="btn-primary">
            <span>Explore Hotel</span>
          </Link>
          <Link to="/book" className="btn-outline">
            <span>Book Your Stay</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "var(--color-smoke)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} style={{ color: "var(--color-gold)" }} />
        </motion.div>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l opacity-30" style={{ borderColor: "var(--color-gold)" }} />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r opacity-30" style={{ borderColor: "var(--color-gold)" }} />
    </section>
  );
}
