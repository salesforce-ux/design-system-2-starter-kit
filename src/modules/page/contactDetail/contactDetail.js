import { LightningElement } from 'lwc';
import { getCurrentRoute, navigate } from '../../../router';
import { getContactById } from 'data/contacts';

const DETAIL_FIELDS = [
    { key: 'name', label: 'Full Name', fieldName: 'name' },
    { key: 'company', label: 'Account Name', fieldName: 'company' },
    { key: 'title', label: 'Title', fieldName: 'title' },
    { key: 'department', label: 'Department', fieldName: 'department' },
    { key: 'email', label: 'Email', fieldName: 'email', type: 'email' },
    { key: 'phone', label: 'Phone', fieldName: 'phone', type: 'tel' },
    { key: 'mobile', label: 'Mobile', fieldName: 'mobile', type: 'tel' },
    { key: 'mailingAddress', label: 'Mailing Address', fieldName: 'mailingAddress' },
    { key: 'description', label: 'Description', fieldName: 'description', component: 'textarea', fullWidth: true }
];

const ACTIVITY_ITEMS = [
    { id: 'a1', type: 'call', iconName: 'standard:log_a_call', subject: 'Follow-up call', date: '3 days ago', description: 'Discussed renewal timeline and next steps.' },
    { id: 'a2', type: 'email', iconName: 'standard:email', subject: 'Proposal sent', date: '1 week ago', description: 'Sent updated pricing proposal via email.' },
    { id: 'a3', type: 'event', iconName: 'standard:event', subject: 'Quarterly review meeting', date: '2 weeks ago', description: 'Reviewed Q4 results and Q1 goals.' },
    { id: 'a4', type: 'call', iconName: 'standard:log_a_call', subject: 'Introductory call', date: '1 month ago', description: 'Initial discovery call to understand requirements.' }
];

export default class ContactDetail extends LightningElement {
    contact = null;
    isFollowing = false;
    activityItems = ACTIVITY_ITEMS;

    connectedCallback() {
        const route = getCurrentRoute();
        const id = route?.params?.id;
        if (id) {
            this.contact = getContactById(id);
        }
    }

    get hasContact() {
        return this.contact !== null;
    }

    get cardFields() {
        if (!this.contact) return [];
        return DETAIL_FIELDS.map(field => ({
            ...field,
            value: field.fieldName === 'mailingAddress'
                ? this.mailingAddress
                : this.contact[field.fieldName],
            isTextarea: field.component === 'textarea',
            cssClass: field.fullWidth ? 'c-contact-details-grid__full-width' : ''
        }));
    }

    get contactName() {
        return this.contact?.name || 'Unknown Contact';
    }

    get detailFields() {
        if (!this.contact) return [];
        return [
            { label: 'Company', value: this.contact.company },
            { label: 'Title', value: this.contact.title },
            { label: 'Email', value: this.contact.email, type: 'email' },
            { label: 'Phone', value: this.contact.phone, type: 'tel' }
        ];
    }

    get mailingAddress() {
        if (!this.contact) return '';
        const c = this.contact;
        return `${c.mailingStreet}, ${c.mailingCity}, ${c.mailingState} ${c.mailingZip}`;
    }

    get followVariant() {
        return this.isFollowing ? 'success' : 'neutral';
    }

    get followLabel() {
        return this.isFollowing ? 'Following' : 'Follow';
    }

    get followIconName() {
        return this.isFollowing ? 'utility:check' : 'utility:add';
    }

    handleFollow() {
        this.isFollowing = !this.isFollowing;
    }

    handleBackToList() {
        navigate('/contacts');
    }
}
