# lightning-input

**What is it?**  
This component is a versatile input field that supports various types such as text, number, date, email, url, and more, providing users with a tailored data entry experience based on the specified type.

**Where would you use it?**
- You could use the <lightning-input> component in a form on a website where users need to enter their personal information. For example, the component could be used to create fields for users to enter their name, email address, and phone number. The component would ensure that the data entered is in the correct format and provide helpful error messages if the user enters their information incorrectly.
- The <lightning-input> component could be used in a survey or questionnaire. For example, it could be used to create a field where users can enter their responses to open-ended questions. The component could also be used to create checkboxes or toggle switches for multiple choice questions.
- The <lightning-input> component could be used in a booking form on a travel website. For example, it could be used to create fields for users to enter their travel dates. The component would provide a date picker to help users select their dates and ensure that the dates entered are in the correct format.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-input label="Name">`
- **variant** `string`  
  _Examples:_
    `<lightning-input variant="label-hidden">`
- **onchange** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-input onchange={handleChange}>`
- **type** `string`  
  _Examples:_
    `<lightning-input type="checkbox">`
    `<lightning-input type="checkbox-button">`
    `<lightning-input type="date">`
    `<lightning-input type="datetime">`
    `<lightning-input type="time">`
    `<lightning-input type="email">`
    `<lightning-input type="file">`
    `<lightning-input type="password">`
    `<lightning-input type="search">`
    `<lightning-input type="tel">`
    `<lightning-input type="url">`
    `<lightning-input type="number">`
    `<lightning-input type="text">`
    `<lightning-input type="toggle">`
- **checked** `boolean`  
  _Examples:_
    `<lightning-input type="checkbox" checked>`
- **value** `string`  
  _Examples:_
    `<lightning-input type="color" value="#EEEEEE">`
    `<lightning-input type="date" value="2020-11-03">`
    `<lightning-input type="datetime" value="2020-11-03T18:13:41Z">`
    `<lightning-input type="email" value="name@example.com">`
    `<lightning-input type="number" value="12345">`
    `<lightning-input type="text" value="initial value">`
    `<lightning-input type="time" value="14:00:00.000">`
- **min** `string`  
  _Examples:_
    `<lightning-input type="date" min="2020-11-03">`
    `<lightning-input type="datetime" min="2020-11-03T18:13:41Z">`
    `<lightning-input type="number" min="0">`
    `<lightning-input type="time" min="14:00:00.000">`
- **max** `string`  
  _Examples:_
    `<lightning-input type="date" max="2020-11-03">`
    `<lightning-input type="datetime" max="2020-11-03T18:13:41Z">`
    `<lightning-input type="number" max="1000">`
    `<lightning-input type="time" max="14:00:00.000">`
- **step** `string`  
  _Examples:_
    `<lightning-input type="number" step=".01">`
    `<lightning-input type="range" step=".01">`
- **formatter** `string`  
  _Examples:_
    `<lightning-input type="number" formatter="currency">`
    `<lightning-input type="number" formatter="percent">`
- **timezone** `string`  
  _Examples:_
    `<lightning-input type="datetime" timezone="America/New_York">`
- **date-style** `string`  
  _Examples:_
    `<lightning-input type="date" date-style="short">`
    `<lightning-input type="date" date-style="long">`
- **time-style** `string`  
  _Examples:_
    `<lightning-input type="time" time-style="short">`
    `<lightning-input type="time" time-style="medium">`
- **multiple** `boolean`  
  _Examples:_
    `<lightning-input type="email" multiple>`
- **is-loading** `boolean`  
  _Examples:_
    `<lightning-input type="search" is-loading>`
- **message-toggle-active** `string`  
  _Examples:_
    `<lightning-input type="toggle" message-toggle-active="On">`
- **message-toggle-inactive** `string`  
  _Examples:_
    `<lightning-input type="toggle" message-toggle-inactive="Off">`
- **field-level-help** `string`  
  _Examples:_
    `<lightning-input field-level-help="The event name must 50 characters or less">`
- **placeholder** `string`  
  _Examples:_
    `<lightning-input placeholder="username@example.com">`
- **aria-labelledby** `string`  
  _Examples:_
    `<lightning-input aria-labelledby="otherlabel">`
- **autocomplete** `string`  
  _Examples:_
    `<lightning-input autocomplete="on">`
- **maxlength** `number`  
  _Examples:_
    `<lightning-input maxlength="50">`
- **minlength** `number`  
  _Examples:_
    `<lightning-input minlength="5">`
