import templateContent from "./Checkbox.html?raw";
import { FormComponent } from "../core";

const template = document.createElement("template");
template.innerHTML = templateContent;

export class Checkbox extends FormComponent {
  static formAssociated = true;

  constructor() {
    super(template);
    this.checkboxNode = this.root.querySelector("input")!;
  }

  checkboxNode: HTMLInputElement;

  static get observedAttributes() {
    return ["checked", "disabled"];
  }

  get checked() {
    return this.getBoolean("checked");
  }

  handleInputEvent = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.checked.toString();
    const clone = new Event(event.type, event);
    this.dispatchEvent(clone);
  };

  connectedCallback() {
    super.connectedCallback();
    this.checkboxNode.addEventListener("change", this.handleInputEvent);
  }

  disconnectedCallback() {
    this.checkboxNode.removeEventListener("change", this.handleInputEvent);
  }

  update() {
    super.update();
    if (this.name) {
      this.checkboxNode.setAttribute("name", this.name);
    }
    this.checkboxNode.checked = this.checked;
    this.forwardAttribute("disabled", this.checkboxNode);
  }
}
