/**
 * Single source of truth for "apps" — a layer above routes.
 *
 * Each app declares:
 *   id          - Stable identifier used in storage and events
 *   label       - Display name shown in the App Launcher (waffle)
 *   variant     - Navigation layout: "standard" (tabs) or "console" (object switcher)
 *   pathPrefix  - URL prefix that scopes the app's routes (e.g. /app, /console)
 *   defaultPath - Where to land when the app is opened from the App Launcher
 *   pages       - Ordered list of navPage ids (from routes.config.js) the app
 *                 surfaces in its primary navigation. Pages can be shared
 *                 across multiple apps.
 *
 * Routes themselves stay in routes.config.js with logical (un-prefixed) paths;
 * the router strips/prepends the active app's prefix on the way in/out.
 */

export const APP_STORAGE_KEY = 'shell-current-app';

export const apps = [
  {
    id: 'standard',
    label: 'Standard App',
    variant: 'standard',
    pathPrefix: '/app',
    defaultPath: '/app',
    pages: ['home', 'icons', 'user', 'contacts'],
  },
  {
    id: 'console',
    label: 'Console App',
    variant: 'console',
    pathPrefix: '/console',
    defaultPath: '/console/contacts',
    pages: ['contacts', 'user'],
  },
];

export const DEFAULT_APP_ID = 'standard';

export function getAppById(id) {
  return apps.find((a) => a.id === id) ?? null;
}

/**
 * Find which app owns a logical path by longest matching prefix.
 * Returns null if no app prefix matches (e.g. bare "/").
 */
export function getAppForPath(logicalPath) {
  if (!logicalPath) return null;
  const sorted = [...apps].sort(
    (a, b) => b.pathPrefix.length - a.pathPrefix.length
  );
  for (const app of sorted) {
    if (
      logicalPath === app.pathPrefix ||
      logicalPath.startsWith(`${app.pathPrefix}/`)
    ) {
      return app;
    }
  }
  return null;
}

/** Strip an app's prefix off a logical path. Returns "/" for the bare prefix. */
export function stripAppPrefix(logicalPath, app) {
  if (!app) return logicalPath;
  if (logicalPath === app.pathPrefix) return '/';
  if (logicalPath.startsWith(`${app.pathPrefix}/`)) {
    return logicalPath.slice(app.pathPrefix.length);
  }
  return logicalPath;
}

/** Prepend an app's prefix to a logical path. "/" becomes the bare prefix. */
export function withAppPrefix(logicalPath, app) {
  if (!app) return logicalPath;
  if (logicalPath === '/' || !logicalPath) return app.pathPrefix;
  return `${app.pathPrefix}${logicalPath}`;
}

/** Last-used app id from localStorage, or DEFAULT_APP_ID. */
export function getPersistedAppId() {
  try {
    const stored = localStorage.getItem(APP_STORAGE_KEY);
    return stored && getAppById(stored) ? stored : DEFAULT_APP_ID;
  } catch {
    return DEFAULT_APP_ID;
  }
}

export function persistAppId(id) {
  try {
    localStorage.setItem(APP_STORAGE_KEY, id);
  } catch {
    /* storage unavailable; non-fatal */
  }
}