- **pattern** `string`  
  _Examples:_
    `<lightning-input pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">`
    `<lightning-input pattern=".+@example.com">`
- **required** `boolean`  
  _Examples:_
    `<lightning-input required>`
- **message-when-bad-input** `string`  
  _Examples:_
    `<lightning-input message-when-bad-input="Enter a valid value.">`
- **message-when-pattern-mismatch** `string`  
  _Examples:_
    `<lightning-input message-when-pattern-mismatch="Your entry does not match the allowed pattern.">`
- **message-when-range-overflow** `string`  
  _Examples:_
    `<lightning-input message-when-range-overflow="The number is too high.">`
- **message-when-range-underflow** `string`  
  _Examples:_
    `<lightning-input message-when-range-underflow="The number is too low.">`
- **message-when-step-mismatch** `string`  
  _Examples:_
    `<lightning-input message-when-step-mismatch="Your entry isn't a valid increment.">`
- **message-when-too-long** `string`  
  _Examples:_
    `<lightning-input message-when-too-long="Your entry is too long.">`
- **message-when-too-short** `string`  
  _Examples:_
    `<lightning-input message-when-too-short="Your entry is too short.">`
- **message-when-type-mismatch** `string`  
  _Examples:_
    `<lightning-input message-when-type-mismatch="You have entered an invalid format.">`
- **message-when-value-missing** `string`  
  _Examples:_
    `<lightning-input message-when-value-missing="Complete this field.">`
- **oncommit** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-input oncommit={handleCommit}>`

**Related Components:**
- **lightning-button** (optional)
- **lightning-radio-group** (optional)
- **lightning-combobox** (optional)
- **lightning-record-form** (optional)
- **lightning-record-view-form** (optional)
- **lightning-record-edit-form** (optional)
- **lightning-checkbox-group** (optional)

**Docs:**
---
examples:
    - name: text
      label: Text Input (default)
      description: Text input fields are for entering single-line text.
    - name: textAdvanced
      label: Text Input (Advanced)
      description: Text input fields with event handling and data binding.
    - name: date
      label: Date Input
      description: Date input fields provide a date picker for entering a date.
    - name: datetime
      label: Date/Time Input
      description: Date/Time input fields provide a date and time picker for entering a date and time.
    - name: timebasic
      label: Time Input (Basic)
      description: Time input fields provide a dropdown list of time values in 15-minute increments.
    - name: timeadvanced
      label: Time Input (Advanced)
      description: Time input fields support earliest and latest time input.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class InputCheckboxBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-box">
        <h2 class="header">Basic Input Checkbox</h2>
        <lightning-input type="checkbox" label="Basic option" name="input1"></lightning-input>
        <lightning-input type="checkbox" label="Required option" name="input2" checked required></lightning-input>
        <lightning-input type="checkbox" label="Disabled option" name="input3" checked disabled></lightning-input>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class InputCheckboxButton extends LightningElement {}

```

```html
<template>
    <div class="slds-box">
        <h2 class="header">Input Checkbox Button</h2>
        <lightning-input type="checkbox-button" label="Input One" name="input1"></lightning-input>
        <lightning-input type="checkbox-button" label="Input Two" name="input2" checked required></lightning-input>
        <lightning-input type="checkbox-button" label="Input Three" name="input3" disabled></lightning-input>
        <lightning-input type="checkbox-button" label="Input Four" name="input3" checked disabled></lightning-input>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class InputColor extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An input field with a color picker. Type a valid hex color value such as <code>#8DC141</code> or click the menu to select a color.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="color" name="input-color" label="Favorite color"></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An input field with a color picker that's set to a predefined value.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="color" name="input-color" label="Favorite color" value="#8DC141"></lightning-input>
        </div>
    </div>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleInputDate extends LightningElement {}

```

```html
<template>
    <div class="slds-m-around_medium">
        <h1 class="slds-text-heading_small">Input Date Example</h1>
        <p class="slds-text-body_regular">The following examples show various ways to create an input date component.</p>
    </div>
    <div>
        <h2>Basic Input Date</h2>
        <lightning-input type="date" name="input1" label="Enter a date" ></lightning-input>
        <lightning-input type="date" name="input2" label="Date field with a predefined value" value="2020-09-07"></lightning-input>
        <lightning-input type="date" name="input3" label="Date field with ISO8601 formatted value" value="2020-09-07T00:00:00Z"></lightning-input>
        <lightning-input type="date" name="input4" label="Date field with placeholder" placeholder="type here..."></lightning-input>
    </div>

    <div>
        <h2>Advanced Input Date</h2>
        <lightning-input type="date" name="input5" label="Required date field" required value="2020-09-07" ></lightning-input>
        <lightning-input type="date" name="input6" label="Read-only date field" readonly value="2020-09-07" ></lightning-input>
        <lightning-input type="date" name="input7" label="Disabled date field" disabled value="2020-09-07" ></lightning-input>
        <lightning-input type="date" name="input8" label="Date field with min and max values" value="2020-09-07" min="2020-09-05" max="2020-09-22" ></lightning-input>
    </div>
</template>

```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleInputDateTime extends LightningElement {}

