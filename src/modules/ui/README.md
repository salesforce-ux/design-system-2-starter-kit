# `ui/` — Reusable components

Components in this folder are **building blocks** used by pages, the shell, or other components. They get the `ui-` prefix in the DOM (e.g. `ui-global-header`, `ui-global-navigation`).

**Use this namespace for:**

- Reusable UI primitives (cards, buttons, modals, form controls)
- Shared layout or composition blocks
- Anything that is **not** a full route/view
- SLDS component blueprint implementations (global header, global navigation, etc.)

**Example:** Add a folder `card/` here → use as `<ui-card>` in your templates.
