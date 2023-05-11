import { typeSizes } from "./constants";
import { Typography } from "./typography";

export class Paragraph extends Typography {
  constructor() {
    super("p");
    this.pNode = this.root.querySelector("p")!;
  }

  pNode: HTMLParagraphElement;

  get small() {
    return this.getBoolean("small");
  }
  static get observedAttributes() {
    return ["small"];
  }

  update() {
    super.update();
    if (this.small) {
      this.pNode.style.setProperty("--font-size", `${typeSizes.small}rem`);
    } else {
      this.pNode.style.setProperty("--font-size", `${typeSizes.paragraph}rem`);
    }
  }
}
