# lightning-confirm

**What is it?**  
This component allows the creation of a confirm modal within your application, providing a consistent user experience by asking for user confirmation before proceeding, with the modal's appearance and behavior customizable through various attributes.

**Where would you use it?**
- Imagine you're using an online shopping platform and you've added a few items to your cart. When you click on the 'Checkout' button, a <lightning-confirm> modal pops up asking you to confirm your purchase. This is to ensure that you've reviewed your cart and are ready to proceed with the purchase.
- Consider a scenario where you're using a project management tool. You've just completed a task and you click on the 'Mark as Complete' button. A <lightning-confirm> modal appears asking you to confirm if you've really completed the task. This is to prevent accidental clicks and ensure that the task is indeed complete.
- Suppose you're using a social media platform and you decide to delete a post. When you click on the 'Delete' button, a <lightning-confirm> modal pops up asking you to confirm the deletion. This is to prevent accidental deletions and give you a chance to change your mind.
- Imagine you're using an email client and you've composed an email. When you click on the 'Send' button, a <lightning-confirm> modal appears asking you to confirm if you want to send the email. This is to ensure that you've reviewed the email and are ready to send it.
- Consider a scenario where you're using a banking app and you want to transfer money. When you click on the 'Transfer' button, a <lightning-confirm> modal pops up asking you to confirm the transfer. This is to ensure that you've entered the correct details and are ready to proceed with the transfer.
- Suppose you're using a content management system and you want to publish a post. When you click on the 'Publish' button, a <lightning-confirm> modal appears asking you to confirm the publication. This is to ensure that you've reviewed the post and are ready to publish it.

**How do you use it?**
- **message** `string`  
  _Examples:_
    `<lightning-confirm message='this is the prompt message'>`
    `<lightning-confirm message={myMessage}>`
- **label** `string`  
  _Examples:_
    `<lightning-confirm label='this is the aria-label value'>`
    `<lightning-confirm label={myLabel}>`
- **variant** `'header' | 'headerless'`  
  _Examples:_
    `<lightning-confirm variant='header'>`
    `<lightning-confirm variant='headerless'>`
    `<lightning-confirm variant={myVariant}>`
- **theme** `'default' | 'shade' | 'inverse' | 'alt-inverse' | 'success' | 'info' | 'warning' | 'error' | 'offline'`  
  _Examples:_
    `<lightning-confirm theme='default'>`
    `<lightning-confirm theme='success'>`
    `<lightning-confirm theme={myTheme}>`

**Related Components:**
- **lightning-button** (optional)

**Docs:**
The `lightning/confirm` module lets you create a confirm modal within your component. Use `LightningConfirm` on your component to ask the user to respond before they continue.

Use `LightningConfirm.open()` instead of the native `window.confirm()` for a more consistent user experience. They have similar functions, but `LightningConfirm.open()` works in cross-origin iframes, where the `.confirm()` method is no longer supported in Chrome and Safari. Unlike `window.confirm()`, `LightningConfirm.open()` doesn't halt execution on the page, it returns a Promise. Use `async`/`await` or `.then()` for any code you want to execute after the confirm has closed.

Import `LightningConfirm` from the `lightning/confirm` module in the component that will launch the confirm modal, and call `LightningConfirm.open()` with your desired attributes.

This example creates a headerless confirm modal with two buttons, **OK** and **Cancel**. The `.open()` function returns a promise that resolves to true when you click **OK** and false when you  click **Cancel**.

```html
<!-- c/myApp.html -->
<template>
    <lightning-button onclick={handleConfirmClick} label="Open Confirm Modal">
    </lightning-button>
</template>
```

```javascript
import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm';

...

**Examples:**


---
