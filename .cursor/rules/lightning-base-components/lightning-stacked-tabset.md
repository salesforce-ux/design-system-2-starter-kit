# lightning-stacked-tabset

**What is it?**  
This component is a container for multiple related content sections, providing the user with a navigable interface to show and hide these sections as needed.

**Where would you use it?**
- In a shopping website, a <lightning-stacked-tabset> could be used on the product detail page. The tabs could be used to separate and organize information about the product, such as its specifications, customer reviews, and shipping details. This way, customers can easily navigate and find the information they need without having to scroll through a long page.
- On a news website, a <lightning-stacked-tabset> could be used to categorize different types of content on the homepage. For example, there could be separate tabs for local news, international news, sports, entertainment, and more. This would allow users to quickly find the type of news they are interested in.
- In a company's internal portal, a <lightning-stacked-tabset> could be used on an employee's profile page. The tabs could be used to separate different types of information about the employee, such as their contact information, job history, performance reviews, and training records. This would make it easier for HR staff to find the information they need.
- On a travel booking website, a <lightning-stacked-tabset> could be used on the hotel detail page. The tabs could be used to separate and organize information about the hotel, such as its amenities, room types, customer reviews, and location. This would allow customers to easily navigate and find the information they need to make a booking.
- In a university's online learning platform, a <lightning-stacked-tabset> could be used on a course's page. The tabs could be used to separate different types of content, such as the course syllabus, lecture videos, assignments, and discussion forums. This would allow students to easily navigate the course content.

**How do you use it?**


**Related Components:**
- **lightning-stacked-tab** (required)

**Docs:**
# Stacked Tabset

A `lightning-stacked-tabset` component can contain multiple `lightning-stacked-tab` component to keep related content in a single container, which can be shown and hidden through navigation.

```html
<lightning-stacked-tabset>
    <lightning-stacked-tab label="Related"></lightning-stacked-tab>
    <lightning-stacked-tab label="Details"></lightning-stacked-tab>
</lightning-stacked-tabset>
```

See the [lightning-stacked-tab](../stackedTab/) component for more information.


**Examples:**
**Example 1:**

```js
import { LightningElement, track } from 'lwc';

export default class Conditinal extends LightningElement {
    @track show;

    handleToggle() {
        this.show = !this.show;
    }
}

```

```html
<template>
    <lightning-button label="Toggle" onclick={handleToggle}></lightning-button>
    <lightning-stacked-tabset>
        <lightning-stacked-tab label="One"></lightning-stacked-tab>
        <lightning-stacked-tab label="Two"></lightning-stacked-tab>
        <template if:true={show}>
            <lightning-stacked-tab label="Three"></lightning-stacked-tab>
        </template>
    </lightning-stacked-tabset>
</template>

```

**Example 2:**

```js
import { LightningElement, track } from 'lwc';

export default class Events extends LightningElement {
    @track selectedTab = '';

    handleTabClick(e) {
        this.selectedTab = e.target.label;
    }
}

```

```html
<template>
    <p>Selected Tab is: {selectedTab}</p>
    <lightning-stacked-tabset>
        <lightning-stacked-tab
            label="One"
            onclick={handleTabClick}
        ></lightning-stacked-tab>
        <lightning-stacked-tab
            label="Two"
            onclick={handleTabClick}
        ></lightning-stacked-tab>
        <lightning-stacked-tab
            label="Three"
            onclick={handleTabClick}
        ></lightning-stacked-tab>
    </lightning-stacked-tabset>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class Simple extends LightningElement {}

```

```html
<template>
    <lightning-stacked-tabset>
        <lightning-stacked-tab label="One"></lightning-stacked-tab>
        <lightning-stacked-tab label="Two"></lightning-stacked-tab>
        <lightning-stacked-tab label="Three" icon-name="utility:activity"></lightning-stacked-tab>
    </lightning-stacked-tabset>
</template>

```

---
