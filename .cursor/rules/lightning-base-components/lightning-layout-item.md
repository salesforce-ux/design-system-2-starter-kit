# lightning-layout-item

**What is it?**  
This component is used to define and arrange content within a layout, with the ability to configure the size and flexibility of the layout item, allowing for adaptive design across different device sizes.

**Where would you use it?**
- Imagine you're browsing a clothing website on your phone. The website uses the <lightning-layout-item> component to display different clothing items side by side. As you rotate your phone to landscape mode, the layout automatically adjusts to show more items side by side, making use of the extra space.
- On a news website, articles are displayed in a grid format. Each article is a <lightning-layout-item> component. When you open the website on your tablet, the layout adjusts to show more articles side by side. If you open the same website on your desktop, even more articles are displayed side by side, making efficient use of the larger screen.
- You're using a project management app on your laptop. The app uses <lightning-layout-item> components to display different tasks. Each task takes up a certain amount of space depending on its content. If a task has a lot of details, it takes up more space. If a task has few details, it takes up less space.
- On a music streaming website, each song in the playlist is a <lightning-layout-item> component. The song title, artist name, and album cover are displayed side by side. There's also some space between each song in the playlist, making it easy to distinguish between different songs.
- You're browsing a photo gallery app on your tablet. Each photo is a <lightning-layout-item> component. The photos are displayed in a grid, with some padding around each photo. This padding helps separate the photos from each other, making the gallery easy to browse.
- On a weather app, each day's forecast is a <lightning-layout-item> component. The forecast for today takes up more space, showing more details. The forecasts for the next few days take up less space, showing only the most important details. As you switch from your phone to your tablet, the layout adjusts to show more details for each day.

**How do you use it?**
- **size** `string`  
  _Examples:_
    `<lightning-layout-item size="12">`
    `<lightning-layout-item size={itemSize}>`
- **small-device-size** `string`  
  _Examples:_
    `<lightning-layout-item small-device-size="6">`
    `<lightning-layout-item small-device-size={smallDeviceSize}>`
- **medium-device-size** `string`  
  _Examples:_
    `<lightning-layout-item medium-device-size="8">`
    `<lightning-layout-item medium-device-size={mediumDeviceSize}>`
- **large-device-size** `string`  
  _Examples:_
    `<lightning-layout-item large-device-size="10">`
    `<lightning-layout-item large-device-size={largeDeviceSize}>`
- **flexibility** `string`  
  _Examples:_
    `<lightning-layout-item flexibility="auto">`
    `<lightning-layout-item flexibility={flexibilityValue}>`
- **padding** `string`  
  _Examples:_
    `<lightning-layout-item padding="around-small">`
    `<lightning-layout-item padding={paddingValue}>`

**Related Components:**
- **lightning-layout** (required)

**Docs:**
---
examples:
    - name: default
      label: Layout Items with Default Attributes
      description: Layout items take the size of their content by default.
    - name: flexibility
      label: Layout Items with Auto Flexibility
      description: Layout items can take the entire width of the container.
    - name: flexibilityValues
      label: Layout Items with no-grow Flexibility
      description: Layout items can remove additional space in the container beyond the content width.
    - name: size
      label: Layout Items with Size Attribute
      description: Layout items can occupy different widths relative to the viewport.
    - name: sizePerDevice
      label: Layout Items With Device-Specific Sizes
      description: Layout items can vary their widths depending on the device.
    - name: sizeOverriddenForTablets
      label: Layout Item Sizes for Tablets and Above
      description: Layout items can specify widths for tablet devices and larger.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutItemAlignmentBump extends LightningElement {}

```

```html
<template>
        <p>The third layout items specify <code>alignment-bump="left"</code> to create a margin to its left. The margin is the width of the unused horizontal space.</p>
    <div class="slds-m-top_x-small slds-m-bottom_medium slds-m-horizontal_none slds-box slds-p-around_none">
        <lightning-layout>
            <lightning-layout-item>
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">1</div>
            </lightning-layout-item>
            <lightning-layout-item>
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">2</div>
            </lightning-layout-item>
            <lightning-layout-item alignment-bump="left">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">3</div>
            </lightning-layout-item>
            <lightning-layout-item>
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">4</div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutItemDefault extends LightningElement {}

```

```html
<template>
        <p>With default attribute values of <code>size</code> and <code>flexibility</code>, layout items take the size of their content and don't occupy entire width of the container.</p>
    <div class="slds-box slds-p-around_none slds-m-top_x-small slds-m-bottom_medium slds-m-horizontal_none">
        <lightning-layout>
            <lightning-layout-item padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">1</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">2</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">3</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">4</div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutItemFlexibility extends LightningElement {}

