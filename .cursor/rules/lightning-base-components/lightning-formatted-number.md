# lightning-formatted-number

**What is it?**  
This component is used to display formatted numbers for decimals, currency, and percentages, providing an end user with a customizable, locale-specific numerical display.

**Where would you use it?**
- Imagine you're running an online store and you want to display the price of your products in a clear and consistent manner. The <lightning-formatted-number> component can be used to format the prices, ensuring that they always display with two decimal places, regardless of the actual price value. This would make the prices easier to read and compare for your customers.
- Suppose you're creating a financial report for your company and you need to display various percentages, such as profit margins or growth rates. The <lightning-formatted-number> component can be used to format these percentages, ensuring that they always display with a consistent number of decimal places. This would make the report easier to read and understand for your colleagues.
- Imagine you're developing a scientific application and you need to display various measurements with a high degree of precision. The <lightning-formatted-number> component can be used to format these measurements, ensuring that they always display with the correct number of significant digits. This would make the measurements more accurate and reliable for your users.

**How do you use it?**
- **value** `string`  
  _Examples:_
    `<lightning-formatted-number value="1000.0">`
    `<lightning-formatted-number value="1234.5678">`
    `<lightning-formatted-number value="5000">`
    `<lightning-formatted-number value="0.503">`
- **minimum-significant-digits** `string`  
  _Examples:_
    `<lightning-formatted-number value="1000.0" minimum-significant-digits="5">`
- **minimum-fraction-digits** `string`  
  _Examples:_
    `<lightning-formatted-number value="1234.5678" minimum-fraction-digits="4">`
    `<lightning-formatted-number value="4000" format-style="currency" currency-code="JPY" minimum-fraction-digits="0">`
    `<lightning-formatted-number value="500" format-style="currency" currency-code="KWD" minimum-fraction-digits="3">`
- **maximum-fraction-digits** `string`  
  _Examples:_
    `<lightning-formatted-number value="0.503" format-style="percent" maximum-fraction-digits="1">`
    `<lightning-formatted-number value="0.503" format-style="percent-fixed" maximum-fraction-digits="3">`
- **format-style** `string`  
  _Examples:_
    `<lightning-formatted-number value="5000" format-style="currency" currency-code="USD">`
    `<lightning-formatted-number value="0.503" format-style="percent">`
    `<lightning-formatted-number value="0.503" format-style="percent-fixed">`
- **currency-code** `string`  
  _Examples:_
    `<lightning-formatted-number value="5000" format-style="currency" currency-code="USD">`
    `<lightning-formatted-number value="4000" format-style="currency" currency-code="JPY" minimum-fraction-digits="0">`
    `<lightning-formatted-number value="500" format-style="currency" currency-code="KWD" minimum-fraction-digits="3">`

**Related Components:**


**Docs:**
---
examples:
    - name: decimal
      label: Decimal Formatting
      description: Decimal numbers default to 3 decimal places. You can change the integer and fraction portions of the decimal number display with several attributes.
    - name: currency
      label: Currency Formatting
      description: Currency numbers default to 2 decimal places. You can change the integer and fraction portions of the currency number display with several attributes. You can change the currency code using the currency-code attribute.
    - name: percent
      label: Percent Formatting
      description: Percentages default to 0 decimal places. You can change the integer and fraction portions of the currency number display with several attributes.
---

A `lightning-formatted-number` component displays formatted numbers for
decimals, currency, and percentages. Use `format-style` to specify the
number style. This component uses the Intl.NumberFormat
JavaScript object to format numerical values.

The locale set in your Salesforce user
settings determines where to display spaces, commas, and periods in numbers, and the currency
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class FormattedNumberCurrency extends LightningElement {}

```

```html
<template>
    <p><lightning-formatted-number value="12.34" format-style="currency" currency-code="USD"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="12.34" format-style="currency" currency-code="USD" currency-display-as="code"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="12.34" format-style="currency" currency-code="USD" currency-display-as="name"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="12.34" format-style="currency" currency-code="USD" currency-display-as="symbol"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="12.34" format-style="currency" currency-code="EUR"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="12.34" format-style="currency" currency-code="EUR" currency-display-as="name"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="12.34" format-style="currency" currency-code="CNY"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="123456789012345" format-style="currency" currency-code="EUR" minimum-fraction-digits="2" maximum-fraction-digits="2"></lightning-formatted-number></p>
</template>
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class FormattedNumberDecimal extends LightningElement {}

```

```html
<template>
    <p><lightning-formatted-number value="1234.5678"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="1234.5678" maximum-fraction-digits="2"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="12.34" format-style="decimal" minimum-integer-digits="5"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="12.34" format-style="decimal" minimum-fraction-digits="5"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="12.34" format-style="decimal" minimum-significant-digits="5"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="123456789.123456789" minimum-fraction-digits="9"></lightning-formatted-number></p>
</template>
```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class FormattedNumberPercent extends LightningElement {}

```

```html
<template>
    <p><lightning-formatted-number value="1" format-style="percent"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="0.5" format-style="percent"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="0.1234" format-style="percent"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="0.1234" format-style="percent" maximum-fraction-digits="3"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="0.1234" format-style="percent" maximum-fraction-digits="1"></lightning-formatted-number></p>
    <p><lightning-formatted-number value="2.3" format-style="percent"></lightning-formatted-number></p>
</template>
```

---
