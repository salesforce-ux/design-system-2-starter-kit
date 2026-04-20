# lightning-button-stateful

**What is it?**  
This component is a stateful button that toggles between different states, displaying different labels and icons based on its selected state, providing an interactive user experience similar to a social media Like button.

**Where would you use it?**
- Imagine you're using a social media platform and you come across a post you really like. You could use the <lightning-button-stateful> to 'like' the post. When you click the button, it changes to show that you've liked the post. If you decide to 'unlike' the post, you can click the button again and it will change back to its original state.
- Consider a situation where you're using an online shopping platform. You find a product you're interested in and want to save it for later. The <lightning-button-stateful> could be used as a 'save for later' button. When you click on it, the button changes to show that the product has been saved. If you decide you're no longer interested in the product, you can click the button again to 'unsave' it.
- Imagine you're using a music streaming platform and you come across a song you really enjoy. The <lightning-button-stateful> could be used as a 'favorite' button. When you click on it, the button changes to show that the song has been added to your favorites. If you decide you no longer want the song in your favorites, you can click the button again to remove it.

**How do you use it?**
- **label-when-off** `string`  
  _Examples:_
    `<lightning-button-stateful label-when-off='Follow'>`
    `<lightning-button-stateful label-when-off={labelWhenOff}>`
- **label-when-on** `string`  
  _Examples:_
    `<lightning-button-stateful label-when-on='Following'>`
    `<lightning-button-stateful label-when-on={labelWhenOn}>`
- **label-when-hover** `string`  
  _Examples:_
    `<lightning-button-stateful label-when-hover='Unfollow'>`
    `<lightning-button-stateful label-when-hover={labelWhenHover}>`
- **icon-name-when-off** `string`  
  _Examples:_
    `<lightning-button-stateful icon-name-when-off='utility:add'>`
    `<lightning-button-stateful icon-name-when-off={iconNameWhenOff}>`
- **icon-name-when-on** `string`  
  _Examples:_
    `<lightning-button-stateful icon-name-when-on='utility:check'>`
    `<lightning-button-stateful icon-name-when-on={iconNameWhenOn}>`
- **icon-name-when-hover** `string`  
  _Examples:_
    `<lightning-button-stateful icon-name-when-hover='utility:close'>`
    `<lightning-button-stateful icon-name-when-hover={iconNameWhenHover}>`
- **selected** `boolean`  
  _Examples:_
    `<lightning-button-stateful selected={isSelected}>`
- **onclick** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-button-stateful onclick={handleClick}>`
- **variant** `string`  
  _Examples:_
    `<lightning-button-stateful variant='brand'>`
    `<lightning-button-stateful variant={buttonVariant}>`
- **class** `string`  
  _Examples:_
    `<lightning-button-stateful class='slds-p-around_medium'>`
    `<lightning-button-stateful class={buttonClass}>`
- **disabled** `boolean`  
  _Examples:_
    `<lightning-button-stateful disabled={isDisabled}>`

**Related Components:**


**Docs:**
---
examples:
    - name: basic
      label: Stateful Button
      description: This stateful button changes its text and icon when you select it. The button changes its text and icon again when you hover over it. This uses the default variant.
    - name: inverseVariant
      label: Stateful Button with Inverse Variant
      description: This stateful button changes its text and icon when you select it. The button changes its text and icon again when you hover over it. This uses the inverse variant.
    - name: noIcon
      label: Stateful Button with No Icon
      description: This stateful button uses the brand variant and does not specify icons for any states.
    - name: textVariant
      label: Stateful Button with Text and Icon
      description: This stateful button uses the text variant and specifies icons for selected and not-selected states, but not the hover state.
---

A `lightning-button-stateful` component represents a button that toggles
between states, similar to a Like button on social media. Stateful buttons can
show a different label and icon based on their `selected` states.

...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class Basic extends LightningElement {
    isSelected = false;

    handleClick() {
        this.isSelected = !this.isSelected;
    }
}

```

```html
<template>
    <lightning-button-stateful
        label-when-off="Follow"
        label-when-on="Following"
        label-when-hover="Unfollow"
        icon-name-when-off="utility:add"
        icon-name-when-on="utility:check"
        icon-name-when-hover="utility:close"
        selected={isSelected}
        onclick={handleClick}>
    </lightning-button-stateful>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class Basic extends LightningElement {
    isSelected = false;

    handleClick() {
        this.isSelected = !this.isSelected;
    }
}

```

```html
<template>
    <div class="backgroundInverse">
        <lightning-button-stateful
            label-when-off="Follow"
            label-when-on="Following"
            label-when-hover="Unfollow"
            icon-name-when-off="utility:add"
            icon-name-when-on="utility:check"
            icon-name-when-hover="utility:close"
            variant="inverse"
            selected={isSelected}
            onclick={handleClick}>
        </lightning-button-stateful>
    </div>
</template>




```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class Basic extends LightningElement {
    isSelected = false;

    handleClick() {
        this.isSelected = !this.isSelected;
    }
}

```

```html
<template>
    <lightning-button-stateful
        label-when-off="Follow"
        label-when-on="Following"
        label-when-hover="Unfollow"
        variant="brand"
        selected={isSelected}
        onclick={handleClick}>
    </lightning-button-stateful>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class Basic extends LightningElement {
    isSelected = false;

    handleClick() {
        this.isSelected = !this.isSelected;
    }
}

```

```html
<template>
    <div class="backgroundInverse">
        <lightning-button-stateful
            label-when-off="Like"
            label-when-on="Liked"
            icon-name-when-off="utility:like"
            icon-name-when-on="utility:like"
            variant="text"
            selected={isSelected}
            onclick={handleClick}>
        </lightning-button-stateful>
    </div>
</template>



```

---
