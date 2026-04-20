# Salesforce Design System 2 Starter Kit

A **starter template** for prototyping and developing Salesforce experiences locally. Built with **LWC** (Lightning Web Components), **Vite**, **SLDS** (Salesforce Lightning Design System), and **lightning-base-components**, so you get fast builds, hot reload, and a setup that aligns with the Salesforce platform (synthetic shadow, base components, design tokens).

## Who this is for

- Developers prototyping Salesforce UIs locally before or alongside platform deployment  
- Teams designing or evaluating experiences with LWC and SLDS  
- Anyone who wants a local dev environment that matches Salesforce behavior (synthetic shadow, global SLDS styles, Lightning Base Components)

## What you get

- **App shell** — Header, global navigation, theme switcher (light/dark, SLDS 1/2), and panel layout  
- **Client-side routing** — Declarative routes in `src/routes.config.js` with path params (e.g. `/users/:id`), History API, no full page reload  
- **SLDS + Lightning Base Components** — Design system and Salesforce component library wired and ready to use  
- **Synthetic Shadow DOM** — Matches Salesforce platform behavior so styles and DOM semantics align with production  
- **Icon setup** — Prebuild script, Vite aliases for `lightning/iconSvgTemplates*`, and shim modules under `src/build/lightning-icon/shims/`; generated bundles in `src/build/generated/`  
- **Example pages** — Home, Icons, Contacts, and a sample parameterized page (`/users/:id`). See `src/modules/page/` and `src/modules/ui/` for patterns.

## Quick start

```bash
npm install
npm run dev
```

Dev server runs at **http://localhost:3000**. Global SLDS styles are resolved from **`@salesforce-ux/design-system`** and **`@salesforce-ux/design-system-2`** by Vite (hashed CSS in `dist/assets/` on build); see **`src/build/slds-loader.js`**. Icons for `<lightning-icon>` are generated on `dev` / `build`. To build and preview a production bundle:

```bash
npm run build
npm run preview
```

## Project structure

```
design-system-2-starter-kit/
├── src/
│   ├── modules/
│   │   ├── shell/                 # App shell (shell-*)
│   │   │   ├── app/               # Root app, route rendering
│   │   │   ├── globalShell/       # Layout wrapper
│   │   │   ├── globalHeader/      # Top bar
│   │   │   ├── globalNavigation/ # Nav links
│   │   │   ├── panel/             # Side panel
│   │   │   └── themeSwitcher/     # SLDS version + dark mode
│   │   ├── page/                  # Route-level views (page-*)
│   │   │   ├── home/
│   │   │   ├── user/              # e.g. /users/:id
│   │   │   └── iconTest/
│   │   ├── ui/                    # Reusable building blocks (ui-*)
│   │   │   └── example/
│   │   └── data/                  # Shared modules (e.g. fixtures) imported as data/*
│   ├── build/                     # Build wiring, generated assets, shims (not LWC app UI)
│   │   ├── generated/             # Generated icon modules (do not edit)
│   │   ├── shim/                  # LWC / package shims (e.g. gate modules)
│   │   ├── slds/
│   │   │   └── slds1-url.js       # Lazy chunk: resolved URL for SLDS 1 stylesheet
│   │   ├── lightning-icon/shims/  # Icon template overrides (lightning/iconSvgTemplates* → here)
│   │   └── slds-loader.js         # SLDS stylesheet link injection, theme bootstrap, lazy SLDS 1
│   ├── router.js                  # Route definitions and navigation
│   └── index.js                   # App entry point
├── scripts/
│   ├── prebuild-icons.mjs         # Icon codegen (run via npm scripts)
│   └── sync-afv-skills.mjs        # Copies afv-library skills → .agent/skills/
├── index.html
├── vite.config.js
└── package.json
```

### Component namespaces

Folder-based namespaces under `src/modules/` define the LWC tag prefix:

