# lightning-modal-header

**What is it?**  
This component is used to display a header text in a panel at the top of a modal dialog, providing an optional tagline and custom styling, enhancing the user's experience with clear labeling and accessible design.

**Where would you use it?**
- Imagine you're shopping online and you've added a few items to your cart. When you're ready to check out, a pop-up window appears with a summary of your order. At the top of this window, there's a title that says 'Order Summary' and a smaller text underneath that says 'Please review your order before proceeding'. This is an example of where the <lightning-modal-header> component might be used.
- When you're using a project management tool, you might need to create a new project. When you click on 'New Project', a pop-up window appears where you can enter the details of the project. At the top of this window, there's a title that says 'Create New Project' and a smaller text underneath that says 'Enter the details of your project'. This is another scenario where the <lightning-modal-header> component might be used.
- Suppose you're using a fitness app and you want to log a new workout. When you click on 'Log Workout', a pop-up window appears where you can enter the details of your workout. At the top of this window, there's a title that says 'Log New Workout' and a smaller text underneath that says 'Enter the details of your workout'. This is a scenario where the <lightning-modal-header> component might be used.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-modal-header label='My Modal'>`
    `<lightning-modal-header label={modalLabel}>`
- **class** `string`  
  _Examples:_
    `<lightning-modal-header label='My Modal' class='my-modal-header'>`

**Related Components:**
- **lightning-modal-body** (required)

**Docs:**
The `lightning-modal-header` component displays header text in a panel at the top of a modal dialog.
Use of a header is optional, but when you provide a header you must specify the header text with the `label` attribute.

If you don't use the `lightning-modal-header` component, you must set a label
in the modal you create by extending `LightningModal`. A label is required for accessibility.

The modal components render in the order they appear in the template. Place the `lightning-modal-header`
component before the `lightning-modal-body` component in the template.

`lightning-modal-header` supports optional tagline text, which displays in smaller text below the heading. Enclose the
tagline text directly in the `lightning-modal-header` component, no HTML tag or attribute is needed. You can include links with `<a>`
tags, which are the only HTML elements permitted. If the header text is too long to fit on one line, it wraps in the modal header.

This sample code shows the expected order of the modal components. The modal content is
created in a separate component extended from `LightningModal`. See
[Lightning Web Components Developer Guide](https://developer.salesforce.com/docs/platform/lwc/guide/)

```html
<!-- my/modalDialog.html -->
<template>
...

**Examples:**


---