```

```html
<template>
        <p>The layout items below become as wide as necessary to occupy the entire width of the container with <code>flexibility="auto"</code>.</p>
    <div class="slds-box slds-p-around_none slds-m-top_x-small slds-m-bottom_medium slds-m-horizontal_none">
        <lightning-layout>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">1</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">2</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">3</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">4</div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutItemFlexibilityValues extends LightningElement {}

```

```html
<template>
        <p>The third layout item adds a value of <code>"no-grow"</code> to the <code>flexibility</code> attribute. No space is assigned to that item in the container beyond the width of the content.</p>
    <div class="slds-box slds-p-around_none slds-m-top_x-small slds-m-bottom_medium slds-m-horizontal_none">
        <lightning-layout>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">1</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">2</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto, no-grow" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">3</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">4</div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutItemPadding extends LightningElement {}

```

```html
<template>
        <p>These layout items specify <code>padding="horizontal-medium"</code> to give each item medium padding on its left and right sides.</p>
    <div class="slds-box slds-p-around_none slds-m-top_x-small slds-m-bottom_medium slds-m-horizontal_none">
        <lightning-layout>
            <lightning-layout-item flexibility="auto" padding="horizontal-medium">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">1</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="horizontal-medium">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">2</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="horizontal-medium">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">3</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="horizontal-medium">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">4</div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 6:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutItemSize extends LightningElement {}

```

```html
<template>
        <p>These layout items specify <code>size="4"</code>, or 4 columns of a 12 column grid. Each item occupies 33.33% of the width.</p>
    <div class="slds-box slds-p-around_none slds-m-top_x-small slds-m-bottom_medium slds-m-horizontal_none">
        <lightning-layout multiple-rows>
            <lightning-layout-item size="4" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">1</div>
            </lightning-layout-item>
            <lightning-layout-item size="4" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">2</div>
            </lightning-layout-item>
            <lightning-layout-item size="4" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">3</div>
            </lightning-layout-item>
            <lightning-layout-item size="4" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">4</div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 7:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutItemSizeOverriddenForTablets extends LightningElement {}

```

```html
<template>
        <p>Layout with items having default size 6 and and size set to 3 for medium. The medium size is used for devices like tablets and wider than tablets, such as desktop monitors. The default size is used for devices narrower than tablets, such as smart phones. For more information about device sizes, see the <a href="https://lightningdesignsystem.com/utilities/grid/" target="_blank">Lightning Design System website</a>.</p>
    <div class="slds-box slds-p-around_none slds-m-top_x-small slds-m-bottom_medium slds-m-horizontal_none">
        <lightning-layout multiple-rows>
            <lightning-layout-item size="6" medium-device-size="3" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">1</div>
            </lightning-layout-item>
            <lightning-layout-item size="6" medium-device-size="3" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">2</div>
            </lightning-layout-item>
            <lightning-layout-item size="6" medium-device-size="3" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">3</div>
            </lightning-layout-item>
            <lightning-layout-item size="6" medium-device-size="3" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">4</div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 8:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutItemSizePerDevice extends LightningElement {}

```

```html
<template>
        <p>These layout items specify size with device sizes. The value <code>size="12"</code> is applied to a small mobile phone and the <code>device-size</code> attributes are applied to larger devices progressively. For more information about device sizes, see the <a href="https://lightningdesignsystem.com/utilities/grid/" target="_blank">Lightning Design System website</a>.</p>

    <div class="slds-box slds-p-around_none slds-m-top_x-small slds-m-bottom_medium slds-m-horizontal_none">
        <lightning-layout multiple-rows>
            <lightning-layout-item size="12" small-device-size="6" medium-device-size="4" large-device-size="3" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">1</div>
            </lightning-layout-item>
            <lightning-layout-item size="12" small-device-size="6" medium-device-size="4" large-device-size="3" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">2</div>
            </lightning-layout-item>
            <lightning-layout-item size="12" small-device-size="6" medium-device-size="4" large-device-size="3" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">3</div>
            </lightning-layout-item>
            <lightning-layout-item size="12" small-device-size="6" medium-device-size="4" large-device-size="3" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">4</div>
            </lightning-layout-item>
            <lightning-layout-item size="12" small-device-size="6" medium-device-size="4" large-device-size="3" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">5</div>
            </lightning-layout-item>
            <lightning-layout-item size="12" small-device-size="6" medium-device-size="4" large-device-size="3" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">6</div>
            </lightning-layout-item>
            <lightning-layout-item size="12" small-device-size="6" medium-device-size="4" large-device-size="3" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">7</div>
            </lightning-layout-item>
            <lightning-layout-item size="12" small-device-size="6" medium-device-size="4" large-device-size="3" padding="around-small">
                <div class="custom-box slds-box slds-p-around_medium slds-text-align_center">8</div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

---
