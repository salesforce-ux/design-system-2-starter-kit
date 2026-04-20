# lightning-datatable

**What is it?**  
This component is a versatile table element that supports a variety of data types and allows for customization, providing users with a dynamic and interactive data viewing experience.

**Where would you use it?**
- Imagine you're a sales manager using a CRM system to track your team's sales opportunities. You have a list of opportunities, each with a unique ID and a name. The <lightning-datatable> component could be used to display this list in a table format, where each row represents an opportunity and the columns display the opportunity's ID and name.
- As a customer service representative, you might use a system to manage customer complaints. Each complaint has a unique ID and a description. The <lightning-datatable> component could be used to display these complaints in a table, where each row represents a complaint and the columns display the complaint's ID and description.
- Suppose you're a project manager using a project management tool to track tasks. Each task has a unique ID, a name, and a status. The <lightning-datatable> component could be used to display these tasks in a table, where each row represents a task and the columns display the task's ID, name, and status.
- As a human resources manager, you might use a system to manage employee records. Each employee has a unique ID, a name, and a job title. The <lightning-datatable> component could be used to display these records in a table, where each row represents an employee and the columns display the employee's ID, name, and job title.
- Imagine you're a librarian using a library management system to track books. Each book has a unique ID and a title. The <lightning-datatable> component could be used to display these books in a table, where each row represents a book and the columns display the book's ID and title.
- As a warehouse manager, you might use a system to manage inventory. Each item has a unique ID and a description. The <lightning-datatable> component could be used to display these items in a table, where each row represents an item and the columns display the item's ID and description.

**How do you use it?**


**Related Components:**
- **lightning-formatted-lookup** (optional)

**Docs:**
# lightning-datatable

> This document is for internal use only. It supplements the [lightning-datatable documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning-datatable) in the Component Library.

## Working with Internal Data Types

