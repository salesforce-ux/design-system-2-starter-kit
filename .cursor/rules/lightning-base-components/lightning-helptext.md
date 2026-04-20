# lightning-helptext

**What is it?**  
This component displays an icon with a popover containing brief text to describe an element on the screen, providing field-level help and enhancing user experience by automatically adjusting its position according to the viewport.

**Where would you use it?**
- In a web application where users need to fill out a form, the <lightning-helptext> component can be used to provide additional information about each field. For example, next to an email field, a small icon could be displayed. When the user hovers over this icon, a tooltip would appear explaining that the email address will be used for login purposes.
- In a web application with a complex user interface, the <lightning-helptext> component can be used to provide explanations for various elements on the screen. For instance, next to a button that triggers a specific action, a small icon could be displayed. When the user hovers over this icon, a tooltip would appear explaining what will happen when the button is clicked.
- In a web application where users need to interact with various icons, the <lightning-helptext> component can be used to provide descriptions for each icon. For example, next to a trash bin icon, a small icon could be displayed. When the user hovers over this icon, a tooltip would appear explaining that clicking the trash bin icon will delete the item.

**How do you use it?**
- **content** `string`  
  _Examples:_
    `<lightning-helptext content='Your email address will be your login name'>`
    `<lightning-helptext content={tooltipContent}>`
- **icon-name** `string`  
  _Examples:_
    `<lightning-helptext icon-name='utility:salesforce1'>`
    `<lightning-helptext icon-name={iconName}>`
- **icon-variant** `string`  
  _Examples:_
    `<lightning-helptext icon-variant='error'>`
    `<lightning-helptext icon-variant='inverse'>`
    `<lightning-helptext icon-variant='warning'>`
- **class** `string`  
  _Examples:_
    `<lightning-helptext class='slds-m-left_xx-small'>`
    `<lightning-helptext class={customClass}>`
- **alternative-text** `string`  
  _Examples:_
    `<lightning-helptext alternative-text='Show help text'>`
    `<lightning-helptext alternative-text={altText}>`

**Related Components:**
- **lightning-button-icon** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Helptext
      description: Basic default helptext example and an alternative icon example.
---

A `lightning-helptext` component displays an icon with a popover containing a
small amount of text describing an element on screen. The popover is displayed
when you hover or focus on the icon that's attached to it. On iOS devices, the
helptext popover opens when you tap on the icon and closes with a second tap
on the popover or the icon.

This component is similar to a tooltip and is useful to display field-level help text, for example. HTML markup is not supported in the tooltip content.

This example creates an icon with a tooltip.

```html
<template>
    <lightning-helptext content="Your email address will be your login name">
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class HelptextBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Helptext example using a default icon. Mouse over or focus on the icon to view the helptext content.
        </h2>

        <p class="slds-m-bottom_medium">The tooltip displays on the lower left of the icon or above the icon if space is available. It automatically adjusts its position according to the viewport.</p>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            Subscribe
            <lightning-helptext content="You'll receive weekly updates"></lightning-helptext>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Helptext example with an alternative icon.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            Short Text
            <lightning-helptext icon-name="utility:salesforce1" content="Full text explanation of feature"></lightning-helptext>
        </div>
    </div>
</template>

```

---
