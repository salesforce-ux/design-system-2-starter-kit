import { LightningElement, api } from 'lwc';
import { preloadSlds1 } from '../../../build/slds-loader';

export default class ThemeSwitcher extends LightningElement {
    @api sldsVersion = 2;
    @api darkMode = false;
    isCardOpen = false;
    isCardClosing = false;

    get sldsToggleLabel() {
        return this.sldsVersion === 2 ? 'Switch to SLDS 1' : 'Switch to SLDS 2';
    }

    get showDarkModeButton() {
        return this.sldsVersion === 2;
    }

    get darkModeLabel() {
        return this.darkMode ? 'Light Mode' : 'Dark Mode';
    }

    disconnectedCallback() {
        window.removeEventListener('click', this._handleWindowClick);
    }

    get showCard() {
        return this.isCardOpen || this.isCardClosing;
    }

    get cardWrapperClass() {
        const base = 'theme-switcher-card-wrapper';
        return this.isCardClosing ? `${base} ${base}--closing` : base;
    }

    handleIconClick() {
        if (this.isCardOpen) {
            this._beginCloseCard();
        } else if (this.isCardClosing) {
            this.isCardClosing = false;
            this.isCardOpen = true;
            setTimeout(() => {
                window.addEventListener('click', this._handleWindowClick);
            }, 0);
        } else {
            this.isCardOpen = true;
            preloadSlds1();
            setTimeout(() => {
                window.addEventListener('click', this._handleWindowClick);
            }, 0);
        }
    }

    _beginCloseCard() {
        this.isCardOpen = false;
        window.removeEventListener('click', this._handleWindowClick);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.isCardClosing = false;
            return;
        }
        this.isCardClosing = true;
    }

    handleCardWrapperAnimationEnd(event) {
        if (event.animationName !== 'theme-switcher-card-close') {
            return;
        }
        this.isCardClosing = false;
    }

    _handleWindowClick = (event) => {
        if (!this.isCardOpen) {
            return;
        }
        const path = event.composedPath();
        if (!path.includes(this.template.host)) {
            this._beginCloseCard();
        }
    };

    handleToggleSLDSClick() {
        this.dispatchEvent(new CustomEvent('toggleslds', { bubbles: true, composed: true }));
    }

    handleToggleDarkModeClick() {
        this.dispatchEvent(new CustomEvent('toggledarkmode', { bubbles: true, composed: true }));
    }
}
