# `lightning/modal` (LightningModal)

Create a modal window over the current app by extending `LightningModal`.  
Use modals for focused, interruptive workflows where users must complete or dismiss a task.

## For Use In

- Lightning Experience
- Standalone Lightning App

## Core Model

`lightning/modal` provides a **base class**, not a tag.

- There is no `<lightning-modal>` component.
- Build your modal by extending `LightningModal`.
- Compose UI with helper components:
  - `<lightning-modal-header>` (optional)
  - `<lightning-modal-body>` (**required**)
  - `<lightning-modal-footer>` (optional)

Modals follow the SLDS modal blueprint behavior and lifecycle.

## Minimal Build Pattern

### Modal component

```js
// c/myModal.js
import { api } from "lwc";
import LightningModal from "lightning/modal";

export default class MyModal extends LightningModal {
  @api content;

  handleOkay() {
    this.close("okay");
  }
}
```

```html
<!-- c/myModal.html -->
<template>
  <lightning-modal-header label="My Modal Heading"></lightning-modal-header>
  <lightning-modal-body>Content: {content}</lightning-modal-body>
  <lightning-modal-footer>
    <lightning-button label="OK" onclick={handleOkay}></lightning-button>
  </lightning-modal-footer>
</template>
```

### Invoking component

```js
// c/myApp.js
import { LightningElement } from "lwc";
import MyModal from "c/myModal";

export default class MyApp extends LightningElement {
  async handleClick() {
    const result = await MyModal.open({
      size: "large",
      description: "My Modal Heading - choose an option",
      content: "Passed into content api"
    });
    // result is "okay" or undefined
    console.log(result);
  }
}
```

## Open, Instance Lifecycle, and Data

Each `MyModal.open()` call creates a unique instance.

- State does not persist across opens.
- Closing destroys the instance (not hidden).
- Return values using `this.close(result)`.
- Persist or pass data before closing, otherwise instance data is lost.

### Open options

| Property | Required | Type | Default | Notes |
|---|---|---|---|---|
| `label` | Yes* | `string` | - | Accessible modal title. |
| `size` | No | `small \| medium \| large \| full` | `medium` | Width variant; cannot change after open. |
| `description` | No | `string` | - | Accessible description; begin with label text for SR compatibility. |
| `disableClose` | No | `boolean` | `false` | Temporarily blocks Esc, X, and close methods. |

\*If no modal header is used, set `label` in `open({ label })`.

### Closing behavior

- `this.close(value)` resolves the caller promise with `value`.
- Closing with X resolves `undefined`.
- Close is asynchronous to allow fade-out animation.
- Result payload should be considered immutable after close starts.

## Passing Custom Data Into the Modal

Define `@api` properties on the modal and provide values in `open()`.

```js
// parent
MyModal.open({
  options: [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" }
  ]
});
```

```js
// modal
@api options = [];
```

And return selected data via `this.close(...)`:

```js
handleOptionClick(event) {
  const { id } = event.target.dataset;
  this.close(id);
}
```

## `disableClose` (Important Guardrail)

Use `disableClose` as a **temporary** safety control during critical async actions (for example, save/submit).

- Keep it brief (preferably under 5 seconds).
- Re-enable closing on recoverable failures.
- Disable actions/buttons that would call close while blocked.
- Avoid keyboard trap behavior.

Pseudo-pattern:

```js
async handleSaveClick() {
  this.disableClose = true;
  try {
    await saveData();
    this.close("success");
  } catch (e) {
    this.disableClose = false;
    showError(e);
  }
}
```

## Events from Inside a Modal

Because modal internals render through a container boundary, event handling differs from normal parent-child bubbling.

Preferred pattern: pass handlers in `open()`.

```js
MyModal.open({
  onselect: (e) => {
    e.stopPropagation();
    this.handleSelectEvent(e.detail);
  }
});
```

Inside modal:

```js
this.dispatchEvent(
  new CustomEvent("select", { detail: { id, value } })
);
```

### LWS vs Lightning Locker

- With **Lightning Web Security (LWS)**: modal event patterns work as expected.
- In older **Lightning Locker** contexts: dispatch behavior can fail in some orgs; workaround can require dispatching from a child component extending `LightningElement`.

## Aura Interop Notes

For Aura parents, the top-level LWC that opens the modal should handle event/data coordination.

Recommended paths:

1. Return data on close (`this.close({ data })`) and process in `.then(result => ...)`.
2. Pass callback handlers in `open({ onmyevent })` for continuous communication.

If modal child components emit events, bubble/process to the topmost LWC opener, then relay to Aura as needed.

## Styling in Native Shadow

In Native Shadow, external styles do not bleed into modal internals.

- Import only the SLDS bundles you need.
- Avoid unnecessary imports to reduce CSS cost.

Common imports:

```css
@import "lightning/sldsCommon";
@import "lightning/sldsFormElementUtils";
@import "lightning/sldsUtilsSizing";
```

## Variants and Layout Notes

- Header/footer are optional.
- Headerless variant requires explicit `label` in `open()`.
- Headerless content should include an `<h1>` in body for structure.
- `size="full"` behaves as mobile fullscreen and desktop large-like behavior.
- Directional footer button layout can use `slds-modal__footer_directional` inside footer.

Example:

```html
<lightning-modal-footer>
  <div class="slds-modal__footer_directional">
    <lightning-button label="No" onclick={handleNo}></lightning-button>
    <lightning-button label="OK" onclick={handleOkay}></lightning-button>
  </div>
</lightning-modal-footer>
```

## Styling Hooks

`lightning-modal-*` helper components support styling hooks.  
When styling, scope hook usage to each helper component as needed.

Note: component styling hooks (`--slds-c-*`) are SLDS 1 focused.

## Accessibility Checklist

- Provide a meaningful `label` for all modal variants.
- Always include `<lightning-modal-body>`.
- If header exists, additional headings should start at `<h2>`.
- If headerless, include an `<h1>` in modal body.
- Include a useful `description` where appropriate.
- Avoid trapping keyboard users with prolonged `disableClose`.

## Testing Guidance

Test in two layers:

1. Parent opener behavior (often mock `MyModal.open()`).
2. Modal component internals (UI, close values, event wiring).

Example parent mock:

```js
import MyModal from "c/myModal";
jest.mock("c/myModal");
MyModal.open = jest.fn().mockResolvedValue("option1");
```

Useful LightningModal test selectors/stubs:

- `element.modalHeader$()` / `element.modalHeader$$()`
- `element.modalBody$()` / `element.modalBody$$()`
- `element.modalFooter$()` / `element.modalFooter$$()`
- `element.closeValue`

## API Summary

### Methods

| Name | Signature | Description |
|---|---|---|
| `close` | `close(result?: any)` | Closes modal and resolves caller promise with optional result. |

### Related Components

- `lightning-modal-header`
- `lightning-modal-body`
- `lightning-modal-footer`
