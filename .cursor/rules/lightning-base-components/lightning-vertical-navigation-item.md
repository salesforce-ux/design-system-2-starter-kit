# lightning-vertical-navigation-item

**What is it?**  
This component serves as a navigation item within a vertical navigation system, providing a structured user experience for navigating through different sections.

**Where would you use it?**
- Imagine you're browsing an online store that sells a variety of products, like electronics, clothing, and home goods. The website could use the <lightning-vertical-navigation-item> component to create a vertical menu on the side of the page, allowing you to easily navigate between different product categories.
- On a news website, the <lightning-vertical-navigation-item> component could be used to create a sidebar menu with different sections like 'World News', 'Sports', 'Entertainment', and 'Weather'. This would allow you to quickly jump to the news category you're interested in.
- Consider a university website with a lot of information about different departments, courses, and events. The <lightning-vertical-navigation-item> component could be used to create a vertical navigation menu, making it easier for students and staff to find the information they need.

**How do you use it?**


**Related Components:**
- **lightning-vertical-navigation** (required)

**Docs:**
---
examples:
    - name: basic
      label: Basic Vertical Navigation
      description: A vertical navigation includes at least one navigation section and item.
---

A `lightning-vertical-navigation-item` component is a navigation item within `lightning-vertical-navigation`.

For more information, see the
[lightning-vertical-navigation](bundle/lightning-vertical-navigation/documentation) documentation.


**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleVerticalNavigationBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-m-vertical_medium">
        <h1 class="slds-text-heading_small">Basic Vertical Navigation</h1>
        <p class="slds-text-body_regular">A basic Vertical Navigation with one section.</p>
    </div>
    
    <div style="width: 320px;">
        <lightning-vertical-navigation>
            <lightning-vertical-navigation-section label="Reports">
                <lightning-vertical-navigation-item label="Recent" name="recent"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Created by Me" name="created"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Private Reports" name="private"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Public Reports" name="public"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="All Reports" name="all"></lightning-vertical-navigation-item>
            </lightning-vertical-navigation-section>
        </lightning-vertical-navigation>
    </div>
</template>

```

---
