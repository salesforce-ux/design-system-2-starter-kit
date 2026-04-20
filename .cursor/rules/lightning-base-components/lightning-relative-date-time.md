# lightning-relative-date-time

**What is it?**  
This component displays the relative time between the current time and a provided date/time, formatted according to the user's locale, providing an intuitive understanding of time passed or time remaining.

**Where would you use it?**
- Imagine you're using a project management tool that uses the <lightning-relative-date-time> component. When you look at a task, instead of seeing the exact date and time it was created, you see '2 hours ago'. This gives you a quick, easy-to-understand idea of how old the task is without having to calculate it yourself.
- You're using a social media platform that uses the <lightning-relative-date-time> component. When you look at a post, you see '5 minutes ago' instead of the exact time the post was made. This makes it easier for you to understand how recent the post is.
- You're using a messaging app that uses the <lightning-relative-date-time> component. When you look at a message, you see 'a few seconds ago' instead of the exact time the message was sent. This gives you a clear idea of how recent the message is without having to check the exact time.
- You're using a news website that uses the <lightning-relative-date-time> component. When you look at an article, you see '2 days ago' instead of the exact date the article was published. This helps you quickly understand how recent the news is.
- You're using a forum that uses the <lightning-relative-date-time> component. When you look at a comment, you see 'in 7 months' instead of the exact date the comment will be archived. This gives you a clear idea of how much longer the comment will be available.
- You're using a calendar app that uses the <lightning-relative-date-time> component. When you look at an event, you see 'in 5 years' instead of the exact date the event will occur. This helps you understand how far in the future the event is.

**How do you use it?**
- **value** `Date | number`  
  _Examples:_
    `<lightning-relative-date-time value={past}>`
    `<lightning-relative-date-time value={future}>`
    `<lightning-relative-date-time value={Date.now()}>`

**Related Components:**


**Docs:**
---
examples:
    - name: formatDatesRelativeToNow
      label: Format Dates Relative To Now
      description: Relative time displays how much time has passed or how much time is left until a given time.
---

The `lightning-relative-date-time` component displays relative time that shows
how much time has passed or how much time is left until a given date/time.
It formats the relative time for the current locale following the rules
from [Unicode CLDR](http://cldr.unicode.org/translation/date-time-1/date-time-names).

Use the `value` attribute to pass the date to format.
When you provide a timestamp or JavaScript Date object,
`lightning-relative-date-time` displays a string that describes the relative
time between the current time and the provided time.

The unit of time that's displayed corresponds to how much time has passed since the
provided time, for example, "a few seconds ago" or "5 minutes ago". A given
time in the future returns the relative time, for example, "in 7 months" or
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleRelativeDateTimeFormatDatesRelativeToNow extends LightningElement {
    SfdcDay = new Date('1999-02-01');
    today9AM = new Date().setHours(9, 0, 0, 0);
    now = Date.now();
    future20500104 = new Date('2050-01-04');
}

```

```html
<template>
    <div class="slds-m-around_medium">
        <h1 class="slds-text-heading_small">Format Dates Relative To now</h1>
        <p class="slds-text-body_regular">The lightning-relative-date-time component displays relative time that shows how much time has passed or how much time is left until a given time. It formats the relative time for the current locale following the rules from Unicode CLDR. The date to format is passed via the value attribute.</p>
    </div>

    <div class="slds-m-vertical_small">
        Day SFDC was born - February 1999:
        <strong><lightning-relative-date-time value={SfdcDay}></lightning-relative-date-time></strong>
    </div>

    <div class="slds-m-vertical_small">
        Today 9:00 AM:
        <strong><lightning-relative-date-time value={today9AM}></lightning-relative-date-time></strong>
    </div>

    <div class="slds-m-vertical_small">
        Right now:
        <strong><lightning-relative-date-time value={now}></lightning-relative-date-time></strong>
    </div>

    <div class="slds-m-vertical_small">
        Future - January 2050:
        <strong><lightning-relative-date-time value={future20500104}></lightning-relative-date-time></strong>
    </div>
</template>
```

---
