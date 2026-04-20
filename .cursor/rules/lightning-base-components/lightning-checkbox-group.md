# lightning-checkbox-group

**What is it?**  
This component is a group of checkboxes that allows users to select single or multiple options, with features for required selection, disabled selection, input validation, and customizable styling, providing an interactive and accessible user experience.

**Where would you use it?**
- Imagine you're filling out a survey about your favorite TV shows, and you're asked to select all the genres you enjoy. A <lightning-checkbox-group> could be used here to list all the genres as checkboxes, allowing you to select multiple options.
- You're signing up for a new social media platform and during the registration process, you're asked to select your interests from a list. This list could be implemented using a <lightning-checkbox-group>, allowing you to select multiple interests.
- You're ordering a pizza online and you're asked to select all the toppings you want. A <lightning-checkbox-group> could be used here to list all the toppings as checkboxes, allowing you to select multiple options.
- You're booking a flight and you're asked to select all the amenities you would like to add to your booking. A <lightning-checkbox-group> could be used here to list all the amenities as checkboxes, allowing you to select multiple options.
- You're filling out a job application and you're asked to select all the skills you have from a list. This list could be implemented using a <lightning-checkbox-group>, allowing you to select multiple skills.
- You're customizing a product online and you're asked to select all the features you want to add to your product. A <lightning-checkbox-group> could be used here to list all the features as checkboxes, allowing you to select multiple options.

**How do you use it?**
- **name** `string`  
  _Examples:_
    `<lightning-checkbox-group name="checkboxGroup">`
- **label** `string`  
  _Examples:_
    `<lightning-checkbox-group label="Checkbox Group">`
    `<lightning-checkbox-group label="Select a color">`
- **options** `{ label: string, value: string }[]`  
  _Examples:_
    `<lightning-checkbox-group options={options}>`
- **value** `string[]`  
  _Examples:_
    `<lightning-checkbox-group value={value}>`
- **onchange** `(ev: CustomEvent & { detail: { value: string[] } }) => void`  
  _Examples:_
    `<lightning-checkbox-group onchange={handleChange}>`
- **required** `boolean`  
  _Examples:_
    `<lightning-checkbox-group required>`
- **message-when-value-missing** `string`  
  _Examples:_
    `<lightning-checkbox-group message-when-value-missing="Custom error message">`
- **disabled** `boolean`  
  _Examples:_
    `<lightning-checkbox-group disabled>`
- **variant** `'label-hidden' | 'label-inline' | 'label-stacked' | 'standard'`  
  _Examples:_
    `<lightning-checkbox-group variant="label-hidden">`
    `<lightning-checkbox-group variant="label-inline">`
    `<lightning-checkbox-group variant="label-stacked">`
    `<lightning-checkbox-group variant="standard">`
- **class** `string`  
  _Examples:_
    `<lightning-checkbox-group class="slds-box">`

**Related Components:**
- **lightning-input** (optional)
- **lightning-button** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Checkbox Group
      description: A checkbox group contains at least two checkboxes. This example presets the selected value to the first option.
    - name: required
      label: Checkbox Group with Required Selection
      description: This checkbox group requires a selection by specifying the required attribute. If you do not select an option after first interaction, an error is displayed.
    - name: disabled
      label: Disabled Checkbox Group
      description: This checkbox group specifies the disabled attribute. The disabled options are grayed out and you can't change the selection.
---

A `lightning-checkbox-group` component represents a checkbox group that enables
selection of single or multiple options.

If the `required` attribute is set, at least one checkbox must be
selected. When a user interacts with the checkbox group and doesn't make a
selection, an error message is displayed. You can provide a custom error
message using the `message-when-value-missing` attribute.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class CheckboxGroupBasic extends LightningElement {
    value = ['option1'];

    get options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }

    handleChange(e) {
        this.value = e.detail.value;
    }
}

```

```html
<template>
    <lightning-checkbox-group name="Checkbox Group"
                              label="Checkbox Group"
                              options={options}
                              value={value}
                              onchange={handleChange}></lightning-checkbox-group>
    <p>Selected Values are: {selectedValues}</p>
</template>
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class CheckboxGroupDisabled extends LightningElement {
    value = ['option1'];

    get options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
        ];
    }
}

```

```html
<template>
    <lightning-checkbox-group name="Checkbox Group"
                              label="Checkbox Group"
                              options={options}
                              value={value}
                              disabled></lightning-checkbox-group>
</template>
```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class CheckboxGroupRequired extends LightningElement {
    value = [];

    get options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
        ];
    }
}

```

```html
<template>
    <lightning-checkbox-group name="Checkbox Group"
                              label="Checkbox Group"
                              options={options}
                              value={value}
                              required></lightning-checkbox-group>
</template>
```

---
