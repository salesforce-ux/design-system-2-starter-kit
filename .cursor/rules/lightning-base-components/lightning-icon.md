# lightning-icon

**What is it?**  
This component is a visual element that enhances usability by providing context through the use of customizable icons from the Lightning Design System or custom icons, offering a visually engaging experience to the end user.

**Where would you use it?**
- In a project management application, a <lightning-icon> could be used to visually represent different types of tasks. For example, a 'check' icon could be used to represent completed tasks, a 'clock' icon for tasks in progress, and a 'warning' icon for tasks that are overdue. The size of the icons could be adjusted based on the importance of the task, with larger icons for high-priority tasks.
- In a music streaming application, <lightning-icon> could be used to create intuitive controls for the music player. Play, pause, next, and previous buttons could all be represented with different icons. The 'success' variant could be used to highlight the currently active button, such as 'play' when a song is playing.
- In an e-commerce application, <lightning-icon> could be used to represent different product categories. For example, a 'shirt' icon for clothing, a 'book' icon for literature, and a 'gamepad' icon for video games. The icons could be customized with different colors to match the branding of the website.
- In a weather application, <lightning-icon> could be used to represent different weather conditions. For example, a 'sun' icon for sunny weather, a 'cloud' icon for cloudy weather, and a 'rain' icon for rainy weather. The 'warning' variant could be used to represent severe weather conditions.
- In a social media application, <lightning-icon> could be used to represent different actions a user can take on a post. For example, a 'heart' icon for liking a post, a 'comment' icon for commenting on a post, and a 'share' icon for sharing a post. The 'error' variant could be used to represent actions that are not allowed, such as sharing a private post.
- In a news application, <lightning-icon> could be used to represent different types of news categories. For example, a 'globe' icon for international news, a 'building' icon for business news, and a 'flask' icon for science news. The icons could be customized with different sizes to represent the importance of each news category.

**How do you use it?**
- **icon-name** `string`  
  _Examples:_
    `<lightning-icon icon-name='action:approval'>`
    `<lightning-icon icon-name='utility:error'>`
    `<lightning-icon icon-name='utility:connected_apps'>`
- **size** `string`  
  _Examples:_
    `<lightning-icon icon-name='action:approval' size='large'>`
    `<lightning-icon icon-name='utility:error' size='small'>`
    `<lightning-icon icon-name='utility:connected_apps' size='medium'>`
- **alternative-text** `string`  
  _Examples:_
    `<lightning-icon icon-name='action:approval' alternative-text='Indicates approval'>`
    `<lightning-icon icon-name='utility:error' alternative-text='Error'>`
    `<lightning-icon icon-name='utility:connected_apps' alternative-text='Connected'>`
- **src** `string`  
  _Examples:_
    `<lightning-icon src={googleIcon}>`
- **variant** `string`  
  _Examples:_
    `<lightning-icon icon-name='utility:error' variant='error'>`
    `<lightning-icon icon-name='utility:connected_apps' variant='success'>`
- **class** `string`  
  _Examples:_
    `<lightning-icon icon-name='utility:connected_apps' class='my-icon'>`

**Related Components:**
- **lightning-icon** (required)

**Docs:**
---
examples:
    - name: basic
      label: Basic Icons
      description: Action icons, doctype icons, standard icons, utility icons, and custom icons.
    - name: variants
      label: Icons with Sizes and Variants
      description: Effects of the size attribute and inverse, success, warning and error variants.
---

A `lightning-icon` is a visual element that provides context and enhances
usability. Icons can be used inside the body of another component or on their
own. You can specify an icon from the Lightning Design System using the `icon-name` attribute.

Here is an example.

```html
<template>
    <lightning-icon
        icon-name="action:approval"
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class Basic extends LightningElement {}

```

