import { LightningElement } from 'lwc';
import { navigate } from '../../../router';
import { getAllContacts } from 'data/contacts';

const COLUMNS = [
    {
        label: 'Name',
        fieldName: 'name',
        type: 'button',
        sortable: true,
        typeAttributes: {
            label: { fieldName: 'name' },
            variant: 'base',
            name: 'view'
        }
    },
    { label: 'Account Name', fieldName: 'company', sortable: true },
    { label: 'Title', fieldName: 'title', sortable: true },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Email', fieldName: 'email', type: 'email' },
    {
        type: 'action',
        typeAttributes: {
            rowActions: [
                { label: 'View', name: 'view' },
                { label: 'Edit', name: 'edit' },
                { label: 'Delete', name: 'delete' }
            ]
        }
    }
];

export default class Contacts extends LightningElement {
    columns = COLUMNS;
    data = [];
    sortedBy = 'name';
    sortedDirection = 'asc';
    searchTerm = '';

    connectedCallback() {
        this.data = getAllContacts();
    }

    get filteredData() {
        if (!this.searchTerm) {
            return this.data;
        }
        const term = this.searchTerm.toLowerCase();
        return this.data.filter(contact =>
            contact.name.toLowerCase().includes(term) ||
            contact.company.toLowerCase().includes(term) ||
            contact.title.toLowerCase().includes(term) ||
            contact.email.toLowerCase().includes(term)
        );
    }

    get metaText() {
        const count = this.filteredData.length;
        const sortField = this.columns.find(c => c.fieldName === this.sortedBy)?.label;
        let text = `${count} item${count !== 1 ? 's' : ''}`;
        if (sortField) {
            text += ` \u2022 Sorted by ${sortField}`;
        }
        text += ' \u2022 Updated a few seconds ago';
        return text;
    }

    handleSearch(event) {
        this.searchTerm = event.detail.value;
    }

    handleSort(event) {
        const { fieldName, sortDirection } = event.detail;
        const clonedData = [...this.data];
        const sortKey = fieldName;

        clonedData.sort((a, b) => {
            let aVal = a[sortKey] || '';
            let bVal = b[sortKey] || '';

            if (typeof aVal === 'string') {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }

            if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });

        this.data = clonedData;
        this.sortedBy = fieldName;
        this.sortedDirection = sortDirection;
    }

    handleRowAction(event) {
        const action = event.detail.action;
        const row = event.detail.row;

        if (action.name === 'view') {
            navigate(`/contacts/${row.id}`);
        } else if (action.name === 'delete') {
            this.data = this.data.filter(item => item.id !== row.id);
        }
    }
}
