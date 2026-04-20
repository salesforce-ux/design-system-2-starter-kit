# lightning-overlay

**What is it?**  
This component is a foundational element in the overlay library, primarily used by developers to create new overlay types, providing a simple or advanced overlay experience depending on the need for wrapping HTML.

**Where would you use it?**
- Imagine you're using a website to book a hotel room. When you click on a room to view more details, a <lightning-overlay> could be used to display a pop-up window with pictures and information about the room. This allows you to view more details without leaving the page you're on.
- Consider a scenario where you're using an online shopping website. When you add an item to your cart, a <lightning-overlay> could be used to show a confirmation message, letting you know that the item has been successfully added to your cart.
- Suppose you're using a web application to manage your tasks. When you click on a task to edit it, a <lightning-overlay> could be used to display a form where you can update the task's details. This allows you to edit the task without navigating to a different page.
- Imagine you're using a website to apply for a job. When you click on a job listing to view more details, a <lightning-overlay> could be used to display a pop-up window with the job description and application form. This allows you to apply for the job directly from the job listings page.
- Consider a scenario where you're using a website to order food. When you click on a menu item to view more details, a <lightning-overlay> could be used to show a pop-up window with a picture, ingredients, and nutritional information for the item. This allows you to view more details without leaving the menu page.
- Suppose you're using a web application to manage your emails. When you click on an email to read it, a <lightning-overlay> could be used to display the email content. This allows you to read the email without leaving your inbox.

**How do you use it?**


**Related Components:**
- **lightning-modal** (optional)
- **lightning-menu** (optional)
- **lightning-menu-base** (optional)

**Docs:**
# Overlay

> Note: This component is not exposed for use by internal or external developers.

This is as low level in the overlay library as one can get. For this reason the documentation below is aimed at primarily `Lightning*` developers or those creating new overlay types. The overview examples would need much more to be fully accessible.

-   Simple: Contains no wrapping HTML only a host element.
    -   `<c-custom-overlay>`
-   Advanced: Contains a wrapping Component. Example: `LightningModal`.

## Creating a Simple Overlay

```js
import LightningOverlay from 'lightning/overlay';
import { instanceName } from 'lightning/overlayUtils';

class MyOverlay extends LightningOverlay {
    static [instanceName] = 'my-overlay';

    @api customProperty = 'Default';
...

**Examples:**
**Example 1:**

```js
import { api } from 'lwc';
import LightningOverlay from 'lightning/overlay';

export default class OverlayAlert extends LightningOverlay {
    @api header = 'Header';

    @api body = 'Body';

    @api okayText = 'Okay';

    @api cancelText = 'Cancel';

    handleOkay() {
        this.close('okay');
    }

    handleCancel() {
        this.close('cancel');
    }

    handleDismiss() {
        this.close('dismiss');
    }

    hasFocus = false;
    renderedCallback() {
        if (!this.hasFocus) {
            const close = this.template.querySelector('header > button');
            close.focus();
            this.hasFocus = true;
        }
    }
}

```

```html
<template>
    <lightning-focus-trap>
        <section role="dialog" tabindex="-1" aria-labelledby="modal-heading-01" aria-modal="true"
            aria-describedby="modal-content-id-1" class="slds-modal slds-fade-in-open slds-modal_small">
            <div class="slds-modal__container">
                <header class="slds-modal__header">
                    <button class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse"
                        title="Close" onclick={handleDismiss}>
                        <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                        </svg>
                        <span class="slds-assistive-text">Close</span>
                    </button>
                    <h2 id="modal-heading-01" class="slds-modal__title slds-hyphenate">{header}</h2>
                </header>
                <div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
                    <p>{body}</p>
                </div>
                <footer class="slds-modal__footer">
                    <button class="slds-button slds-button_neutral" onclick={handleCancel}>{cancelText}</button>
                    <button class="slds-button slds-button_brand" onclick={handleOkay}>{okayText}</button>
                </footer>
            </div>
        </section>
    </lightning-focus-trap>
    <div class="slds-backdrop slds-backdrop_open"></div>
</template>
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

import OverlayAlert from 'overlay/alert';
import OverlayDemo from 'overlay/demo';
import OverlayPanel from 'overlay/panel';

export default class OverlayBasic extends LightningElement {
    confirmResult = 'unset';

    handleConfirmModal() {
        OverlayAlert.open({
            header: 'Are you sure?',
            body: 'Click cancel or okay below to get a string result.',
        }).then((result) => {
            this.confirmResult = result;
        });
    }

    confirmAltResult = 'unset';

    handleConfirmAltModal() {
        OverlayAlert.open({
            header: 'Do you like this demo?',
            body: '...',
            okayText: 'Yes',
            cancelText: 'Also Yes',
        }).then((result) => {
            this.confirmAltResult = result;
        });
    }

