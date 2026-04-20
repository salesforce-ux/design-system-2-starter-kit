# lightning-button-icon

**What is it?**  
This component is an icon-only button that executes an action when clicked, providing a customizable user experience with options for different sizes, styles, and icons, and ensuring accessibility with features like hover text and assistive text.

**Where would you use it?**
- Imagine you're using a web application to manage your emails. At the top of the screen, there's a toolbar with several small buttons. One of these buttons, represented by a trash can icon, allows you to delete the currently selected email when clicked. This button is an example of a <lightning-button-icon> component.
- Consider a music streaming application. On the screen displaying the currently playing song, there's a small button with a heart icon. When you click this button, the song is added to your list of favorites. This button, which performs an action when clicked and is represented by an icon, is a <lightning-button-icon> component.
- Imagine you're using a web application to edit a document. There's a toolbar at the top of the screen with several small buttons. One of these buttons, represented by a floppy disk icon, allows you to save your changes when clicked. This button is an example of a <lightning-button-icon> component.
- Consider a photo editing application. On the screen where you edit a photo, there's a small button with a magnifying glass icon. When you click this button, the photo is zoomed in. This button, which performs an action when clicked and is represented by an icon, is a <lightning-button-icon> component.
- Imagine you're using a web application to manage your calendar. At the top of the screen, there's a toolbar with several small buttons. One of these buttons, represented by a plus sign icon, allows you to add a new event when clicked. This button is an example of a <lightning-button-icon> component.
- Consider a social media application. On the screen displaying a post, there's a small button with a thumbs up icon. When you click this button, you 'like' the post. This button, which performs an action when clicked and is represented by an icon, is a <lightning-button-icon> component.

**How do you use it?**
- **icon-name** `string`  
  _Examples:_
    `<lightning-button-icon icon-name='utility:close'>`
    `<lightning-button-icon icon-name='utility:settings'>`
    `<lightning-button-icon icon-name='utility:zoomin'>`
- **variant** `string`  
  _Examples:_
    `<lightning-button-icon variant='bare'>`
    `<lightning-button-icon variant='bare-inverse'>`
    `<lightning-button-icon variant='border'>`
- **size** `string`  
  _Examples:_
    `<lightning-button-icon size='medium'>`
    `<lightning-button-icon size='small'>`
    `<lightning-button-icon size='x-small'>`
- **icon-class** `string`  
  _Examples:_
    `<lightning-button-icon icon-class='slds-m-around_medium'>`
- **alternative-text** `string`  
  _Examples:_
    `<lightning-button-icon alternative-text='Close window'>`
    `<lightning-button-icon alternative-text='Settings'>`
    `<lightning-button-icon alternative-text='Zoom in'>`
