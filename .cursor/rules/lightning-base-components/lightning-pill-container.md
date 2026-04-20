# lightning-pill-container

**What is it?**  
This component is a user interface element that displays a list of user selections, represented as "pills", in a container that resembles an input field, providing an interactive experience for users to manage their selections.

**Where would you use it?**
- Imagine you're using a website to book a vacation and you're selecting multiple destinations to visit. As you select each destination, it appears as a small 'pill' in a container at the top of the page. This is the <lightning-pill-container> component in action, allowing you to easily see and manage your selections.
- Consider a scenario where you're using a project management tool. You're assigning team members to a task, and each time you assign a member, their name appears in a <lightning-pill-container> at the top of the task. This allows you to easily see who's assigned to the task and remove members if needed.
- Imagine you're using an online shopping platform and you're filtering products by multiple categories. Each time you select a category, it appears as a 'pill' in a container at the top of the page. This is the <lightning-pill-container> component, allowing you to easily manage your selected filters.

**How do you use it?**
- **items** `{ label: string, name?: string, type?: string, href?: string, src?: string, fallbackIconName?: string, variant?: string, alternativeText?: string, iconName?: string }[]`  
  _Examples:_
    `<lightning-pill-container items={items}>`
- **onitemremove** `(ev: CustomEvent & { detail: { item: string, index: number } }) => void`  
  _Examples:_
    `<lightning-pill-container items={items} onitemremove={handleItemRemove}>`
- **is-collapsible** `boolean`  
  _Examples:_
    `<lightning-pill-container items={items} is-collapsible>`
    `<lightning-pill-container items={items} is-collapsible={isCollapsible}>`
- **is-expanded** `boolean`  
  _Examples:_
    `<lightning-pill-container items={items} is-expanded>`
    `<lightning-pill-container items={items} is-expanded={isExpanded}>`
- **single-line** `boolean`  
  _Examples:_
    `<lightning-pill-container items={items} single-line>`
    `<lightning-pill-container items={items} single-line={singleLine}>`

**Related Components:**
- **lightning-pill** (required)
- **lightning-button** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Pill Container
      description: A pill container showing pills that represent users.
---

A `lightning-pill-container` component represents a list of pills in a container
that resembles an input field. Use `lightning-pill-container` to display a user's
selections when filtering a list, such as from a multi-select picklist.

`lightning-pill-container` displays a pill using the `lightning-pill` component, which can display an icon or avatar next to the text label.

To specify the pills, set the `items` attribute to an array of values in your component's JavaScript.

By default, all pills in the container are displayed and wrap to additional lines if they can't fit on one line.
For information about changing the behavior, see **Managing Pill Layout in the Container**.

This example creates three pills: a text-only pill, a pill with a link and an avatar, and
a pill with an icon.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class Basic extends LightningElement {
    items = [
        {
            type: 'avatar',
            href: 'https://www.salesforce.com',
            label: 'Avatar Pill 1',
            src: 'https://www.lightningdesignsystem.com/assets/images/avatar1.jpg',
            fallbackIconName: 'standard:user',
            variant: 'circle',
            alternativeText: 'User avatar',
            isLink: true,
        },
        {
            type: 'avatar',
            href: '',
            label: 'Avatar Pill 2',
            src: 'https://www.lightningdesignsystem.com/assets/images/avatar2.jpg',
            fallbackIconName: 'standard:user',
            variant: 'circle',
            alternativeText: 'User avatar',
        },
        {
            type: 'avatar',
            href: 'https://www.google.com',
            label: 'Avatar Pill 3',
            src: 'https://www.lightningdesignsystem.com/assets/images/avatar3.jpg',
            fallbackIconName: 'standard:user',
            variant: 'circle',
            alternativeText: 'User avatar',
            isLink: true,
        },
    ];
}

```

```html
<template>
    <lightning-pill-container items={items} ></lightning-pill-container>
</template>

```

---
