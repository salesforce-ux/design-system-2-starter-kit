import { LightningElement } from 'lwc';

export default class GlobalHeader extends LightningElement {
    handleAgentforceClick() {
        this.dispatchEvent(new CustomEvent('panelselect', {
            detail: { name: 'agentforce_panel' },
            bubbles: true,
            composed: true
        }));
    }

    handleTrailheadClick() {
        this.dispatchEvent(new CustomEvent('panelselect', {
            detail: { name: 'trailhead_panel' },
            bubbles: true,
            composed: true
        }));
    }

    handleSettingsClick() {
        this.dispatchEvent(new CustomEvent('panelselect', {
            detail: { name: 'settings_panel' },
            bubbles: true,
            composed: true
        }));
    }

    handleNotificationClick() {
        this.dispatchEvent(new CustomEvent('panelselect', {
            detail: { name: 'notification_panel' },
            bubbles: true,
            composed: true
        }));
    }
}