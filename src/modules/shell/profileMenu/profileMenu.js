import { LightningElement, api } from 'lwc';

export default class ProfileMenu extends LightningElement {
    /** 'light' | 'dark' | 'system' */
    @api colorMode = 'light';
    /** 1 | 2 */
    @api sldsVersion = 2;
    @api verticalNav = false;

    isOpen = false;

    get ariaExpanded() {
        return this.isOpen ? 'true' : 'false';
    }

    get showColorMode() {
        return this.sldsVersion === 2;
    }

    get colorModeOptions() {
        return ['light', 'dark', 'system'].map((v) => ({
            value: v,
            label: v === 'system' ? 'System' : v === 'dark' ? 'Dark' : 'Light',
            checked: this.colorMode === v,
            groupedValue: `colorMode:${v}`,
        }));
    }

    get sldsVersionOptions() {
        return [
            { value: '1', label: 'SLDS 1', checked: this.sldsVersion === 1, groupedValue: 'sldsVersion:1' },
            { value: '2', label: 'SLDS 2', checked: this.sldsVersion === 2, groupedValue: 'sldsVersion:2' },
        ];
    }

    get verticalNavOptions() {
        return [
            { value: 'on', label: 'Enabled', checked: this.verticalNav === true, groupedValue: 'verticalNav:on' },
            { value: 'off', label: 'Disabled', checked: this.verticalNav === false, groupedValue: 'verticalNav:off' },
        ];
    }

    handleTriggerClick(event) {
        event.stopPropagation();
        this.isOpen = !this.isOpen;
    }

    handlePrivateSelect(event) {
        const value = event.detail?.value;
        if (!value || typeof value !== 'string') return;
        const [group, raw] = value.split(':');
        if (group === 'colorMode') {
            this._dispatch('colormodechange', { value: raw });
        } else if (group === 'sldsVersion') {
            const version = Number(raw);
            if (version !== this.sldsVersion) {
                this._dispatch('sldsversionchange', { value: version });
            }
        } else if (group === 'verticalNav') {
            const enabled = raw === 'on';
            if (enabled !== this.verticalNav) {
                this._dispatch('verticalnavchange', { value: enabled });
            }
        }
    }

    handleKeydown(event) {
        if (event.key === 'Escape' && this.isOpen) {
            this.isOpen = false;
            this.template.querySelector('.profile-menu__trigger')?.focus();
        }
    }

    connectedCallback() {
        this._handleDocumentClick = (event) => {
            if (!this.isOpen) return;
            const path = event.composedPath();
            const root = this.template.querySelector('.profile-menu');
            if (root && !path.includes(root)) this.isOpen = false;
        };
        document.addEventListener('click', this._handleDocumentClick);
    }

    disconnectedCallback() {
        document.removeEventListener('click', this._handleDocumentClick);
    }

    _dispatch(name, detail) {
        this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
    }
}
