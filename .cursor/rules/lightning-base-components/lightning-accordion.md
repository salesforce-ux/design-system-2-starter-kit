# lightning-accordion

**What is it?**  
This component is a user interface element that displays vertically stacked sections of content that can be expanded or collapsed, allowing users to control the visibility of content and reduce the need for scrolling.

**Where would you use it?**
- Imagine you're browsing an online store and you're looking at a product page. The product has a lot of information, like specifications, reviews, and shipping details. Instead of having all this information displayed at once, making the page very long and hard to navigate, the website uses a <lightning-accordion> component. This means that each category of information (specifications, reviews, shipping) has its own section that you can click to expand and read, making the page much easier to navigate.
- On a company's internal website, there's a page for employees to access various resources and documents. However, not all resources are relevant to all employees, so to make the page more user-friendly, the company uses a <lightning-accordion> component. Each department has its own section, and within each section, there are subsections for different types of resources. This way, employees can easily find and access the resources they need without having to scroll through irrelevant information.
- Consider a FAQ page on a website. Instead of listing all questions and answers at once, which can be overwhelming and hard to navigate, the website uses a <lightning-accordion> component. Each question has its own section that you can click to expand and see the answer. This makes it easy for you to find the information you're looking for without having to read through all the questions and answers.
- On a news website, there's a section for top stories. Each story has a headline and a brief summary, and if you want to read the full story, you can click on the headline to expand the section. This is done using a <lightning-accordion> component, which allows the website to display a lot of content in a compact and user-friendly way.
- Imagine you're filling out a long form on a website, like a job application. The form is divided into several sections, like personal information, education, work experience, and references. To make the form easier to navigate, the website uses a <lightning-accordion> component. This way, you can focus on one section at a time, and you don't have to scroll through a long page of fields.
- On a travel website, there's a page for each destination with information about attractions, hotels, restaurants, and travel tips. To make the page easier to navigate, the website uses a <lightning-accordion> component. Each category of information has its own section that you can click to expand and read. This way, you can quickly find the information you're interested in without having to scroll through the entire page.

**How do you use it?**
- **active-section-name** `string | string[]`  
  _Examples:_
    `<lightning-accordion active-section-name='B'>`
    `<lightning-accordion active-section-name={activeSections}>`
- **allow-multiple-sections-open** `boolean`  
  _Examples:_
    `<lightning-accordion allow-multiple-sections-open>`
- **onsectiontoggle** `(ev: CustomEvent & { detail: { openSections: string[] } }) => void`  
  _Examples:_
    `<lightning-accordion onsectiontoggle={handleSectionToggle}>`

**Related Components:**
- **lightning-accordion-section** (required)

**Docs:**
---
examples:
    - name: basic
      label: Basic Accordion
      description: Accordion with a pre-selected open section, and a button that programmatically opens another section. By default, only one section can be open at a time. You can close a section by opening another section.
    - name: conditional
      label: Accordion with Conditional Section
      description: Accordion sections can be toggled to be visible or not.
    - name: multiple
      label: Accordion with Multiple Open Sections
      description: Accordion sections can be open or closed without restrictions, programmatically or by clicking the section headers.
---

A `lightning-accordion` displays vertically stacked sections of content that you can expand and collapse. Click a section's header to expand its content. Users can control how much content is visible at once, and don't need to scroll as much to see the content of a page.

To create an accordion section, nest a `lightning-accordion-section` component within `lightning-accordion`. Each `lightning-accordion-section` can contain HTML markup or Lightning components.

By default, only one section can be open at a time. You can close a section by opening another section. You can configure the accordion to allow multiple sections to be open, and then the sections can be opened and closed by clicking section headers.

You can specify one or multiple active sections. Active sections are expanded when the component loads. The terms "active", "expanded", and "open" are used interchangeably in this documentation.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleAccordionBasic extends LightningElement {
    activeSectionMessage = '';

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    handleSetActiveSectionC() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'C';
    }
}

```

```html
<template>
    <p class="slds-text-heading_small">{activeSectionMessage}</p>

    <lightning-button onclick={handleSetActiveSectionC} label="Open Section C"></lightning-button>

    <lightning-accordion class="example-accordion"
                         onsectiontoggle={handleToggleSection}
                         active-section-name="B">
        <lightning-accordion-section name="A" label="Accordion Title A">
            <lightning-button-menu slot="actions"
                                  alternative-text="Show menu"
                                  icon-size="x-small"
                                  menu-alignment="right">
                <lightning-menu-item value="New" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="Edit" label="Menu Item Two"></lightning-menu-item>
            </lightning-button-menu>
            <p>This is the content area for section A.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>The section height expands to fit your content.</p>
        </lightning-accordion-section>

        <lightning-accordion-section name="B" label="Accordion Title B">
            <p>This is the content area for section B.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>The section height expands to fit your content.</p>
        </lightning-accordion-section>

        <lightning-accordion-section name="C" label="Accordion Title C">
            <p>This is the content area for section C.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>The section height expands to fit your content.</p>
        </lightning-accordion-section>
    </lightning-accordion>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleAccordionConditional extends LightningElement {
    activeSectionMessage = '';
    isDVisible = false;

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    handleToggleSectionD() {
        this.isDVisible = !this.isDVisible;
    }

    get isMessageVisible() {
        return this.activeSectionMessage.length > 0;
    }
}

