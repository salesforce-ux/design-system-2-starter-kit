# lightning-radio-group

**What is it?**  
This component is a group of radio buttons that allows only one selection at a time, providing an interactive user experience with options for input validation, customization of appearance, and accessibility features.

**Where would you use it?**
- Imagine you're filling out a survey online and you're asked to select your gender. The options are 'Male', 'Female', and 'Prefer not to say'. This is a perfect scenario for the <lightning-radio-group> component, as only one option can be selected.
- You're signing up for a new social media account and during the registration process, you're asked to select your preferred language from a list. The <lightning-radio-group> component would be used here to ensure only one language is selected.
- You're booking a flight online and you need to select your meal preference for the flight. The options are 'Vegetarian', 'Vegan', 'Gluten-free', 'No preference'. The <lightning-radio-group> component would be used here to ensure only one meal preference is selected.
- You're on an online shopping website and you're asked to select your preferred payment method. The options are 'Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer'. The <lightning-radio-group> component would be used here to ensure only one payment method is selected.
- You're on a music streaming website and you're asked to select your preferred music genre. The options are 'Pop', 'Rock', 'Country', 'Jazz', 'Classical', 'Other'. The <lightning-radio-group> component would be used here to ensure only one music genre is selected.
- You're on a news website and you're asked to select the topics you're interested in. The options are 'Politics', 'Sports', 'Entertainment', 'Technology', 'Health', 'Travel'. The <lightning-radio-group> component would be used here to ensure only one topic is selected.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-radio-group label='Radio Button Group'>`
    `<lightning-radio-group label={myLabelValue}>`
- **options** `{ label: string, value: string }[]`  
  _Examples:_
    `<lightning-radio-group options={options}>`
- **value** `string`  
  _Examples:_
    `<lightning-radio-group value='option1'>`
    `<lightning-radio-group value={myValue}>`
- **onchange** `(ev: CustomEvent & { detail: { value: string } }) => void`  
  _Examples:_
    `<lightning-radio-group onchange={handleChange}>`
- **required** `boolean`  
  _Examples:_
    `<lightning-radio-group required>`
    `<lightning-radio-group required={isRequired}>`
- **disabled** `boolean`  
  _Examples:_
    `<lightning-radio-group disabled>`
    `<lightning-radio-group disabled={isDisabled}>`
- **type** `string`  
  _Examples:_
    `<lightning-radio-group type='button'>`
    `<lightning-radio-group type={myType}>`
- **variant** `string`  
  _Examples:_
    `<lightning-radio-group variant='label-hidden'>`
    `<lightning-radio-group variant={myVariant}>`
- **message-when-value-missing** `string`  
  _Examples:_
    `<lightning-radio-group message-when-value-missing='Please select an option'>`
    `<lightning-radio-group message-when-value-missing={myErrorMessage}>`
- **class** `string`  
  _Examples:_
    `<lightning-radio-group class='slds-m-around_x-small'>`
    `<lightning-radio-group class={myClass}>`

**Related Components:**
- **lightning-input** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Radio Group
      description: A radio group contains at least two options and only one can be selected.
    - name: required
      label: Required Radio Group
      description: A radio group displays a field-level error if it's required and no option is selected after the first interaction.
    - name: disabled
      label: Disabled Radio Group
      description: Disabled options are grayed out and you can't interact with them.
    - name: button
      label: Radio Group with Button Type
      description: A radio group can use the button type to display a different visual style.
    - name: buttonrequired
      label: Required Radio Group with Button Type
      description: A radio button group displays a field-level error if it's required and no option is selected after the first interaction.
    - name: buttondisabled
      label: Disabled Radio Group with Button Type
      description: Disabled options are grayed out and you can't interact with them.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class RadioGroupBasic extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }
}

```

```html
<template>
    <lightning-radio-group name="radioGroup"
                          label="Radio Group"
                          options={options}
                          value={value}
                          type="radio"></lightning-radio-group>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class RadioGroupButton extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }
}

```

```html
<template>
    <lightning-radio-group name="radioGroup"
                          label="Radio Group"
                          options={options}
                          value={value}
                          type="button"></lightning-radio-group>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class RadioGroupButtonDisabled extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }
}

```

```html
<template>
    <lightning-radio-group name="radioGroup"
                           label="Radio Group"
                           options={options}
                           value={value}
                           disabled
                           type="button"></lightning-radio-group>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class RadioGroupRequired extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }
}

```

```html
<template>
    <lightning-radio-group name="radioGroup"
                           label="Radio Group"
                           options={options}
                           value={value}
                           required
                           type="button"></lightning-radio-group>
</template>

```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class RadioGroupBasic extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }
}

```

```html
<template>
    <lightning-radio-group name="radioGroup"
                          label="Radio Group"
                          options={options}
                          value={value}
                           disabled
                          type="radio"></lightning-radio-group>
</template>

```

**Example 6:**

```js
import { LightningElement } from 'lwc';

export default class RadioGroupRequired extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'Sales', value: 'option1' },
            { label: 'Force', value: 'option2' },
        ];
    }
}

```

```html
<template>
    <lightning-radio-group name="radioGroup"
                          label="Radio Group"
                          options={options}
                          value={value}
                           required
                          type="radio"></lightning-radio-group>
</template>

```

---
