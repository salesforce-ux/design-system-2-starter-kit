# lightning-formatted-date-time

**What is it?**  
This component is designed to display date and time in a formatted manner, providing a user-friendly experience by adapting to the user's locale and allowing customization of the date and time display.

**Where would you use it?**
- Imagine you're using a project management tool that uses Salesforce. The <lightning-formatted-date-time> component could be used to display the due dates for each task in your project. The dates would be formatted according to your locale, so they would look familiar and easy to understand.
- Consider a global company that has employees in different time zones. The <lightning-formatted-date-time> component could be used in the company's internal system to display meeting times. Each employee would see the meeting time in their own time zone, avoiding confusion.
- Suppose you're using a fitness app that tracks your workouts. The <lightning-formatted-date-time> component could be used to display the date and time of each workout. This would help you keep track of your workout schedule and see your progress over time.

**How do you use it?**
- **value** `string | number | Date`  
  _Examples:_
    `<lightning-formatted-date-time value="1547250828000">`
    `<lightning-formatted-date-time value={dateValue}>`
- **year** `string`  
  _Examples:_
    `<lightning-formatted-date-time value="1547250828000" year="2-digit">`
    `<lightning-formatted-date-time value={dateValue} year="numeric">`
- **month** `string`  
  _Examples:_
    `<lightning-formatted-date-time value="1547250828000" month="short">`
    `<lightning-formatted-date-time value={dateValue} month="numeric">`
- **day** `string`  
  _Examples:_
    `<lightning-formatted-date-time value="1547250828000" day="2-digit">`
    `<lightning-formatted-date-time value={dateValue} day="numeric">`
- **weekday** `string`  
  _Examples:_
    `<lightning-formatted-date-time value="1547250828000" weekday="long">`
- **hour** `string`  
  _Examples:_
    `<lightning-formatted-date-time value="1547250828000" hour="2-digit">`
    `<lightning-formatted-date-time value={dateValue} hour="numeric">`
- **minute** `string`  
  _Examples:_
    `<lightning-formatted-date-time value="1547250828000" minute="2-digit">`
    `<lightning-formatted-date-time value={dateValue} minute="numeric">`
- **time-zone-name** `string`  
  _Examples:_
    `<lightning-formatted-date-time value="1547250828000" time-zone-name="short">`
    `<lightning-formatted-date-time value={dateValue} time-zone-name="long">`
- **time-zone** `string`  
  _Examples:_
    `<lightning-formatted-date-time value="1547250828000" time-zone="UTC">`
    `<lightning-formatted-date-time value={dateValue} time-zone="America/New_York">`
- **hour12** `boolean`  
  _Examples:_
    `<lightning-formatted-date-time value="1547250828000" hour12={ampm}>`

**Related Components:**


**Docs:**
---
examples:
    - name: date
      label: Date Formatting
      description: Several ways to display formatted dates.
    - name: time
      label: Time Formatting
      description: Various ways to format time.
    - name: datetime
      label: Date and Time Formatting
      description: Use a combination of the year, month, day, hour, and minute attributes, among others, to customize date and time.
---

A `lightning-formatted-date-time` component displays formatted date and time.
This component uses the Intl.DateTimeFormat JavaScript object to format date
values. The locale set in the Salesforce user preferences determines the
default formatting. The following input values are supported.

-   Date object
-   ISO8601 formatted string
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class FormattedDateTimeDate extends LightningElement {}

```

```html
<template>
    <div class="slds-box">
        <h2 class="header">Date Formatting</h2>
        <p><lightning-formatted-date-time value="1547250828000"></lightning-formatted-date-time></p>
        <p><lightning-formatted-date-time value="1547250828000" year="2-digit" month="short" day="2-digit" weekday="narrow"></lightning-formatted-date-time></p>
        <p><lightning-formatted-date-time value="1547250828000" year="2-digit" month="short" day="2-digit" weekday="long"></lightning-formatted-date-time></p>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class FormattedDateTimeDateTime extends LightningElement {
    ampm = false;
}

```

```html
<template>
    <div class="slds-box">
        <h2 class="header">Date and Time Formatting</h2>
        <p><lightning-formatted-date-time value="1547250828000" year="2-digit" month="short" day="2-digit" hour="numeric"
                                       weekday="long" era="short"></lightning-formatted-date-time></p>
        <p><lightning-formatted-date-time value="1547250828000" year="numeric" month="numeric" day="numeric" hour="2-digit"
                                        minute="2-digit" time-zone-name="short"></lightning-formatted-date-time></p>
        <p><lightning-formatted-date-time value="1547250828000" year="numeric" month="numeric" day="numeric" hour="2-digit"
                                        minute="2-digit" time-zone="UTC" time-zone-name="short" hour12={ampm}></lightning-formatted-date-time></p>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class FormattedDateTimeTime extends LightningElement {
    ampm = false;
}

```

```html
<template>
    <div class="slds-box">
        <h2 class="header">Time Formatting</h2>
        <p><lightning-formatted-date-time value="1547250828000" hour="numeric"></lightning-formatted-date-time></p>
        <p><lightning-formatted-date-time value="1547250828000" hour="2-digit" second="2-digit"></lightning-formatted-date-time></p>
        <p><lightning-formatted-date-time value="1547250828000" hour="2-digit" minute="2-digit" time-zone="UTC"
                                        time-zone-name="short"></lightning-formatted-date-time></p>
        <p><lightning-formatted-date-time value="1547250828000" hour="2-digit" minute="2-digit" second="2-digit" hour12={ampm}
                                        time-zone-name="long"></lightning-formatted-date-time></p>
    </div>
</template>

```

---
