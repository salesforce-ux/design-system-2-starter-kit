# lightning-prompt

**What is it?**  
This component allows the creation of a customizable prompt modal within your application, providing a consistent user experience by asking for user input without halting execution on the page.

**Where would you use it?**
- Imagine you're using an online shopping website and you've added a few items to your cart. When you click on the 'Checkout' button, a <lightning-prompt> pops up asking you to confirm your shipping address before proceeding with the payment.
- On a social media platform, you decide to delete a post you made earlier. When you click on the 'Delete' button, a <lightning-prompt> appears asking you to confirm if you really want to delete the post, giving you a chance to reconsider your decision.
- You're using an online form to apply for a job. After filling out all the details, you click on the 'Submit' button. A <lightning-prompt> appears asking you to review all your details one last time before submitting the application.
- On a banking website, you're about to make a large transaction. When you click on the 'Transfer' button, a <lightning-prompt> pops up asking you to confirm the transaction details to ensure there are no mistakes.
- You're using a project management tool and you decide to delete a project that's no longer relevant. When you click on the 'Delete' button, a <lightning-prompt> appears asking you to confirm the deletion, as this action cannot be undone.

**How do you use it?**
- **message** `string`  
  _Examples:_
    `<lightning-prompt message='this is the prompt message'>`
    `<lightning-prompt message={promptMessage}>`
- **defaultValue** `string`  
  _Examples:_
    `<lightning-prompt defaultValue='initial input value'>`
    `<lightning-prompt defaultValue={defaultInput}>`
- **label** `string`  
  _Examples:_
    `<lightning-prompt label='Please Respond'>`
    `<lightning-prompt label={headerText}>`
- **variant** `'header' | 'headerless'`  
  _Examples:_
    `<lightning-prompt variant='header'>`
    `<lightning-prompt variant='headerless'>`
    `<lightning-prompt variant={variantType}>`
- **theme** `'default' | 'shade' | 'inverse' | 'alt-inverse' | 'success' | 'info' | 'warning' | 'error' | 'offline'`  
  _Examples:_
    `<lightning-prompt theme='default'>`
    `<lightning-prompt theme='success'>`
    `<lightning-prompt theme={themeType}>`

**Related Components:**
- **lightning-button** (optional)

**Docs:**
The `lightning/prompt` module lets you create a prompt modal within your component. Use `LightningPrompt` on your components to ask the user to provide information before they continue.

Use `LightningPrompt.open()` instead of the native `window.prompt()` for a more consistent user experience. They have similar functions, but `LightningPrompt.open()` works in cross-origin iframes, where the `.prompt()` method is no longer supported in Chrome and Safari. Unlike `window.prompt()`, `LightningPrompt.open()` doesn't halt execution on the page, it returns a Promise. Use `async`/`await` or `.then()` for any code you want to execute after the prompt has closed.

Import `LightningPrompt` from the `lightning/prompt` module in the component that will launch the prompt modal, and call `LightningPrompt.open()` with your desired attributes.

This example creates a prompt modal with a header, message, and two buttons. If you enter text and click **OK** in the prompt, the `.open()` function returns a promise that resolves to the input value. If you click **Cancel**, the function returns a promise that resolves to `null`.

```html
<!-- c/myApp.html -->
<template>
    <lightning-button onclick={handlePromptClick} label="Open Prompt Modal">
    </lightning-button>
</template>
```

```javascript
import { LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt';

...

**Examples:**


---
