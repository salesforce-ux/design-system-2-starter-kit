# lightning-textarea

**What is it?**  
This component is a customizable text input field that supports multi-line text, input validation, programmable text insertion, autocomplete, and accessibility features, providing an interactive user experience for entering and managing text content.

**Where would you use it?**
- A <lightning-textarea> component could be used in a customer feedback form on a company's website. The form might ask the customer to describe their experience with the company's product or service. The <lightning-textarea> would provide a space for the customer to type out their thoughts and experiences in detail.
- A <lightning-textarea> component could be used in a blog post creation tool. The author of the blog post would use the <lightning-textarea> to write out their post. The component could be set to have a maximum character limit to ensure the post doesn't get too long.
- A <lightning-textarea> component could be used in a job application form. The form might ask the applicant to describe their previous work experience. The <lightning-textarea> would provide a space for the applicant to type out their work history in detail.
- A <lightning-textarea> component could be used in a social media platform. Users could use the <lightning-textarea> to write out their posts or comments. The component could be set to have a maximum character limit to ensure the posts or comments don't get too long.
- A <lightning-textarea> component could be used in an email client. The user would use the <lightning-textarea> to write out the body of their email. The component could be set to have a maximum character limit to ensure the email doesn't get too long.
- A <lightning-textarea> component could be used in a note-taking app. The user would use the <lightning-textarea> to write out their notes. The component could be set to have a maximum character limit to ensure the notes don't get too long.

**How do you use it?**
- **value** `string`  
  _Examples:_
    `<lightning-textarea value='initial value'>`
    `<lightning-textarea value={myValue}>`
- **label** `string`  
  _Examples:_
    `<lightning-textarea label='What are you thinking about?'>`
    `<lightning-textarea label={myLabel}>`
- **max-length** `number`  
  _Examples:_
    `<lightning-textarea max-length='300'>`
    `<lightning-textarea max-length={maxLength}>`
- **onchange** `(ev: CustomEvent & { detail: { value: string } }) => void`  
  _Examples:_
    `<lightning-textarea onchange={handleChange}>`
- **minlength** `number`  
  _Examples:_
    `<lightning-textarea minlength='10'>`
    `<lightning-textarea minlength={minLength}>`
- **required** `boolean`  
  _Examples:_
    `<lightning-textarea required>`
    `<lightning-textarea required={isRequired}>`
- **message-when-value-missing** `string`  
  _Examples:_
    `<lightning-textarea message-when-value-missing='This field is required.'>`
    `<lightning-textarea message-when-value-missing={missingMessage}>`
- **message-when-bad-input** `string`  
  _Examples:_
    `<lightning-textarea message-when-bad-input='Invalid input.'>`
    `<lightning-textarea message-when-bad-input={badInputMessage}>`
- **message-when-too-long** `string`  
  _Examples:_
    `<lightning-textarea message-when-too-long='Input is too long.'>`
    `<lightning-textarea message-when-too-long={tooLongMessage}>`
- **message-when-too-short** `string`  
  _Examples:_
    `<lightning-textarea message-when-too-short='Input is too short.'>`
    `<lightning-textarea message-when-too-short={tooShortMessage}>`
- **autocomplete** `string`  
  _Examples:_
    `<lightning-textarea autocomplete='on'>`
    `<lightning-textarea autocomplete={autoComplete}>`
- **class** `string`  
  _Examples:_
    `<lightning-textarea class='slds-p-top_small'>`
    `<lightning-textarea class={myClass}>`

**Related Components:**
- **lightning-input** (optional)
- **lightning-button** (optional)

**Docs:**
---
examples:
    - name: various
      label: Textarea
      description: A textarea field can hold an unlimited number of characters or a maximum number of character specified by the max-length attribute. If disabled, the field is grayed out and you can't interact with it. A required textarea field displays an error if you don't enter any input after first interaction.
---

A `lightning-textarea` component creates an HTML `textarea` element for
entering multi-line text input. A text area holds an unlimited number of
characters.

To apply a custom width for the text area, use the `class` attribute. To set the
input for the text area, set its value using the `value` attribute. Setting
this value overwrites any initial value that's provided.

The following example creates a text area with a maximum length of 300
characters.

```html
<template>
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleTextareaVarious extends LightningElement {}

```

```html
<template>
    <div class="slds-m-vertical_medium">
        <h1 class="slds-text-heading_small">Various Textarea Examples</h1>
        <p class="slds-text-body_regular">The following examples show various ways to create a textarea component.</p>
    </div>

    <div class="row">
        <h2 class="header">Basic Examples</h2>
        <lightning-textarea name="input1" label="Enter some text" ></lightning-textarea>
        <lightning-textarea name="input2" label="Textarea field with a predefined value" value="initial value"></lightning-textarea>
        <lightning-textarea name="input3" label="Textarea field with a placeholder" placeholder="type here..."></lightning-textarea>
    </div>

    <div class="row">
        <h2 class="header">Advanced Examples</h2>
        <lightning-textarea name="input4" readonly value="initial value" label="Read-only textarea field" ></lightning-textarea>
        <lightning-textarea name="input5" disabled value="initial value" label="Disabled textarea field" ></lightning-textarea>
        <lightning-textarea name="input6" required value="initial value" label="Required textarea field with a maximum length of 60 characters" maxlength="60" ></lightning-textarea>
        <lightning-textarea name="input7" required value="" placeholder="compose your tweet" label="Required textarea field with a maximum length of 140 characters" maxlength="140" message-when-too-long="A maximum of 140 characters are allowed in a tweet." message-when-value-missing="An empty tweet cannot be posted." ></lightning-textarea>
    </div>

    <div class="row">
        <h2 class="header">Textarea with aria-describedby example</h2>
        <div class="aria-describedby slds-box slds-m-around__large">
            <h3>Example of textarea aria-describedby with multiple descriptions rendered before textarea in reverse order</h3>
            <span class="desc-1" id="desc-1">Description One</span>
            <span class="desc-2" id="desc-2">Description Two</span>
            <lightning-textarea label="Enter some text" aria-describedby="desc-2 desc-1"></lightning-textarea>
        </div>
        <h2 class="header">Textarea with aria-labelledby example</h2>
        <div class="aria-describedby-later slds-box slds-m-around__large">
            <h3>Example of textarea aria-labelledby with multiple descriptions rendered after textarea in reverse order</h3>
            <lightning-textarea label="Enter some text" aria-labelledby="desc-4 desc-3"></lightning-textarea>
            <span class="desc-3" id="desc-3">Description Three</span>
            <span class="desc-4" id="desc-4">Description Four</span>
        </div>
    </div>
</template>

```

---
