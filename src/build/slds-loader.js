/**
 * SLDS global stylesheets are loaded as <link rel="stylesheet"> tags.
 * Asset URLs use `new URL(..., import.meta.url)` so Vite emits hashed files and
 * rewrites nested `url(...)` without the css?url → transform-only Rollup parse path
 * that breaks when vite-plugin-lwc sits between vite:css and vite:css-post.
 *
 * The active sheet is toggled via the link's media attribute:
 *   - media="" / "all"  → applied
 *   - media="not all"   → fetched but not applied (when both links exist)
 *
 * SLDS 2 is always loaded on startup. SLDS 1 is lazy-loaded when the user selects it
 * or when localStorage says the last session used SLDS 1 (see initSldsFromStorage).
 */

const slds2CssUrl = new URL(
    '../../node_modules/@salesforce-ux/design-system-2/dist/css/bundled/slds2.cosmos.css',
    import.meta.url
).href;

export const STORAGE_KEY_SLDS_VERSION = 'slds-ui-slds-version';

const SLDS2_KEY = 'slds-plus';
const SLDS1_KEY = 'salesforce-lightning-design-system';

/** @type {Promise<string> | null} */
let slds1UrlPromise = null;

function getLink(key) {
    return document.querySelector(`link[data-slds="${key}"]`);
}

function ensureLink(key, href, media = 'not all') {
    let link = getLink(key);
    if (!link) {
        link = document.createElement('link');
        link.rel = 'stylesheet';
        link.media = media;
        link.setAttribute('data-slds', key);
        link.href = href;
        document.head.appendChild(link);
    } else if (href && link.getAttribute('href') !== href) {
        link.href = href;
    }
    return link;
}

/**
 * Resolves the SLDS1 CSS asset URL and ensures a <link> exists.
 * @returns {Promise<HTMLLinkElement>}
 */
export function ensureSlds1Loaded() {
    if (!slds1UrlPromise) {
        slds1UrlPromise = import('./slds/slds1-url.js').then((m) => m.default);
    }
    return slds1UrlPromise.then((href) => ensureLink(SLDS1_KEY, href));
}

/**
 * Bootstrap: insert SLDS2, then load SLDS1 only if storage requests version 1.
 * Call from src/index.js before mounting LWC (top-level await).
 */
export async function initSldsFromStorage() {
    const saved = localStorage.getItem(STORAGE_KEY_SLDS_VERSION);
    if (saved === '1') {
        const slds2Link = ensureLink(SLDS2_KEY, slds2CssUrl);
        const slds1Link = await ensureSlds1Loaded();
        slds1Link.media = 'all';
        slds2Link.media = 'not all';
    } else {
        ensureLink(SLDS2_KEY, slds2CssUrl, 'all');
    }
}

export function activateSLDS2() {
    const slds2 = getLink(SLDS2_KEY);
    const slds1 = getLink(SLDS1_KEY);
    if (slds2) slds2.media = 'all';
    if (slds1) slds1.media = 'not all';
}

/**
 * @returns {Promise<void>}
 */
export async function activateSLDS1() {
    const slds1 = await ensureSlds1Loaded();
    const slds2 = getLink(SLDS2_KEY);
    if (slds2) slds2.media = 'not all';
    slds1.media = 'all';
}

/**
 * @returns {Promise<void>}
 */
export async function toggleSLDS() {
    const slds2 = getLink(SLDS2_KEY);
    if (!slds2) return;

    const usingSlds2 = slds2.media !== 'not all';
    if (usingSlds2) {
        await activateSLDS1();
    } else {
        activateSLDS2();
    }
}

export function activeSLDSVersion() {
    const slds2 = getLink(SLDS2_KEY);
    return slds2 && slds2.media !== 'not all' ? 2 : 1;
}

export function preloadSlds1() {
    ensureSlds1Loaded();
}

export function activeSldsLink() {
    const slds2 = getLink(SLDS2_KEY);
    return slds2 && slds2.media !== 'not all' ? slds2 : getLink(SLDS1_KEY);
}
