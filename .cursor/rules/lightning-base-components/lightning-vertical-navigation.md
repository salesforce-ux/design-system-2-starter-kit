# lightning-vertical-navigation

**What is it?**  
This component is a vertical navigation menu that provides a list of links, with support for overflow sections, icons, badges, and links, offering a user-friendly navigation experience with highlighted selections and compact spacing options.

**Where would you use it?**
- Imagine you're using a website for a large online store. On the left side of the screen, there's a vertical menu that lists different categories of products, like 'Electronics', 'Books', 'Clothing', etc. This is a perfect use case for the <lightning-vertical-navigation> component, as it allows users to easily navigate between different sections of the website.
- On a news website, there's a vertical menu on the side of the page that lists different news categories, like 'World News', 'Sports', 'Entertainment', etc. Some of these categories have a small icon next to them, like a football for 'Sports'. This is another scenario where the <lightning-vertical-navigation> component would be useful, as it supports adding icons to the navigation items.
- Consider a music streaming website. On the left side of the screen, there's a vertical menu that lists different sections of the website, like 'Home', 'Browse', 'Your Library', etc. Some of these sections have a small badge next to them, indicating new content. This is a scenario where the <lightning-vertical-navigation> component would be used, as it supports adding badges to the navigation items.
- On a large corporate website, there's a vertical menu on the side of the page that lists different sections of the website, like 'About Us', 'Our Services', 'Contact Us', etc. Some of these sections have a link that takes you to a different website. This is another scenario where the <lightning-vertical-navigation> component would be useful, as it supports adding links to the navigation items.
- Imagine a website with a lot of content and a vertical menu on the side of the page that lists different sections. However, there's not enough space to display all the sections at once, so some of them are hidden under an 'More' section that expands when clicked. This is a perfect use case for the <lightning-vertical-navigation> component, as it supports an overflow section for when space is limited.
- On a website for a university, there's a vertical menu on the side of the page that lists different sections, like 'Admissions', 'Academics', 'Campus Life', etc. The menu is on a shaded background, and the selected section is highlighted in white. This is another scenario where the <lightning-vertical-navigation> component would be useful, as it supports highlighting the selected item on a shaded background.

**How do you use it?**
- **selected-item** `string`  
  _Examples:_
    `<lightning-vertical-navigation selected-item="recent">`
    `<lightning-vertical-navigation selected-item={selectedItemName}>`
- **onselect** `(ev: CustomEvent & { detail: { name: string } }) => void`  
  _Examples:_
    `<lightning-vertical-navigation onselect={handleSelect}>`
- **onbeforeselect** `(ev: CustomEvent & { detail: { name: string } }) => void`  
  _Examples:_
    `<lightning-vertical-navigation onbeforeselect={handleBeforeSelect}>`

**Related Components:**
- **lightning-vertical-navigation-section** (required)
- **lightning-vertical-navigation-item** (required)
- **lightning-vertical-navigation-overflow** (optional)
- **lightning-vertical-navigation-item-badge** (optional)
- **lightning-vertical-navigation-item-icon** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Vertical Navigation
      description: A vertical navigation includes at least one navigation section and item.
    - name: selected
      label: Vertical Navigation with Default Selection
      description: A selected item is highlighted in blue.
    - name: icon
      label: Vertical Navigation Items with Icons
      description: Navigation items can include an icon on the left of the label.
    - name: badge
      label: Vertical Navigation Items with Badges
      description: Navigation items can include a badge on the right of the label.
    - name: href
      label: Vertical Navigation Items with Links
      description: Navigation items can include links to external websites.
    - name: compact
      label: Vertical Navigation with Compact Spacing
      description: A vertical navigation can be displayed with reduced whitespace.
...

**Examples:**
**Example 1:**

```js
import { LightningElement, track } from 'lwc';

export default class LightningExampleVerticalNavAdvanced extends LightningElement {
    @track selectedItem = 'reports_recent';
    @track currentContent = 'reports_recent';
    @track updatedCount = 12;

    handleSelect(event) {
        const selected = event.detail.name;

        if (selected === 'reports_updated') {
            this.updatedCount = 0;
        }

        this.currentContent = selected;
    }
}

```