```html
<template>
    <p id="action" class="slds-box slds-text-heading_small">Action icons represent actions a user can take. The default
        size of action icons are larger than the others. <br /><br />
        <lightning-icon icon-name="action:approval" alternative-text="Approved" title="Approved"></lightning-icon>
        <lightning-icon icon-name="action:delete" alternative-text="Delete" title="Delete"></lightning-icon>
        <lightning-icon icon-name="action:new_note" alternative-text="New note" title="New note"></lightning-icon>
        <lightning-icon icon-name="action:preview" alternative-text="Preview" title="Preview"></lightning-icon>
    </p>
    <p id="doctype" class="slds-box slds-text-heading_small">Doctype icons represent a type of file when a preview or
        image is unavailable. <br /><br />
        <lightning-icon icon-name="doctype:audio" alternative-text="Audio file" title="Audio"></lightning-icon>
        <lightning-icon icon-name="doctype:image" alternative-text="Image file" title="Image"></lightning-icon>
        <lightning-icon icon-name="doctype:mp4" alternative-text="MP4 file" title="MP4"></lightning-icon>
        <lightning-icon icon-name="doctype:xml" alternative-text="XML file" title="XML"></lightning-icon>
    </p>

    <p id="standard" class="slds-box slds-text-heading_small">Standard icons represent entities and objects within
        Salesforce. <br /><br />
        <lightning-icon icon-name="standard:event" alternative-text="Event" title="Event"></lightning-icon>
        <lightning-icon icon-name="standard:account" alternative-text="Account" title="Account"></lightning-icon>
        <lightning-icon icon-name="standard:address" alternative-text="Address" title="Address"></lightning-icon>
        <lightning-icon icon-name="standard:email" alternative-text="Email" title="Email"></lightning-icon>
    </p>

    <p id="utility" class="slds-box slds-text-heading_small">Utility icons are used throughout the interface and are
        SVGs for extensibility. <br /><br />
        <lightning-icon icon-name="utility:connected_apps" alternative-text="Connected" title="Connected">
        </lightning-icon>
        <lightning-icon icon-name="utility:warning" alternative-text="Warning!" title="Warning"></lightning-icon>
        <lightning-icon icon-name="utility:error" alternative-text="Error!" title="Error"></lightning-icon>
        <lightning-icon icon-name="utility:image" alternative-text="Utility image" title="Image"></lightning-icon>
    </p>

    <p id="custom" class="slds-box slds-text-heading_small">Custom icons are available in Salesforce to represent user
        created objects.<br /><br />
        <lightning-icon icon-name="custom:custom11" title="custom11"></lightning-icon>
        <lightning-icon icon-name="custom:custom33" title="custom33"></lightning-icon>
        <lightning-icon icon-name="custom:custom51" title="custom51"></lightning-icon>
        <lightning-icon icon-name="custom:custom88" title="custom88"></lightning-icon>
    </p>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class Variants extends LightningElement {}

```

