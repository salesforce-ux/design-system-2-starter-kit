# lightning-layout

**What is it?**  
This component is a flexible grid system that allows for the arrangement of containers within a page or another container, providing a customizable layout experience with options for horizontal and vertical alignment, boundary pulling, and column creation.

**Where would you use it?**
- Imagine you're designing a webpage for a news site. You want to have a main column for the news articles, and a smaller side column for advertisements and additional information. You could use the <lightning-layout> component to create these two columns, setting the size attribute on the <lightning-layout-item> to control the width of each column.
- On a company's internal website, there's a page where employees can view and update their personal information. The page is divided into several sections, such as contact information, emergency contacts, and employment history. Each section is a separate column, and within each column, the individual pieces of information are arranged vertically. The <lightning-layout> component could be used to create this layout, with the vertical-align attribute set to 'start' so that the information in each column starts at the top.
- Consider a photography website where the homepage displays a grid of thumbnails of the photographer's best work. When the page is viewed on a larger screen, the thumbnails are arranged in four columns, but on a smaller screen, they stack into a single column. The <lightning-layout> component could be used to create this responsive layout, with the flexibility attribute set to 'auto' on the <lightning-layout-item> components.
- On an e-commerce site, there's a product page that displays a large image of the product, a title, a price, a description, and a 'Buy Now' button. All of these elements are centered vertically and horizontally on the page. The <lightning-layout> component could be used to create this layout, with the horizontal-align and vertical-align attributes both set to 'center'.
- In a blog site, there's a page that displays a list of all the blog posts. Each post is represented by a card that includes a title, a short excerpt, and a 'Read More' button. The cards are arranged in a grid with three columns, and there's space between each card. The <lightning-layout> component could be used to create this layout, with the horizontal-align attribute set to 'space' to create the space between the cards.

**How do you use it?**
- **horizontal-align** `string`  
  _Examples:_
    `<lightning-layout horizontal-align='center'>`
    `<lightning-layout horizontal-align='space'>`
    `<lightning-layout horizontal-align='spread'>`
    `<lightning-layout horizontal-align='end'>`
- **vertical-align** `string`  
  _Examples:_
    `<lightning-layout vertical-align='start'>`
    `<lightning-layout vertical-align='center'>`
    `<lightning-layout vertical-align='end'>`
    `<lightning-layout vertical-align='stretch'>`
- **pull-to-boundary** `string`  
  _Examples:_
    `<lightning-layout pull-to-boundary='small'>`
    `<lightning-layout pull-to-boundary='medium'>`
    `<lightning-layout pull-to-boundary='large'>`

**Related Components:**
- **lightning-layout-item** (required)

**Docs:**
---
examples:
    - name: simple
      label: Simple Layout
      description: A layout can include layout items as columns.
    - name: nested
      label: Nested Page Layout
      description: A layout item can contain nested layouts.
    - name: horizontalAlignSpace
      label: Layout with a Horizontal Align (Space)
      description: Position layout items horizontally across the container, with space before, between, and after the items.
    - name: horizontalAlignSpread
      label: Layout with a Horizontal Align (Spread)
      description: Position layout items horizontally across the container, with space between the items.
    - name: verticalAlignCenter
      label: Layout with a Vertical Align (Center)
      description: Position layout items vertically in the center of the container.
    - name: verticalAlignStretch
      label: Layout with a Vertical Align (Stretch)
      description: Stretch out layout items vertically to fill the container.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutSpace extends LightningElement {}

```

```html
<template>
        <p>The layout items are spaced horizontally across the container, starting and ending with a space, using attribute <code>horizontal-align="space"</code>.</p>
    <div class="c-container">
        <lightning-layout horizontal-align="space">
            <lightning-layout-item padding="around-small">
                <div class="custom-box">1</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">2</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">3</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">4</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">5</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">6</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">7</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">8</div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutSpread extends LightningElement {}

```

```html
<template>
        <p>The layout items are spaced horizontally across the container, starting and ending with a layout item using attribute <code>horizontal-align="spread"</code>.</p>
    <div class="c-container">
        <lightning-layout horizontal-align="spread">
            <lightning-layout-item padding="around-small">
                <div class="custom-box">1</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">2</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">3</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">4</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">5</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">6</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">7</div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="custom-box">8</div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutNested extends LightningElement {}

