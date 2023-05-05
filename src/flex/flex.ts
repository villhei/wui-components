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
    return ["class", "raised", "inline", "direction"];
  }

  get inline() {
    return this.getAttribute("inline") === "";
  }

  get raised() {
    return this.getAttribute("raised") === "";
  }

  get classes() {
    return this.getAttribute("class")?.split(",") || [];
  }

  get direction() {
    return this.getAttribute("direction") || "row";
  }

  update() {
    this.rootNode.style.setProperty("--flex-direction", this.direction);
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
