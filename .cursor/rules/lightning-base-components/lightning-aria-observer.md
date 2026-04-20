# lightning-aria-observer

**What is it?**  
This component provides a way to create accessible web components that work in both synthetic and native shadow, allowing for the connection of internal elements with external references, thus enhancing the user's experience with improved accessibility.

**Where would you use it?**
- Imagine you're using a website to fill out a form, and there's a field where you need to enter your email address. The field is labeled 'Email Address', but you're using a screen reader to navigate the website. The <lightning-aria-observer> component ensures that your screen reader can correctly identify the email field by its label, even if the website's code is complex or unusual.
- On a different website, you're trying to make a purchase. There's a button labeled 'Buy Now', but when you hover over it, a pop-up appears with more information about the product. The <lightning-aria-observer> component ensures that your screen reader can correctly identify the relationship between the 'Buy Now' button and the pop-up, so you can understand what's happening on the screen.
- Let's say you're using a music streaming website, and there's a list of songs in your current playlist. Each song in the list has a 'Play' button next to it. The <lightning-aria-observer> component ensures that your screen reader can correctly identify each 'Play' button with the corresponding song, so you know which song you're about to play.

**How do you use it?**
- **aria-labelledby** `string`  
  _Examples:_
    `<lightning-aria-observer aria-labelledby='my-label'>`
    `<lightning-aria-observer aria-labelledby={labelId}>`
- **aria-describedby** `string`  
  _Examples:_
    `<lightning-aria-observer aria-describedby='my-description'>`
    `<lightning-aria-observer aria-describedby={descriptionId}>`
- **aria-activedescendant** `string`  
  _Examples:_
    `<lightning-aria-observer aria-activedescendant='my-active-descendant'>`
    `<lightning-aria-observer aria-activedescendant={activeDescendantId}>`
- **aria-controls** `string`  
  _Examples:_
    `<lightning-aria-observer aria-controls='my-control'>`
    `<lightning-aria-observer aria-controls={controlId}>`

**Related Components:**
- **lightning-primitive-input-simple** (optional)
- **lightning-input** (optional)
- **lightning-base-combobox** (optional)
- **lightning-combobox** (optional)

**Docs:**
The `lightning/ariaObserver` module provides an easy way for users to write accessible component that works in both synthetic and native shadow.

## Aria ID referencing in native shadow
Use the `AriaObserver` library to write accessible component that works where `ariaLabelledBy` would break native shadow.

Here's an example that won't work with native shadow. In the following code, we support attribute `ariaLabelledBy` in our component `c-foo`, so the `input` element is labelled by external elements.

``` html
<template>
    <input aria-labelledby={ariaLabelledBy}>
</template>
```

```
class Foo extends LightningElement {
    @api ariaLabelledBy;
}
```

This example uses the `aria-labelledby` attribute to use the internal input as an external label in `c-foo`.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class AriaObserverConnect extends LightningElement {
    connectIds = 'foo bar';

    handleUpdateIds() {
        this.connectIds = 'foo bar hello world';
    }
}

```

```html
<template>
    <div>
        <label id="foo">Foo</label>
    </div>
    <div>
        <label id="bar">Bar</label>
    </div>
    <div>
        <label id="hello">Hello</label>
    </div>
    <div>
        <label id="world">World</label>
    </div>
    <div>
        <ariaobserver-connect-child aria-labelledby={connectIds}></ariaobserver-connect-child>
        <div>Current Id: {connectIds}</div>
        <div><button onclick={handleUpdateIds}>Update Ids to 'foo bar hello world'</button></div>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement, api } from 'lwc';

import AriaObserver from 'lightning/ariaObserver';

export default class AriaObserverConnectChild extends LightningElement {
    constructor() {
        super();
        this.ariaObserver = new AriaObserver(this);
    }

    connectedCallback() {
        if (!this.ariaObserver) {
            this.ariaObserver = new AriaObserver(this);
        }
    }

    disconnectedCallback() {
        if (this.ariaObserver) {
            this.ariaObserver.disconnect();
            this.ariaObserver = undefined;
        }
    }

    renderedCallback() {
        if (this.isConnected) {
            this.ariaObserver.sync();
        }
    }

    _ariaLabelledBy = '';

    @api
    get ariaLabelledBy() {
        return this._ariaLabelledBy;
    }
    set ariaLabelledBy(refs) {
        this._ariaLabelledBy = refs;

        this.ariaObserver.connect({
            targetSelector: 'input',
            attribute: 'aria-labelledby',
            id: refs,
        });
    }
}

```

```html
<template>
    <input type="text" />
</template>

```

---
