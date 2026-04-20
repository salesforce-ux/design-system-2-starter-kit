# lightning-input-name

**What is it?**  
This component is a customizable input field for names, allowing users to input and edit various parts of a name, such as the salutation, first name, and last name, with options for field-level help, required fields, and disabled fields for a user-friendly experience.

**Where would you use it?**
- Imagine you're filling out a form to register for a new service. The form asks for your full name, including your first name, middle name, last name, and any suffixes or titles you might have. The <lightning-input-name> component would be used to create this part of the form, allowing you to enter all parts of your name in separate fields.
- You're a customer service representative updating a customer's profile. The customer recently got married and changed their last name. You would use the <lightning-input-name> component to update the customer's last name in their profile.
- You're a user on a social media platform updating your profile. You want to add your nickname (informal name) to your profile. The <lightning-input-name> component would be used to add this new field to the profile editing interface.

**How do you use it?**
- **fields-to-display** `string[]`  
  _Examples:_
    `<lightning-input-name fields-to-display={fields}>`
- **first-name** `string`  
  _Examples:_
    `<lightning-input-name first-name='John'>`
    `<lightning-input-name first-name={firstName}>`
- **middle-name** `string`  
  _Examples:_
    `<lightning-input-name middle-name='Middleton'>`
    `<lightning-input-name middle-name={middleName}>`
- **last-name** `string`  
  _Examples:_
    `<lightning-input-name last-name='Doe'>`
    `<lightning-input-name last-name={lastName}>`
- **informal-name** `string`  
  _Examples:_
    `<lightning-input-name informal-name='Jo'>`
    `<lightning-input-name informal-name={informalName}>`
- **suffix** `string`  
  _Examples:_
    `<lightning-input-name suffix='The 3rd'>`
    `<lightning-input-name suffix={suffix}>`
- **salutation** `string`  
  _Examples:_
    `<lightning-input-name salutation='Mr.'>`
    `<lightning-input-name salutation={salutation}>`
- **options** `Array<{ label: string, value: string }>`  
  _Examples:_
    `<lightning-input-name options={salutationOptions}>`
- **onchange** `(ev: CustomEvent & { detail: { salutation: string, firstName: string, middleName: string, lastName: string, informalName: string, suffix: string, validity: object } }) => void`  
  _Examples:_
    `<lightning-input-name onchange={handleChange}>`

**Related Components:**
- **lightning-input** (optional)
- **lightning-button** (optional)

**Docs:**
---
examples:
    - name: base
      label: Basic Name Fields
      description: Name fields can have predefined values.
    - name: required
      label: Required Name Fields
      description: When name fields are marked as required, a field-level error is thrown if Last Name is blank.
    - name: disabled
      label: Disabled Name Fields
      description: Disabled name fields are grayed out and you cannot interact with them.
    - name: readOnly
      label: Read-Only Name Fields
      description: Read-only name fields are not editable.
    - name: fieldLevelHelp
      label: Name Fields with Field-Level Help
      description: Field-level help guides users with information about the name fields.
---

A `lightning-input-name` component is a name compound field represented by HTML
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class InputNameBase extends LightningElement {
    salutationsList = [
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Mrs.', value: 'Mrs.' },
        { label: 'Dr.', value: 'Dr.' },
        { label: 'Prof.', value: 'Prof.' },
    ];

    get salutationOptions() {
        return this.salutationsList;
    }
}

```

```html
<template>
        <lightning-input-name
        label="Default Input Name Field"
        first-name="John"
        middle-name="Middleton"
        last-name="Doe"
        informal-name="Jo"
        suffix="The 3rd"
        salutation="Mr."
        options={salutationOptions} ></lightning-input-name>
</template>
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class InputNameFieldLevelHelp extends LightningElement {
    salutationsList = [
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Mrs.', value: 'Mrs.' },
        { label: 'Dr.', value: 'Dr.' },
        { label: 'Prof.', value: 'Prof.' },
    ];

    get salutationOptions() {
        return this.salutationsList;
    }
}

```

```html
<template>
        <lightning-input-name
        label="Disabled Input Name Field"
        disabled
        first-name="John"
        middle-name="Middleton"
        last-name="Doe"
        informal-name="Jo"
        suffix="The 3rd"
        salutation="Mr."
        options={salutationOptions} ></lightning-input-name>
</template>
```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class InputNameFieldLevelHelp extends LightningElement {
    salutationsList = [
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Mrs.', value: 'Mrs.' },
        { label: 'Dr.', value: 'Dr.' },
        { label: 'Prof.', value: 'Prof.' },
    ];

    get salutationOptions() {
        return this.salutationsList;
    }
}

```

```html
<template>
        <lightning-input-name
        label="Input Name Field with field level help"
        first-name="John"
        middle-name="Middleton"
        last-name="Doe"
        informal-name="Jo"
        suffix="The 3rd"
        salutation="Mr."
        options={salutationOptions}
        field-level-help="Help Text for input-name field" ></lightning-input-name>
</template>
```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class InputNameReadOnly extends LightningElement {
    salutationsList = [
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Mrs.', value: 'Mrs.' },
        { label: 'Dr.', value: 'Dr.' },
        { label: 'Prof.', value: 'Prof.' },
    ];

    get salutationOptions() {
        return this.salutationsList;
    }
}

```

```html
<template>
        <lightning-input-name
        label="Readonly Input Name Field"
        readonly
        first-name="John"
        middle-name="Middleton"
        last-name="Doe"
        informal-name="Jo"
        suffix="The 3rd"
        salutation="Mr."
        options={salutationOptions} ></lightning-input-name>
</template>
```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class InputNameRequired extends LightningElement {
    salutationsList = [
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Mrs.', value: 'Mrs.' },
        { label: 'Dr.', value: 'Dr.' },
        { label: 'Prof.', value: 'Prof.' },
    ];

    fieldsList = ['firstName', 'lastName'];

    get salutationOptions() {
        return this.salutationsList;
    }

    get fields() {
        return this.fieldsList;
    }
}

```

```html
<template>
        <lightning-input-name
        label="Required Input Name Field"
        required
        first-name="John"
        middle-name="Middleton"
        last-name="Doe"
        informal-name="Jo"
        suffix="The 3rd"
        salutation="Mr."
        options={salutationOptions}
        fields-to-display={fields} ></lightning-input-name>
</template>
```

---
