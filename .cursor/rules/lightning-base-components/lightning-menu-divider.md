# lightning-menu-divider

**What is it?**  
This component creates a dividing line in a menu, allowing for the separation of items into groups or categories, enhancing user navigation and organization.

**Where would you use it?**
- Imagine you're using a website to order groceries. When you click on the 'Produce' section, a dropdown menu appears with different categories of fruits and vegetables. The <lightning-menu-divider> component could be used to separate these categories, making it easier for you to find what you're looking for.
- In an online clothing store, when you hover over the 'Women's Clothing' section, a dropdown menu appears with different types of clothing like 'Tops', 'Bottoms', 'Dresses', etc. The <lightning-menu-divider> component could be used to separate these different types of clothing, making the menu more organized and easier to navigate.
- Consider a music streaming website where you can browse different genres of music. When you click on the 'Genres' section, a dropdown menu appears with different music genres like 'Pop', 'Rock', 'Classical', etc. The <lightning-menu-divider> component could be used to separate these genres, making it easier for you to find the type of music you want to listen to.
- On a news website, when you hover over the 'News' section, a dropdown menu appears with different categories like 'Local', 'National', 'International', 'Business', etc. The <lightning-menu-divider> component could be used to separate these categories, making it easier for you to find the news you're interested in.
- In a restaurant's online menu, when you click on the 'Menu' section, a dropdown appears with different categories like 'Appetizers', 'Main Courses', 'Desserts', etc. The <lightning-menu-divider> component could be used to separate these categories, making it easier for you to browse the menu.

**How do you use it?**
- **variant** `string`  
  _Examples:_
    `<lightning-menu-divider variant="compact">`
    `<lightning-menu-divider variant={myVariantValue}>`

**Related Components:**
- **lightning-button-menu** (required)
- **lightning-menu-item** (required)
- **lightning-menu-subheader** (optional)

**Docs:**
---
examples:
    - name: divider
      label: Button Menus With Dividers
      description: Button menus can include lines between menu items.
    - name: withSubhead
      label: Button Menus With Dividers and Subheaders
      description: Button menus with subheaders, dividers, and compact variant.
---

The `lightning-menu-divider` component creates a dividing line after a menu item in a
[`lightning-button-menu`](bundle/lightning-button-menu/documentation) component.
Use a menu divider to introduce a break between item categories or separate items into groups,
for example.

To draw a line after a menu item, nest the component inside `lightning-button-menu` after the `lightning-menu-item` where you want the line. Use `lightning-menu-divider` as a sibling of `lightning-menu-item`, not as a child component.

This example shows a dropdown menu with two dividers.

```html
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
            Button menus using <code>lightning-menu-divider</code> components. The <code>lightning-menu-divider</code> components use <code>standard</code> and <code>compact</code> variants.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu tooltip="Dividers use default variant" alternative-text="Show menu">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-divider></lightning-menu-divider>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-divider></lightning-menu-divider>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu tooltip="Dividers use compact variant" alternative-text="Show menu" class="slds-m-left_xx-small">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-divider variant="compact"></lightning-menu-divider>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-divider variant="compact"></lightning-menu-divider>
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
            Button menus with <code>lightning-menu-subheader</code> and <code>lightning-menu-divider</code> components. The <code>lightning-menu-divider</code> components use default <code>standard</code> and <code>compact</code> variants.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu tooltip="Subheadings with dividers using default variant" alternative-text="Show menu">
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