```

```html
<template>
    <p class="slds-text-heading_small">{activeSectionMessage}</p>

    <lightning-button onclick={handleToggleSectionD} label="Toggle Section D"></lightning-button>

    <lightning-accordion class="example-accordion"
                         onsectiontoggle={handleToggleSection}
                         active-section-name="B">
        <lightning-accordion-section name="A" label="Accordion Title A">
            <p>This is the content area for section A.</p>
            <p>Donec vitae tellus egestas, faucibus ipsum ac, imperdiet erat. Nam venenatis non ante at sagittis. Integer vel purus eget nunc semper placerat. Nam tristique quam leo, et posuere enim condimentum quis. Ut sagittis libero id lectus tempor maximus. Nunc ut tincidunt eros, a hendrerit leo. Suspendisse quis fermentum dolor. Nulla euismod consectetur leo, id condimentum nunc consequat quis.</p>
        </lightning-accordion-section>

        <lightning-accordion-section name="B" label="Accordion Title B">
            <p>This is the content area for section B.</p>
            <p>Nam at elit et justo scelerisque ullamcorper vel a felis. Mauris sit amet lorem sed est sagittis blandit nec ac turpis. Ut a mi id turpis pharetra ornare. Nullam rhoncus feugiat nunc, ac pulvinar felis pulvinar at. Nullam efficitur aliquet justo et ultricies. Maecenas eu felis aliquam, tincidunt elit at, suscipit leo. Duis ut urna nec nibh hendrerit lacinia. Sed non auctor libero. Sed pellentesque tempor mollis.</p>
        </lightning-accordion-section>

        <lightning-accordion-section name="C" label="Accordion Title C">
            <p>This is the content area for section C.</p>
            <p>Nulla ornare ipsum felis, vel aliquet dui blandit vel. Integer accumsan velit quis mauris pharetra, nec sollicitudin dui eleifend. Cras condimentum odio mi, nec ullamcorper arcu ullamcorper sed. Proin massa arcu, rutrum a ullamcorper nec, hendrerit in sem. Etiam tempus eros ut lorem tincidunt, id condimentum nulla molestie. Morbi hendrerit elit pretium, ultrices neque non, ullamcorper justo. Quisque vel nisi eget eros efficitur semper. Nulla pulvinar venenatis quam vitae efficitur. Nam facilisis sollicitudin quam ac imperdiet.</p>
        </lightning-accordion-section>

        <template if:true={isDVisible}>
            <lightning-accordion-section name="D" label="Accordion Title D">
                <p>This is the content area for section D.</p>
                <p>Suspendisse est eros, maximus et risus a, luctus bibendum eros. Etiam ultrices tellus vehicula neque ornare, viverra venenatis purus accumsan. Aenean viverra finibus odio, vitae bibendum nisi tincidunt sed. Ut at porta dui. Praesent varius eleifend quam eget gravida. Curabitur maximus, leo sit amet dapibus gravida, mi ligula lacinia turpis, id feugiat tellus urna quis odio. Nullam tristique orci eu magna hendrerit vestibulum. Sed id purus at metus tristique tristique et vitae arcu. Sed molestie odio felis, sit amet lacinia mauris rutrum nec. Morbi semper lacinia tellus bibendum faucibus. Vestibulum eget ornare sapien, eget ultrices orci.</p>
            </lightning-accordion-section>
        </template>
    </lightning-accordion>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleAccordionMultiple extends LightningElement {
    activeSections = ['A', 'C'];
    activeSectionsMessage = '';

    handleSectionToggle(event) {
        const openSections = event.detail.openSections;

        if (openSections.length === 0) {
            this.activeSectionsMessage = 'All sections are closed';
        } else {
            this.activeSectionsMessage =
                'Open sections: ' + openSections.join(', ');
        }
    }
}

```

```html
<template>
    <p>{activeSectionsMessage}</p>

    <lightning-accordion allow-multiple-sections-open
                         onsectiontoggle={handleSectionToggle}
                         active-section-name={activeSections}>
        <lightning-accordion-section name="A" label="Accordion Title A">
            <p>This is the content area for section A.</p>
            <p>Donec vitae tellus egestas, faucibus ipsum ac, imperdiet erat. Nam venenatis non ante at sagittis. Integer vel purus eget nunc semper placerat. Nam tristique quam leo, et posuere enim condimentum quis. Ut sagittis libero id lectus tempor maximus. Nunc ut tincidunt eros, a hendrerit leo. Suspendisse quis fermentum dolor. Nulla euismod consectetur leo, id condimentum nunc consequat quis.</p>
        </lightning-accordion-section>

        <lightning-accordion-section name="B" label="Accordion Title B">
            <p>This is the content area for section B.</p>
            <p>Nam at elit et justo scelerisque ullamcorper vel a felis. Mauris sit amet lorem sed est sagittis blandit nec ac turpis. Ut a mi id turpis pharetra ornare. Nullam rhoncus feugiat nunc, ac pulvinar felis pulvinar at. Nullam efficitur aliquet justo et ultricies. Maecenas eu felis aliquam, tincidunt elit at, suscipit leo. Duis ut urna nec nibh hendrerit lacinia. Sed non auctor libero. Sed pellentesque tempor mollis.</p>
        </lightning-accordion-section>

        <lightning-accordion-section name="C" label="Accordion Title C">
            <p>This is the content area for section C.</p>
            <p>Nulla ornare ipsum felis, vel aliquet dui blandit vel. Integer accumsan velit quis mauris pharetra, nec sollicitudin dui eleifend. Cras condimentum odio mi, nec ullamcorper arcu ullamcorper sed. Proin massa arcu, rutrum a ullamcorper nec, hendrerit in sem. Etiam tempus eros ut lorem tincidunt, id condimentum nulla molestie. Morbi hendrerit elit pretium, ultrices neque non, ullamcorper justo. Quisque vel nisi eget eros efficitur semper. Nulla pulvinar venenatis quam vitae efficitur. Nam facilisis sollicitudin quam ac imperdiet.</p>
        </lightning-accordion-section>
    </lightning-accordion>
</template>

```

---