| Folder        | Tag prefix | Use for |
|---------------|------------|--------|
| **shell/**    | `shell-*`  | App shell only (e.g. `shell-app`, `shell-global-header`). Not for feature pages. |
| **page/**     | `page-*`   | Route-level views (one per URL). e.g. `page-user` → `/users/:id`. |
| **ui/**       | `ui-*`     | Reusable building blocks (cards, buttons, modals). Used inside pages or other components. |
| **data/**     | —          | Plain modules (e.g. fixtures), imported as `data/<name>`. Not LWC tags. |

Only add components under **page/** or **ui/**. Put shell chrome in **`shell/`** only. Icon template shims live under **`src/build/lightning-icon/shims/`**; do not add other files there. Do not add a **`lightning/`** folder under **`src/modules`** for custom components.

**Examples:** Add `src/modules/page/dashboard/` → register in router and app, use as `page-dashboard` on e.g. `/dashboard`. Add `src/modules/ui/card/` → use in templates as `<ui-card>`.

## Using this as a template

1. Clone or copy the repo, then `npm install` and `npm run dev`.
2. **Add a page:** Create a folder under `src/modules/page/<name>/`, then:
   - Add a route in `src/routes.config.js` (e.g. `{ path: '/dashboard', component: 'page-dashboard', title: 'Dashboard', navPage: 'dashboard', navLabel: 'Dashboard' }`).
   - In `src/modules/shell/app/app.js`, import the component and add it to `ROUTE_COMPONENTS`. That's it — `src/router.js` does not need editing.
   - For child routes under an existing tab (e.g. `/contacts/:id`), use `navHighlight: '<parentNavPage>'` instead of `navPage` so the parent tab is highlighted without creating a new nav entry.
3. **Add a reusable component:** Create a folder under `src/modules/ui/<name>/` and use it as `<ui-<name>>` in any page or other component.
4. Follow the namespace rules above and the SLDS/LWC conventions referenced in this repo (e.g. `.cursor/rules` if present).

**Modals:** For modal dialogs, extend `LightningModal` from `lightning/modal` and use the in-repo example as your starting point: `src/modules/ui/demoModal/`. It shows the correct structure (header → body → footer with `lightning-modal-header`, `lightning-modal-body`, `lightning-modal-footer`) and opening via `MyModal.open({ size, label })`. Do not implement modals with raw SLDS modal markup.

## Routing

The app uses a small client-side router in `src/router.js`:

- **Route config** — Routes are defined in `src/routes.config.js` as `{ path, component, title, navPage?, navLabel?, navPath?, navHighlight? }`. `title` can be a string or function of route params.
- **Path params** — Use `:id` (e.g. `/users/:id`); params are available to the page component via `getCurrentRoute()` from `src/router.js`.
- **Nav tabs** — Only routes with `navPage` create a tab in the global nav. Child routes that should highlight a parent tab use `navHighlight` instead (e.g. `navHighlight: 'contacts'` on `/contacts/:id`).
- **Navigation** — Use `navigate(path)` from the router; the app shell subscribes to route changes and renders the matching `page-*` component.
- **History** — Uses the History API; back/forward work without full page reload.

## Tech stack and dependencies

- **vite** — Build tool and dev server  
- **vite-plugin-lwc** — LWC support for Vite  
- **lwc** — Lightning Web Components framework  
- **@lwc/synthetic-shadow** — Synthetic shadow DOM (Salesforce-like)  
- **lightning-base-components** — Salesforce component library  
- **@salesforce-ux/design-system** — Classic SLDS; Vite bundles `assets/styles/salesforce-lightning-design-system.min.css` (and nested `url(...)` assets) when SLDS 1 is loaded  
- **@salesforce-ux/design-system-2** — SLDS 2 / Cosmos; Vite bundles `dist/css/slds2.cosmos.css` for the default theme  
- **`public/images/`** (e.g. favicon `salesforce.svg`) stays in the repo as app-owned assets.

## SLDS 1 and SLDS 2

**SLDS 2** is the default. `src/index.js` awaits **`initSldsFromStorage()`** from **`src/build/slds-loader.js`** before mounting LWC so the correct theme is active on first paint (including when `localStorage` says the last session used SLDS 1).

The loader injects **`<link rel="stylesheet" data-slds="...">`** elements and toggles the active sheet with the **`media`** attribute (`all` vs `not all`), matching the previous static-HTML behavior. Stylesheet URLs come from **`new URL(..., import.meta.url)`** pointing at files under **`node_modules/@salesforce-ux/...`** so Vite emits versioned CSS assets and rewrites nested **`url(...)`** references. **SLDS 1** is loaded **lazily** (dynamic `import()` of `src/build/slds/slds1-url.js`) until the user switches themes or a saved preference requires it—so the default bundle does not fetch classic SLDS until needed.

Icon templates come from **lightning-base-components** via **`prebuild-icons.mjs`**.

## Shadow DOM (synthetic vs native)

This template uses **Synthetic Shadow DOM** so behavior and styling match the Salesforce platform.

| Feature        | Synthetic Shadow (default) | Native Shadow   |
|----------------|----------------------------|-----------------|
| Platform match | Matches Salesforce          | Different       |
| Global styles  | Penetrate components       | Blocked         |
| DOM queries    | Can query inside components| Cannot query in |
| `shadowRoot`   | `null`                     | ShadowRoot      |

**Verify:** In the browser console at http://localhost:3000 run `document.querySelector('shell-app').shadowRoot` — `null` means synthetic shadow is active.

**Switch to native shadow:** In `vite.config.js` set `disableSyntheticShadowSupport: true` in the LWC plugin options.

**Why synthetic?** Matches Salesforce platform behavior, allows global SLDS styles to apply, simplifies migration of components to the platform, and keeps DOM inspectable for tests and tooling.

## Icons

SLDS icons are generated by a prebuild step. Run `npm run dev` or `npm run build` so `scripts/prebuild-icons.mjs` runs and updates `src/build/generated/`. Vite resolves **`lightning/iconSvgTemplates*`** to the shim modules under **`src/build/lightning-icon/shims/`**; do not add unrelated code there.

## Conventions and design system

The project follows SLDS and LWC best practices: prefer Lightning Base Components, then SLDS utility classes, then styling hooks for customisation. For detailed guidance (e.g. tokens, components, accessibility), see the [Lightning Design System](https://lightningdesignsystem.com) and [Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc) documentation. This repo may include additional conventions (e.g. in `.cursor/rules`).

## Deployment and platform

This template is for **local development and prototyping**. Deploying to the Salesforce platform (e.g. as an LWC-based experience or in a specific product) follows standard Salesforce deployment and may require product-specific configuration; it is out of scope for this README.

### GitHub Pages

Publishing is **`npm run deploy`** only: a **`build:gh-pages`** production build (hash-based client routes for static hosting), then push **`dist/`** to the **`gh-pages`** branch on **`origin`** ([`gh-pages`](https://www.npmjs.com/package/gh-pages)).
This repo does not use GitHub Actions for Pages.

**One-time setup**

1. Configure Git so you can **`git push` to `origin`**.
2. Run **`npm run deploy`** once so branch **`gh-pages`** exists on the remote.
3. On GitHub: **Settings → Pages** → **Build and deployment** → **Deploy from a branch** → Branch **`gh-pages`**, folder **`/` (root)** → Save.

**Ongoing:** run **`npm run deploy`** whenever you want to publish a new build.

After GitHub finishes publishing, find your live site URL on **Settings → Pages** (the hostname depends on your GitHub plan and organization settings).

**Routing:** Default **`npm run dev`** and **`npm run build`** use normal path URLs (`/settings`). **`npm run deploy`** uses **`npm run build:gh-pages`**, which enables **hash URLs** (e.g. `…/your-repo/#/settings`) so refreshes and deep links work on GitHub Pages. Path-only bookmarks like `…/your-repo/settings` (no hash) will still 404 on Pages.

**Preview locally:** **`npm run build`** then **`npm run preview`** exercises path routing. To preview the GitHub Pages bundle, run **`npm run build:gh-pages`** then **`npm run preview`**.

**Another remote or URL:** `npx gh-pages -d dist -o <remote-name>` or `npx gh-pages -d dist -r https://github.com/org/repo.git`.

## AI tooling

This project includes an `mcp.json` that automatically configures the [Salesforce DX MCP server](https://www.npmjs.com/package/@salesforce/mcp) for AI-assisted development. Editors that support MCP (e.g. Claude Code, Cursor, VS Code with Copilot) will pick it up and gain access to Salesforce-specific code analysis and LWC guidance tools. No setup is required — the server runs via `npx` on demand.

### SLDS / design-system agent skills (afv-library)

After `npm install`, selected skills from [`forcedotcom/afv-library`](https://github.com/forcedotcom/afv-library) (`develop`) are copied into **`.agent/skills/`** (gitignored). Initial sync needs **git** and network access to GitHub.

To refresh the skill files from the latest `develop`, run **`npm run skills:sync`** directly.

## References

- [Lightning Design System](https://lightningdesignsystem.com)  
- [Lightning Web Components (Salesforce)](https://developer.salesforce.com/docs/component-library/overview/components)  
- [LWC (OSS) / vite-plugin-lwc](https://github.com/salesforce/lwc) — for local LWC + Vite behavior
