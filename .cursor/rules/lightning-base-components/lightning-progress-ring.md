# lightning-progress-ring

**What is it?**  
This component is a circular progress indicator that visually represents a value from 0 to 100, providing users with feedback on the status of a process or action through various color fills and optional icons.

**Where would you use it?**
- Imagine you're using a fitness app that tracks your daily steps. The app could use a <lightning-progress-ring> to visually represent the percentage of your daily step goal that you've achieved. As you walk more, the ring fills up, giving you a clear and immediate sense of your progress.
- Consider a project management tool where you can track the progress of different tasks. Each task could have a <lightning-progress-ring> next to it, showing how much of the task has been completed. If a task is behind schedule, the ring could turn yellow or red to warn you.
- Think about a software installation process. As the software installs, a <lightning-progress-ring> could fill up to show you how much of the installation is complete. If the installation is successful, the ring could turn green and display a checkmark.
- Imagine an online course platform where you can track your progress through different modules. Each module could have a <lightning-progress-ring> next to it, filling up as you complete lessons and turning blue when you're actively working on that module.
- Consider a weather app that shows the chance of rain throughout the day. The app could use a <lightning-progress-ring> to represent the percentage chance of rain, filling the ring as the likelihood increases.
- Think about a fundraising website where you can track the progress towards a fundraising goal. The website could use a <lightning-progress-ring> to show how much of the goal has been reached, filling up the ring as more donations come in.

**How do you use it?**
- **value** `string`  
  _Examples:_
    `<lightning-progress-ring value="75">`
    `<lightning-progress-ring value="80">`
    `<lightning-progress-ring value="0">`
    `<lightning-progress-ring value="100">`
- **variant** `string`  
  _Examples:_
    `<lightning-progress-ring value="75" variant="active-step">`
    `<lightning-progress-ring value="80" variant="warning">`
    `<lightning-progress-ring value="0" variant="expired">`
    `<lightning-progress-ring value="100" variant="base-autocomplete">`

**Related Components:**


**Docs:**
---
examples:
    - name: base
      label: Basic Progress Ring
      description: Progress rings using the default green fill with various numeric values.

    - name: drain
      label: Progress Ring Direction
      description: A progress ring's color fill completes in a clockwise direction by default. Set direction="drain" to make the ring's color fill complete counterclockwise.

    - name: large
      label: Progress Ring Sizes
      description: Progress rings can be medium size (default) or large.

    - name: variantActiveStep
      label: Active Step Variant
      description: The active-step variant changes the color fill to blue.

    - name: variantWarning
      label: Warning Variant
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class Basic extends LightningElement {}

```

```html
<template>
    <lightning-progress-ring value="0"> </lightning-progress-ring>
    <lightning-progress-ring value="25"> </lightning-progress-ring>
    <lightning-progress-ring value="50"> </lightning-progress-ring>
    <lightning-progress-ring value="75"> </lightning-progress-ring>
    <lightning-progress-ring value="100"> </lightning-progress-ring>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class Drain extends LightningElement {}

```

```html
<template>
    <lightning-progress-ring value="100" direction="drain"> </lightning-progress-ring>
    <lightning-progress-ring value="75" direction="drain"> </lightning-progress-ring>
    <lightning-progress-ring value="50" direction="drain"> </lightning-progress-ring>
    <lightning-progress-ring value="25" direction="drain"> </lightning-progress-ring>
    <lightning-progress-ring value="0" direction="drain"> </lightning-progress-ring>
</template>

```

**Example 3:**

```js
import { LightningElement, track } from 'lwc';

export default class Interactive extends LightningElement {
    @track sliderValue = 50;
    @track direction = 'fill';

    sliderChange(event) {
        this.sliderValue = event.target.value;
    }

    directionChange(event) {
        if (event.detail.checked) {
            this.direction = 'fill';
        } else {
            this.direction = 'drain';
        }
    }
}

```

```html
<template>
    <div class="slds-m-bottom_medium">
        <lightning-slider
            onchange={sliderChange}
            value={sliderValue}
            label="Value"
        ></lightning-slider>
        <lightning-input
            type="toggle"
            label="Direction"
            name="direction"
            checked
            onchange={directionChange}
            message-toggle-active="Fill"
            message-toggle-inactive="Drain"
        ></lightning-input>
    </div>

    <div class="slds-m-bottom_small">
        <span class="slds-m-right_small">
            variant: base
        </span>
        <lightning-progress-ring
            value={sliderValue}
            direction={direction}
            variant="base"
        ></lightning-progress-ring>
    </div>
    <div class="slds-m-bottom_small">
        <span class="slds-m-right_small">
            variant: base-autocomplete
        </span>
        <lightning-progress-ring
            value={sliderValue}
            direction={direction}
            variant="base-autocomplete"
        ></lightning-progress-ring>
    </div>
    <div class="slds-m-bottom_small">
        <span class="slds-m-right_small">
            variant: active-step
        </span>
        <lightning-progress-ring
            value={sliderValue}
            direction={direction}
            variant="active-step"
        ></lightning-progress-ring>
    </div>
    <div class="slds-m-bottom_small">
        <span class="slds-m-right_small">
            variant: warning
        </span>
        <lightning-progress-ring
            value={sliderValue}
            direction={direction}
            variant="warning"
        ></lightning-progress-ring>
    </div>
    <div class="slds-m-bottom_small">
        <span class="slds-m-right_small">
            variant: expired
        </span>
        <lightning-progress-ring
            value={sliderValue}
            direction={direction}
            variant="expired"
        ></lightning-progress-ring>
    </div>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class Large extends LightningElement {}

```

```html
<template>
    <lightning-progress-ring value="75"></lightning-progress-ring>
    <lightning-progress-ring value="75" size="large"> </lightning-progress-ring>
</template>

```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class VariantActiveStep extends LightningElement {}

```

```html
<template>
    <lightning-progress-ring value="75" variant="active-step"> </lightning-progress-ring>
</template>

```

**Example 6:**

```js
import { LightningElement } from 'lwc';

export default class VariantWarning extends LightningElement {}

```

```html
<template>
    <lightning-progress-ring value="75" variant="base-autocomplete">
    </lightning-progress-ring>
    <lightning-progress-ring value="100" variant="base-autocomplete">
    </lightning-progress-ring>
</template>

```

**Example 7:**

```js
import { LightningElement } from 'lwc';

export default class VariantExpired extends LightningElement {}

```

```html
<template>
    <lightning-progress-ring value="75" variant="expired"> </lightning-progress-ring>
</template>

```

**Example 8:**

```js
import { LightningElement } from 'lwc';

export default class VariantWarning extends LightningElement {}

```

```html
<template>
    <lightning-progress-ring value="75" variant="warning"> </lightning-progress-ring>
</template>

```

---
