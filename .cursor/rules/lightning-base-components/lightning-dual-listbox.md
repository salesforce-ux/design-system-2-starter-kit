# lightning-dual-listbox

**What is it?**  
This component is a dual listbox that allows users to select one or more options from a list on the left and move them to a list on the right, maintaining the order of the selected options and providing the ability to reorder them, offering a user-friendly interface for multi-selection and organization of options.

**Where would you use it?**
- Imagine you're on a website for a music festival, and you're trying to create your own schedule. You see a list of all the bands playing on the left, and an empty list on the right titled 'My Schedule'. You can select bands from the left list and move them to the right, creating your personalized lineup. This is a perfect use for the <lightning-dual-listbox> component.
- On a university website, you're trying to register for classes for the upcoming semester. You see a list of all available classes on the left, and an empty list on the right titled 'My Classes'. You can select classes from the left list and move them to the right, registering for those classes. This is another great use for the <lightning-dual-listbox> component.
- You're on a website for a conference, and you're trying to choose which sessions to attend. You see a list of all sessions on the left, and an empty list on the right titled 'My Sessions'. You can select sessions from the left list and move them to the right, creating your personalized conference schedule. This is yet another perfect use for the <lightning-dual-listbox> component.
- On a job application website, you're asked to select your skills from a list. You see a list of all available skills on the left, and an empty list on the right titled 'My Skills'. You can select skills from the left list and move them to the right, indicating your personal skill set. This is a great use for the <lightning-dual-listbox> component.
- You're on a website for a sports league, and you're trying to create your dream team. You see a list of all available players on the left, and an empty list on the right titled 'My Team'. You can select players from the left list and move them to the right, creating your dream team. This is another perfect use for the <lightning-dual-listbox> component.
- On a website for a grocery store, you're trying to create your shopping list. You see a list of all available items on the left, and an empty list on the right titled 'My Shopping List'. You can select items from the left list and move them to the right, creating your shopping list. This is a great use for the <lightning-dual-listbox> component.

**How do you use it?**
- **id** `string`  
  _Examples:_
    `<lightning-dual-listbox id="selectOptions">`
- **name** `string`  
  _Examples:_
    `<lightning-dual-listbox name="Select Options">`
- **label** `string`  
  _Examples:_
    `<lightning-dual-listbox label="Select Options">`
- **source-label** `string`  
  _Examples:_
    `<lightning-dual-listbox source-label="Available Options">`
- **selected-label** `string`  
  _Examples:_
    `<lightning-dual-listbox selected-label="Selected Options">`
- **options** `{ value: string, label: string }[]`  
  _Examples:_
    `<lightning-dual-listbox options={listOptions}>`
- **value** `string[]`  
  _Examples:_
    `<lightning-dual-listbox value={defaultOptions}>`
- **required-options** `string[]`  
  _Examples:_
    `<lightning-dual-listbox required-options={requiredOptions}>`
- **min** `number`  
  _Examples:_
    `<lightning-dual-listbox min={3}>`
- **max** `number`  
  _Examples:_
    `<lightning-dual-listbox max={8}>`
- **message-when-range-overflow** `string`  
  _Examples:_
    `<lightning-dual-listbox message-when-range-overflow="Select at most 8 options">`
- **message-when-range-underflow** `string`  
  _Examples:_
    `<lightning-dual-listbox message-when-range-underflow="At least 3 options must be selected">`
- **message-when-value-missing** `string`  
  _Examples:_
    `<lightning-dual-listbox message-when-value-missing="An option must be selected">`
- **variant** `string`  
  _Examples:_
    `<lightning-dual-listbox variant="label-hidden">`
    `<lightning-dual-listbox variant="label-inline">`
    `<lightning-dual-listbox variant="label-stacked">`
- **onchange** `(ev: CustomEvent & { detail: { value: string[] } }) => void`  
  _Examples:_
    `<lightning-dual-listbox onchange={handleChange}>`

