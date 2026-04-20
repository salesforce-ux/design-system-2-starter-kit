# lightning-formatted-address

**What is it?**  
This component displays user-specified addresses in a format determined by the user's Salesforce locale, with options to include latitude and longitude, display the address in plain text, or show a static map, providing an interactive experience by linking the address to Google Maps.

**Where would you use it?**
- Imagine you're browsing an online store and you've found a product you love. You want to pick it up in person, so you look for the nearest store location. The website uses the <lightning-formatted-address> component to display the store's address. You can click on the address, and it will open up Google Maps in a new tab, showing you exactly where the store is located.
- Consider a scenario where you're using a real estate website to look for a new home. Each listing on the website uses the <lightning-formatted-address> component to display the property's address. The address is displayed in a format that's familiar to you, based on your location. If you're interested in a property, you can click on the address to view it on Google Maps.
- Suppose you're using a food delivery app to order dinner. When you're checking out, the app uses the <lightning-formatted-address> component to display your delivery address. This ensures that the address is displayed in a format that's easy for you to understand, and it also provides a link to Google Maps, so the delivery driver can easily find your location.
- Imagine you're using a travel booking website to plan your next vacation. The website uses the <lightning-formatted-address> component to display the addresses of hotels, attractions, and restaurants. The addresses are displayed in a format that's familiar to you, and you can click on any address to view it on Google Maps.
- Consider a scenario where you're using a job search website to look for a new job. Each job listing on the website uses the <lightning-formatted-address> component to display the company's address. If you're interested in a job, you can click on the address to view the company's location on Google Maps.
- Suppose you're using a social networking website to plan a meetup with your friends. When you create the event, the website uses the <lightning-formatted-address> component to display the meetup location's address. Your friends can then click on the address to view it on Google Maps.

**How do you use it?**
- **street** `string`  
  _Examples:_
    `<lightning-formatted-address street="1 Market St.">`
    `<lightning-formatted-address street={myStreetValue}>`
- **city** `string`  
  _Examples:_
    `<lightning-formatted-address city="San Francisco">`
    `<lightning-formatted-address city={myCityValue}>`
- **country** `string`  
  _Examples:_
    `<lightning-formatted-address country="US">`
    `<lightning-formatted-address country={myCountryValue}>`
- **province** `string`  
  _Examples:_
    `<lightning-formatted-address province="CA">`
    `<lightning-formatted-address province={myProvinceValue}>`
- **postal-code** `string`  
  _Examples:_
    `<lightning-formatted-address postal-code="94105">`
    `<lightning-formatted-address postal-code={myPostalCodeValue}>`
- **disabled** `boolean`  
  _Examples:_
    `<lightning-formatted-address disabled>`
- **latitude** `string`  
  _Examples:_
    `<lightning-formatted-address latitude="37.792179">`
    `<lightning-formatted-address latitude={myLatitudeValue}>`
- **longitude** `string`  
  _Examples:_
    `<lightning-formatted-address longitude="-122.392735">`
    `<lightning-formatted-address longitude={myLongitudeValue}>`
- **show-static-map** `boolean`  
  _Examples:_
    `<lightning-formatted-address show-static-map>`

**Related Components:**


**Docs:**
---
examples:
    - name: basic
      label: Formatted Address
      description: Displays an address that's linked to Google Maps and an address in plain text.
    - name: latitude
      label: Formatted Address with Latitude/Longitude
      description: Displays an address that includes latitude and longitude.
    - name: customLocale
      label: Formatted Address with Custom Locale
      description: Displays an address in the format of a specific locale.
---

A `lightning-formatted-address` component displays addresses in a format and field order
that's determined by the user's Salesforce locale.

Specify a valid address using attributes for `street`, `city`, `country`, `province`, and
`postal-code`.

This example displays an address.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleFormattedAddressBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-m-vertical_medium">
        <h1 class="slds-text-heading_small">Formatted Address</h1>
        <p class="slds-text-body_regular">This component formats an address and automatically links it to Google Maps.</p>
    </div>

    <lightning-formatted-address
        street="121 Spear St."
        city="San Francisco"
        country="US"
        province="CA"
        postal-code="94105"
    ></lightning-formatted-address>

    <div class="slds-m-vertical_medium">
        <h1 class="slds-text-heading_small">Formatted Address in Plain Text</h1>
        <p class="slds-text-body_regular">This component formats an address but doesn't link to Google Maps.</p>
    </div>

    <lightning-formatted-address
        street="121 Spear St."
        city="San Francisco"
        country="US"
        province="CA"
        postal-code="94105"
        disabled
    ></lightning-formatted-address>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleFormattedAddressCustomLocale extends LightningElement {}

```

```html
<template>
    <h1 class="slds-text-heading_small">Address in Spanish format</h1>

    <lightning-formatted-address
        street="Avenida Concha Espina, Nº 1"
        city="Madrid"
        postal-code="28036"
        country="España"
        locale="es-ES"
    ></lightning-formatted-address>

    <h1 class="slds-text-heading_small">Address in Japanese format</h1>

    <lightning-formatted-address
        street="下連雀1丁目1−83"
        city="三鷹市"
        country="日本"
        province="東京都"
        postal-code="181–0013"
        locale="ja-JP"
    ></lightning-formatted-address>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleFormattedAddressBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-m-vertical_medium">
        <h1 class="slds-text-heading_small">Formatted Address with Coordinates</h1>
        <p class="slds-text-body_regular">This component formats an address, and automatically links it to Google Maps
            using latitude and longitude coordinates for faster map rendering.
        </p>
    </div>

    <lightning-formatted-address
        street="121 Spear St."
        city="San Francisco"
        country="US"
        province="CA"
        postal-code="94105"
        latitude="37.792179"
        longitude="-122.392735"
    ></lightning-formatted-address>
</template>

```

---
