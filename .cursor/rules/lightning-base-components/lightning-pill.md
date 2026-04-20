# lightning-pill

**What is it?**  
This component is a user interface element that represents an item, such as an account name or case number, with optional features like a remove button, an icon or avatar, and error indication, providing an interactive experience for users to add or remove items on demand.

**Where would you use it?**
- Imagine you're using a website to search for a new home. As you enter your search criteria, each item you add (like '3 bedrooms', '2 bathrooms', 'garage') appears as a small, removable tag or 'pill' under the search bar. This is a <lightning-pill> in action, allowing you to easily see and manage your search terms.
- Consider a social media platform where you can tag your friends in a post. As you start typing a friend's name, it auto-completes and when you select it, the name appears as a small, removable tag or 'pill' in the tagging area. This is another use of the <lightning-pill> component, making it easy to add, view, and remove tags.
- Think about an email client where you can add recipients to your email. As you type in an email address and hit enter, the address appears as a small, removable tag or 'pill' in the 'To' field. This is a <lightning-pill> component, allowing you to easily add, view, and remove email recipients.
- Imagine you're using a project management tool where you can assign tasks to team members. As you assign a task, the team member's name appears as a small, removable tag or 'pill' next to the task. This is a <lightning-pill> component, making it easy to add, view, and remove task assignments.
- Consider a music streaming service where you can create a playlist. As you add songs to your playlist, each song appears as a small, removable tag or 'pill'. This is a <lightning-pill> component, allowing you to easily add, view, and remove songs from your playlist.
- Think about a shopping website where you can filter products by various attributes. As you select an attribute (like 'red', 'cotton', 'large'), it appears as a small, removable tag or 'pill' under the filter section. This is a <lightning-pill> component, making it easy to add, view, and remove filters.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-pill label='Pill Label'>`
    `<lightning-pill label={pillLabel}>`
- **href** `string`  
  _Examples:_
    `<lightning-pill href='https://www.example.com'>`
    `<lightning-pill href={url}>`
- **onremove** `(ev: CustomEvent & { detail: { name: string } }) => void`  
  _Examples:_
    `<lightning-pill onremove={handleRemove}>`
- **name** `string`  
  _Examples:_
    `<lightning-pill name='account'>`
    `<lightning-pill name={pillName}>`
- **onclick** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-pill onclick={handleClick}>`
- **has-error** `boolean`  
  _Examples:_
    `<lightning-pill has-error>`
    `<lightning-pill has-error={isError}>`
- **variant** `string`  
  _Examples:_
    `<lightning-pill variant='plain'>`
    `<lightning-pill variant={pillVariant}>`

**Related Components:**
- **lightning-avatar** (optional)
- **lightning-icon** (optional)
- **lightning-pill-container** (optional)
- **lightning-navigation** (optional)
- **lightning-button-icon** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Pills
      description: Pills can include links and use a handler for the remove button (X).
    - name: avatarPill
      label: Pill With an Avatar
      description: A pill includes an avatar by nesting a lightning-avatar component.
    - name: iconPill
      label: Pill With an Icon
      description: A pill includes an icon by nesting a lightning-icon component.
    - name: errorPill
      label: Pill With an Error
      description: A pill indicates an error condition by specifying the has-error attribute.
---

A `lightning-pill` component represents an item, such as an account name or
case number. By default, pills are rendered with a remove button. They’re useful for displaying read-only text that can be added and removed on demand, for example, a list of email addresses or a list of keywords.

This example creates a basic pill with a link.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class AvatarPill extends LightningElement {}

```

```html
<template>
    <lightning-pill label="Pill Label">
        <lightning-avatar src="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg" fallback-icon-name="standard:user" variant="circle"  alternative-text="User avatar"></lightning-avatar>
    </lightning-pill>
</template>


```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class Basic extends LightningElement {
    infoText;

    handleRemove() {
        this.infoText = 'Remove button was clicked';
    }
}

```

```html
<template>
    <div class="slds-m-vertical_medium">
        <p>Info: <span class="slds-text-heading_small">{infoText}</span></p>
    </div>
    <lightning-pill label="With link" href="https://www.example.com"></lightning-pill>
    <lightning-pill label="With remove handler" onremove={handleRemove}></lightning-pill>
</template>


```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class ErrorPill extends LightningElement {}

```

```html
<template>
        <lightning-pill label="Pill Label" has-error></lightning-pill>
</template>


```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class IconPill extends LightningElement {}

```

```html
<template>
    <lightning-pill label="Pill Label">
        <lightning-icon icon-name="standard:account" alternative-text="Account"></lightning-icon>
    </lightning-pill>
</template>


```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class PlainLinkPill extends LightningElement {}

```

```html
<template>
    <lightning-pill label="Pill Label" href="/path/to/some/where" variant="plainLink">
        <lightning-avatar src="/docs/component-library/app/images/examples/avatar2.jpg" fallback-icon-name="standard:user" variant="circle"  alternative-text="User avatar"></lightning-avatar>
    </lightning-pill>
</template>


```

---
