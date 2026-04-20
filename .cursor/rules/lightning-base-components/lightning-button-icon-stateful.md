# lightning-button-icon-stateful

**What is it?**  
This component is an icon-only button that toggles between two states, providing an interactive user experience for tasks such as capturing customer feedback or toggling settings.

**Where would you use it?**
- Imagine you're browsing an online store and you see a product you like. There's a small heart icon next to the product. When you click on the heart, it fills in, indicating that you've added the product to your favorites. This is a scenario where the <lightning-button-icon-stateful> component might be used.
- Consider a music streaming app where you can like or dislike songs to customize your listening experience. Each song has a thumbs up and thumbs down icon. When you click the thumbs up, it turns green, indicating you've liked the song. This is another example of where the <lightning-button-icon-stateful> component could be used.
- Think about a social media platform where you can react to posts. Each post has a small icon of a hand making a thumbs up sign. When you click on the icon, it changes color, indicating that you've liked the post. This is a scenario where the <lightning-button-icon-stateful> component might be used.
- Imagine you're using a task management app. Each task has a small checkmark icon next to it. When you click on the checkmark, it fills in, indicating that you've completed the task. This is another example of where the <lightning-button-icon-stateful> component could be used.
- Consider an email platform where you can flag important emails. Each email has a small flag icon next to it. When you click on the flag, it turns red, indicating that you've flagged the email. This is a scenario where the <lightning-button-icon-stateful> component might be used.
- Think about a photo editing app where you can favorite certain filters. Each filter has a small star icon next to it. When you click on the star, it fills in, indicating that you've favorited the filter. This is another example of where the <lightning-button-icon-stateful> component could be used.

**How do you use it?**
- **icon-name** `string`  
  _Examples:_
    `<lightning-button-icon-stateful icon-name='utility:like'>`
    `<lightning-button-icon-stateful icon-name={iconName}>`
- **selected** `boolean`  
  _Examples:_
    `<lightning-button-icon-stateful selected={liked}>`
    `<lightning-button-icon-stateful selected={selectedState}>`
- **alternative-text** `string`  
  _Examples:_
    `<lightning-button-icon-stateful alternative-text='Like'>`
    `<lightning-button-icon-stateful alternative-text={alternativeText}>`
- **onclick** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-button-icon-stateful onclick={handleToggle}>`
    `<lightning-button-icon-stateful onclick={handleClick}>`
- **variant** `string`  
  _Examples:_
    `<lightning-button-icon-stateful variant='border'>`
    `<lightning-button-icon-stateful variant='border-filled'>`
    `<lightning-button-icon-stateful variant='border-inverse'>`
- **size** `string`  
  _Examples:_
    `<lightning-button-icon-stateful size='medium'>`
    `<lightning-button-icon-stateful size='small'>`
    `<lightning-button-icon-stateful size='x-small'>`
- **class** `string`  
  _Examples:_
    `<lightning-button-icon-stateful class='slds-m-left_xx-small'>`
    `<lightning-button-icon-stateful class='my-brand'>`
- **accesskey** `string`  
  _Examples:_
    `<lightning-button-icon-stateful accesskey='a'>`
- **aria-atomic** `boolean`  
  _Examples:_
    `<lightning-button-icon-stateful aria-atomic={true}>`
- **aria-controls** `string`  
  _Examples:_
    `<lightning-button-icon-stateful aria-controls='elementId'>`
- **aria-describedby** `string`  
  _Examples:_
    `<lightning-button-icon-stateful aria-describedby='descriptionId'>`
- **aria-expanded** `boolean`  
  _Examples:_
    `<lightning-button-icon-stateful aria-expanded={true}>`
- **aria-label** `string`  
  _Examples:_
    `<lightning-button-icon-stateful aria-label='Assistive Label'>`
- **aria-live** `string`  
  _Examples:_
    `<lightning-button-icon-stateful aria-live='off'>`
    `<lightning-button-icon-stateful aria-live='polite'>`
    `<lightning-button-icon-stateful aria-live='assertive'>`

**Related Components:**


**Docs:**
---
examples:
    - name: basic
      label: Stateful Button Icons
      description: Stateful button icons can be toggled between states. They support multiple sizes and can be disabled.
    - name: variants
      label: Stateful Button Icons with Border Variants
      description: Button icons using the two types of border variants.
---

A `lightning-button-icon-stateful` component represents an icon-only button
element that toggles between two states. For example, you can use this
component for capturing a customer's feedback on a blog post (like or
dislike). Clicking the button triggers the handler set for `onclick` and changes the state of the icon using the `selected` attribute.

This example creates a Like button that toggles between two states. The Like button is selected by default. The button's state is stored in the `selected` attribute.

Selecting the Dislike button also toggles the state on the Like button and deselects it.

```html
...

**Examples:**
**Example 1:**

