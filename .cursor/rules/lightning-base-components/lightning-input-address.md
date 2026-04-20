# lightning-input-address

**What is it?**  
This component is a compound field that allows users to input an address, with options for prepopulating fields, marking fields as required, and supporting predefined lists of states and countries, providing an interactive and customizable user experience.

**Where would you use it?**
- A user could use the <lightning-input-address> component when filling out a form to register for a new account on a website. The component would allow the user to input their street, city, province, country, and postal code. The website could then use this information to send the user physical mail, such as a welcome package or promotional materials.
- A user could use the <lightning-input-address> component when checking out from an online store. The component would allow the user to input their shipping address, which the store would then use to send the user their purchased items. The component could also be used to input a billing address, which the store would use for payment verification purposes.
- A user could use the <lightning-input-address> component when signing up for a service that requires a physical location, such as a food delivery service. The component would allow the user to input their address, which the service would then use to determine if they are within the delivery area and to send the user their orders.
- A user could use the <lightning-input-address> component when filling out a form to apply for a job. The component would allow the user to input their address, which the employer could then use to send the user important documents or to determine if the user lives within a reasonable commuting distance.
- A user could use the <lightning-input-address> component when registering for a local event or activity. The component would allow the user to input their address, which the event organizers could then use to send the user tickets or other necessary materials, or to verify that the user is eligible to participate based on their location.
- A user could use the <lightning-input-address> component when filling out a form to request information from a university or other educational institution. The component would allow the user to input their address, which the institution could then use to send the user brochures, application materials, or other requested information.

**How do you use it?**
- **address-label** `string`  
  _Examples:_
    `<lightning-input-address address-label='Address'>`
    `<lightning-input-address address-label={addressLabel}>`
- **street-label** `string`  
  _Examples:_
    `<lightning-input-address street-label='Street'>`
    `<lightning-input-address street-label={streetLabel}>`
- **city-label** `string`  
  _Examples:_
    `<lightning-input-address city-label='City'>`
    `<lightning-input-address city-label={cityLabel}>`
- **country-label** `string`  
  _Examples:_
    `<lightning-input-address country-label='Country'>`
    `<lightning-input-address country-label={countryLabel}>`
- **province-label** `string`  
  _Examples:_
    `<lightning-input-address province-label='Province'>`
    `<lightning-input-address province-label={provinceLabel}>`
- **postal-code-label** `string`  
  _Examples:_
    `<lightning-input-address postal-code-label='PostalCode'>`
    `<lightning-input-address postal-code-label={postalCodeLabel}>`
- **street** `string`  
  _Examples:_
    `<lightning-input-address street='1 Market St.'>`
    `<lightning-input-address street={street}>`
- **city** `string`  
  _Examples:_
    `<lightning-input-address city='San Francisco'>`
    `<lightning-input-address city={city}>`
- **country** `string`  
  _Examples:_
    `<lightning-input-address country='US'>`
    `<lightning-input-address country={country}>`
- **province** `string`  
  _Examples:_
    `<lightning-input-address province='CA'>`
    `<lightning-input-address province={province}>`
- **postal-code** `string`  
  _Examples:_
    `<lightning-input-address postal-code='94105'>`
    `<lightning-input-address postal-code={postalCode}>`
- **field-level-help** `string`  
  _Examples:_
    `<lightning-input-address field-level-help='Enter your billing address'>`
    `<lightning-input-address field-level-help={fieldLevelHelp}>`
- **onchange** `(ev: CustomEvent & { detail: { street: string, city: string, province: string, country: string, postalCode: string, validity: object } }) => void`  
  _Examples:_
    `<lightning-input-address onchange={handleChange}>`
- **country-options** `{ label: string, value: string }[]`  
  _Examples:_
    `<lightning-input-address country-options={getCountryOptions}>`
- **province-options** `{ label: string, value: string }[]`  
  _Examples:_
    `<lightning-input-address province-options={getProvinceOptions}>`
- **required** `boolean`  
  _Examples:_
    `<lightning-input-address required>`
    `<lightning-input-address required={isRequired}>`
- **show-address-lookup** `boolean`  
  _Examples:_
    `<lightning-input-address show-address-lookup>`
    `<lightning-input-address show-address-lookup={showAddressLookup}>`
- **disabled** `boolean`  
  _Examples:_
    `<lightning-input-address disabled>`
    `<lightning-input-address disabled={isDisabled}>`
- **country-disabled** `boolean`  
  _Examples:_
    `<lightning-input-address country-disabled>`
    `<lightning-input-address country-disabled={isCountryDisabled}>`
