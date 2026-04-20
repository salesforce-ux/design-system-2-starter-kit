# lightning-button-menu

**What is it?**  
This component is a button that displays a dropdown menu of actions or functions when clicked, providing an interactive user experience with customizable styles, loading states, and accessibility features.

**Where would you use it?**
- Imagine you're using a word processing software and you want to change the font, size, or format of your text. You could click on a button that opens a dropdown menu with these options, each represented by a <lightning-button-menu> component. Once you select an option, the menu closes and your text changes according to your selection.
- Consider a scenario where you're using a project management tool. There could be a <lightning-button-menu> component next to each task in your task list. When you click on the button, a dropdown menu appears with options to edit the task, mark it as complete, or delete it. Once you make a selection, the menu closes and the task list updates based on your action.
- Imagine you're using a music streaming app. There could be a <lightning-button-menu> component next to each song in your playlist. When you click on the button, a dropdown menu appears with options to play the song, add it to your favorites, or remove it from the playlist. Once you make a selection, the menu closes and your playlist updates based on your action.

**How do you use it?**
- **alternative-text** `string`  
  _Examples:_
    `<lightning-button-menu alternative-text='Settings'>`
    `<lightning-button-menu alternative-text={alternativeTextValue}>`
- **label** `string`  
  _Examples:_
    `<lightning-button-menu label='Menu'>`
    `<lightning-button-menu label={labelValue}>`
- **icon-name** `string`  
  _Examples:_
    `<lightning-button-menu icon-name='utility:settings'>`
    `<lightning-button-menu icon-name={iconNameValue}>`
- **icon-size** `string`  
  _Examples:_
    `<lightning-button-menu icon-size='small'>`
    `<lightning-button-menu icon-size={iconSizeValue}>`
- **variant** `string`  
  _Examples:_
    `<lightning-button-menu variant='border'>`
    `<lightning-button-menu variant={variantValue}>`
- **is-loading** `boolean`  
  _Examples:_
    `<lightning-button-menu is-loading>`
    `<lightning-button-menu is-loading={isLoadingValue}>`
- **loading-state-alternative-text** `string`  
  _Examples:_
    `<lightning-button-menu loading-state-alternative-text='Loading menu...'>`
    `<lightning-button-menu loading-state-alternative-text={loadingStateAltTextValue}>`
- **is-draft** `boolean`  
  _Examples:_
    `<lightning-button-menu is-draft>`
    `<lightning-button-menu is-draft={isDraftValue}>`
- **draft-alternative-text** `string`  
  _Examples:_
    `<lightning-button-menu draft-alternative-text='Unsaved changes'>`
    `<lightning-button-menu draft-alternative-text={draftAltTextValue}>`
- **menu-alignment** `string`  
  _Examples:_
    `<lightning-button-menu menu-alignment='auto'>`
    `<lightning-button-menu menu-alignment={menuAlignmentValue}>`
- **tooltip** `string`  
  _Examples:_
    `<lightning-button-menu tooltip='Choose a settings category'>`
    `<lightning-button-menu tooltip={tooltipValue}>`
- **onselect** `(ev: CustomEvent & { detail: { value: string } }) => void`  
  _Examples:_
    `<lightning-button-menu onselect={handleMenuSelect}>`
- **onopen** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-button-menu onopen={handleMenuOpen}>`
- **onclose** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-button-menu onclose={handleMenuClose}>`

**Related Components:**
- **lightning-menu-item** (required)
- **lightning-menu-divider** (optional)
- **lightning-menu-subheader** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Simple Button Menus
      description: Button menu items can be disabled.
    - name: withIcon
      label: Button Menus Using Icons and Menu Alignment
      description: Button menus can display a utility icon next to the dropdown and change the menu alignment.
    - name: variants
      label: Button Menu Variants
      description: Button menus variants change the border style and size, or display with a dark background.
    - name: onselect
      label: Button Menu with Custom onselect Behavior
      description: Button menu with custom onselect handler.
---

A `lightning-button-menu` component represents a button that displays a
dropdown menu of actions or functions when you click it.

