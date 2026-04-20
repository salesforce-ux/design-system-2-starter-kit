# lightning-toast-container

**What is it?**  
This component manages and displays a list of toast notifications on a webpage, providing the user with an interactive experience where they can navigate between notifications using keyboard shortcuts.

**Where would you use it?**
- Imagine you're browsing an online store and you add a few items to your shopping cart. As you do this, a small message pops up at the top of the screen, confirming that each item has been added to your cart. This is a scenario where the <lightning-toast-container> component might be used to manage these confirmation messages.
- Consider a scenario where you're using a web application to manage your personal finances. As you input various transactions, small messages appear at the top of the screen to confirm that each transaction has been recorded. These messages are managed by the <lightning-toast-container> component.
- Suppose you're using a social media platform and you receive several notifications about new messages, friend requests, and comments on your posts. Each of these notifications appears as a small message at the top of your screen, and they're managed by the <lightning-toast-container> component.
- Imagine you're using an online learning platform and you complete a lesson or a quiz. A small message pops up at the top of the screen to confirm that you've completed the lesson or quiz and to give you some feedback. This is another scenario where the <lightning-toast-container> component might be used.
- Consider a scenario where you're using a project management tool and you complete a task or update a project status. As you do this, small messages appear at the top of the screen to confirm that your changes have been saved. These messages are managed by the <lightning-toast-container> component.
- Suppose you're using a customer relationship management (CRM) system and you update a customer's details or add a new customer to the system. Each time you do this, a small message appears at the top of the screen to confirm that the customer's details have been updated or that the new customer has been added. These messages are managed by the <lightning-toast-container> component.

**How do you use it?**
- **max-toasts** `number`  
  _Examples:_
    `<lightning-toast-container max-toasts=5>`
- **toast-position** `string`  
  _Examples:_
    `<lightning-toast-container toast-position='top-right'>`
    `<lightning-toast-container toast-position={toastPos}>`
- **container-position** `string`  
  _Examples:_
    `<lightning-toast-container container-position='fixed'>`
    `<lightning-toast-container container-position='absolute'>`
    `<lightning-toast-container container-position={containerPos}>`

**Related Components:**
- **lightning-toast** (required)

**Docs:**
Use the `lightning/toastContainer` module to manage a list of toast components and their order. Each site page supports a single toast container. You can create toast notifications with [lightning/toast](/docs/component-library/bundle/lightning-toast/documentation) and manage them using `lightning/toastContainer`.

This module is available only for LWR Sites for Experience Cloud. For more information, see [Create Components for LWR Sites](https://developer.salesforce.com/docs/atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/get_started_components.htm).

This example creates a basic toast container component that handles and displays all the page-level toast messages.

```javascript
const toastContainer = ToastContainer.instance();
```

#### Customization

By default, the toast container shows a maximum of 3 toast notifications at the same time. Set the `maxToasts` attribute to change the maximum number of toasts shown at a time.

Toast components display at the top center of the container by default. The most recent toast displays at the top of the container, and the oldest toast notification displays at the bottom. Change the toasts' position in the container with the `toastPosition` attribute.

The container position is fixed to the viewport. Adjust the position of the container relative to its parent element with the `containerPosition` attribute. This attribute has two values. 
- `fixed` - positions the container relative to the initial containing block established by the viewport.
- `absolute` - positions the container relative to a positioned parent element.

...

**Examples:**


---