```html
<template>
    <div style="min-width: 225px; border-right: 1px solid #e7e7e7;">
        <lightning-layout>
            <lightning-layout-item>
                <lightning-vertical-navigation selected-item={selectedItem} onselect={handleSelect} class="navigation">
                    <lightning-vertical-navigation-section label="Reports">
                        <lightning-vertical-navigation-item label="Recently Viewed" name="reports_recent"></lightning-vertical-navigation-item>
                        <lightning-vertical-navigation-item label="Private Reports" name="reports_private"></lightning-vertical-navigation-item>
                        <lightning-vertical-navigation-item label="Public Reports" name="reports_public"></lightning-vertical-navigation-item>
                        <lightning-vertical-navigation-item label="All Reports" name="reports_all"></lightning-vertical-navigation-item>
                        <lightning-vertical-navigation-item-badge label="Recently Updated" name="reports_updated" badge-count={updatedCount}></lightning-vertical-navigation-item-badge>
                    </lightning-vertical-navigation-section>
                    <lightning-vertical-navigation-section label="Folders">
                        <lightning-vertical-navigation-item-icon label="Created by Me" name="folders_created" icon-name="utility:open_folder"></lightning-vertical-navigation-item-icon>
                        <lightning-vertical-navigation-item-icon label="Shared with Me" name="folders_shared" icon-name="utility:open_folder"></lightning-vertical-navigation-item-icon>
                        <lightning-vertical-navigation-item label="All Folders" name="folders_all"></lightning-vertical-navigation-item>
                    </lightning-vertical-navigation-section>
                    <lightning-vertical-navigation-overflow>
                        <lightning-vertical-navigation-item label="Extra Report 1" name="reports_extra1"></lightning-vertical-navigation-item>
                        <lightning-vertical-navigation-item label="Extra Report 2" name="reports_extra2"></lightning-vertical-navigation-item>
                        <lightning-vertical-navigation-item label="Extra Report 3" name="reports_extra3"></lightning-vertical-navigation-item>
                        <lightning-vertical-navigation-item label="Extra Report 4" name="reports_extra4"></lightning-vertical-navigation-item>
                        <lightning-vertical-navigation-item label="Extra Report 5" name="reports_extra5"></lightning-vertical-navigation-item>
                    </lightning-vertical-navigation-overflow>
                    <lightning-vertical-navigation-overflow>
                        <lightning-vertical-navigation-item label="Extra Folder 1" name="folders_extra1"></lightning-vertical-navigation-item>
                        <lightning-vertical-navigation-item label="Extra Folder 2" name="folders_extra2"></lightning-vertical-navigation-item>
                        <lightning-vertical-navigation-item label="Extra Folder 3" name="folders_extra3"></lightning-vertical-navigation-item>
                    </lightning-vertical-navigation-overflow>
                </lightning-vertical-navigation>
            </lightning-layout-item>
            <lightning-layout-item padding="around-medium">
                <p>You Are Viewing: {currentContent} </p>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleVerticalNavBadge extends LightningElement {}

```

```html
<template>
    <div style="width: 320px;">
        <lightning-vertical-navigation selected-item="recent">
            <lightning-vertical-navigation-section label="Reports">
                <lightning-vertical-navigation-item-badge label="Recent" name="recent" badge-count="3"></lightning-vertical-navigation-item-badge>
                <lightning-vertical-navigation-item label="Created by Me" name="usercreated"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Private Reports" name="private"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Public Reports" name="public"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="All Reports" name="all"></lightning-vertical-navigation-item>
            </lightning-vertical-navigation-section>
        </lightning-vertical-navigation>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleVerticalNavBasic extends LightningElement {}

```

```html
<template>
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

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleVerticalNavCompact extends LightningElement {}

```

```html
<template>
    <div style="width: 320px;">
        <lightning-vertical-navigation selected-item="recent" compact>
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

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleVerticalNavHref extends LightningElement {}

```

