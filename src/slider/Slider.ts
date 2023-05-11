import templateContent from "./Slider.html?raw";
import { FormComponent } from "../core";

const template = document.createElement("template");

template.innerHTML = templateContent;

const calculateProgress = (min: number, max: number, value: number) => {
  return ((value - min) / (max - min)) * 100;
};

const getProgressGradient = (progress: number) => {
  return `linear-gradient(to right, var(--active-background) ${progress}%, var(--inactive-background) ${progress}%)`;
};

export class Slider extends FormComponent {
  static formAssociated = true;

  constructor() {
    super(template);

    const attrValue = this.getAttribute("value");
    const initialValue = Number(attrValue);
    const sliderValue =
      attrValue !== null && typeof initialValue === "number"
        ? initialValue
        : (this.max - this.min) / 2 + this.min;

    const progress = calculateProgress(this.min, this.max, sliderValue);

    this.inputNode.setAttribute("min", this.min.toString());
    this.inputNode.setAttribute("max", this.max.toString());
    this.inputNode.setAttribute("value", sliderValue.toString());
    this.inputNode.style.background = getProgressGradient(progress);
    const tooltip = this.root.querySelector("#tooltip") as HTMLDivElement;
    tooltip.style.left = `${progress}%`;
    tooltip.textContent = sliderValue.toString();
  }

  static get observedAttributes() {
    return ["label", "disabled", "readonly", "variant", "min", "max", "step"];
  }

  updateProgress = (event: Event) => {
    if (this.readonly) {
      return;
    }
    const target = event.target as HTMLInputElement;
    const sliderValue = Number(target.value);

    const progress = calculateProgress(this.min, this.max, sliderValue);
    this.inputNode.style.background = getProgressGradient(progress);
    const tooltip = this.root.querySelector("#tooltip") as HTMLDivElement;
    tooltip.style.left = `${progress}%`;
    tooltip.textContent = sliderValue.toString();
  };

  get min() {
    const attrValue = this.getAttribute("min");
    const minValue = Number(attrValue);
    return attrValue !== null && typeof minValue === "number" ? minValue : 0;
  }

  get max() {
    const attrValue = this.getAttribute("max");
    const maxValue = Number(attrValue);
    return attrValue !== null && typeof maxValue === "number" ? maxValue : 100;
  }
  connectedCallback(): void {
    super.connectedCallback();
    this.inputNode.addEventListener("input", this.updateProgress);
  }

  disconnectedCallback(): void {
    this.inputNode.removeEventListener("input", this.updateProgress);
  }

  update() {
    super.update();
    if (this.name) {
      this.labelNode.setAttribute("for", this.name);
      this.inputNode.setAttribute("name", this.name);
    }
    this.labelNode.textContent = this.label;
    this.forwardAttribute("step", this.inputNode);
    this.inputNode.setAttribute("min", this.min.toString());
    this.inputNode.setAttribute("max", this.max.toString());
    this.forwardAttribute("disabled", this.inputNode);
    this.forwardAttribute("variant", this.inputNode);
    const [minNode, maxNode] = this.root.querySelectorAll("span");
    minNode.textContent = this.min.toString();
    maxNode.textContent = this.max.toString();
  }
}
