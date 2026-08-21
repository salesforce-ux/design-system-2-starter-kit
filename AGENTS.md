# Agent guidelines: Design System 2 Starter Kit

This repository is a **starter template** for prototyping Salesforce-aligned UIs locally. It uses **LWC** (Lightning Web Components), **Vite**, **SLDS** (Salesforce Lightning Design System), and **lightning-base-components**, with synthetic shadow DOM and client-side routing.

---

## Project-specific guidance

### Where to put code

- **Route-level views**: `src/modules/page/<name>/` → tag `page-<name>`. Add a route in `src/routes.config.js`, then import and register the component in `src/modules/shell/app/app.js` (`ROUTE_COMPONENTS`). The router picks up new routes automatically; `src/router.js` does not need editing.
- **New features and pages are primary by default**: When the user requests a new feature or page, make it the primary navigation tab and initial landing page without asking for confirmation. Give it a `navPage`, place that id first in every applicable navigation app's `pages` list in `src/apps.config.js`, and set each applicable app's `defaultPath` to its app-prefixed route so it appears immediately on page load. Keep existing pages as secondary tabs unless the user explicitly requests different behavior. Apps without primary navigation, such as the Builder app, are exempt.
- **Reusable UI / SLDS blueprints**: `src/modules/ui/<name>/` → tag `ui-<name>`. Use inside pages, the shell, or other components.
- **App shell**: `src/modules/shell/<name>/` → tag `shell-`*. Root app, layout, theme, docked panels — not route views (`page-`*) and not reusable components  (`ui-*`).
- **Do not** add components under `src/build/lightning-icon/shims/` except the checked-in icon overrides, or under `src/modules/lightning/`.

### SLDS linter

After you change any `.html` or `.css` file, run the SLDS linter on each file you touched before considering the task complete:

```bash
npx @salesforce-ux/slds-linter@latest lint <path-to-changed-file>
```

Fix reported issues where possible. If something cannot be fixed, say so briefly.

### Engineering habits

- For ALL UI work, **read `node_modules/@salesforce/afv-skills/skills/design-systems-slds-apply/SKILL.md` first**.
- **Prefer Lightning Base Components over hand-rolled SLDS markup.** When a `lightning-*` component exists for what you're building, use it instead of reconstructing the `slds-*` blueprint from memory (e.g. `lightning-card` not `slds-card`, `lightning-button` not `slds-button`, `lightning-icon` not `slds-icon`). Only hand-roll a blueprint when no base component covers the case, and say so when you do.
- Prefer small, single-responsibility LWCs and readable structure.
- Do not use `!important`.
- Do not use inline `style` attributes; use utility classes or the component’s CSS file as appropriate.

### Modals

Extend `lightning/modal`, following `**src/modules/ui/demoModal/`** as the reference (header, body, footer slots; open via `MyModal.open({ size, label })`). Do not build modals from raw `slds-modal` markup.

### Forms

Use Lightning Base Component form elements (`lightning-input`, `lightning-combobox`, `lightning-radio-group`, `lightning-textarea`, `lightning-select`) for all form inputs. Do not use raw `<input>`, `<select>`, or `<textarea>`. Use correct input `type` (e.g., `type="email"`) and `read-only` mode for data display.

### SLDS Agent Skills

SLDS skills ship in the **`@salesforce/afv-skills`** npm dependency.

- **For ALL UI work** (markup, CSS, layout, icons, LBC vs blueprint), **read and follow `node_modules/@salesforce/afv-skills/skills/design-systems-slds-apply/SKILL.md` first**. Do not improvise SLDS from memory when a skill exists. Re-read it when you iterate on presentation.
- **`design-systems-slds2-migrate`** — SLDS 1→2 / linter-driven uplift only.
- **`design-systems-slds-validate`** — audit or scorecard requests only.

| Skill | `SKILL.md` | When to use |
|-------|------------|-------------|
| design-systems-slds-apply | `node_modules/@salesforce/afv-skills/skills/design-systems-slds-apply/SKILL.md` | Default for SLDS-backed UI: blueprints, hooks, utilities, icons, LBC choice. |
| experience-lwc-generate | `node_modules/@salesforce/afv-skills/skills/experience-lwc-generate/SKILL.md` | As-needed reference when stuck on LWC framework behavior. Not part of routine UI work. See `references/` (esp. `lwc-best-practices.md`, `template-anti-patterns.md`). |
| design-systems-slds2-migrate | `node_modules/@salesforce/afv-skills/skills/design-systems-slds2-migrate/SKILL.md` | Migration and fixes from SLDS 1 to 2; linter violations and hook/token replacements. |
| design-systems-slds-validate | `node_modules/@salesforce/afv-skills/skills/design-systems-slds-validate/SKILL.md` | Compliance audit or scored quality report, not for implementing or fixing UI. |
| repo-setup | `.agent/skills/repo-setup/SKILL.md` | Set up a GitHub repo: detects host from origin remote, prerequisites, repo creation, initial push. Use when the user mentions saving or backing up their work. |
| first-time-deploy | `.agent/skills/first-time-deploy/SKILL.md` | Publish to GitHub Pages. Repeat deploys: just `npm run deploy`. First time: runs repo-setup, then deploys and configures Pages. Use when the user asks about deploying or sharing a link with a PM, stakeholder, etc. |

### LWC troubleshooting

If you hit unexpected LWC framework behavior (`@api`, `@wire`, lifecycle, events, template expressions), consult the **`experience-lwc-generate`** skill's `references/` files.

### Deployment (GitHub Pages)

- **Only path:** **`npm run deploy`** runs **`build:gh-pages`** (hash routing for static hosting), then pushes **`dist/`** to **`gh-pages`** on **`origin`**. Default **`npm run build`** / **`npm run dev`** keep path-based routing. GitHub Pages **Source** must be **Deploy from a branch** → **`gh-pages`** (see README).
- For another push target, `gh-pages` accepts **`-o <remote>`** or **`-r <url>`**; mention when the user asks.