```html
<template>
    <div style="width: 320px;">
        <lightning-vertical-navigation>
            <lightning-vertical-navigation-section label="Navigation">
                <lightning-vertical-navigation-item label="Home" name="home" href="/"></lightning-vertical-navigation-item>
            </lightning-vertical-navigation-section>
            <lightning-vertical-navigation-section label="Resources">
                <lightning-vertical-navigation-item
                    label="Salesforce"
                    name="salesforce"
                    href="https://www.salesforce.com/">
                </lightning-vertical-navigation-item>

                <lightning-vertical-navigation-item
                    label="Salesforce Developers"
                    name="developers"
                    href="https://developer.salesforce.com/">
                </lightning-vertical-navigation-item>

                <lightning-vertical-navigation-item
                    label="Trailhead"
                    name="trailhead"
                    href="https://trailhead.salesforce.com">
                </lightning-vertical-navigation-item>
            </lightning-vertical-navigation-section>
        </lightning-vertical-navigation>
    </div>
</template>

```

**Example 6:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleVerticalNavIcon extends LightningElement {}

```

```html
<template>
    <div style="width: 320px;">
        <lightning-vertical-navigation selected-item="reports_recent">
            <lightning-vertical-navigation-section label="Reports">
                <lightning-vertical-navigation-item-icon
                    label="Recent"
                    name="reports_recent"
                    icon-name="utility:clock">
                </lightning-vertical-navigation-item-icon>

                <lightning-vertical-navigation-item-icon
                    label="Created by Me"
                    name="reports_usercreated"
                    icon-name="utility:user">
                </lightning-vertical-navigation-item-icon>

                <lightning-vertical-navigation-item-icon
                    label="Private Reports"
                    name="reports_private"
                    icon-name="utility:lock">
                </lightning-vertical-navigation-item-icon>

                <lightning-vertical-navigation-item-icon
                    label="Public Reports"
                    name="reports_public"
                    icon-name="utility:groups">
                </lightning-vertical-navigation-item-icon>

                <lightning-vertical-navigation-item
                    label="All Reports"
                    name="reports_all">
                </lightning-vertical-navigation-item>
            </lightning-vertical-navigation-section>

            <lightning-vertical-navigation-section label="Folders">
                <lightning-vertical-navigation-item-icon
                    label="Created by Me"
                    name="folders_usercreated"
                    icon-name="utility:open_folder">
                </lightning-vertical-navigation-item-icon>

                <lightning-vertical-navigation-item-icon
                    label="Shared with Me"
                    name="folders_shared"
                    icon-name="utility:open_folder">
                </lightning-vertical-navigation-item-icon>
            </lightning-vertical-navigation-section>
        </lightning-vertical-navigation>
    </div>
</template>

```

**Example 7:**

```js
import { LightningElement } from 'lwc';

const sections = [
    {
        label: 'Reports',
        items: [
            {
                label: 'Recent',
                name: 'default_recent',
                icon: 'utility:clock',
            },
            {
                label: 'Created by Me',
                name: 'default_created',
            },
            {
                label: 'Public Reports',
                name: 'default_public',
            },
            {
                label: 'My P1 Bugs',
                name: 'custom_p1bugs',
            },
        ],
    },

    {
        label: 'Dashboards',
        items: [
            {
                label: 'Favorites',
                name: 'default_favorites',
                icon: 'utility:favorite',
            },
            {
                label: 'Most Popular',
                name: 'custom_mostpopular',
            },
            {
                label: 'Summer Release Metrics',
                name: 'custom_newreleaseadoption',
            },
        ],
    },
];

export default class LightningExampleVerticalNavIteration extends LightningElement {
    initiallySelected = 'default_recent';
    navigationData = sections;
}