> This section supplements the [Formatting with Data Types](https://developer.salesforce.com/docs/component-library/bundle/lightning-datatable/documentation) section in the Component Library.

`lightning-datatable` supports many data types. See the getters for all data types in [`primitiveCellFactory.js`](../primitiveCellFactory/primitiveCellFactory.js).

The undocumented `reference` type is an internal-only type for lookup fields. Currently, inline editing is not supported for lookup fields in `lightning-datatable`.

To configure a column using the `reference` type, update the `columns` definition.

```js
{
    label: 'Records',
    fieldName: 'record',
    type: 'reference',
    typeAttributes: { displayValue: {fieldName: 'recordDisplay'}}
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';
import generateData from './generateData';

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class BasicDatatable extends LightningElement {
    data = [];
    columns = columns;

    connectedCallback() {
        const data = generateData({ amountOfRecords: 100 });
        this.data = data;
    }
}

```

```html
<template>
    <div style="height: 300px;">
        <lightning-datatable
                key-field="id"
                data={data}
                columns={columns}>
        </lightning-datatable>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

const data = [
    { id: 1, name: 'Billy Simonns', age: 40, email: 'billy@test.com' },
    { id: 2, name: 'Kelsey Denesik', age: 35, email: 'kelsey@test.com' },
    { id: 3, name: 'Kyle Ruecker', age: 50, email: 'kyle@test.com' },
    {
        id: 4,
        name: 'Krystina Kerluke',
        age: 37,
        email: 'krystina@test.com',
    },
];

const columns = [
    { label: 'Name', fieldName: 'name' },
    {
        label: 'Age',
        fieldName: 'age',
        type: 'number',
        sortable: true,
        cellAttributes: { alignment: 'left' },
    },
    { label: 'Email', fieldName: 'email', type: 'email' },
];

export default class DemoApp extends LightningElement {
    data = data;
    columns = columns;
    defaultSortDirection = 'asc';
    sortDirection = 'asc';
    sortedBy;

    // Used to sort the 'Age' column
    sortBy(field, reverse, primer) {
        const key = primer
            ? function (x) {
                  return primer(x[field]);
              }
            : function (x) {
                  return x[field];
              };

        return function (a, b) {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        };
    }

    onHandleSort(event) {
        const { fieldName: sortedBy, sortDirection } = event.detail;
        const cloneData = [...this.data];

        cloneData.sort(this.sortBy(sortedBy, sortDirection === 'asc' ? 1 : -1));
        this.data = cloneData;
        this.sortDirection = sortDirection;
        this.sortedBy = sortedBy;
    }
}

```

```html
<template>
    <lightning-datatable
            key-field="id"
            columns={columns}
            data={data}
            hide-checkbox-column
            default-sort-direction={defaultSortDirection}
            sorted-direction={sortDirection}
            sorted-by={sortedBy}
            onsort={onHandleSort}>
    </lightning-datatable>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';
import generateData from './generateData';

// Add <datatable-with-all-column-types></datatable-with-all-column-types> to the lwr-playground to see the table

const columns = [
    { label: 'Name', fieldName: 'name' },
    { label: 'Boolean', fieldName: 'boolean', type: 'boolean' },
    { label: 'Url', fieldName: 'url', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    {
        label: 'Currency',
        fieldName: 'currency',
        type: 'currency',
        typeAttributes: {
            currencyCode: 'EUR',
        },
    },
    { label: 'Date', fieldName: 'date', type: 'date' },
    {
        label: 'Date-local',
        fieldName: 'dateLocal',
        type: 'date-local',
        typeAttributes: {
            month: '2-digit',
            day: '2-digit',
        },
    },
    { label: 'Email', fieldName: 'email', type: 'email' },
    { label: 'Location', fieldName: 'location', type: 'location' },
    { label: 'Number', fieldName: 'number', type: 'number' },
    { label: 'Percent', fieldName: 'percent', type: 'percent' },
    {
        label: 'Action',
        type: 'action',
        typeAttributes: {
            rowActions: [
                { label: 'action 1', name: 'action1' },
                { label: 'action 2', name: 'action2' },
            ],
        },
    },
    {
        label: 'Button',
        type: 'button',
        typeAttributes: {
            label: 'Submit',
            name: 'submitAction',
            iconName: { fieldName: 'iconName' },
        },
    },
    {
        label: 'Button-icon',
        type: 'button-icon',
        typeAttributes: {
            label: 'Submit',
            name: 'submitAction',
            iconName: { fieldName: 'iconName' },
        },
    },
];

export default class DatatableWithAllColumnTypes extends LightningElement {
    data = [];
    columns = columns;

    connectedCallback() {
        const data = generateData({ amountOfRecords: 100 });
        this.data = data;
    }
}

```

```html
<template>
    <div style="height: 300px;">
        <lightning-datatable
            key-field="id"
            hide-checkbox-column
            data={data}
            columns={columns}
            column-widths-mode="auto">
        </lightning-datatable>
    </div>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';
import generateData from './generateData';

// Add <datatable-with-col-resizing></datatable-with-col-resizing> to the lwr-playground to see table

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class DatatableWithResize extends LightningElement {
    data = [];
    columns = columns;
    mode = 'fixed';
    resizeStep = 10;

    connectedCallback() {
        this.data = generateData({ amountOfRecords: 25 });
    }

    changeWidthsMode() {
        this.mode = this.mode === 'fixed' ? 'auto' : 'fixed';
    }

    increaseResizeStep() {
        this.resizeStep += 10;
    }

    decreaseResizeStep() {
        this.resizeStep =
            this.resizeStep > 10 ? (this.resizeStep -= 10) : this.resizeStep;
    }

    addColumn() {
        const cols = Array.from(this.columns);
        cols.push({ label: 'ID', fieldName: 'id' });
        this.columns = cols;
    }
}

```

```html
<template>
    <p>Datatable with resize-column disabled</p>
    <lightning-datatable
        key-field="id"
        data={data}
        columns={columns}
        resize-column-disabled>
    </lightning-datatable>

    <p>Datatable with min and max column widths. Resize step: {resizeStep} </p>
    <lightning-button
        label="Increase resize step"
        class="increaseResizeStep"
        onclick={increaseResizeStep}>
    </lightning-button>
    <lightning-button
        label="Decrease resize step"
        class="decreaseResizeStep"
        onclick={decreaseResizeStep}>
    </lightning-button>
    <lightning-datatable
        key-field="id"
        data={data}
        columns={columns}
        min-column-width="100"
        max-column-width="300"
        resize-step={resizeStep}>
    </lightning-datatable>

    <p>Datatable with column-widths-mode='{mode}'</p>
    <lightning-button
        label="Change Widths Mode"
        class="changeWidthsMode"
        onclick={changeWidthsMode}>
    </lightning-button>
    <lightning-button
        label="Add Column"
        column="addColumn"
        onclick={addColumn}>
    </lightning-button>
    <lightning-datatable
        key-field="id"
        data={data}
        columns={columns}
        column-widths-mode={mode}>
    </lightning-datatable>
</template>

```

**Example 5:**

```js
import { LightningElement } from 'lwc';
import generateData from './generateData';

// Add <datatable-with-errors></datatable-with-errors> to the lwr-playground to see the table

const columns = [
    { label: 'Label', fieldName: 'name', editable: true },
    { label: 'Website', fieldName: 'website', type: 'url', editable: true },
    { label: 'Phone', fieldName: 'phone', type: 'phone', editable: true },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date', editable: true },
];

export default class DatatableWithError extends LightningElement {
    data = [];
    columns = columns;
    errors = {};

    connectedCallback() {
        this.data = generateData({ amountOfRecords: 100 });
    }

    triggerError() {
        this.errors = {
            rows: {
                1: {
                    title: 'We found 2 errors.',
                    messages: [
                        'Enter a valid name',
                        'Verify the phone number and try again.',
                    ],
                    fieldNames: ['name', 'phone'],
                },
            },
            table: {
                title: 'Your entry cannot be saved. Fix the errors and try again.',
                messages: [
                    'Row 1 name must be valid text',
                    'Row 1 phone number is invalid',
                ],
            },
        };
    }
}

```

```html
<template>
    <lightning-button
        label="Trigger error"
        class="triggerError"
        onclick={triggerError}>
    </lightning-button>
    <lightning-datatable
        key-field="id"
        data={data}
        columns={columns}
        errors={errors}>
    </lightning-datatable>
</template>

```

**Example 6:**

```js
import { LightningElement } from 'lwc';
import generateDataWithDelay from './generateDataWithDelay';

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class DatatableWithInfiniteLoading extends LightningElement {
    data = [];
    columns = columns;
    loadMoreStatus;
    totalNumberOfRows = 250;
    loadMoreOffset = 20;

    // eslint-disable-next-line @lwc/lwc/no-async-await
    async connectedCallback() {
        const data = await generateDataWithDelay({ amountOfRecords: 100 });
        this.data = data;
    }

    // eslint-disable-next-line @lwc/lwc/no-async-await
    async handleLoadMore(event) {
        const datatable = event.target;
        //Displays a spinner to signal that data is being loaded
        datatable.isLoading = true;
        //Displays "Loading" text when more data is being loaded
        this.loadMoreStatus = 'Loading';

        const newData = await generateDataWithDelay({ amountOfRecords: 50 });
        if (this.data.length >= this.totalNumberOfRows) {
            datatable.enableInfiniteLoading = false;
            this.loadMoreStatus = 'No more data to load';
        } else {
            this.data = this.data.concat(newData);
            this.loadMoreStatus = '';
        }
        datatable.isLoading = false;
    }
}

```

```html
<template>
    <p>Total Rows: {data.length}</p>
    <div style="height: 300px;">
        <lightning-datatable
            key-field="id"
            data={data}
            columns={columns}
            enable-infinite-loading
            onloadmore={handleLoadMore}
            load-more-offset={loadMoreOffset}>
        </lightning-datatable>
    </div>
    <p>{loadMoreStatus}</p>
</template>

```

**Example 7:**

```js
import { LightningElement } from 'lwc';
import generateData from './generateData';

const columns = [
    { label: 'Label', fieldName: 'name', editable: true },
    { label: 'Website', fieldName: 'website', type: 'url', editable: true },
    { label: 'Phone', fieldName: 'phone', type: 'phone', editable: true },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date', editable: true },
    { label: 'Balance', fieldName: 'amount', type: 'currency', editable: true },
];

export default class DatatableWithInlineEdit extends LightningElement {
    data = [];
    columns = columns;
    rowOffset = 0;
    draftValues = [];

    connectedCallback() {
        this.data = generateData({ amountOfRecords: 100 });
    }
}

```

```html
<template>
    <div style="height: 300px;">
        <lightning-datatable
                key-field="id"
                data={data}
                show-row-number-column
                row-number-offset={rowOffset}
                suppress-bottom-bar
                draft-values={draftValues}
                columns={columns}>
        </lightning-datatable>
    </div>
</template>

```

**Example 8:**

```js
import { LightningElement } from 'lwc';
import generateData from './generateData';

const actions = [
    { label: 'Show details', name: 'show_details' },
    { label: 'Delete', name: 'delete' },
];

const columns = [
    { label: 'Name', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'Close At', fieldName: 'closeAt', type: 'date' },
    {
        type: 'action',
        typeAttributes: { rowActions: actions },
    },
];

export default class DatatableWithRowActions extends LightningElement {
    data = [];
    columns = columns;
    record = {};

    connectedCallback() {
        this.data = generateData({ amountOfRecords: 100 });
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'delete':
                this.deleteRow(row);
                break;
            case 'show_details':
                this.showRowDetails(row);
                break;
            default:
        }
    }

    deleteRow(row) {
        const { id } = row;
        const index = this.findRowIndexById(id);
        if (index !== -1) {
            this.data = this.data
                .slice(0, index)
                .concat(this.data.slice(index + 1));
        }
    }

    findRowIndexById(id) {
        let ret = -1;
        this.data.some((row, index) => {
            if (row.id === id) {
                ret = index;
                return true;
            }
            return false;
        });
        return ret;
    }

    showRowDetails(row) {
        this.record = row;
    }
}

```

```html
<template>
    <div style="height: 300px;">
        <lightning-datatable
                key-field="id"
                data={data}
                columns={columns}
                onrowaction={handleRowAction}>
        </lightning-datatable>
    </div>
    <div class="slds-m-around--medium" style="width: 30rem;">
        <article class="slds-tile">
            <h3 class="slds-tile__title slds-truncate" title="Record details"><a href="javascript:void(0);">Record details</a></h3>
            <div class="slds-tile__detail">
                <dl class="slds-list_horizontal slds-wrap">
                    <dt class="slds-item_label slds-text-color_weak slds-truncate" title="Name">Name:</dt>
                    <dd class="slds-item_detail slds-truncate">{record.name}</dd>
                    <dt class="slds-item_label slds-text-color_weak slds-truncate" title="Balance">Balance:</dt>
                    <dd class="slds-item_detail slds-truncate">
                        <lightning-formatted-number value={record.amount} format-style="currency"></lightning-formatted-number>
                    </dd>
                </dl>
            </div>
        </article>
    </div>
</template>

```

**Example 9:**

```js
import { LightningElement } from 'lwc';
import generateData from './generateData';

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class BasicDatatable extends LightningElement {
    data = [];
    columns = columns;
    rowOffset = 0;

    connectedCallback() {
        this.data = generateData({ amountOfRecords: 100 });
    }

    increaseRowOffset() {
        this.rowOffset += 100;
    }
}

```

```html
<template>
    <div style="height: 300px;">
        <lightning-datatable
                key-field="id"
                data={data}
                show-row-number-column
                row-number-offset={rowOffset}
                hide-checkbox-column
                columns={columns}>
        </lightning-datatable>
    </div>
    <div class="slds-m-around--medium">
        <lightning-button
                label="Increase row offset"
                onclick={increaseRowOffset}>
        </lightning-button>
    </div>
</template>

```

**Example 10:**

```js
import { LightningElement } from 'lwc';
import generateData from './generateData';

// Add <datatable-with-row-selection></datatable-with-row-selection> to the lwr-playground to see the table

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class DatatableWithRowSelection extends LightningElement {
    data = [];
    columns = columns;
    selectedRows = ['1', '2', '4'];
    maxRowSelection = 4;

    connectedCallback() {
        this.data = generateData({ amountOfRecords: 100 });
    }

    increaseMaxRowSelection() {
        this.maxRowSelection += 1;
    }

    decreaseMaxRowSelection() {
        this.maxRowSelection =
            this.maxRowSelection > 0
                ? (this.maxRowSelection -= 1)
                : this.maxRowSelection;
    }
}

```

```html
<template>
    <p>Max row selection value: {maxRowSelection}</p>
    <lightning-button
        label="Increase max row selection"
        class="increaseMaxRowSelection"
        onclick={increaseMaxRowSelection}>
    </lightning-button>
    <lightning-button
        label="Decrease max row selection"
        class="decreaseMaxRowSelection"
        onclick={decreaseMaxRowSelection}>
    </lightning-button>
    <lightning-datatable
        key-field="id"
        columns={columns}
        data={data}
        selected-rows={selectedRows}
        row-number-offset="0"
        max-row-selection={maxRowSelection}>
    </lightning-datatable>
</template>

```

**Example 11:**

```js
import { LightningElement } from 'lwc';
import generateData from './generateData';

// Add <datatable-with-text-wrapping></datatable-with-text-wrapping> to the lwr-playground to see the table

const columns = [
    { label: 'Label', fieldName: 'name' },
    {
        label: 'Description',
        fieldName: 'description',
        wrapText: true,
    },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class DatatablewithTextWrapping extends LightningElement {
    data = [];
    columns = columns;
    wrapTextMaxLines;

    connectedCallback() {
        this.data = generateData({ amountOfRecords: 25 });
    }

    changeTextWrappingMaxLines() {
        this.wrapTextMaxLines = 3;
    }
}

```

```html
<template>
    <lightning-button
        label="Change text wrapping max lines"
        class="changeTextWrappingMaxLines"
        onclick={changeTextWrappingMaxLines}>
    </lightning-button>
    <lightning-datatable
        key-field="id"
        columns={columns}
        data={data}
        hide-checkbox-column
        wrap-text-max-lines={wrapTextMaxLines}>
    </lightning-datatable>
</template>

```

**Example 12:**

```js
import { LightningElement } from 'lwc';
import generateData from './generateData';

// Add <datatable-with-virtualization></datatable-with-virtualization> to the lwr-playground to see the table

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class DatatableWithVirtualization extends LightningElement {
    data = [];
    columns = columns;
    renderConfig = {
        virtualize: 'vertical',
        bufferSize: 10,
        fixedHeight: true,
    };

    connectedCallback() {
        const data = generateData({ amountOfRecords: 100 });
        this.data = data;
    }
}

```

```html
<template>
    <div style="height:100vh;">
        <lightning-datatable
            data-render-mode="role-based"
            key-field="id"
            data={data}
            columns={columns}
            render-mode="role-based"
            render-config={renderConfig}>
        </lightning-datatable>
    </div>
</template>

```

**Example 13:**

```js
import { LightningElement } from 'lwc';
import generateData from './generateData';

// Add <datatable-without-table-header></datatable-without-table-header> to the lwr-playground to see the table

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class DatatableWithoutTableHeader extends LightningElement {
    data = [];
    columns = columns;

    connectedCallback() {
        const data = generateData({ amountOfRecords: 100 });
        this.data = data;
    }
}

```

```html
<template>
    <div style="height: 300px;">
        <lightning-datatable
            key-field="id"
            data={data}
            columns={columns}
            hide-table-header>
        </lightning-datatable>
    </div>
</template>

```

---
