# lightning-message-dispatcher

**What is it?**  
This component enables communication with an iframe, providing a seamless interaction experience between the user interface and embedded content.

**Where would you use it?**
- Imagine you're using a website for online shopping and you've added a few items to your cart. When you go to the checkout page, which is a separate page, it still knows what items you have in your cart. This is because the <lightning-message-dispatcher> component is used to communicate between the shopping and checkout pages.
- Consider a scenario where you're using an online form to apply for a job. The form is split across multiple pages, but the information you enter on one page is remembered when you move to the next. This is possible because the <lightning-message-dispatcher> component is used to pass your information from one page to the next.
- Imagine you're using an online banking website. You navigate from the homepage to your account details page. Despite being a different page, it still knows who you are and can display your account details. This is because the <lightning-message-dispatcher> component is used to communicate your user information from the homepage to the account details page.

**How do you use it?**


**Related Components:**
- **lightning-map** (optional)
- **lightning-lookup-address** (optional)

**Docs:**
# Message Dispatcher

`lightning/messageDispatcher` enables your component to communicate with an iframe. It's supported on the Salesforce platform and outside the platform.

Import functions from the `lightning/messageDispatcher` module.

```js
import {
    registerMessageHandler,
    unregisterMessageHandler,
    createMessage,
    postMessage,
} from 'lightning/messageDispatcher';
```

For examples, see the `lightning-map` and `lightning-lookup-address` components.

Additionally, `one:iframeMessageManager` handles all event post from the iframe. It uses `lightning/messageDispatcher` to dispatch to a component.


**Examples:**


---
