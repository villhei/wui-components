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
    this.messageNode = this.root.querySelector("#message")!;

    this.update();
  }

  inputNode: HTMLInputElement;
  labelNode: HTMLLabelElement;
  messageNode: HTMLElement;

  static get observedAttributes() {
    return ["class", "label", "name", "disabled", "value", "type", "message"];
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

  get value() {
    return this.getAttribute("value") || "";
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
