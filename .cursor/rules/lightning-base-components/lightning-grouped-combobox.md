# lightning-grouped-combobox

**What is it?**  
This component is a customizable dropdown menu with autocomplete support, allowing users to select from a list of options that can be dynamically updated based on user input.

**Where would you use it?**
- Imagine you're using a customer relationship management (CRM) system and you need to search for a specific contact. You start typing the contact's name into a search bar. As you type, a dropdown list appears below the search bar, suggesting contacts whose names match what you've typed so far. This is a scenario where the <lightning-grouped-combobox> component might be used.
- Consider a scenario where you're using an online shopping platform and you want to search for a specific product. You start typing the product's name into a search bar. As you type, a dropdown list appears, suggesting products that match your input. The list updates as you continue to type, refining the suggestions based on your input. This is another scenario where the <lightning-grouped-combobox> component could be used.
- Imagine you're using a project management tool and you need to assign a task to a team member. You start typing the team member's name into a field. As you type, a dropdown list appears, suggesting team members whose names match your input. The list updates as you continue to type, refining the suggestions based on your input. This is a scenario where the <lightning-grouped-combobox> component might be used.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-grouped-combobox label='Contact'>`
- **placeholder** `string`  
  _Examples:_
    `<lightning-grouped-combobox placeholder='Search Contacts...'>`
- **input-text** `string`  
  _Examples:_
    `<lightning-grouped-combobox input-text={_inputText}>`
- **items** `object`  
  _Examples:_
    `<lightning-grouped-combobox items={_contactItems}>`
- **variant** `string`  
  _Examples:_
    `<lightning-grouped-combobox variant='label-hidden'>`
    `<lightning-grouped-combobox variant='label-stacked'>`
    `<lightning-grouped-combobox variant='label-inline'>`
- **input-icon-name** `string`  
  _Examples:_
    `<lightning-grouped-combobox input-icon-name='utility:search'>`
- **input-icon-size** `string`  
  _Examples:_
    `<lightning-grouped-combobox input-icon-size='x-small'>`
- **input-icon-alternative-text** `string`  
  _Examples:_
    `<lightning-grouped-combobox input-icon-alternative-text='Search icon'>`
- **input-maxlength** `integer`  
  _Examples:_
    `<lightning-grouped-combobox input-maxlength={50}>`
- **show-activity-indicator** `boolean`  
  _Examples:_
    `<lightning-grouped-combobox show-activity-indicator={_showSpinner}>`
- **show-dropdown-activity-indicator** `boolean`  
  _Examples:_
    `<lightning-grouped-combobox show-dropdown-activity-indicator={true}>`
- **value** `string`  
  _Examples:_
    `<lightning-grouped-combobox value='actionNewContact'>`
- **required** `boolean`  
  _Examples:_
    `<lightning-grouped-combobox required={true}>`
- **disabled** `boolean`  
  _Examples:_
    `<lightning-grouped-combobox disabled={true}>`
- **field-level-help** `string`  
  _Examples:_
    `<lightning-grouped-combobox field-level-help='This is a help text'>`
- **readonly** `boolean`  
  _Examples:_
    `<lightning-grouped-combobox readonly={true}>`
- **validity** `boolean`  
  _Examples:_
    `<lightning-grouped-combobox validity={true}>`
- **pills** `object`  
  _Examples:_
    `<lightning-grouped-combobox pills={_pills}>`
- **input-pill** `object`  
  _Examples:_
    `<lightning-grouped-combobox input-pill={_inputPill}>`
- **ontextinput** `(ev: CustomEvent & { detail: { inputText: string } }) => void`  
  _Examples:_
    `<lightning-grouped-combobox ontextinput={handleContactInput}>`
- **onselect** `(ev: CustomEvent & { detail: { value: string } }) => void`  
  _Examples:_
    `<lightning-grouped-combobox onselect={handleContactSelect}>`

**Related Components:**
- **lightning-base-combobox** (required)
- **lightning-combobox** (optional)
- **lightning-picklist** (optional)
- **lightning-input-address** (optional)
- **lightning-input-field** (optional)

**Docs:**
# lightning-grouped-combobox

> `lightning-grouped-combobox` is internal-only. It's not yet supported for use by customers on the Salesforce platform.

-   [Overview](#overview)
-   [Implementing Autocomplete Behavior](#implementing-autocomplete-behavior)
-   [Updating Dropdown Items](#updating-dropdown-items)
-   [Attributes](#attributes)
-   [Methods](#methods)
-   [Custom Events](#custom-events)
-   [Usage Considerations](#usage-considerations)
-   [Aura Examples](#aura-examples)
-   [LWC Examples](#lwc-examples)

## Overview

`lightning-grouped-combobox` displays dropdown options with icons and autocomplete (typeahead) support. Optionally it supports a filter and pills. It uses `lightning-base-combobox` internally and provides you with full control over the displayed data. You can handle the text input with your own custom behavior.

This component is based on [combobox (grouped options)](https://lightningdesignsystem.com/components/combobox/#Grouped-options), [grouped comboboxes](<https://lightningdesignsystem.com/components/combobox/#Grouped-Comboboxes-(Cross-entity-Polymorphic)>) and [autocomplete combobox](https://lightningdesignsystem.com/components/combobox/#Autocomplete-Combobox) in the Lightning Design System.

...

**Examples:**


---
