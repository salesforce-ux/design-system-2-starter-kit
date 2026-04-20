# lightning-position-library

**What is it?**  
This component is a testing tool that provides an interactive playground for experimenting with the positioning of elements such as helptext, button-menu, combobox, and datepicker.

**Where would you use it?**
- Imagine you're using a website and you need to select a date for a booking. When you click on the date field, a calendar pops up right below the field, allowing you to easily select the date you want. This is a scenario where the <lightning-position-library> component might be used.
- Consider a scenario where you're filling out a form on a website. When you hover over a field, a small box appears with helpful information about what you're supposed to enter in the field. This is another situation where the <lightning-position-library> component could be utilized.
- Picture a website where you're given a list of options to choose from. When you click on the dropdown menu, the list of options appears directly below the menu, making it easy for you to see and select your choice. This is a case where the <lightning-position-library> component would be beneficial.

**How do you use it?**


**Related Components:**
- **lightning-helptext** (optional)
- **lightning-button-menu** (optional)
- **lightning-combobox** (optional)
- **lightning-datepicker** (optional)
- **lightning-position-library** (required)

**Docs:**
Position Library playground can be used to test positon library for `helptext`, `button-menu`, `combobox` and `datepicker`.

To use the playground, go to `ui-lightning-stubs/src/main/modules/demo/app/app.html` and add the tag `<positionLibrary-playground></positionLibrary-playground>` in the template.


**Examples:**
**Example 1:**

```js
import { LightningElement, api } from 'lwc';

export default class PlaygroundCompoennts extends LightningElement {
    @api component;

    get isHelpText() {
        return this.component === 'helpText';
    }

    get isButtonMenu() {
        return this.component === 'button-menu';
    }

    get isComboBox() {
        return this.component === 'combobox';
    }

    get isDatePicker() {
        return this.component === 'datepicker';
    }

    get comboBoxOptions() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }
}

```

```html
<template>
    <template if:true={isHelpText}>
        <lightning-helptext
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel orci porta non pulvinar neque."
        ></lightning-helptext>
    </template>

    <template if:true={isButtonMenu}>
        <lightning-button-menu alternative-text="Show menu">
            <lightning-menu-item
                value="MenuItemOne"
                label="Menu Item One"
            ></lightning-menu-item>
            <lightning-menu-item
                value="MenuItemTwo"
                label="Menu Item Two"
            ></lightning-menu-item>
            <lightning-menu-item
                value="MenuItemThree"
                label="Menu Item Three"
            ></lightning-menu-item>
            <lightning-menu-item
                value="MenuItemFour"
                label="Menu Item Four"
            ></lightning-menu-item>
        </lightning-button-menu>
    </template>

    <template if:true={isComboBox}>
        <lightning-combobox
            name="progress"
            label="Status"
            placeholder="Select Progress"
            options={comboBoxOptions}
        ></lightning-combobox>
    </template>

    <template if:true={isDatePicker}>
        <lightning-datepicker label="Select a date"></lightning-datepicker>
    </template>
</template>

```

**Example 2:**

```js
import { LightningElement } from 'lwc';
import { classSet } from 'lightning/utils';

export default class PositionLibraryPlayground extends LightningElement {
    selectedComponent = 'helpText';
    containerPosition = 'topLeft';
    componentPosition = 'topLeft';

    containerWidth = 300;
    containerHeight = 200;

    isContainerScroll = false;
    isViewportScroll = false;
    isUseShadowRootContainer = false;

    componentOptions = [
        { label: 'helpText', value: 'helpText' },
        { label: 'button-menu', value: 'button-menu' },
        { label: 'combobox', value: 'combobox' },
        { label: 'datepicker', value: 'datepicker' },
    ];

    positionOptions = [
        { label: 'top left', value: 'topLeft' },
        { label: 'top right', value: 'topRight' },
        { label: 'bottom left', value: 'bottomLeft' },
        { label: 'bottom right', value: 'bottomRight' },
    ];

    handleComponentSelector(event) {
        this.selectedComponent = event.detail.value;
    }

    handleContainerPosition(event) {
        this.containerPosition = event.detail.value;
    }

    handleComponentPosition(event) {
        this.componentPosition = event.detail.value;
    }

    get computedComponentClass() {
        return classSet().add({
            'top-left': this.componentPosition === 'topLeft',
            'top-right': this.componentPosition === 'topRight',
            'bottom-left': this.componentPosition === 'bottomLeft',
            'bottom-right': this.componentPosition === 'bottomRight',
        });
    }

    // container has style overflow-y:auto(slds-scrollable_y)
    get computedContainerClass() {
        const classnames = classSet('container slds-scrollable_y');

        return classnames.add({
            'top-left': this.containerPosition === 'topLeft',
            'top-right': this.containerPosition === 'topRight',
            'bottom-left': this.containerPosition === 'bottomLeft',
            'bottom-right': this.containerPosition === 'bottomRight',
        });
    }

    get computedConfigClass() {
        const classnames = classSet('config');

        return classnames.add({
            'config-bottom':
                this.containerPosition === 'topLeft' ||
                this.containerPosition === 'topRight',
        });
    }

    handleWidthSlider(event) {
        this.containerWidth = event.detail.value;
        const css = document.body.style;
        css.setProperty('--containerWidth', `${this.containerWidth}px`);
    }

    handleHeightSlider(event) {
        this.containerHeight = event.detail.value;
        const css = document.body.style;
        css.setProperty('--containerHeight', `${this.containerHeight}px`);
    }

    handleContainerScroll() {
        this.isContainerScroll = !this.isContainerScroll;
    }

    handleViewportScroll() {
        this.isViewportScroll = !this.isViewportScroll;
    }

    handleShadowContainer() {
        this.isUseShadowRootContainer = !this.isUseShadowRootContainer;
        if (this.isUseShadowRootContainer) {
            this.isContainerScroll = false;
        }
    }

    get isContainerScrollDisabled() {
        return this.isUseShadowRootContainer === true;
    }
}

```

