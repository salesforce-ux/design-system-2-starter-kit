# lightning-button-group

**What is it?**  
This component is a set of buttons displayed together to create a navigational bar, providing an interactive user experience with options for simple buttons, buttons with icons, disabled buttons, inverse buttons, and dropdown menus.

**Where would you use it?**
- In a music streaming application, a <lightning-button-group> could be used to create a set of buttons for user controls. For example, there could be buttons for 'Play', 'Pause', 'Next', and 'Previous'. Each button would perform a different action when clicked, allowing the user to control their music playback.
- In a web-based email client, a <lightning-button-group> could be used to create a set of buttons for email management. For instance, there could be buttons for 'Compose', 'Reply', 'Forward', 'Delete', and 'Mark as Read'. Each button would perform a different action when clicked, providing the user with a range of options for managing their emails.
- In an online shopping platform, a <lightning-button-group> could be used to create a set of buttons for product sorting. For example, there could be buttons for 'Sort by Price', 'Sort by Popularity', and 'Sort by Rating'. Each button would perform a different action when clicked, allowing the user to sort the products according to their preference.
- In a web-based document editor, a <lightning-button-group> could be used to create a set of buttons for text formatting. For instance, there could be buttons for 'Bold', 'Italic', 'Underline', and 'Strikethrough'. Each button would perform a different action when clicked, providing the user with a range of options for formatting their text.
- In a web-based photo editor, a <lightning-button-group> could be used to create a set of buttons for photo editing. For example, there could be buttons for 'Crop', 'Rotate', 'Adjust Brightness', and 'Adjust Contrast'. Each button would perform a different action when clicked, allowing the user to edit their photos according to their preference.
- In a web-based project management tool, a <lightning-button-group> could be used to create a set of buttons for task management. For instance, there could be buttons for 'Add Task', 'Edit Task', 'Delete Task', and 'Mark as Complete'. Each button would perform a different action when clicked, providing the user with a range of options for managing their tasks.

