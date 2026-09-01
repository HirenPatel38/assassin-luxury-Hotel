# RESPONSIVENESS.md — ASSASSIN Hotel

## Breakpoints

| Name | Width | Tailwind Prefix |
|---|---|---|
| Mobile | 0 - 639px | (default) |
| Small | 640px+ | `sm:` |
| Medium | 768px+ | `md:` |
| Large | 1024px+ | `lg:` |
| Extra Large | 1280px+ | `xl:` |

## Layout Adaptations

### Navigation

| Breakpoint | Behavior |
|---|---|
| Mobile | Hamburger menu → full-screen overlay |
| Desktop (1024px+) | Horizontal nav links + Book Now CTA |

### Hero

| Breakpoint | Adaptations |
|---|---|
| Mobile | Smaller heading (3rem), stacked CTAs, simplified 3D |
| Desktop | Full heading (up to 9rem), side-by-side CTAs, full 3D |

### Rooms Grid

| Breakpoint | Layout |
|---|---|
| Mobile | Single column, full-width cards |
| Tablet | 2 columns |
| Desktop | Horizontal scroll with parallax |

### Gallery

| Breakpoint | Columns |
|---|---|
| Mobile | 1 column |
| Tablet | 2 columns (masonry) |
| Desktop | 3 columns (masonry) |

### Booking Form

| Breakpoint | Layout |
|---|---|
| Mobile | Single column fields |
| Tablet/Desktop | 2-column grid |

### Footer

| Breakpoint | Layout |
|---|---|
| Mobile | Single column, stacked |
| Tablet | 2 columns |
| Desktop | 4-column grid |

## Typography Scaling

All heading sizes use `clamp()` for fluid scaling:

```css
heading-hero: clamp(3rem, 8vw, 9rem)
heading-section: clamp(2rem, 5vw, 5rem)
heading-sub: clamp(1.5rem, 3vw, 2.5rem)
```

## Spacing Scaling

```css
section-padding: clamp(80px, 10vw, 160px)
container-padding: clamp(20px, 5vw, 80px)
```

## 3D Adaptations

| Breakpoint | Adaptations |
|---|---|
| Mobile | Simplified geometry, reduced DPR |
| Desktop | Full geometry, DPR up to 1.5 |

## Image Handling

- All images use `object-cover` to maintain aspect ratio
- Aspect ratios set via CSS `aspect-ratio` property
- Container overflow hidden on all image wrappers
- Responsive image sizing with width: 100%

## Testing Viewports

| Viewport | Width | Height | Device |
|---|---|---|---|
| iPhone SE | 375px | 667px | Mobile |
| iPhone 14 | 390px | 844px | Mobile |
| iPhone 14 Pro Max | 430px | 932px | Mobile |
| iPad | 768px | 1024px | Tablet |
| iPad Pro | 1024px | 1366px | Tablet |
| Laptop | 1280px | 800px | Desktop |
| Desktop | 1440px | 900px | Desktop |
| Large Desktop | 1920px | 1080px | Desktop |

## No Horizontal Overflow

- `overflow-x: hidden` on `html` and `body`
- All containers use `max-width` constraints
- No fixed-width elements exceeding viewport
