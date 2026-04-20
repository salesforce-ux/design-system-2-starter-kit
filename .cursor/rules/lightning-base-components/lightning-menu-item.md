# lightning-menu-item

**What is it?**  
This component is a customizable menu item within a dropdown menu, which can hold different states, display icons, and provide navigation through URLs, enhancing user interaction and experience.

**Where would you use it?**
- In a project management application, a <lightning-menu-item> could be used in a dropdown menu to navigate to different sections of the project. Each menu item could represent a different aspect of the project, such as 'Tasks', 'Team Members', 'Timeline', etc. Clicking on a menu item would take the user to the corresponding section of the project.
- In a social media application, a <lightning-menu-item> could be used in a user's profile settings menu. The menu items could include options like 'Edit Profile', 'Privacy Settings', 'Log Out', etc. Each menu item could have an icon next to it representing the action, making it easier for the user to find what they're looking for.
- In an e-commerce application, a <lightning-menu-item> could be used in a product's 'More Options' menu. The menu items could include actions like 'Add to Wishlist', 'Compare with Similar Products', 'Share', etc. If the user hasn't saved their changes to the product options, the 'Add to Wishlist' menu item could show a draft indicator to remind the user to save their changes.
- In a news website, a <lightning-menu-item> could be used in a menu to navigate to different news categories. Each menu item could represent a different news category, such as 'World News', 'Sports', 'Entertainment', etc. Clicking on a menu item would take the user to the page with news articles from that category.
- In a music streaming application, a <lightning-menu-item> could be used in a menu for each song. The menu items could include actions like 'Add to Playlist', 'Share', 'Download', etc. Each menu item could have an icon next to it, making it visually appealing and easy to understand.
- In a blogging platform, a <lightning-menu-item> could be used in a menu for each blog post. The menu items could include actions like 'Edit Post', 'Delete Post', 'View Statistics', etc. If the user hasn't saved their changes to the blog post, the 'Edit Post' menu item could show a draft indicator to remind the user to save their changes.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-menu-item label='Menu Item 1'>`
    `<lightning-menu-item label={menuItemLabel}>`
- **value** `string`  
  _Examples:_
    `<lightning-menu-item value='menuitem1'>`
    `<lightning-menu-item value={menuItemValue}>`
- **icon-name** `string`  
  _Examples:_
    `<lightning-menu-item icon-name='utility:table'>`
    `<lightning-menu-item icon-name={iconName}>`
- **checked** `boolean`  
  _Examples:_
    `<lightning-menu-item checked>`
    `<lightning-menu-item checked={isChecked}>`
- **prefix-icon-name** `string`  
  _Examples:_
    `<lightning-menu-item prefix-icon-name='utility:user'>`
    `<lightning-menu-item prefix-icon-name={prefixIconName}>`
- **href** `string`  
  _Examples:_
    `<lightning-menu-item href='https://www.google.com'>`
    `<lightning-menu-item href={url}>`
- **target** `string`  
  _Examples:_
    `<lightning-menu-item target='_blank'>`
    `<lightning-menu-item target={target}>`
- **is-draft** `boolean`  
  _Examples:_
    `<lightning-menu-item is-draft>`
    `<lightning-menu-item is-draft={isDraft}>`
- **draft-alternative-text** `string`  
  _Examples:_
    `<lightning-menu-item draft-alternative-text='Unsaved changes'>`
    `<lightning-menu-item draft-alternative-text={draftText}>`

**Related Components:**
- **lightning-button-menu** (required)

**Docs:**
---
examples:
    - name: menuItems
      label: Button Menu with Styled Items
      description: Button menu items can display icons to the left or right of the item label, or both.
    - name: iteration
      label: Button Menus Using for:each Iteration for Menu Items
      description: Button menu items can be created from a data source using iteration.
---

A `lightning-menu-item` is a menu item within the `lightning-button-menu`
dropdown component. It can hold state such as checked or unchecked, and can
contain icons.

Use the `class` attribute to customize the styling.

