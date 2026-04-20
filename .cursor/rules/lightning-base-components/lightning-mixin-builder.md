# lightning-mixin-builder

**What is it?**  
This component is a mixin builder that allows for the combination of multiple classes or functionalities into a single class, enhancing the user experience by providing more precise and detailed information.

**Where would you use it?**
- Imagine you're using a social media app and you want to check in at a location. The <lightning-mixin-builder> component could be used to provide your exact location, like '50 Fremont San Francisco, CA 94105', and post it on your profile.
- Suppose you're using a ride-hailing app and you want to book a ride. The <lightning-mixin-builder> component could be used to automatically detect your current location and fill it in the 'Pickup Location' field, saving you the trouble of typing it in manually.
- Consider a scenario where you're using a food delivery app and you want to order food. The <lightning-mixin-builder> component could be used to automatically detect your current location and show you restaurants that deliver to your area.

**How do you use it?**


**Related Components:**


**Docs:**
# Usage

```javascript
import { LightningElement, api } from 'lwc';
import mix from 'lightning/mixinBuilder';

const IphoneX = (superclass) =>
    class extends superclass {
        getCurrentLocation() {
            return '50 Fremont San Francisco, CA 94105';
        }
    };

const Logger = (superclass) =>
    class extends superclass {
        log(...args) {
            console.log(...args);
        }
    };

...

**Examples:**


---
