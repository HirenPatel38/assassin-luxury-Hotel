"use client";

import { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Text, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";

interface Hotspot {
  id: string;
  label: string;
  position: [number, number, number];
  description: string;
}

const hotspots: Hotspot[] = [
  {
    id: "bedroom",
    label: "Bedroom",
    position: [-2, 0.5, 0],
    description:
      "Master bedroom with premium linens, custom Italian furniture, and floor-to-ceiling windows offering panoramic views.",
  },
  {
    id: "bathroom",
    label: "Bathroom",
    position: [2, 0.5, -1],
    description:
      "Spa-inspired marble bathroom with soaking tub, rain shower, and curated amenities from exclusive wellness brands.",
  },
  {
    id: "lounge",
    label: "Lounge",
    position: [0, 0.5, 2],
    description:
      "Elegant living area featuring bespoke furnishings, a curated art collection, and state-of-the-art entertainment system.",
  },
  {
    id: "balcony",
    label: "Balcony",
    position: [0, 1.5, -3],
    description:
      "Private terrace with outdoor seating, offering unobstructed views of the ocean and city skyline.",
  },
];

function ArchitecturalRoom() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Walls */}
      {/* Back wall */}
      <mesh position={[0, 1, -4]}>
        <planeGeometry args={[10, 4]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Left wall */}
      <mesh position={[-5, 1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial
          color="#151515"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Right wall */}
      <mesh position={[5, 1, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial
          color="#151515"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* Bed */}
      <Float speed={0.5} rotationIntensity={0} floatIntensity={0.1}>
        <group position={[-2, -0.5, 0]}>
          {/* Bed base */}
          <mesh>
            <boxGeometry args={[2.5, 0.5, 3]} />
            <meshStandardMaterial
              color="#2d2d2d"
              metalness={0.2}
              roughness={0.8}
            />
          </mesh>
          {/* Mattress */}
          <mesh position={[0, 0.35, 0]}>
            <boxGeometry args={[2.3, 0.2, 2.8]} />
            <meshStandardMaterial color="#3a3a3a" roughness={0.9} />
          </mesh>
          {/* Pillows */}
          <mesh position={[0, 0.55, -1]}>
            <boxGeometry args={[1.8, 0.15, 0.4]} />
            <meshStandardMaterial color="#e8e4de" roughness={0.95} />
          </mesh>
        </group>
      </Float>

      {/* Side table */}
      <group position={[0.2, -0.2, -1]}>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.8, 16]} />
          <meshStandardMaterial
            color="#c9a84c"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Sofa */}
      <group position={[0, -0.3, 2]}>
        <mesh>
          <boxGeometry args={[3, 0.8, 1]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.85} />
        </mesh>
        <mesh position={[0, 0.6, -0.3]}>
          <boxGeometry args={[3, 0.5, 0.3]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.85} />
        </mesh>
      </group>

      {/* Glass panel */}
      <mesh position={[0, 1, -3.8]}>
        <planeGeometry args={[6, 3]} />
        <meshPhysicalMaterial
          color="#c9a84c"
          metalness={0.1}
          roughness={0}
          transparent
          opacity={0.1}
          transmission={0.9}
        />
      </mesh>

      {/* Decorative ring */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh position={[0, 2.5, 0]} rotation={[0.5, 0, 0]}>
          <torusGeometry args={[0.6, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#c9a84c"
            metalness={1}
            roughness={0.1}
          />
        </mesh>
      </Float>
    </group>
  );
}

function HotspotMarker({
  hotspot,
  onClick,
}: {
  hotspot: Hotspot;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={hotspot.position}>
      <Float speed={3} rotationIntensity={0} floatIntensity={0.2}>
        <mesh
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          onPointerEnter={() => {
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            setHovered(false);
            document.body.style.cursor = "auto";
          }}
        >
          <sphereGeometry args={[hovered ? 0.15 : 0.1, 16, 16]} />
          <meshStandardMaterial
            color="#c9a84c"
            emissive="#c9a84c"
            emissiveIntensity={hovered ? 0.8 : 0.4}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Pulse ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.15, 0.18, 32]} />
          <meshStandardMaterial
            color="#c9a84c"
            transparent
            opacity={0.3}
          />
        </mesh>
        {/* Label */}
        {hovered && (
          <Text
            position={[0, 0.35, 0]}
            fontSize={0.12}
            color="#c9a84c"
            anchorX="center"
            anchorY="middle"
            font={undefined}
          >
            {hotspot.label}
          </Text>
        )}
      </Float>
    </group>
  );
}

export default function Room3DScene() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section" style={{ background: "#050505" }}>
      <div className="container-assassin">
        {/* Header */}
        <div ref={ref} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="label block mb-4"
          >
            Immersive Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-section"
          >
            Step Inside
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="divider-gold mx-auto mt-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl mx-auto mt-4 text-sm"
            style={{ color: "var(--color-smoke)" }}
          >
            Explore our Signature Room in 3D. Click on the golden hotspots to discover each space.
          </motion.p>
        </div>

        {/* 3D Canvas */}
        <div
          className="relative overflow-hidden mx-auto"
          style={{
            aspectRatio: "16/9",
            maxHeight: "600px",
            borderRadius: "var(--radius-md)",
            border: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center" style={{ background: "#0a0a0a" }}>
                <p className="text-sm" style={{ color: "var(--color-smoke)" }}>Loading 3D experience...</p>
              </div>
            }
          >
            <Canvas
              camera={{ position: [5, 3, 5], fov: 50 }}
              dpr={[1, 1.5]}
              gl={{ antialias: true }}
            >
              <ambientLight intensity={0.3} />
              <pointLight position={[5, 5, 5]} intensity={0.8} color="#c9a84c" />
              <pointLight position={[-5, 3, -5]} intensity={0.4} color="#dfc06e" />
              <spotLight
                position={[0, 8, 0]}
                intensity={0.6}
                angle={0.6}
                penumbra={1}
                color="#ffffff"
              />

              <ArchitecturalRoom />

              {hotspots.map((hs) => (
                <HotspotMarker
                  key={hs.id}
                  hotspot={hs}
                  onClick={() => setActiveHotspot(hs)}
                />
              ))}

              <OrbitControls
                enablePan={false}
                enableZoom={true}
                minDistance={3}
                maxDistance={12}
                maxPolarAngle={Math.PI / 2.1}
                autoRotate={false}
              />

              <Environment preset="night" />
            </Canvas>
          </Suspense>

          {/* Controls hint */}
          <div
            className="absolute bottom-4 left-4 text-[10px] tracking-widest uppercase px-3 py-2 glass"
            style={{ borderRadius: "var(--radius-xs)", color: "var(--color-smoke)" }}
          >
            Drag to rotate · Scroll to zoom
          </div>
        </div>

        {/* Hotspot info overlay */}
        <AnimatePresence>
          {activeHotspot && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-lg mx-auto mt-8 p-8 relative"
              style={{
                background: "var(--color-midnight)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <button
                onClick={() => setActiveHotspot(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full"
                style={{
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "var(--color-mist)",
                }}
                aria-label="Close"
              >
                <X size={14} />
              </button>
              <span className="label block mb-2">{activeHotspot.label}</span>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-smoke)" }}>
                {activeHotspot.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
