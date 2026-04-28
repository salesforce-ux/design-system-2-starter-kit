import { LightningElement, api } from 'lwc';

export default class GlobalShell extends LightningElement {
    @api currentPage = 'home';
    @api navItems = [];
    @api currentAppVariant = 'standard';
    @api appItems = [];
    @api pagesInCurrentApp = [];

    handleNavigate(event) {
        // Prevent the original child event from continuing to bubble, then relay once.
        event.stopPropagation();
        this.dispatchEvent(
            new CustomEvent('navigate', {
                detail: event.detail,
                bubbles: true,
                composed: true
            })
        );
    }

    handleAppSwitch(event) {
        event.stopPropagation();
        this.dispatchEvent(
            new CustomEvent('appswitch', {
                detail: event.detail,
                bubbles: true,
                composed: true
            })
        );
    }

    handlePanelSelect(event) {
        this.dispatchEvent(
            new CustomEvent('panelselect', {
                detail: event.detail,
                bubbles: true,
                composed: true
            })
        );
    }
}
