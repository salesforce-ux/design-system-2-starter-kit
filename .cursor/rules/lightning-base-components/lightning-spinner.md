# lightning-spinner

**What is it?**  
This component is an animated spinner image that indicates a feature is loading, providing a visual cue to users during data retrieval or any operation that doesn't immediately complete.

**Where would you use it?**
- Imagine you're using an online shopping website and you've just clicked 'checkout'. While the website is processing your order, a spinning icon appears on the screen. This is the <lightning-spinner> component in action, letting you know that your request is being processed.
- You're using a weather app and you've just entered your location to get the forecast. While the app is retrieving the data, a spinning icon appears. This is the <lightning-spinner> component, indicating that the app is loading the information.
- You're on a social media site and you've just clicked to see more comments on a popular post. As the site is loading the additional comments, a spinning icon appears. This is the <lightning-spinner> component, showing you that more content is being loaded.

**How do you use it?**
- **variant** `string`  
  _Examples:_
    `<lightning-spinner variant="brand">`
    `<lightning-spinner variant="inverse">`
- **size** `string`  
  _Examples:_
    `<lightning-spinner size="large">`
- **alternative-text** `string`  
  _Examples:_
    `<lightning-spinner alternative-text="Loading...">`

**Related Components:**
- **lightning-button** (optional)

**Docs:**
---
examples:
    - name: sizes
      label: Spinner Sizes
      description: A spinner can be displayed in multiple sizes.
    - name: inverse
      label: Spinner with Inverse Variant
      description: A spinner uses the inverse variant to display a dark background.
    - name: if
      label: Display a Spinner Conditionally
      description: A spinner can be displayed or hidden conditionally.
---

A `lightning-spinner` displays an animated spinner image to indicate that a
feature is loading. This component can be used when retrieving data or anytime
an operation doesn't immediately complete.

The `variant` attribute changes the appearance of the spinner. If you set
`variant="brand"`, the spinner matches the Lightning Design System brand
color. Setting `variant="inverse"` displays a white spinner. The default
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class SpinnerIf extends LightningElement {
    loaded = false;

    handleClick() {
        this.loaded = !this.loaded;
    }
}

```

```html
<template>
    <lightning-button label="Toggle" variant="brand" onclick={handleClick}></lightning-button>

    <div class="exampleHolder">
        <template if:true={loaded}>
            Put loaded content here
        </template>
        <template if:false={loaded}>
            <lightning-spinner alternative-text="Loading"></lightning-spinner>
        </template>
    </div>
</template>
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class SpinnerInverse extends LightningElement {}

```

```html
<template>
    <div class="backgroundInverse">
        <lightning-spinner alternative-text="Loading" variant="inverse"></lightning-spinner>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class SpinnerSizes extends LightningElement {}

```

```html
<template>
    <div class="exampleHolder">
        <lightning-spinner alternative-text="Loading" size="xx-small"></lightning-spinner>
    </div>
    <div class="exampleHolder">
        <lightning-spinner alternative-text="Loading" size="x-small"></lightning-spinner>
    </div>
    <div class="exampleHolder">
        <lightning-spinner alternative-text="Loading" size="small"></lightning-spinner>
    </div>
    <div class="exampleHolder">
        <lightning-spinner alternative-text="Loading" size="medium"></lightning-spinner>
    </div>
    <div class="exampleHolder">
        <lightning-spinner alternative-text="Loading" size="large"></lightning-spinner>
    </div>
</template>

```

---
