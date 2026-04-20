# lightning-carousel-image

**What is it?**  
This component allows for the display of up to five images in a carousel format, complete with optional headers, descriptions, and hyperlinks, providing an interactive and visually engaging user experience.

**Where would you use it?**
- Imagine you're browsing an online clothing store. On the homepage, there's a rotating carousel of images showcasing the latest fashion trends. Each image in the <lightning-carousel-image> component has a title and a brief description of the trend, and when you click on an image, it takes you to a page where you can shop for items related to that trend.
- On a university's website, there's a <lightning-carousel-image> component on the homepage that displays images of the campus, student life, and academic programs. Each image has a title and a brief description, providing a snapshot of what the university has to offer. If you're interested in learning more about a particular aspect of the university, you can click on the image to be taken to a relevant page.
- Consider a non-profit organization's website. On the homepage, there's a <lightning-carousel-image> component that cycles through images of the organization's recent projects and initiatives. Each image has a title and a brief description, and when you click on an image, it takes you to a page where you can learn more about that project and make a donation.
- On a travel agency's website, there's a <lightning-carousel-image> component on the homepage that displays images of popular travel destinations. Each image has a title and a brief description, providing a glimpse of what each destination has to offer. If you're interested in a particular destination, you can click on the image to be taken to a page with more information and booking options.
- On a food blog, there's a <lightning-carousel-image> component that showcases images of featured recipes. Each image has a title and a brief description of the dish, and when you click on an image, it takes you to a page with the full recipe.

**How do you use it?**
- **src** `string`  
  _Examples:_
    `<lightning-carousel-image src='path/to/image.jpg'>`
    `<lightning-carousel-image src={imageUrl}>`
- **header** `string`  
  _Examples:_
    `<lightning-carousel-image header='Image Header'>`
    `<lightning-carousel-image header={imageHeader}>`
- **description** `string`  
  _Examples:_
    `<lightning-carousel-image description='Image Description'>`
    `<lightning-carousel-image description={imageDescription}>`
- **alternative-text** `string`  
  _Examples:_
    `<lightning-carousel-image alternative-text='Alternative Text'>`
    `<lightning-carousel-image alternative-text={altText}>`
- **href** `string`  
  _Examples:_
    `<lightning-carousel-image href='https://www.example.com'>`
    `<lightning-carousel-image href={linkUrl}>`

**Related Components:**
- **lightning-carousel** (required)

**Docs:**
Use the `lightning-carousel-image` component to specify images to display in the
[`lightning-carousel`](bundle/lightning-carousel/documentation) component.
You can specify up to five images. The images are displayed in the order you
list them in the `lightning-carousel` component.

For each image, use the `src` attribute to specify the path to the image.
Optionally use `header` and `description` attributes to provide a header
and descriptive text that the carousel displays below the image.
You can also hyperlink the images with the `href` attribute.

Use the `alternative-text` attribute to supply assistive text for each image.

This component inherits styling from
[carousel](https://www.lightningdesignsystem.com/components/carousel) in the
Lightning Design System.

This example creates a basic carousel with three images.

```html
<template>
...

**Examples:**


---
