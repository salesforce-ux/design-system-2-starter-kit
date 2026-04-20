# lightning-context

**What is it?**  
This component provides a method for passing data through the component tree, allowing child components to consume context data without manual prop passing, enhancing the user experience by enabling theme consistency across components.

**Where would you use it?**
- Imagine you're using a website for a clothing store, and you've selected 'dark mode' as your preferred theme. The <lightning-context> component could be used to ensure that every page you visit on the site, from the homepage to individual product pages, maintains your 'dark mode' setting without you having to select it again each time.
- Consider a language learning app where you've selected Spanish as your language of choice. The <lightning-context> component could be used to ensure that all the lessons, quizzes, and other resources you access are presented in Spanish, without you having to select your language preference each time you start a new activity.
- Think about a news website where you've chosen to filter articles by a specific topic, such as 'technology'. The <lightning-context> component could be used to ensure that as you navigate through different sections of the site, the articles displayed continue to be filtered by your chosen topic.
- Imagine a music streaming platform where you've selected a specific genre as your favorite. The <lightning-context> component could be used to ensure that all the music recommendations you receive, across different sections of the platform, are based on your selected genre.
- Consider a weather app where you've set your location to New York City. The <lightning-context> component could be used to ensure that all the weather forecasts and alerts you see, no matter which part of the app you're in, are relevant to New York City.

**How do you use it?**


**Related Components:**


**Docs:**
# Context

`lightning/context` provides a way to pass data through the component tree without having to pass props down manually at every level.

Extend this module to provide arbitrary context that can be consumed via wire by any child Lightning web component.

`lightning/context` follows https://github.com/salesforce/lwc-rfcs/blob/master/text/0000-context-service.md.

### Usage

Create a new class that extends from `LightningContext` to provide a contextual `theme` value to all its children:

```js
// x/themeContext/themeContext.js

// Provider Definition
import LightningContext from 'lightning/context';

// LightningContext is abstract, is intended to be extended
export default class ThemeContext extends LightningContext {
...

**Examples:**
**Example 1:**

```js
import { LightningElement, track } from 'lwc';

const themesToggleMap = { light: 'dark', dark: 'light' };

export default class Basic extends LightningElement {
    @track _theme = 'dark';

    toggleTheme() {
        this._theme = themesToggleMap[this._theme];
    }
}

```

```html
<template>
    <context-provider theme={_theme}>
        <context-consumer></context-consumer>
    </context-provider>

    <lightning-button label="Toggle theme (light/dark)" onclick={toggleTheme}></lightning-button>
</template>

```

**Example 2:**

```js
import { LightningElement, wire } from 'lwc';
import ContextProvider from 'context/provider';

export default class Consumer extends LightningElement {
    // eslint-disable-next-line @lwc/lwc/valid-wire
    @wire(ContextProvider.Provider) context;

    get theme() {
        return this.context.theme;
    }

    get themeClass() {
        return `${this.theme}-theme`;
    }
}

```

```html
<template>
    <div class={themeClass}>
        <h1 class={theme}>Consumer with theme: {theme}</h1>
    </div>
</template>

```

---
