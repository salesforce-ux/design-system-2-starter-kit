# lightning-toast

**What is it?**  
This component displays a toast notification with an icon, label, message, and links, providing users with brief, pertinent information and feedback after they perform an action.

**Where would you use it?**
- Imagine you're using a web application to manage your personal finances. You've just finished categorizing your expenses for the month and click 'Save'. A small, green <lightning-toast> notification pops up at the top of the screen, confirming that your changes have been saved successfully.
- You're using a social media platform and decide to update your profile picture. After you upload the new photo and click 'Update', a <lightning-toast> notification appears at the top of the screen. It's a small, blue box that tells you your profile picture has been updated successfully.
- You're shopping online and add an item to your cart. As soon as you click 'Add to Cart', a small, grey <lightning-toast> notification appears at the top of the screen. It confirms that the item has been added to your cart and provides a link for you to view your cart and proceed to checkout.
- You're using a project management tool and just completed a task. You click 'Mark as Complete', and a small, green <lightning-toast> notification pops up at the top of the screen. It confirms that the task has been marked as complete and provides a link for you to view the updated project timeline.
- You're using a web application to book a flight. After you enter your travel details and click 'Search', a small, blue <lightning-toast> notification appears at the top of the screen. It tells you that your search is being processed and provides a link for you to view your search results once they're ready.
- You're using a web application to submit a support ticket. After you fill out the form and click 'Submit', a small, grey <lightning-toast> notification pops up at the top of the screen. It confirms that your ticket has been submitted and provides a link for you to view the status of your ticket.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-toast label='This is a toast label which shows {0}, you can learn more about its accessibility from {1}'>`
- **labelLinks** `Array<{url: string, label: string}> | { [key: string]: {url: string, label: string} }`  
  _Examples:_
    `<lightning-toast labelLinks=[{url: 'https://www.lightningdesignsystem.com/components/toast/', label: 'LDS link'}]>`
    `<lightning-toast labelLinks={myLabelLinks}>`
- **message** `string`  
  _Examples:_
    `<lightning-toast message='I want to show a {salesforceLink} and a {slackLink}'>`
    `<lightning-toast message={myMessage}>`
- **messageLinks** `Array<{url: string, label: string}> | { [key: string]: {url: string, label: string} }`  
  _Examples:_
    `<lightning-toast messageLinks=[{url: 'http://www.salesforce.com', label: 'Salesforce link'}]>`
    `<lightning-toast messageLinks={myMessageLinks}>`
- **variant** `'info' | 'success' | 'warning' | 'error'`  
  _Examples:_
    `<lightning-toast variant='info'>`
    `<lightning-toast variant='success'>`
    `<lightning-toast variant='error'>`
- **mode** `'dismissible' | 'sticky'`  
  _Examples:_
    `<lightning-toast mode='dismissible'>`
    `<lightning-toast mode='sticky'>`

**Related Components:**
- **lightning-toast-container** (required)
- **lightning-formatted-rich-text** (optional)

**Docs:**
The `lightning/toast` module displays a toast notification with an icon, label, message, and links. Use a toast notification to convey small pieces of information to the user, such as providing feedback and confirmation after the user takes an action. You can set toast notifications to disappear after a certain duration or until the user clicks the close button.

### Show a Toast

To show a toast notification, call the function `show(config, comp)` from `lightning/toast` and provide a toast config and a reference to the local component as parameters. The function creates a single page-level toast container if one does not exist. See the `config` attributes section below for a list of properties to include in the config.

```javascript
import { LightningElement } from 'lwc';
import Toast from 'lightning/toast';

export default class MyComponent extends LightningElement {
    ...
    onClick() {
        ...
        Toast.show({
            label: 'This is a toast label which shows {0}, you can learn more about its accessibility from {1}',
            labelLinks : [{
                url: 'https://www.lightningdesignsystem.com/components/toast/',
                label: 'LDS link'
            }, {
...

**Examples:**


---
