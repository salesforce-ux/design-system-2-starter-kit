# lightning-barcode-scanner

**What is it?**  
This component provides a user-interactive barcode scanning function, which can be customized to support specific barcode types, scanning modes, and scanner sizes, and can be triggered by clicking an icon that can also be customized in size and appearance.

**Where would you use it?**
- Imagine you're at a library and you want to check out a book. The library could use the <lightning-barcode-scanner> component on their website to allow you to scan the barcode on the book, automatically filling in the book's information for the checkout process.
- You're at a grocery store and you want to check the price of an item that isn't labeled. The store could have a kiosk with the <lightning-barcode-scanner> component, allowing you to scan the item's barcode and see its price.
- You're at a warehouse and need to keep track of inventory. The warehouse could use the <lightning-barcode-scanner> component on their inventory management system, allowing you to scan items as they come in or go out, automatically updating the inventory count.
- You're at a concert and have a digital ticket with a barcode. The venue could use the <lightning-barcode-scanner> component on their ticket checking system to scan your ticket, verifying its authenticity and allowing you to enter.
- You're at a retail store and want to learn more about a product. The store could use the <lightning-barcode-scanner> component on their product information kiosk, allowing you to scan the product's barcode and see detailed information about it.
- You're at a hospital and need to check in for your appointment. The hospital could use the <lightning-barcode-scanner> component on their check-in system, allowing you to scan your patient ID card, automatically filling in your information for the check-in process.

**How do you use it?**
- **disabled** `boolean`  
  _Examples:_
    `<lightning-barcode-scanner disabled>`
- **enable-continuous-scan** `boolean`  
  _Examples:_
    `<lightning-barcode-scanner enable-continuous-scan>`
- **scanner-options** `{ barcodeTypes: string[], scannerSize: string }`  
  _Examples:_
    `<lightning-barcode-scanner scanner-options={myScannerOptions}>`
- **icon-size** `string`  
  _Examples:_
    `<lightning-barcode-scanner icon-size='large'>`
- **enabled-alternative-text** `string`  
  _Examples:_
    `<lightning-barcode-scanner enabled-alternative-text='Alt text for the enabled icon'>`
- **disabled-alternative-text** `string`  
  _Examples:_
    `<lightning-barcode-scanner disabled-alternative-text='Alt text for the disabled icon'>`
- **enabled-icon-src** `string`  
  _Examples:_
    `<lightning-barcode-scanner enabled-icon-src='path/to/staticResource/enabled_image'>`
- **disabled-icon-src** `string`  
  _Examples:_
    `<lightning-barcode-scanner disabled-icon-src='path/to/staticResource/disabled_image'>`
- **onscan** `(ev: CustomEvent & { detail: { scannedBarcodes: string[] } }) => void`  
  _Examples:_
    `<lightning-barcode-scanner onscan={handleScan}>`
- **onerror** `(ev: CustomEvent & { detail: { error: object } }) => void`  
  _Examples:_
    `<lightning-barcode-scanner onerror={handleError}>`

**Related Components:**


**Docs:**
The `lightning-barcode-scanner` component embeds a barcode scanning function displayed as an icon, which launches the barcode scanner when the user clicks it. For more information on the the API this component uses, see [Use the BarcodeScanner API](https://developer.salesforce.com/docs/platform/lwc/guide/use-barcodescanner-in-a-lightning-component) in the Lightning Web Components Developer Guide.

```html
<template>
  <lightning-barcode-scanner> </lightning-barcode-scanner>
</template>
```

To disable the barcode scanner, set the `disabled` attribute. The barcode scanner is enabled by default.

```html
<template>
  <lightning-barcode-scanner disabled> </lightning-barcode-scanner>
</template>
```

#### Scanning Modes

Barcode scanning supports both single scan and continuous scan. A single scan component automatically closes after one successful scan, while a continuous scan component remains open. The `lightning-barcode-scanner` component is single scan by default.

...

**Examples:**


---