```

```html
<template>
        <p>This example creates a three column page layout with a container-wide header using nested <code>lightning-layout</code> components. A <code>lightning-layout-item</code> of size="12" wraps the <code>lightning-layout</code> that contains multiple layout items.</p>
    <div class="c-container">
            <lightning-layout multiple-rows="true">
                <lightning-layout-item padding="around-small" size="12">
                    <div class="page-section page-header">
                        <h2>Header</h2>
                    </div>
                </lightning-layout-item>
                <lightning-layout-item padding="around-small" size="12">
                    <lightning-layout>
                        <lightning-layout-item padding="around-small" size="3">
                            <div class="page-section page-right">
                                <h2>Left Sidebar</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </lightning-layout-item>
                        <lightning-layout-item padding="around-small" size="6">
                            <div class="page-section page-main">
                                <h2>Main</h2>
                                <p>Donec viverra pellentesque aliquet. Praesent quis tristique mauris, ac tincidunt ante.
                                    Nulla lectus nisi, tempor quis malesuada ac, consequat in velit. Nullam aliquam mauris eu magna
                                    dictum, in ornare risus convallis. Nunc condimentum ornare libero sit amet rhoncus. Aliquam tellus nisl,
                                    tristique sit amet congue in, tristique vel risus. Morbi leo ligula, blandit nec commodo at, pulvinar
                                    vitae libero. Mauris ipsum erat, aliquam a turpis vitae, faucibus viverra arcu. Donec id purus
                                    luctus enim elementum molestie sit amet ac libero.
                                </p>
                                <p>Mauris cursus felis elementum ipsum placerat, in maximus justo pretium. Nam nec sapien
                                    maximus justo feugiat tristique. Mauris viverra erat vitae arcu feugiat, sed posuere purus vulputate.
                                    Sed et nulla ut magna iaculis fringilla. Integer eget blandit elit. Phasellus nulla augue, lobortis a
                                    elementum tempus, auctor et felis. Fusce quis lorem tincidunt risus ullamcorper pharetra. Sed elit
                                    nulla, efficitur a lorem quis, mollis tristique elit. Etiam odio libero, ornare sed vehicula
                                    in, sagittis et erat. Integer at justo molestie, suscipit dui vel, scelerisque ex. Nulla non metus
                                    pulvinar, egestas neque et, tincidunt tellus. Praesent egestas scelerisque tristique. Nullam
                                    sodales ex acmetus tincidunt accumsan. Cras vitae consequat odio. Pellentesque facilisis lobortis
                                    lorem, at placerat mauris sagittis a.
                                </p>
                            </div>
                        </lightning-layout-item>
                        <lightning-layout-item padding="around-small" size="3">
                            <div class="page-section page-right">
                                <h2>Right Sidebar</h2>
                                <ul>
                                    <li><a href="#">Archive 1</a>
                                    </li>
                                    <li><a href="#">Archive 2</a>
                                    </li>
                                    <li><a href="#">Archive 3</a>
                                    </li>
                                    <li><a href="#">Archive 4</a>
                                    </li>
                                    <li><a href="#">Archive 5</a>
                                    </li>
                                </ul>
                            </div>
                        </lightning-layout-item>
                    </lightning-layout>
                </lightning-layout-item>
                <lightning-layout-item flexibility="auto" padding="around-small" size="12">
                    <div class="page-footer page-section">
                        <h2>Footer</h2>
                    </div>
                </lightning-layout-item>
            </lightning-layout>
        </div>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutPullToBoundary extends LightningElement {}

```

```html
<template>
        <p>The <code>pull-to-boundary</code> attribute pulls the items to each side of the container. Element 1 and 4 display without padding on their outer edges and go all the way to the edges of the container.</p>
    <div class="c-container">
        <lightning-layout pull-to-boundary="medium">
            <lightning-layout-item flexibility="auto" padding="horizontal-medium">
                <div class="custom-box">1</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="horizontal-medium">
                <div class="custom-box">2</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="horizontal-medium">
                <div class="custom-box">3</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="horizontal-medium">
                <div class="custom-box">4</div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutSimple extends LightningElement {}

```

```html
<template>
        <p>This example creates a simple layout with field headers.</p>
    <div class="c-container">
        <lightning-layout>
            <lightning-layout-item padding="around-small">
                <div class="header-column">
                    <p class="field-title" title="Field 1">Field 1</p>
                    <p>Name</p>
                </div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="header-column">
                    <p class="field-title" title="Field2 (3)">Field 2 (3)
                        <lightning-button-icon icon-name="utility:down" variant="border-filled" size="small" alternative-text="More Actions"></lightning-button-icon>
                    </p>
                    <p>Eligibility</p>
                </div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="header-column">
                    <p class="field-title" title="Field 3">Field 3</p>
                    <a href="#">Website</a>
                </div>
            </lightning-layout-item>
            <lightning-layout-item padding="around-small">
                <div class="header-column">
                    <p class="field-title" title="Field 4">Field 4</p>
                    <p>
                        <span title="">Address</span>
                    </p>
                </div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 6:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutCenter extends LightningElement {}

```

```html
<template>
        <p>The layout items are aligned in the center of the container.</p>
    <div class="c-container">
        <lightning-layout vertical-align="center" class="x-large">
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box">1</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box">2</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box">3</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box">4</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box">5</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box">6</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box">7</div>
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small">
                <div class="custom-box">8</div>
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

**Example 7:**

```js
import { LightningElement } from 'lwc';

export default class LightningExampleLayoutStretch extends LightningElement {}

```

```html
<template>
        <p>The layout items extend vertically to fill the container.</p>
    <div class="c-container">
        <lightning-layout vertical-align="stretch" multiple-rows="true" class="x-large">
            <lightning-layout-item flexibility="auto" padding="around-small" class="custom-box">
                1
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small" class="custom-box">
                2
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small" class="custom-box">
                3
            </lightning-layout-item>
            <lightning-layout-item flexibility="auto" padding="around-small" class="custom-box">
                4
            </lightning-layout-item>
        </lightning-layout>
    </div>
</template>

```

---
