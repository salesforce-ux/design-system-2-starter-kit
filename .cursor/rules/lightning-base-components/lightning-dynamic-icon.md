# lightning-dynamic-icon

**What is it?**  
This component is a dynamic icon that visually indicates an event in progress, providing users with a variety of animated visual cues such as pulsing circles, rising and falling bars, and animated arrows.

**Where would you use it?**
- In a financial application, the <lightning-dynamic-icon> component could be used to visually represent the fluctuation of stock prices. The 'eq' type could be used to show an animated graph with three bars that rise and fall randomly, giving the user a quick visual representation of the stock's performance.
- In a fitness application, the <lightning-dynamic-icon> component could be used to indicate the user's workout progress. The 'strength' type could be used to show three animated horizontal circles that are colored green or red, providing a visual representation of the user's current workout intensity.
- In a weather application, the <lightning-dynamic-icon> component could be used to indicate weather trends. The 'trend' type could be used to show animated arrows that point up, down, or straight, giving the user a quick visual representation of the weather forecast.
- In a music application, the <lightning-dynamic-icon> component could be used to indicate the volume level. The 'ellie' type could be used to show a pulsing blue circle, which pulses and stops after one animation cycle, providing a visual representation of the volume level.
- In a gaming application, the <lightning-dynamic-icon> component could be used to indicate the player's score. The 'score' type could be used to show a green filled circle or a red unfilled circle, giving the player a quick visual representation of their score.
- In a mobile application, the <lightning-dynamic-icon> component could be used to indicate the app's menu. The 'waffle' type could be used to show a 3x3 grid of dots that animates on hover, providing a visual representation of the app's menu.

**How do you use it?**
- **type** `string`  
  _Examples:_
    `<lightning-dynamic-icon type="ellie">`
    `<lightning-dynamic-icon type="eq">`
    `<lightning-dynamic-icon type="score">`
    `<lightning-dynamic-icon type="strength">`
    `<lightning-dynamic-icon type="trend">`
    `<lightning-dynamic-icon type="waffle">`
- **alternative-text** `string`  
  _Examples:_
    `<lightning-dynamic-icon alternative-text="Your calculation is running.">`

**Related Components:**


**Docs:**
---
examples:
    - name: ellie
      label: Ellie Icon
      description: Displays a pulsing blue circle, which pulses and stops after one animation cycle.
    - name: eq
      label: EQ Icon
      description: Displays an animated graph with three bars that rise and fall randomly.
    - name: score
      label: Score Icon
      description: Displays a green filled circle or a red unfilled circle.
    - name: strength
      label: Strength Icon
      description: Displays three animated horizontal circles that are colored green or red.
    - name: trend
      label: Trend Icon
      description: Displays animated arrows that point up, down, or straight.
    - name: waffle
      label: Waffle Icon
      description: Displays a 3x3 grid of dots that animates on hover.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class DynamicIconEllie extends LightningElement {}

```

```html
<template>
    <p>
        The ellie icon is a pulsing blue circle, which pulses and stops after one animation cycle.
    </p>
    <lightning-dynamic-icon 
        type="ellie" 
        alternative-text="Ellie intelligence">
    </lightning-dynamic-icon>
</template>
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class DynamicIconEq extends LightningElement {}

```

```html
<template>
    <p>
        EQ Icon - The eq icon displays an animated graph with three bars that rise and fall randomly.
    </p>
    <lightning-dynamic-icon
        type="eq"
        option="play"
        alternative-text="Recording in progress">
    </lightning-dynamic-icon>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class DynamicIconScore extends LightningElement {}

```

```html
<template>
    <p>
        The score icon is a green filled circle or a red unfilled circle.
    </p>
    <lightning-dynamic-icon 
        type="score" 
        option="negative" 
        alternative-text="Negative score">
    </lightning-dynamic-icon>
</template>
```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class DynamicIconStrength extends LightningElement {}

```

```html
<template>
    <p>
        The strength icon displays three animated horizontal circles that are colored green or red.
    </p>
    <lightning-dynamic-icon 
        type="strength" 
        option="2" 
        alternative-text="Strength: 2">
    </lightning-dynamic-icon>
</template>
```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class DynamicIconTrend extends LightningElement {}

```

```html
<template>
    <p>
        The trend icon displays animated arrows that point up, down, or straight.
    </p>
    <lightning-dynamic-icon 
        type="trend" 
        option="down" 
        alternative-text="Trending down">
    </lightning-dynamic-icon>
</template>

```

**Example 6:**

```js
import { LightningElement } from 'lwc';

export default class DynamicIconWaffle extends LightningElement {}

```

```html
<template>
    <p>
        The waffle icon is a square made up of a 3x3 grid of circles. This icon animates on hover.
    </p>
    <lightning-dynamic-icon 
        type="waffle" 
        alternative-text="Application launcher">
    </lightning-dynamic-icon>
</template>
```

---
