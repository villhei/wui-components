import templateContent from "bundle-text:./input.html";
import { WUIBase } from "../core";

const template = document.createElement("template");

template.innerHTML = templateContent;

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
    return ["class", "label", "name"];
  }

  get label() {
    return this.getAttribute("label");
  }

  get name() {
    return this.getAttribute("name");
  }

  get placeholder() {
    return this.getAttribute("placeholder");
  }

  get classes() {
    return this.getAttribute("class")?.split(",") || [];
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
  }
}