```

```html
<template>
    <div class="slds-m-around_medium">
        <h1 class="slds-text-heading_small">Input DateTime Example</h1>
        <p class="slds-text-body_regular">The following examples show various ways to create an input date/time component.</p>
    </div>
    <div>
        <h2>Basic Input Date Time</h2>
        <lightning-input type="datetime" name="input1" label="Enter a date/time value" ></lightning-input>
        <lightning-input type="datetime" name="input2" label="Date Time field with a predefined value" value="2020-09-12T18:13:41Z"></lightning-input>
    </div>

    <div>
        <h2>Advanced Input Date Time</h2>
        <lightning-input type="datetime" name="input3" label="Required Date Time field" required value="2020-09-12T18:13:41Z" ></lightning-input>
        <lightning-input type="datetime" name="input4" label="Disabled Date Time field" disabled value="2020-09-12T18:13:41Z" ></lightning-input>
        <lightning-input type="datetime" name="input5" label="Date Time field with min and max values" value="2020-09-12T18:13:41Z" min="2020-08-03T08:20:44Z" max="2020-09-25T22:33:44Z" ></lightning-input>
    </div>
</template>

```

**Example 6:**

```js
import { LightningElement } from 'lwc';

export default class InputEmail extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An email input field.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="email" label="Email address"></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An email input field with an initial value.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="email" label="Email address" value="alpha@beta.com"></lightning-input>
            <lightning-input type="email" label="Email field without a top-level domain" value="alpha@beta"></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An email input field with an invalid value.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="email" label="Email address" value="alpha-not-valid"></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An email input field with placeholder text.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="email" label="Email address" placeholder="type here..."></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An email input field that is required.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="email" label="Email address" placeholder="type here..." required></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An email input field that is disabled.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="email" label="Email address" placeholder="type here..." disabled></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An email input field that is read-only.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="email" label="Email address" value="tony@starkindustries.com" readonly></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An email input field that supports multiple email addresses.
        </h2>

        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="email" label="Email addresses" value="ceo@example.com, cto@example.com" multiple></lightning-input>
        </div>
    </div>
</template>

```

**Example 7:**

```js
import { LightningElement } from 'lwc';

export default class InputFile extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An input field with a file selector that accepts a single file.
        </h2>

        <!-- Single file -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="file" label="Attachment"></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An input field with a file selector that accepts multiple files.
        </h2>

        <!-- Multiple files -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="file" label="Attachments" multiple></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A required input field with a file selector that accepts a single file.
        </h2>

        <!-- Required -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="file" label="Attachment" required message-when-value-missing="Please upload a file"></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A disabled input field with a file selector. You cannot interact with a disabled field.
        </h2>

        <!-- Disabled -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="file" label="Attachment" disabled></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            An input field with a file selector that accepts a single PNG, JPG, or ZIP file.
        </h2>

        <!-- Single file of restricted type -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="file" label="Attachment" accept="image/png, image/jpg, .zip"></lightning-input>
        </div>
    </div>
</template>

```

**Example 8:**

```js
import { LightningElement } from 'lwc';

export default class InputFileOnChange extends LightningElement {
    filesCount = 0;
    filesList = [];

    handleFilesChange(event) {
        const filesList = event.detail.files;
        this.filesCount = filesList.length;
        this.filesList = filesList;
    }
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            File input field that accepts multiple files. Click the <b>upload files</b> button to add files, the information block below will update as the content changes.
        </h2>

        <!-- Multiple file with change event -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="file" label="Attachment" multiple onchange={handleFilesChange}></lightning-input>
        </div>

