# lightning-formatted-name

**What is it?**  
This component displays names in a formatted manner based on user preferences, providing an experience that adapts to different locales and name formats.

**Where would you use it?**
- In a business application, the <lightning-formatted-name> component could be used to display the full names of employees in a company directory. The 'long' format would be used to include salutations, middle names, and suffixes, providing a formal and comprehensive view of each employee's name.
- In a social media application, the <lightning-formatted-name> component could be used to display user names in a friend list. The 'short' format would be used to keep the display simple and informal, showing only first and last names.
- In a school management system, the <lightning-formatted-name> component could be used to display student names in a class list. The 'medium' format would be used to include middle names, providing a more complete view of each student's name without including unnecessary details like salutations or suffixes.

**How do you use it?**
- **first-name** `string`  
  _Examples:_
    `<lightning-formatted-name first-name='John'>`
- **middle-name** `string`  
  _Examples:_
    `<lightning-formatted-name middle-name='Middleton'>`
- **last-name** `string`  
  _Examples:_
    `<lightning-formatted-name last-name='Doe'>`
- **informal-name** `string`  
  _Examples:_
    `<lightning-formatted-name informal-name='Jo'>`
- **suffix** `string`  
  _Examples:_
    `<lightning-formatted-name suffix='The 3rd'>`
- **salutation** `string`  
  _Examples:_
    `<lightning-formatted-name salutation='Mr.'>`
- **format** `'short' | 'medium' | 'long'`  
  _Examples:_
    `<lightning-formatted-name format='short'>`
    `<lightning-formatted-name format='medium'>`
    `<lightning-formatted-name format='long'>`

**Related Components:**
- **lightning-input-name** (optional)

**Docs:**
---
examples:
    - name: long
      label: Formatted Name with Default Format (Long)
      description: The default long formatted name.
    - name: medium
      label: Formatted Name with Medium Format
      description: Medium formatted name.
    - name: short
      label: Formatted Name with Short Format
      description: Short formatted name.
---

A `lightning-formatted-name` component displays formatted names in a given
format and order. The locale set in the app's user preferences determines how
names are formatted and the order they are presented.

This example displays "Mr. John Middleton Doe The 3rd Jo" based on the
default English United States locale with the `long` format.

...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class FormattedNameLong extends LightningElement {}

```

```html
<template>
    <div class="slds-box">
        <h3 class="header">Default (Long Format)</h3>
        <lightning-formatted-name
                first-name="John"
                last-name="Doe"
                middle-name="Middleton"
                informal-name="Jo"
                suffix="The 3rd"
                salutation="Mr."
        >
        </lightning-formatted-name>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class FormattedNameMedium extends LightningElement {}

```

```html
<template>
    <div class="slds-box">
        <h3 class="header">Medium Format</h3>
        <lightning-formatted-name
                first-name="John"
                last-name="Doe"
                middle-name="Middleton"
                informal-name="Jo"
                suffix="The 3rd"
                salutation="Mr."
                format="medium"
        ></lightning-formatted-name>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class FormattedNameShort extends LightningElement {}

```

```html
<template>
    <div class="slds-box">
        <h3 class="header">Short Format</h3>
        <lightning-formatted-name
                first-name="John"
                last-name="Doe"
                middle-name="Middleton"
                informal-name="Jo"
                suffix="The 3rd"
                salutation="Mr."
                format="short"
        ></lightning-formatted-name>
    </div>
</template>

```

---