**Related Components:**
- **lightning-input** (required)

**Docs:**
---
examples:
    - name: simple
      label: Simple Dual Listbox
      description: A simple dual listbox with options. Use the onchange event handler to capture what's selected.
    - name: selected
      label: Dual Listbox with Default Selected Options
      description: This dual listbox shows some pre-selected options.
    - name: required
      label: Dual Listbox with Required Selected Options
      description: This dual listbox shows required selected options.
    - name: minmax
      label: Dual listbox with Minimum and Maximum Required Options
      description: This dual listbox requires you to select a minimum and maximum number of options.
---

A `lightning-dual-listbox` component represents two side-by-side listboxes.
Select one or more options in the list on the left. Move selected options to
the list on the right. The order of the selected options is maintained and you
can reorder options.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class DualListboxMinMax extends LightningElement {
    options = [];
    values = [];
    requiredOptions = [];

    get min() {
        return 5;
    }

    get max() {
        return 10;
    }

    connectedCallback() {
        const items = [];
        for (let i = 1; i <= 15; i++) {
            items.push({
                label: `Option ${i}`,
                value: `opt${i}`,
            });
        }
        this.options.push(...items);
        this.values.push(...['opt2', 'opt4', 'opt6']);
    }
}

```

```html
<template>
    <lightning-dual-listbox name="languages"
                            label="Select Options (at least 5 and at most 10)"
                            source-label="Available"
                            selected-label="Selected"
                            field-level-help="This is a dual listbox"
                            options={options}
                            min={min}
                            max={max}
                            value={values}></lightning-dual-listbox>

</template>
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class DualListboxRequired extends LightningElement {
    options = [];
    values = [];
    requiredOptions = [];

    connectedCallback() {
        const items = [];
        for (let i = 1; i <= 10; i++) {
            items.push({
                label: `Option ${i}`,
                value: `opt${i}`,
            });
        }
        this.options.push(...items);
        this.values.push(...['opt2', 'opt4', 'opt6']);
        this.requiredOptions.push(...['opt2', 'opt5']);
    }
}

```

```html
<template>
    <lightning-dual-listbox name="languages"
                            label="Select Options (Option 2 and Option 5 are required)"
                            source-label="Available"
                            selected-label="Selected"
                            field-level-help="This is a dual listbox"
                            options={options}
                            required-options={requiredOptions}
                            value={values}></lightning-dual-listbox>

</template>
```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class DualListboxSelected extends LightningElement {
    options = [];
    values = [];

    connectedCallback() {
        const items = [];
        for (let i = 1; i <= 10; i++) {
            items.push({
                label: `Option ${i}`,
                value: `opt${i}`,
            });
        }
        this.options.push(...items);
        this.values.push(...['opt2', 'opt4', 'opt6']);
    }
}

```

```html
<template>
    <lightning-dual-listbox name="languages"
                            label="Select Languages"
                            source-label="Available"
                            selected-label="Selected"
                            field-level-help="This is a dual listbox"
                            options={options}
                            value={values}></lightning-dual-listbox>

</template>
```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class DualListboxSimple extends LightningElement {
    _selected = [];

    get options() {
        return [
            { label: 'English', value: 'en' },
            { label: 'German', value: 'de' },
            { label: 'Spanish', value: 'es' },
            { label: 'French', value: 'fr' },
            { label: 'Italian', value: 'it' },
            { label: 'Japanese', value: 'ja' },
        ];
    }

    get selected() {
        return this._selected.length ? this._selected : 'none';
    }

    handleChange(e) {
        this._selected = e.detail.value;
    }
}

```

```html
<template>
    <lightning-dual-listbox name="languages"
                            label="Select Languages"
                            source-label="Available"
                            selected-label="Selected"
                            field-level-help="Select your preferred languages"
                            options={options}
                            onchange={handleChange}></lightning-dual-listbox>
    <div class="slds-box" >
        <p>Selected values are: {selected}</p>
    </div>
</template>

```

---
