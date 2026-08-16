---
name: code-architecture
description: "Architectural guide for the capito-landing Astro codebase. Use when: creating new pages or components, deciding where code belongs, or any task that requires placing code in the right layer."
argument-hint: "Describe the page section or component you want to build"
---

# Code Architecture

## Stack

Astro — static site generator. No React, no client-side framework unless explicitly added as an Astro integration. Pages are server-rendered to static HTML by default.

## Folder Structure

```
src/
  pages/        # Route entry points — one .astro file per URL
    index.astro
  components/   # Reusable Astro components — presentational, no routing logic
    BrowserCTA.astro
  styles/       # Global CSS — design tokens, resets, utility classes
    global.css
```

## Layer Rules

### pages/

- One `.astro` file per public URL; filename maps directly to route (`index.astro` → `/`)
- Responsible for page-level layout, section composition, and SEO metadata (`<head>`)
- Imports components from `src/components/`; no inline business logic beyond passing props

### components/

- Self-contained presentational units — a section, a card, a CTA block
- Receive data via props; no direct fetch calls or side effects
- Scoped styles via `<style>` block inside the component file (Astro scopes these automatically)
- No routing logic; no awareness of which page they're used on

### styles/global.css

- Design tokens only (CSS custom properties), resets, and global utility classes (`.btn-primary`, etc.)
- Never put component-specific styles here — those live in the component's `<style>` block

## Decision Guide

| What you're building | Where it goes |
|---|---|
| New page / route | `src/pages/<name>.astro` |
| Reusable section or UI block | `src/components/<Name>.astro` |
| Design token or global utility class | `src/styles/global.css` |
| One-off section used only once | Inline in the page `.astro` file |

## Import Rules

- Import components with `import Name from '../components/Name.astro'`
- No barrel `index.ts` files — import directly from the source file
- Static assets (images, fonts) go in `public/` and are referenced by absolute path (`/logo.svg`)
