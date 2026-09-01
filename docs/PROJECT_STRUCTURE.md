# PROJECT_STRUCTURE.md — ASSASSIN Hotel

```
src/
├── assets/
│   └── logo.svg                    # Project logo
│
├── components/
│   ├── common/
│   │   ├── FadeIn.tsx              # FadeIn, ScaleIn, StaggerChildren, StaggerItem, ParallaxImage
│   │   ├── RevealText.tsx          # RevealText, SectionHeading
│   │   └── LocationSection.tsx     # Location map UI
│   ├── navigation/
│   │   └── Navbar.tsx              # Transparent navbar + MobileMenu
│   ├── hero/
│   │   └── Hero.tsx                # Full-screen hero with 3D scene
│   ├── rooms/
│   │   └── RoomsHorizontal.tsx     # Horizontal scroll gallery
│   ├── experience/
│   │   └── ExperienceSection.tsx   # Experience showcase
│   ├── dining/
│   │   └── DiningSection.tsx       # Dining gallery + MenuModal
│   ├── gallery/
│   │   └── GalleryGrid.tsx         # Masonry gallery + Lightbox
│   ├── booking/
│   │   └── BookingForm.tsx         # Booking form + summary + confirmation
│   ├── contact/
│   │   └── ContactForm.tsx         # Validated contact form
│   ├── footer/
│   │   └── Footer.tsx              # Multi-column footer
│   ├── three/
│   │   └── Room3DScene.tsx         # 3D room explorer with hotspots
│   ├── cursor/
│   │   └── CustomCursor.tsx        # Custom cursor component
│   ├── loader/
│   │   └── LoadingScreen.tsx       # Cinematic loading screen
│   ├── testimonials/
│   │   └── TestimonialsSlider.tsx  # Auto-transitioning slider
│   ├── about/
│   │   └── AboutTimeline.tsx       # Animated timeline
│   ├── cta/
│   │   └── CTASection.tsx          # Parallax CTA
│   └── ui/
│       └── ...                     # shadcn/ui components (template)
│
├── pages/
│   ├── Home.tsx                    # Homepage
│   ├── Rooms.tsx                   # Rooms listing
│   ├── RoomDetails.tsx             # Individual room detail
│   ├── Experience.tsx              # Experience page
│   ├── Dining.tsx                  # Dining page
│   ├── GalleryPage.tsx             # Gallery page
│   ├── About.tsx                   # About page
│   ├── Contact.tsx                 # Contact page
│   ├── Booking.tsx                 # Booking page
│   ├── Auth.tsx                    # Auth page (template)
│   ├── Dashboard.tsx               # Dashboard (template)
│   ├── Landing.tsx                 # Legacy landing (unused)
│   └── NotFound.tsx                # 404 page
│
├── hooks/
│   ├── useScrollPosition.ts        # Scroll position tracking
│   ├── usePrefersReducedMotion.ts  # Reduced motion detection
│   └── use-auth.ts                 # Auth hook (template)
│
├── data/
│   ├── rooms.ts                    # Room data with types
│   ├── experiences.ts              # Experience data
│   ├── gallery.ts                  # Gallery image data
│   ├── menu.ts                     # Restaurant menu data
│   ├── testimonials.ts             # Guest reviews
│   └── hotel.ts                    # Hotel info + timeline
│
├── utils/
│   └── formatters.ts               # Price, date, email formatters
│
├── styles/
│   └── assassin.css                # Design system CSS variables + base styles
│
├── convex/                         # Convex backend (template)
├── lib/                            # Utility libraries
├── types/                          # TypeScript type declarations
│
├── index.css                       # Tailwind + theme + design system imports
├── main.tsx                        # App entry point, routing, providers
└── vite-env.d.ts                   # Vite type declarations
```

## File Count Summary

| Category | Count |
|---|---|
| Pages | 11 |
| Components | 18 |
| Data Files | 6 |
| Hooks | 3 |
| Utils | 1 |
| Styles | 2 |
| **Total Source Files** | **~41** |
