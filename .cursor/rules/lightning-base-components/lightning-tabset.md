# lightning-tabset

**What is it?**  
This component is a tabbed container that organizes multiple content areas into separate tabs, providing users with an easy way to switch between different sections of information or functionality without leaving the page.

**Where would you use it?**
- Imagine you're using a website for a clothing store. The website has a page for each type of clothing (e.g., shirts, pants, shoes). Instead of having to navigate to a new page for each type of clothing, the website uses the <lightning-tabset> component to display all the types of clothing on one page. You can click on the 'Shirts' tab to see all the shirts, the 'Pants' tab to see all the pants, and so on. This makes it easier for you to browse all the types of clothing without having to load a new page each time.
- Suppose you're using a project management app. The app has a page for each project, and each project has several different sections (e.g., Tasks, Calendar, Files, Discussions). Instead of having to navigate to a new page for each section, the app uses the <lightning-tabset> component to display all the sections on one page. You can click on the 'Tasks' tab to see all the tasks for the project, the 'Calendar' tab to see the project's calendar, and so on. This makes it easier for you to manage all aspects of the project without having to load a new page each time.
- Consider you're using a fitness tracking app. The app has a page for each type of activity (e.g., Running, Cycling, Swimming). Instead of having to navigate to a new page for each activity, the app uses the <lightning-tabset> component to display all the activities on one page. You can click on the 'Running' tab to see all your running activities, the 'Cycling' tab to see all your cycling activities, and so on. This makes it easier for you to review all your activities without having to load a new page each time.

**How do you use it?**
- **variant** `string`  
  _Examples:_
    `<lightning-tabset variant='default'>`
    `<lightning-tabset variant='scoped'>`
    `<lightning-tabset variant='vertical'>`
- **class** `string`  
  _Examples:_
    `<lightning-tabset class='slds-theme_shade'>`
    `<lightning-tabset variant='scoped' class='tab-active'>`
- **heading-label** `string`  
  _Examples:_
    `<lightning-tabset heading-label='Example tabset'>`
- **heading-level** `number`  
  _Examples:_
    `<lightning-tabset heading-label='Example tabset' heading-level='3'>`
- **heading-visible** `boolean`  
  _Examples:_
    `<lightning-tabset heading-label='Example tabset' heading-level='3' heading-visible>`

**Related Components:**
- **lightning-tab** (required)

**Docs:**
---
examples:
    - name: basic
      label: Basic Tabset
      description: A tabset includes content within tabs.
    - name: scoped
      label: Tabset with Scoped Variant
      description: The scoped variant displays the tabset with a different visual styling than the default.
    - name: activeTab
      label: Tabset with Default Selected Tab
      description: A tabset can display an active tab by default using the active-tab-value attribute.
    - name: conditionalTab
      label: Tabset with Conditional Tabs
      description: A tab can be displayed or hidden conditionally.
    - name: onactive
      label: Tabset with Content Added When Tab is Selected
      description: Programmatically add content to a tab when the tab is selected. Tab's content is a message with the selected tab's value.
    - name: overflow
      label: Tabset with Overflow Tabs
      description: Overflow tabs are hidden from view when the view port is not wide enough. Overflow tabs are grouped in a dropdown menu labelled "More".
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class TabsetActiveTab extends LightningElement {}

```

```html
<template>
    <lightning-tabset active-tab-value="two">
        <lightning-tab label="Item One" value="one">
            One Content !
        </lightning-tab>
        <lightning-tab label="Item Two" value="two">
            Two Content !
        </lightning-tab>
        <lightning-tab label="Item Three" value="three">
            Three Content !
        </lightning-tab>
    </lightning-tabset>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class TabsetBasic extends LightningElement {}

```

```html
<template>
    <lightning-tabset>
        <lightning-tab label="Item One">
            One Content !
        </lightning-tab>
        <lightning-tab label="Item Two" title="2nd tab extended title">
            Two Content !
        </lightning-tab>
        <lightning-tab label="Item Three">
            Three Content !
        </lightning-tab>
    </lightning-tabset>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class TabsetConditionalTab extends LightningElement {
    showTabFour;

    toggleOptionalTab() {
        this.showTabFour = !this.showTabFour;
    }
}

```

```html
<template>
    <lightning-tabset>
        <lightning-tab label="Item One">
            One Content !
        </lightning-tab>
        <lightning-tab label="Item Two">
            Two Content !
        </lightning-tab>
        <lightning-tab label="Item Three">
            Three Content !
        </lightning-tab>
        <template if:true={showTabFour}>
            <lightning-tab label="Item Four">
                Four Content !
            </lightning-tab>
        </template>
    </lightning-tabset>

    <lightning-button label="Toggle Optional Tab" onclick={toggleOptionalTab} ></lightning-button>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

const NUM_OF_TABS = 3;

export default class TabsetOnActive extends LightningElement {
    activeValueMessage = '';

    get tabs() {
        const tabs = [];
        for (let i = 0; i < NUM_OF_TABS; i++) {
            tabs.push({
                value: `${i}`,
                label: `Item ${i}`,
                content: `Tab Content ${i}`,
            });
        }
        return tabs;
    }

    handleActive(event) {
        this.activeValueMessage = `Tab with value ${event.target.value} is now active`;
    }
}

```

```html
<template>
    <lightning-tabset variant="scoped" active-tab-value="2">
        <template for:each={tabs} for:item="tab">
            <lightning-tab label={tab.label} key={tab.value} value={tab.value} onactive={handleActive}>
                {tab.content}
            </lightning-tab>
        </template>
    </lightning-tabset>
    <lightning-formatted-text value={activeValueMessage} ></lightning-formatted-text>
</template>

```

**Example 5:**

```js
import { LightningElement } from 'lwc';

const NUM_OF_TABS = 30;

export default class TabsetOverflow extends LightningElement {
    activeValueMessage = '';

    get tabs() {
        const tabs = [];
        for (let i = 0; i < NUM_OF_TABS; i++) {
            tabs.push({
                value: `${i}`,
                label: `Item ${i}`,
                content: `Tab Content ${i}`,
            });
        }
        return tabs;
    }
}

```

```html
<template>
    <lightning-tabset variant="scoped">
        <template for:each={tabs} for:item="tab">
            <lightning-tab label={tab.label} key={tab.value} value={tab.value}>
                {tab.content}
            </lightning-tab>
        </template>
    </lightning-tabset>
</template>

```

**Example 6:**

```js
import { LightningElement } from 'lwc';

export default class TabsetScoped extends LightningElement {}

```

```html
<template>
    <lightning-tabset variant="scoped">
        <lightning-tab label="Item One">
            One Content !
        </lightning-tab>
        <lightning-tab label="Item Two">
            Two Content !
        </lightning-tab>
        <lightning-tab label="Item Three">
            Three Content !
        </lightning-tab>
    </lightning-tabset>
</template>

```

**Example 7:**

```js
import { LightningElement } from 'lwc';

export default class TabsetVertical extends LightningElement {}

```

```html
<template>
    <lightning-tabset variant="vertical">
        <lightning-tab label="Item One">
            One Content !
        </lightning-tab>
        <lightning-tab label="Item Two">
            Two Content !
        </lightning-tab>
        <lightning-tab label="Item Three">
            Three Content !
        </lightning-tab>
    </lightning-tabset>
</template>

```

---
