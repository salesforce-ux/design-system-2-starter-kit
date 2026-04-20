# lightning-alert

**What is it?**  
This component allows the creation of an alert modal within a system, providing a consistent user experience by communicating system-wide states and not halting execution on the page.

**Where would you use it?**
- Imagine you're using an online banking system and you've just completed a transfer. The <lightning-alert> component could be used to display a message confirming that the transfer was successful, providing reassurance that the action has been completed correctly.
- Consider a scenario where you're using a web-based email client. If you attempt to send an email without a subject line, the <lightning-alert> component could be used to display a warning message, reminding you to add a subject before sending.
- Suppose you're using an online shopping platform and you've just added an item to your cart. The <lightning-alert> component could be used to display a message confirming that the item has been added to your cart, providing immediate feedback on your action.
- Imagine you're using a web-based project management tool. If you attempt to delete a project, the <lightning-alert> component could be used to display a confirmation message, ensuring that you really want to delete the project before it's removed.
- Consider a scenario where you're using an online form to apply for a job. If you miss out some required information, the <lightning-alert> component could be used to display an error message, indicating which fields need to be filled in before you can submit the form.
- Suppose you're using a web-based learning platform and you've just completed a quiz. The <lightning-alert> component could be used to display a message showing your score, providing immediate feedback on your performance.

**How do you use it?**
- **message** `string`  
  _Examples:_
    `<lightning-alert message='this is the alert message'>`
    `<lightning-alert message={myAlertMessage}>`
- **label** `string`  
  _Examples:_
    `<lightning-alert label='Error!'>`
    `<lightning-alert label={myAlertLabel}>`
- **variant** `'header' | 'headerless'`  
  _Examples:_
    `<lightning-alert variant='header'>`
    `<lightning-alert variant='headerless'>`
    `<lightning-alert variant={myAlertVariant}>`
- **theme** `'default' | 'shade' | 'inverse' | 'alt-inverse' | 'success' | 'info' | 'warning' | 'error' | 'offline'`  
  _Examples:_
    `<lightning-alert theme='error'>`
    `<lightning-alert theme='success'>`
    `<lightning-alert theme={myAlertTheme}>`

**Related Components:**
- **lightning-button** (optional)

**Docs:**
The `lightning/alert` module lets you create an alert modal within your component. Use `LightningAlert` on your components to communicate a state that affects the entire system, not just a feature or page.

Use `LightningAlert.open()` instead of the native `window.alert()` for a more consistent user experience. They have similar functions, but `LightningAlert.open()` works in cross-origin iframes, where the `.alert()` method is no longer supported in Chrome and Safari. Unlike `window.alert()`, `LightningAlert.open()` doesn't halt execution on the page, it returns a Promise. Use `async`/`await` or `.then()` for any code you want to execute after the alert has closed.

Import `LightningAlert` from the `lightning/alert` module in the component that will launch the alert modal, and call `LightningAlert.open()` with your desired attributes.

This example creates an alert modal with an error message and **OK** button. The `.open()` function returns a promise that resolves when you click **OK**.

```html
<!-- c/myApp.html -->
<template>
    <lightning-button onclick={handleAlertClick} label="Open Alert Modal">
    </lightning-button>
</template>
```

```javascript
import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';

...

**Examples:**


---
