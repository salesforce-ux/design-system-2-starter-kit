# Agent guidelines: Design System 2 Starter Kit

This repository is a **starter template** for prototyping Salesforce-aligned UIs locally. It uses **LWC** (Lightning Web Components), **Vite**, **SLDS** (Salesforce Lightning Design System), and **lightning-base-components**, with synthetic shadow DOM and client-side routing.

---

## Project-specific guidance

### Where to put code

- **Route-level views**: `src/modules/page/<name>/` → tag `page-<name>`. Add a route in `src/routes.config.js`, then import and register the component in `src/modules/shell/app/app.js` (`ROUTE_COMPONENTS`). The router picks up new routes automatically; `src/router.js` does not need editing.
- **Reusable UI**: `src/modules/ui/<name>/` → tag `ui-<name>`. Use inside pages or other components.
- **App shell**: `src/modules/shell/<name>/` → tag `shell-`*. Root app, layout, header, nav, theme, not route views (`page-`*) and not generic reusable widgets (`ui-*`).
- **Do not** add components under `src/build/lightning-icon/shims/` except the checked-in icon overrides, or under `src/modules/lightning/`.

### SLDS linter

After you change any `.html` or `.css` file, run the SLDS linter on each file you touched before considering the task complete:

```bash
npx @salesforce-ux/slds-linter@latest lint <path-to-changed-file>
```

Fix reported issues where possible. If something cannot be fixed, say so briefly.

### Engineering habits

- For UI work, **read `.agent/skills/applying-slds/SKILL.md` first**.
- Prefer small, single-responsibility LWCs and readable structure.
- Do not use `!important`.
- Do not use inline `style` attributes; use utility classes or the component’s CSS file as appropriate.

### Modals

Extend `lightning/modal`, following `**src/modules/ui/demoModal/`** as the reference (header, body, footer slots; open via `MyModal.open({ size, label })`). Do not build modals from raw `slds-modal` markup.

### Forms

Use Lightning Base Component form elements (`lightning-input`, `lightning-combobox`, `lightning-radio-group`, `lightning-textarea`, `lightning-select`) for all form inputs. Do not use raw `<input>`, `<select>`, or `<textarea>`. Use correct input `type` (e.g., `type="email"`) and `read-only` mode for data display.

### SLDS Agent Skills

SLDS skills live under **`.agent/skills/`** (synced on `npm install`; run `npm run skills:sync` if missing). **For UI change** (markup, CSS, layout, icons, LBC vs blueprint), **read and follow `.agent/skills/applying-slds/SKILL.md` first**. **Do not** improvise SLDS from memory when it exists. Re-read it when you iterate on presentation. **Exceptions:** **`uplifting-components-to-slds2`** for SLDS 1→2 / linter-driven uplift only; **`validating-slds`** for audit or scorecard requests only. **Neither** replaces **`applying-slds`** when you are building or extending UI.

| Skill | `SKILL.md` | When to use |
|-------|------------|-------------|
| applying-slds | `.agent/skills/applying-slds/SKILL.md` | Default for SLDS-backed UI: blueprints, hooks, utilities, icons, LBC choice. |
| uplifting-components-to-slds2 | `.agent/skills/uplifting-components-to-slds2/SKILL.md` | Migration and fixes from SLDS 1 to 2; linter violations and hook/token replacements. |
| validating-slds | `.agent/skills/validating-slds/SKILL.md` | Compliance audit or scored quality report, not for implementing or fixing UI. |

### LWC troubleshooting

Use the **Salesforce DX MCP** selectively ONLY for **LWC framework and Salesforce-platform** issues (`@api`, `@wire`, lifecycle, events, org-only behavior).

### Deployment (GitHub Pages)

- **Only path:** **`npm run deploy`** runs **`build:gh-pages`** (hash routing for static hosting), then pushes **`dist/`** to **`gh-pages`** on **`origin`**. Default **`npm run build`** / **`npm run dev`** keep path-based routing. GitHub Pages **Source** must be **Deploy from a branch** → **`gh-pages`** (see README).
- For another push target, `gh-pages` accepts **`-o <remote>`** or **`-r <url>`**; mention when the user asks.
