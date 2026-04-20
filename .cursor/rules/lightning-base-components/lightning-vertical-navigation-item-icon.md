# lightning-vertical-navigation-item-icon

**What is it?**  
This component is a navigational item that enhances user experience by displaying an icon to the left of the item label, supporting icons from the Lightning Design System.

**Where would you use it?**
- In a business application, the <lightning-vertical-navigation-item-icon> component could be used to create a sidebar menu for navigating different sections of the application. For example, there could be a 'Reports' section with different types of reports like 'Recent', 'Created by Me', and 'All Reports'. Each of these report types would have an icon next to it, making it easier for users to quickly identify and navigate to the report they need.
- In a music streaming application, the <lightning-vertical-navigation-item-icon> component could be used to create a navigation menu for different categories of music. For example, there could be categories like 'Pop', 'Rock', 'Classical', etc. Each category would have an icon next to it, providing a visual cue to users about the type of music in that category.
- In an online shopping platform, the <lightning-vertical-navigation-item-icon> component could be used to create a navigation menu for different product categories. For example, there could be categories like 'Electronics', 'Fashion', 'Home & Kitchen', etc. Each category would have an icon next to it, helping users to easily identify and navigate to the category they are interested in.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-vertical-navigation-item-icon label='Recent'>`
    `<lightning-vertical-navigation-item-icon label={itemLabel}>`
- **name** `string`  
  _Examples:_
    `<lightning-vertical-navigation-item-icon name='recent'>`
    `<lightning-vertical-navigation-item-icon name={itemName}>`
- **icon-name** `string`  
  _Examples:_
    `<lightning-vertical-navigation-item-icon icon-name='utility:clock'>`
    `<lightning-vertical-navigation-item-icon icon-name={iconName}>`

**Related Components:**
- **lightning-vertical-navigation** (required)
- **lightning-vertical-navigation-section** (required)
- **lightning-vertical-navigation-item** (optional)

**Docs:**
---
examples:
    - name: icons
      label: Vertical Navigation with Icons
      description: Navigation items can include an icon on the left of the label.
---

A `lightning-vertical-navigation-item-icon` component is a navigation item that displays an icon to the left of the item label.

Here's an example that creates a navigation menu with icons on the navigation items.

```html
<template>
    <lightning-vertical-navigation>
        <lightning-vertical-navigation-section label="Reports">
            <lightning-vertical-navigation-item-icon
                label="Recent"
                name="recent"
                icon-name="utility:clock"
            >
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleVerticalNavigationItemIcons extends LightningElement {}

```

```html
<template>
    <div class="slds-m-vertical_medium">
        <h1 class="slds-text-heading_small">Items With Icons</h1>
        <p class="slds-text-body_regular">A Vertical navigation with item icons.</p>
    </div>
    
    <div style="width: 320px;">
        <lightning-vertical-navigation selected-item="reports_recent">
            <lightning-vertical-navigation-section label="Reports">
                <lightning-vertical-navigation-item-icon
                    label="Recent"
                    name="reports_recent"
                    icon-name="utility:clock">
                </lightning-vertical-navigation-item-icon>
                <lightning-vertical-navigation-item-icon
                    label="Created by Me"
                    name="reports_usercreated"
                    icon-name="utility:user">
                </lightning-vertical-navigation-item-icon>
                <lightning-vertical-navigation-item-icon
                    label="Private Reports"
                    name="reports_private"
                    icon-name="utility:lock">
                </lightning-vertical-navigation-item-icon>
                <lightning-vertical-navigation-item-icon
                    label="Public Reports"
                    name="reports_public"
                    icon-name="utility:groups">
                </lightning-vertical-navigation-item-icon>
                <lightning-vertical-navigation-item
                    label="All Reports"
                    name="reports_all">
                </lightning-vertical-navigation-item>
            </lightning-vertical-navigation-section>
            <lightning-vertical-navigation-section label="Folders">
                <lightning-vertical-navigation-item-icon
                    label="Created by Me"
                    name="folders_usercreated"
                    icon-name="utility:open_folder">
                </lightning-vertical-navigation-item-icon>
                <lightning-vertical-navigation-item-icon
                    label="Shared with Me"
                    name="folders_shared"
                    icon-name="utility:open_folder">
                </lightning-vertical-navigation-item-icon>
            </lightning-vertical-navigation-section>
        </lightning-vertical-navigation>
    </div>
</template>

```

---
