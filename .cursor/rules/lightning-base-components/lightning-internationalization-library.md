# lightning-internationalization-library

**What is it?**  
This component is a utility that aids in the transition from Aura's localization service to a universal solution based on standards, providing a seamless experience in formatting and parsing dates/times regardless of the environment in which a component is run.

**Where would you use it?**
- Imagine you're using a web application that displays dates and times. If you're in the United States, you might see the date as 'MM/DD/YYYY', but if you're in the United Kingdom, you'd expect to see 'DD/MM/YYYY'. The <lightning-internationalization-library> component helps the application display the date in the format that's familiar to you, based on your location.
- Consider a web application that shows prices of products. If you're in the United States, you'd expect to see the price in dollars, but if you're in Japan, you'd expect to see the price in yen. The <lightning-internationalization-library> component helps the application display the price in the currency that's relevant to you, based on your location.
- Suppose you're using a web application that displays numbers. In some countries, a comma is used to separate thousands, while in others, a period is used. The <lightning-internationalization-library> component helps the application display numbers in the format that's familiar to you, based on your location.

**How do you use it?**


**Related Components:**
- **lightning-i18n-service** (required)
- **lightning-i18n-cldr-options** (required)

**Docs:**
# internationalizationLibrary

Currently, the code base contains logic that directs execution in two different paths, depending whether a component is being executed on the platform vs off. That logic, was intented to aid the migration off the current Aura's localization service, in favor of an unified and universal solution based on standards, that could be consumed on any enviroment.

Such logic can be detailed, on a high level as follows, at run time a path execution decides that:

if a component is run on the platform, it will make use of Aura's localization Service to format and parse dates/times.
if a component is run anywhere else, it will use the globalization i18n-service

## When to use this utility

Because of our legacy support and backward compatiblity contracts, we use this utility as a facade, with the hope that once we are able to fully deprecate Aura's Localization service, this utility will help us to transition into [localizerjs](https://git.soma.salesforce.com/Globalization/localizerjs).

If you have an existing component that maps to any of the Aura's localization service methods, this module will aid with that.

## Our recommmended approach

- For declarative usage, use our localization specific components, they will work both off/on platform.
- For low level, programatic usage, dealing with dates/times/numbers etc. use [localizerjs](https://git.soma.salesforce.com/Globalization/localizerjs). The next section covers more on usage and how these utiltiies are exposed.

...

**Examples:**


---
