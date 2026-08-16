---
name: code-conventions
description: "Code conventions for the capito-landing Astro codebase. Use when: naming files, components, CSS classes, or any identifier."
---

# Code Conventions

## File and Folder Naming

- Component files: PascalCase — `BrowserCTA.astro`, `HeroSection.astro`
- Pages: kebab-case — `index.astro`, `privacy-policy.astro`
- Styles: kebab-case — `global.css`

## CSS

- CSS custom properties for all tokens — never hardcode colors, spacing, or font sizes
- Class names: kebab-case — `.btn-primary`, `.section-hero`
- Scoped component styles go in the component's `<style>` block
- Global utility classes go in `src/styles/global.css`

## Astro Component Frontmatter

- Keep the frontmatter (`---`) block minimal — props interface and imports only
- No business logic in frontmatter beyond transforming incoming props

## Props

Use TypeScript interfaces in the frontmatter for component props:

```ts
interface Props {
  title: string;
  href: string;
}
const { title, href } = Astro.props;
```