```js
import { LightningElement, track } from 'lwc';

export default class ButtonIconStatefulBasic extends LightningElement {
    @track likeState = false;
    @track answerState = false;
    @track likeStateSize01 = false;
    @track likeStateSize02 = false;
    @track likeStateSize03 = false;
    @track likeStateSize04 = false;
    @track likeStateDisabled = false;
    @track answerStateDisabled = false;

    handleLikeButtonClick() {
        this.likeState = !this.likeState;
    }

    handleAnswerButtonClick() {
        this.answerState = !this.answerState;
    }

    handleLikeButtonSizeClick(event) {
        const buttonNumber = event.target.dataset.buttonNumber;

        this[`likeStateSize${buttonNumber}`] =
            !this[`likeStateSize${buttonNumber}`];
    }

    handleLikeButtonDisabledClick() {
        this.likeStateDisabled = !this.likeStateDisabled;
    }

    handleAnswerButtonDisabledClick() {
        this.answerStateDisabled = !this.answerStateDisabled;
    }
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Click one of the example buttons below to activate the `onclick` handler and toggle the state of each button.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-icon-stateful icon-name="utility:like" selected={likeState} onclick={handleLikeButtonClick} alternative-text="Like"></lightning-button-icon-stateful>
            <lightning-button-icon-stateful icon-name="utility:answer" selected={answerState} onclick={handleAnswerButtonClick} alternative-text="Answer" class="slds-m-left_xx-small"></lightning-button-icon-stateful>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button-icon-statefuls with the <code>size</code> attribute set to a valid value (<code>xx-small, x-small, small, medium</code>).
        </h2>

        <!-- Sizes -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-icon-stateful icon-name="utility:like" size="xx-small" selected={likeStateSize01} onclick={handleLikeButtonSizeClick} alternative-text="Like" data-button-number="01"></lightning-button-icon-stateful>
            <lightning-button-icon-stateful icon-name="utility:like" size="x-small" selected={likeStateSize02} onclick={handleLikeButtonSizeClick} alternative-text="Like" class="slds-m-left_xx-small" data-button-number="02"></lightning-button-icon-stateful>
            <lightning-button-icon-stateful icon-name="utility:like" size="small" selected={likeStateSize03} onclick={handleLikeButtonSizeClick} alternative-text="Like" class="slds-m-left_xx-small" data-button-number="03"></lightning-button-icon-stateful>
            <lightning-button-icon-stateful icon-name="utility:like" size="medium" selected={likeStateSize04} onclick={handleLikeButtonSizeClick} alternative-text="Like" class="slds-m-left_xx-small" data-button-number="04"></lightning-button-icon-stateful>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button-icon-statefuls with the <code>disabled</code> attribute set.
        </h2>

        <!-- Disabled -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-icon-stateful icon-name="utility:like" disabled selected={likeStateDisabled} onclick={handleLikeButtonDisabledClick} alternative-text="Like"></lightning-button-icon-stateful>
            <lightning-button-icon-stateful icon-name="utility:answer" disabled selected={answerStateDisabled} onclick={handleAnswerButtonDisabledClick} alternative-text="Answer" class="slds-m-left_xx-small"></lightning-button-icon-stateful>
        </div>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class ButtonIconStatefulVariants extends LightningElement {
    likeStateInverse = false;
    answerStateInverse = false;
    likeStateFilled = false;
    answerStateFilled = false;

    handleLikeButtonInverseClick() {
        this.likeStateInverse = !this.likeStateInverse;
    }

    handleAnswerButtonInverseClick() {
        this.answerStateInverse = !this.answerStateInverse;
    }

    handleLikeButtonFilledClick() {
        this.likeStateFilled = !this.likeStateFilled;
    }

    handleAnswerButtonFilledClick() {
        this.answerStateFilled = !this.answerStateFilled;
    }
}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            Button-icon-statefuls with the <code>variant</code> attribute set to <code>border-inverse</code>.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg-inverse">
            <lightning-button-icon-stateful icon-name="utility:like" variant="border-inverse" selected={likeStateInverse} onclick={handleLikeButtonInverseClick} alternative-text="Like"></lightning-button-icon-stateful>
            <lightning-button-icon-stateful icon-name="utility:answer" variant="border-inverse" selected={answerStateInverse} onclick={handleAnswerButtonInverseClick} alternative-text="Answer" class="slds-m-left_xx-small"></lightning-button-icon-stateful>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
                Button-icon-statefuls with the <code>variant</code> attribute set to <code>border-filled</code>.
        </h2>

        <!-- Disabled -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-button-icon-stateful icon-name="utility:like" variant="border-filled" selected={likeStateFilled} onclick={handleLikeButtonFilledClick} alternative-text="Like"></lightning-button-icon-stateful>
            <lightning-button-icon-stateful icon-name="utility:answer" variant="border-filled" selected={answerStateFilled} onclick={handleAnswerButtonFilledClick} alternative-text="Answer" class="slds-m-left_xx-small"></lightning-button-icon-stateful>
        </div>
    </div>
</template>

```

---
