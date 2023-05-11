import templateContent from "./Anchor.html?raw";
import { BaseComponent } from "../core";

const template = document.createElement("template");
template.innerHTML = templateContent;

export class Anchor extends BaseComponent {
  constructor() {
    super(template);
    this.anchorNode = this.root.querySelector("a")!;
  }

  anchorNode: HTMLAnchorElement;

  static get observedAttributes() {
    return ["href"];
  }

  update() {
    this.forwardAttribute("href", this.anchorNode);
  }
}
