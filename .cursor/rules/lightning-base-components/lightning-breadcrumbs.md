# lightning-breadcrumbs

**What is it?**  
This component is an ordered list that displays the navigation path of a page, allowing users to easily navigate back to parent pages, with each item being actionable and separated by a greater-than sign for a clear and accessible user experience.

**Where would you use it?**
- In an online shopping website, the <lightning-breadcrumbs> component can be used to show the path a user has taken to reach a specific product. For example, if a user navigates from 'Home' to 'Electronics' to 'Laptops' to 'Apple MacBook Pro', the breadcrumbs would show this path, allowing the user to easily navigate back to any previous category.
- In a digital library, the <lightning-breadcrumbs> component can be used to show the path a user has taken to reach a specific book or article. For example, if a user navigates from 'Home' to 'Science Fiction' to 'Isaac Asimov' to 'Foundation', the breadcrumbs would show this path, allowing the user to easily navigate back to any previous category or author.
- In a customer relationship management (CRM) system, the <lightning-breadcrumbs> component can be used to show the path a user has taken to reach a specific customer's profile. For example, if a user navigates from 'Home' to 'Customers' to 'John Doe', the breadcrumbs would show this path, allowing the user to easily navigate back to the main customer list or home page.
- In a content management system (CMS), the <lightning-breadcrumbs> component can be used to show the path a user has taken to reach a specific page or post. For example, if a user navigates from 'Home' to 'Posts' to 'Drafts' to 'New Post', the breadcrumbs would show this path, allowing the user to easily navigate back to any previous section.
- In an online learning platform, the <lightning-breadcrumbs> component can be used to show the path a user has taken to reach a specific course or lesson. For example, if a user navigates from 'Home' to 'Courses' to 'Web Development' to 'HTML Basics', the breadcrumbs would show this path, allowing the user to easily navigate back to any previous category or course.
- In a web-based email client, the <lightning-breadcrumbs> component can be used to show the path a user has taken to reach a specific email or folder. For example, if a user navigates from 'Home' to 'Inbox' to 'Important' to 'Meeting Agenda', the breadcrumbs would show this path, allowing the user to easily navigate back to any previous folder or the inbox.

**How do you use it?**


**Related Components:**
- **lightning-breadcrumb** (required)

**Docs:**
---
examples:
    - name: base
      label: Navigate Using a Link
      description: Use breadcrumbs to note the path of a record and help the user to navigate back to the parent.
    - name: withOnclick
      label: Navigate Using the onclick Handler
      description: Using the onclick handler enables you to navigate programmatically using JavaScript.
    - name: withIteration
      label: Generate Breadcrumbs with for:each
      description: Use for:each to iterate over a list of items to generate the breadcrumbs.
---

A `lightning-breadcrumbs` component is an ordered list that displays the path
of a page and helps you navigate back to the parent. Each breadcrumb item is
represented by a `lightning-breadcrumb` component. Breadcrumbs are actionable
and separated by a greater-than sign.

For more information, see the [`lightning-breadcrumb`](bundle/lightning-breadcrumb) documentation.

...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class BaseBreadcrumbs extends LightningElement {}

```

```html
<template>
    <lightning-breadcrumbs>
        <lightning-breadcrumb
            label="Parent Account"
            href="http://example.com/parent">
        </lightning-breadcrumb>
        <lightning-breadcrumb
            label="Case"
            href="http://example.com/case">
        </lightning-breadcrumb>
    </lightning-breadcrumbs>
</template>

```

**Example 2:**

```js
import { LightningElement, track } from 'lwc';

export default class BreadcrumbsWithIteration extends LightningElement {
    @track
    myBreadcrumbs = [
        { label: 'Account', name: 'parent', id: 'account1' },
        { label: 'Child Account', name: 'child', id: 'account2' },
    ];
    breadCrumbsMap = {
        parent: 'http://www.example.com/account1',
        child: 'http://www.example.com/account2',
    };

    handleNavigateTo(event) {
        // prevent default navigation by href
        event.preventDefault();

        const name = event.target.name;

        if (this.breadCrumbsMap[name]) {
            window.location.assign(this.breadCrumbsMap[name]);
        }
    }
}

```

```html
<template>
    <lightning-breadcrumbs>
        <template for:each={myBreadcrumbs} for:item="crumbs">
            <lightning-breadcrumb
                key={crumbs.id}
                label={crumbs.label}
                name={crumbs.name}
                onclick={handleNavigateTo}>
            </lightning-breadcrumb>
        </template>
    </lightning-breadcrumbs>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class DemoBreadcrumbs extends LightningElement {
    handleNavigateToAccount(event) {
        // prevent default navigation by href
        event.preventDefault();

        const caseDiv = this.template.querySelector('.container .case');
        this.hide(caseDiv);

        const accountDiv = this.template.querySelector('.container .account');
        this.show(accountDiv);
    }

    handleNavigateToCase(event) {
        // prevent default navigation by href
        event.preventDefault();

        const accountDiv = this.template.querySelector('.container .account');
        this.hide(accountDiv);

        const caseDiv = this.template.querySelector('.container .case');
        this.show(caseDiv);
    }

    close(event) {
        const name = event.target.value;
        const elmToClose = this.template.querySelector(`.${name}`);
        this.hide(elmToClose);
    }

    show(elm) {
        elm.classList.remove('slds-hide');
        elm.classList.add('slds-show');
    }

    hide(elm) {
        elm.classList.add('slds-hide');
        elm.classList.remove('slds-show');
    }
}

```

```html
<template>
    <lightning-breadcrumbs>
        <lightning-breadcrumb
            label="Account"
            href="path/to/place/1"
            onclick={handleNavigateToAccount}>
        </lightning-breadcrumb>
        <lightning-breadcrumb
            label="Case"
            href="path/to/place/2"
            onclick={handleNavigateToCase}>
        </lightning-breadcrumb>
    </lightning-breadcrumbs>

    <div class="container">
        <div class="slds-hide account">
            <lightning-card
                variant="narrow"
                icon-name="standard:account"
                title="Account title">
                <p class="slds-m-around_medium">Account details</p>
                <div slot="actions">
                    <lightning-button-icon icon-name="utility:down" alternative-text="Show actions"></lightning-button-icon>
                </div>
                <lightning-button value="account" label="Close" onclick={close}></lightning-button>
            </lightning-card>

        </div>

        <div class="slds-hide case">
            <lightning-card
                variant="narrow"
                icon-name="standard:case"
                title="Case title">
                <p class="slds-m-around_medium">Case details</p>
                <div slot="actions">
                    <lightning-button-icon icon-name="utility:down" alternative-text="Show actions"></lightning-button-icon>
                </div>
                <lightning-button value="case" label="Close" onclick={close}></lightning-button>
            </lightning-card>
        </div>
    </div>

</template>

```

---
