# lightning-modal-body

**What is it?**  
This component is used to render the content of a modal, providing an interactive user experience with automatic scrolling and customizable styling options.

**Where would you use it?**
- Imagine you're shopping online and you've added a few items to your cart. When you're ready to check out, a pop-up window appears with a summary of your order. This pop-up window is a modal, and the summary of your order is displayed in the <lightning-modal-body> component.
- When you're using a web application and you need to fill out a form, sometimes the form appears in a pop-up window or modal. The form that you fill out is contained within the <lightning-modal-body> component.
- Suppose you're using a web application and you click on a button to view more information about a particular item. The detailed information about the item appears in a pop-up window or modal. The detailed information is displayed in the <lightning-modal-body> component.
- Imagine you're using a web application and you click on a button to delete an item. A pop-up window appears asking you to confirm your action. The confirmation message is displayed in the <lightning-modal-body> component.
- When you're using a web application and you click on a button to edit an item, a form appears in a pop-up window or modal. The form that you fill out to edit the item is contained within the <lightning-modal-body> component.
- Suppose you're using a web application and you click on a button to view a video. The video appears in a pop-up window or modal. The video is displayed in the <lightning-modal-body> component.

**How do you use it?**


**Related Components:**
- **lightning-modal-header** (optional)
- **lightning-modal-footer** (optional)

**Docs:**
The `lightning-modal-body` component renders the content of a modal.

The modal components render in the order they appear in the template. Place the `lightning-modal-body`
component after `lightning-modal-header` and before `lightning-modal-footer` components, if you're providing them.

This sample code shows the expected order of the modal components. The modal content is
created in a separate component extended from `LightningModal`. See
[Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/platform/lwc/guide/)

```html
<!-- my/modalDialog.html -->
<template>
    <lightning-modal-header label="My Modal Heading">
        Tagline content with <a href="https://salesforce.com">Salesforce.com link</a>
    </lightning-modal-header>
    <lightning-modal-body>
        <!-- modal content specified in LightningModal component -->
        { content }
        <!-- alternatively, add content here directly -->
    </lightning-modal-body>
...

**Examples:**


---
