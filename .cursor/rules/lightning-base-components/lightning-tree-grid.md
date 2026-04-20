# lightning-tree-grid

**What is it?**  
This component is a table-like structure that displays hierarchical data with expandable rows, providing users with a visual representation of structured data such as account hierarchies or forecasting data.

**Where would you use it?**
- Imagine you're a manager at a large corporation and you need to keep track of the hierarchy of your employees. You could use the <lightning-tree-grid> component to create a table that displays each employee's name, their position, and who they report to. Each row in the table could be expanded to reveal the employees that report to the person in that row.
- Suppose you're a teacher with a large class of students. You could use the <lightning-tree-grid> component to create a table that displays each student's name, their grades, and their attendance record. Each row in the table could be expanded to reveal more detailed information about the student's performance in the class.
- Imagine you're a project manager and you need to keep track of the tasks in your project. You could use the <lightning-tree-grid> component to create a table that displays each task, its status, and its due date. Each row in the table could be expanded to reveal the subtasks associated with that task.

**How do you use it?**
- **hide-checkbox-column** `boolean`  
  _Examples:_
    `<lightning-tree-grid hide-checkbox-column=true>`
    `<lightning-tree-grid hide-checkbox-column={hideCheckbox}>`
- **data** `object[]`  
  _Examples:_
    `<lightning-tree-grid data={data}>`
- **columns** `object[]`  
  _Examples:_
    `<lightning-tree-grid columns={columns}>`
- **key-field** `string`  
  _Examples:_
    `<lightning-tree-grid key-field='name'>`
    `<lightning-tree-grid key-field={keyField}>`
- **expanded-rows** `string[]`  
  _Examples:_
    `<lightning-tree-grid expanded-rows={currentExpanded}>`
- **ontoggle** `(ev: CustomEvent & { detail: { name: string, isExpanded: boolean, hasChildrenContent: boolean, row: object } }) => void`  
  _Examples:_
    `<lightning-tree-grid ontoggle={handleRowToggle}>`
- **ontoggleall** `(ev: CustomEvent & { detail: { isExpanded: boolean } }) => void`  
  _Examples:_
    `<lightning-tree-grid ontoggleall={handleToggleAll}>`
