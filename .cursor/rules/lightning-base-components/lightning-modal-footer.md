# lightning-modal-footer

**What is it?**  
This component is used to create an optional footer at the bottom of a modal dialog, providing an organized space for interactive elements like buttons, and offering customization options for styling and accessibility.

**Where would you use it?**
- In an online shopping website, when a user adds an item to their cart, a pop-up window might appear confirming the action. At the bottom of this window, the <lightning-modal-footer> component could be used to display two buttons: one to continue shopping and another to proceed to checkout.
- On a job application website, after filling out an application form, a confirmation window might pop up. The <lightning-modal-footer> component could be used at the bottom of this window to display a 'Submit' button to finalize the application and a 'Cancel' button to discard the application.
- On a social media website, when a user attempts to delete a post, a confirmation window might appear. The <lightning-modal-footer> component could be used at the bottom of this window to display a 'Delete' button to confirm the action and a 'Cancel' button to abort the action.
- In an email client, when composing a new email, a window might pop up for the user to write their message. The <lightning-modal-footer> component could be used at the bottom of this window to display a 'Send' button to send the email and a 'Save Draft' button to save the email for later.
- On a movie booking website, after selecting a movie and showtime, a window might pop up for the user to select their seats. The <lightning-modal-footer> component could be used at the bottom of this window to display a 'Confirm Selection' button to finalize the seat selection and a 'Cancel' button to start over.

**How do you use it?**


**Related Components:**
- **lightning-modal-body** (required)
- **lightning-modal-header** (optional)
- **lightning-button** (optional)

**Docs:**
The `lightning-modal-footer` component creates a footer at the bottom of a modal dialog.
Use of a footer is optional.

The modal components render in the order they appear in the template.
Place the `lightning-modal-footer` component after the `lightning-modal-body` component.

This sample code shows the expected order of the modal components. The modal content is
created in a separate component extended from `LightningModal`. See
[Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/platform/lwc/guide/)

This sample's `lightning-modal-footer` includes two `lightning-button` components,
but you can also use `<button>` elements.

```html
<!-- my/modalDialog.html -->
<template>
    <lightning-modal-header label="My Modal">
    </lightning-modal-header>
    <lightning-modal-body>
        <!-- modal content specified in LightningModal component -->
...

**Examples:**


---
