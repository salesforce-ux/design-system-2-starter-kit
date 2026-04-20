# lightning-slider

**What is it?**  
This component is a customizable input range slider that allows users to specify a numeric value within a defined range.

**Where would you use it?**
- Imagine you're shopping online for a new TV and you have a specific budget in mind. The website could use a <lightning-slider> to allow you to set a price range for your search, ensuring that only TVs within your budget are shown.
- You're editing a photo on a website and want to adjust the brightness. The site could use a <lightning-slider> to let you easily increase or decrease the brightness level until the photo looks just right.
- You're on a music streaming website and want to adjust the volume of the song you're listening to. The site could use a <lightning-slider> to let you control the volume level to your liking.
- You're on a real estate website looking for a new house. The website could use a <lightning-slider> to allow you to set the range of square footage you're interested in, so you only see houses that meet your size requirements.
- You're on a travel booking website and you want to set the duration of your stay. The site could use a <lightning-slider> to let you easily select the number of nights you want to stay at a location.
- You're on a fitness app setting your daily step goal. The app could use a <lightning-slider> to let you easily adjust your step goal to a number that challenges you but is still achievable.

**How do you use it?**
- **value** `number`  
  _Examples:_
    `<lightning-slider value={10}>`
    `<lightning-slider value={myValue}>`
- **min** `number`  
  _Examples:_
    `<lightning-slider min={0}>`
    `<lightning-slider min={myMinValue}>`
- **max** `number`  
  _Examples:_
    `<lightning-slider max={100}>`
    `<lightning-slider max={myMaxValue}>`
- **label** `string`  
  _Examples:_
    `<lightning-slider label='Slider'>`
    `<lightning-slider label={myLabel}>`

**Related Components:**
- **lightning-slider** (required)

**Docs:**
# Avatar

```HTML
<lightning:slider />
```

## Summary

-   An input range slider lets the user specify a numeric value which must be between two specified values.
-   Customizable via `size` attributes

## Markup

-   This component is based on the markup defined in SLDS:
    https://latest-210.lightningdesignsystem.com/components/slider

## Usage

```html
<lightning:slider value="10" min="0" max="100" label="Slider" />
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleSliderBasic extends LightningElement {
    val = 50;
}

```

```html
<template>
    <div class="slds-m-vertical_medium">
        <h1 class="slds-text-heading_small">Basic Slider</h1>
        <p class="slds-text-body_regular">A slider lets you specify a number between two specified values. If a range is not provided, the slider defaults to a minimum of 0 and a maximum of 100.</p>
    </div>
    
    <lightning-slider label="Volume" value={val}></lightning-slider>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleSliderSizes extends LightningElement {}

```

```html
<template>
    <div class="slds-m-vertical_medium">
        <h1 class="slds-text-heading_small">Slider Sizes</h1>
        <p class="slds-text-body_regular">The slider comes in many sizes: x-small, small, medium, and large. The default slider size takes up the width of the view port.</p>
    </div>
    
    <lightning-slider label="Volume" size="x-small"></lightning-slider>
    <lightning-slider label="Volume" size="small"></lightning-slider>
    <lightning-slider label="Volume" size="medium"></lightning-slider>
    <lightning-slider label="Volume" size="large"></lightning-slider>
    <lightning-slider label="Volume"></lightning-slider>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleSliderType extends LightningElement {}

```

```html
<template>
    <div class="slds-m-vertical_medium">
        <h1 class="slds-text-heading_small">Slider Positioning</h1>
        <p class="slds-text-body_regular">The slider can be positioned horizontally or vertically.</p>
    </div>
    
    <lightning-slider label="Volume"></lightning-slider>
    <lightning-slider label="Volume" type="vertical"></lightning-slider>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleSliderVariant extends LightningElement {
    val = 50;
}

```

```html
<template>
    <div class="slds-m-vertical_medium">
        <h1 class="slds-text-heading_small">Slider Variants</h1>
        <p class="slds-text-body_regular">The slider can be disabled or displayed without labels.</p>
    </div>
    
    <lightning-slider label="Volume" value={val} disabled></lightning-slider>
    <lightning-slider label="Volume" variant="label-hidden"></lightning-slider>
</template>

```

---
