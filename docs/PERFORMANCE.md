# PERFORMANCE.md — ASSASSIN Hotel

## Optimization Strategies

### Code Splitting

All route components are lazy-loaded:

```tsx
const Home = lazy(() => import("./pages/Home"));
```

Vite automatically splits code at build time, creating separate chunks for each page.

### Manual Chunk Splitting

Vite config includes manual chunk splitting for large libraries:

| Chunk | Libraries |
|---|---|
| `react-vendor` | react, react-dom, react-router |
| `convex-vendor` | convex |
| `radix-ui` | All Radix UI primitives |
| `framer-motion` | framer-motion |
| `charts` | recharts |
| `forms` | react-hook-form, zod |

### Image Optimization

- All images use `loading="lazy"` attribute
- Unsplash images use URL parameters for sizing (`?w=1200&h=800&fit=crop`)
- CSS background images used for decorative elements

### 3D Performance

- DPR capped at 1.5 (`dpr={[1, 1.5]}`)
- Procedural geometry instead of external models
- Minimal polygon counts
- `antialias: true` for quality
- Canvas elements use `alpha: true` when transparent background needed

### Animation Performance

- `triggerOnce: true` on all intersection observers
- Passive scroll event listeners
- `requestAnimationFrame` for scroll position tracking
- CSS `transform` and `opacity` for GPU-accelerated animations
- Framer Motion uses spring physics (hardware-accelerated)

### React Performance

- `useCallback` for event handlers passed to children
- Lazy loading for route components
- Intersection Observer triggers animations only when visible
- No unnecessary re-renders from scroll position (throttled via rAF)

## Reduced Motion

When `prefers-reduced-motion: reduce` is active:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  html { scroll-behavior: auto; }
}
```

Framer Motion also respects this preference when configured.

## Bundle Size Considerations

Estimated chunks:
- React vendor: ~45KB
- Three.js + R3F: ~200KB (lazy loaded per page)
- Framer Motion: ~80KB (lazy loaded)
- Radix UI: ~150KB (shared vendor)
- App code: ~100KB (split across routes)

## Browser Caching

Vite generates content-hashed filenames:
```
assets/[name]-[hash].js
```

This enables long-term caching for unchanged files.

## Performance Metrics Targets

| Metric | Target |
|---|---|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 3s |
| Total Blocking Time | < 200ms |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3s |
