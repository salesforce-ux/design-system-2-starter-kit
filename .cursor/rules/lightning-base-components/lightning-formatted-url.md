# lightning-formatted-url

**What is it?**  
This component is used to display a URL as a clickable link, with options to customize the displayed text and target, supporting both absolute and relative URLs for navigation within the same frame, a new tab, or a parent frame.

**Where would you use it?**
- A user might use the <lightning-formatted-url> component when they want to display a clickable link on their website. For example, they might want to include a link to their company's homepage. They would use this component to create the link, and when a visitor clicks on it, they would be taken to the homepage.
- Another scenario where the <lightning-formatted-url> component might be used is in a blog post or article. The author might want to include links to other relevant articles or resources. They could use this component to create these links, and when a reader clicks on one, they would be taken to the corresponding article or resource.
- The <lightning-formatted-url> component could also be used in a navigation menu. The website owner might want to include links to different sections of their website. They would use this component to create these links, and when a visitor clicks on one, they would be taken to the corresponding section of the website.

**How do you use it?**
- **value** `string`  
  _Examples:_
    `<lightning-formatted-url value="https://salesforce.com">`
    `<lightning-formatted-url value="https://www.salesforce.com">`
    `<lightning-formatted-url value="/my/path">`
- **label** `string`  
  _Examples:_
    `<lightning-formatted-url value="https://salesforce.com" label="Visit salesforce.com">`
- **target** `string`  
  _Examples:_
    `<lightning-formatted-url value="https://salesforce.com" target="_blank">`

**Related Components:**
- **lightning-navigation** (optional)
- **lightning-formatted-email** (optional)
- **lightning-formatted-phone** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Formatted URL
      description: Displays a URL with a protocol such as http:// and https://. A value "/my/path" creates a relative URL.
---

A `lightning-formatted-url` component displays a URL using an anchor `<a>` tag with an `href` attribute. The `value` you provide can be a relative or absolute URL. An absolute URL uses a protocol like `http://`, `https://`, or
`ftp://`, followed by the domain name and path. The component renders the link using the `http://` protocol by default.

URLs without a protocol use the host domain's protocol. For example, `www.example.com` is prefixed with `https://` if the host domain's protocol is `https://`.

To customize the displayed text, provide a `label`. Otherwise,
the URL you pass into `value` is used as the displayed text.

```html
<template>
    <lightning-formatted-url
        value="https://salesforce.com"
        label="Visit salesforce.com"
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class FormattedUrlBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small">
            Absolute URLs are created if the value doesn't begin with /
        </h2>
        <div class="slds-p-around_medium">
            <p><lightning-formatted-url value="my/path" tooltip="Omit leading slash" target="_blank"></lightning-formatted-url></p>
            <p><lightning-formatted-url value="www.salesforce.com" tooltip="Use full domain name" target="_blank"></lightning-formatted-url></p>
            <p><lightning-formatted-url value="https://salesforce.com" tooltip="Use https://domain-name" label="Visit salesforce.com" target="_blank" ></lightning-formatted-url></p>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small">
            Relative URLs are created if the value begins with /
        </h2>
        <div class="slds-p-around_medium">
            <p><lightning-formatted-url value="/my/path" tooltip="Include leading slash" target="_blank"></lightning-formatted-url></p>
            <p><lightning-formatted-url value="/my/path" label="Visit /my/path on this website" target="_blank"></lightning-formatted-url></p>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_small">
            Only http, https, and ftp protocols are supported.
        </h2>
        <div class="slds-p-around_medium">
            <p><lightning-formatted-url value="https://www.salesforce.com" target="_blank"></lightning-formatted-url></p>
            <p><lightning-formatted-url value="ftp://public.ftp-servers.example.com/path/to/myfile.txt" target="_blank"></lightning-formatted-url></p>
        </div>
    </div>
</template>

```

---
