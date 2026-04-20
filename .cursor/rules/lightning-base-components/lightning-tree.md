# lightning-tree

**What is it?**  
This component is a visual representation of a structural hierarchy, such as a website sitemap or an organizational role hierarchy, that allows users to navigate through nested items, which can be expanded or collapsed, and provides an interactive user experience with the ability to select items, add or remove items, and programmatically control item selection and branch expansion.

**Where would you use it?**
- Imagine you're a sales manager for a large company with a complex sales team structure. You want to visualize your team's hierarchy, from the sales directors down to the individual sales representatives. The <lightning-tree> component can be used to create a visual representation of this hierarchy, with each level of the team represented as a branch in the tree. You can expand and collapse these branches to view or hide the team members at each level.
- You're a website administrator and you want to create a sitemap for your website. The <lightning-tree> component can be used to create a visual sitemap, with each page on your website represented as a branch in the tree. You can expand and collapse these branches to view or hide the subpages under each main page. The component can also include hyperlinks to each page, allowing users to navigate your website directly from the sitemap.
- You're a project manager and you want to create a visual representation of a project's task hierarchy. The <lightning-tree> component can be used to create a visual task hierarchy, with each task and its subtasks represented as a branch in the tree. You can expand and collapse these branches to view or hide the subtasks under each main task. The component can also include additional information about each task, such as its status or due date, as metatext under each task label.

**How do you use it?**
- **items** `object[]`  
  _Examples:_
    `<lightning-tree items={treeList}>`
- **onselect** `(ev: CustomEvent & { detail: { name: string } }) => void`  
  _Examples:_
    `<lightning-tree onselect={handleSelect}>`
- **selected-item** `string`  
  _Examples:_
    `<lightning-tree selected-item={selected}>`

**Related Components:**
- **lightning-button** (optional)
- **lightning-breadcrumbs** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Tree
      description: A simple tree with several levels that you can expand and collapse.
    - name: metatext
      label: Nested Tree With Metatext
      description: Metatext adds text below the item label.
    - name: deeplyNested
      label: Deeply Nested Tree
      description: A tree can have muliple levels of nested branches.
    - name: onselect
      label: Tree With onselect Handler
      description: Use the onselect event handler to retrieve the selected item in the tree.
    - name: links
      label: Tree With Links
      description: Trees can be used for navigation by providing href attributes with the items.
---

