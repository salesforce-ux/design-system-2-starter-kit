import { LightningElement, api } from 'lwc';

const VARIANT_CONSOLE = 'console';

export default class GlobalNavigation extends LightningElement {
    @api currentPage = 'home';
    @api navItems = [];
    @api appItems = [];
    @api pagesInCurrentApp = [];
    @api variant = 'standard';

    isWaffleMenuOpen = false;
    isObjectSwitcherOpen = false;

    get isConsole() {
        return this.variant === VARIANT_CONSOLE;
    }

    get isStandard() {
        return !this.isConsole;
    }

    get contextBarClass() {
        return this.isConsole
            ? 'slds-context-bar slds-context-bar_tabs'
            : 'slds-context-bar';
    }

    get waffleDropdownTriggerClass() {
        const base = 'slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover';
        return this.isWaffleMenuOpen ? `${base} slds-is-open` : base;
    }

    /** True when the "main" object-switcher tab is the focused tab (no transient tab active). */
    get isMainTabActive() {
        return true;
    }

    get mainTabAriaSelected() {
        return this.isMainTabActive ? 'true' : 'false';
    }

    get objectSwitcherTabClass() {
        const base = 'slds-context-bar__item slds-context-bar__object-switcher';
        return this.isMainTabActive ? `${base} slds-is-active` : base;
    }

    get objectSwitcherChevronClass() {
        const base = 'slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover';
        return this.isObjectSwitcherOpen ? `${base} slds-is-open` : base;
    }

    /** App Launcher entries with selected-state derived from `current` flag. */
    get appItemsWithCurrent() {
        return (this.appItems || []).map((item) => ({
            ...item,
            ariaCurrent: item.isCurrent ? 'true' : null,
        }));
    }

    /** Label of the active app (shown next to the waffle in the context bar). */
    get currentAppLabel() {
        const current = (this.appItems || []).find((a) => a.isCurrent);
        return current?.label ?? '';
    }

    /** Currently selected page (Console object switcher trigger label). */
    get currentPageLabel() {
        const current = (this.pagesInCurrentApp || []).find((p) => p.isCurrent);
        return current?.label ?? '';
    }

    /** Nav items with isActive and tabClass derived from currentPage (Standard variant). */
    get navItemsWithActive() {
        return (this.navItems || []).map((item) => {
            const isActive = item.page === this.currentPage;
            const base = 'slds-context-bar__item';
            return {
                ...item,
                isActive,
                tabClass: isActive ? `${base} slds-is-active` : base,
                ariaCurrent: isActive ? 'page' : null,
            };
        });
    }

    handleNavItemClick(event) {
        event.preventDefault();
        const page = event.currentTarget.dataset.page;
        this._dispatchNavigate(page);
    }

    handleWaffleOpen(event) {
        // Stop the click from immediately bubbling to the document handler that closes the menu.
        event?.stopPropagation?.();
        const wasOpen = this.isWaffleMenuOpen;
        this.isWaffleMenuOpen = !this.isWaffleMenuOpen;
        if (this.isWaffleMenuOpen) {
            this.isObjectSwitcherOpen = false;
        }
        if (!wasOpen && this.isWaffleMenuOpen) {
            this._focusOnNextRender = 'waffle';
        }
    }

    handleWaffleMenuItemClick(event) {
        event.preventDefault();
        this.isWaffleMenuOpen = false;
        const appId = event.currentTarget.dataset.value;
        this.dispatchEvent(
            new CustomEvent('appswitch', {
                detail: { app: appId },
                bubbles: true,
                composed: true,
            })
        );
    }

    handleObjectSwitcherToggle(event) {
        event?.preventDefault?.();
        event?.stopPropagation?.();
        const wasOpen = this.isObjectSwitcherOpen;
        this.isObjectSwitcherOpen = !this.isObjectSwitcherOpen;
        if (this.isObjectSwitcherOpen) {
            this.isWaffleMenuOpen = false;
        }
        if (!wasOpen && this.isObjectSwitcherOpen) {
            this._focusOnNextRender = 'object';
        }
    }

    /**
     * Listens for `privateselect` bubbled up from `lightning-menu-item` children.
     * `lightning-menu-item` dispatches this with `bubbles: true` whenever the item
     * is activated by click or Space; we don't need a separate click handler.
     */
    handleObjectSwitcherSelect(event) {
        const page = event.detail?.value;
        if (!page) return;
        this.isObjectSwitcherOpen = false;
        this._dispatchNavigate(page);
    }

