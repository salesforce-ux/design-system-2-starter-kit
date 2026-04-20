# lightning-formatted-time

**What is it?**  
This component displays a read-only representation of time in the user's locale format, providing a consistent, locale-specific time display experience.

**Where would you use it?**
- A user could use the <lightning-formatted-time> component on a website that displays international flight schedules. The component would display the departure and arrival times of flights in the user's local time format, making it easier for them to understand the schedule.
- The <lightning-formatted-time> component could be used in an online conference platform. The component would display the start and end times of different sessions in the user's local time format, helping them to plan their participation in the conference.
- A user could use the <lightning-formatted-time> component on a website that provides live sports scores. The component would display the start time of each game in the user's local time format, allowing them to keep track of when they need to tune in.
- The <lightning-formatted-time> component could be used in an online project management tool. The component would display the due time for each task in the user's local time format, helping them to manage their workload and meet their deadlines.
- A user could use the <lightning-formatted-time> component on a website that provides weather forecasts. The component would display the time at which each forecast is valid in the user's local time format, helping them to plan their activities based on the weather.

**How do you use it?**
- **value** `string`  
  _Examples:_
    `<lightning-formatted-time value="22:12:30.999">`

**Related Components:**


**Docs:**
---
examples:
    - name: basic
      label: Formatted Time
      description: Time value displayed in the user's locale format. Include a Z suffix in the time value to indicate Universal Time.
---

A `lightning-formatted-time` component displays a read-only representation of
time in the user's locale format. A valid ISO8601 formatted time string must
be used.

An ISO8601 formatted time string matches one of the following patterns.

-   HH:mm
-   HH:mm:ss
-   HH:mm:ss.SSS

`HH` is the number of hours that have passed since midnight, `mm` is the
number of minutes that have passed since the start of the hour, `ss` is
the number of seconds since the start of the minute, and `SSS` is the number
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class FormattedTimeBasic extends LightningElement {}

```

```html
<template>
    <p>Simple Time value: <lightning-formatted-time value="22:12:30.999"></lightning-formatted-time></p>
    <p>Time value with Z suffix: <lightning-formatted-time value="22:12:30.999Z"></lightning-formatted-time></p>
</template>

```

---
