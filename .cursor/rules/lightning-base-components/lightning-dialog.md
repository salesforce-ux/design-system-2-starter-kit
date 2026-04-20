# lightning-dialog

**What is it?**  
This component is a modal dialog that displays content in a layer above the application, maintaining user focus until closed, and can include a header, footer, and body content, with the ability to control its size and style.

**Where would you use it?**
- Imagine you're shopping online and you've added a few items to your cart. When you try to leave the page, a <lightning-dialog> pops up asking if you're sure you want to leave the page without completing your purchase. This dialog box would have a header saying 'Confirmation', a message asking if you're sure you want to leave, and two buttons at the bottom: one to cancel and stay on the page, and one to confirm and leave the page.
- Consider a scenario where you're filling out a form on a website. You've entered a lot of information, but you haven't saved it yet. If you try to navigate away from the page, a <lightning-dialog> could appear, warning you that you have unsaved changes. The dialog box would have a header saying 'Unsaved Changes', a message warning you about the unsaved changes, and two buttons: one to cancel and return to the form, and one to continue and lose the unsaved changes.
- Imagine you're using a web application and you've performed an action that needs confirmation. A <lightning-dialog> could be used to ask for this confirmation. The dialog box would have a header saying 'Confirmation Required', a message detailing the action you're about to perform, and two buttons: one to cancel the action, and one to confirm and proceed with the action.

**How do you use it?**
- **header** `string`  
  _Examples:_
    `<lightning-dialog header='Confirmation'>`
- **size** `string`  
  _Examples:_
    `<lightning-dialog size='small'>`
    `<lightning-dialog size='medium'>`
    `<lightning-dialog size='large'>`
- **oncancel** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-dialog oncancel={handleCancel}>`
- **onclose** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-dialog onclose={handleClose}>`

**Related Components:**
- **lightning-modal** (required)
- **lightning-button** (optional)

**Docs:**
# Dialog (Deprecated)

## Important:
* **For any new modal work, starting in release 236, please use `lightning-modal`**
* **We do not recommend or support the use of `lightning-dialog` in one.app, mobile or any other case where the stacking context can't be controlled**
* **The `lightning-dialog` is bound by the stacking context, meaning that if any sibling of a root parent of the modal has a higher z-index than the modal dialog, it will show on top of the modal created with the `lightning-dialog` component.**
* **The `lightning-dialog` is not Aura (one.app) panel manager aware and as such will not open scoped modals nor work correctly when opened from an aura (panel manager based) dialog.**

A `lightning-dialog` component creates a modal dialog, which displays in a layer above the app
and keeps focus until you close the dialog.

Use the `header` attribute to specify text for a header at the top of the dialog. If you don't
specify a value for `header`, the dialog's content is displayed beginning at the top, without a header area.

Specify content for the bottom of the dialog in a `footer` slot. Typically the footer would contain buttons with actions. If you omit the `footer` slot, the dialog doesn't display a footer area and the dialog content expands to the bottom.

The dialog height changes according to the amount of content within it. The width is calculated as a percentage of the viewport. You can use the `size` attribute to specify `small`, `medium`, or `large` to change the width calculation. The default size is `medium`, which uses less than half of the viewport width.

The body of the dialog can contain other components or HTML.

...

**Examples:**
**Example 1:**

```js
import { LightningElement, track } from 'lwc';

export default class ModalDialogExample extends LightningElement {
    @track enteredName = '';

    openCreateContactDialog() {
        this.dialog.showModal();
    }

    handleCancel() {
        this.dialog.close();
    }

    handleSave() {
        const name = this.template.querySelector('lightning-input-name');
        this.enteredName = `${name.firstName} ${name.lastName}`;

        this.dialog.close();
    }

    get dialog() {
        return this.template.querySelector('lightning-dialog');
    }
}

```

```html
<template>
    <lightning-dialog header="Create Contact" onclose={handleDialogClose} oncancel={handleDialogCancel}>
        <lightning-input-name label="Contact Name"></lightning-input-name>
        <div slot="footer">
            <button class="slds-button slds-button_brand" onclick={handleCancel}>Cancel</button>
            <button class="slds-button slds-button_brand" onclick={handleSave}>Save</button>
        </div>
    </lightning-dialog>

    <template if:true={enteredName}>
        Entered Name: {enteredName}
    </template>

    <div>
        <lightning-button-icon
            label="Create Contact"
            icon-name="utility:add"
            onclick={openCreateContactDialog}>
        </lightning-button-icon>
    </div>

</template>

```

---
