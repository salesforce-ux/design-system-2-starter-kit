# lightning-menu-subheader

**What is it?**  
This component creates a bold, slightly larger heading within a list of menu items, helping to categorize items and improve usability for long lists.

**Where would you use it?**
- Imagine you're using a website for a grocery store, and you're looking at a dropdown menu of all the different types of produce they offer. The <lightning-menu-subheader> component could be used to categorize the produce into different types, like 'Fruits', 'Vegetables', and 'Herbs', making it easier for you to find what you're looking for.
- On a music streaming website, you might see a dropdown menu that lists all the different genres of music you can listen to. The <lightning-menu-subheader> component could be used to divide these genres into broader categories, like 'Popular', 'Classical', and 'World Music', helping you navigate the menu more easily.
- Suppose you're using an online learning platform that offers courses in a variety of subjects. When you click on a dropdown menu to browse the courses, the <lightning-menu-subheader> component could be used to group the courses into categories like 'Arts & Humanities', 'Computer Science', and 'Business & Management', making it easier for you to find courses in your area of interest.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-menu-subheader label='Leafy Greens'>`
    `<lightning-menu-subheader label='Summer Squash'>`
    `<lightning-menu-subheader label='Root Vegetables'>`

**Related Components:**
- **lightning-button-menu** (required)
- **lightning-menu-item** (required)
- **lightning-menu-divider** (optional)

**Docs:**
---
examples:
    - name: subheader
      label: Button Menus With Subheaders
      description: Button menu items can include headers among menu items.
    - name: withDividers
      label: Button Menus With Dividers and Subheaders
      description: Button menus with subheaders, dividers, and compact variant.
---

The `lightning-menu-subheader` component creates a heading in the list of menu items in a
[`lightning-button-menu`](bundle/lightning-button-menu/documentation) component.
The heading appears in bold text and is slightly larger than menu item text.
Subheaders can help categorize items and improve usability for long lists.

Specify the text of the heading using the `label` attribute.

Nest the component inside `lightning-button-menu` before the `lightning-menu-item` where you want the header. Use `lightning-menu-subheader` as a sibling of `lightning-menu-item`, not as a child component.

This example shows a dropdown menu with subheaders.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class ButtonMenuBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with <code>lightning-menu-subheader</code> components.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu">
                <lightning-menu-subheader label="Header Alpha"></lightning-menu-subheader>
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-subheader label="Header Beta"></lightning-menu-subheader>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class ButtonMenuBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menus with <code>lightning-menu-subheader</code> and <code>lightning-menu-divider</code>
            components. The <code>lightning-menu-divider</code> components use <code>standard</code> and <code>compact</code> variants.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu tooltip="Subheadings with dividers using standard variant" alternative-text="Show menu">
                <lightning-menu-subheader label="Header Alpha"></lightning-menu-subheader>
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-divider></lightning-menu-divider>
                <lightning-menu-subheader label="Header Beta"></lightning-menu-subheader>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-divider></lightning-menu-divider>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu tooltip="Subheadings with dividers using compact variant" alternative-text="Show menu" class="slds-m-left_xx-small">
                <lightning-menu-subheader label="Header Alpha"></lightning-menu-subheader>
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-divider variant="compact"></lightning-menu-divider>
                <lightning-menu-subheader label="Header Beta"></lightning-menu-subheader>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-divider variant="compact"></lightning-menu-divider>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>
</template>

```

---
