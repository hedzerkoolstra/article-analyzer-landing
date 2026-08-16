# Error Handling

This is a static marketing site. There are no API calls or user-initiated actions that can fail at runtime. Error handling is therefore a build-time and content concern, not a runtime pattern.

## Build-time errors

- Treat TypeScript type errors and Astro build errors as blockers — do not ship with warnings
- Validate all required props are typed and non-optional; missing props should fail the build, not silently render empty

## Broken links and missing assets

- All internal links must resolve to an existing page
- All images and assets must exist in `public/` before being referenced
- Use descriptive `alt` text on all `<img>` elements — empty `alt=""` only for decorative images

## Form / CTA interactions (if added)

If a contact form or email signup is added:

| Situation                                 | Pattern                                                       |
| ----------------------------------------- | ------------------------------------------------------------- |
| Submission succeeds                       | Replace form with inline success message                      |
| Submission fails (network / server)       | Inline error message below the submit button — no page reload |
| Invalid input (email format, empty field) | Inline field-level feedback beneath the input                 |
