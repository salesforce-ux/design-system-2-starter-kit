# lightning-select

**What is it?**  
This component is a customizable dropdown menu that allows for single or multiple selections from a list of options, providing an interactive and accessible user experience.

**Where would you use it?**
- Imagine you're shopping online and you're on a product page. The product comes in different sizes and colors. The <lightning-select> component could be used to create dropdown menus for selecting the size and color of the product you want to buy.
- You're filling out a survey online and one of the questions asks you to select your country of residence from a dropdown menu. The <lightning-select> component could be used to create this dropdown menu.
- You're signing up for a new online service and during the registration process, you're asked to select a security question from a dropdown menu. The <lightning-select> component could be used to create this dropdown menu.
- You're on a website that offers online courses. You want to browse the courses by category, so you use a dropdown menu to select a category. The <lightning-select> component could be used to create this dropdown menu.
- You're on a travel booking website and you're trying to book a flight. You need to select your departure and arrival airports from dropdown menus. The <lightning-select> component could be used to create these dropdown menus.
- You're on a website that sells custom-made furniture. You want to customize a chair by selecting the type of wood and the finish from dropdown menus. The <lightning-select> component could be used to create these dropdown menus.

**How do you use it?**
- **value** `string`  
  _Examples:_
    `<lightning-select value={selectVal}>`
    `<lightning-select value='sales'>`
- **label** `string`  
  _Examples:_
    `<lightning-select label='Select a product'>`
    `<lightning-select label={labelValue}>`
- **options** `{ label: string, value: string, disabled?: boolean }[]`  
  _Examples:_
    `<lightning-select options={productOptions}>`
- **onchange** `(ev: CustomEvent & { detail: { value: string } }) => void`  
  _Examples:_
    `<lightning-select onchange={handleChange}>`
- **multiple** `boolean`  
  _Examples:_
    `<lightning-select multiple>`
    `<lightning-select multiple={isMultiple}>`
- **size** `string`  
  _Examples:_
    `<lightning-select size='3'>`
    `<lightning-select size={sizeValue}>`
- **required** `boolean`  
  _Examples:_
    `<lightning-select required>`
    `<lightning-select required={isRequired}>`
- **message-when-value-missing** `string`  
  _Examples:_
    `<lightning-select message-when-value-missing='Which area can we help you with?'>`
    `<lightning-select message-when-value-missing={missingValueMessage}>`
- **variant** `string`  
  _Examples:_
    `<lightning-select variant='label-hidden'>`
    `<lightning-select variant={variantValue}>`
- **class** `string`  
  _Examples:_
    `<lightning-select class='my-select'>`
    `<lightning-select class={className}>`

**Related Components:**
- **lightning-dual-listbox** (optional)
- **lightning-button** (optional)
- **lightning-combobox** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Select
      description: A simple dropdown menu with a selection required.
    - name: multiple
      label: Multiple Select
      description: A dropdown menu with multiple selection enabled.
    - name: disabled
      label: Disabled Select
      description: A dropdown menu with disabled state.
    - name: hidden
      label: Hidden Select
      description: A dropdown menu with hidden label.
    - name: inline
      label: Inline Select
      description: A dropdown menu with inline label.
---

`lightning-select` enables single and multiple selection on a menu of options using the HTML `select` element and `option` elements. To specify whether multiple options can be selected, use the `multiple` attribute. The `size` attribute can be used to specify how many options are visible at once. `lightning-select` also accepts most general form input attributes such as `required` and `disabled`.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class SelectBasic extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'choose one...', value: '' },
            { label: 'one', value: '1' },
            { label: 'two', value: '2' },
            { label: 'three', value: '3' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}

```

```html
<template>
    <lightning-select
            name="tickets"
            label="How many tickets?"
            value={value}
            options={options}
            onchange={handleChange}
            required ></lightning-select>

    <p>Number of tickets: {value}</p>
</template>
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class SelectDisabled extends LightningElement {
    selectVal = '';
    productOptions = [
        {
            label: '--None--',
            value: '',
        },
        {
            label: 'Sales',
            value: 'sales',
        },
        {
            label: 'Marketing',
            value: 'marketing',
        },
        {
            label: 'Service',
            value: 'service',
        },
    ];

    handleChange(event) {
        this.selectVal = event.detail.value;
    }
}

```

```html
<template>
    <lightning-select
        value={selectVal}
        label="Select a product"
        options={productOptions}
        onchange={handleChange}
        disabled
        message-when-value-missing="Which area can we help you with?">
    </lightning-select>
</template>
```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class SelectHidden extends LightningElement {
    selectVal = '';
    productOptions = [
        {
            label: '--None--',
            value: '',
        },
        {
            label: 'Sales',
            value: 'sales',
        },
        {
            label: 'Marketing',
            value: 'marketing',
        },
        {
            label: 'Service',
            value: 'service',
        },
    ];

    handleChange(event) {
        this.selectVal = event.detail.value;
    }
}

```

```html
<template>
    <lightning-select
        value={selectVal}
        label="Select a product"
        options={productOptions}
        onchange={handleChange}
        variant="label-hidden"
        message-when-value-missing="Which area can we help you with?">
    </lightning-select>
</template>
```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class SelectInline extends LightningElement {
    selectVal = '';
    productOptions = [
        {
            label: '--None--',
            value: '',
        },
        {
            label: 'Sales',
            value: 'sales',
        },
        {
            label: 'Marketing',
            value: 'marketing',
        },
        {
            label: 'Service',
            value: 'service',
        },
    ];

    handleChange(event) {
        this.selectVal = event.detail.value;
    }
}

```

```html
<template>
    <lightning-select
        name="tickets"
        value={selectVal}
        label="How many tickets?"
        options={productOptions}
        onchange={handleChange}
        variant="label-inline">
    </lightning-select>
</template>
```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class SelectMultiple extends LightningElement {
    value = '';

    get options() {
        return [
            { label: 'Apple', value: 'apple' },
            { label: 'Blueberry', value: 'blueberry' },
            { label: 'Cherry', value: 'cherry' },
            { label: 'Pumpkin', value: 'pumpkin' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}

```

```html
<template>
    <lightning-select
            name="pies"
            label="Select your pies"
            value={value}
            options={options}
            onchange={handleChange}
            multiple
            size="3"></lightning-select>

    <p>Selected pies: </p>
</template>
```

---