The menu closes when you click away from it, and it also closes and puts the
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class ButtonMenuBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with only <code>lightning-menu-item</code> elements.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with some <code>lightning-menu-item</code> elements disabled.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two" disabled></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three" disabled></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class ButtonMenuOnselect extends LightningElement {
    selectedItemValue;

    handleOnselect(event) {
        this.selectedItemValue = event.detail.value;
    }
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with a custom <code>onselect</code> event handler. The value of the item selected is shown below the menu.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" variant="border-filled" onselect={handleOnselect}>
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>

        <div class="slds-m-vertical_medium">
            <p>The value of the menu item you selected is: <span class="slds-text-heading_small">{selectedItemValue}</span></p>
        </div>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class ButtonMenuVariants extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with the <code>variant</code> attribute set to <code>border</code>,
            which is the default if omitted.
        </h2>

        <!-- Default/border -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" variant="border">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with <code>bare</code> variant has a smaller clickable area.
        </h2>

        <!-- Bare -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" variant="bare">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with <code>container</code> variant is borderless with default size clickable area.
        </h2>

        <!-- Container/borderless -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" variant="container">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with <code>border-filled</code> variant.
        </h2>

        <!-- Border-filled -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" variant="border-filled">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button-menu with the <code>bare-inverse</code> variant.
        </h2>

        <!-- Bare-inverse -->
        <div class="slds-p-around_medium lgc-bg-inverse">
            <lightning-button-menu alternative-text="Show menu" variant="bare-inverse">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menu with <code>border-inverse</code> variant.
        </h2>

        <!-- Border-inverse -->
        <div class="slds-p-around_medium lgc-bg-inverse">
            <lightning-button-menu alternative-text="Show menu" variant="border-inverse">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class ButtonMenuWithIcon extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menus that use the <code>icon-name</code> attribute.
        </h2>

        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" variant="border-filled" icon-name="utility:settings">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu alternative-text="Show menu" variant="border-filled" icon-name="utility:add" class="slds-m-left_large">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu alternative-text="Show menu" variant="border-filled" icon-name="utility:automate" class="slds-m-left_large">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu alternative-text="Show menu" variant="border-filled" icon-name="utility:connected_apps" class="slds-m-left_large">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu alternative-text="Show menu" variant="border-filled" icon-name="utility:record_create" class="slds-m-left_large">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menus that use the <code>icon-size</code> attribute. <code>xx-small</code>, <code>x-small</code>, <code>small</code>, <code>medium</code> (default), and <code>large</code>.
        </h2>

        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" variant="border-filled" icon-size="xx-small" icon-name="utility:animal_and_nature">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu alternative-text="Show menu" variant="border-filled" icon-size="x-small" icon-name="utility:animal_and_nature" class="slds-m-left_large">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu alternative-text="Show menu" variant="border-filled" icon-size="small" icon-name="utility:animal_and_nature" class="slds-m-left_large">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu alternative-text="Show menu" variant="border-filled" icon-name="utility:animal_and_nature" class="slds-m-left_large">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu alternative-text="Show menu" variant="border-filled" icon-size="large" icon-name="utility:animal_and_nature" class="slds-m-left_large">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small slds-m-bottom_medium">
            Button menus that use the <code>menu-alignment</code> attribute to specify how the menu aligns with the button.
        </h2>

        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-menu alternative-text="Show menu" tooltip="Left alignment (default)" icon-name="utility:settings"  class="slds-m-left_xx-large">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu alternative-text="Show menu" tooltip="Right alignment"  menu-alignment="right" icon-name="utility:add" class="slds-m-left_xx-large">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu alternative-text="Show menu" tooltip="Center alignment" menu-alignment="center" icon-name="utility:automate"  class="slds-m-left_xx-large">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>

            <lightning-button-menu alternative-text="Show menu" icon-name="utility:connected_apps" tooltip="Auto alignment"  menu-alignment="auto" class="slds-m-left_xx-large">
                <lightning-menu-item value="MenuItemOne" label="Menu Item One"></lightning-menu-item>
                <lightning-menu-item value="MenuItemTwo" label="Menu Item Two"></lightning-menu-item>
                <lightning-menu-item value="MenuItemThree" label="Menu Item Three"></lightning-menu-item>
                <lightning-menu-item value="MenuItemFour" label="Menu Item Four"></lightning-menu-item>
            </lightning-button-menu>
        </div>
    </div>
</template>

```

---