        <div class="slds-m-vertical_medium">
            <p>The number of files selected to upload is: <span class="slds-text-heading_small">{filesCount}</span></p>
            <p>The files selected are:</p>
            <ul class="slds-list_dotted">
                <template for:each={filesList} for:item="file">
                    <li key={file.lastModified}>{file.name}</li>
                </template>
            </ul>
        </div>
    </div>
</template>

```

**Example 9:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleInputNumber extends LightningElement {
    amount = 0;

    handleAmountChange(e) {
        this.amount = e.detail.value;
    }
}

```

```html
<template>
    <div class="slds-m-around_medium">
        <h1 class="slds-text-heading_small">Input Number Example</h1>
        <p class="slds-text-body_regular">The following examples show various ways to create an input number component.</p>
    </div>
    <div>
        <h2>Basic Input Number</h2>
        <lightning-input type="number" name="input1" label="Enter a number" ></lightning-input>
        <lightning-input type="number" name="input2" label="Number field with a predefined value" value="12345"></lightning-input>
        <lightning-input type="number" name="input3" label="Number field with placeholder" placeholder="type here..."></lightning-input>
    </div>

    <div>
        <h2>Advanced Input Number</h2>
        <lightning-input type="number" name="input4" readonly value="123" label="Read-only number field" ></lightning-input>
        <lightning-input type="number" name="input5" disabled value="12345" label="Disabled number field" ></lightning-input>
        <lightning-input type="number" name="input6" label="Number field with percentage formatter" value="0.5" formatter="percent" step="0.01"></lightning-input>
        <lightning-input type="number" name="input7" label="Number field with currency formatter" value="123.45" formatter="currency" step="0.01"></lightning-input>
        <lightning-input type="number" name="input8" required value="5" label="Required number field with a maximum value of 99" max="99"></lightning-input>
    </div>

    <div>
        <h2>Live Input Number</h2>
        <lightning-input type="number" name="seven" value={amount} onchange={handleAmountChange} placeholder="type the number of items..." label="Enter a number" ></lightning-input>
        <p>
            Number of Items: {amount}
        </p>
    </div>
</template>

```

**Example 10:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleInputPassword extends LightningElement {
    pattern = '.{6,}';
}

```

```html
<template>
    <div class="slds-m-around_medium">
        <h1 class="slds-text-heading_small">Input Password Example</h1>
        <p class="slds-text-body_regular">The following examples show various ways to create an input password component.</p>
    </div>
    
    <div>
        <h2>Basic Input Password</h2>
        <lightning-input type="password" label="Enter your password" name="input1"  ></lightning-input>
        <lightning-input type="password" label="Password field with predefined value" name="input2" value="pre-filled password"></lightning-input>
        <lightning-input type="password" label="Password field with placeholder" name="input3" placeholder="Enter Password"></lightning-input>
    </div>

    <div>
        <h2>Advanced Input Password</h2>
        <lightning-input type="password" label="Read-only password field" name="input4" readonly value="initial value" ></lightning-input>
        <lightning-input type="password" label="Disabled password field" name="input5" disabled value="initial value" ></lightning-input>
        <lightning-input type="password" label="Required password field" name="input6" required value="initial value" ></lightning-input>
        <lightning-input type="password" label="Required password field with a minimum of 6 characters" name="input7" pattern={pattern} required value="initial value" ></lightning-input>
    </div>
</template>

```

**Example 11:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleInputSearch extends LightningElement {
    queryTerm;

    handleKeyUp(evt) {
        const isEnterKey = evt.keyCode === 13;
        if (isEnterKey) {
            this.queryTerm = evt.target.value;
        }
    }
}

```

```html
<template>
    <div class="slds-m-around_medium">
        <h1 class="slds-text-heading_small">Input Search Example</h1>
        <p class="slds-text-body_regular">The following examples show various ways to create an input search component.</p>
    </div>
    <div onkeyup={handleKeyUp}>
        <lightning-input
            name="enter-search"
            label="Search when user hits the 'enter' key"
            type="search"
        ></lightning-input>
    </div>
    <p if:true={queryTerm}>
        Searched for {queryTerm}!
    </p>
</template>

```

**Example 12:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleInputTelephone extends LightningElement {}

```

```html
<template>
    <div class="slds-m-around_medium">
        <h1 class="slds-text-heading_small">Input Telephone Example</h1>
        <p class="slds-text-body_regular">The following examples show various ways to create an input telephone component.</p>
    </div>
    <div>
        <h2>Basic Input Telephone</h2>
        <lightning-input type="tel" label="Read-only phone field" name="phone1" value="345987345" readonly></lightning-input>
        <lightning-input type="tel" label="Basic phone field" name="phone2" placeholder="areacode-phone"></lightning-input>
        <lightning-input type="tel" label="Phone field with pattern matching" name="phone3" value="343-343-3434" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></lightning-input>
    </div>
</template>

```

**Example 13:**

```js
import { LightningElement } from 'lwc';

export default class InputText extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text"></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field with an initial value.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" value="ACME Inc."></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field with placeholder text.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" placeholder="type here..."></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field that is required.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" placeholder="type here..." required></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field that is disabled.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" placeholder="type here..." disabled></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field that is read-only.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" value="Stark Industries" readonly></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field that requires a minimum of 6 characters.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" placeholder="type here..." minlength="6"></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field that cannot have more than 10 characters.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" placeholder="type here..." maxlength="10"></lightning-input>
        </div>
    </div>
</template>

```

**Example 14:**

```js
import { LightningElement } from 'lwc';

export default class InputTextAdvanced extends LightningElement {
    textValue;

