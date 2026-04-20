# lightning-vertical-navigation-item-badge

**What is it?**  
This component is a navigation item that enhances user experience by displaying a numerical badge to the right of the item label, indicating additional information or notifications related to that item.

**Where would you use it?**
- In an email application, the <lightning-vertical-navigation-item-badge> component could be used in the sidebar to show the number of unread emails in different folders. For example, next to the 'Inbox' label, a badge could display the number of unread emails, providing a quick visual cue for the user to know if they have any new messages without having to click on the folder.
- In a project management tool, the <lightning-vertical-navigation-item-badge> component could be used to display the number of tasks assigned to a user that are due soon. This would be displayed next to the 'Tasks' label in the navigation menu, allowing the user to quickly see how many tasks they need to complete in the near future.
- In an e-commerce website, the <lightning-vertical-navigation-item-badge> component could be used in the user's account section to show the number of items in their shopping cart. This would be displayed next to the 'Cart' label, providing a quick and easy way for the user to see how many items they have added to their cart.
- In a social media application, the <lightning-vertical-navigation-item-badge> component could be used to display the number of new notifications a user has. This would be displayed next to the 'Notifications' label in the navigation menu, allowing the user to see at a glance if they have any new notifications to check.
- In a customer relationship management (CRM) system, the <lightning-vertical-navigation-item-badge> component could be used to display the number of new leads assigned to a salesperson. This would be displayed next to the 'Leads' label in the navigation menu, providing a quick way for the salesperson to see how many new leads they have to follow up on.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-vertical-navigation-item-badge label='Recent'>`
    `<lightning-vertical-navigation-item-badge label={itemLabel}>`
- **name** `string`  
  _Examples:_
    `<lightning-vertical-navigation-item-badge name='recent'>`
    `<lightning-vertical-navigation-item-badge name={itemName}>`
- **badge-count** `number`  
  _Examples:_
    `<lightning-vertical-navigation-item-badge badge-count='3'>`
    `<lightning-vertical-navigation-item-badge badge-count={badgeCount}>`

**Related Components:**
- **lightning-vertical-navigation** (required)
- **lightning-vertical-navigation-section** (required)
- **lightning-vertical-navigation-item** (optional)

**Docs:**
---
examples:
    - name: badges
      label: Vertical Navigation with Badges
      description: Navigation items can include a badge on the right of the label.
---

A `lightning-vertical-navigation-item-badge` component is a navigation item that displays a numerical badge to the right of the item label.

Here's an example that creates a navigation menu with an item containing a badge.

```html
<template>
    <lightning-vertical-navigation selected-item="recent">
        <lightning-vertical-navigation-section label="Reports">
            <lightning-vertical-navigation-item-badge
                label="Recent"
                name="recent"
                badge-count="3"
            >
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleVerticalNavigationItemBadges extends LightningElement {}

```

```html
<template>
    <div class="slds-m-vertical_medium">
        <h1 class="slds-text-heading_small">Items With Badges</h1>
        <p class="slds-text-body_regular">A Vertical Navigation with item badges. Badges contain small amounts of information, such as the number of unread messages.</p>
    </div>
    
    <div style="width: 320px;">
        <lightning-vertical-navigation selected-item="recent">
            <lightning-vertical-navigation-section label="Reports">
                <lightning-vertical-navigation-item-badge label="Recent" name="recent" badge-count="3"></lightning-vertical-navigation-item-badge>
                <lightning-vertical-navigation-item label="Created by Me" name="usercreated"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Private Reports" name="private"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Public Reports" name="public"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="All Reports" name="all"></lightning-vertical-navigation-item>
            </lightning-vertical-navigation-section>
        </lightning-vertical-navigation>
    </div>
</template>

```

---
