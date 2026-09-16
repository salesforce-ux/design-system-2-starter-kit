/**
 * Mini router for LWC – declarative routes, dynamic params, History API.
 * No page refresh; back/forward supported.
 * Routes are defined in routes.config.js; apps (URL prefixes that scope a set
 * of routes) are defined in apps.config.js.
 *
 * Production `vite build` uses pathname + pushState. `vite build --mode gh-pages`
 * (npm run build:gh-pages) uses hash URLs (#/path) for static hosts like GitHub Pages.
 */

import { routes } from './routes.config.js';
import {
  getAppById,
  getAppForPath,
  stripAppPrefix,
  withAppPrefix,
  getPersistedAppId,
  DEFAULT_APP_ID,
} from './apps.config.js';

const DEFAULT_TITLE = 'Salesforce';

const HASH_MODE = import.meta.env.VITE_ROUTER_MODE === 'hash';

const listeners = new Set();

function getActiveAppForBuild() {
  return getAppForPath(getLogicalPath().split('?')[0]) || getAppById(DEFAULT_APP_ID);
}

function normalizeLogicalPath(path) {
  const [pathname, ...query] = path.split('?');
  const prefixed = pathname.startsWith('/') ? pathname : '/' + pathname;
  const normalized = prefixed.length > 1 ? prefixed.replace(/\/$/, '') : prefixed;
  return normalized + (query.length ? '?' + query.join('?') : '');
}

/** Logical path for route matching (always starts with /, no trailing slash except root). */
function getLogicalPath() {
  if (!HASH_MODE) {
    return normalizeLogicalPath(window.location.pathname) + window.location.search;
  }
  return normalizeLogicalPath(window.location.hash.slice(1) || '/');
}

function hashUrlFromLogicalPath(logicalPath) {
  const fragmentBody = logicalPath === '/' ? '' : logicalPath.slice(1);
  return `#/${fragmentBody}`;
}

function writeUrl(logicalPath, replace = false) {
  const url = HASH_MODE ? hashUrlFromLogicalPath(logicalPath) : logicalPath;
  if (replace) {
    history.replaceState({}, '', url);
  } else {
    history.pushState({}, '', url);
  }
}

/**
 * `href` for anchors (nav, copy link). When `logicalPath` already includes a
 * known app prefix it is preserved; otherwise the active app's prefix is
 * prepended so callers can keep using logical paths from routes.config.js.
 *
 * @param {string} logicalPath e.g. `/settings` or `/console/settings`
 * @param {string} [appId] optional app id to scope the link (defaults to active)
 */
export function linkHref(logicalPath, appId) {
  if (typeof logicalPath !== 'string' || logicalPath.startsWith('//') || /^[a-z][a-z\d+.-]*:/i.test(logicalPath) || logicalPath.includes('\\')) {
    throw new Error('Expected an internal route logicalPath');
  }
  const path = normalizeLogicalPath(logicalPath);
  const existingApp = getAppForPath(path.split('?')[0]);
  const finalPath = existingApp
    ? path
    : withAppPrefix(
        path,
        (appId && getAppById(appId)) || getActiveAppForBuild()
      );
  if (!HASH_MODE) {
    return finalPath;
  }
  return hashUrlFromLogicalPath(finalPath);
}

function matchRoute(path) {
  path = normalizeLogicalPath(path.split('?')[0]);
  const app = getAppForPath(path);
  const missing = { app: app?.id ?? null, params: {}, component: null, title: 'Page Not Found', notFound: true };
  if (!app) return missing;
  const subPath = stripAppPrefix(path, app);

  const candidates = [
    ...routes.filter((r) => r.app === app.id),
    ...routes.filter((r) => !r.app),
  ];

  for (const route of candidates) {
    const keys = [];
    const pattern = route.path.replace(/:([^/]+)/g, (_match, paramName) => {
      keys.push(paramName);
      return '([^/]+)';
    });

    const regex = new RegExp(`^${pattern}$`);
    const match = subPath.match(regex);

    if (match) {
      const params = {};
      keys.forEach((paramKey, i) => (params[paramKey] = match[i + 1]));

      return { ...route, params, app: app.id };
    }
  }

  return missing;
}

function getTitleForRoute(route) {
  if (!route?.title) return DEFAULT_TITLE;
  return typeof route.title === 'function'
    ? route.title(route.params || {})
    : route.title;
}

function resolveCurrentRoute() {
  // Only the bare root uses the saved preference. Unknown URLs remain visible.
  const current = getLogicalPath();
  if (current.split('?')[0] === '/') {
    const app = getAppById(getPersistedAppId()) || getAppById(DEFAULT_APP_ID);
    writeUrl(app.defaultPath + current.slice(1), true);
  }
  const route = matchRoute(getLogicalPath());
  document.title = getTitleForRoute(route);
  return route;
}

function notify() {
  const route = resolveCurrentRoute();
  listeners.forEach((listener) => listener(route));
}

export function navigate(path, { replace = false } = {}) {
  if (typeof path !== 'string' || path.startsWith('//') || /^[a-z][a-z\d+.-]*:/i.test(path) || path.includes('\\')) {
    throw new Error('Expected an internal route path');
  }
  const normalized = normalizeLogicalPath(path);
  const existingApp = getAppForPath(normalized.split('?')[0]);
  const logical = existingApp
    ? normalized
    : withAppPrefix(normalized, getActiveAppForBuild());
  if (logical === getLogicalPath()) return;
  writeUrl(logical, replace);
  notify();
}

/** Leave modified clicks, downloads and other browsing contexts to the browser. */
export function shouldHandleLink(event) {
  const anchor = event.currentTarget;
  return !event.defaultPrevented && event.button === 0 &&
    !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey &&
    (!anchor?.target || anchor.target === '_self') && !anchor?.hasAttribute?.('download');
}

export function getCurrentRoute() {
  return matchRoute(getLogicalPath());
}

export function subscribe(callback) {
  listeners.add(callback);
  const route = resolveCurrentRoute();
  callback(route);

  return () => listeners.delete(callback);
}

window.addEventListener('popstate', notify);
if (HASH_MODE) {
  window.addEventListener('hashchange', notify);
}
