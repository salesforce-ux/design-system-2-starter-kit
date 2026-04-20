# lightning-media-utils

**What is it?**  
This component provides utility functions for processing media files, allowing developers to resize, compress, and modify images according to specified parameters, enhancing the user's experience by optimizing image uploads and reducing bandwidth usage.

**Where would you use it?**
- Imagine you're a photographer who wants to upload a batch of high-resolution photos to a website for your clients to view. However, you're concerned about the large file sizes of your photos and the potential for slow upload and download speeds. The <lightning-media-utils> component can be used to automatically resize and compress your photos before they're uploaded, ensuring a smoother and faster experience for both you and your clients.
- You're a graphic designer who needs to upload a series of images to a web-based portfolio. Some of these images have different dimensions and you want them all to appear uniform on your portfolio page. The <lightning-media-utils> component can be used to resize all your images to a specific width and height, ensuring they all fit perfectly within your portfolio layout.
- You're a blogger who frequently uses GIFs in your posts. However, you've noticed that the transparency in some of your GIFs is not preserved when you upload them, causing them to have an unsightly white background. The <lightning-media-utils> component can be used to preserve the transparency in your GIFs, ensuring they look exactly as you intended when you upload them to your blog.

**How do you use it?**


**Related Components:**
- **lightning-input** (optional)

**Docs:**
The `mediaUtils` library contains utility functions that can be used by an LWC developer to process media files. The following functions are contained in the `mediaUtils` library:

## processImage

You can use `processImage` function to resize and compress image files. To use this function, simply import it in your LWC first:
```
import { processImage } from 'lightning/mediaUtils';
```

You can then call this function by passing in an input image and a set of options to be used to process the input image, as further described below. It will return a promise that will resolve to a `Blob` object containing the output image data.

#### Parameters

* `input`: Defines the input image, which can either be a `File` or `Blob` object
* `options`: An object that defines the options to be used when processing the input image. It is an optional parameter containing a number of flags. If this parameter or any of its flags are omitted, default values will be used as further described below.
    * `resizeMode`: A string that determines how the image will be resized. It can contain one of the below values
        * `fill`: This is default. The image will be resized to fill the target dimension. If necessary, the image will be stretched or squished to fit.
        * `contain`: The image keeps its aspect ratio but will be resized to fit within the target dimension.
        * `none`: The image will not be resized and will retain its original dimension.
    * `resizeStrategy`: A string that determines how to resize the image. If `resizeMode` is set to `none` this flag will be ignored.
...

**Examples:**


---
