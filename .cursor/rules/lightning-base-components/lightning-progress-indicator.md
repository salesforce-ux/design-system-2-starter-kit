# lightning-progress-indicator

**What is it?**  
This component is a visual tool that displays a horizontal list of steps in a process, indicating the current step, completed steps, and upcoming steps, providing users with a clear understanding of their progress in a given task or process.

**Where would you use it?**
- In an online course platform, a <lightning-progress-indicator> could be used to show a student's progress through a course. Each step could represent a module or lesson within the course. As the student completes each lesson, the progress indicator would update to show the completed lessons and the current lesson the student is on.
- In a multi-step online form, such as a loan application, a <lightning-progress-indicator> could be used to show the user's progress through the form. Each step could represent a section of the form, such as 'Personal Information', 'Employment Information', 'Financial Information', etc. As the user completes each section, the progress indicator would update to show the completed sections and the current section the user is on.
- In an e-commerce website, a <lightning-progress-indicator> could be used to show a customer's progress through the checkout process. Each step could represent a stage of the checkout process, such as 'Shopping Cart', 'Shipping Information', 'Payment Information', and 'Review Order'. As the customer completes each stage, the progress indicator would update to show the completed stages and the current stage the customer is on.
- In a project management tool, a <lightning-progress-indicator> could be used to show a team's progress through a project. Each step could represent a phase of the project, such as 'Planning', 'Design', 'Development', 'Testing', and 'Deployment'. As the team completes each phase, the progress indicator would update to show the completed phases and the current phase the team is on.
- In a fitness app, a <lightning-progress-indicator> could be used to show a user's progress through a workout plan. Each step could represent a week of the plan. As the user completes each week, the progress indicator would update to show the completed weeks and the current week the user is on.
- In a job application portal, a <lightning-progress-indicator> could be used to show an applicant's progress through the application process. Each step could represent a stage of the process, such as 'Application Submitted', 'Initial Screening', 'Interview', and 'Offer'. As the applicant progresses through each stage, the progress indicator would update to show the completed stages and the current stage the applicant is on.

**How do you use it?**
- **type** `string`  
  _Examples:_
    `<lightning-progress-indicator type="base">`
    `<lightning-progress-indicator type="path">`
    `<lightning-progress-indicator type={myTypeValue}>`
- **current-step** `string`  
  _Examples:_
    `<lightning-progress-indicator current-step="step2">`
    `<lightning-progress-indicator current-step={currentStepValue}>`
- **has-error** `boolean`  
  _Examples:_
    `<lightning-progress-indicator has-error="true">`
    `<lightning-progress-indicator has-error={hasErrorValue}>`

**Related Components:**
- **lightning-progress-step** (required)
- **lightning-button** (optional)

**Docs:**
---
examples:
    - name: basic
      label: Base Type Progress Indicator
      description: A progress indicator shows the current step in a process and any previous or later steps.
    - name: pathType
      label: Path Type Progress Indicator
      description: The path type displays with a different visual styling than the base progress indicator.
    - name: pathTypeWithIteration
      label: Path Type with Iteration
      description: Steps can be created from a data source using iteration.
    - name: pathTypeWithIfCondition
      label: Path Type with If Condition
      description: Steps can be displayed conditionally.
---

A `lightning-progress-indicator` component displays a horizontal list of steps
in a process, indicating the number of steps in a given process, the current
step, as well as prior steps completed. For example, Sales Path uses a
progress indicator to guide sales reps through the stages of the sales
...

**Examples:**
**Example 1:**

```js
import { LightningElement } from 'lwc';

export default class ProgressIndicatorBasic extends LightningElement {}

```

```html
<template>
    <p>
        A progress indicator displays the steps in a process. All steps preceding the step specified by currentStep are marked completed.
    </p>
    <lightning-progress-indicator current-step="3" type="base" has-error="true" variant="base">
        <lightning-progress-step label="Step 1" value="1"></lightning-progress-step>
        <lightning-progress-step label="Step 2" value="2"></lightning-progress-step>
        <lightning-progress-step label="Step 3" value="3"></lightning-progress-step>
        <lightning-progress-step label="Step 4" value="4"></lightning-progress-step>
    </lightning-progress-indicator>
</template>
```

**Example 2:**

```js
import { LightningElement } from 'lwc';

export default class ProgressIndicatorPathType extends LightningElement {}

```

```html
<template>
    <lightning-progress-indicator current-step="3" type="path" variant="base">
        <lightning-progress-step label="Contacted" value="1"></lightning-progress-step>
        <lightning-progress-step label="Open" value="2"></lightning-progress-step>
        <lightning-progress-step label="Unqualified" value="3"></lightning-progress-step>
        <lightning-progress-step label="Nurturing" value="4"></lightning-progress-step>
        <lightning-progress-step label="Closed" value="5"></lightning-progress-step>
    </lightning-progress-indicator>
</template>
```

**Example 3:**

```js
import { LightningElement } from 'lwc';

export default class ProgressIndicatorPathTypeWithIfCondition extends LightningElement {
    showStep4 = true;

    toggleStep4() {
        this.showStep4 = !this.showStep4;
    }
}

```

```html
<template>
    <lightning-progress-indicator current-step="step-3" type="path" variant="base">
        <lightning-progress-step label="Contacted" value="step-1"></lightning-progress-step>
        <lightning-progress-step label="Open" value="step-2"></lightning-progress-step>
        <lightning-progress-step label="Unqualified" value="step-3"></lightning-progress-step>
        <template if:true={showStep4}>
            <lightning-progress-step label="Nurturing" value="step-4"></lightning-progress-step>
        </template>
        <lightning-progress-step label="Closed" value="step-5"></lightning-progress-step>
    </lightning-progress-indicator>
    <lightning-button label="Hide/Show Step 4" onclick={toggleStep4}></lightning-button>
</template>
```

**Example 4:**

```js
import { LightningElement } from 'lwc';

export default class ProgressIndicatorPathTypeWithIteration extends LightningElement {
    steps = [
        { label: 'Contacted', value: 'step-1' },
        { label: 'Open', value: 'step-2' },
        { label: 'Unqualified', value: 'step-3' },
        { label: 'Nurturing', value: 'step-4' },
        { label: 'Closed', value: 'step-5' },
    ];
}

```

```html
<template>
    <lightning-progress-indicator current-step="step-3" type="path" variant="base">
        <template for:each={steps} for:item="step">
            <lightning-progress-step label={step.label} value={step.value} key={step.label}></lightning-progress-step>
        </template>
    </lightning-progress-indicator>
</template>

```

---
