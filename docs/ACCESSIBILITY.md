# ACCESSIBILITY.md — ASSASSIN Hotel

## Implementation

### Semantic HTML

- `<main>` for main content area
- `<header>` for navigation
- `<footer>` for footer
- `<nav>` for navigation links
- `<section>` for content sections
- Proper heading hierarchy (h1 → h2 → h3)

### ARIA Labels

All interactive elements include appropriate ARIA attributes:

```tsx
<button aria-label="Close menu">...</button>
<button aria-label="Open menu">...</button>
<button aria-label="Previous image">...</button>
<button aria-label="Next image">...</button>
<button aria-label="Close lightbox">...</button>
<button aria-label="Close">...</button>
<div role="dialog" aria-modal="true" aria-label="Dining menu">...</div>
```

### Keyboard Navigation

- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals, lightbox, mobile menu
- **Arrow Left/Right**: Gallery lightbox navigation
- **Focus visible**: Custom focus styles via Tailwind ring utilities

### Focus States

All interactive elements have visible focus indicators:

```css
button:focus-visible, a:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 2px;
}
```

### Image Alt Text

All images include descriptive `alt` text:

```tsx
<img alt="Hotel exterior at sunset" />
<img alt="Signature room interior" />
<img alt="Infinity pool view" />
```

### Color Contrast

| Element | Foreground | Background | Ratio |
|---|---|---|---|
| Body text | Pearl (#e8e4de) | Obsidian (#0a0a0a) | ~14:1 |
| Muted text | Smoke (#8a8a8a) | Obsidian (#0a0a0a) | ~5.5:1 |
| Gold accent | Gold (#c9a84c) | Obsidian (#0a0a0a) | ~7:1 |
| Button text | Obsidian (#0a0a0a) | Gold (#c9a84c) | ~7:1 |

All exceed WCAG AA requirements (4.5:1 for normal text, 3:1 for large text).

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  html { scroll-behavior: auto; }
}
```

### Screen Reader Support

- Screen reader text class: `sr-only` for hidden labels
- `aria-hidden="true"` on decorative elements
- `role="dialog"` on modals
- Live regions for dynamic content updates

### Mobile Accessibility

- Touch targets minimum 44x44px
- Custom cursor hidden on touch devices
- Mobile menu uses proper focus management
- No hover-only interactions required

## WCAG 2.1 Compliance

Targeting **Level AA** compliance:

| Criterion | Status |
|---|---|
| 1.1.1 Non-text Content | ✅ Alt text on all images |
| 1.3.1 Info and Relationships | ✅ Semantic HTML |
| 1.4.1 Use of Color | ✅ Not sole means of conveying info |
| 1.4.3 Contrast (Minimum) | ✅ 4.5:1+ ratios |
| 2.1.1 Keyboard | ✅ All functionality keyboard accessible |
| 2.4.1 Bypass Blocks | ✅ Skip to main content |
| 2.4.3 Focus Order | ✅ Logical tab order |
| 2.4.7 Focus Visible | ✅ Visible focus indicators |
| 3.3.1 Error Identification | ✅ Form error messages |
| 3.3.2 Labels or Instructions | ✅ Form labels |
| 4.1.2 Name, Role, Value | ✅ ARIA attributes |
