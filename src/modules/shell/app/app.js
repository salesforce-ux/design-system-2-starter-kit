import { LightningElement } from 'lwc';
import { subscribe, navigate, linkHref, setCurrentAppForLinks } from '../../../router';
import { routes } from '../../../routes.config';
import {
    apps,
    getAppById,
    getPersistedAppId,
    persistAppId,
    DEFAULT_APP_ID,
} from '../../../apps.config';
import { toggleSLDS, activeSLDSVersion, STORAGE_KEY_SLDS_VERSION } from '../../../build/slds-loader';
import Home from 'page/home';
import IconTest from 'page/iconTest';
import Contacts from 'page/contacts';
import ContactDetail from 'page/contactDetail';
import Builder from 'page/builder';
import NotFound from 'page/notFound';

/** Option A: explicit registration – add one import + one entry here when adding a route */
const ROUTE_COMPONENTS = {
    'page-home': Home,
    'page-icon-test': IconTest,
    'page-contacts': Contacts,
    'page-contact-detail': ContactDetail,
    'page-builder': Builder,
};

/** Derived from routes.config: component name → nav page id (includes navHighlight for child routes) */
const ROUTE_TO_NAV_PAGE = Object.fromEntries(
    routes.filter((r) => r.navPage || r.navHighlight).map((r) => [r.component, r.navPage ?? r.navHighlight])
);

/** Derived from routes.config: nav page id → path for navigate() */
const NAV_PAGE_TO_PATH = Object.fromEntries(
    routes.filter((r) => r.navPage).map((r) => [r.navPage, r.navPath ?? r.path])
);

/** Derived from routes.config: nav page id → full route entry (label, icon, etc.) */
const NAV_PAGE_TO_ROUTE = Object.fromEntries(
    routes.filter((r) => r.navPage).map((r) => [r.navPage, r])
);

const STORAGE_KEY_DARK_MODE = 'slds-ui-dark-mode';
const STORAGE_KEY_COLOR_MODE = 'slds-ui-color-mode';
const STORAGE_KEY_VERTICAL_NAV = 'slds-ui-vertical-nav';
const COLOR_MODES = new Set(['light', 'dark', 'system']);
const SYSTEM_DARK_QUERY = '(prefers-color-scheme: dark)';

export default class App extends LightningElement {
    route;
    _sldsVersion = 2;
    _colorMode = 'light';
    _verticalNav = false;
    _systemColorSchemeMediaQuery = null;
    _handleSystemColorSchemeChange = null;
    _currentApp = getPersistedAppId() || DEFAULT_APP_ID;
    selectedPanel = 'agentforce_panel';
    isPanelOpen = false;

    get componentCtor() {
        if (!this.route) return NotFound;
        const name = this.route.component;
        return ROUTE_COMPONENTS[name] ?? NotFound;
    }

    get currentNavPage() {
        const name = this.route?.component;
        return name ? (ROUTE_TO_NAV_PAGE[name] ?? 'home') : 'home';
    }

    get currentApp() {
        return this._currentApp;
    }

    get currentAppVariant() {
        const app = getAppById(this._currentApp) || getAppById(DEFAULT_APP_ID);
        return app?.variant ?? 'standard';
    }

    get isBuilderApp() {
        return this.currentAppVariant === 'builder';
    }

    get isVerticalNavOn() {
        return this._verticalNav;
    }

    get rootClass() {
        return this.isVerticalNavOn ? 'app-root app-root_with-vertical-nav' : 'app-root';
    }

    /** Pages exposed in the current app's primary nav (Standard tabs). */
    get navItems() {
        const app = getAppById(this._currentApp) || getAppById(DEFAULT_APP_ID);
        return app.pages
            .map((pageId) => NAV_PAGE_TO_ROUTE[pageId])
            .filter(Boolean)
            .map((r) => {
                const path = r.navPath ?? r.path;
                return { page: r.navPage, label: r.navLabel, path, href: linkHref(path) };
            });
    }

    /**
     * Pages in the current app, shaped for the Console object switcher menu:
     * label, icon, and an isCurrent flag to drive the selected indicator.
     */
    get pagesInCurrentApp() {
        const current = this.currentNavPage;
        return this.navItems.map((item) => ({
            page: item.page,
            label: item.label,
            href: item.href,
            isCurrent: item.page === current,
        }));
    }

    /** All apps for the App Launcher (waffle), with isCurrent flag and href to defaultPath. */
    get appItems() {
        return apps.map((a) => ({
            id: a.id,
            label: a.label,
            icon: a.icon,
            href: linkHref(a.defaultPath, a.id),
            isCurrent: a.id === this._currentApp,
        }));
    }

    connectedCallback() {
        this._restorePreferences();
        this._sldsVersion = activeSLDSVersion();
        setCurrentAppForLinks(this._currentApp);
        this.unsubscribe = subscribe((route) => {
            this.route = route;
            const newApp = route?.app;
            if (newApp && newApp !== this._currentApp) {
                this._currentApp = newApp;
                persistAppId(newApp);
                setCurrentAppForLinks(newApp);
            }
            this._syncBuilderRootClass();
        });
    }

