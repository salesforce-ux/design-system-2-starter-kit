# lightning-accordion-section

**What is it?**  
This component is used to define the content of an individual section within an accordion-style interface, providing an interactive user experience where sections can be expanded or collapsed by clicking on the header text or toggle button.

**Where would you use it?**
- Imagine you're browsing an online store and you're looking at a product page. The product has a lot of information, like specifications, reviews, and shipping details. Instead of having all this information displayed at once, making the page long and cluttered, the website uses the <lightning-accordion-section> component to neatly organize the information into separate sections. You can click on each section to expand it and see the information you're interested in.
- On a company's internal website, there's a page for employees to access various resources and documents. To make it easier for employees to find what they need, the page uses the <lightning-accordion-section> component to categorize the resources into different sections like 'HR Documents', 'IT Support', and 'Training Materials'. Employees can click on a section to expand it and see the resources available.
- Consider a mobile app for a music festival. The app has a page listing all the performing artists. Instead of listing all the artists and their details on one long page, the app uses the <lightning-accordion-section> component. Each artist has their own section, and when a user clicks on an artist's name, the section expands to show more information about the artist and their performance schedule.
- On a university's website, there's a page for prospective students to learn about the different programs offered. The page uses the <lightning-accordion-section> component to organize the programs into sections by faculty. Prospective students can click on a faculty to expand the section and see the programs offered, along with details about each program.
- Imagine a news website that has a page for each major news category, like 'World', 'Business', and 'Sports'. Each category page uses the <lightning-accordion-section> component to organize the news articles into sections by region or topic. Readers can click on a section to expand it and see the articles available.

**How do you use it?**
- **name** `string`  
  _Examples:_
    `<lightning-accordion-section name='A'>`
    `<lightning-accordion-section name={sectionName}>`
- **label** `string`  
  _Examples:_
    `<lightning-accordion-section label='Accordion Title A'>`
    `<lightning-accordion-section label={sectionLabel}>`

**Related Components:**
- **lightning-accordion** (required)
- **lightning-button-menu** (optional)
- **lightning-menu-item** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Accordion Section
      description: Content for an accordion is an accordion-section.
---

A `lightning-accordion-section` defines the content of an accordion section inside a `lightning-accordion` component.
Each section can contain HTML markup or Lightning components.

This example creates a basic accordion with three sections, where section B is
expanded by specifying it with the `active-section-name` attribute in `lightning-accordion`.

```html
<template>
    <lightning-accordion active-section-name="B">
        <lightning-accordion-section name="A" label="Accordion Title A"
            >This is the content area for section A</lightning-accordion-section
        >
        <lightning-accordion-section name="B" label="Accordion Title B"
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleAccordionSectionBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-m-around_medium">
        <h1 class="slds-text-heading_small">Basic accordion-section</h1>
        <p class="slds-text-body_regular">A lightning-accordion-section component is a single section that’s nested in a lightning-accordion component. You can't use this component on its own. This example creates a basic accordion with one section.</p>
    </div>
    <lightning-accordion active-section-name="A">
        <lightning-accordion-section name="A" label="Accordion Title A">
                <lightning-button-menu slot="actions" alternative-text="Show menu" icon-size="x-small" menu-alignment="auto">
                    <lightning-menu-item value="New" label="Menu Item One"></lightning-menu-item>
                    <lightning-menu-item value="Edit" label="Menu Item Two"></lightning-menu-item>
                </lightning-button-menu>
                <p>This is the content area for section A.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>The section height expands to fit your content.</p>
        </lightning-accordion-section>
    </lightning-accordion>
</template>

```

---
