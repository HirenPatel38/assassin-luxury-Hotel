# COMPONENT_ARCHITECTURE.md — ASSASSIN Hotel

## Component Categories

### Common / Reusable

| Component | File | Description |
|---|---|---|
| FadeIn | `components/common/FadeIn.tsx` | Scroll-triggered fade animation |
| ScaleIn | `components/common/FadeIn.tsx` | Scroll-triggered scale animation |
| StaggerChildren | `components/common/FadeIn.tsx` | Staggered child animations |
| StaggerItem | `components/common/FadeIn.tsx` | Individual stagger item |
| ParallaxImage | `components/common/FadeIn.tsx` | Parallax scroll image |
| RevealText | `components/common/RevealText.tsx` | Word-by-word text reveal |
| SectionHeading | `components/common/RevealText.tsx` | Label + heading + divider |
| LocationSection | `components/common/LocationSection.tsx` | Location info with map UI |

### Navigation

| Component | File | Description |
|---|---|---|
| Navbar | `components/navigation/Navbar.tsx` | Transparent glass navbar with scroll effect |
| MobileMenu | (inline in Navbar) | Full-screen overlay animated menu |

### Hero

| Component | File | Description |
|---|---|---|
| Hero | `components/hero/Hero.tsx` | Full-screen hero with 3D scene |
| HeroScene | (inline in Hero) | Three.js floating torus sculpture |

### Rooms

| Component | File | Description |
|---|---|---|
| RoomsHorizontal | `components/rooms/RoomsHorizontal.tsx` | Horizontal scroll room gallery |
| RoomCard | (inline) | Individual room card with hover effects |

### Experience

| Component | File | Description |
|---|---|---|
| ExperienceSection | `components/experience/ExperienceSection.tsx` | Scroll-triggered experience showcase |

### Dining

| Component | File | Description |
|---|---|---|
| DiningSection | `components/dining/DiningSection.tsx` | Restaurant gallery grid |
| MenuModal | (inline in DiningSection) | Tabbed menu modal with categories |

### Gallery

| Component | File | Description |
|---|---|---|
| GalleryGrid | `components/gallery/GalleryGrid.tsx` | Masonry gallery with lightbox |
| Lightbox | (inline) | Full-screen image viewer with nav |

### Booking

| Component | File | Description |
|---|---|---|
| BookingForm | `components/booking/BookingForm.tsx` | Multi-step booking with price calc |

### Contact

| Component | File | Description |
|---|---|---|
| ContactForm | `components/contact/ContactForm.tsx` | Validated contact form |

### Footer

| Component | File | Description |
|---|---|---|
| Footer | `components/footer/Footer.tsx` | Multi-column footer with newsletter |

### 3D

| Component | File | Description |
|---|---|---|
| Room3DScene | `components/three/Room3DScene.tsx` | Interactive 3D room with hotspots |
| ArchitecturalRoom | (inline) | Procedural 3D room geometry |
| HotspotMarker | (inline) | Interactive 3D hotspot with labels |

### Testimonials

| Component | File | Description |
|---|---|---|
| TestimonialsSlider | `components/testimonials/TestimonialsSlider.tsx` | Auto-transitioning review slider |

### About

| Component | File | Description |
|---|---|---|
| AboutTimeline | `components/about/AboutTimeline.tsx` | Animated timeline with stats |

### CTA

| Component | File | Description |
|---|---|---|
| CTASection | `components/cta/CTASection.tsx` | Parallax CTA section |

### Loader

| Component | File | Description |
|---|---|---|
| LoadingScreen | `components/loader/LoadingScreen.tsx` | Cinematic branded loader |

### Cursor

| Component | File | Description |
|---|---|---|
| CustomCursor | `components/cursor/CustomCursor.tsx` | Custom cursor with states |

## Component Conventions

1. All components use `"use client"` directive for client-side rendering
2. Framer Motion for animations, not CSS animations
3. Intersection Observer for scroll-triggered effects
4. Inline styles for design system colors (via CSS variables)
5. Tailwind utilities for layout and spacing
6. Lazy loading for images with `loading="lazy"`
7. Semantic HTML with ARIA labels for accessibility
