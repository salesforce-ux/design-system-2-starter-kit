# lightning-progress-step

**What is it?**  
This component represents a step in a progress indicator, displaying a label and value, and providing user interaction through custom events and tooltips, enhancing the user's navigation experience.

**Where would you use it?**
- In an online shopping platform, a <lightning-progress-step> component can be used to show the progress of a customer's order. The steps could include 'Order Placed', 'Order Packed', 'Order Shipped', and 'Order Delivered'. The customer can easily see which stage their order is at, and the step they are currently on would be highlighted.
- In a multi-step online form, such as a loan application, a <lightning-progress-step> component can be used to show the user's progress through the form. The steps could include 'Personal Information', 'Employment Information', 'Financial Information', and 'Submit Application'. The user can see which step they are currently on and what steps are coming up next.
- In an online course platform, a <lightning-progress-step> component can be used to show a student's progress through a course. The steps could include 'Introduction', 'Module 1', 'Module 2', 'Module 3', and 'Final Exam'. The student can see which module they are currently on and what modules are coming up next.
- In a project management tool, a <lightning-progress-step> component can be used to show the progress of a project. The steps could include 'Planning', 'Design', 'Development', 'Testing', and 'Deployment'. The team members can see which stage the project is at, and the step they are currently on would be highlighted.
- In a fitness app, a <lightning-progress-step> component can be used to show a user's progress through a workout plan. The steps could include 'Warm Up', 'Cardio', 'Strength Training', 'Cool Down', and 'Stretching'. The user can see which step they are currently on and what steps are coming up next.
- In a recipe app, a <lightning-progress-step> component can be used to show a user's progress through a recipe. The steps could include 'Preparation', 'Mixing', 'Cooking', and 'Serving'. The user can see which step they are currently on and what steps are coming up next.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-progress-step label='Step One'>`
    `<lightning-progress-step label={stepLabel}>`
- **value** `string`  
  _Examples:_
    `<lightning-progress-step value='step1'>`
    `<lightning-progress-step value={stepValue}>`
- **onstepblur** `(ev: CustomEvent & { detail: { index: string } }) => void`  
  _Examples:_
    `<lightning-progress-step onstepblur={handleStepBlur}>`
- **onstepfocus** `(ev: CustomEvent & { detail: { index: string } }) => void`  
  _Examples:_
    `<lightning-progress-step onstepfocus={handleStepFocus}>`
- **onstepmouseenter** `(ev: CustomEvent & { detail: { index: string } }) => void`  
  _Examples:_
    `<lightning-progress-step onstepmouseenter={handleStepMouseEnter}>`
- **onstepmouseleave** `(ev: CustomEvent & { detail: { index: string } }) => void`  
  _Examples:_
    `<lightning-progress-step onstepmouseleave={handleStepMouseLeave}>`

**Related Components:**
- **lightning-progress-indicator** (required)

**Docs:**
A `lightning-progress-step` component specifies a step inside the [`lightning-progress-indicator`](bundle/lightning-progress-indicator/documentation) component.
Specify the `label` attribute to define text displayed for the name or tooltip for the step.
Specify the `value` attribute to set the value used to reference the step.

To specify the current step, the `current-step` attribute on `lightning-progress-indicator`
must match one of the `value` attributes on a `lightning-progress-step` component.

```html
<template>
    <lightning-progress-indicator current-step="step2">
        <lightning-progress-step label="Step One" value="step1">
        </lightning-progress-step>
        <lightning-progress-step label="Step Two" value="step2">
        </lightning-progress-step>
        <lightning-progress-step label="Step Three" value="step3">
        </lightning-progress-step>
    </lightning-progress-indicator>
</template>
```

...

**Examples:**


---
