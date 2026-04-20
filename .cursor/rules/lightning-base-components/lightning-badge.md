# lightning-badge

**What is it?**  
This component is a label that holds small amounts of information, such as unread notifications or text labels, and can be customized with text only or with an icon before or after the text, providing a clear and concise way to display brief information to the user.

**Where would you use it?**
- Imagine you're using a social media platform and you see a small, colorful label next to a user's name. This label, or <lightning-badge>, might say 'Verified' or 'Admin' to indicate the user's status on the platform. This is a simple, text-only badge that provides quick, easy-to-understand information about the user.
- Consider an email application where you see a small number next to the 'Inbox' label. This number, displayed on a <lightning-badge>, represents the number of unread emails in your inbox. The badge might also include a small envelope icon for added visual context.
- Think about a project management tool where each project has a status label. This label, or <lightning-badge>, might say 'In Progress', 'Completed', or 'On Hold'. The badge could also include a small icon representing the status, such as a checkmark for 'Completed' or a pause symbol for 'On Hold'.
- Imagine a music streaming service where each song has a small label indicating its genre. This label, or <lightning-badge>, might say 'Rock', 'Pop', or 'Classical'. The badge could also include a small icon representing the genre, such as a guitar for 'Rock' or a violin for 'Classical'.
- Consider a news website where each article has a small label indicating its category. This label, or <lightning-badge>, might say 'Politics', 'Sports', or 'Entertainment'. The badge might also include a small icon representing the category, such as a ball for 'Sports' or a film reel for 'Entertainment'.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-badge label='Account Name'>`
    `<lightning-badge label={myLabelValue}>`
- **icon-name** `string`  
  _Examples:_
    `<lightning-badge label='Account Name' icon-name='standard:account'>`
    `<lightning-badge label={myLabelValue} icon-name={myIconValue}>`
- **icon-position** `string`  
  _Examples:_
    `<lightning-badge label='Starred Accounts' icon-name='custom:custom11' icon-position='end'>`
    `<lightning-badge label={myLabelValue} icon-name={myIconValue} icon-position={myIconPositionValue}>`
- **class** `string`  
  _Examples:_
    `<lightning-badge label='Approved' class='slds-theme_success'>`
    `<lightning-badge label='Pending' class='pending-badge'>`
    `<lightning-badge label={myLabelValue} class={myClassValue}>`

**Related Components:**
- **lightning-pill** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Badge
      description: Basic badges with custom labels.
    - name: icon
      label: Badges with Icons
      description: Basic badges with icons.
---

A `lightning-badge` is a label that holds small amounts of information. A
badge can be used to display unread notifications, or to label a block of
text. Badges don't work for navigation because they can't include a hyperlink.

You can create two types of badges.

-   A text-only badge
-   A badge with an icon that's displayed before or after the text

Here is an example of a text-only badge.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class BadgeBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Badges with custom <code>label</code> attribute values.
        </h2>

        <!-- Badge: basic -->
        <lightning-badge label="Alpha"></lightning-badge>
        <lightning-badge label="Beta"></lightning-badge>
        <lightning-badge label="Gamma"></lightning-badge>
        <lightning-badge label="Inverse" class="slds-badge_inverse"></lightning-badge>
        <lightning-badge label="Lightest" class="slds-badge_lightest"></lightning-badge>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class BadgeWithIcon extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Badges with <code>icon</code>.
        </h2>

        <!-- Badge: basic -->
        <lightning-badge label="Alpha" icon-name="standard:event"></lightning-badge>
        <lightning-badge label="Beta" icon-name="standard:email" icon-position="end"></lightning-badge>
        <lightning-badge label="Gamma" icon-name="custom:custom11"></lightning-badge>
    </div>
</template>

```

---
