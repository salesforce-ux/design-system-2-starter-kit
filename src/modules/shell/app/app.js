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
import User from 'page/user';
import Contacts from 'page/contacts';
import ContactDetail from 'page/contactDetail';
import NotFound from 'page/notFound';

/** Option A: explicit registration – add one import + one entry here when adding a route */
const ROUTE_COMPONENTS = {
    'page-home': Home,
    'page-icon-test': IconTest,
    'page-user': User,
    'page-contacts': Contacts,
    'page-contact-detail': ContactDetail,
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

export default class App extends LightningElement {
    route;
    _sldsVersion = 2;
    _darkMode = false;
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
        });
    }

    _restorePreferences() {
        const savedVersion = localStorage.getItem(STORAGE_KEY_SLDS_VERSION);
        const savedDarkMode = localStorage.getItem(STORAGE_KEY_DARK_MODE);
        const version = savedVersion === '1' ? 1 : 2;
        if (savedDarkMode === 'true' && version === 2) {
            this._darkMode = true;
            document.body.classList.add('slds-color-scheme_dark');
        } else if (savedDarkMode === 'false') {
            this._darkMode = false;
            document.body.classList.remove('slds-color-scheme_dark');
        }
    }

    disconnectedCallback() {
        this.unsubscribe?.();
    }

    async handleToggleSLDS() {
        await toggleSLDS();
        this._sldsVersion = activeSLDSVersion();
        localStorage.setItem(STORAGE_KEY_SLDS_VERSION, String(this._sldsVersion));
        if (this._sldsVersion !== 2 && this._darkMode) {
            this._darkMode = false;
            document.body.classList.remove('slds-color-scheme_dark');
            localStorage.setItem(STORAGE_KEY_DARK_MODE, 'false');
        }
    }

    handleToggleDarkMode() {
        this._darkMode = !this._darkMode;
        document.body.classList.toggle('slds-color-scheme_dark', this._darkMode);
        localStorage.setItem(STORAGE_KEY_DARK_MODE, String(this._darkMode));
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