    _syncBuilderRootClass() {
        document.documentElement.classList.toggle('builder-active', this.isBuilderApp);
    }

    _restorePreferences() {
        const savedVersion = localStorage.getItem(STORAGE_KEY_SLDS_VERSION);
        const savedColorMode = localStorage.getItem(STORAGE_KEY_COLOR_MODE);
        const savedDarkMode = localStorage.getItem(STORAGE_KEY_DARK_MODE);
        const savedVerticalNav = localStorage.getItem(STORAGE_KEY_VERTICAL_NAV);
        const version = savedVersion === '1' ? 1 : 2;
        let colorMode = 'light';
        if (savedColorMode && COLOR_MODES.has(savedColorMode)) {
            colorMode = savedColorMode;
        } else if (savedDarkMode === 'true') {
            colorMode = 'dark';
            localStorage.setItem(STORAGE_KEY_COLOR_MODE, colorMode);
            localStorage.removeItem(STORAGE_KEY_DARK_MODE);
        } else if (savedDarkMode === 'false') {
            colorMode = 'light';
            localStorage.setItem(STORAGE_KEY_COLOR_MODE, colorMode);
            localStorage.removeItem(STORAGE_KEY_DARK_MODE);
        }
        if (version !== 2 && colorMode === 'dark') {
            colorMode = 'light';
        }
        this._applyColorMode(colorMode);
        this._verticalNav = savedVerticalNav === 'true';
    }

    _applyColorMode(colorMode) {
        this._colorMode = colorMode;
        this._unbindSystemColorScheme();
        let effective = colorMode;
        if (colorMode === 'system') {
            const mq = window.matchMedia(SYSTEM_DARK_QUERY);
            effective = mq.matches ? 'dark' : 'light';
            this._handleSystemColorSchemeChange = (event) => {
                document.body.classList.toggle('slds-color-scheme_dark', event.matches);
            };
            mq.addEventListener('change', this._handleSystemColorSchemeChange);
            this._systemColorSchemeMediaQuery = mq;
        }
        document.body.classList.toggle('slds-color-scheme_dark', effective === 'dark');
    }

    _unbindSystemColorScheme() {
        if (this._systemColorSchemeMediaQuery && this._handleSystemColorSchemeChange) {
            this._systemColorSchemeMediaQuery.removeEventListener('change', this._handleSystemColorSchemeChange);
        }
        this._systemColorSchemeMediaQuery = null;
        this._handleSystemColorSchemeChange = null;
    }

    disconnectedCallback() {
        this.unsubscribe?.();
        document.documentElement.classList.remove('builder-active');
        this._unbindSystemColorScheme();
    }

    async _setSldsVersion(version) {
        if (version === this._sldsVersion) return;
        await toggleSLDS();
        this._sldsVersion = activeSLDSVersion();
        localStorage.setItem(STORAGE_KEY_SLDS_VERSION, String(this._sldsVersion));
        if (this._sldsVersion !== 2 && this._colorMode !== 'light') {
            this._applyColorMode('light');
            localStorage.setItem(STORAGE_KEY_COLOR_MODE, 'light');
        }
    }

    handleColorModeChange(event) {
        const value = event.detail?.value;
        if (!COLOR_MODES.has(value)) return;
        if (value !== 'light' && this._sldsVersion !== 2) return;
        this._applyColorMode(value);
        localStorage.setItem(STORAGE_KEY_COLOR_MODE, value);
    }

    handleSldsVersionChange(event) {
        const value = event.detail?.value;
        if (value !== 1 && value !== 2) return;
        this._setSldsVersion(value);
    }

    handleVerticalNavChange(event) {
        const value = Boolean(event.detail?.value);
        this._verticalNav = value;
        localStorage.setItem(STORAGE_KEY_VERTICAL_NAV, String(this._verticalNav));
    }

    handleNavNavigate(event) {
        const page = event.detail?.page;
        const path = page ? NAV_PAGE_TO_PATH[page] : '/';
        navigate(path);
    }

    handleAppSwitch(event) {
        const appId = event.detail?.app;
        const target = getAppById(appId);
        if (!target) return;
        this._currentApp = appId;
        persistAppId(appId);
        setCurrentAppForLinks(appId);
        navigate(target.defaultPath);
    }

    handleBuilderExit() {
        const target = getAppById(DEFAULT_APP_ID);
        if (!target) return;
        this._currentApp = target.id;
        persistAppId(target.id);
        setCurrentAppForLinks(target.id);
        navigate(target.defaultPath);
    }

    handlePanelSelect(event) {
        this.selectedPanel = event.detail?.name ?? this.selectedPanel;
        this.isPanelOpen = true;
    }

    handlePanelClose() {
        this.isPanelOpen = false;
    }

    get panelClasses() {
        return `slds-panel slds-size_medium slds-panel_docked slds-panel_docked-right ${this.isPanelOpen ? 'slds-is-open' : ''}`;
    }

    handleNavigateBack() {
        history.back();
    }
}