```html
<template>
    <div id="size" class="row slds-box slds-text-heading_small">
        <h4>Utility icons in different sizes</h4>
        <lightning-icon icon-name="utility:connected_apps" alternative-text="Connected" size="large" title="large size">
        </lightning-icon>
        <lightning-icon icon-name="utility:connected_apps" alternative-text="Connected" title="medium (default)">
        </lightning-icon>
        <lightning-icon icon-name="utility:connected_apps" alternative-text="Connected" size="small" title="small size">
        </lightning-icon>
        <lightning-icon icon-name="utility:connected_apps" alternative-text="Connected" size="x-small"
            title="x-small size"></lightning-icon>
        <lightning-icon icon-name="utility:connected_apps" alternative-text="Connected" size="xx-small"
            title="xx-small size"></lightning-icon>
    </div>
    <div id="inverse" class="row dark-background slds-box slds-text-heading_small">
        <h4>Utility icons with inverse variant in different sizes</h4>
        <lightning-icon icon-name="utility:connected_apps" alternative-text="Connected" variant="inverse" size="large"
            title="large size"></lightning-icon>
        <lightning-icon icon-name="utility:connected_apps" alternative-text="Connected" variant="inverse"
            title="medium (default)"></lightning-icon>
        <lightning-icon icon-name="utility:connected_apps" alternative-text="Connected" variant="inverse" size="small"
            title="small size"></lightning-icon>
        <lightning-icon icon-name="utility:connected_apps" alternative-text="Connected" variant="inverse" size="x-small"
            title="x-small size"></lightning-icon>
        <lightning-icon icon-name="utility:connected_apps" alternative-text="Connected" variant="inverse"
            size="xx-small" title="xx-small size"></lightning-icon>
    </div>
    <div id="variants" class="row slds-box slds-text-heading_small">
        <h4>Utility icons with default styling and with success, warning, and error variants</h4>
        <lightning-icon icon-name="utility:success" alternative-text="Success!" title="default style"></lightning-icon>
        <lightning-icon icon-name="utility:success" alternative-text="Success!" variant="success"
            title="success variant"></lightning-icon>
        <lightning-icon icon-name="utility:success" alternative-text="Success!" variant="success"
            title="success variant small" size="small"></lightning-icon>
        <lightning-icon icon-name="utility:success" alternative-text="Success!" variant="success"
            title="success variant x-small" size="x-small"></lightning-icon>
        <lightning-icon icon-name="utility:success" alternative-text="Success!" variant="success"
            title="success variant xx-small" size="xx-small"></lightning-icon>
        <br />
        <lightning-icon icon-name="utility:warning" alternative-text="Warning!" title="default style"></lightning-icon>
        <lightning-icon icon-name="utility:warning" alternative-text="Warning!" variant="warning"
            title="warning variant"></lightning-icon>
        <lightning-icon icon-name="utility:warning" alternative-text="Warning!" variant="warning"
            title="warning variant small" size="small"></lightning-icon>
        <lightning-icon icon-name="utility:warning" alternative-text="Warning!" variant="warning"
            title="warning variant x-small" size="x-small"></lightning-icon>
        <lightning-icon icon-name="utility:warning" alternative-text="Warning!" variant="warning"
            title="warning variant xx-small" size="xx-small"></lightning-icon>
        <br />
        <lightning-icon icon-name="utility:error" alternative-text="Error!" title="default style"></lightning-icon>
        <lightning-icon icon-name="utility:error" alternative-text="Error!" variant="error" title="error variant">
        </lightning-icon>
        <lightning-icon icon-name="utility:error" alternative-text="Error!" variant="error"
            title="error variant small" size="small"></lightning-icon>
        <lightning-icon icon-name="utility:error" alternative-text="Error!" variant="error"
            title="error variant x-small" size="x-small"></lightning-icon>
        <lightning-icon icon-name="utility:error" alternative-text="Error!" variant="error"
            title="error variant xx-small" size="xx-small"></lightning-icon>
        <br /><br />
        <lightning-icon icon-name="utility:money" alternative-text="Money" title="money icon with success variant"
        variant="success">
        </lightning-icon>
        <lightning-icon icon-name="utility:light_bulb" alternative-text="Light bulb" title="light bulb with warning variant"
        variant="warning">
        </lightning-icon>
        <lightning-icon icon-name="utility:hide" alternative-text="Hide" title="hide icon with error variant"
        variant="error">
        </lightning-icon>
    </div>

    <div id="action" class="row slds-box slds-text-heading_small">
        <h4>Action icons in various sizes</h4>
        <lightning-icon icon-name="action:call" alternative-text="Click to Call" size="large" title="large size">
        </lightning-icon>
        <lightning-icon icon-name="action:call" alternative-text="Click to Call" title="medium size (default)">
        </lightning-icon>
        <lightning-icon icon-name="action:call" alternative-text="Click to Call" size="small" title="small size">
        </lightning-icon>
        <lightning-icon icon-name="action:call" alternative-text="Click to Call" size="x-small" title="x-small size">
        </lightning-icon>
    </div>
</template>

```

---
