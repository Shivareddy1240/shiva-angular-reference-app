# Clean Architecture Notes

This refactored version separates component logic, template markup, and styling.

## Component File Pattern

Each component now follows this structure:

```txt
component-name.component.ts
component-name.component.html
component-name.component.scss
```

## Main Layers

```txt
src/app/core
```

Application-wide models, services, guards, resolvers, and state.

```txt
src/app/shared
```

Reusable components, pipes, and directives.

```txt
src/app/features
```

Page-level features such as Home, About, Projects, Skills, Dashboard, Angular Lab, Resume, and Contact.

```txt
src/app/layout
```

Shell, Header, and Footer components.

## Styling Rules

- Global tokens and reusable utility classes live in `src/styles.scss`.
- Feature-specific styles live beside the feature component.
- Reusable component styles live beside the shared component.
- No inline templates.
- No inline style attributes.
- Project cards use equal-height layout to avoid uneven tiles.