A `lightning-tree` component displays visualization of a structural hierarchy,
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class TreeBasic extends LightningElement {
    items = [
        {
            label: 'Western Sales Director',
            name: '1',
            expanded: true,
            items: [
                {
                    label: 'Western Sales Manager',
                    name: '2',
                    expanded: true,
                    items: [
                        {
                            label: 'CA Sales Rep',
                            name: '3',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'OR Sales Rep',
                            name: '4',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
            ],
        },
        {
            label: 'Eastern Sales Director',
            name: '5',
            expanded: false,
            items: [
                {
                    label: 'Easter Sales Manager',
                    name: '6',
                    expanded: true,
                    items: [
                        {
                            label: 'NY Sales Rep',
                            name: '7',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'MA Sales Rep',
                            name: '8',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
            ],
        },
        {
            label: 'International Sales Director',
            name: '9',
            expanded: true,
            items: [
                {
                    label: 'Asia Sales Manager',
                    name: '10',
                    expanded: true,
                    items: [
                        {
                            label: 'Sales Rep1',
                            name: '11',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'Sales Rep2',
                            name: '12',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
                {
                    label: 'Europe Sales Manager',
                    name: '13',
                    expanded: false,
                    items: [
                        {
                            label: 'Sales Rep1',
                            name: '14',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'Sales Rep2',
                            name: '15',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
            ],
        },
    ];
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Tree component with a few levels of depth. Click on the arrow icons to expand or collapse a branch.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-tree items={items} header="Roles"></lightning-tree>
        </div>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class TreeDeeplyNested extends LightningElement {
    items = [
        {
            label: 'CTO',
            name: 'CTO',
            expanded: true,
            items: [
                {
                    label: 'Director',
                    name: 'CTO-DIR',
                    expanded: true,
                    items: [
                        {
                            label: 'Manager 1',
                            name: 'CTO-MGR-1',
                            expanded: true,
                            items: [
                                {
                                    label: 'Assistant Manager 1',
                                    name: 'CTO-ASM-1',
                                    expanded: true,
                                    items: [
                                        {
                                            label: 'Supervisor 1',
                                            name: 'CTO-MGR-1-ASM-1-SUP-1',
                                            expanded: true,
                                            items: [
                                                {
                                                    label: 'Staff 1',
                                                    name: 'CTO-MGR-1-ASM-1-SUP-1-STA-1',
                                                },
                                                {
                                                    label: 'Staff 2',
                                                    name: 'CTO-MGR-1-ASM-1-SUP-1-STA-2',
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    label: 'Assistant Manager 2',
                                    name: 'CTO-ASM-2',
                                    expanded: true,
                                    items: [
                                        {
                                            label: 'Supervisor 1',
                                            name: 'CTO-MGR-1-ASM-2-SUP-1',
                                            expanded: true,
                                            items: [
                                                {
                                                    label: 'Staff 1',
                                                    name: 'CTO-MGR-1-ASM-2-SUP-1-STA-1',
                                                },
                                                {
                                                    label: 'Staff 2',
                                                    name: 'CTO-MGR-1-ASM-2-SUP-1-STA-2',
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            label: 'Manager 2',
                            name: 'CTO-MGR-2',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
            ],
        },
        {
            label: 'CFO',
            name: 'CFO',
            expanded: false,
            items: [
                {
                    label: 'Director',
                    name: 'CFO-DIR',
                    expanded: false,
                    items: [
                        {
                            label: 'Manager 1',
                            name: 'CFO-MGR-1',
                            expanded: false,
                            items: [
                                {
                                    label: 'Assistant Manager 1',
                                    name: 'CFO-ASM-1',
                                },
                            ],
                        },
                        {
                            label: 'Manager 2',
                            name: 'CFO-MGR-2',
                        },
                    ],
                },
            ],
        },
    ];
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Tree component with a many levels of depth. Click on the arrow icons to expand or collapse a branch.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-tree items={items} header="Roles"></lightning-tree>
        </div>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class TreeLinks extends LightningElement {
    items = [
        {
            label: 'Go to Salesforce.com',
            name: '1',
            href: 'https://salesforce.com',
        },
        {
            label: 'Go to Google.com',
            name: '2',
            href: 'https://google.com',
        },
        {
            label: 'Go to Developer.salesforce.com',
            name: '3',
            href: 'https://developer.salesforce.com',
        },
        {
            label: 'Go to Trailhead.salesforce.com',
            name: '3',
            href: 'https://trailhead.salesforce.com',
        },
    ];
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Tree component with linked items. Click an item to navigate to its link.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-tree items={items} header="Links"></lightning-tree>
        </div>
    </div>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class TreeMetatext extends LightningElement {
    items = [
        {
            label: 'Western Sales Director',
            name: '1',
            metatext: 'Jane Dough',
            expanded: true,
            items: [
                {
                    label: 'Western Sales Manager',
                    name: '2',
                    metatext: 'John Doe',
                    expanded: true,
                    items: [
                        {
                            label: 'CA Sales Rep',
                            name: '3',
                            metatext: 'Buck Rogers',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'OR Sales Rep',
                            name: '4',
                            metatext: 'Flash Gordon',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
            ],
        },
        {
            label: 'Eastern Sales Director',
            name: '5',
            metatext: 'Emma Frost',
            expanded: false,
            items: [
                {
                    label: 'Easter Sales Manager',
                    name: '6',
                    expanded: true,
                    items: [
                        {
                            label: 'NY Sales Rep',
                            name: '7',
                            metatext: 'John Crichton',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'MA Sales Rep',
                            name: '8',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
            ],
        },
        {
            label: 'International Sales Director',
            name: '9',
            metatext: 'Aeryn Sun',
            expanded: true,
            items: [
                {
                    label: 'Asia Sales Manager',
                    name: '10',
                    expanded: true,
                    items: [
                        {
                            label: 'Sales Rep1',
                            name: '11',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'Sales Rep2',
                            name: '12',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
                {
                    label: 'Europe Sales Manager',
                    name: '13',
                    expanded: false,
                    items: [
                        {
                            label: 'Sales Rep1',
                            name: '14',
                            expanded: true,
                            items: [],
                        },
                        {
                            label: 'Sales Rep2',
                            name: '15',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
            ],
        },
    ];
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Tree component with items that have metatext. Click on the arrow icons to expand or collapse a branch.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-tree items={items} header="Roles"></lightning-tree>
        </div>
    </div>
</template>

```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class TreeOnselect extends LightningElement {
    selectedItemValue;

    handleOnselect(event) {
        this.selectedItemValue = event.detail.name;
    }

    items = [
        {
            label: 'User',
            name: 'user',
            disabled: false,
            expanded: true,
            items: [
                {
                    label: 'Standard User',
                    name: 'standard',
                    disabled: false,
                    expanded: true,
                    items: [],
                },
                {
                    label: 'Chatter User',
                    name: 'chatter',
                    disabled: false,
                    expanded: true,
                    items: [],
                },
            ],
        },
        {
            label: 'Administrator',
            name: 'admin',
            disabled: false,
            expanded: true,
            items: [
                {
                    label: 'System Administrator',
                    name: 'sysadmin',
                    disabled: false,
                    expanded: true,
                    items: [],
                },
                {
                    label: 'Chatter Administrator',
                    name: 'chatter',
                    disabled: false,
                    expanded: true,
                    items: [],
                },
            ],
        },
        {
            label: 'Community User',
            name: 'community',
            disabled: false,
            expanded: true,
            items: [
                {
                    label: 'Community Login User',
                    name: 'community_login',
                    disabled: false,
                    expanded: true,
                    items: [],
                },
                {
                    label: 'Community Plus Login User',
                    name: 'community_plus',
                    disabled: false,
                    expanded: true,
                    items: [],
                },
            ],
        },
    ];
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Tree component with an <code>onselect</code> handler. Click an item in the tree to make a selection.
        </h2>

        <!-- With onselect handler -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-tree items={items} header="Profiles" onselect={handleOnselect}></lightning-tree>
        </div>

        <div class="slds-m-vertical_medium">
            <p>The selected item is: <span class="slds-text-heading_small">{selectedItemValue}</span></p>
        </div>
    </div>
</template>

```

---
