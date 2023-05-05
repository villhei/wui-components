import { WUIBase } from "../core";
import { templateMap } from "./templates";

export class Typography extends WUIBase {
  constructor(tagName: string) {
    super(templateMap[tagName]);
    this.tag = this.root.querySelector(tagName)!;
  }

  tag: HTMLHeadingElement;

  static get observedAttributes() {
    return ["underline"];
  }

  get underline() {
    return this.getAttribute("underline") === "";
  }

  update() {
    if (this.underline) {
      this.tag.style.setProperty(
        "--border-width",
        "var(--border-width-underline)"
      );
      this.tag.style.setProperty(
        "--padding-bottom",
        "var(--border-width-underline)"
      );
    } else {
      this.tag.style.setProperty("--border-width", "0");
    }
  }
}
