import templateContent from "./Input.html?raw";
import { FormComponent } from "../core";

const template = document.createElement("template");

template.innerHTML = templateContent;

const variants = ["success", "warning", "error"];

export class Input extends FormComponent {
  constructor() {
    super(template);
  }

  static get observedAttributes() {
    return [
      "class",
      "label",
      "name",
      "disabled",
      "type",
      "message",
      "readonly",
    ];
  }

  get classes() {
    return this.getAttribute("class")?.split(",") || [];
  }

  get type() {
    return this.localName;
  }

  update() {
    super.update();
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
    this.forwardAttribute("readonly", this.inputNode);

    this.forwardAttribute("type", this.inputNode);
    this.forwardAttribute("variant", this.inputNode);
  }
}
