# lightning-card

**What is it?**  
This component is a stylized container that groups information, optionally including a title, body, actions, and a footer, providing an interactive user experience with clickable actions and links.

**Where would you use it?**
- Imagine you're browsing an online store and you see a section on the homepage titled 'Recommended for You'. Each product in this section is displayed within its own box, with the product image, name, price, and a 'Add to Cart' button. Each of these boxes is a <lightning-card> component, used to group related information together in a visually appealing way.
- Consider a business dashboard where you can see a summary of different metrics, like sales, customer satisfaction, and employee performance. Each metric is displayed in its own box with a title, the metric value, and a 'View More' button. These boxes are <lightning-card> components, used to present related pieces of information in a clear, organized manner.
- Think about a news website where each article is displayed with a headline, a brief summary, and a 'Read More' button. Each of these article previews is a <lightning-card> component, used to encapsulate related pieces of information and provide a consistent look and feel across the website.

**How do you use it?**
- **title** `string`  
  _Examples:_
    `<lightning-card title='Card Title'>`
    `<lightning-card title={cardTitle}>`
- **variant** `string`  
  _Examples:_
    `<lightning-card variant='narrow'>`
    `<lightning-card variant={cardVariant}>`
- **icon-name** `string`  
  _Examples:_
    `<lightning-card icon-name='standard:opportunity'>`
    `<lightning-card icon-name={iconName}>`

**Related Components:**
- **lightning-button-icon** (optional)
- **lightning-button** (optional)
- **lightning-icon** (optional)
- **lightning-navigation** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Card
      description: A basic card that provides a title attribute. The card uses a button in the actions slot, and plain text in the footer slot.
    - name: narrow
      label: Card with Narrow Variant
      description: This card uses the narrow variant and specifies an icon to include with the title. The card uses a button icon in the actions slot and plain text in the footer slot.
    - name: custom
      label: Card with Custom Title and Footer
      description: This card creates a custom title by using a title slot that contains a header tag and lightning-icon. The footer slot contains lightning-badge components, and the actions slot is empty.
---

A `lightning-card` is used to apply a stylized container around a grouping of information. The information could be a single item or a group of items such as a related list.

A `lightning-card` can contain a title, body, actions, and a footer. The title, actions, and footer are optional. You can also provide an icon in the header in front of the title.

Use the `actions` slot to pass content such as `lightning-button-icon` or `lightning-button` to perform an action when clicked. Actions are displayed on the top corner of the card opposite the title.

Here's an example that passes in the title, actions, and footer as slots, and includes an icon.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class Basic extends LightningElement {}

```

```html
<template>
        <lightning-card  title="Hello">
            <lightning-button label="New" slot="actions"></lightning-button>
            <p class="slds-p-horizontal_small">Card Body (custom component)</p>
            <p slot="footer">Card Footer</p>
        </lightning-card>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class Custom extends LightningElement {}

```

```html
<template>
    <lightning-card>
        <h3 slot="title">
            <lightning-icon icon-name="utility:connected_apps" size="small"></lightning-icon>
            Card Title
        </h3>
        <div slot="footer">
                <lightning-badge label="Tag1"></lightning-badge>
                <lightning-badge label="Tag2"></lightning-badge>
                <lightning-badge label="Tag3"></lightning-badge>
        </div>
        <p class="slds-p-horizontal_small">Card Body (custom component)</p>
    </lightning-card>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class Narrow extends LightningElement {}

```

```html
<template>
        <lightning-card  variant="Narrow"  title="Hello" icon-name="standard:account">
            <lightning-button-icon  icon-name="utility:down" variant="border-filled" alternative-text="Show More" slot="actions"></lightning-button-icon>
            <p class="slds-p-horizontal_small">Card Body Narrow (custom component)</p>
            <p slot="footer">Card Footer</p>
        </lightning-card>
</template>

```

---