```html
<template>
    <!-- Container -->
    <div class={computedContainerClass}>
        <p class="container-text">Container</p>

        <template if:true={isUseShadowRootContainer}>
            <positionLibrary-playground-shadow-scroll>
                <positionLibrary-components
                    component={selectedComponent}
                    class={computedComponentClass}
                ></positionLibrary-components>
            </positionLibrary-playground-shadow-scroll>
        </template>

        <template if:false={isUseShadowRootContainer}>
            <positionLibrary-components
                component={selectedComponent}
                class={computedComponentClass}
            ></positionLibrary-components>
        </template>

        <template if:true={isContainerScroll}>
            <div class="container-placeholder"></div>
        </template>
    </div>

    <!-- Config panel -->
    <div class={computedConfigClass}>
        <div class="slds-text-heading_medium slds-m-bottom_x-small">
            Configuration
        </div>

        <div class="slds-grid slds-gutters_small">
            <div class="slds-col slds-size_1-of-5">
                <lightning-combobox
                    name="components"
                    label="Select a component"
                    placeholder="Please select"
                    value={selectedComponent}
                    options={componentOptions}
                    onchange={handleComponentSelector}
                >
                </lightning-combobox>
            </div>
            <div class="slds-col slds-size_2-of-5">
                <lightning-slider
                    label="Container Width(px)"
                    step="50"
                    min="100"
                    max="500"
                    value={containerWidth}
                    onchange={handleWidthSlider}
                ></lightning-slider>
                <lightning-slider
                    label="Container Height(px)"
                    step="50"
                    min="100"
                    max="500"
                    value={containerHeight}
                    onchange={handleHeightSlider}
                ></lightning-slider>
            </div>
            <div class="slds-col slds-size_1-of-5">
                <lightning-combobox
                    name="containerPosition"
                    label="Container Position"
                    placeholder="Please select"
                    value={containerPosition}
                    options={positionOptions}
                    onchange={handleContainerPosition}
                >
                </lightning-combobox>
                <lightning-combobox
                    name="componentPosition"
                    label="Component Position"
                    placeholder="Please select"
                    value={componentPosition}
                    options={positionOptions}
                    onchange={handleComponentPosition}
                >
                </lightning-combobox>
            </div>
            <div class="slds-col slds-size_1-of-5">
                <lightning-input
                    type="toggle"
                    name="container scrollbar"
                    label="Container Scrollbar"
                    message-toggle-active="Enabled"
                    message-toggle-inactive="Disabled"
                    checked={isContainerScroll}
                    onchange={handleContainerScroll}
                    disabled={isContainerScrollDisabled}
                ></lightning-input>
                <lightning-input
                    type="toggle"
                    name="viewport scrollbar"
                    label="Viewport Scrollbar"
                    message-toggle-active="Enabled"
                    message-toggle-inactive="Disabled"
                    checked={isViewportScroll}
                    onchange={handleViewportScroll}
                    class="slds-m-top_medium"
                ></lightning-input>
                <lightning-input
                    type="toggle"
                    name="ShadowRoot Container"
                    label="ShadowRoot Container"
                    message-toggle-active="Enabled"
                    message-toggle-inactive="Disabled"
                    checked={isUseShadowRootContainer}
                    onchange={handleShadowContainer}
                    class="slds-m-top_medium"
                ></lightning-input>
            </div>
        </div>
    </div>

    <!-- Placeholder to enable scrollbar of viewport -->
    <template if:true={isViewportScroll}>
        <div class="viewport-placeholder"></div>
    </template>
</template>

```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class PlaygroundShadowScroll extends LightningElement {
    handleScroll(event) {
        const { callback } = event.detail;
        callback(event.composedPath());
        event.stopPropagation();
    }
}

```

```html
<template>
    <div
        style="overflow: auto; width: 100%; height: 100%; background: #f3f2f2"
        onprivatescrollablecontainer={handleScroll}
    >
        <slot></slot>
    </div>
</template>

```

---
