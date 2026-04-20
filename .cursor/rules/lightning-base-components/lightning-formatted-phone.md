# lightning-formatted-phone

**What is it?**  
This component displays a read-only phone number as a clickable hyperlink that, when clicked, opens the default VOIP call application on a desktop or initiates a call on mobile devices, with options for different formatting styles and disabling the hyperlink functionality.

**Where would you use it?**
- Imagine you're browsing a website for a local restaurant and you want to make a reservation. The restaurant's phone number is displayed on the website using the <lightning-formatted-phone> component. You can click on the phone number and it will automatically open your default calling application, making it easy for you to call and make a reservation.
- Suppose you're on a website for a tech support company. The company's phone number is displayed using the <lightning-formatted-phone> component. If you're browsing on your mobile device and you encounter a problem, you can simply click on the phone number to call the company's tech support line.
- Imagine you're on a website for a local business. The business's phone number is displayed using the <lightning-formatted-phone> component. However, the business has chosen to disable the hyperlink feature, so you can't click on the number to call. Instead, you can easily see the number and dial it manually on your phone.
- Suppose you're browsing a website for a hotel and you want to make a booking. The hotel's phone number is displayed on the website using the <lightning-formatted-phone> component. You can click on the phone number and it will automatically open your default calling application, making it easy for you to call and make a booking.
- Imagine you're on a website for a car rental company. The company's phone number is displayed using the <lightning-formatted-phone> component. If you're browsing on your mobile device and you need to make a reservation, you can simply click on the phone number to call the company's reservation line.
- Suppose you're on a website for a local clinic. The clinic's phone number is displayed using the <lightning-formatted-phone> component. However, the clinic has chosen to disable the hyperlink feature, so you can't click on the number to call. Instead, you can easily see the number and dial it manually on your phone.

**How do you use it?**
- **value** `string`  
  _Examples:_
    `<lightning-formatted-phone value="4255550155">`
    `<lightning-formatted-phone value="14255550155">`
    `<lightning-formatted-phone value="+14255550155">`
- **disabled** `boolean`  
  _Examples:_
    `<lightning-formatted-phone value="18005551212" disabled>`

**Related Components:**


**Docs:**
---
examples:
    - name: basic
      label: Formatted Phone Number
      description: Formatted phone numbers displayed in several ways.
---

A `lightning-formatted-phone` component displays a read-only representation of
a phone number as a hyperlink using the `tel:` URL scheme. Clicking the phone
number opens the default VOIP call application on a desktop. On mobile
devices, clicking the phone number calls the number.

If your locale is set to English (United States) or English (Canada), a phone number
with 10 or 11 digits that starts with 1 is displayed in the format (999) 999-9999.

Include a "+" sign before the number to display the number in the format +19999999999 instead.

Here are two ways to display (425) 555-0155 as a hyperlink.

```html
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class FormattedPhoneBasic extends LightningElement {}

```

```html
<template>
    <p><lightning-formatted-phone value="+18005551212" ></lightning-formatted-phone></p>
    <p><lightning-formatted-phone value="8005551212"></lightning-formatted-phone></p>
    <p><lightning-formatted-phone value="18005551212"></lightning-formatted-phone></p>
    <p><lightning-formatted-phone value="1333333" ></lightning-formatted-phone></p>
    <p><lightning-formatted-phone value="18005551212" disabled></lightning-formatted-phone></p>
</template>

```

---
