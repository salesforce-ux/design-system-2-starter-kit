# lightning-combobox

**What is it?**  
This component is an input element that allows users to make a single selection from a dropdown list of options, providing an interactive and accessible user experience.

**Where would you use it?**
- In an online survey, a <lightning-combobox> could be used to allow users to select their country of residence from a dropdown list. The user would click on the box, see a list of countries, and select their country. The selected country would then be displayed in the box.
- In a web-based project management tool, a <lightning-combobox> could be used to allow users to select the status of a task. The user would click on the box, see a list of statuses such as 'New', 'In Progress', and 'Finished', and select the appropriate status. The selected status would then be displayed in the box.
- In an online form, a <lightning-combobox> could be used to allow users to select their preferred contact method. The user would click on the box, see a list of contact methods such as 'Email', 'Phone', and 'Mail', and select their preferred method. The selected method would then be displayed in the box.

**How do you use it?**
- **name** `string`  
  _Examples:_
    `<lightning-combobox name="status">`
- **label** `string`  
  _Examples:_
    `<lightning-combobox label="Status">`
- **placeholder** `string`  
  _Examples:_
    `<lightning-combobox placeholder="Choose Status">`
- **value** `string`  
  _Examples:_
    `<lightning-combobox value={value}>`
- **onchange** `(ev: CustomEvent & { detail: { value: string } }) => void`  
  _Examples:_
    `<lightning-combobox onchange={handleChange}>`
- **options** `{ value: string, label: string, description?: string }[]`  
  _Examples:_
    `<lightning-combobox options={statusOptions}>`
- **required** `boolean`  
  _Examples:_
    `<lightning-combobox required>`
- **validity** `ValidityState`
- **message-when-value-missing** `string`  
  _Examples:_
    `<lightning-combobox message-when-value-missing="Please select a value">`
- **onopen** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-combobox onopen={handleOpen}>`

**Related Components:**
- **lightning-dual-listbox** (optional)
- **lightning-input** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Combobox
      description: A combobox enables you to select only one option. Use the onchange event handler to capture what's selected.
    - name: required
      label: Combobox with Selection Required
      description: This combobox requires a selection by specifying the required attribute. If you do not select an option after first interaction, an error is displayed.
    - name: disabled
      label: Disabled Combobox
      description: A disabled combobox is grayed out and can't be clicked.
---

`lightning-combobox` is an input element that enables single selection from a
list of options. The result of the selection is stored as the value of the
input. Multiple selection is currently not supported. To support multiple selection, use `lightning-dual-listbox` instead.

This component implements the
[combobox](https://www.lightningdesignsystem.com/components/combobox/) blueprint in the Salesforce Lightning Design System.

...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class ComboboxBasic extends LightningElement {
    value = 'inProgress';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}

```

```html
<template>
    <lightning-combobox
            name="progress"
            label="Status"
            value={value}
            placeholder="Select Progress"
            options={options}
            onchange={handleChange} ></lightning-combobox>

    <p>Selected value is: {value}</p>
</template>
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class ComboboxDisabled extends LightningElement {
    value = 'inProgress';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }
}

```

```html
<template>
    <lightning-combobox
            name="progress"
            label="Status"
            value=""
            placeholder="Select Progress"
            options={options}
            onchange={handleChange}
            disabled
    ></lightning-combobox>
    <p>Selected value is: {value}</p>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class ComboboxRequired extends LightningElement {
    value = 'inProgress';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}

```

```html
<template>
    <lightning-combobox
            name="progress"
            label="Status"
            value=""
            placeholder="Select Progress"
            options={options}
            onchange={handleChange}
            required
    ></lightning-combobox>
    <p>Selected value is: {value}</p>
</template>
```

---