    handleInputFocus(event) {
        // modify parent to properly highlight visually
        const classList = event.target.parentNode.classList;
        classList.add('lgc-highlight');
    }

    handleInputBlur(event) {
        // modify parent to properly remove highlight
        const classList = event.target.parentNode.classList;
        classList.remove('lgc-highlight');
    }

    handleInputChange(event) {
        this.textValue = event.detail.value;
    }
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field that becomes highlighted when focused and returns to default when focus is moved away.
        </h2>

        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" onfocus={handleInputFocus} onblur={handleInputBlur}></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field that live updates a variable.
        </h2>

        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" onchange={handleInputChange}></lightning-input>
        </div>

        <div class="slds-m-vertical_medium">
            <p>The value of the input field is: <span class="slds-text-heading_small">{textValue}</span></p>
        </div>
    </div>

</template>

```

**Example 15:**

```js
import { LightningElement } from 'lwc';

export default class InputTimeAdvanced extends LightningElement {}

```

```html
<template>
    <div class="slds-box">
        <h2 class="header">Advanced Input Time</h2>
        <lightning-input type="time" name="input4" label="Required Time field" required
                         value="18:30:00.000Z"></lightning-input>
        <lightning-input type="time" name="input5" label="Disabled Time field" disabled
                         value="18:30:00.000Z"></lightning-input>
        <lightning-input type="time" name="input6" label="Time field with min and max values" value="18:30:00.000Z"
                         min="10:30:00.000Z" max="22:00:00.000Z"></lightning-input>
    </div>
</template>

```

**Example 16:**

```js
import { LightningElement } from 'lwc';

export default class InputTimeBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-box">
        <h2 class="header">Basic Input Time</h2>
        <lightning-input type="time" name="input1" label="Enter a time"></lightning-input>
        <lightning-input type="time" name="input2" label="Time field with a predefined value"
                         value="18:30:00.000Z"></lightning-input>
        <lightning-input type="time" name="input3" label="Time field with placeholder"
                         placeholder="type here..."></lightning-input>
    </div>
</template>

```

**Example 17:**

```js
import { LightningElement } from 'lwc';

export default class Toggle extends LightningElement {}

```

```html
<template>
    <div class="slds-box">
        <h2 class="header">Toggle</h2>
        <lightning-input type="toggle" label="Basic option" name="input1"></lightning-input>
        <lightning-input type="toggle" label="Required option" name="input2" checked required></lightning-input>
        <lightning-input type="toggle" label="Disabled option" name="input3" checked disabled></lightning-input>
    </div>
</template>

```

**Example 18:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleInputURL extends LightningElement {}

```

```html
<template>
    <div class="slds-m-around_medium">
        <h1 class="slds-text-heading_small">Input URL Example</h1>
        <p class="slds-text-body_regular">The following examples show various ways to create an input URL component.</p>
    </div>
    <div>
        <h2>Basic Input URL</h2>
        <lightning-input type="url" label="Enter a URL" name="input1" ></lightning-input>
        <lightning-input type="url" label="URL field with a predefined value" name="input2" value="http://www.google.com" ></lightning-input>
        <lightning-input type="url" label="URL field with a placeholder" name="input3" placeholder="Enter valid URL here..." ></lightning-input>
    </div>

    <div>
        <h2>Advanced Input URL</h2>
        <lightning-input type="url" label="Read-only URL field" name="input4" readonly value="file://someFile" ></lightning-input>
        <lightning-input type="url" label="Disabled URL field" name="input5" disabled value="www.google.com" ></lightning-input>
        <lightning-input type="url" label="Required URL field with a predefined value" name="input6" required value="www.google.com" ></lightning-input>
        <lightning-input type="url" label="Required URL field with pattern matching" name="input6" pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$" required value="www.google.com" ></lightning-input>
    </div>
</template>

```

---