This component inherits styling from
[menus](https://www.lightningdesignsystem.com/components/menus/) in the
Lightning Design System.

...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class ButtonMenuIteration extends LightningElement {
    // basic data source with minimal content
    myMenuItems = [
        {
            id: 'item-01',
            label: 'Alpha',
            value: 'alpha',
        },
        {
            id: 'item-02',
            label: 'Beta',
            value: 'beta',
        },
        {
            id: 'item-03',
            label: 'Gamma',
            value: 'gamma',
        },
        {
            id: 'item-04',
            label: 'Delta',
            value: 'delta',
        },
        {
            id: 'item-05',
            label: 'Epsilon',
            value: 'epsilon',
        },
    ];

    // more complex data source with additional content
    myComplexMenuItems = [
        {
            id: 'item-01',
            label: 'Alpha',
            value: 'alpha',
            disabled: false,
            prefixIconName: 'utility:bookmark',
            iconName: 'utility:animal_and_nature',
        },
        {
            id: 'item-02',
            label: 'Beta',
            value: 'beta',
            disabled: true,
            iconName: 'utility:company',
        },
        {
            id: 'item-03',
            label: 'Gamma',
            value: 'gamma',
            prefixIconName: 'utility:date_input',
        },
        {
            id: 'item-04',
            label: 'Delta',
            value: 'delta',
            checked: true,
        },
        {
            id: 'item-05',
            label: 'Epsilon',
            value: 'epsilon',
            iconName: 'utility:knowledge_base',
        },
    ];
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small">
            Button menu with items added from a simple data source during initialization.
        </h2>
        <p class="slds-text-heading_x-small slds-m-bottom_medium">
            The <code>key</code> attribute on <code>lightning-menu-item</code> is required for iterations.
        </p>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" variant="border-filled" menu-alignment="auto">
                <template for:each={myMenuItems} for:item="menuItem">
                    <lightning-menu-item
                        key={menuItem.id}
                        value={menuItem.value}
                        label={menuItem.label}>
                    </lightning-menu-item>
                </template>
            </lightning-button-menu>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small">
            Button menu with items added from a more complex data source during initialization.
        </h2>
        <p class="slds-text-heading_x-small slds-m-bottom_medium">
            Data source includes <code>icon-name</code>, <code>prefix-icon-name</code>, <code>disabled</code>
            and <code>checked</code> values.
        </p>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" variant="border-filled" menu-alignment="auto">
                <template for:each={myComplexMenuItems} for:item="menuItem">
                    <lightning-menu-item
                        key={menuItem.id}
                        value={menuItem.value}
                        label={menuItem.label}
                        disabled={menuItem.disabled}
                        icon-name={menuItem.iconName}
                        prefix-icon-name={menuItem.prefixIconName}
                        checked={menuItem.checked}>
                    </lightning-menu-item>
                </template>
            </lightning-button-menu>
        </div>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class ButtonMenuMenuItems extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with some <code>lightning-menu-item</code> components disabled.
        </h2>

        <!-- Disabled -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" menu-alignment="auto">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two" disabled></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three" disabled></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with <code>lightning-menu-item</code> components that use the <code>icon-name</code> attribute.
        </h2>

        <!-- With icon-name -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" menu-alignment="auto">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One" icon-name="utility:description"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two" icon-name="utility:date_input"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three" icon-name="utility:custom_apps"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four" icon-name="utility:metrics"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with <code>lightning-menu-item</code> components that use the <code>prefix-icon-name</code> attribute.
        </h2>

        <!-- With icon-name -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" menu-alignment="auto">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One" prefix-icon-name="utility:bookmark"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two" prefix-icon-name="utility:send"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three" prefix-icon-name="utility:connected_apps"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four" prefix-icon-name="utility:italic"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with <code>lightning-menu-item</code> components that use <code>prefix-icon-name</code> and <code>icon-name</code> attributes.
        </h2>

        <!-- With icon-name -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" menu-alignment="auto">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One" prefix-icon-name="utility:bookmark" icon-name="utility:description"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two" prefix-icon-name="utility:send" icon-name="utility:date_input"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three" prefix-icon-name="utility:connected_apps" icon-name="utility:custom_apps"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four" prefix-icon-name="utility:italic" icon-name="utility:metrics"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>
</template>

```

---
