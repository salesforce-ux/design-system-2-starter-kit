# lightning-popup

**What is it?**  
This component is used to create interactive popup windows that open in response to user actions, providing a focused and immersive experience by trapping focus within the popup and allowing for custom content and alignment options.

**Where would you use it?**
- Imagine you're shopping online and you see a product you're interested in. You hover your mouse over the product image and a <lightning-popup> appears, providing more detailed information about the product, such as its specifications, price, and availability.
- You're filling out a form on a website and you're unsure about one of the fields. You click on a small question mark icon next to the field and a <lightning-popup> appears, providing additional guidance and information about what is expected in that field.
- You're on a social media website and you see a post from a friend that you want to share. You click on the 'share' button and a <lightning-popup> appears, giving you options to share the post on your own timeline, in a private message, or on another social media platform.
- You're on a news website reading an article. You come across a term you're not familiar with and click on it. A <lightning-popup> appears, providing a definition or explanation of the term.
- You're on a travel booking website looking at different flight options. You click on a flight to see more details and a <lightning-popup> appears, providing more information about the flight such as the airline, layover details, and baggage allowance.
- You're on a music streaming website and you want to add a song to one of your playlists. You click on the 'add to playlist' button and a <lightning-popup> appears, allowing you to select which playlist you want to add the song to.

**How do you use it?**
- **aria-describedby** `string`  
  _Examples:_
    `<lightning-popup aria-describedby='popup-body'>`
- **onautofocus** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-popup onautofocus={handleAutoFocus}>`
- **onreturnfocus** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-popup onreturnfocus={handleReturnFocus}>`
- **onalignmentupdate** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-popup onalignmentupdate={handleAlignmentUpdate}>`
- **onclickout** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-popup onclickout={handleClickOut}>`
- **onclose** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-popup onclose={handleClose}>`

**Related Components:**
- **lightning-button** (optional)
- **lightning-input** (optional)

**Docs:**
# Popup

Use `lightning-popup` to create popup windows in response to user interaction.
Typically, you open a popup when a user interacts with an element by
clicking it or hovering the mouse over it.

You can align a popup with a reference element, such as the element that opens it, or another element.

A popup must have at least one tabbable element, which is an element that users can focus by using
the Tab key. When a popup opens, focus automatically goes to the first tabbable element in the popup.
The popup traps focus, so you can't press Tab to move focus out of the popup. You can
return focus to the underlying window by closing the popup.

When a popup element has focus, you can close it by pressing
the Escape key or clicking outside the popup. If you close a popup
by pressing the Escape key, the `close` event fires. If you click outside the popup,
the `clickout` event fires first, and then the `close` event fires. This enables you
to perform an action when the user clicks outside the popup and prevent closing.
For example, you could prompt the user to save changes made in the popup.

...

**Examples:**
**Example 1:**

```js
import { LightningElement, track } from 'lwc';

export default class PopupExample extends LightningElement {
    @track enteredText = '';

    openPopup() {
        const referenceElement =
            this.template.querySelector('lightning-button');
        // Show the popup relative to the button, left-aligns the top of the popup with the bottom of the button
        this.popup.show(referenceElement, {
            reference: { horizontal: 'left', vertical: 'bottom' },
            popup: { horizontal: 'left', vertical: 'top' },
        });
    }

    handleCancel() {
        this.popup.close();
    }

    handleSave() {
        const name = this.template.querySelector('lightning-input');
        this.enteredText = name.value;

        this.popup.close();
    }

    get popup() {
        return this.template.querySelector('lightning-popup');
    }
}

```

```html
<template>
    <lightning-button label="Click to show a popup" onclick={openPopup}></lightning-button>

    <lightning-popup aria-describedby="popup-body">
        <div class="slds-popover">
            <div id="popup-body" class="slds-popover__body">
                <lightning-input label="An input"></lightning-input>
                <div class="slds-m-top_small">
                    <lightning-button variant="brand" label="Save" onclick={handleSave}></lightning-button>
                    <lightning-button variant="brand" label="Cancel" onclick={handleCancel}></lightning-button>
                </div>
            </div>
        </div>
    </lightning-popup>

</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class PopupExample extends LightningElement {
    openPopup() {
        const referenceElement =
            this.template.querySelector('lightning-button');
        this.popup.show(referenceElement, {
            reference: { horizontal: 'right', vertical: 'top' },
            popup: { horizontal: 'left', vertical: 'top' },
            // To accommodate the nubbin (arrow pointer)
            padding: 1,
            offset: 1.25,
        });
    }

    handleAlignmentUpdate(event) {
        this._alignment = event.target.alignment;
    }

    handleAutoFocus(event) {
        // Don't focus on the first tabbable element
        event.preventDefault();

        // Focus on the input instead
        this.template.querySelector('lightning-input').focus();
    }

    get popupClasses() {
        const { horizontal, vertical } = this._alignment;
        const nubbinClass = `slds-nubbin_${horizontal}-${vertical}`;
        return `slds-popover slds-popover_walkthrough ${nubbinClass}`;
    }

    get popup() {
        return this.template.querySelector('lightning-popup');
    }
}

```

```html
<template>
    <lightning-button label="Click to show a popup" onclick={openPopup}></lightning-button>

    <lightning-popup
        aria-labelledby="popup-header"
        aria-describedby="popup-body"
        onautofocus={handleAutoFocus}
        onalignmentupdate={handleAlignmentUpdate}>
        <div class={popupClasses}>
            <button onclick={closePopup}
                class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse">
                <lightning-icon icon-name="utility:close" size="xx-small"></lightning-icon>
            </button>

            <header id="popup-header" class="slds-popover__header">Manage your channels</header>

            <div id="popup-body" class="slds-popover__body">
                <p class="slds-p-bottom_medium slds-p-top_medium">This is the content of the body</p>

                <lightning-input type="email" label="Email Address" placeholder="Email Address"
                                 variant="label-hidden"></lightning-input>
            </div>
            <footer class="slds-popover__footer">
                <div class="slds-grid slds-grid_vertical-align-center">
                    <span class="slds-text-title">Step 2 of 4</span>
                    <button class="slds-button slds-button_success slds-col_bump-left">Setup Email</button>
                    <button class="slds-button slds-button_brand slds-col_bump-left">Next</button>
                </div>
            </footer>
        </div>
    </lightning-popup>

</template>

```

---
