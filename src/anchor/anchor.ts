import templateContent from "bundle-text:./anchor.html";
import { WUIBase } from "../core";

const template = document.createElement("template");
template.innerHTML = templateContent;

export class Anchor extends WUIBase {
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
