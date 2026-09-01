# DESIGN_SYSTEM.md — ASSASSIN Hotel

## Color System

### Primary Palette

| Token | Hex | Usage |
|---|---|---|
| Gold | `#c9a84c` | Primary accent, CTAs, highlights |
| Gold Light | `#dfc06e` | Hover states, gradients |
| Gold Dark | `#a68830` | Active states, shadows |
| Champagne | `#f5e6c8` | Light gold accents |

### Neutral Palette

| Token | Hex | Usage |
|---|---|---|
| Obsidian | `#0a0a0a` | Primary background |
| Midnight | `#111111` | Card backgrounds, modals |
| Charcoal | `#1a1a1a` | Secondary backgrounds |
| Graphite | `#2d2d2d` | Borders, dividers |
| Slate | `#404040` | Muted elements |
| Smoke | `#8a8a8a` | Body text, descriptions |
| Mist | `#b8b8b8` | Secondary text |
| Pearl | `#e8e4de` | Primary text, headings |
| Ivory | `#faf6f0` | Brightest text |

### Semantic Colors

| Token | Value | Usage |
|---|---|---|
| Background | `#0a0a0a` | Page background |
| Foreground | `#e8e4de` | Primary text |
| Border | `rgba(201,168,76,0.12)` | Gold-tinted borders |
| Destructive | `#b44040` | Error states |

## Typography

### Font Pairing

- **Display / Headings**: Playfair Display (serif)
- **Body / UI**: Inter (sans-serif)

### Type Scale

| Class | Size | Usage |
|---|---|---|
| `heading-hero` | `clamp(3rem, 8vw, 9rem)` | Hero titles |
| `heading-section` | `clamp(2rem, 5vw, 5rem)` | Section headings |
| `heading-sub` | `clamp(1.5rem, 3vw, 2.5rem)` | Sub-headings |
| `label` | `0.75rem` | Section labels (uppercase, tracking) |
| Body | `1rem` | Standard text |
| Small | `0.875rem` | Descriptions |
| Tiny | `0.75rem` | Captions, micro text |

### Font Weights

- Display: 400 (light/elegant)
- Body: 300 (light), 400 (regular), 500 (medium), 600 (semibold)

## Spacing

### Section Spacing

```css
--section-padding: clamp(80px, 10vw, 160px);
--container-padding: clamp(20px, 5vw, 80px);
--container-max: 1400px;
```

### Spacing Scale

Using Tailwind utilities:
- `gap-1` (4px) to `gap-32` (128px)
- `p-4` (16px) to `p-16` (64px)
- `mb-4` (16px) to `mb-24` (96px)

## Buttons

### Primary Button

```css
padding: 16px 40px;
font-size: 0.8rem;
font-weight: 600;
letter-spacing: 0.15em;
text-transform: uppercase;
background: linear-gradient(135deg, #dfc06e, #c9a84c);
color: #0a0a0a;
```

### Outline Button

```css
padding: 16px 40px;
border: 1px solid rgba(201,168,76,0.4);
background: transparent;
color: #e8e4de;
```

## Glass Effect

```css
background: rgba(10, 10, 10, 0.75);
backdrop-filter: blur(20px);
border: 1px solid rgba(201,168,76,0.15);
```

## Shadows

```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 20px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 16px 60px rgba(0, 0, 0, 0.6);
--shadow-glow: 0 0 30px rgba(201, 168, 76, 0.15);
```

## Border Radius

```css
--radius-xs: 4px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-xl: 32px;
```

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|---|---|---|
| Mobile | 320px - 640px | Single column, simplified 3D |
| Tablet | 640px - 1024px | Two-column layouts |
| Desktop | 1024px - 1440px | Full layouts |
| Large Desktop | 1440px+ | Maximum container width |

## Transitions

```css
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--transition-fast: 200ms;
--transition-medium: 400ms;
--transition-slow: 700ms;
```
