# lightning-formatted-location

**What is it?**  
This component is designed to display a read-only representation of geographic coordinates (latitude and longitude) in decimal degrees format, providing users with a clear and precise location information.

**Where would you use it?**
- Imagine you're using a travel planning app, and you've just selected a destination for your next vacation. The app could use the <lightning-formatted-location> component to display the exact coordinates of your destination. This would give you a precise idea of where you're going, even if you're not familiar with the area.
- Suppose you're using a weather app that allows you to check the forecast for any location in the world. When you enter a location, the app could use the <lightning-formatted-location> component to show you the exact latitude and longitude of the place you're interested in. This would help you ensure that you're checking the weather for the right place, especially if there are multiple places with the same name.
- Imagine you're using a real estate app to look for a new home. When you select a property, the app could use the <lightning-formatted-location> component to display the exact coordinates of the property. This would give you a precise idea of where the property is located, which could be useful if you're planning to visit it in person.

**How do you use it?**
- **latitude** `string`  
  _Examples:_
    `<lightning-formatted-location latitude="37.7938460">`
- **longitude** `string`  
  _Examples:_
    `<lightning-formatted-location longitude="-122.3948370">`

**Related Components:**


**Docs:**
---
examples:
    - name: basic
      label: Formatted Location
      description: Displays a geolocation in the Decimal degrees (DD) format [latitude, longitude].
---

A `lightning-formatted-location` component displays a read-only representation
of a latitude and longitude value. Latitude and longitude are geographic
coordinates specified in decimal degrees. If one of the values is invalid or
outside the allowed range, this component doesn't display anything.

Here are a few examples of latitudes: -30, 45, 37.12345678, -10.0. Values such
as 90.5 or -90.5 are not valid latitudes. Here are a few examples of
longitudes: -100, -120.9762, 115.84. Values such as 180.5 or -180.5 are not
valid longitudes.

This example displays a geolocation with a latitude of 37.7938460 and a
longitude of -122.3948370.

...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class FormattedLocationBasic extends LightningElement {}

```

```html
<template>
    <p><lightning-formatted-location latitude="22" longitude="122.2222"></lightning-formatted-location></p>
</template>
```

---
