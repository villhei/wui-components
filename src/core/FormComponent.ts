import { BaseComponent } from "./BaseComponent";

export class FormComponent extends BaseComponent {
  static formAssociated = true;

  constructor(template: HTMLTemplateElement) {
    super(template);
    this.internals = this.attachInternals();
    this._value = "";
    this.inputNode = this.root.querySelector("input")!;
    this.labelNode = this.root.querySelector("label")!;
    this.messageNode = this.root.querySelector("#message");
    this._readonly = this.getBoolean("readonly");
  }
  internals: ElementInternals;
  inputNode: HTMLInputElement;
  labelNode: HTMLLabelElement;
  messageNode: HTMLElement | null;

  private _value: string;
  private _readonly: boolean;

  handleInputEvent = (event: Event) => {
    if (this.readonly) {
      this.inputNode.value = this.getAttribute("value") || "";
    } else {
      const clone = new Event(event.type, event);
      this.value = this.inputNode.value;

      this.dispatchEvent(clone);
    }
  };

  get readonly() {
    return this._readonly;
  }
  checkProperties() {
    if (this.name === null) {
      throw new Error(
        `The name attribute for element ${
          this.localName || "FormComponent"
        } must be set with [name="MyName"]`
      );
    }
  }

  connectedCallback() {
    this.checkProperties();
    const initialValue = this.getAttribute("value");
    if (initialValue !== null) {
      this.inputNode.setAttribute("value", initialValue);
    }
    this.inputNode.addEventListener("change", this.handleInputEvent);
  }

  disconnectedCallback() {
    this.inputNode.removeEventListener("change", this.handleInputEvent);
  }

  get label() {
    return this.getAttribute("label");
  }

  get name() {
    return this.getAttribute("name");
  }

  set value(value) {
    this._value = value;
    this.inputNode.value = value;
    if (this.internals) {
      this.internals.setFormValue(value);
    }
  }

  get message() {
    return this.getAttribute("message");
  }

  get value() {
    return this._value;
  }

  update() {
    super.update();

    if (this.message && this.messageNode) {
      this.messageNode.textContent = this.message;
    } else if (this.messageNode) {
      this.messageNode.textContent = "";
    }
  }
}
