# lightning-formatted-text

**What is it?**  
This component displays read-only text, with the ability to convert URLs and email addresses into clickable links, and newline characters into line breaks, providing a user-friendly reading experience.

**Where would you use it?**
- Imagine you're reading a blog post on a website. The post mentions a few websites and email addresses. Instead of just being plain text, the <lightning-formatted-text> component can make these websites and email addresses clickable links. This makes it easier for you to visit these websites or send an email.
- You're on a company's contact page, and they've listed their email address. Instead of having to copy and paste the email address into your email client, the <lightning-formatted-text> component can turn the email address into a clickable link that opens your email client with a new message addressed to the company.
- You're reading a product description on an online store. The description mentions a few other products that you might be interested in. With the <lightning-formatted-text> component, these product names can be turned into clickable links that take you directly to their respective product pages.

**How do you use it?**
- **value** `string`  
  _Examples:_
    `<lightning-formatted-text value='I like salesforce.com and trailhead.salesforce.com.'>`
    `<lightning-formatted-text value={myStringValue}>`
- **linkify** `boolean`  
  _Examples:_
    `<lightning-formatted-text value='I like salesforce.com and trailhead.salesforce.com.' linkify>`
    `<lightning-formatted-text value={myStringValue} linkify>`

**Related Components:**
- **lightning-formatted-url** (optional)
- **lightning-formatted-email** (optional)
- **lightning-formatted-rich-text** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Formatted Text
      description: URLs and email addresses are displayed as links when you specify the linkify attribute. Newline characters are converted to line breaks.
---

A `lightning-formatted-text` component displays a read-only representation of
text, and can convert URLs and email addresses to links, or "linkify" them.
It also converts the `\r` and `\n` characters into `<br />` tags.

By default, URLs and email addresses display as plain text.
To display URLs and email addresses in a block of text as links, include
`linkify` on the `lightning-formatted-text` tag.

`linkify` wraps URLs and email addresses in anchor tags with
`target="_blank"`. If the URL protocol isn't specified in the text,
the link's `href` uses `https://` or `http://` to match the host domain's
protocol. For example, `www.example.com` is prefixed with `https://`
if the host domain's protocol is `https://`. The `href` uses `mailto://`
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class FormattedTextBasic extends LightningElement {}

```

```html
<template>
    <p><lightning-formatted-text value="Email salesforce.com and info.salesforce.com" ></lightning-formatted-text></p>
    <p><lightning-formatted-text value="Email info@salesforce.com" ></lightning-formatted-text></p>
    <p><lightning-formatted-text value="Email salesforce.com and info.salesforce.com" linkify></lightning-formatted-text></p>
    <p><lightning-formatted-text value="Email info@salesforce.com" linkify></lightning-formatted-text></p>
</template>

```

---