```

```html
<template>
    <div style="width: 320px;">
        <lightning-vertical-navigation selected-item={initiallySelected}>
            <template for:each={navigationData} for:item="section">
                <lightning-vertical-navigation-section key={section.label} label={section.label}>
                    <template for:each={section.items} for:item="item">
                        <template if:true={item.icon}>
                            <lightning-vertical-navigation-item-icon key={item.name} label={item.label} name={item.name} icon-name={item.icon}></lightning-vertical-navigation-item-icon>
                        </template>
                        <template if:false={item.icon}>
                            <lightning-vertical-navigation-item key={item.name} label={item.label} name={item.name}></lightning-vertical-navigation-item>
                        </template>
                    </template>

                </lightning-vertical-navigation-section>
            </template>
        </lightning-vertical-navigation>
    </div>
</template>

```

**Example 8:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleVerticalNavOverflow extends LightningElement {}

```

```html
<template>
    <div style="width: 320px;">
        <lightning-vertical-navigation selected-item="recent">
            <lightning-vertical-navigation-section label="Reports">
                <lightning-vertical-navigation-item label="Recent" name="recent"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Private Reports" name="private"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Public Reports" name="public"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="All Reports" name="all"></lightning-vertical-navigation-item>
            </lightning-vertical-navigation-section>
            <lightning-vertical-navigation-overflow>
                <lightning-vertical-navigation-item label="Regional Sales NW" name="1859008"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Regional Sales SW" name="1919113"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Regional Sales NE" name="1919115"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Regional Sales SE" name="1919112"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Regional Sales - Outdated" name="1213411"></lightning-vertical-navigation-item>
                <lightning-vertical-navigation-item label="Account Planning Fall Review" name="1213114"></lightning-vertical-navigation-item>
            </lightning-vertical-navigation-overflow>
        </lightning-vertical-navigation>
    </div>
</template>

```

**Example 9:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleVerticalNavSelected extends LightningElement {}

```

```html
<template>
    <div style="width: 320px;">
        <lightning-vertical-navigation selected-item="recent">
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

**Example 10:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleVerticalNavShaded extends LightningElement {}

```

```html
<template>
    <div style="width: 320px;">
        <lightning-vertical-navigation selected-item="recent" shaded>
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

**Example 11:**

```js
import { LightningElement, track } from 'lwc';

export default class LightningExampleVerticalNavValidation extends LightningElement {
    @track asyncValidation;
    @track hasBeenEdited = false;
    @track selectedItem = 'report_1';

    handleClick() {
        this.hasBeenEdited = true;
    }

    handleBeforeSelect(event) {
        if (this.hasBeenEdited) {
            // Prevent the onselect handler from running
            event.preventDefault();

            this.asyncValidation = true;

            // Simulate an async operation
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            setTimeout(() => {
                this.hasBeenEdited = false;
                this.selectedItem = event.detail.name;
                this.asyncValidation = false;
            }, 2000);
        }
    }
}

```

```html
<template>
    <div style="width: 320px;">
        <lightning-layout>
            <lightning-layout-item>
                <lightning-vertical-navigation onbeforeselect={handleBeforeSelect} selected-item={selectedItem}>
                    <lightning-vertical-navigation-item label="Report 1" name="report_1"></lightning-vertical-navigation-item>
                    <lightning-vertical-navigation-item label="Report 2" name="report_2"></lightning-vertical-navigation-item>
                    <lightning-vertical-navigation-item label="Report 3" name="report_3"></lightning-vertical-navigation-item>
                    <lightning-vertical-navigation-item label="Report 4" name="report_4"></lightning-vertical-navigation-item>
                    <lightning-vertical-navigation-item label="Report 5" name="report_5"></lightning-vertical-navigation-item>
                </lightning-vertical-navigation>
            </lightning-layout-item>
            <lightning-layout-item class="layoutContent" padding="around-medium">
                <template if:true={asyncValidation}>
                    <lightning-spinner alternative-text="Validating asynchronously"></lightning-spinner>
                </template>
                <template if:false={asyncValidation}>
                    <lightning-button label="Click to require validation" onclick={handleClick}></lightning-button>
                    <p>You Are Viewing: {selectedItem}</p>
                    <p>Validate on navigate: {hasBeenEdited}</p>
                </template>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

---
