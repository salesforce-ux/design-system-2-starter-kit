# lightning-picklist

**What is it?**  
This component is a versatile selection tool that presents a combobox for single selections and a dual listbox for multiple selections, providing a user-friendly interface for choosing from a list of options.

**Where would you use it?**
- Imagine you're using a job application website. When filling out your profile, you're asked to select your highest level of education from a dropdown menu. This menu, which could be a <lightning-picklist> component, provides options like 'High School', 'Bachelor's Degree', 'Master's Degree', and 'PhD'.
- On a travel booking website, you're looking to book a flight. You need to select your departure city from a dropdown menu. This menu, which could be a <lightning-picklist> component, provides options like 'New York', 'Los Angeles', 'Chicago', and 'Houston'.
- You're using a music streaming service and want to create a new playlist. You need to select the genres for your playlist from a list. This list, which could be a <lightning-picklist> component with multiple selection enabled, provides options like 'Pop', 'Rock', 'Country', 'Jazz', and 'Classical'.
- On an e-commerce website, you're looking to buy a new laptop. You need to select the specifications for your laptop from a list. This list, which could be a <lightning-picklist> component with multiple selection enabled, provides options like '8GB RAM', '16GB RAM', '128GB SSD', '256GB SSD', and '1TB HDD'.
- You're using a food delivery app and want to order a pizza. You need to select the toppings for your pizza from a list. This list, which could be a <lightning-picklist> component with multiple selection enabled, provides options like 'Pepperoni', 'Mushrooms', 'Onions', 'Sausage', 'Bacon', and 'Extra Cheese'.
- On a social media platform, you're updating your profile. You need to select your interests from a list. This list, which could be a <lightning-picklist> component with multiple selection enabled, provides options like 'Music', 'Movies', 'Sports', 'Books', 'Travel', and 'Photography'.

**How do you use it?**
- **autocomplete** `string`  
  _Examples:_
    `<lightning-picklist autocomplete='on'>`
- **disabled** `boolean`  
  _Examples:_
    `<lightning-picklist disabled>`
    `<lightning-picklist disabled={isDisabled}>`
- **field-level-help** `string`  
  _Examples:_
    `<lightning-picklist field-level-help='This is a help text'>`
    `<lightning-picklist field-level-help={helpText}>`
- **label** `string`  
  _Examples:_
    `<lightning-picklist label='Picklist Label'>`
    `<lightning-picklist label={picklistLabel}>`
- **multiple** `boolean`  
  _Examples:_
    `<lightning-picklist multiple>`
    `<lightning-picklist multiple={isMultiple}>`
- **name** `string`  
  _Examples:_
    `<lightning-picklist name='picklistName'>`
    `<lightning-picklist name={picklistName}>`
- **options** `{ label: string, value: string }[]`  
  _Examples:_
    `<lightning-picklist options={picklistOptions}>`
- **placeholder** `string`  
  _Examples:_
    `<lightning-picklist placeholder='Select an option'>`
    `<lightning-picklist placeholder={placeholderText}>`
- **required** `boolean`  
  _Examples:_
    `<lightning-picklist required>`
    `<lightning-picklist required={isRequired}>`
- **size** `number`  
  _Examples:_
    `<lightning-picklist size='5'>`
    `<lightning-picklist size={picklistSize}>`
- **show-activity-indicator** `boolean`  
  _Examples:_
    `<lightning-picklist show-activity-indicator>`
    `<lightning-picklist show-activity-indicator={showIndicator}>`
- **validity** `object`  
  _Examples:_
    `<lightning-picklist validity={validityObject}>`
- **value** `string`  
  _Examples:_
    `<lightning-picklist value='option1'>`
    `<lightning-picklist value={picklistValue}>`
- **variant** `string`  
  _Examples:_
    `<lightning-picklist variant='label-inline'>`
    `<lightning-picklist variant={picklistVariant}>`
- **onchange** `(ev: CustomEvent & { detail: { value: string } }) => void`  
  _Examples:_
    `<lightning-picklist onchange={handleChange}>`
- **onopen** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-picklist onopen={handleOpen}>`

**Related Components:**
- **lightning-combobox** (optional)
- **lightning-dual-listbox** (optional)
- **lightning-grouped-combobox** (optional)
- **lightning-grouped-mobile-combobox** (optional)
- **lightning-input-address** (optional)
- **lightning-input-field** (optional)

**Docs:**
# lightning-picklist

> `lightning-picklist` is internal-only. It's not yet supported for use by customers on the Salesforce platform.

-   [Overview](#overview)
-   [Single Selection](#single-selection)
-   [Multiple Selection](#multiple-selection)
-   [Component Attributes](#component-attributes)
-   [Option Attributes](#option-attributes)
-   [Methods](#methods)
-   [Custom Events](#custom-events)
-   [Usage Considerations](#usage-considerations)

## Overview

`lightning-picklist` presents a [combobox](https://developer.salesforce.com/docs/component-library/bundle/lightning-combobox/example) for single selection and a [dual listbox](<(https://developer.salesforce.com/docs/component-library/bundle/lightning-dual-listbox/example)>) for multiple selection. On mobile screens, `lightning-picklist` presents a native select component.

`lightning-picklist` is based on [picklist](https://lightningdesignsystem.com/components/picklist) and the [dueling picklist](https://lightningdesignsystem.com/components/picklist) blueprints in the Lightning Design System.

## Single Selection
...

**Examples:**


---
