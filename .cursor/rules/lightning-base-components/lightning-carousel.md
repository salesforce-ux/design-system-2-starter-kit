# lightning-carousel

**What is it?**  
This component is a customizable image carousel that displays a series of images one at a time, with user controls for scrolling and optional auto-scrolling, providing an interactive and visually engaging user experience.

**Where would you use it?**
- Imagine you're browsing an online clothing store and you're looking at a product page for a dress. The <lightning-carousel> component could be used to display multiple images of the dress from different angles. You could click on the indicators below the image to view each image one by one.
- Consider a news website that has a section on its homepage for top stories. The <lightning-carousel> component could be used to display the top stories, each with an image and a headline. The stories would automatically scroll every few seconds, but you could pause the scrolling to read a headline more closely.
- Think about a travel website that offers vacation packages. On the homepage, the <lightning-carousel> component could be used to showcase images of various destinations. Each image could have a header and a brief description, and you could click on the image to learn more about that destination.
- Suppose you're on a real estate website looking at a listing for a house. The <lightning-carousel> component could be used to display various images of the house, such as the exterior, the living room, the kitchen, and so on. You could manually scroll through the images to view the house from different perspectives.
- Imagine a museum website that has a virtual tour feature. The <lightning-carousel> component could be used to display images of different exhibits in the museum. You could click on the indicators to move from one exhibit to another, and the images would loop back to the beginning once you've seen all of them.
- Consider a university website that has a section for its campus. The <lightning-carousel> component could be used to display images of different parts of the campus, such as the library, the student union, the dormitories, and so on. The images would automatically scroll, giving you a virtual tour of the campus.

**How do you use it?**
- **disable-auto-scroll** `boolean`  
  _Examples:_
    `<lightning-carousel disable-auto-scroll>`
    `<lightning-carousel disable-auto-scroll={isAutoScrollDisabled}>`
- **disable-auto-refresh** `boolean`  
  _Examples:_
    `<lightning-carousel disable-auto-refresh>`
    `<lightning-carousel disable-auto-refresh={isAutoRefreshDisabled}>`
- **scroll-duration** `number`  
  _Examples:_
    `<lightning-carousel scroll-duration=3>`
    `<lightning-carousel scroll-duration={scrollDuration}>`

**Related Components:**
- **lightning-carousel-image** (required)

**Docs:**
---
examples:
    - name: basic
      label: Basic Carousel
      description: A basic carousel with three images.
    - name: autoScroll
      label: Carousel Without Auto Scroll
      description: A carousel with three images, with auto scrolling disabled.
---

A `lightning-carousel` component displays a series of images in a single
container, with image indicators and a control button
below the image panel. Only images passed in `lightning-carousel-image`
components are supported.

Use [`lightning-carousel-image`](bundle/lightning-carousel-image/documentation)
components nested in `lightning-carousel` to specify
up to five images. For each image, optionally provide header and descriptive text
that the carousel displays below the image. You can also hyperlink the images.

...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class AutoScroll extends LightningElement {}

```

```html
<template>
    <div class="slds-size_3-of-4">
        <div class="slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small">Carousel With disable-auto-scroll Attribute
        <lightning-carousel disable-auto-scroll>
            <lightning-carousel-image
                src = "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg"
                header = "First Card"
                description = "First card description."
                alternative-text = "First card accessible description."
                href = "https://www.example.com">
            </lightning-carousel-image>
            <lightning-carousel-image
                src = "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg"
                header = "Second Card"
                description = "Second card description."
                alternative-text = "Second card accessible description."
                href = "https://www.example.com">
            </lightning-carousel-image>
            <lightning-carousel-image
                src = "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg"
                header = "Third Card"
                description = "Third card description."
                alternative-text = "Third card accessible description."
                href = "https://www.example.com">
            </lightning-carousel-image>
        </lightning-carousel>
        </div>
  </div>
</template>


```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class Basic extends LightningElement {}

```

```html
<template>
    <div class="slds-size_3-of-4">
        <div class="slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small">Basic Carousel
            <lightning-carousel>
                <lightning-carousel-image
                    src = "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg"
                    header = "First Card"
                    description = "First card description."
                    alternative-text = "First card accessible description."
                    href = "javascript:void(0);">
                </lightning-carousel-image>
                <lightning-carousel-image
                    src = "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg"
                    header = "Second Card"
                    description = "Second card description."
                    alternative-text = "Second card accessible description."
                    href = "javascript:void(0);">
                </lightning-carousel-image>
                <lightning-carousel-image
                    src = "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg"
                    header = "Third Card"
                    description = "Third card description."
                    alternative-text = "Third card accessible description."
                    href = "javascript:void(0);">
                </lightning-carousel-image>
            </lightning-carousel>
        </div>
    </div>
</template>

```

---
