# lightning-file-download

**What is it?**  
This component allows users to download files from Experience Cloud sites using a generated URL, providing an interactive experience through a download button.

**Where would you use it?**
- Imagine you're a student using an online learning platform. You've just finished a lecture and want to download the lecture notes provided by your professor. The <lightning-file-download> component could be used here to allow you to download these notes directly from the platform.
- Consider a scenario where you're a customer browsing an online store. You're interested in a particular product and want to download its user manual to understand more about it. The <lightning-file-download> component could be used to facilitate this download directly from the product page.
- Suppose you're a job applicant on a recruitment website. You've just completed an online assessment and want to download your results for future reference. The <lightning-file-download> component could be used here to allow you to download your assessment results.
- Imagine you're a researcher using a scientific database. You've found a research paper that is relevant to your work and want to download it for further reading. The <lightning-file-download> component could be used to enable this download.
- Consider a scenario where you're a user of a cloud storage service. You've been shared a file and want to download it to your local storage. The <lightning-file-download> component could be used here to facilitate this download directly from the cloud storage interface.
- Suppose you're a member of a book club using an online platform. You've just been shared a new book to read for the next meeting and want to download it. The <lightning-file-download> component could be used here to allow you to download the book directly from the platform.

**How do you use it?**


**Related Components:**
- **lightning-input** (required)
- **lightning-button** (required)

**Docs:**
Add file downloads to Experience Cloud sites that use the Build Your Own (LWR) template.

To create a component that downloads a file, import `generateUrl` from `lightning/fileDownload`. Use the `generateUrl` function and pass in the record ID number of the files that you want to download. This function supports Content Document, Content Version, Attachment, or Document record IDs.

This example returns a download URL that you can pass into `window.open` to download the file.

```javascript
import { generateUrl } from 'lightning/fileDownload';
const url = generateUrl(recordId);
window.open(url);
```

In this example, clicking a download button on a record generates a URL and uses it to download the record's files.

```HTML
<template>
  <div>
      <lightning-input type="text" label="File download for the record" value={recordId}></lightning-input>
      <lightning-button label="Download" onclick={handleClick} class="slds-m-left_x-small"></lightning-button>
  </div>
...

**Examples:**


---
