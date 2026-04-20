# lightning-breadcrumb

**What is it?**  
This component displays a navigational path relative to a parent page, providing users with an actionable and intuitive way to navigate through different levels of an application's hierarchy.

**Where would you use it?**
- Imagine you're shopping online for a new pair of shoes. You've clicked through several pages, starting from the homepage, then to the 'Shoes' category, and finally to 'Women's Shoes'. At the top of the page, you see a trail of clickable links showing you the path you've taken: 'Home > Shoes > Women's Shoes'. This is the <lightning-breadcrumb> component in action, helping you navigate back to any previous page easily.
- Consider a situation where you're using an online learning platform. You're deep into a course, having navigated through several modules and lessons. At the top of the page, you see a trail of links: 'Home > Course Name > Module 1 > Lesson 3'. This is the <lightning-breadcrumb> component, allowing you to jump back to any previous module or the course homepage with just one click.
- Imagine you're browsing a company's internal portal, looking for a specific policy document. You've navigated through several pages: 'Home > Human Resources > Policies > Leave Policy'. The <lightning-breadcrumb> component at the top of the page shows this path, allowing you to easily navigate back to the 'Policies' page or any other page in the path.
- Consider a scenario where you're using a project management tool. You've navigated from the dashboard to a specific project, then to a task within that project. The path at the top of the page reads 'Dashboard > Project A > Task 3'. This is the <lightning-breadcrumb> component, allowing you to easily navigate back to the project page or the dashboard.
- Imagine you're using a forum website. You've navigated from the homepage to a specific category, then to a thread within that category. The path at the top of the page reads 'Home > Category Name > Thread Title'. This is the <lightning-breadcrumb> component, allowing you to easily navigate back to the category page or the homepage.
- Consider a situation where you're using a digital library. You've navigated from the homepage to a specific genre, then to a book within that genre. The path at the top of the page reads 'Home > Genre > Book Title'. This is the <lightning-breadcrumb> component, allowing you to easily navigate back to the genre page or the homepage.

**How do you use it?**
- **label** `string`  
  _Examples:_
    `<lightning-breadcrumb label='Parent Account'>`
    `<lightning-breadcrumb label={breadcrumbLabel}>`
- **href** `string`  
  _Examples:_
    `<lightning-breadcrumb href='path/to/place/1'>`
    `<lightning-breadcrumb href={breadcrumbHref}>`
- **name** `string`  
  _Examples:_
    `<lightning-breadcrumb name='objectName'>`
    `<lightning-breadcrumb name={breadcrumbName}>`
- **onclick** `(ev: CustomEvent) => void`  
  _Examples:_
    `<lightning-breadcrumb onclick={handleNavigateToCustomPage}>`

**Related Components:**
- **lightning-breadcrumbs** (required)
- **lightning-navigation** (optional)

**Docs:**
A `lightning-breadcrumb` component displays the path of a page relative to a
parent page. Breadcrumbs are nested in a `lightning-breadcrumbs` component.
Each breadcrumb is actionable and separated by a greater-than sign. The order
the breadcrumbs appear depends on the order they are listed in markup.

Here is an example.

```html
<template>
    <lightning-breadcrumbs>
        <lightning-breadcrumb label="Parent Account" href="path/to/place/1">
        </lightning-breadcrumb>
        <lightning-breadcrumb label="Case" href="path/to/place/2">
        </lightning-breadcrumb>
    </lightning-breadcrumbs>
</template>
```

#### Component Styling

...

**Examples:**


---
