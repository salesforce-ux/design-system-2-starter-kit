# lightning-avatar

**What is it?**  
This component is an image representation of an object, such as a user or account, that provides a visual identifier with customizable sizing, shape, and fallback options for an enhanced user experience.

**Where would you use it?**
- Imagine you're using a social media platform where each user has a profile picture. The <lightning-avatar> component could be used to display these profile pictures. If a user hasn't uploaded a profile picture, the component could display the user's initials instead.
- On a business networking site, companies might have their logos displayed next to their names. The <lightning-avatar> component could be used to display these logos. If a logo isn't available, the component could display a default icon instead.
- Consider an online forum where users can post questions and answers. Next to each post, the user's profile picture could be displayed using the <lightning-avatar> component. If the user hasn't set a profile picture, their initials could be displayed instead.
- In a project management tool, each task could be assigned to a specific team member. The <lightning-avatar> component could be used to display a picture of the assigned team member next to each task. If the team member hasn't uploaded a picture, their initials could be displayed instead.
- On a news website, each article could have an author associated with it. The <lightning-avatar> component could be used to display a picture of the author. If the author hasn't provided a picture, their initials could be displayed instead.
- In a customer relationship management system, each customer could have a profile picture. The <lightning-avatar> component could be used to display these pictures. If a customer hasn't uploaded a picture, a default icon could be displayed instead.

**How do you use it?**
- **src** `string`  
  _Examples:_
    `<lightning-avatar src="/images/codey.jpg">`
    `<lightning-avatar src="/bad/image/url.jpg">`
    `<lightning-avatar src="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg">`
- **alternative-text** `string`  
  _Examples:_
    `<lightning-avatar alternative-text="Codey Bear">`
    `<lightning-avatar alternative-text="Salesforce">`
    `<lightning-avatar alternative-text="Amy Smith">`
- **initials** `string`  
  _Examples:_
    `<lightning-avatar initials="Sa">`
- **fallback-icon-name** `string`  
  _Examples:_
    `<lightning-avatar fallback-icon-name="standard:account">`
    `<lightning-avatar fallback-icon-name="standard:person_account">`
- **variant** `string`  
  _Examples:_
    `<lightning-avatar variant="circle">`
- **class** `string`  
  _Examples:_
    `<lightning-avatar class="slds-m-around_small">`
    `<lightning-avatar class="my-fallback-color">`

**Related Components:**


**Docs:**
---
examples:
    - name: basic
      label: Basic Avatar
      description: Avatar with the default size and variant.
    - name: sizes
      label: Avatar Sizes
      description: Avatars of different sizes. The default size is medium.
    - name: variant
      label: Avatar Variants
      description: Avatars support circle and square variants. The default variant is square.
    - name: initials
      label: Avatar Initials
      description: Avatars can display initials if the image fails to load.
    - name: icons
      label: Avatar Icons
      description: Avatars can display fallback icons if the image fails to load and initials are not provided.
---

A `lightning-avatar` component is an image that represents an object, such as
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class AvatarBasic extends LightningElement {}

```

```html
<template>
    <lightning-avatar src="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg"></lightning-avatar>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class ExampleAvatarIcons extends LightningElement {}

```

```html
<template>
    <lightning-avatar src="/bad/image/url.jpg" initials="" fallback-icon-name="standard:account" alternative-text="Salesforce" class="slds-m-right_small"></lightning-avatar>
    <lightning-avatar src="/bad/image/url.jpg" initials="" fallback-icon-name="standard:avatar"  alternative-text="Bob Wilson" class="slds-m-right_small"></lightning-avatar>
    <lightning-avatar src="/bad/image/url.jpg" initials="" fallback-icon-name="custom:custom92"  alternative-text="Wilson Enterprises" class="slds-m-right_small"></lightning-avatar>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class ExampleAvatarInitials extends LightningElement {}

```

```html
<template>
    <lightning-avatar src="/bad/image/url.jpg" initials="Sa" fallback-icon-name="standard:account" alternative-text="Salesforce" class="slds-m-right_small"></lightning-avatar>
    <lightning-avatar src="/bad/image/url.jpg" initials="BW" fallback-icon-name="standard:avatar"  alternative-text="Bob Wilson" class="slds-m-right_small"></lightning-avatar>
    <lightning-avatar src="/bad/image/url.jpg" initials="WE" fallback-icon-name="custom:custom92"  alternative-text="Wilson Enterprises" class="slds-m-right_small"></lightning-avatar>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class ExampleAvatarSizes extends LightningElement {}

```

```html
<template>
    <lightning-avatar size="x-small" src="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg" initials="JD" fallback-icon-name="standard:person_account" alternative-text="Jane Doe" class="slds-m-right_small"></lightning-avatar>
    <lightning-avatar size="small"   src="https://www.lightningdesignsystem.com/assets/images/avatar3.jpg" initials="TP" fallback-icon-name="standard:person_account" alternative-text="Tony Price" class="slds-m-right_small"></lightning-avatar>
    <lightning-avatar size="medium"  src="https://www.lightningdesignsystem.com/assets/images/avatar1.jpg" initials="RE" fallback-icon-name="standard:person_account" alternative-text="Ryan Eddie" class="slds-m-right_small"></lightning-avatar>
    <lightning-avatar size="large"   src="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg" initials="CR" fallback-icon-name="standard:person_account" alternative-text="Cindy Rice" class="slds-m-right_small"></lightning-avatar>
</template>

```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class ExampleAvatarVariant extends LightningElement {}

```

```html
<template>
    <lightning-avatar variant="circle" src="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg" initials="AW" fallback-icon-name="standard:person_account" alternative-text="Amy Weaver" class="slds-m-right_small"></lightning-avatar>
    <lightning-avatar variant="square" src="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg" initials="SJ" fallback-icon-name="standard:person_account" alternative-text="Sarah Jones" class="slds-m-right_small"></lightning-avatar>
</template>

```

---
