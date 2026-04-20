# lightning-progress-bar

**What is it?**  
This component is a visual indicator that displays the progress of an operation, such as a file download or upload, from left to right, providing users with a clear understanding of the operation's completion status.

**Where would you use it?**
- Imagine you're on a website and you're downloading a large file. The website might use a <lightning-progress-bar> to show you how much of the file has been downloaded so far. This way, you can see how much longer you might have to wait for the download to finish.
- You're uploading a batch of photos to a social media site. The site uses a <lightning-progress-bar> to show you the progress of your upload. This helps you understand how much longer you might have to wait before you can start sharing your photos with your friends.
- You're taking an online course and there's a quiz at the end of each module. The course platform uses a <lightning-progress-bar> to show you how many questions you've answered and how many are left. This way, you can see how much more work you have to do before you finish the quiz.

**How do you use it?**
- **value** `number`  
  _Examples:_
    `<lightning-progress-bar value={progress}>`
    `<lightning-progress-bar value={50}>`
    `<lightning-progress-bar value={myProgressValue}>`

**Related Components:**
- **lightning-button** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Progress Bar
      description: A progress bar can be displayed with an initial value and supports multiple sizes.
    - name: inAction
      label: Progress Bar In Action
      description: A progress bar denotes completion when it reaches 100.
    - name: variants
      label: Progress Bar with Circular Variant
      description: The circular variant adds a border radius to the progress bar to give it a rounded look.
---

A `lightning-progress-bar` component displays the progress of an operation from
left to right, such as for a file download or upload.

This component inherits styling from
[progress bars](https://www.lightningdesignsystem.com/components/progress-bar/) in the
Lightning Design System.

...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class ProgressBarBasic extends LightningElement {}

```

```html
<template>
    <lightning-progress-bar value="50" size="large"></lightning-progress-bar>
</template>
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class ProgressBarInAction extends LightningElement {
    progress = 0;
    isProgressing = false;

    get computedLabel() {
        return this.isProgressing ? 'Stop' : 'Start';
    }

    toggleProgress() {
        if (this.isProgressing) {
            // stop
            this.isProgressing = false;
            clearInterval(this._interval);
        } else {
            // start
            this.isProgressing = true;
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            this._interval = setInterval(() => {
                this.progress = this.progress === 100 ? 0 : this.progress + 1;
            }, 200);
        }
    }

    disconnectedCallback() {
        // it's needed for the case the component gets disconnected
        // and the progress is being increased
        // this code doesn't show in the example
        clearInterval(this._interval);
    }
}

```

```html
<template>
    <lightning-progress-bar value={progress}></lightning-progress-bar>
    <lightning-button label={computedLabel} onclick={toggleProgress} class="slds-m-top_medium"></lightning-button>
</template>
```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class ProgressBarVariants extends LightningElement {}

```

```html
<template>
    <p>
        Below is a progressbar of variant base.
    </p>
    <lightning-progress-bar value="50" size="large"></lightning-progress-bar>
    <p>
        Below is a progressbar of variant circular.
    </p>
    <lightning-progress-bar value="50" size="large" variant="circular"></lightning-progress-bar>
</template>
```

---