- **onclick** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-button-icon onclick={handleClick}>`
- **title** `string`  
  _Examples:_
    `<lightning-button-icon title='Zoom in'>`
    `<lightning-button-icon title='Zoom out'>`
    `<lightning-button-icon title='Settings'>`
- **tooltip** `string`  
  _Examples:_
    `<lightning-button-icon tooltip='Display your account settings'>`
- **aria-label** `string`  
  _Examples:_
    `<lightning-button-icon aria-label='Zoom in'>`
    `<lightning-button-icon aria-label='Zoom out'>`
    `<lightning-button-icon aria-label='Settings'>`
- **aria-expanded** `boolean`  
  _Examples:_
    `<lightning-button-icon aria-expanded={isExpanded}>`
- **aria-haspopup** `string`  
  _Examples:_
    `<lightning-button-icon aria-haspopup='true'>`
- **aria-live** `string`  
  _Examples:_
    `<lightning-button-icon aria-live='polite'>`
    `<lightning-button-icon aria-live='assertive'>`
- **tabindex** `integer`  
  _Examples:_
    `<lightning-button-icon tabindex={tabIndexValue}>`

**Related Components:**


**Docs:**
---
examples:
    - name: basic
      label: Button Icon Variants
      description: Button icons with multiple variants.
    - name: sizes
      label: Button Icon Sizes
      description: Button icons with multiple sizes.
    - name: inverse
      label: Button Icons with Inverse Variants
      description: Button icons with two types of inverse variants to display on a dark background.
---

A `lightning-button-icon` component represents an icon-only button element that
executes an action in a controller. Clicking the button triggers the JavaScript
method set for `onclick`.

Here is an example.

```html
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class ButtonIconBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button-icons with the <code>variant</code> attribute omitted or set to the default value of <code>border</code>.
        </h2>
        <!-- with border / by default -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-icon icon-name="utility:settings"  alternative-text="Settings" title="Settings"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:adduser"   alternative-text="Add user" class="slds-m-left_xx-small" title="Add user"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:delete"    alternative-text="Delete"   class="slds-m-left_xx-small" title="Delete"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:save"      alternative-text="Save"     class="slds-m-left_xx-small" title="Save"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:bookmark"  alternative-text="Bookmark" class="slds-m-left_xx-small" title="Bookmark"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:zoomin"    alternative-text="Zoom in"  class="slds-m-left_xx-small" title="Zoom in"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:zoomout"   alternative-text="Zoom out" class="slds-m-left_xx-small" title="Zoom out"></lightning-button-icon>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button-icons with the <code>variant</code> attribute set to <code>bare</code>.
        </h2>

        <!-- bare -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-icon icon-name="utility:settings"  variant="bare" alternative-text="Settings" title="Settings"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:adduser"   variant="bare" alternative-text="Add user" class="slds-m-left_xx-small" title="Add user"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:delete"    variant="bare" alternative-text="Delete"   class="slds-m-left_xx-small" title="Delete"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:save"      variant="bare" alternative-text="Save"     class="slds-m-left_xx-small" title="Save"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:bookmark"  variant="bare" alternative-text="Bookmark" class="slds-m-left_xx-small" title="Bookmark"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:zoomin"    variant="bare" alternative-text="Zoom in"  class="slds-m-left_xx-small" title="Zoom in"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:zoomout"   variant="bare" alternative-text="Zoom out" class="slds-m-left_xx-small" title="Zoom out"></lightning-button-icon>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
            <h2 class="slds-text-heading_medium slds-m-bottom_medium">
                Button-icons with the <code>variant</code> attribute set to <code>brand</code>.
            </h2>
    
            <!-- bare -->
            <div class="slds-p-around_medium lgc-bg">
                <lightning-button-icon icon-name="utility:settings"  variant="brand" alternative-text="Settings"></lightning-button-icon>
                <lightning-button-icon icon-name="utility:adduser"   variant="brand" alternative-text="Add user" class="slds-m-left_xx-small" title="Add user"></lightning-button-icon>
                <lightning-button-icon icon-name="utility:delete"    variant="brand" alternative-text="Delete"   class="slds-m-left_xx-small" title="Delete"></lightning-button-icon>
                <lightning-button-icon icon-name="utility:save"      variant="brand" alternative-text="Save"     class="slds-m-left_xx-small" title="Save"></lightning-button-icon>
                <lightning-button-icon icon-name="utility:bookmark"  variant="brand" alternative-text="Bookmark" class="slds-m-left_xx-small" title="Bookmark"></lightning-button-icon>
                <lightning-button-icon icon-name="utility:zoomin"    variant="brand" alternative-text="Zoom in"  class="slds-m-left_xx-small" title="Zoom in"></lightning-button-icon>
                <lightning-button-icon icon-name="utility:zoomout"   variant="brand" alternative-text="Zoom out" class="slds-m-left_xx-small" title="Zoom out"></lightning-button-icon>
            </div>
        </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button-icons with the <code>variant</code> attribute set to <code>container</code>.
        </h2>

        <!-- with container -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-icon icon-name="utility:settings"  variant="container" alternative-text="Settings" title="Settings"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:adduser"   variant="container" alternative-text="Add user" class="slds-m-left_xx-small" title="Add user"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:delete"    variant="container" alternative-text="Delete"   class="slds-m-left_xx-small" title="Delete"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:save"      variant="container" alternative-text="Save"     class="slds-m-left_xx-small" title="Save"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:bookmark"  variant="container" alternative-text="Bookmark" class="slds-m-left_xx-small" title="Bookmark"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:zoomin"    variant="container" alternative-text="Zoom in"  class="slds-m-left_xx-small" title="Zoom in"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:zoomout"   variant="container" alternative-text="Zoom out" class="slds-m-left_xx-small" title="Zoom out"></lightning-button-icon>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button-icons with the <code>variant</code> attribute set to <code>border-filled</code>.
        </h2>

        <!-- with border filled -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-icon icon-name="utility:settings"  variant="border-filled" alternative-text="Settings" title="Settings"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:adduser"   variant="border-filled" alternative-text="Add user" class="slds-m-left_xx-small" title="Add user"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:delete"    variant="border-filled" alternative-text="Delete"   class="slds-m-left_xx-small" title="Delete"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:save"      variant="border-filled" alternative-text="Save"     class="slds-m-left_xx-small" title="Save"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:bookmark"  variant="border-filled" alternative-text="Bookmark" class="slds-m-left_xx-small" title="Bookmark"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:zoomin"    variant="border-filled" alternative-text="Zoom in"  class="slds-m-left_xx-small" title="Zoom in"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:zoomout"   variant="border-filled" alternative-text="Zoom out" class="slds-m-left_xx-small" title="Zoom out"></lightning-button-icon>
        </div>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class ButtonIconInverse extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button-icons with the <code>variant</code> attribute set to <code>border-inverse</code>.
        </h2>
        <!-- with border / by default -->
        <div class="slds-p-around_medium lgc-bg-inverse">
            <lightning-button-icon icon-name="utility:settings"  alternative-text="Settings" variant="border-inverse" title="Settings"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:adduser"   alternative-text="Add user" variant="border-inverse" class="slds-m-left_xx-small" title="Add user"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:delete"    alternative-text="Delete"   variant="border-inverse" class="slds-m-left_xx-small" title="Delete"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:save"      alternative-text="Save"     variant="border-inverse" class="slds-m-left_xx-small" title="Save"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:bookmark"  alternative-text="Bookmark" variant="border-inverse" class="slds-m-left_xx-small" title="Bookmark"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:zoomin"    alternative-text="Zoom in"  variant="border-inverse" class="slds-m-left_xx-small" title="Zoom in"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:zoomout"   alternative-text="Zoom out" variant="border-inverse" class="slds-m-left_xx-small" title="Zoom out"></lightning-button-icon>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button-icons with the <code>variant</code> attribute set to <code>bare-inverse</code>.
        </h2>
        <!-- with border / by default -->
        <div class="slds-p-around_medium lgc-bg-inverse">
            <lightning-button-icon icon-name="utility:settings"  alternative-text="Settings" variant="bare-inverse" title="Settings"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:adduser"   alternative-text="Add user" variant="bare-inverse" class="slds-m-left_xx-small" title="Add user"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:delete"    alternative-text="Delete"   variant="bare-inverse" class="slds-m-left_xx-small" title="Delete"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:save"      alternative-text="Save"     variant="bare-inverse" class="slds-m-left_xx-small" title="Save"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:bookmark"  alternative-text="Bookmark" variant="bare-inverse" class="slds-m-left_xx-small" title="Bookmark"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:zoomin"    alternative-text="Zoom in"  variant="bare-inverse" class="slds-m-left_xx-small" title="Zoom in"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:zoomout"   alternative-text="Zoom out" variant="bare-inverse" class="slds-m-left_xx-small" title="Zoom out"></lightning-button-icon>
        </div>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class ButtonIconSizes extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button-icons with the <code>size</code> attribute set to a valid value (<code>xx-small, x-small, small, medium</code>).
        </h2>

        <!--Sizes -->
        <div class="slds-p-around_medium">
            <lightning-button-icon icon-name="utility:down"  size="xx-small" alternative-text="View More"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:down"  size="x-small"  alternative-text="View More" class="slds-m-left_xx-small"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:down"  size="small"    alternative-text="View More" class="slds-m-left_xx-small"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:down"  size="medium"   alternative-text="View More" class="slds-m-left_xx-small"></lightning-button-icon>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button-icons with the <code>variant</code> attribute set to <code>bare</code> and the <code>size</code> attribute set to a valid value (<code>x-small, small, medium, large</code>).
        </h2>

        <div class="slds-p-around_medium">
            <lightning-button-icon icon-name="utility:down"  size="x-small"   variant="bare" alternative-text="View More"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:down"  size="small"     variant="bare" alternative-text="View More" class="slds-m-left_xx-small"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:down"  size="medium"    variant="bare" alternative-text="View More" class="slds-m-left_xx-small"></lightning-button-icon>
            <lightning-button-icon icon-name="utility:down"  size="large"     variant="bare" alternative-text="View More" class="slds-m-left_xx-small"></lightning-button-icon>
        </div>
    </div>
</template>

```

---
