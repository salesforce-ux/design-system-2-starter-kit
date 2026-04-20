# lightning-formatted-email

**What is it?**  
This component displays a read-only email address as a clickable hyperlink, which when clicked, opens the default mail application for the user's device.

**Where would you use it?**
- In a customer service portal, the <lightning-formatted-email> component could be used to display the email address of the customer service representative. This would allow users to easily contact the representative by simply clicking on the displayed email address, which would open their default email application.
- In a job application form, the <lightning-formatted-email> component could be used to display the email address of the hiring manager. Applicants could then click on the email address to send their resumes or any additional documents directly to the hiring manager.
- In a school's online portal, the <lightning-formatted-email> component could be used to display the email addresses of teachers. This would allow students or parents to easily contact the teachers by clicking on their email addresses.
- In an online store, the <lightning-formatted-email> component could be used to display the email address of the customer support team. This would allow customers to easily reach out for help or inquiries about their orders.
- In a company's internal portal, the <lightning-formatted-email> component could be used to display the email addresses of different departments. This would allow employees to easily contact the relevant department for any internal matters.
- In a conference's website, the <lightning-formatted-email> component could be used to display the email address of the event organizer. This would allow attendees to easily send their inquiries or concerns about the event.

**How do you use it?**
- **value** `string`  
  _Examples:_
    `<lightning-formatted-email value="hello@example.com">`
    `<lightning-formatted-email value="hello@example.com,email@example.com">`
    `<lightning-formatted-email value="hello@example.com?cc=email@example.com&subject=My%20subject &body=The%20email%20body">`
- **hide-icon** `boolean`  
  _Examples:_
    `<lightning-formatted-email value="hello@example.com" hide-icon>`
- **label** `string`  
  _Examples:_
    `<lightning-formatted-email value="hello@example.com,email@example.com" label="Send a group email">`
    `<lightning-formatted-email value="hello@example.com?cc=email@example.com&subject=My%20subject &body=The%20email%20body" label="Send us your feedback">`

**Related Components:**


**Docs:**
---
examples:
    - name: basic
      label: Formatted Email
      description: Displays an email address with an email icon. The email address is displayed as the default label.
    - name: onclick
      label: Formatted Email with Custom onclick Behavior
      description: Displays an email address with onclick handler to count clicks.
---

A `lightning-formatted-email` component displays a read-only representation of
an email address as a hyperlink using the `mailto:` URL scheme. Clicking on
the email address opens the default mail application for the desktop or mobile
device.

This example displays an email address with an email icon. The email address
is displayed as the default label.

```html
<template>
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class FormattedEmailBasic extends LightningElement {}

```

```html
<template>
        <div class="slds-m-vertical_medium">
                <h1 class="slds-text-heading_small">Formatted Email</h1>
                <p class="slds-text-body_regular">Default behavior displays an email address with an email icon. The email address is automatically linked to open the default mail app.</p>
            </div>
    <p><lightning-formatted-email value="email@example.com" ></lightning-formatted-email></p>

    <div class="slds-m-vertical_medium">
            <h1 class="slds-text-heading_small">Formatted Email Without an Icon</h1>
            <p class="slds-text-body_regular">Remove the icon using the <code>hide-icon</code> attribute.</p>
        </div>
    <p><lightning-formatted-email value="email@example.com" hide-icon></lightning-formatted-email></p>

    <div class="slds-m-vertical_medium">
            <h1 class="slds-text-heading_small">Formatted Email With a Label</h1>
            <p class="slds-text-body_regular">Display custom text instead of the email address with the <code>label</code> attribute.</p>
        </div>
    <p><lightning-formatted-email value="email@example.com" label="Email Us!" ></lightning-formatted-email></p>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class FormattedEmailBasic extends LightningElement {
    count = 0;

    handleClick(e) {
        e.preventDefault();
        this.count += 1;
    }
}

```

```html
<template>
    <p>Click the email link: <lightning-formatted-email value="email@example.com" onclick={handleClick}></lightning-formatted-email></p>
    <p aria-live="polite">Click count: {count}</p>
</template>

```

---
