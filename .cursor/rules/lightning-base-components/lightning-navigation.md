# lightning-navigation

**What is it?**  
This component provides the functionality to generate URLs or navigate to different pages within an application, offering a seamless navigation experience to the end user.

**Where would you use it?**
- Imagine you're using a Salesforce application and you're on a page that displays a list of all your customers. You see a customer's name and you want to view more details about them. When you click on the customer's name, the <lightning-navigation> component is used to take you to a new page that shows all the details about that customer.
- You're using a Salesforce application and you're on a page that shows detailed information about a specific customer. You see a button that says 'Go to Home'. When you click on this button, the <lightning-navigation> component is used to take you back to the home page of the application.
- You're using a Salesforce application and you're on a page that shows a list of all your tasks for the day. You see a task that you want to edit. When you click on the 'Edit' button next to the task, the <lightning-navigation> component is used to take you to a new page where you can edit the details of the task.
- You're using a Salesforce application and you're on a page that shows a list of all your sales leads. You see a button that says 'Add New Lead'. When you click on this button, the <lightning-navigation> component is used to take you to a new page where you can enter the details of a new sales lead.
- You're using a Salesforce application and you're on a page that shows a list of all your products. You see a product that you want to view more details about. When you click on the product's name, the <lightning-navigation> component is used to take you to a new page that shows all the details about that product.
- You're using a Salesforce application and you're on a page that shows a list of all your employees. You see a button that says 'Add New Employee'. When you click on this button, the <lightning-navigation> component is used to take you to a new page where you can enter the details of a new employee.

**How do you use it?**


**Related Components:**
- **lightning-navigation** (required)

**Docs:**
To generate a URL or navigate to a page reference, use the `lightning-navigation` service wire adapters and functions.

Note: The playground doesn't support the `lightning-navigation` service.

#### CurrentPageReference

Get a reference to the current page in Salesforce. Page URL formats can change in future releases. To future proof your apps, use page references instead of URLs. Use the page reference to create a deep link to the page.

```javascript
import { CurrentPageReference } from 'lightning/navigation';
@wire(CurrentPageReference)
pageRef;
```

The key-value pairs of the PageReference `state` property are serialized to URL query parameters. To create a deep link that describes the page and that a user can bookmark, update the `state` property. See [Add Query Parameters](https://developer.salesforce.com/docs/platform/lwc/guide/use-navigate-add-params-url).

#### NavigationMixin

Apply the `NavigationMixin` to the component's base class to gain access to its APIs.

...

**Examples:**


---
