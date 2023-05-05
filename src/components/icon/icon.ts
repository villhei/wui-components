import templateContent from "bundle-text:./icon.html";
import { WUIBase } from "../core";

const template = document.createElement("template");

template.innerHTML = templateContent;

export class Icon extends WUIBase {
  constructor() {
    super(template);

    this.iconContainer = this.root.querySelector("span")!;

    const inheritedColor =
      getComputedStyle(this).getPropertyValue("--icon-color");
    this.iconContainer.style.setProperty("--icon-color", inheritedColor);

    const inheritedFontSize = getComputedStyle(this).fontSize;
    this.iconContainer.style.setProperty("--font-size-base", inheritedFontSize);
  }

  iconContainer: HTMLSpanElement;

  static get observedAttributes() {
    return ["grayscale", "greyscale"];
  }

  get greyscale() {
    return (
      this.getAttribute("grayscale") === "" ||
      this.getAttribute("greyscale") === ""
    );
  }

  attributeChangedCallback() {
    this.iconContainer.style.setProperty(
      "--grayscale-percentage",
      this.greyscale ? "100%" : "0%"
    );
  }
}
