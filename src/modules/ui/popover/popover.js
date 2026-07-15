import { LightningElement, api } from 'lwc';

const NUBBIN_CLASS = {
    top: 'slds-nubbin_top',
    'top-left': 'slds-nubbin_top-left',
    'top-right': 'slds-nubbin_top-right',
    bottom: 'slds-nubbin_bottom',
    'bottom-left': 'slds-nubbin_bottom-left',
    'bottom-right': 'slds-nubbin_bottom-right',
    left: 'slds-nubbin_left',
    right: 'slds-nubbin_right',
};

const VARIANT_CLASS = {
    base: '',
    warning: 'slds-popover_warning',
    error: 'slds-popover_error',
};

const SIZE_CLASS = {
    small: 'slds-popover_small',
    medium: 'slds-popover_medium',
    large: 'slds-popover_large',
};

export default class Popover extends LightningElement {
    /** Accessible label; also used as the header heading. Header renders when set. */
    @api label = '';
    /** 'base' | 'warning' | 'error' */
    @api variant = 'base';
    /** 'small' | 'medium' | 'large'; omit for auto width. */
    @api size;
    /** 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right' */
    @api nubbin;
    @api showClose = false;
    /** Render the footer slot wrapper. Set when providing footer content. */
    @api hasFooter = false;
    /** Remove body padding. Use when slotting a menu or table that owns its own spacing. */
    @api flushBody = false;

    get hasHeader() {
        return Boolean(this.label);
    }

    get popoverClass() {
        const classes = ['slds-popover'];
        const variantClass = VARIANT_CLASS[this.variant] ?? '';
        if (variantClass) classes.push(variantClass);
        const sizeClass = this.size ? SIZE_CLASS[this.size] : '';
        if (sizeClass) classes.push(sizeClass);
        const nubbinClass = this.nubbin ? NUBBIN_CLASS[this.nubbin] : '';
        if (nubbinClass) classes.push(nubbinClass);
        return classes.join(' ');
    }

    get bodyClass() {
        return this.flushBody ? 'slds-popover__body ui-popover__body_flush' : 'slds-popover__body';
    }

    get closeIconVariant() {
        return this.variant === 'warning' || this.variant === 'error' ? 'inverse' : '';
    }

    handleClose() {
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
}
