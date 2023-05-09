import templateContent from "./slider.html?raw";
import { WUIBase } from "../core";

const template = document.createElement("template");

template.innerHTML = templateContent;

const variants = ["success", "warning", "error"];

export class Slider extends WUIBase {
  static formAssociated = true;

  constructor() {
    super(template);
    this.inputNode = this.root.querySelector("input")!;
    this.labelNode = this.root.querySelector("label")!;
    this.messageNode = this.root.querySelector("#message")!;
    this.internals = this.attachInternals();
    this.update();
    this._value = "";
  }

  private _value: string;
  internals: ElementInternals;
  inputNode: HTMLInputElement;
  labelNode: HTMLLabelElement;
  messageNode: HTMLElement;

  static get observedAttributes() {
    return ["class", "label", "name", "disabled", "value", "type", "message"];
  }

  handleInputEvent = (event: Event) => {
    const clone = new Event(event.type, event);
    this.value = this.inputNode.value;

    this.dispatchEvent(clone);
  };

  connectedCallback() {
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

  get disabled() {
    return this.getBoolean("disabled");
  }

  get placeholder() {
    return this.getAttribute("placeholder");
  }

  get classes() {
    return this.getAttribute("class")?.split(",") || [];
  }

  set value(value) {
    this._value = value;
    this.inputNode.value = value;
    if (this.internals) {
      this.internals.setFormValue(value);
    }
  }

  get value() {
    return this._value;
  }

  get type() {
    return this.getAttribute("type") || "text";
  }

  get variant() {
    return this.getAttribute("variant") || "default";
  }

  get message() {
    return this.getAttribute("message");
  }

  update() {
    this.classes.forEach((className) =>
      this.inputNode.classList.add(className)
    );
    this.labelNode.textContent = this.label;
    if (this.name) {
      this.labelNode.setAttribute("for", this.name);
      this.inputNode.setAttribute("name", this.name);
    }
    this.forwardAttribute("placeholder", this.inputNode);
    this.forwardAttribute("disabled", this.inputNode);
    this.forwardAttribute("type", this.inputNode);
    this.forwardAttribute("variant", this.inputNode);

    if (this.message) {
      this.messageNode.textContent = this.message;
    } else {
      this.messageNode.textContent = "";
    }
  }
}
