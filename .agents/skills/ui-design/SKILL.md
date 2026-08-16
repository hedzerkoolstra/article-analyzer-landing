---
name: ui-design
description: "UI design guidelines for the capito-landing Astro site. Use when: building or styling components, implementing layouts, applying color tokens, or any task involving visual design decisions."
argument-hint: "Describe the section or UI element you are designing"
---

# UI Design Guidelines

## Aesthetic

Minimal, dark-mode-only marketing site. Thin strokes, muted surfaces, warm yellow as the single accent. Content-first — generous whitespace, clear visual hierarchy.

## Layout

- Max content width: `1100px`, centered with `margin: 0 auto`
- Full-bleed section backgrounds; content constrained inside
- Responsive: mobile-first, single breakpoint at `768px` for desktop reflow
- No horizontal scroll at any viewport width

## Design Tokens

All tokens are CSS custom properties defined in `src/styles/global.css`. **Never use hardcoded color or surface values** — always reference a token.

### Surfaces

| Token | Value | Use |
|---|---|---|
| `--color-surface-deep` | `#111114` | Page background |
| `--color-surface-header` | `#17171c` | Header / nav background |
| `--color-surface-raised` | `#1c1c21` | Cards, feature panels |
| `--color-surface-overlay` | `rgba(255,255,255,0.08)` | Hover tints |

### Borders

| Token | Value | Use |
|---|---|---|
| `--color-border-default` | `rgba(255,255,255,0.06)` | Dividers, section separators |
| `--color-border-mid` | `rgba(255,255,255,0.10)` | Card borders |
| `--color-border-strong` | `rgba(255,255,255,0.12)` | Input borders |

### Accent Yellow

| Token | Value | Use |
|---|---|---|
| `--color-accent-yellow` | `#FFD84D` | Primary CTA, highlights, active state |
| `--color-accent-yellow-text` | `#e8c040` | Yellow text on dark backgrounds |
| `--color-accent-yellow-soft` | `rgba(255,216,77,0.08)` | Subtle tinted backgrounds |
| `--color-accent-yellow-mid` | `rgba(255,216,77,0.18)` | Gradient accents |
| `--color-accent-yellow-border` | `rgba(255,216,77,0.20)` | Yellow-tinted element borders |
| `--color-accent-yellow-focus` | `rgba(255,216,77,0.50)` | Focus rings |

### Score Tiers (used in product screenshots / demos)

| Token | Value | Use |
|---|---|---|
| `--color-score-low` | `#e24b4a` | Low credibility indicator |
| `--color-score-medium` | `#ef9f27` | Medium credibility indicator |
| `--color-score-high` | `#97c459` | High credibility indicator |

### Text

| Token | Use |
|---|---|
| `--text-primary` | `rgba(255,255,255,0.92)` — headings, active labels |
| `--text-secondary` | `rgba(255,255,255,0.65)` — body text, descriptions |
| `--text-tertiary` | `rgba(255,255,255,0.40)` — captions, muted labels |

### Typography

| Token | Value |
|---|---|
| `--font-size-xs` | `11px` |
| `--font-size-sm` | `12px` |
| `--font-size-md` | `12px` |
| `--font-size-base` | `13px` |
| `--font-size-lg` | `14px` |
| `--font-size-xl` | `18px` |

### Spacing

| Token | Value |
|---|---|
| `--spacing-xs` | `4px` |
| `--spacing-sm` | `8px` |
| `--spacing-md` | `12px` |
| `--spacing-lg` | `16px` |
| `--spacing-xl` | `24px` |
| `--spacing-2xl` | `32px` |

### Shadcn-style RGB triplet tokens

Used via `rgb(var(--token))` for opacity composition:

```css
--background: 11 11 13;
--foreground: 240 240 240;
--primary: 255 216 77;
--primary-foreground: 11 11 13;
--muted: 20 20 23;
--muted-foreground: 136 136 136;
--border: 34 34 38;
--accent-red: 255 108 108;
--accent-amber: 255 190 92;
--accent-blue: 93 155 255;
--accent-green: 95 214 148;
```

## Global Utility Classes

Defined in `src/styles/global.css` — use these before writing new bespoke styles.

| Class | Use |
|---|---|
| `.btn-primary` | Yellow filled CTA button |
| `.btn-primary.btn-lg` | Larger variant for hero CTAs |

## Styling Rules

- Scoped `<style>` blocks inside Astro components for all component-specific styles
- Plain `src/styles/global.css` for tokens and reusable utility classes only
- No inline styles
- Transitions: `0.15s` for color/opacity/background on interactive elements
- Icon stroke width: `1.8–1.9` for 14–15px icons
