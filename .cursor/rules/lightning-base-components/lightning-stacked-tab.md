# lightning-stacked-tab

**What is it?**  
This component is a tabbed container that organizes related content, providing an interactive user experience where content is displayed upon clicking a tab, with additional mobile support for sliding content into view.

**Where would you use it?**
- Imagine you're using a mobile app for a music streaming service. The app has a section where you can view an artist's profile. In this section, there are different categories of information like 'About', 'Albums', 'Songs', etc. Each of these categories could be a <lightning-stacked-tab>, so when you click on 'Albums', for example, you see all the albums by that artist.
- On a shopping website, you're looking at a product page. The product has a lot of information divided into sections like 'Product Details', 'Reviews', 'Shipping Info', etc. Each of these sections could be a <lightning-stacked-tab>. When you click on 'Reviews', you can read what other customers have said about the product.
- You're using a fitness app on your phone. In the app, there's a section for each type of exercise like 'Cardio', 'Strength Training', 'Yoga', etc. Each of these could be a <lightning-stacked-tab>. When you click on 'Yoga', you see all the yoga workouts available in the app.
- On a news website, there's a section for different types of news like 'Local', 'National', 'World', 'Sports', etc. Each of these could be a <lightning-stacked-tab>. When you click on 'Sports', you see all the latest sports news.
- You're using a recipe app. In the app, there's a section for each type of cuisine like 'Italian', 'Mexican', 'Chinese', etc. Each of these could be a <lightning-stacked-tab>. When you click on 'Italian', you see all the Italian recipes available in the app.
- On a travel website, there's a section for each type of travel information like 'Flights', 'Hotels', 'Car Rentals', etc. Each of these could be a <lightning-stacked-tab>. When you click on 'Hotels', you see all the hotel booking options available.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-stacked-tab label='Related'>`
    `<lightning-stacked-tab label={tabLabel}>`
- **icon-name** `string`  
  _Examples:_
    `<lightning-stacked-tab icon-name='utility:chevronright'>`
    `<lightning-stacked-tab icon-name={iconName}>`

**Related Components:**
- **lightning-stacked-tabset** (required)

**Docs:**
# Stacked Tab

A `lightning-stacked-tab` component keeps related content in a single container. The tab content displays when a user clicks the tab. Use `lightning-stacked-tab` as a child of the `lightning-stacked-tabset` component.

```html
<lightning-stacked-tabset>
    <lightning-stacked-tab label="Related"></lightning-stacked-tab>
    <lightning-stacked-tab label="Details"></lightning-stacked-tab>
</lightning-stacked-tabset>
```

The stacked tabs act as buttons. To support displaying tab content on mobile devices, we recommend sliding a tab content into view when a tab is clicked. The tab content should display a back button that returns you to the stacked tabs.

`lightning-stacked-tab` implements the [tabs (on mobile)](https://lightningdesignsystem.com/components/tabs/#On-Mobile) blueprint in the Salesforce Lightning Design System (SLDS).

## Attributes

Use the following attributes to customize `lightning-stacked-tab`.

| Attribute Name | Type   | Description                                                 |
...

**Examples:**


---
