import { LightningElement, api } from 'lwc';

export default class VerticalNav extends LightningElement {
    @api appItems = [];

    get items() {
        return (this.appItems || []).map((item) => {
            const base = 'vertical-nav__link';
            return {
                ...item,
                icon: item.icon || 'utility:apps',
                itemClass: item.isCurrent ? `${base} vertical-nav__link_selected` : base,
                ariaCurrent: item.isCurrent ? 'true' : null,
            };
        });
    }

    handleClick(event) {
        event.preventDefault();
        const appId = event.currentTarget.dataset.app;
        this.dispatchEvent(
            new CustomEvent('appswitch', {
                detail: { app: appId },
                bubbles: true,
                composed: true,
            })
        );
    }
}
