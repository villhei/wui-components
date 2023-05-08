import { ColorKeyword, WUIBase, colorKeywords } from "../core";
import { templateMap } from "./templates";

export class Typography extends WUIBase {
  constructor(tagName: string) {
    super(templateMap[tagName]);
    this.tag = this.root.querySelector(tagName)!;
  }

  tag: HTMLHeadingElement;

  static get observedAttributes() {
    return ["underline", "color"];
  }

  get underline() {
    return this.getAttribute("underline") === "";
  }

  get color() {
    return this.getAttribute("color");
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
    if (this.color) {
      const colorValue = this.color;
      const color = colorKeywords.includes(colorValue as ColorKeyword)
        ? `var(--${colorValue}-color)`
        : colorValue;
      this.tag.style.setProperty("--font-color", color);
    }
  }
}
