import { LightningElement, api } from 'lwc';

const VARIANT_BASE = 'base';
const VARIANT_OBJECT_HOME = 'object-home';
const VARIANT_RECORD_HOME = 'record-home';
const VARIANT_RELATED_LIST = 'related-list';

const VALID_VARIANTS = [
    VARIANT_BASE,
    VARIANT_OBJECT_HOME,
    VARIANT_RECORD_HOME,
    VARIANT_RELATED_LIST
];

export default class PageHeader extends LightningElement {
    @api iconName = '';
    @api objectLabel = '';
    @api title = '';
    @api label = '';
    @api metaText = '';
    @api hideDetails = false;

    _variant = VARIANT_BASE;
    _fields = [];
    _breadcrumbs = [];

    @api
    get variant() {
        return this._variant;
    }
    set variant(value) {
        const normalized = typeof value === 'string' ? value.toLowerCase().trim() : '';
        this._variant = VALID_VARIANTS.includes(normalized) ? normalized : VARIANT_BASE;
    }

    @api
    get fields() {
        return this._fields;
    }
    set fields(value) {
        this._fields = Array.isArray(value) ? value : [];
    }

    @api
    get breadcrumbs() {
        return this._breadcrumbs;
    }
    set breadcrumbs(value) {
        this._breadcrumbs = Array.isArray(value) ? value : [];
    }

    get computedHeaderClass() {
        const classes = ['slds-page-header'];
        if (this._variant === VARIANT_RECORD_HOME) {
            classes.push('slds-page-header_record-home');
        } else if (this._variant === VARIANT_RELATED_LIST) {
            classes.push('slds-page-header_related-list');
        }
        return classes.join(' ');
    }

    get hasIcon() {
        return !!this.iconName;
    }

    get hasObjectLabel() {
        return !!this.objectLabel && !this.showBreadcrumbs;
    }

    get isBase() {
        return this._variant === VARIANT_BASE;
    }

    get isObjectHome() {
        return this._variant === VARIANT_OBJECT_HOME;
    }

    get isRecordHome() {
        return this._variant === VARIANT_RECORD_HOME;
    }

    get isRelatedList() {
        return this._variant === VARIANT_RELATED_LIST;
    }

    get showIcon() {
        return this.hasIcon && !this.isRelatedList;
    }

    get showMetaRow() {
        return this.isObjectHome || this.isRelatedList;
    }

    get showDetailsRow() {
        return this.isRecordHome && !this.hideDetails && this._fields.length > 0;
    }

    get showBaseMeta() {
        return this.isBase && !!this.metaText;
    }

    get showBreadcrumbs() {
        return this._breadcrumbs.length > 0;
    }

    get showActions() {
        return !this.isBase;
    }

    get showSwitcher() {
        return this.isObjectHome;
    }

    get searchLabel() {
        return `Search ${this.objectLabel || 'this list'}`;
    }

    handleSearchChange(event) {
        this.dispatchEvent(
            new CustomEvent('search', {
                detail: { value: event.target.value },
                bubbles: false,
                composed: false,
            })
        );
    }

    get normalizedFields() {
        return this._fields.map((f, i) => ({
            key: `field-${i}`,
            label: f.label || '',
            value: f.value != null ? String(f.value) : '',
            type: f.type || 'text'
        }));
    }
}
