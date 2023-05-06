import templateContent from "bundle-text:./input.html";
import { WUIBase } from "../core";

const template = document.createElement("template");

template.innerHTML = templateContent;

const variants = ["success", "warning", "error"];
export class Input extends WUIBase {
  constructor() {
    super(template);
    this.inputNode = this.root.querySelector("input")!;
    this.labelNode = this.root.querySelector("label")!;

    this.update();
  }

  inputNode: HTMLInputElement;
  labelNode: HTMLLabelElement;

  static get observedAttributes() {
    return ["class", "label", "name", "disabled", "value", "type"];
  }

  get label() {
    return this.getAttribute("label");
  }

  get name() {
    return this.getAttribute("name");
  }

  get disabled() {
    return this.getAttribute("disabled") === "";
  }

  get placeholder() {
    return this.getAttribute("placeholder");
  }

  get classes() {
    return this.getAttribute("class")?.split(",") || [];
  }

  get value() {
    return this.getAttribute("value") || "";
  }

  get type() {
    return this.getAttribute("type") || "text";
  }

  get variant() {
    return this.getAttribute("variant") || "default";
  }

  connectedCallback() {
    if (this.value) {
      this.inputNode.setAttribute("value", this.value);
    }
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
    if (this.placeholder) {
      this.inputNode.setAttribute("placeholder", this.placeholder);
    } else {
      this.inputNode.removeAttribute("placeholder");
    }

    if (this.disabled) {
      this.inputNode.setAttribute("disabled", "");
    } else {
      this.inputNode.removeAttribute("disabled");
    }
    this.inputNode.setAttribute("type", this.type);
    if (variants.includes(this.variant)) {
      this.inputNode.setAttribute("variant", this.variant);
    } else {
      this.inputNode.removeAttribute("variant");
    }
  }
}
