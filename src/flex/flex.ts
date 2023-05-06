import templateContent from "bundle-text:./flex.html";
import { WUIBase } from "../core";

const template = document.createElement("template");

template.innerHTML = templateContent;

export class Flex extends WUIBase {
  constructor() {
    super(template);
    this.rootNode = this.root.querySelector("div")!;
    this.update();
  }

  rootNode: HTMLDivElement;
  static get observedAttributes() {
    return ["class", "raised", "inline", "direction", "wrap"];
  }

  get inline() {
    return this.getBoolean("inline");
  }

  get raised() {
    return this.getBoolean("raised");
  }

  get classes() {
    return this.getAttribute("class")?.split(",") || [];
  }

  get direction() {
    return this.getAttribute("direction") || "row";
  }

  get wrap() {
    return this.getAttribute("wrap") || "nowrap";
  }

  update() {
    this.rootNode.style.setProperty("--flex-direction", this.direction);
    this.rootNode.style.setProperty("--flex-wrap", this.wrap);

    if (this.raised) {
      this.rootNode.classList.add("raised");
    } else {
      this.rootNode.classList.remove("raised");
    }
    if (this.inline) {
      this.rootNode.classList.add("inline-flex");
      this.rootNode.classList.remove("flex");
    } else {
      this.rootNode.classList.remove("inline-flex");
      this.rootNode.classList.add("flex");
    }

    this.classes.forEach((className) => this.rootNode.classList.add(className));
  }
}
