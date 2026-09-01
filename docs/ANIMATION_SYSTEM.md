# ANIMATION_SYSTEM.md — ASSASSIN Hotel

## Animation Principles

1. **Purposeful Motion** — Every animation serves a functional or emotional purpose
2. **Hierarchy-Driven** — Primary content animates first, supporting elements follow
3. **Respectful** — Animations never block user interaction or content access
4. **Performant** — Use `transform` and `opacity` for GPU-accelerated animations
5. **Accessible** — Full support for `prefers-reduced-motion`

## Animation Libraries

### Framer Motion (Primary)

Used for: Component animations, scroll-triggered reveals, page transitions, hover effects, layout animations.

### GSAP (Supplementary)

Available for: Complex scroll sequences, timeline-based animations.

## Reusable Animation Components

### FadeIn

```tsx
<FadeIn direction="up" delay={0.2} duration={0.8}>
  <Content />
</FadeIn>
```

- **direction**: `up` | `down` | `left` | `right`
- **delay**: seconds before animation starts
- **duration**: animation duration in seconds
- Uses `react-intersection-observer` for scroll-triggered activation

### ScaleIn

```tsx
<ScaleIn delay={0.1}>
  <Content />
</ScaleIn>
```

### StaggerChildren / StaggerItem

```tsx
<StaggerChildren staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
  <StaggerItem>Item 3</StaggerItem>
</StaggerChildren>
```

### RevealText

Word-by-word or character-by-character text reveal animation.

```tsx
<RevealText text="A PLACE BEYOND EXPECTATION" as="h2" splitBy="words" />
```

### ParallaxImage

```tsx
<ParallaxImage src="..." alt="..." />
```

### SectionHeading

Combined label + heading + divider + subtitle with staggered entrance.

```tsx
<SectionHeading label="Explore" title="Our Story" subtitle="..." />
```

## Page Transitions

- Each page wraps content in `<motion.main>` with fade-in on mount
- Route changes trigger scroll-to-top via `ScrollToTop` component
- Lazy-loaded route components show a centered loading spinner

## Scroll Animations

### Pattern: Intersection Observer + Framer Motion

```tsx
const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 60 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
/>
```

### Parallax Scrolling

```tsx
const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
```

Used in: Hero, CTA section, Experience section, RoomsHorizontal.

## Hover Animations

- **Images**: Scale 1.05-1.1 on hover with 700ms transition
- **Buttons**: translateY(-2px) + glow shadow
- **Cards**: Opacity overlay reveal with text
- **Links**: Color transition to gold

## 3D Animations

- **Hero**: Torus rings rotate slowly, inner sphere distorts
- **Room Scene**: Entire room rotates at 0.05 speed, floating elements with Float component
- **Hotspots**: Pulse animation, hover expand

## Loading Screen

1. Brand name fades in with scale
2. Tagline animates sequentially
3. Progress bar fills over ~1.5 seconds
4. Corner accent borders visible
5. Smooth exit transition

## Custom Cursor

- Spring physics for smooth following
- Three states: default (dot), hover (ring + label), image (larger ring)
- Uses `mix-blend-mode: difference` for visibility
- Labels: VIEW, EXPLORE, DRAG based on context
- Hidden on mobile/touch devices

## Reduced Motion

When `prefers-reduced-motion: reduce` is active:
- All animation durations set to 0.01ms
- Transition durations set to 0.01ms
- Scroll behavior set to auto
- CSS animations disabled
- Framer Motion respects system preference

## Performance Considerations

- `triggerOnce: true` on all intersection observers
- `will-change: transform` on animated elements
- Passive scroll listeners
- requestAnimationFrame for scroll position tracking
- Lazy loading for images and route components
- DPR-limited 3D canvases (`dpr={[1, 1.5]}`)