- **variant** `string`  
  _Examples:_
    `<lightning-input-address variant='label-hidden'>`
    `<lightning-input-address variant={variantType}>`
- **class** `string`  
  _Examples:_
    `<lightning-input-address class='slds-p-top_small'>`
    `<lightning-input-address class={className}>`
- **locale** `string`  
  _Examples:_
    `<lightning-input-address locale='en-US'>`
    `<lightning-input-address locale={locale}>`
- **address-lookup-placeholder** `string`  
  _Examples:_
    `<lightning-input-address address-lookup-placeholder='Search Address'>`
    `<lightning-input-address address-lookup-placeholder={addressLookupPlaceholder}>`
- **street-placeholder** `string`  
  _Examples:_
    `<lightning-input-address street-placeholder='Enter Street'>`
    `<lightning-input-address street-placeholder={streetPlaceholder}>`
- **city-placeholder** `string`  
  _Examples:_
    `<lightning-input-address city-placeholder='Enter City'>`
    `<lightning-input-address city-placeholder={cityPlaceholder}>`
- **province-placeholder** `string`  
  _Examples:_
    `<lightning-input-address province-placeholder='Enter Province'>`
    `<lightning-input-address province-placeholder={provincePlaceholder}>`
- **country-placeholder** `string`  
  _Examples:_
    `<lightning-input-address country-placeholder='Enter Country'>`
    `<lightning-input-address country-placeholder={countryPlaceholder}>`
- **postal-code-placeholder** `string`  
  _Examples:_
    `<lightning-input-address postal-code-placeholder='Enter Postal Code'>`
    `<lightning-input-address postal-code-placeholder={postalCodePlaceholder}>`

**Related Components:**
- **lightning-button** (optional)
- **lightning-record-form** (optional)
- **lightning-record-view-form** (optional)
- **lightning-record-edit-form** (optional)

**Docs:**
---
examples:
    - name: base
      label: Basic Address Input
      description: Address fields can be prepopulated and marked as required.
    - name: stateAndCountryPicklists
      label: Address With State and Country Picklists
      description: Address fields support predefined lists of states and countries.
    - name: customLocale
      label: Address With Custom Locale
      description: Address input fields ordered depending on custom locale value.
---

A `lightning-input-address` component creates a compound field that includes the following constituent fields.

-   Street
-   City
-   Province
-   Country
-   Postal code
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class InputAddressBase extends LightningElement {}

```

```html
<template>
    <lightning-input-address
        address-label="Address"
        street-label="Street"
        city-label="City"
        country-label="Country"
        province-label="Province"
        postal-code-label="PostalCode"
        street="121 Spear St."
        city="San Francisco"
        country="US"
        province="CA"
        postal-code="94105"
        required
        field-level-help="Help Text for inputAddress field" ></lightning-input-address>
</template>
    
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class InputAddressCustomLocale extends LightningElement {}

```

```html
<template>
    <lightning-input-address
        address-label="Address"
        street-label="Street"
        city-label="City"
        country-label="Country"
        province-label="Prefecture"
        postal-code-label="Postal Code"
        locale="ja-JP"
        field-level-help="Help Text for input address field" >
    </lightning-input-address>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class InputAddressBase extends LightningElement {
    address = {
        street: '121 Spear St.',
        city: 'San Francisco',
        province: 'CA',
        postalCode: '94105',
        country: 'US',
    };

    _country = 'US';

    countryProvinceMap = {
        US: [
            { label: 'California', value: 'CA' },
            { label: 'Texas', value: 'TX' },
            { label: 'Washington', value: 'WA' },
        ],
        CN: [
            { label: 'GuangDong', value: 'GD' },
            { label: 'GuangXi', value: 'GX' },
            { label: 'Sichuan', value: 'SC' },
        ],
        VA: [],
    };

    countryOptions = [
        { label: 'United States', value: 'US' },
        { label: 'China', value: 'CN' },
        { label: 'Vatican', value: 'VA' },
    ];

    get getProvinceOptions() {
        return this.countryProvinceMap[this._country];
    }
    get getCountryOptions() {
        return this.countryOptions;
    }

    handleChange(event) {
        this._country = event.detail.country;
    }
}

```

```html
<template>
    <lightning-input-address
        address-label="Address"
        street-label="Street"
        city-label="City"
        country-label="Country"
        province-label="Province"
        postal-code-label="PostalCode"
        street={address.street}
        city={address.city}
        country={address.country}
        province={address.province}
        postal-code={address.postalCode}
        field-level-help="Help Text for inputAddress field" 
        country-options={getCountryOptions}
        province-options={getProvinceOptions}
        onchange={handleChange} ></lightning-input-address>
</template>

```

---