    demoResult = 'unset';

    handleDemoModal() {
        OverlayDemo.open({
            header: 'Select an Option',
            body: 'From the list below select an item',
            options: [
                { id: 1, label: 'Option 1' },
                { id: 2, label: 'Option 2' },
            ],
        }).then((result) => {
            if (result === 0) {
                this.demoResult = 'dismiss';
            } else {
                this.demoResult = result;
            }
        });
    }

    panelResult = 'unset';

    handlePanel() {
        OverlayPanel.open({
            header: 'Select an Option',
            body: 'From the list below select an item',
        }).then((result) => {
            this.demoResult = result;
        });
    }
}

```

```html
<template>
    <div class="example">
        <button onclick={handleConfirmModal}>Open a Confirm Modal</button> 
        <p>Result: <code>{confirmResult}</code></p>
    </div>
    <div class="example">
        <button onclick={handleConfirmAltModal}>Open a Confirm Modal Alt</button> 
        <p>Result: <code>{confirmAltResult}</code></p>
    </div>
    <div class="example">
        <button onclick={handleDemoModal}>Open a Demo Modal</button> 
        <p>Result: <code>{demoResult}</code></p>
    </div>
    <div class="example">
        <button onclick={handlePanel}>Open a Panel</button> 
        <p>Result: <code>{panelResult}</code></p>
    </div>
</template>
```

**Example 3:**

```js
import { api } from 'lwc';

import LightningOverlay from 'lightning/overlay';
import OverlayAlert from 'overlay/alert';

export default class OverlayDemo extends LightningOverlay {
    @api header = 'Header';

    @api body = 'Body';

    @api options = [];

    handleOptionClick(e) {
        const { target } = e;
        const id = parseInt(target.dataset.id, 10);
        const option = this.options.find((x) => x.id === id);
        OverlayAlert.open({
            header: 'Are you sure?',
            body: `You selected "${option.label}".`,
            okayText: `Yes, ${option.label}`,
        }).then((result) => {
            if (result === 'okay') {
                this.close(parseInt(target.dataset.id, 10));
            }
        });
    }

    handleDismiss() {
        this.close(0);
    }

    hasFocus = false;
    renderedCallback() {
        if (!this.hasFocus) {
            const close = this.template.querySelector('header > button');
            close.focus();
            this.hasFocus = true;
        }
    }
}

```

```html
<template>
    <section role="dialog" tabindex="-1" aria-labelledby="modal-heading-01" aria-modal="true"
        aria-describedby="modal-content-id-1" class="slds-modal slds-fade-in-open">
        <div class="slds-modal__container">
            <header class="slds-modal__header">
                <button class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" title="Close" onclick={handleDismiss}>
                    <svg class="slds-button__icon slds-button__icon_large" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                    </svg>
                    <span class="slds-assistive-text">Close</span>
                </button>
                <h2 id="modal-heading-01" class="slds-modal__title slds-hyphenate">{header}</h2>
            </header>
            <div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
                <p>{body}</p>
                <ul>
                    <template for:each={options} for:item="option">
                        <li key={option.id}>
                            <button onclick={handleOptionClick} data-id={option.id}>
                                {option.label}
                            </button>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </section>
    <div class="slds-backdrop slds-backdrop_open"></div>
</template>
```

**Example 4:**

```js
import { api } from 'lwc';
import LightningOverlay from 'lightning/overlay';

export default class OverlayPanel extends LightningOverlay {
    @api header = 'Header';

    @api body = 'Body';

    handleDismiss() {
        this.close('dismiss');
    }

    hasFocus = false;
    renderedCallback() {
        if (!this.hasFocus) {
            const close = this.template.querySelector('div > button');
            close.focus();
            this.hasFocus = true;
        }
    }
}

```

```html
<template>
    <lightning-focus-trap>
        <div class="slds-panel slds-size_medium slds-panel_docked slds-panel_docked-left slds-is-open" aria-hidden="false">
            <div class="slds-panel__header">
                <h2 class="slds-panel__header-title slds-text-heading_small slds-truncate" title="Panel Header">{header}</h2>
                <button class="slds-button slds-button_icon slds-button_icon-small slds-panel__close" title="Collapse Panel Header" onclick={handleDismiss}>
                <svg class="slds-button__icon" aria-hidden="true">
                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                </svg>
                <span class="slds-assistive-text">Collapse Panel Header</span>
                </button>
            </div>
            <div class="slds-panel__body">{body}</div>
        </div>
    </lightning-focus-trap>
    <!-- <div class="slds-backdrop slds-backdrop_open"></div>-->
</template>
```

---
