import templateContent from "bundle-text:./button.html";
import { WUIBase } from "../core";

const template = document.createElement("template");

template.innerHTML = templateContent;

export class Button extends WUIBase {
  constructor() {
    super(template);
    this.button = this.root.querySelector("button")!;
    this.listeners = [];
    this.hasIcon = false;
  }

  hasIcon: boolean;
  button: HTMLButtonElement;
  listeners: (() => void)[];

  static get observedAttributes() {
    return ["label", "disabled", "variant"];
  }

  get label() {
    return this.getAttribute("label") || "Default label";
  }

  set label(value: string) {
    this.setAttribute("label", value);
  }

  get disabled() {
    return this.getAttribute("disabled") === "";
  }

  get variant() {
    return this.getAttribute("variant")?.toLowerCase();
  }

  connectedCallback() {
    const slots = this.root.querySelectorAll<HTMLSlotElement>("slot");
    this.listeners = [...slots].map((slot) => {
      const listener = (evt: Event) => {
        const nodes = slot.assignedNodes();
        this.hasIcon = nodes.length > 0;
        this.update();
      };
      slot.addEventListener("slotchange", listener);
      return () => slot.removeEventListener("slotchange", listener);
    });
  }
  disconnectedCallback() {
    this.listeners.forEach((removeFunc) => removeFunc());
  }

  update() {
    if (this.variant) {
      this.button.setAttribute("variant", this.variant);
      this.button.style.setProperty(
        "--button-background-h",
        `var(--${this.variant}-color-h)`
      );
      this.button.style.setProperty(
        "--button-background-s",
        `var(--${this.variant}-color-s)`
      );
      this.button.style.setProperty(
        "--button-background-l",
        `var(--${this.variant}-color-l)`
      );
    }
    this.button.querySelector(".label")!.innerHTML = this.label;
    if (this.disabled) {
      this.button.setAttribute("disabled", "");
    } else {
      this.button.removeAttribute("disabled");
    }
    this.button.style.setProperty(
      "--button-horizontal-padding",
      this.hasIcon
        ? "var(--button-horizontal-padding-with-icon)"
        : "var(--button-horizontal-padding-without-icon)"
    );
  }
}
