# lightning-tab

**What is it?**  
This component is a tabbed container that allows users to switch between different content sections by clicking on the respective tab, providing a streamlined and organized user experience.

**Where would you use it?**
- In an online shopping website, the <lightning-tab> component can be used to categorize different types of products. For example, one tab could be labeled 'Electronics' and display all the electronic items when clicked, while another tab could be labeled 'Clothing' and show all the clothing items when selected.
- In a university's student portal, the <lightning-tab> component can be used to separate different sections of student information. For example, one tab could be labeled 'Grades' and display the student's academic grades when clicked, while another tab could be labeled 'Schedule' and show the student's class schedule when selected.
- In a company's internal system, the <lightning-tab> component can be used to organize different departments. For instance, one tab could be labeled 'Human Resources' and display all HR-related information when clicked, while another tab could be labeled 'Finance' and show all finance-related information when selected.
- In a music streaming app, the <lightning-tab> component can be used to categorize different genres of music. For example, one tab could be labeled 'Pop' and display all the pop songs when clicked, while another tab could be labeled 'Rock' and show all the rock songs when selected.
- In a news website, the <lightning-tab> component can be used to separate different types of news categories. For instance, one tab could be labeled 'Politics' and display all the political news when clicked, while another tab could be labeled 'Sports' and show all the sports news when selected.
- In a travel booking website, the <lightning-tab> component can be used to categorize different types of bookings. For example, one tab could be labeled 'Flights' and display all the flight booking options when clicked, while another tab could be labeled 'Hotels' and show all the hotel booking options when selected.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-tab label='Item One'>`
    `<lightning-tab label={tabLabel}>`
- **icon-name** `string`  
  _Examples:_
    `<lightning-tab icon-name='utility:home'>`
    `<lightning-tab icon-name={iconName}>`
- **icon-assistive-text** `string`  
  _Examples:_
    `<lightning-tab icon-assistive-text='Home'>`
    `<lightning-tab icon-assistive-text={iconText}>`
- **end-icon-name** `string`  
  _Examples:_
    `<lightning-tab end-icon-name='utility:close'>`
    `<lightning-tab end-icon-name={endIconName}>`
- **end-icon-alternative-text** `string`  
  _Examples:_
    `<lightning-tab end-icon-alternative-text='Close'>`
    `<lightning-tab end-icon-alternative-text={endIconText}>`
- **show-error-indicator** `boolean`  
  _Examples:_
    `<lightning-tab show-error-indicator>`
    `<lightning-tab show-error-indicator={hasError}>`
- **onactive** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-tab onactive={handleActive}>`

**Related Components:**
- **lightning-tabset** (required)

**Docs:**
A `lightning-tab` component keeps related content in a single container. The tab content
displays when a user clicks the tab. Use `lightning-tab`
as a child of the [`lightning-tabset`](bundle/lightning-tabset/documentation) component.

This component inherits styling from
[tabs](https://www.lightningdesignsystem.com/components/tabs/) in the
Lightning Design System.

Use the `label` attribute to specify the tab's text label.

To display an icon at the beginning of the label, use the `icon-name` attribute. Provide alternative text for the icon using `icon-assistive-text`.

To display an icon at the end of the label, use the `end-icon-name` attribute. Provide alternative text for that icon using `end-icon-alternative-text`.

Specify the `show-error-indicator` attribute to display an error indicator in the tab after the label. If an end icon is present, the error indicator is displayed after the icon.

#### Usage Considerations

Tab content is lazy loaded. You can only query the content for the active and previously active tabs.

...

**Examples:**


---
