import templateContent from "./Flex.html?raw";
import { BaseComponent } from "../core";

const template = document.createElement("template");

template.innerHTML = templateContent;

export class Flex extends BaseComponent {
  constructor() {
    super(template);
    this.update();
  }

  static get observedAttributes() {
    return ["raised", "inline", "direction", "wrap", "position"];
  }

  get inline() {
    return this.getBoolean("inline");
  }

  get raised() {
    return this.getBoolean("raised");
  }

  get direction() {
    return this.getAttribute("direction") || "row";
  }

  get wrap() {
    return this.getAttribute("wrap") || "nowrap";
  }

  get position() {
    return this.getAttribute("position");
  }

  update() {
    if (this.inline) {
      this.style.setProperty("--flex-display", "inline-flex");
    } else {
      this.style.setProperty("--flex-display", "flex");
    }

    this.style.setProperty("--flex-direction", this.direction);
    this.style.setProperty("--flex-wrap", this.wrap);
    this.style.setProperty("--position", this.position);

    if (this.raised) {
      this.classList.add("__wui-raised");
    } else {
      this.classList.remove("__wui-raised");
    }
  }
}