**How do you use it?**
- **onclick** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-button-group onclick={handleClick}>`

**Related Components:**
- **lightning-button** (required)
- **lightning-button-icon** (optional)
- **lightning-button-icon-stateful** (optional)
- **lightning-button-menu** (optional)
- **lightning-button-stateful** (optional)
- **lightning-tabset** (optional)
- **lightning-navigation** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Button Groups
      description: Several button groups demonstrating default simple buttons, buttons with icons and variants, and a diverse set of button types contained in a single button group.
    - name: disabled
      label: Button Groups with Disabled Buttons
      description: Button groups containing disabled buttons, which are grayed out and can't be clicked. Buttons are disabled individually.
    - name: inverse
      label: Button Groups with Inverse Buttons
      description: Group of buttons that set the inverse variant, which displays with a dark background. The variant is set on each button.
    - name: withMenu
      label: Button Group with a Dropdown Menu
      description: This button group includes a lightning-button-menu as the last button, to provide a dropdown menu.
    - name: withMenuDisabled
      label: Button Group with a Disabled Dropdown Menu
      description: This button group's dropdown menu is disabled and can't be clicked.
---

A `lightning-button-group` component represents a set of buttons that can be displayed together to create a navigational bar. The body of the component can contain one or more of the following components:
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class ButtonGroupBasic extends LightningElement {
    buttonStatefulState = false;
    buttonIconStatefulState = false;

    handleButtonStatefulClick() {
        this.buttonStatefulState = !this.buttonStatefulState;
    }

    handleButtonIconStatefulClick() {
        this.buttonIconStatefulState = !this.buttonIconStatefulState;
    }
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button group using simple buttons.
        </h2>

        <!-- Button group: simple buttons -->
        <lightning-button-group>
            <lightning-button label="Refresh"></lightning-button>
            <lightning-button label="Edit"></lightning-button>
            <lightning-button label="Save"></lightning-button>
        </lightning-button-group>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button group using several button variations.
        </h2>

        <!-- Button group: simple buttons -->
        <lightning-button-group>
            <lightning-button label="Refresh"></lightning-button>
            <lightning-button label="Edit"></lightning-button>
            <lightning-button label="Save" icon-name="utility:save"></lightning-button>
            <lightning-button label="Delete" variant="destructive" icon-name="utility:delete"></lightning-button>
        </lightning-button-group>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button group using several button types (standard, icon, stateful, icon-stateful, menu).
        </h2>

        <!-- Button group: simple buttons -->
        <lightning-button-group>
            <lightning-button label="Refresh"></lightning-button>
            <lightning-button label="Edit"></lightning-button>
            <lightning-button label="Save" icon-name="utility:save"></lightning-button>
            <lightning-button-icon icon-name="utility:delete" variant="border-filled" alternative-text="Delete"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:settings" variant="border-filled" alternative-text="Settings"></lightning-button-icon>
            <lightning-button-stateful
                selected={buttonStatefulState}
                label-when-off="Follow"
                label-when-on="Following"
                label-when-hover="Unfollow"
                icon-name-when-off="utility:add"
                icon-name-when-on="utility:check"
                icon-name-when-hover="utility:close"
                onclick={handleButtonStatefulClick}
            ></lightning-button-stateful>
            <lightning-button-icon-stateful
                icon-name="utility:like"
                selected={buttonIconStatefulState}
                alternative-text="Like"
                onclick={handleButtonIconStatefulClick}>
            </lightning-button-icon-stateful>
            <lightning-button-menu alternative-text="Show menu">
                <lightning-menu-item label="Menu Item One" value="item1"></lightning-menu-item>
                <lightning-menu-item label="Menu Item Two" value="item2"></lightning-menu-item>
                <lightning-menu-item label="Menu Item Three" value="item3"></lightning-menu-item>
            </lightning-button-menu>
        </lightning-button-group>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class ButtonGroupDisabled extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button group with simple disabled buttons.
        </h2>

        <!-- Button group: simple buttons -->
        <lightning-button-group>
            <lightning-button label="Refresh" disabled></lightning-button>
            <lightning-button label="Edit" disabled></lightning-button>
            <lightning-button label="Save" disabled></lightning-button>
        </lightning-button-group>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button group with several disabled button variations.
        </h2>

        <!-- Button group: simple buttons -->
        <lightning-button-group>
            <lightning-button label="Refresh" disabled></lightning-button>
            <lightning-button label="Edit" disabled></lightning-button>
            <lightning-button label="Save" icon-name="utility:save" disabled></lightning-button>
            <lightning-button label="Delete" variant="destructive" icon-name="utility:delete" disabled></lightning-button>
        </lightning-button-group>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class ButtonGroupInverse extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button group inverse variant with simple buttons.
        </h2>

        <div class="slds-p-around_medium lgc-bg-inverse">
            <!-- Button group: simple buttons -->
            <lightning-button-group>
                <lightning-button label="Refresh" variant="inverse"></lightning-button>
                <lightning-button label="Edit" variant="inverse"></lightning-button>
                <lightning-button label="Save" variant="inverse"></lightning-button>
            </lightning-button-group>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button group inverse variant with several button variations.
        </h2>

        <div class="slds-p-around_medium lgc-bg-inverse">
            <!-- Button group: button variations -->
            <lightning-button-group>
                <lightning-button label="Refresh" variant="inverse"></lightning-button>
                <lightning-button label="Edit" variant="inverse"></lightning-button>
                <lightning-button label="Save" icon-name="utility:save" variant="inverse"></lightning-button>
                <lightning-button label="Delete" icon-name="utility:delete" variant="inverse"></lightning-button>
            </lightning-button-group>
        </div>
    </div>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class ButtonGroupWithMenu extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button group using simple buttons and a <em>buttonMenu</em>.
        </h2>

        <!-- Button group: simple buttons and a button-menu -->
        <lightning-button-group>
            <lightning-button label="Refresh"></lightning-button>
            <lightning-button label="Edit"></lightning-button>
            <lightning-button label="Save" icon-name="utility:save"></lightning-button>
            <lightning-button-menu alternative-text="Show menu" variant="border-filled">
                <lightning-menu-item label="Menu Item One" value="item1"></lightning-menu-item>
                <lightning-menu-item label="Menu Item Two" value="item2"></lightning-menu-item>
                <lightning-menu-item label="Menu Item Three" value="item3"></lightning-menu-item>
            </lightning-button-menu>
        </lightning-button-group>
    </div>
</template>

```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class ButtonGroupWithMenuDisabled extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button group using simple buttons and a disabled <em>buttonMenu</em>.
        </h2>

        <!-- Button group: simple buttons and a button-menu -->
        <lightning-button-group>
            <lightning-button label="Refresh"></lightning-button>
            <lightning-button label="Edit"></lightning-button>
            <lightning-button label="Save" icon-name="utility:save"></lightning-button>
            <lightning-button-menu alternative-text="Show menu" variant="border-filled" disabled>
                <lightning-menu-item label="Menu Item One" value="item1"></lightning-menu-item>
                <lightning-menu-item label="Menu Item Two" value="item2"></lightning-menu-item>
                <lightning-menu-item label="Menu Item Three" value="item3"></lightning-menu-item>
            </lightning-button-menu>
        </lightning-button-group>
    </div>
</template>

```

---