    handleWaffleMenuKeydown(event) {
        const menu = this._waffleMenuElement();
        if (!menu || !menu.contains(event.target)) return;

        const key = event.key;
        if (key === 'Escape') {
            event.preventDefault();
            this.isWaffleMenuOpen = false;
            setTimeout(() => this._focusWaffleTrigger(), 0);
            return;
        }
        if (key === 'Tab') {
            this.isWaffleMenuOpen = false;
            return;
        }
        if (key === 'ArrowDown' || key === 'ArrowUp') {
            event.preventDefault();
            const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
            const currentIndex = items.indexOf(event.target);
            if (currentIndex === -1) return;
            const nextIndex = key === 'ArrowDown'
                ? (currentIndex < items.length - 1 ? currentIndex + 1 : 0)
                : (currentIndex > 0 ? currentIndex - 1 : items.length - 1);
            items[nextIndex].focus();
        }
    }

    handleObjectSwitcherKeydown(event) {
        const key = event.key;
        if (key === 'Escape') {
            event.preventDefault();
            this.isObjectSwitcherOpen = false;
            setTimeout(() => this._focusObjectSwitcherTrigger(), 0);
            return;
        }
        if (key === 'Tab') {
            this.isObjectSwitcherOpen = false;
            return;
        }
        if (key === 'ArrowDown' || key === 'ArrowUp') {
            event.preventDefault();
            const items = this._objectSwitcherMenuItems();
            if (!items.length) return;
            // Items live in their own shadow root; match against the host element.
            const currentHost = event.target.closest('lightning-menu-item');
            const currentIndex = currentHost ? items.indexOf(currentHost) : -1;
            const nextIndex = key === 'ArrowDown'
                ? (currentIndex < items.length - 1 ? currentIndex + 1 : 0)
                : (currentIndex > 0 ? currentIndex - 1 : items.length - 1);
            items[nextIndex]?.focus();
        }
    }

    _waffleMenuElement() {
        return this.template.querySelector(
            '.slds-context-bar__primary > .slds-no-hover .slds-dropdown'
        );
    }

    _objectSwitcherMenuItems() {
        return Array.from(
            this.template.querySelectorAll(
                '.slds-context-bar__dropdown-trigger lightning-menu-item'
            )
        );
    }

    _focusWaffleTrigger() {
        const trigger = this.template.querySelector(
            '.slds-context-bar__primary > .slds-no-hover .slds-context-bar__icon-action lightning-dynamic-icon'
        );
        if (trigger?.focus) trigger.focus();
    }

    _focusObjectSwitcherTrigger() {
        const trigger = this.template.querySelector(
            '.slds-context-bar__dropdown-trigger lightning-button-icon'
        );
        if (trigger?.focus) trigger.focus();
    }

    _dispatchNavigate(page) {
        if (!page) return;
        this.dispatchEvent(
            new CustomEvent('navigate', {
                detail: { page },
                bubbles: true,
                composed: true,
            })
        );
    }

    connectedCallback() {
        this._handleDocumentClickBound = this._handleDocumentClick.bind(this);
        document.addEventListener('click', this._handleDocumentClickBound);
    }

    disconnectedCallback() {
        document.removeEventListener('click', this._handleDocumentClickBound);
    }

    renderedCallback() {
        if (!this._focusOnNextRender) return;
        const target = this._focusOnNextRender;
        this._focusOnNextRender = null;
        if (target === 'waffle') {
            const first = this._waffleMenuElement()?.querySelector('[role="menuitem"]');
            if (first) setTimeout(() => first.focus(), 0);
        } else if (target === 'object') {
            const items = this._objectSwitcherMenuItems();
            if (items[0]) setTimeout(() => items[0].focus(), 0);
        }
    }

    _handleDocumentClick(event) {
        if (!this.isWaffleMenuOpen && !this.isObjectSwitcherOpen) return;
        const path = event.composedPath ? event.composedPath() : [];

        if (this.isWaffleMenuOpen) {
            const waffle = this.template.querySelector('.slds-context-bar__primary > .slds-no-hover');
            if (waffle && !path.includes(waffle)) {
                this.isWaffleMenuOpen = false;
            }
        }
        if (this.isObjectSwitcherOpen) {
            const chevron = this.template.querySelector('.slds-context-bar__dropdown-trigger');
            if (chevron && !path.includes(chevron)) {
                this.isObjectSwitcherOpen = false;
            }
        }
    }
}