- **onrowselection** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-tree-grid onrowselection={handleRowSelection}>`
- **headeraction** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-tree-grid headeraction={handleHeaderAction}>`
- **rowaction** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-tree-grid rowaction={handleRowAction}>`
- **aria-label** `string`  
  _Examples:_
    `<lightning-tree-grid aria-label='Active Cases per Contact'>`
- **aria-labelledby** `string`  
  _Examples:_
    `<lightning-tree-grid aria-labelledby='table-desc1 table-desc2'>`
- **min-column-width** `string`  
  _Examples:_
    `<lightning-tree-grid min-column-width='80'>`
- **max-column-width** `string`  
  _Examples:_
    `<lightning-tree-grid max-column-width='1000'>`
- **resize-column-disabled** `boolean`  
  _Examples:_
    `<lightning-tree-grid resize-column-disabled=true>`

**Related Components:**
- **lightning-datatable** (required)
- **lightning-button** (optional)
- **lightning-formatted-text** (optional)
- **lightning-formatted-number** (optional)
- **lightning-formatted-date-time** (optional)
- **lightning-formatted-url** (optional)
- **lightning-formatted-email** (optional)
- **lightning-formatted-location** (optional)
- **lightning-formatted-phone** (optional)
- **lightning-button-menu** (optional)
- **lightning-button-icon** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Tree Grid
      description: A tree grid displays structured data in a table with expandable rows.
    - name: expanded
      label: Tree Grid With Expanded Rows
      description: Expanded row names can be retrieved using JavaScript.
    - name: lazyLoading
      label: Asynchronous Loading of Nested Items
      description: For improved performance, a tree grid can load content only when the rows expand.
---

A `lightning-tree-grid` component displays hierarchical data in a table. Its
appearance resembles `lightning-datatable` since it implements `lightning-datatable` internally, with the exception that each row in the table
can be expanded to reveal a nested group of items. Rows that contain nested
data display a chevron icon to denote that they can be expanded or collapsed.
This visual representation is useful for displaying structured data such as
account hierarchy or forecasting data.

...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';
import {
    EXAMPLES_COLUMNS_DEFINITION_BASIC,
    EXAMPLES_DATA_BASIC,
} from './sampleData';

export default class TreeGridBasic extends LightningElement {
    // definition of columns for the tree grid
    gridColumns = EXAMPLES_COLUMNS_DEFINITION_BASIC;

    // data provided to the tree grid
    gridData = EXAMPLES_DATA_BASIC;
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Tree Grid component with data from a static source. Click on the arrow icons to expand or collapse a branch.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-tree-grid
                columns={gridColumns}
                data={gridData}
                key-field="name"
            ></lightning-tree-grid>
        </div>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement, track } from 'lwc';
import {
    EXAMPLES_COLUMNS_DEFINITION_BASIC,
    EXAMPLES_DATA_BASIC,
} from './sampleData';

export default class TreeGridExpanded extends LightningElement {
    @track currentExpandedRows;

    // definition of columns for the tree grid
    gridColumns = EXAMPLES_COLUMNS_DEFINITION_BASIC;

    // data provided to the tree grid
    gridData = EXAMPLES_DATA_BASIC;

    // list of names for rows that are expanded
    gridExpandedRows = [
        '123556',
        '123556-A',
        '123556-B',
        '123556-B-B',
        '123557',
    ];

    // retrieve the list of rows currently marked as expanded
    getCurrentExpandedRows() {
        const treegrid = this.template.querySelector('.lgc-example-treegrid');
        this.currentExpandedRows = treegrid.getCurrentExpandedRows().toString();
    }
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium">
            Tree Grid component with some initially expanded rows.
        </h2>
        <h3 class="slds-text-heading_small slds-m-bottom_large">
            Click the "Get current expanded rows" button to view the key field values of the rows marked as expanded. Expand and collapse some rows then click the button again to see an updated result.
        </h3>

        <div class="slds-m-vertical_large">
            <p class="slds-m-bottom_xx-small">The rows currently marked as expanded are: <span class="slds-text-heading_small">{currentExpandedRows}</span></p>
            <lightning-button label="Get Current Expanded Rows" onclick={getCurrentExpandedRows}></lightning-button>
        </div>

        <!-- Expanded rows -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-tree-grid
                class="lgc-example-treegrid"
                columns={gridColumns}
                data={gridData}
                expanded-rows={gridExpandedRows}
                key-field="name"
            ></lightning-tree-grid>
        </div>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';
import {
    EXAMPLES_COLUMNS_DEFINITION_BASIC,
    EXAMPLES_DATA_LAZY_LOADING,
} from './sampleData';

export default class TreeGridLazyLoading extends LightningElement {
    gridLoadingState = false;

    // definition of columns for the tree grid
    gridColumns = EXAMPLES_COLUMNS_DEFINITION_BASIC;

    // initial data provided to the tree grid
    gridData = EXAMPLES_DATA_LAZY_LOADING;

    // list of names for rows that are expanded
    gridExpandedRows = ['123556', '123556-B', '123557'];

    // when a row is toggled we retrieve values and dynamically load children if needed
    handleRowToggle(event) {
        // retrieve the unique identifier of the row being expanded
        const rowName = event.detail.name;

        // does the component have children content for this row already?
        const hasChildrenContent = event.detail.hasChildrenContent;

        /*
         ** additional event.detail values available:
         **
         ** => the new expanded state for this row
         **    const isExpanded = event.detail.isExpanded;
         **
         ** => the complete row data
         **    const row = event.detail.row;
         */

        // if hasChildrenContent is false then we need to react and add children
        if (hasChildrenContent === false) {
            this.gridLoadingState = true;

            // call a method to retrieve the updated data tree that includes the missing children
            this.retrieveUpdatedData(rowName).then((newData) => {
                this.gridData = newData;
                this.gridLoadingState = false;
            });
        }
    }

    // mimic a delay in retrieving the data (2 second delay)
    retrieveUpdatedData(rowName) {
        return new Promise((resolve) => {
            // mimic server delay
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            window.setTimeout(() => {
                // add children to data
                const updatedData = this.addChildrenToRow(
                    this.gridData,
                    rowName,
                    this.childrenData[rowName]
                );

                resolve(updatedData);
            }, 2000);
        });
    }

    // add the new child rows at the desired location
    addChildrenToRow(data, rowName, children) {
        // step through the array using recursion until we find the correct row to update
        const newData = data.map((row) => {
            // does this row have a properly formatted _children key with content?
            let hasChildrenContent = false;
            if (
                // eslint-disable-next-line no-prototype-builtins
                row.hasOwnProperty('_children') &&
                Array.isArray(row._children) &&
                row._children.length > 0
            ) {
                hasChildrenContent = true;
            }

            // if this is the row that was toggled then add the child content
            if (row.name === rowName) {
                row._children = children;
                // otherwise keep searching for the correct row by recursively searching the tree
            } else if (hasChildrenContent) {
                this.addChildrenToRow(row._children, rowName, children);
            }

            return row;
        });

        return newData;
    }

    // child data to be added later
    childrenData = {
        '123556-A': [
            {
                name: '123556-A-A',
                accountName: 'Acme Corporation (Oakland)',
                employees: 745,
                phone: '837-555-1212',
                accountOwner: 'http://example.com/john-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'New York, NY',
            },
            {
                name: '123556-A-B',
                accountName: 'Acme Corporation (San Francisco)',
                employees: 578,
                phone: '837-555-1212',
                accountOwner: 'http://example.com/jane-doe',
                accountOwnerName: 'Jane Doe',
                billingCity: 'Los Angeles, CA',
            },
        ],

        '123556-B-B': [
            {
                name: '123556-B-B-A',
                accountName: 'Allied Technologies',
                employees: 390,
                phone: '837-555-1212',
                accountOwner: 'http://example.com/jane-doe',
                accountOwnerName: 'Jane Doe',
                billingCity: 'Los Angeles, CA',
                _children: [
                    {
                        name: '123556-B-B-A-A',
                        accountName: 'Allied Technologies (UV)',
                        employees: 270,
                        phone: '837-555-1212',
                        accountOwner: 'http://example.com/john-doe',
                        accountOwnerName: 'John Doe',
                        billingCity: 'San Francisco, CA',
                    },
                ],
            },
        ],
    };
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Tree Grid component with some rows that will dynamically load children only when initially expanded.
        </h2>

        <!-- Expanded rows -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-tree-grid
                class="lgc-example-treegrid"
                columns={gridColumns}
                data={gridData}
                expanded-rows={gridExpandedRows}
                key-field="name"
                is-loading={gridLoadingState}
                ontoggle={handleRowToggle}
            ></lightning-tree-grid>
        </div>
    </div>
</template>

```

---
