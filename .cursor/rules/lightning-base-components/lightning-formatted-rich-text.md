# lightning-formatted-rich-text

**What is it?**  
This component is a read-only display of rich text, formatted by HTML tags, that automatically creates links for text and email addresses, providing an interactive and visually appealing experience for the end user.

**Where would you use it?**
- Imagine you're writing a blog post on a website. You want to emphasize certain words, create headings, and include links to other websites. The <lightning-formatted-rich-text> component would be used to display your blog post with all the formatting you've added.
- Suppose you're a teacher and you're creating an online lesson for your students. You want to include formatted text, images, and links to additional resources. The <lightning-formatted-rich-text> component would be used to display your lesson exactly as you've designed it.
- Let's say you're a customer service representative responding to a customer's query via email. You want to include bold text for emphasis, bullet points for clarity, and links to helpful resources. The <lightning-formatted-rich-text> component would be used to display your email response with all the formatting you've added.

**How do you use it?**
- **value** `string`  
  _Examples:_
    `<lightning-formatted-rich-text value={richtext}>`
    `<lightning-formatted-rich-text value="&lt;h1>TEST&lt;/h1>">`
    `<lightning-formatted-rich-text value="<h2 style=\"text-align: center\">Default <s>Value</s></h2>">`
- **disable-linkify** `boolean`  
  _Examples:_
    `<lightning-formatted-rich-text disable-linkify>`

**Related Components:**
- **lightning-input-rich-text** (required)
- **lightning-formatted-url** (optional)

**Docs:**
A `lightning-formatted-rich-text` component is a read-only representation of
rich text. Rich text refers to text that's formatted by HTML tags, such as
`<strong>` for bold text or `<u>` for underlined text. You can pass in rich text to
this component using the `lightning-input-rich-text` component or
programmatically in JavaScript.

By default, the component creates links automatically for linkable text and email addresses. For example, if the input is "Go to salesforce.com", `lightning-formatted-rich-text` creates a link so the output is "Go to [salesforce.com](https://www.salesforce.com/)". Email addresses display using the `mailto:` protocol.
To display links and email addresses in plain text, specify the `disable-linkify` attribute.

This example creates a rich text editor that's wired up to a
`lightning-formatted-rich-text` component. The rich text content is set during
initialization.

```html
<template>
    <!-- Rich text editor and formatted output -->
    <lightning-input-rich-text
        value={richtext}
        onchange={handleChange}
    ></lightning-input-rich-text>
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class FormattedRichTextBasic extends LightningElement {
    get svgRichText() {
        return 'This <b>SVG</b> is not whitelisted: [<!-- I am ready now, click one of the buttons! --><svg><image id="v-146" width="500" height="500" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20height%3D%22100%22%20width%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20data-name%3D%22Layer%201%22%20id%3D%22Layer_1%22%3E%0A%20%20%3Ctitle%3ECompute%3C%2Ftitle%3E%0A%20%20%3Cg%3E%0A%20%20%20%20%3Crect%20fill%3D%22%239d5025%22%20ry%3D%229.12%22%20rx%3D%229.12%22%20height%3D%2253%22%20width%3D%2253%22%20y%3D%2224.74%22%20x%3D%2223.5%22%3E%3C%2Frect%3E%0A%20%20%20%20%3Crect%20fill%3D%22%23f58536%22%20ry%3D%229.12%22%20rx%3D%229.12%22%20height%3D%2253%22%20width%3D%2253%22%20y%3D%2222.26%22%20x%3D%2223.5%22%3E%3C%2Frect%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E" preserveratio="true" style="border-color: rgb(51, 51, 51); box-sizing: border-box; color: rgb(51, 51, 51); cursor: move; font-family: sans-serif; font-size: 14px; line-height: 20px; outline-color: rgb(51, 51, 51); text-size-adjust: 100%; column-rule-color: rgb(51, 51, 51); -webkit-font-smoothing: antialiased; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -webkit-text-emphasis-color: rgb(51, 51, 51); -webkit-text-fill-color: rgb(51, 51, 51); -webkit-text-stroke-color: rgb(51, 51, 51); user-select: none; vector-effect: non-scaling-stroke;"></image></svg>]';
    }

    get listRichText() {
        return '<ol><li>This list should be formatted properly</li><li>Other classes should be correctly added too</li><li><a href="http://www.google.com">Link to Google</a></li></li></ol>';
    }

    get linkifyRichText() {
        return 'You should be able to navigate with the following links: <ul><li><a href="http://www.google.com">www.google.com</a></li><li>www.salesforce.com</li><li>http://www.google.com</li><li>salesforce.com</li></ul> and this email address: email@richtext.com.';
    }
}

```

```html
<template>
    <div>
        <p>
            <lightning-formatted-rich-text value="Plain boring text"></lightning-formatted-rich-text>
        </p>
        <p>
            <lightning-formatted-rich-text value="This &lt;em&gt;is&lt;/em&gt; some simple rich text. &lt;strong&gt;Hello!&lt;/strong&gt;"></lightning-formatted-rich-text>
        </p>
        <p>
            <lightning-formatted-rich-text value="This is a link to &lt;a href=&quot;http://www.salesforce.com&quot;&gt;Salesforce&lt;/a&gt;"></lightning-formatted-rich-text>
        </p>
        <p>
            <lightning-formatted-rich-text value={svgRichText}></lightning-formatted-rich-text>
        </p>
        <p>
            <lightning-formatted-rich-text value={listRichText} class="slds-text-body_small"></lightning-formatted-rich-text>
        </p>
        <p>
            <lightning-formatted-rich-text value={linkifyRichText} class="slds-text-body_small"></lightning-formatted-rich-text>
        </p>
    </div>
</template>

```

---
