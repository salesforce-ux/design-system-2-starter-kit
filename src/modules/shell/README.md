# `shell/` — App chrome

Components here wrap the **whole app**: root bootstrap, layout, theme, and docked panels. They get the `shell-` prefix in the DOM (e.g. `shell-app`, `shell-global-shell`).

**Use this namespace for:**

- The root component mounted from `src/index.js` (`shell-app`).
- Global layout. Not screens tied to a single route.
- Anything that is **not** a `page-*` view and **not** a reusable `ui-*` component.

**Do not use for:** route-level views (`page/`), reusable widgets or SLDS blueprint implementations (`ui/`).

**Example:** The existing `app/` folder is the shell root; add sibling folders only for other chrome pieces (e.g. theme switcher, docked panels).
