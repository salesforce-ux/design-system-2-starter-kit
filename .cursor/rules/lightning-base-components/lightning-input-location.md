# lightning-input-location

**What is it?**  
This component is a geolocation field that allows users to input latitude and longitude values, providing an interactive experience for identifying specific geographic locations.

**Where would you use it?**
- A travel agency could use the <lightning-input-location> component on their website to allow customers to input their current location. This would allow the agency to suggest nearby travel destinations or calculate distances to potential destinations.
- A weather website could use the <lightning-input-location> component to allow users to input their location. The website could then provide weather forecasts for that specific location.
- A delivery service could use the <lightning-input-location> component on their website to allow customers to input their delivery location. This would allow the service to calculate delivery times and costs.
- A real estate website could use the <lightning-input-location> component to allow users to input their desired location for a new home. The website could then show listings in and around that location.
- A car rental service could use the <lightning-input-location> component on their website to allow customers to input their pick-up and drop-off locations. This would allow the service to calculate rental costs based on distance and availability of vehicles at those locations.
- A job search website could use the <lightning-input-location> component to allow users to input their desired job location. The website could then show job listings in and around that location.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-input-location label='My Coordinates'>`
- **latitude** `string`  
  _Examples:_
    `<lightning-input-location latitude='37.7938460'>`
- **longitude** `string`  
  _Examples:_
    `<lightning-input-location longitude='-122.3948370'>`
- **required** `boolean`  
  _Examples:_
    `<lightning-input-location required>`
- **validity** `ValidityState`  
  _Examples:_
    `<lightning-input-location validity={myValidityState}>`
- **onchange** `(ev: CustomEvent & { detail: { latitude: string, longitude: string } }) => void`  
  _Examples:_
    `<lightning-input-location onchange={handleChange}>`

**Related Components:**
- **lightning-input** (optional)

**Docs:**
---
examples:
    - name: base
      label: Basic Geolocation Fields
      description: Geolocation fields include a latitude and longitude field.
    - name: defaultValues
      label: Default Coordinates
      description: Geolocation fields can include predefined coordinates.
    - name: required
      label: Required Geolocation Fields
      description: Geolocation fields marked as required throw an error if you don't enter a latitude and longitude.
    - name: disabled
      label: Disabled Geolocation Fields
      description: Disabled geolocation fields are grayed out and you cannot interact with them.
    - name: readOnly
      label: Read-Only Geolocation Fields
      description: Read-only geolocation fields are not editable.
    - name: fieldLevelHelp
      label: Geolocation Fields with Field-Level Help
      description: Field-level help guides users with information about the geolocation fields.
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class InputLocationBase extends LightningElement {}

```

```html
<template>
    <lightning-input-location label="No default coordinates" ></lightning-input-location>
</template>
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class InputLocationDefaultValues extends LightningElement {}

```

```html
<template>
    <lightning-input-location label="Default coordinates" latitude="-15.1234" longitude="99.5517"></lightning-input-location>
</template>
```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class InputLocationDisabled extends LightningElement {}

```

```html
<template>
    <lightning-input-location label="Disabled" latitude="-15.1234" longitude="99.5517" disabled ></lightning-input-location>
</template>
```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class InputLocationFieldLevelHelp extends LightningElement {}

```

```html
<template>
    <lightning-input-location label="fieldLevelHelp presents" field-level-help="Field level text example"></lightning-input-location>
</template>
```

**Example 5:**

```js
import { LightningElement } from 'lwc';

export default class InputLocationReadOnly extends LightningElement {}

```

```html
<template>
    <lightning-input-location label="Read-only" latitude="-15.1234" longitude="99.5517" readonly></lightning-input-location>
</template>
```

**Example 6:**

```js
import { LightningElement } from 'lwc';

export default class InputLocationRequired extends LightningElement {}

```

```html
<template>
    <lightning-input-location label="Required" latitude="-15.1234" longitude="99.5517" required ></lightning-input-location>
</template>
```

---
