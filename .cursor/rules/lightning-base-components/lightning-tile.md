# lightning-tile

**What is it?**  
This component is a versatile and customizable tile that groups related information, which can be paired with an icon or avatar, providing an interactive and visually appealing way to present data to the user.

**Where would you use it?**
- Imagine you're browsing a company's website and you see a section with a list of team members. Each team member's name, photo, and a brief description of their role is grouped together in a small box. This is a scenario where the <lightning-tile> component might be used, with each box being a separate tile.
- You're on a music streaming website and you see a list of songs. Each song is displayed in a small box with the song title, album cover, and artist name. This is another scenario where the <lightning-tile> component might be used, with each box being a separate tile.
- You're on a real estate website looking at listings. Each property is displayed in a small box with a photo of the property, the price, and a brief description. This is a scenario where the <lightning-tile> component might be used, with each box being a separate tile.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-tile label='Lightning component team'>`
    `<lightning-tile label='Salesforce UX'>`
    `<lightning-tile label='Astro'>`
- **href** `string`  
  _Examples:_
    `<lightning-tile href='/path/to/somewhere'>`
    `<lightning-tile href='/path/to/my-open-cases'>`
- **type** `string`  
  _Examples:_
    `<lightning-tile type='media'>`
- **actions** `object[]`  
  _Examples:_
    `<lightning-tile actions={actions}>`
- **onactiontriggered** `(ev: CustomEvent & { detail: { action: object } }) => void`  
  _Examples:_
    `<lightning-tile onactiontriggered={handleAction}>`

**Related Components:**
- **lightning-icon** (optional)
- **lightning-avatar** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Basic Tile
      description: Tiles can use various layouts.
    - name: withIcon
      label: Tile With Icon
      description: A tile can include an icon passed in the media slot.
    - name: withAvatar
      label: Tile With Avatar
      description: A tile can include an avatar passed in the media slot.
    - name: list
      label: Tiles in a List
      description: Tiles can be nested in list items. Apply styles to the list and each item to create dividers.
---

A `lightning-tile` component groups related information associated with a
record. The information can be actionable and paired with a figure, such as a
`lightning-icon` or `lightning-avatar` component.

...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class TileBasic extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A basic tile component.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-tile label="Lightning component team" href="/path/to/somewhere">
                <p class="slds-truncate" title="7 Members">7 Members</p>
            </lightning-tile>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A tile component with a more complex layout.
        </h2>

        <!-- More complex content -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-tile label="Salesforce UX" href="/path/to/somewhere">
                <dl class="slds-dl_horizontal">
                    <dt class="slds-dl_horizontal__label">
                        <p class="slds-truncate" title="Company">Company:</p>
                    </dt>
                    <dd class="slds-dl_horizontal__detail slds-tile__meta">
                        <p class="slds-truncate" title="Salesforce">Salesforce</p>
                    </dd>
                    <dt class="slds-dl_horizontal__label">
                        <p class="slds-truncate" title="Email">Email:</p>
                    </dt>
                    <dd class="slds-dl_horizontal__detail slds-tile__meta">
                        <p class="slds-truncate" title="salesforce-ux@salesforce.com">salesforce-ux@salesforce.com</p>
                    </dd>
                </dl>
            </lightning-tile>
        </div>
    </div>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class TileList extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A list of tile components with dividers.
        </h2>

        <!-- Simple -->
        <div class="slds-p-around_medium lgc-bg">
            <ul class="slds-has-dividers_bottom-space">
                <li class="slds-item">
                    <lightning-tile label="Lightning component team" href="/path/to/somewhere">
                        <p class="slds-truncate" title="7 Members">7 Members</p>
                    </lightning-tile>
                </li>
                <li class="slds-item">
                    <lightning-tile label="Salesforce UX" href="/path/to/somewhere">
                        <dl class="slds-dl_horizontal">
                            <dt class="slds-dl_horizontal__label">
                                <p class="slds-truncate" title="Company">Company:</p>
                            </dt>
                            <dd class="slds-dl_horizontal__detail slds-tile__meta">
                                <p class="slds-truncate" title="Salesforce">Salesforce</p>
                            </dd>
                            <dt class="slds-dl_horizontal__label">
                                <p class="slds-truncate" title="Email">Email:</p>
                            </dt>
                            <dd class="slds-dl_horizontal__detail slds-tile__meta">
                                <p class="slds-truncate" title="salesforce-ux@salesforce.com">salesforce-ux@salesforce.com</p>
                            </dd>
                        </dl>
                    </lightning-tile>
                </li>
                <li class="slds-item">
                    <lightning-tile label="Bruce Wayne" href="/bruce.html" type="media">
                        <lightning-avatar slot="media" src="https://www.lightningdesignsystem.com/assets/images/avatar1.jpg" fallback-icon-name="standard:person_account" alternative-text="Bruce Wayne"></lightning-avatar>
                        <ul class="slds-list_horizontal slds-has-dividers_right">
                            <li class="slds-item">Billionaire, Gotham City</li>
                            <li class="slds-item">Dark Knight</li>
                        </ul>
                    </lightning-tile>
                </li>
                <li class="slds-item">
                    <lightning-tile label="Clark Kent" href="/clark.html" type="media">
                        <lightning-avatar slot="media" src="https://www.lightningdesignsystem.com/assets/images/avatar1.jpg" fallback-icon-name="standard:person_account" alternative-text="Clark Kent"></lightning-avatar>
                        <ul class="slds-list_horizontal slds-has-dividers_right">
                            <li class="slds-item">Reporter, Daily Planet</li>
                            <li class="slds-item">Man of Steel</li>
                        </ul>
                    </lightning-tile>
                </li>
                <li class="slds-item">
                    <lightning-tile label="Diana Prince" href="/diana.html" type="media">
                        <lightning-avatar slot="media" src="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg" fallback-icon-name="standard:person_account" alternative-text="Diana Prince"></lightning-avatar>
                        <ul class="slds-list_horizontal slds-has-dividers_right">
                            <li class="slds-item">Honorary Ambassador, United Nations</li>
                            <li class="slds-item">The Amazon Princess</li>
                        </ul>
                    </lightning-tile>
                </li>
            </ul>
        </div>
    </div>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class TileWithAvatar extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A tile component with an avatar.
        </h2>

        <!-- With an avatar -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-tile label="Bruce Wayne" href="/bruce.html" type="media">
                <lightning-avatar slot="media" src="https://www.lightningdesignsystem.com/assets/images/avatar1.jpg" fallback-icon-name="standard:person_account" alternative-text="Bruce Wayne"></lightning-avatar>
                <ul class="slds-list_horizontal slds-has-dividers_right">
                    <li class="slds-item">Billionaire, Gotham City</li>
                    <li class="slds-item">Dark Knight</li>
                </ul>
            </lightning-tile>
        </div>
    </div>
</template>

```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class TileWithIcon extends LightningElement {}

```

```html
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A tile component with an icon.
        </h2>

        <!-- With an icon -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-tile label="Lightning component team" type="media">
                <lightning-icon slot="media" icon-name="standard:groups"></lightning-icon>
                <p class="slds-truncate" title="7 Members">7 Members</p>
            </lightning-tile>
        </div>
    </div>
</template>

```

---
